/** @jsx jsx */
import { jsx, Container, Box, Text, Button } from 'theme-ui';
import Head from 'next/head';
import SectionHeader from '../components/section-header';
import Reveal from '../components/reveal';
import { AiFillInstagram } from 'react-icons/ai';
import { useLocale } from '../locales';

export default function Instagram() {
  const { t } = useLocale();
  return (
    <section id="instagram" sx={styles.section}>
      <Head>
        <link rel="preconnect" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
      </Head>
      <Container>
        <SectionHeader
          eyebrow={t('instagram.eyebrow')}
          title={t('instagram.title')}
          slogan={t('instagram.slogan')}
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
                <AiFillInstagram /> {t('instagram.follow')}
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
    scrollMarginTop: '70px',
    backgroundColor: 'background_secondary',
  },
  feedWrap: {
    display: 'flex',
    justifyContent: 'center',
    mt: [5, null, 7],
  },
  feed: {
    width: '400px',
    maxWidth: '100%',
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
