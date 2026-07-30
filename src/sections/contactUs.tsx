import type { NextPage } from 'next'
import { FormEvent, useState } from "react";
import {
  Box,
  Container,
  Button,
  Text
} from 'theme-ui';
import SectionHeader from '../components/section-header';

const ContactUs: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

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

    const form = { name, email, phone, message };

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
      setEmail('');
      setPhone('');
      setMessage('');
    } catch {
      setStatus('error');
      setErrorMsg('Submission failed. Please try again or email us directly.');
    }
  };

  return (
    <section id="contactUs">
      <Container sx={styles.containerBox}>
        <SectionHeader
          title="Looking for Digital Development Services?"
          slogan="we2Tech can help you to develop a suitable, user-friendly and attractive application"
          icColor={true} />
        <Box sx={styles.container}>
          <div style={styles.innerContainer}>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  type="text" name="name" id="name"
                  style={{...styles.titleContext, borderColor: errors.name ? 'red' : undefined}}
                  placeholder={'Name'} />
                {errors.name && <Text sx={styles.error}>{errors.name}</Text>}
              </div>
              <div>
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type="email" name="email" id="email"
                  style={{...styles.titleContext, borderColor: errors.email ? 'red' : undefined}}
                  placeholder={'Email'} />
                {errors.email && <Text sx={styles.error}>{errors.email}</Text>}
              </div>
              <div>
                <input
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  type="tel" name="phone" id="phone"
                  style={styles.titleContext}
                  placeholder={'Phone (optional)'} />
              </div>
              <div>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  id="message"
                  style={{...styles.messageContext, borderColor: errors.message ? 'red' : undefined}}
                  placeholder={'Application Description'} />
                {errors.message && <Text sx={styles.error}>{errors.message}</Text>}
              </div>
              {status === 'success' && (
                <Text sx={styles.successMsg}>Thank you! We'll get back to you soon.</Text>
              )}
              {status === 'error' && (
                <Text sx={styles.errorMsg}>{errorMsg}</Text>
              )}
              <Button sx={styles.submit} disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </div>
        </Box>
      </Container>
    </section>
  )
}

export default ContactUs

const styles = {
  containerBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    marginBottom: 60,
    display: 'flex',
    padding: 20,
    width: '100%',
  },
  innerContainer: {
    width: '100%'
  },
  titleContext: {
    padding: 10,
    marginBottom: 20,
    width: '100%'
  },
  title: {
    color: 'black',
    fontFamily: 'Ubuntu'
  },
  messageContext: {
    padding: 10,
    width: '100%',
    height: 200,
    backgroundColor: 'white'
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    fontFamily: 'Ubuntu'
  },
  successMsg: {
    color: 'green',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center' as const,
    fontFamily: 'Ubuntu'
  },
  errorMsg: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center' as const,
    fontFamily: 'Ubuntu'
  },
  submit: {
    marginTop: 20,
    width: '100%',
    padding: 10,
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
  }
};
