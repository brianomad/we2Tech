/** @jsx jsx */
import { jsx, Box, Flex, Text, Image } from 'theme-ui';
// import { Link } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import menuItems from './header.data';
import { AiFillInstagram } from "react-icons/ai";
import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import Logo from 'assets/we2Tech/we2Tech_logo.png';

import MobileDrawer from './mobile-drawer';

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header id="header" sx={styles.header} className={className}>
        {/* <Box sx={styles.titleContainer}>
          <Text sx={styles.title}>[ we2Tech Ltd ]</Text>
          <Box sx={styles.contextContainer}>
            <Box sx={styles.context}>
              <BiMailSend size="40px" />
              <Box sx={styles.contextDetails}>
                <Text sx={styles.title}>Email</Text>
                <Text sx={styles.title}>enquiry@we-2-tech.com</Text>
              </Box>
            </Box>
            <Box sx={styles.context}>
              <BiPhoneCall size="40px" />
              <Box sx={styles.contextDetails}>
                <Text sx={styles.title}>Phone</Text>
                <Text sx={styles.title}>+852 53968435</Text>
              </Box>
            </Box>
          </Box>
        </Box> */}
        <Image
          src={Logo}
          width={'80'} />
        {/* width={'80'} /> */}
        <Box sx={styles.contextContainer}>
          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
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
            ))}
          </Flex>
          <Flex as="instagram" sx={styles.instagram}>
            <a href="https://www.instagram.com/we2tech/">
              <AiFillInstagram size="30px" />
            </a>
          </Flex>
        </Box>
        {/* <MobileDrawer /> */}
      </header>
    </DrawerProvider>
  );
}

const styles = {
  header: {
    py: '25px',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    pl: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    '&.sticky': {
      backgroundColor: '#008B8B',
      py: '15px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
    },
  },
  title: {
    color: 'black',
    fontFamily: 'Ubuntu'
  },
  contextContainer: {
    display: 'flex'
  },
  context: {
    paddingLeft: 30,
    display: 'flex'
  },
  contextDetails: {
    paddingLeft: 3,
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
      fontFamily: 'Ubuntu',
      '&:hover, &.active': {
        color: '#00FFFF',
      }
    },
  },
  instagram: {
    alignItems: 'center',
    a: {
      color: '#00FFFF',
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
};
