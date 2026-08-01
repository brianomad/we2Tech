/** @jsx jsx */
import { jsx, Container, Box, Heading, Text, Button } from 'theme-ui';
import { motion } from 'framer-motion';

import BannerImg from 'assets/we2Tech/home.png';
import { FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  return (
    <section id="home" sx={styles.section}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          sx={styles.textBox}>
          <Text as="p" sx={styles.eyebrow}>Hong Kong Software Development</Text>
          <Heading as="h1" sx={styles.title}>
            We Build Mobile &amp; Web Applications That Grow Your Business
          </Heading>
          <Text as="p" sx={styles.description}>
            we2Tech is a Hong Kong-based development team crafting user-friendly
            mobile apps, websites, UI/UX design and cloud systems — from first
            idea to launch and beyond.
          </Text>
          <Box sx={styles.buttons}>
            <a href="/contact">
              <Button variant="primary" sx={styles.heroBtnPrimary} aria-label="Book a Consultation">
                Book a Consultation
              </Button>
            </a>
            <a href="https://wa.me/85253968435" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" sx={styles.heroBtnOutline}>
                <FaWhatsapp /> Chat on WhatsApp
              </Button>
            </a>
          </Box>
        </motion.div>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    position: 'relative',
    pt: [120, null, 140, 160],
    pb: [40, null, 60],
    overflow: 'hidden',
    backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.84) 55%, rgba(255,255,255,0.9) 100%), url(${BannerImg})`,
    backgroundSize: 'cover, cover',
    backgroundPosition: 'center, center',
    backgroundRepeat: 'no-repeat, no-repeat',
    '::before, ::after': {
      content: '""',
      position: 'absolute',
      borderRadius: '50%',
      filter: 'blur(90px)',
      pointerEvents: 'none',
    },
    '::before': {
      width: ['260px', null, '420px'],
      height: ['260px', null, '420px'],
      top: ['60px', null, '80px'],
      left: '-160px',
      backgroundColor: 'rgba(0,139,139,0.10)',
    },
    '::after': {
      width: ['220px', null, '360px'],
      height: ['220px', null, '360px'],
      top: ['180px', null, '240px'],
      right: '-140px',
      backgroundColor: 'rgba(0,255,255,0.08)',
    },
  },
  textBox: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    maxWidth: '820px',
    mx: 'auto',
  },
  eyebrow: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 2,
    color: 'secondary',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontWeight: 'bold',
    fontSize: [1, null, 2],
    mb: 3,
    py: 2,
    px: 3,
    backgroundColor: 'rgba(0,139,139,0.08)',
    border: '1px solid rgba(0,139,139,0.18)',
    borderRadius: '30px',
    fontFamily: 'Ubuntu',
  },
  title: {
    color: 'heading',
    fontSize: ['30px', '38px', '44px', '48px', '56px'],
    lineHeight: 1.25,
    fontWeight: 700,
    letterSpacing: '-1px',
    mb: 4,
    fontFamily: 'Ubuntu',
  },
  title: {
    color: 'heading',
    fontSize: ['30px', '38px', '44px', '48px', '56px'],
    lineHeight: 1.25,
    fontWeight: 700,
    letterSpacing: '-1px',
    mb: 4,
    fontFamily: 'Ubuntu',
  },
  description: {
    fontSize: [2, null, 3],
    lineHeight: 1.9,
    color: 'text',
    mb: 5,
    maxWidth: '640px',
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
  heroBtnPrimary: {
    fontFamily: 'Ubuntu',
  },
  heroBtnOutline: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    fontFamily: 'Ubuntu',
  },
};
