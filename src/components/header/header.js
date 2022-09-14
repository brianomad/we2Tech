/** @jsx jsx */
import { jsx, Container, Flex, Text } from 'theme-ui';
import { keyframes } from '@emotion/react';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import menuItems from './header.data';
import MobileDrawer from './mobile-drawer';

export default function Header() {
  return (
    <DrawerProvider>
      <header sx={styles.header} id="header">
        <Container sx={styles.container}>

          <Text sx={styles.title}>[ we2Tech Ltd ]</Text>

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <Link
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}>
                {label}
              </Link>
            ))}
          </Flex>
        </Container>
        <MobileDrawer />
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  title: {
    color: 'lightgreen',
    fontFamily: 'Kalam'
  },
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 3,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    // backgroundColor: 'white',
    backgroundColor: 'black',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  nav: {
    // mx: 'auto',
    // display: 'none',
    // '@media screen and (min-width: 1024px)': {
    //   display: 'block',
    // },
    //  textAlign: 'center',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    a: {
      fontSize: 2,
      fontWeight: 'body',
      color: 'white',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      fontFamily: 'Kalam',
      '&:hover': {
        // color: 'primary',
        color: 'white'
      },
      '&.active': {
        // color: 'primary',
        color: 'lightgreen',
      },
    },
  },
};
