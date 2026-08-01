/** @jsx jsx */
import { jsx, Container, Box, Text, Button } from 'theme-ui';
import SectionHeader from '../components/section-header';
import Reveal from '../components/reveal';
import { AiFillInstagram } from 'react-icons/ai';

export default function Instagram() {
  return (
    <section id="instagram" sx={styles.section}>
      <Container>
        <SectionHeader
          eyebrow="Instagram"
          title="Follow Us on Instagram"
          slogan="Daily tech insights, project builds and behind-the-scenes from the we2Tech team"
          icColor={true} />
        <Reveal delay={0.1}>
          <Box sx={styles.feedWrap}>
            <iframe
              src="https://www.instagram.com/we2tech/embed/"
              width="400"
              height="460"
              frameBorder="0"
              allowtransparency="true"
              allowFullScreen
              title="we2Tech Instagram feed"
              scrolling="no"
              loading="lazy"
              sx={styles.feed} />
          </Box>
        </Reveal>
        <Reveal delay={0.2}>
          <Box sx={styles.followWrap}>
            <a
              href="https://www.instagram.com/we2tech/"
              target="_blank"
              rel="noopener noreferrer">
              <Button variant="primary" sx={styles.followBtn}>
                <AiFillInstagram /> Follow @we2tech
              </Button>
            </a>
          </Box>
        </Reveal>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    py: [7, null, 9],
    backgroundColor: 'background_secondary',
  },
  feedWrap: {
    display: 'flex',
    justifyContent: 'center',
    mt: [5, null, 7],
  },
  feed: {
    width: '100%',
    maxWidth: '400px',
    height: '460px',
    border: '1px solid',
    borderColor: 'border_color',
    borderRadius: 12,
    backgroundColor: 'white',
  },
  followWrap: {
    textAlign: 'center',
    mt: 5,
  },
  followBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 2,
    fontFamily: 'Ubuntu',
    svg: {
      fontSize: 3,
    },
  },
};
