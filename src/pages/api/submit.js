import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const EMAIL_TO = process.env.EMAIL_TO || 'enquiry@we2tech.pro';
const SMTP_HOST = process.env.SMTP_HOST || (process.env.SMTP_USER ? 'smtp.gmail.com' : '');
const SMTP_PORT = process.env.SMTP_PORT || '465';
const EMAIL_FROM = process.env.EMAIL_FROM || process.env.SMTP_USER || EMAIL_TO;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { name, email, phone, company, projectType, message } = req.body || {};

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !SMTP_HOST) {
    console.error('SMTP not configured (SMTP_USER, SMTP_PASS, SMTP_HOST)');
    return res.status(500).json({ err: 'Email service not configured' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 465,
      secure: (SMTP_PORT || '465') === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name || 'Website Enquiry'}" <${EMAIL_FROM}>`,
      to: EMAIL_TO,
      replyTo: email || EMAIL_FROM,
      subject: `Website enquiry from ${name || 'visitor'}`,
      text: [
        `Name: ${name || '-'}`,
        `Company: ${company || '-'}`,
        `Email: ${email || '-'}`,
        `Phone / WhatsApp: ${phone || '-'}`,
        `Project type: ${projectType || '-'}`,
        '',
        'Message:',
        message || '-',
      ].join('\n'),
    });

    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
        },
        scopes: [
          'https://www.googleapis.com/auth/drive',
          'https://www.googleapis.com/auth/drive.file',
          'https://www.googleapis.com/auth/spreadsheets'
        ]
      });

      const sheets = google.sheets({
        auth,
        version: 'v4'
      });

      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'A1:F1',
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: [
            [
              name,
              email,
              phone,
              company,
              projectType,
              message
            ]
          ]
        },
      });
    } catch (sheetErr) {
      console.error('Sheets append failed', sheetErr);
    }

    return res.json({ ok: true });
  } catch (err) {
    console.error('Email send failed', err);
    return res.status(500).json({ err: err.message || 'Send failed' });
  }
}
