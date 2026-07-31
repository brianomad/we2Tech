/** @jsx jsx */
import { jsx, Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

import BannerImg from 'assets/we2Tech/home.png';

export default function Home() {
  return (
    <section id="home" sx={styles.section}>
      <Container sx={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          sx={styles.content}>
          <Box sx={styles.textBox}>
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
              <ScrollLink to="contactUs" spy={true} smooth={true} offset={-70} duration={500}>
                <Button variant="primary" aria-label="Get a Free Quote">
                  Get a Free Quote
                </Button>
              </ScrollLink>
              <ScrollLink to="services" spy={true} smooth={true} offset={-70} duration={500}>
                <Button variant="secondary" aria-label="Our Services">
                  Our Services
                </Button>
              </ScrollLink>
            </Box>
          </Box>
          <Box sx={styles.imageBox}>
            <Image src={BannerImg} alt="we2Tech application development banner" />
          </Box>
        </motion.div>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    pt: [120, null, 140, 160],
    pb: [50, null, 70, 90],
    overflow: 'hidden',
  },
  container: {
    height: '100%',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: ['column', null, null, 'row'],
    gap: [30, null, 40],
  },
  textBox: {
    width: ['100%', null, null, '48%'],
    textAlign: ['center', null, null, 'left'],
  },
  eyebrow: {
    color: 'teal',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontWeight: 'bold',
    fontSize: [1, null, 2],
    mb: 3,
    fontFamily: 'Ubuntu',
  },
  title: {
    color: 'heading',
    fontSize: ['32px', '38px', '44px', '46px', '52px'],
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
    fontFamily: 'Ubuntu',
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: ['center', null, null, 'flex-start'],
    gap: 3,
    a: {
      cursor: 'pointer',
    },
  },
  imageBox: {
    width: ['100%', null, null, '48%'],
    img: {
      width: '100%',
      height: 'auto',
    },
  },
};
