import type { NextPage } from 'next'
import { FormEvent, useState } from "react";
import {
  Box,
  Container,
  Button,
  Text
} from 'theme-ui';
import SectionHeader from '../components/section-header';
import Reveal from '../components/reveal';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const projectTypes = [
  'Mobile App',
  'Web App',
  'UI/UX Design',
  'Server Deployment',
  'Maintenance',
  'MVP / POC',
  'Other',
];

const useCases = [
  'Scope a new system',
  'Review a stuck project',
  'Plan an MVP / POC',
  'Assess existing app work',
];

const steps = [
  {
    step: '1',
    title: 'Share context',
    text: 'Tell us about your business goal, current workflow and target users.',
  },
  {
    step: '2',
    title: 'Identify constraints',
    text: 'We review the business and technical limits that shape the project.',
  },
  {
    step: '3',
    title: 'Discuss feasible scope',
    text: 'We propose a practical scope, approach and phasing for the build.',
  },
  {
    step: '4',
    title: 'Define the next step',
    text: 'You leave with a clear recommendation and a decision path.',
  },
];

const faqs = [
  {
    q: 'What should I prepare before contacting we2Tech?',
    a: 'Share your business goal, current workflow, target users, existing systems, timeline and any known constraints.',
  },
  {
    q: 'Can you advise before a full project is confirmed?',
    a: 'Yes. We can help clarify feasibility, project shape, risk, budget range and phased delivery options before implementation.',
  },
  {
    q: 'Which topics can be discussed?',
    a: 'Mobile and web apps, UI/UX design, server deployment, cloud hosting, maintenance and project rescue.',
  },
];

