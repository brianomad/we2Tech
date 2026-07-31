/** @jsx jsx */
import { jsx, Container, Box, Heading, Text, Button } from 'theme-ui';
import { Link as ScrollLink } from 'react-scroll';
import Reveal from '../components/reveal';

export default function CTABand() {
  return (
    <section id="cta" sx={styles.section}>
      <Container>
        <Reveal>
          <Box sx={styles.card}>
            <Heading as="h2" sx={styles.title}>
              Have a project in mind? Let&apos;s build it together.
            </Heading>
            <Text as="p" sx={styles.text}>
              Tell us about your idea and get a free consultation. We reply within one business day.
            </Text>
            <Box sx={styles.buttons}>
              <a
                href="https://wa.me/85253968435"
                target="_blank"
                rel="noopener noreferrer">
                <Button variant="whiteButton" aria-label="Chat on WhatsApp">
                  Chat on WhatsApp
                </Button>
              </a>
              <ScrollLink to="contactUs" spy={true} smooth={true} offset={-70} duration={500}>
                <Button variant="textButton" sx={styles.outlineBtn} aria-label="Book a Consultation">
                  Book a Consultation
                </Button>
              </ScrollLink>
            </Box>
          </Box>
        </Reveal>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    py: [7, null, 9],
    backgroundColor: 'white',
  },
  card: {
    textAlign: 'center',
    backgroundColor: 'teal',
    borderRadius: 16,
    p: [6, null, 8],
    backgroundImage:
      'radial-gradient(circle at 20% 20%, rgba(0,255,255,0.15), transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,255,255,0.15), transparent 50%)',
  },
  title: {
    color: 'white',
    fontSize: ['26px', null, '34px', '40px'],
    lineHeight: 1.3,
    fontWeight: 700,
    mb: 3,
    fontFamily: 'Ubuntu',
  },
  text: {
    color: 'white',
    fontSize: 2,
    lineHeight: 1.9,
    mb: 5,
    maxWidth: '560px',
    mx: 'auto',
    fontFamily: 'Ubuntu',
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 3,
    a: {
      cursor: 'pointer',
    },
  },
  outlineBtn: {
    border: '2px solid',
    borderColor: 'white',
    color: 'white',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'white',
      color: 'teal',
    },
  },
};
