/** @jsx jsx */
import { jsx, Box, Container, Text } from 'theme-ui';
import Head from 'next/head';
import SectionHeader from '../components/section-header';
import Reveal from '../components/reveal';
import { GoLocation } from 'react-icons/go';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { useLocale } from '../locales';

const MAP_EMBED = 'https://www.google.com/maps?q=822%20Lai%20Chi%20Kok%20Road%2C%20Cheung%20Sha%20Wan%2C%20Kowloon%2C%20Hong%20Kong&z=16&output=embed';

const DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=822+Lai+Chi+Kok+Road+Cheung+Sha+Wan+Kowloon+Hong+Kong';

export default function Location() {
  const { t } = useLocale();
  const addressLines = [t('location.addressLine1'), t('location.addressLine2')];
  const contact = [
    {
      id: 1,
      icon: <FaWhatsapp />,
      label: t('location.whatsapp'),
      value: '(852) 5396 8435',
      href: 'https://wa.me/85253968435',
    },
    {
      id: 2,
      icon: <FaEnvelope />,
      label: t('location.email'),
      value: 'enquiry@we2tech.pro',
      href: 'mailto:enquiry@we2tech.pro',
    },
  ];
  return (
    <section id="location" sx={styles.section}>
      <Head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
      </Head>
      <Container>
        <SectionHeader
          eyebrow={t('location.eyebrow')}
          title={t('location.title')}
          slogan={t('location.slogan')}
          icColor={true} />
        <Reveal delay={0.1}>
          <Box sx={styles.grid}>
            <Box sx={styles.infoCard}>
              <Box sx={styles.addressBlock}>
                <Box sx={styles.iconCircle}>
                  <GoLocation />
                </Box>
                <Box>
                  <Text sx={styles.infoLabel}>{t('location.addressLabel')}</Text>
                  {addressLines.map((line) => (
                    <Text sx={styles.infoText} key={line}>{line}</Text>
                  ))}
                </Box>
              </Box>
              {contact.map((item) => (
                <Box sx={styles.contactRow} key={item.id}>
                  <Box sx={styles.iconCircle}>{item.icon}</Box>
                  <Box>
                    <Text sx={styles.infoLabel}>{item.label}</Text>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      <Text sx={styles.infoText}>{item.value}</Text>
                    </a>
                  </Box>
                </Box>
              ))}
              <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                <Box sx={styles.directionsBtn}>{t('location.getDirections')}</Box>
              </a>
            </Box>
            <Box sx={styles.mapWrap}>
              <iframe
                src={MAP_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="we2Tech location map — Cheung Sha Wan, Hong Kong" />
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
    scrollMarginTop: '70px',
    backgroundColor: 'white',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
    gridGap: ['30px', null, '40px'],
    mt: [5, null, 7],
    alignItems: 'stretch',
  },
  infoCard: {
    display: 'flex',
    flexDirection: 'column',
    p: [4, null, 5],
    backgroundColor: 'background_secondary',
    borderRadius: 12,
    border: '1px solid',
    borderColor: 'border_color',
    gap: 4,
  },
  addressBlock: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 3,
  },
  contactRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 3,
    a: {
      textDecoration: 'none',
    },
  },
  iconCircle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
    borderRadius: '50%',
    backgroundColor: 'teal',
    color: 'white',
    fontSize: 3,
    flexShrink: 0,
  },
  infoLabel: {
    fontSize: 1,
    fontWeight: 700,
    color: 'secondary',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    mb: 1,
    fontFamily: 'Ubuntu',
  },
  infoText: {
    fontSize: [2, null, 3],
    color: 'heading',
    lineHeight: 1.7,
    fontFamily: 'Ubuntu',
    a: {
      color: 'heading',
    },
  },
  directionsBtn: {
    mt: 'auto',
    textAlign: 'center',
    padding: '14px 20px',
    borderRadius: 6,
    backgroundColor: 'teal',
    color: 'white',
    fontSize: 2,
    fontWeight: 700,
    fontFamily: 'Ubuntu',
    transition: 'all 0.25s',
    '&:hover': {
      backgroundColor: 'cyan',
      color: 'teal',
    },
  },
  mapWrap: {
    minHeight: ['320px', null, '100%'],
    borderRadius: 12,
    overflow: 'hidden',
    border: '1px solid',
    borderColor: 'border_color',
    backgroundColor: 'white',
    iframe: {
      display: 'block',
      width: '100%',
      height: '100%',
      minHeight: '320px',
    },
  },
};
