import { google } from "googleapis";

export default async function handler(
  req, res
) {
  if (req.method !== 'POST') {
    return res.json({ message: 'Only POST requests allowed' })
  };

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

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A1:D1',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [
          [req.body.name, req.body.email, req.body.phone, req.body.message]
        ]
      },
    });
    return res.json({
      data: response
    });
  } catch (err) {
    return res.json({ err })
  };
};
