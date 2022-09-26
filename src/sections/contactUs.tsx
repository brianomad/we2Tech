import type { NextPage } from 'next'
import { FormEvent, useState } from "react";
import {
  Box,
  Container,
  Button
} from 'theme-ui';
import SectionHeader from '../components/section-header';

const ContactUs: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let form = {
      name,
      email,
      phone,
      message
    };

    const rawResponse = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });

    const content = await rawResponse.json();
    // console.log('content: ', content);
    // print to screen
    // alert(content.data.tableRange)
    alert('SUBMITTED')

    // Reset the form fields
    setMessage('')
    setPhone('')
    setName('')
    setEmail('')

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
            <form className="py-4 space-y-4"
              onSubmit={handleSubmit}>
              <div className="flex items-center justify-center">
                {/* <label htmlFor="name" style={styles.title}>Name</label> */}
                <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" id="name" style={styles.titleContext} placeholder={'Name'} />
              </div>
              <div className="flex items-center justify-center">
                {/* <label htmlFor="email" className="sr-only" style={styles.title}>Email</label> */}
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" style={styles.titleContext} placeholder={'Email'} />
              </div>
              <div className="flex items-center justify-center">
                {/* <label htmlFor="phone" className="sr-only" style={styles.title}>Phone</label> */}
                <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" name="phone" id="phone" style={styles.titleContext} placeholder={'Phone'} />
              </div>
              <div className="flex items-center justify-center">
                {/* <label htmlFor="message" className="sr-only" style={styles.title}>Application Description</label> */}
                <textarea value={message} onChange={e => setMessage(e.target.value)} id="message" style={styles.messageContext} placeholder={'Application Description'} />
              </div>
              {/* <div className="flex items-center justify-center">
                <button type="submit" style={styles.submit}>Submit</button>
              </div> */}
              <Button sx={styles.submit}>Submit</Button>
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
  submit: {
    marginTop: 20,
    width: '100%',
    padding: 10,
    backgroundColor: '#008B8B',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Ubuntu',
    '&:hover, &.active': {
      backgroundColor: '#00FFFF',
      color: '#008B8B'
    }
  }
};
