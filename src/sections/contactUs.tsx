import type { NextPage } from 'next'
import { FormEvent, useState } from "react";
import {
  Box,
  Container
} from 'theme-ui';
import SectionHeader from '../components/section-header';

const ContactUss: NextPage = () => {
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
    }
    console.log('form: ', form);

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
          title="Contact Us"
          slogan="Looking for a quatation?" />
        <Box sx={styles.container}>
          <div style={styles.innerContainer}>
            <form className="py-4 space-y-4"
              onSubmit={handleSubmit}>
              <div className="flex items-center justify-center">
                <label htmlFor="name">Name</label>
                <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" id="name" style={styles.titleContext} placeholder="Your Name" />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="email" className="sr-only">Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" style={styles.titleContext} placeholder="Your Email" />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="phone" className="sr-only">Phone</label>
                <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" name="phone" id="phone" style={styles.titleContext} placeholder="Your Phone" />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="message" className="sr-only">Project Description</label>
                <textarea value={message} onChange={e => setMessage(e.target.value)} id="message" style={styles.messageContext} placeholder="Your Project Description" />
              </div>
              <div className="flex items-center justify-center">
                <button type="submit" style={styles.submit}>Submit</button>
              </div>
            </form>
          </div>
        </Box>
      </Container>
    </section>
  )
}

export default ContactUss

const styles = {
  containerBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    marginTop: 60,
    marginBottom: 60,
    display: 'flex',
    backgroundColor: 'lightgreen',
    padding: 20,
    width: '80%'
  },
  innerContainer: {
    width: '100%'
  },
  titleContext: {
    padding: 10,
    marginLeft: 106,
    marginBottom: 20,
    width: '80%'
  },
  messageContext: {
    padding: 10,
    marginLeft: 20,
    width: '80%'
  },
  submit: {
    marginTop: 20,
    width: '100%',
    padding: 10,
    backgroundColor: 'white'
  }

};
