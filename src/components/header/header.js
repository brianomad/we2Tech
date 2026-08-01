/** @jsx jsx */
import { jsx, Box, Flex, Image, Button, Text } from 'theme-ui';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { scroller } from 'react-scroll';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import menuItems from './header.data';
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

  const smoothScroll = (e, target) => {
    if (!isHome) return;
    e.preventDefault();
    scroller.scrollTo(target === 'home' ? 'home' : target, {
      smooth: true,
      offset: -70,
      duration: 500,
    });
  };

  const renderNavItem = ({ path, label }, i) => {
    const isActive =
      path === 'home' ? router.pathname === '/' : router.pathname === path;
    if (path.startsWith('/')) {
      return (
        <a href={path} key={i} className={isActive ? 'active' : undefined}>
          {label}
        </a>
      );
    }
    const href = path === 'home' ? '/' : `/#${path}`;
    return (
      <a
        href={href}
        key={i}
        className={isActive ? 'active' : undefined}
        onClick={(e) => smoothScroll(e, path)}>
        {label}
      </a>
    );
  };

  const renderServices = (
    <Box sx={styles.dropdownWrap} onMouseLeave={() => setServicesOpen(false)}>
      <Box
        sx={styles.dropdownTrigger}
        className={router.pathname.startsWith('/services') ? 'active' : undefined}
        onMouseEnter={() => setServicesOpen(true)}
        onClick={() => setServicesOpen(!servicesOpen)}>
        SERVICES
        <Box sx={{ ...styles.caret, ...(servicesOpen ? styles.caretOpen : {}) }}>
          <IoIosArrowDown />
        </Box>
      </Box>
      {servicesOpen && (
        <Box sx={styles.dropdown}>
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
    <a href="/contact">
      <Button variant="whiteButton" sx={styles.cta}>Get a Quote</Button>
    </a>
  );

  return (
    <DrawerProvider>
      <header id="header" sx={styles.header} className={className}>
        <a href="/">
          <Image
            src={Logo}
            alt="we2Tech"
            sx={styles.logo} />
        </a>
        <Box sx={styles.contextContainer}>
          <Flex as="nav" sx={styles.nav}>
            {menuItems.map((item, i) => {
              if (item.path === 'services') return renderServices;
              return renderNavItem(item, i);
            })}
          </Flex>
          {renderCta}
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
    pr: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'teal',
    py: ['12px', null, '15px'],
    borderBottom: '1px solid rgba(255,255,255,0.12)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    transition: 'all 0.4s ease',
    '&.sticky': {
      backgroundColor: 'teal',
      py: '12px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
  },
  logo: {
    height: ['36px', null, '42px'],
    width: 'auto',
    display: 'block',
  },
  contextContainer: {
    display: 'flex',
    '@media screen and (max-width: 1000px)': {
      display: 'none',
    },
  },
  nav: {
    alignItems: 'center',
    a: {
      position: 'relative',
      fontSize: 1,
      fontWeight: 'bold',
      color: 'white',
      px: 5,
      py: 2,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'color 0.25s',
      textDecoration: 'none',
      fontFamily: 'Ubuntu',
      '&::after': {
        content: '""',
        position: 'absolute',
        left: 5,
        right: 5,
        bottom: '2px',
        height: '2px',
        backgroundColor: 'cyan',
        transform: 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.25s ease',
      },
      '&:hover, &.active': {
        color: 'cyan',
      },
      '&:hover::after, &.active::after': {
        transform: 'scaleX(1)',
      },
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
    '&.active': {
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
  cta: {
    ml: 3,
    py: '10px',
    px: '22px',
    fontSize: 1,
    fontFamily: 'Ubuntu',
  },
};
