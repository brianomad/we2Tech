/** @jsx jsx */
import { jsx, Box, Grid, Container, Image, Heading, Text, Flex } from 'theme-ui';
import { Link } from 'components/link';
// import data from './footer.data';
import menuItems from '../header/header.data';
import FooterLogo from 'assets/logo.svg';
export default function Footer() {
  return (
    <footer sx={styles.footer}>

      <Container>
        {/* End of footer widgets area */}
        <Box sx={styles.footer.footerBottomArea}>
          <Text sx={styles.title}>[ we2Tech Ltd ]</Text>
          <Text sx={styles.footer.copyright}>
            Copyright by {new Date().getFullYear()} we2Tech Ltd.
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  title: {
    color: 'lightgreen',
    fontFamily: 'Kalam'
  },
  footer: {
    backgroundColor: 'black',
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
      color: 'lightgreen',
      fontFamily: 'Kalam'
    },
  },
};
