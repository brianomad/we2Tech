/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import { Link as ScrollLink } from 'react-scroll';

import BannerImg from 'assets/we2Tech/home.png';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';

export default function Home() {
  return (
    <section id="home">
      <Container sx={styles.container}>
        {/* <Box sx={styles.home.imageBox}> */}
        <Image src={BannerImg} alt="banner" />
        {/* </Box> */}
      </Container>
    </section>
  );
}

const styles = {
  container: {
    height: '100%'
  },
  banner: {
    width: '100%',
    borderWidth: 10
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
      }
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
    },
  },
};