const ContactUs: NextPage = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Name is required';
    if (!email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Invalid email format';
    }
    if (!message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    const form = {
      name,
      company,
      email,
      phone,
      projectType: selectedTypes.join(', '),
      message,
    };

    try {
      const rawResponse = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (!rawResponse.ok) throw new Error('Server error');

      setStatus('success');
      setName('');
      setCompany('');
      setEmail('');
      setPhone('');
      setMessage('');
      setSelectedTypes([]);
    } catch {
      setStatus('error');
      setErrorMsg('Submission failed. Please try again or email us directly.');
    }
  };

  return (
    <section id="contactUs" sx={styles.section}>
      <Container>
        <SectionHeader
          eyebrow="Book a Consultation"
          title="Tell us what system, workflow or operating issue you want to improve"
          slogan="We will review the current stage, technical direction, risks, timeline and practical next step — free of charge."
          icColor={true} />
        <Reveal>
          <Box sx={styles.container}>
            <Box sx={styles.infoCol}>
              <Box sx={styles.infoCard}>
                <Text sx={styles.infoTitle}>Talk to your technology partner</Text>
                <Text sx={styles.infoText}>
                  Share the business stage, pressure and outcome you are aiming for.
                  We will consider the technology need together with customer
                  experience, market context and operations.
                </Text>
                <Box sx={styles.contactRow}>
                  <FaWhatsapp />
                  <a href="https://wa.me/85253968435" target="_blank" rel="noopener noreferrer">
                    WhatsApp / Phone: (852) 5396 8435
                  </a>
                </Box>
                <Box sx={styles.contactRow}>
                  <FaEnvelope />
                  <a href="mailto:enquiry@we-2-tech.com">enquiry@we-2-tech.com</a>
                </Box>
              </Box>
              <Box sx={styles.stepsCard}>
                <Text sx={styles.stepsTitle}>How we work</Text>
                {steps.map((item) => (
                  <Box sx={styles.step} key={item.step}>
                    <Box sx={styles.stepBadge}>{item.step}</Box>
                    <Box>
                      <Text sx={styles.stepTitle}>{item.title}</Text>
                      <Text sx={styles.stepText}>{item.text}</Text>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={styles.formCol}>
              <form onSubmit={handleSubmit} sx={styles.form}>
                <Box sx={styles.fieldGrid}>
                  <div>
                    <input
                      value={name}
                      onChange={e => setName(e.target.value)}
                      type="text" name="name" id="name"
                      style={{...styles.input, borderColor: errors.name ? 'red' : undefined}}
                      placeholder={'Name'} />
                    {errors.name && <Text sx={styles.error}>{errors.name}</Text>}
                  </div>
                  <div>
                    <input
                      value={company}
                      onChange={e => setCompany(e.target.value)}
                      type="text" name="company" id="company"
                      style={styles.input}
                      placeholder={'Company (optional)'} />
                  </div>
                  <div>
                    <input
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      type="email" name="email" id="email"
                      style={{...styles.input, borderColor: errors.email ? 'red' : undefined}}
                      placeholder={'Email'} />
                    {errors.email && <Text sx={styles.error}>{errors.email}</Text>}
                  </div>
                  <div>
                    <input
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      type="tel" name="phone" id="phone"
                      style={styles.input}
                      placeholder={'Phone / WhatsApp (optional)'} />
                  </div>
                </Box>
                <Text sx={styles.chipsLabel}>Project type</Text>
                <Box sx={styles.chips}>
                  {projectTypes.map((type) => (
                    <Box
                      key={type}
                      onClick={() => toggleType(type)}
                      sx={{
                        ...styles.chip,
                        ...(selectedTypes.includes(type) ? styles.chipActive : {}),
                      }}>
                      {type}
                    </Box>
                  ))}
                </Box>
                <div>
                  <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    id="message"
                    style={{...styles.messageArea, borderColor: errors.message ? 'red' : undefined}}
                    placeholder={'Tell us about your project — goals, current systems, timeline, and what you want to improve.'} />
                  {errors.message && <Text sx={styles.error}>{errors.message}</Text>}
                </div>
                {status === 'success' && (
                  <Text sx={styles.successMsg}>Thank you! We'll get back to you within one business day.</Text>
                )}
                {status === 'error' && (
                  <Text sx={styles.errorMsg}>{errorMsg}</Text>
                )}
                <Button sx={styles.submit} disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Submitting...' : 'Send Enquiry'}
                </Button>
              </form>
            </Box>
          </Box>
        </Reveal>
        <Reveal delay={0.1}>
          <Box sx={styles.useCases}>
            <Text sx={styles.useCasesTitle}>Common use cases</Text>
            <Box sx={styles.useCasesGrid}>
              {useCases.map((item) => (
                <Box sx={styles.useCase} key={item}>{item}</Box>
              ))}
            </Box>
          </Box>
        </Reveal>
        <Reveal delay={0.15}>
          <Box sx={styles.faqWrap}>
            {faqs.map((item) => (
              <Box sx={styles.faq} key={item.q}>
                <Text sx={styles.faqQ}>{item.q}</Text>
                <Text sx={styles.faqA}>{item.a}</Text>
              </Box>
            ))}
          </Box>
        </Reveal>
      </Container>
    </section>
  )
}

export default ContactUs

const styles = {
  section: {
    py: [7, null, 9],
    backgroundColor: 'white',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
    gridGap: ['30px', null, '40px'],
    mt: [5, null, 7],
    alignItems: 'start',
  },
  infoCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  infoCard: {
    p: [4, null, 5],
    backgroundColor: 'background_secondary',
    borderRadius: 10,
    border: '1px solid',
    borderColor: 'border_color',
  },
  infoTitle: {
    fontSize: [3, null, 4],
    fontWeight: 700,
    color: 'heading',
    mb: 3,
    fontFamily: 'Ubuntu',
  },
  infoText: {
    fontSize: 1,
    lineHeight: 1.9,
    color: 'text',
    mb: 4,
    fontFamily: 'Ubuntu',
  },
  contactRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 3,
    color: 'teal',
    fontSize: 2,
    fontWeight: 700,
    mb: 3,
    svg: {
      flexShrink: 0,
    },
    a: {
      color: 'teal',
      textDecoration: 'none',
      fontFamily: 'Ubuntu',
      '&:hover': {
        color: 'secondary',
      },
    },
  },
  stepsCard: {
    p: [4, null, 5],
    backgroundColor: 'teal',
    borderRadius: 10,
  },
  stepsTitle: {
    fontSize: [3, null, 4],
    fontWeight: 700,
    color: 'white',
    mb: 4,
    fontFamily: 'Ubuntu',
  },
  step: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 3,
    mb: 4,
    ':last-child': {
      mb: 0,
    },
  },
  stepBadge: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: '50%',
    backgroundColor: 'cyan',
    color: 'heading',
    fontSize: 1,
    fontWeight: 700,
    flexShrink: 0,
    fontFamily: 'Ubuntu',
  },
  stepTitle: {
    fontSize: 2,
    fontWeight: 700,
    color: 'white',
    mb: 1,
    fontFamily: 'Ubuntu',
  },
  stepText: {
    fontSize: 1,
    lineHeight: 1.7,
    color: 'white',
    fontFamily: 'Ubuntu',
  },
  formCol: {
    width: '100%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    p: [4, null, 5],
    backgroundColor: 'background_secondary',
    borderRadius: 10,
    border: '1px solid',
    borderColor: 'border_color',
  },
  fieldGrid: {
    display: 'grid',
    gridTemplateColumns: ['repeat(1,1fr)', 'repeat(2,1fr)'],
    gridGap: '15px 20px',
  },
  input: {
    padding: '12px 14px',
    width: '100%',
    borderRadius: 6,
    border: '1px solid',
    borderColor: 'border_color',
    backgroundColor: 'white',
    fontSize: 1,
    fontFamily: 'Ubuntu',
    outline: 'none',
    '&:focus': {
      borderColor: 'teal',
    },
  },
  messageArea: {
    padding: '12px 14px',
    width: '100%',
    height: 160,
    borderRadius: 6,
    border: '1px solid',
    borderColor: 'border_color',
    backgroundColor: 'white',
    fontSize: 1,
    fontFamily: 'Ubuntu',
    resize: 'vertical',
    outline: 'none',
    mt: 20,
    '&:focus': {
      borderColor: 'teal',
    },
  },
  chipsLabel: {
    fontSize: 1,
    fontWeight: 700,
    color: 'heading',
    mt: 20,
    mb: 3,
    fontFamily: 'Ubuntu',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  chip: {
    padding: '8px 16px',
    borderRadius: 20,
    border: '1px solid',
    borderColor: 'teal',
    color: 'teal',
    fontSize: 1,
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.2s',
    userSelect: 'none',
    fontFamily: 'Ubuntu',
    '&:hover': {
      backgroundColor: 'teal',
      color: 'white',
    },
  },
  chipActive: {
    backgroundColor: 'teal',
    color: 'white',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    marginBottom: 5,
    fontFamily: 'Ubuntu'
  },
  successMsg: {
    color: 'green',
    fontSize: 14,
    marginTop: 15,
    textAlign: 'center' as const,
    fontFamily: 'Ubuntu'
  },
  errorMsg: {
    color: 'red',
    fontSize: 14,
    marginTop: 15,
    textAlign: 'center' as const,
    fontFamily: 'Ubuntu'
  },
  submit: {
    marginTop: 20,
    width: '100%',
    padding: '14px 10px',
    backgroundColor: 'teal',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Ubuntu',
    '&:hover, &.active': {
      backgroundColor: 'cyan',
      color: 'teal'
    },
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    }
  },
  useCases: {
    mt: [6, null, 8],
    textAlign: 'center',
  },
  useCasesTitle: {
    fontSize: [3, null, 4],
    fontWeight: 700,
    color: 'heading',
    mb: 4,
    fontFamily: 'Ubuntu',
  },
  useCasesGrid: {
    display: 'grid',
    gridTemplateColumns: ['repeat(1,1fr)', 'repeat(2,1fr)', null, 'repeat(4,1fr)'],
    gridGap: '20px',
  },
  useCase: {
    p: [3, null, 4],
    backgroundColor: 'background_secondary',
    borderRadius: 10,
    border: '1px solid',
    borderColor: 'border_color',
    color: 'text',
    fontWeight: 700,
    fontFamily: 'Ubuntu',
  },
  faqWrap: {
    mt: [6, null, 8],
    maxWidth: '800px',
    mx: 'auto',
  },
  faq: {
    p: [4, null, 5],
    mb: 3,
    backgroundColor: 'background_secondary',
    borderRadius: 10,
    border: '1px solid',
    borderColor: 'border_color',
  },
  faqQ: {
    fontSize: 2,
    fontWeight: 700,
    color: 'heading',
    mb: 2,
    fontFamily: 'Ubuntu',
  },
  faqA: {
    fontSize: 1,
    lineHeight: 1.9,
    color: 'text',
    fontFamily: 'Ubuntu',
  },
};
