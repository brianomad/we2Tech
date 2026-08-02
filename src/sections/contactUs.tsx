/** @jsx jsx */
import { FormEvent, useState } from "react";
import {
  jsx,
  Box,
  Container,
  Button,
  Text
} from 'theme-ui';
import SectionHeader from '../components/section-header';
import Reveal from '../components/reveal';
import { FaWhatsapp, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import enCases from './case-data';
import zhCases from '../data/case-data-zh';
import zhCnCases from '../data/case-data-zh-cn';
import { tagNames as zhTagNames } from '../data/case-data-zh';
import { tagNames as zhCnTagNames } from '../data/case-data-zh-cn';
import { useLocale, localizedPath } from '../locales';

const casesByLocale = { en: enCases, zh: zhCases, 'zh-cn': zhCnCases };
const tagNamesByLocale = { en: {}, zh: zhTagNames, 'zh-cn': zhCnTagNames };

const ContactUs = ({ showCaseCards = true, compact = false }: { showCaseCards?: boolean; compact?: boolean }) => {
  const { locale, t } = useLocale();
  const cases = casesByLocale[locale] || casesByLocale.en;
  const tagNames = tagNamesByLocale[locale] || {};
  const localizedTag = (tag: string) => tagNames[tag] || tag;
  const featuredCases = cases.slice(0, 4);
  const projectTypes = t('contact.projectTypes') as string[];
  const steps = t('contact.steps') as { step?: string; title: string; text: string }[];
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
    if (!name.trim()) errs.name = t('contact.errName');
    if (!email.trim()) {
      errs.email = t('contact.errEmail');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = t('contact.errEmailInvalid');
    }
    if (!message.trim()) errs.message = t('contact.errMessage');
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
      setErrorMsg(t('contact.failed'));
    }
  };

  const form = (
    <Box sx={styles.formCol}>
      <form onSubmit={handleSubmit} sx={styles.form}>
        <Box sx={styles.fieldGrid}>
          <div>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text" name="name" id="name"
              sx={{ ...styles.input, borderColor: errors.name ? 'red' : undefined }}
              placeholder={t('contact.namePh')} />
            {errors.name && <Text sx={styles.error}>{errors.name}</Text>}
          </div>
          <div>
            <input
              value={company}
              onChange={e => setCompany(e.target.value)}
              type="text" name="company" id="company"
              sx={styles.input}
              placeholder={t('contact.companyPh')} />
          </div>
          <div>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email" name="email" id="email"
              sx={{ ...styles.input, borderColor: errors.email ? 'red' : undefined }}
              placeholder={t('contact.emailPh')} />
            {errors.email && <Text sx={styles.error}>{errors.email}</Text>}
          </div>
          <div>
            <input
              value={phone}
              onChange={e => setPhone(e.target.value)}
              type="tel" name="phone" id="phone"
              sx={styles.input}
              placeholder={t('contact.phonePh')} />
          </div>
        </Box>
        <Text sx={styles.chipsLabel}>{t('contact.projectType')}</Text>
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
            sx={{ ...styles.messageArea, borderColor: errors.message ? 'red' : undefined }}
            placeholder={t('contact.messagePh')} />
          {errors.message && <Text sx={styles.error}>{errors.message}</Text>}
        </div>
        {status === 'success' && (
          <Text sx={styles.successMsg}>{t('contact.success')}</Text>
        )}
        {status === 'error' && (
          <Text sx={styles.errorMsg}>{errorMsg}</Text>
        )}
        <Button sx={styles.submit} disabled={status === 'submitting'}>
          {status === 'submitting' ? t('contact.submitting') : t('contact.send')}
        </Button>
      </form>
    </Box>
  );

  return (
    <section id="contactUs" sx={styles.section}>
      <Container>
        {!compact && <SectionHeader
          eyebrow={t('contact.eyebrow')}
          title={t('contact.title')}
          slogan={t('contact.slogan')}
          icColor={true} />}
        <Reveal>
          <Box sx={!compact ? styles.container : styles.containerCompact}>
            {!compact && (
            <Box sx={styles.infoCol}>
              <Box sx={styles.infoCard}>
                <Text sx={styles.infoTitle}>{t('contact.infoTitle')}</Text>
                <Text sx={styles.infoText}>
                  {t('contact.infoText')}
                </Text>
                <Box sx={styles.contactRow}>
                  <FaWhatsapp />
                  <a href="https://wa.me/85253968435" target="_blank" rel="noopener noreferrer">
                    {t('location.whatsapp')}: (852) 5396 8435
                  </a>
                </Box>
                <Box sx={styles.contactRow}>
                  <FaEnvelope />
                  <a href="mailto:enquiry@we2tech.pro">enquiry@we2tech.pro</a>
                </Box>
              </Box>
              <Box sx={styles.stepsCard}>
                <Text sx={styles.stepsTitle}>{t('contact.howWeWork')}</Text>
                {steps.map((item, index) => (
                  <Box sx={styles.step} key={index}>
                    <Box sx={styles.stepBadge}>{index + 1}</Box>
                    <Box>
                      <Text sx={styles.stepTitle}>{item.title}</Text>
                      <Text sx={styles.stepText}>{item.text}</Text>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            )}
            {form}
          </Box>
        </Reveal>
        {showCaseCards && (
          <Reveal delay={0.1}>
            <Box sx={styles.useCases}>
              <Text sx={styles.useCasesTitle}>{t('contact.storiesTitle')}</Text>
              <Box sx={styles.useCasesGrid}>
                {featuredCases.map((item) => (
                  <Box
                    key={item.id}
                    sx={{
                      ...styles.useCase,
                      backgroundImage: `linear-gradient(180deg, rgba(0,51,51,0.10) 0%, rgba(0,51,51,0.88) 100%), url(/images/cases/case-${item.id}.jpg)`,
                    }}>
                    <Text sx={styles.useCaseRef}>{t('cases.photo')}</Text>
                    <Text sx={styles.useCaseNumber}>
                      {String(item.id).padStart(2, '0')} {t('cases.caseWord')}
                    </Text>
                    <Box sx={styles.useCaseTags}>
                      {item.tags.slice(0, 3).map((tag) => (
                        <Text key={tag} sx={styles.useCaseTag}>{localizedTag(tag)}</Text>
                      ))}
                    </Box>
                    <Text sx={styles.useCaseTitle}>{item.title}</Text>
                    <Text sx={styles.useCaseSummary}>{item.summary}</Text>
                    <a href={localizedPath(locale, '/cases')} sx={styles.useCaseLink}>
                      {t('contact.viewCase')} <FaArrowRight />
                    </a>
                  </Box>
                ))}
              </Box>
              <Box sx={styles.useCasesCta}>
                <a href={localizedPath(locale, '/cases')}>
                  <Button variant="primary" sx={styles.useCasesBtn}>
                    {t('contact.viewAll')}
                  </Button>
                </a>
              </Box>
            </Box>
          </Reveal>
        )}
      </Container>
    </section>
  )
}

export default ContactUs

const styles = {
  section: {
    pt: [8, null, 10],
    pb: [7, null, 9],
    backgroundColor: 'background_secondary',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
    gridGap: ['30px', null, '40px'],
    mt: [5, null, 7],
    alignItems: 'start',
  },
  containerCompact: {
    mt: [5, null, 7],
    maxWidth: ['100%', null, null, '760px'],
    mx: 'auto',
  },
  infoCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  infoCard: {
    p: [4, null, 5],
    backgroundColor: 'white',
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
    backgroundColor: 'white',
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
    gridTemplateColumns: ['repeat(1,1fr)', 'repeat(2,1fr)', null, 'repeat(2,1fr)'],
    gridGap: '20px',
  },
  useCase: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    height: '100%',
    minHeight: 320,
    textAlign: 'left',
    p: [4, null, 5],
    borderRadius: 12,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    transition: 'all 0.25s',
    '&:hover': {
      boxShadow: '0 10px 30px rgba(0,139,139,0.25)',
      transform: 'translateY(-3px)',
    },
  },
  useCaseRef: {
    position: 'absolute',
    top: 12,
    right: 12,
    padding: '4px 10px',
    borderRadius: 14,
    backgroundColor: 'rgba(51,51,51,0.55)',
    color: 'rgba(255,255,255,0.8)',
    fontSize: 0,
    fontWeight: 600,
    fontFamily: 'Ubuntu',
  },
  useCaseNumber: {
    position: 'absolute',
    top: 12,
    left: 12,
    padding: '4px 10px',
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.45)',
    border: '1px solid rgba(255,255,255,0.25)',
    color: 'white',
    fontSize: 0,
    fontWeight: 700,
    fontFamily: 'Ubuntu',
  },
  useCaseTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    mb: 3,
  },
  useCaseTag: {
    padding: '4px 12px',
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.15)',
    border: '1px solid rgba(255,255,255,0.3)',
    color: 'white',
    fontSize: 0,
    fontWeight: 700,
    fontFamily: 'Ubuntu',
  },
  useCaseTitle: {
    fontSize: [2, null, 3],
    fontWeight: 700,
    color: 'white',
    mb: 2,
    fontFamily: 'Ubuntu',
  },
  useCaseSummary: {
    fontSize: 1,
    lineHeight: 1.8,
    color: 'rgba(255,255,255,0.9)',
    mb: 3,
    fontFamily: 'Ubuntu',
  },
  useCaseLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 2,
    mt: 'auto',
    color: 'cyan',
    fontSize: 1,
    fontWeight: 700,
    textDecoration: 'none',
    fontFamily: 'Ubuntu',
    svg: {
      transition: 'transform 0.2s',
    },
    '&:hover': {
      color: 'white',
      svg: {
        transform: 'translateX(4px)',
      },
    },
  },
  useCasesCta: {
    mt: 5,
  },
  useCasesBtn: {
    fontFamily: 'Ubuntu',
  },
};
