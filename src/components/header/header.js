/** @jsx jsx */
import { jsx, Box, Flex, Image, Button, Text } from 'theme-ui';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Link as ScrollLink } from 'react-scroll';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import menuItems from './header.data';
import { AiFillInstagram } from "react-icons/ai";
import { IoIosArrowDown } from 'react-icons/io';
import Logo from 'assets/we2Tech/we2Tech_logo.png';

import MobileDrawer from './mobile-drawer';

const serviceLinks = [
  { path: '/services/mobile-app-development', label: 'Mobile App Development' },
  { path: '/services/web-app-development', label: 'Web App Development' },
  { path: '/services/ui-ux-design', label: 'UI/UX Design' },
  { path: '/services/server-deployment', label: 'Server Deployment' },
  { path: '/services/maintenance-support', label: 'Maintenance & Support' },
];

export default function Header({ className }) {
  const router = useRouter();
  const isHome = router.pathname === '/';
  const [servicesOpen, setServicesOpen] = useState(false);

  const renderNavItem = ({ path, label }, i) => {
    const href = path === 'home' ? '/' : `/#${path}`;
    return isHome ? (
      <ScrollLink
        activeClass="active"
        to={path}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        key={i}>
        {label}
      </ScrollLink>
    ) : (
      <a href={href} key={i}>
        {label}
      </a>
    );
  };

  const renderServices = (
    <Box sx={styles.dropdownWrap} onMouseLeave={() => setServicesOpen(false)}>
      <Box
        sx={styles.dropdownTrigger}
        onMouseEnter={() => setServicesOpen(true)}
        onClick={() => setServicesOpen(!servicesOpen)}>
        SERVICES
        <Box sx={{ ...styles.caret, ...(servicesOpen ? styles.caretOpen : {}) }}>
          <IoIosArrowDown />
        </Box>
      </Box>
      {servicesOpen && (
        <Box sx={styles.dropdown}>
          <a href="/#services" onClick={() => setServicesOpen(false)}>All Services</a>
          {serviceLinks.map((item) => (
            <a key={item.path} href={item.path} onClick={() => setServicesOpen(false)}>
              {item.label}
            </a>
          ))}
        </Box>
      )}
    </Box>
  );

  const renderCta = (
    <ScrollLink
      to="contactUs"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}>
      <Button variant="whiteButton" sx={styles.cta}>Get a Quote</Button>
    </ScrollLink>
  );

  return (
    <DrawerProvider>
      <header id="header" sx={styles.header} className={className}>
        <a href="/">
          <Image
            src={Logo}
            width={'100'} />
        </a>
        <Box sx={styles.contextContainer}>
          <Flex as="nav" sx={styles.nav}>
            {menuItems.map((item, i) => {
              if (item.path === 'services') return renderServices;
              return renderNavItem(item, i);
            })}
          </Flex>
          <Flex as="instagram" sx={styles.instagram}>
            <a href="https://www.instagram.com/we2tech/" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram size="30px" />
            </a>
          </Flex>
          {isHome ? renderCta : <a href="/#contactUs"><Button variant="whiteButton" sx={styles.cta}>Get a Quote</Button></a>}
        </Box>
        <MobileDrawer />
      </header>
    </DrawerProvider>
  );
}

const styles = {
  header: {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    pl: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'teal',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
    transition: 'all 0.4s ease',
    '&.sticky': {
      '@media screen and (max-width: 1024px)': {
        display: 'none',
      },
      backgroundColor: 'teal',
      py: '15px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
    },
  },
  contextContainer: {
    display: 'flex',
    '@media screen and (max-width: 1024px)': {
      display: 'none',
    },
  },
  nav: {
    alignItems: 'center',
    a: {
      fontSize: 1,
      fontWeight: 'bold',
      color: 'white',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      textDecoration: 'none',
      fontFamily: 'Ubuntu',
      '&:hover, &.active': {
        color: 'cyan',
      }
    },
  },
  dropdownWrap: {
    position: 'relative',
  },
  dropdownTrigger: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    fontSize: 1,
    fontWeight: 'bold',
    color: 'white',
    px: 5,
    cursor: 'pointer',
    lineHeight: '1.2',
    transition: 'all 0.15s',
    fontFamily: 'Ubuntu',
    '&:hover': {
      color: 'cyan',
    },
  },
  caret: {
    display: 'flex',
    alignItems: 'center',
    transition: 'transform 0.2s',
  },
  caretOpen: {
    transform: 'rotate(180deg)',
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    minWidth: 240,
    backgroundColor: 'white',
    borderRadius: 10,
    boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
    py: 2,
    zIndex: 999,
    a: {
      display: 'block',
      color: 'heading',
      px: 4,
      py: 2,
      fontSize: 1,
      fontWeight: 500,
      whiteSpace: 'nowrap',
      '&:hover': {
        color: 'teal',
        backgroundColor: 'background_secondary',
      },
    },
  },
  instagram: {
    alignItems: 'center',
    a: {
      color: 'cyan',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      fontFamily: 'Ubuntu',
      '&:hover': {
        color: 'white'
      },
      '&.active': {
        color: 'white',
      },
    },
  },
  cta: {
    ml: 3,
    py: '10px',
    px: '22px',
    fontSize: 1,
    fontFamily: 'Ubuntu',
  },
};
