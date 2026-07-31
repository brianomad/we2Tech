/** @jsx jsx */
import { jsx, Box, Grid, Container, Heading, Text, Flex } from 'theme-ui';
import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';
import { useRouter } from 'next/router';

const contact = [
  {
    id: 1,
    icon: <GoLocation size="28px" />,
    title: 'Address',
    text: 'WEST WING 2/F, 822 LAI CHI KO ROAD, CHEUNG SHA WAN, KOWLOON, HONG KONG'
  },
  {
    id: 2,
    icon: <BiMailSend size="28px" />,
    title: 'Email',
    text: 'enquiry@we2tech.pro'
  },
  {
    id: 3,
    icon: <BiPhoneCall size="28px" />,
    title: 'Telephone Number',
    text: '+852 53968435'
  }
];

const quickLinks = [
  { id: 1, path: 'home', label: 'Home' },
  { id: 2, path: 'services', label: 'Services' },
  { id: 3, path: 'howWeWork', label: 'How We Work' },
  { id: 4, path: 'whyChooseUs', label: 'Why Choose Us' },
  { id: 5, path: 'contactUs', label: 'Contact Us' },
];

const serviceLinks = [
  { id: 1, path: '/services/mobile-app-development', label: 'Mobile App Development' },
  { id: 2, path: '/services/web-app-development', label: 'Web App Development' },
  { id: 3, path: '/services/ui-ux-design', label: 'UI/UX Design' },
  { id: 4, path: '/services/server-deployment', label: 'Server Deployment' },
  { id: 5, path: '/services/maintenance-support', label: 'Maintenance & Support' },
];

export default function Footer() {
  const router = useRouter();
  const isHome = router.pathname === '/';
  const renderQuickLink = (item) => {
    const href = item.path === 'home' ? '/' : `/#${item.path}`;
    return isHome ? (
      <ScrollLink
        key={item.id}
        activeClass="active"
        to={item.path}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
        {item.label}
      </ScrollLink>
    ) : (
      <a key={item.id} href={href}>{item.label}</a>
    );
  };

  return (
    <footer sx={styles.footer}>
      <Container sx={styles.container}>
        <Grid sx={styles.topGrid}>
          <Box sx={styles.about}>
            <Heading as="h3" sx={styles.brand}>[ we2Tech Ltd ]</Heading>
            <Text sx={styles.blurb}>
              Hong Kong-based development team building mobile apps, websites,
              UI/UX design and cloud systems that help businesses grow.
            </Text>
            <Flex sx={styles.social}>
              <a href="https://www.instagram.com/we2tech/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me/85253968435" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </Flex>
          </Box>

          <Box sx={styles.links}>
            <Heading as="h4" sx={styles.heading}>Services</Heading>
            {serviceLinks.map((item) => (
              <a key={item.id} href={item.path}>{item.label}</a>
            ))}
          </Box>

          <Box sx={styles.links}>
            <Heading as="h4" sx={styles.heading}>Quick Links</Heading>
            {quickLinks.map((item) => renderQuickLink(item))}
          </Box>

          <Box sx={styles.contactBox}>
            <Heading as="h4" sx={styles.heading}>Contact Us</Heading>
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
          Copyright © {new Date().getFullYear()} we2Tech Ltd. All rights reserved.
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
      'repeat(2,1fr)',
      'repeat(4,1fr)',
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
    color: 'cyan',
    fontSize: 4,
    flexShrink: 0,
    mt: '2px',
  },
  contactTitle: {
    color: 'white',
    fontSize: 1,
    fontWeight: 700,
    fontFamily: 'Ubuntu',
    mb: 1,
  },
  contactText: {
    color: 'white',
    fontSize: 1,
    lineHeight: 1.8,
    opacity: 0.9,
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
