/** @jsx jsx */
import { jsx, Box, Grid, Container, Image, Heading, Text, Flex } from 'theme-ui';
import FeatureCardColumn from 'components/feature-card-column.js';

const data = [
  {
    id: 1,
    title: 'Address',
    text: 'WEST WING 2/F, 822 LAI CHI KO ROAD, CHEUNG SHA WAN, KOWLOON, HONG KONG'
  },
  {
    id: 2,
    title: 'Email',
    text: 'enquiry@we-2-tech.com'
  },
  {
    id: 3,
    title: 'Telephone Number',
    text: '+852 53968435'
  }
];


export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Box sx={styles.container}>
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.wrapper}>
              <Text sx={styles.wrapper.title}>{item.title}</Text>
              <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
            </Box>
          ))}
        </Grid>
      </Box>
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
  container: {
    borderTop: '1px solid',
    borderTopColor: 'border_color',
    pt: [7, null, 6],
  },
  grid: {
    // width: ['100%', '80%', '100%'],
    // mx: 'auto',
    // gridGap: [
    //   '35px 0',
    //   null,
    //   '40px 40px',
    //   '50px 60px',
    //   '30px',
    //   '50px 40px',
    //   '55px 90px',
    // ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },

  title: {
    color: 'lightgreen',
    fontFamily: 'Ubuntu'
  },
  footer: {
    backgroundColor: 'black',
    footerBottomArea: {
      pt: [7, null, 6],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
      color: 'lightgreen',
      fontFamily: 'Ubuntu'
    },
  },
  wrapper: {
    textAlign: 'center',
    display: 'flex',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
      color: 'lightgreen',
      fontFamily: 'Ubuntu'
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: '1.9',
      color: 'white',
      fontFamily: 'Ubuntu'
    },
  },
};
