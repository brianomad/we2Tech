/** @jsx jsx */
import { jsx, Container, Flex, Text, Box } from 'theme-ui';
import { Link } from 'react-scroll';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import menuItems from './header.data';
import { AiFillInstagram } from "react-icons/ai";

import MobileDrawer from './mobile-drawer';

export default function Header() {
  return (
    <DrawerProvider>
      <header sx={styles.header} id="header">
        <Container sx={styles.container}>

          <Box sx={styles.topicContainer}>
            <Text sx={styles.title}>[ we2Tech Ltd ]</Text>
              <Link href="https://www.instagram.com/we2tech/" sx={styles.topic}>
                <AiFillInstagram size="40px" color="white" />
              </Link>
          </Box>

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
  topicContainer: {
    display: 'flex'
  },
  title: {
    color: 'lightgreen',
    fontFamily: 'Ubuntu',
    paddingLeft: 20,
    paddingTop: 16
  },
  topic: {
    marginLeft: 20
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
