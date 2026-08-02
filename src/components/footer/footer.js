/** @jsx jsx */
import { jsx, Box, Grid, Container, Heading, Text, Flex } from 'theme-ui';
import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useLocale, localizedPath } from '../../locales';
import LanguageSwitcher from '../language-switcher';

export default function Footer() {
  const { locale, t } = useLocale();

  const contact = [
    {
      id: 1,
      icon: <GoLocation size="28px" />,
      title: t('footer.address'),
      text: 'WEST WING 2/F, 822 LAI CHI KOK ROAD, CHEUNG SHA WAN, KOWLOON, HONG KONG'
    },
    {
      id: 2,
      icon: <BiMailSend size="28px" />,
      title: t('footer.email'),
      text: 'enquiry@we2tech.pro'
    },
    {
      id: 3,
      icon: <BiPhoneCall size="28px" />,
      title: t('footer.telephone'),
      text: '+852 53968435'
    }
  ];

  const serviceLinks = [
    { id: 1, path: '/services/mobile-app-development' },
    { id: 2, path: '/services/web-app-development' },
    { id: 3, path: '/services/ui-ux-design' },
    { id: 4, path: '/services/server-deployment' },
    { id: 5, path: '/services/maintenance-support' },
  ];

  return (
    <footer sx={styles.footer}>
      <Container sx={styles.container}>
        <Grid sx={styles.topGrid}>
          <Box sx={styles.about}>
            <Heading as="h3" sx={styles.brand}>[ we2Tech Ltd ]</Heading>
            <Text sx={styles.blurb}>
              {t('footer.blurb')}
            </Text>
            <Flex sx={styles.social}>
              <a href={localizedPath(locale, '/#instagram')} aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me/85253968435" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </Flex>
            <LanguageSwitcher light align="left" />
          </Box>

          <Box sx={styles.links}>
            <Heading as="h4" sx={styles.heading}>{t('footer.services')}</Heading>
            {serviceLinks.map((item, i) => (
              <a key={item.id} href={localizedPath(locale, item.path)}>{t(`serviceNames.${i}`)}</a>
            ))}
          </Box>

          <Box sx={styles.contactBox}>
            <Heading as="h4" sx={styles.heading}>{t('footer.contactUs')}</Heading>
            {contact.map((item) => (
              <Flex sx={styles.contactItem} key={item.id}>
                <Box sx={styles.contactIcon}>{item.icon}</Box>
                <Box>
                  <Text sx={styles.contactTitle}>{item.title}</Text>
                  <Text sx={styles.contactText}>{item.text}</Text>
                </Box>
              </Flex>
            ))}
          </Box>
        </Grid>
      </Container>
      <Box sx={styles.bottom}>
        <Text sx={styles.copyright}>
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </Text>
      </Box>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: 'teal',
  },
  container: {
    py: [6, null, 7],
  },
  topGrid: {
    gridGap: ['40px 30px', null, '40px'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
  about: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: ['center', null, 'flex-start'],
    textAlign: ['center', null, 'left'],
  },
  brand: {
    color: 'white',
    fontFamily: 'Ubuntu',
    fontSize: 4,
    fontWeight: 700,
    mb: 3,
  },
  blurb: {
    color: 'white',
    fontSize: 1,
    lineHeight: 1.9,
    opacity: 0.9,
    fontFamily: 'Ubuntu',
    mb: 4,
  },
  social: {
    gap: 3,
    a: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: ['40px', null, '44px'],
      height: ['40px', null, '44px'],
      borderRadius: '50%',
      backgroundColor: 'rgba(255,255,255,0.15)',
      color: 'white',
      fontSize: 4,
      transition: 'all 0.25s',
      '&:hover': {
        backgroundColor: 'cyan',
        color: 'teal',
      },
    },
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: ['center', null, 'flex-start'],
    textAlign: ['center', null, 'left'],
    a: {
      color: 'white',
      fontSize: 1,
      lineHeight: 2.2,
      cursor: 'pointer',
      opacity: 0.9,
      fontFamily: 'Ubuntu',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'cyan',
        opacity: 1,
      },
    },
  },
  contactBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: ['center', null, 'flex-start'],
    textAlign: ['center', null, 'left'],
    backgroundColor: 'white',
    borderRadius: 12,
    p: [4, null, 5],
    boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
    '& > h4': {
      color: 'teal',
    },
  },
  heading: {
    color: 'white',
    fontSize: 3,
    fontWeight: 700,
    mb: 3,
    fontFamily: 'Ubuntu',
  },
  contactItem: {
    alignItems: 'flex-start',
    mb: 3,
    gap: 3,
    justifyContent: ['center', null, 'flex-start'],
  },
  contactIcon: {
    color: 'teal',
    fontSize: 4,
    flexShrink: 0,
    mt: '2px',
  },
  contactTitle: {
    color: 'heading',
    fontSize: 1,
    fontWeight: 700,
    fontFamily: 'Ubuntu',
    mb: 1,
  },
  contactText: {
    color: 'text',
    fontSize: 1,
    lineHeight: 1.8,
    fontFamily: 'Ubuntu',
  },
  bottom: {
    borderTop: '1px solid',
    borderTopColor: 'rgba(255,255,255,0.2)',
    py: 4,
    textAlign: 'center',
  },
  copyright: {
    color: 'white',
    fontSize: 1,
    fontFamily: 'Ubuntu',
    opacity: 0.9,
  },
};
