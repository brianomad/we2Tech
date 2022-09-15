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
        {/* <MobileDrawer /> */}
      </header>
    </DrawerProvider>
  );
}

const styles = {
  title: {
    color: 'lightgreen',
    fontFamily: 'Ubuntu',
    paddingLeft: 20,
    paddingTop: 16
  },
  header: {
    backgroundColor: 'black',
    paddingBottom: 20
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  nav: {
    justifyContent: 'flex-end',
    a: {
      fontSize: 2,
      fontWeight: 'body',
      color: 'white',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      fontFamily: 'Ubuntu',
      '&:hover': {
        color: 'white'
      },
      '&.active': {
        color: 'lightgreen',
      },
    },
  },
};
