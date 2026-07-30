/** @jsx jsx */
import { jsx, Box, Grid, Container, Image, Heading, Text, Flex } from 'theme-ui';
import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    icon: <GoLocation size="40px" sx={{ width: '100%', color: 'white' }} />,
    title: 'Address',
    text: 'WEST WING 2/F, 822 LAI CHI KO ROAD, CHEUNG SHA WAN, KOWLOON, HONG KONG'
  },
  {
    id: 2,
    // icon: <BiMailSend size="40px" />,
    icon: <BiMailSend size="40px" sx={{ width: '100%', color: 'white' }} />,
    title: 'Email',
    text: 'enquiry@we2tech.pro'
  },
  {
    id: 3,
    icon: <BiPhoneCall size="40px" sx={{ width: '100%', color: 'white' }} />,
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
            <motion.div className="card" whileHover={{
              scale: 1.1,
              transition: {
                duration: .2
              }
            }}>
              <Box sx={styles.wrapper}>
                {item.icon}
                <Text sx={styles.wrapper.title}>{item.title}</Text>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </motion.div>
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
    p: [7, null, 6],
  },
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
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
    backgroundColor: 'teal',
    footerBottomArea: {
      pt: [7, null, 6],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
      color: 'white',
      fontFamily: 'Ubuntu'
    },
  },
  wrapper: {
    textAlign: 'center',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    title: {
      fontSize: 3,
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
      color: 'white',
      fontFamily: 'Ubuntu'
    },
    subTitle: {
      fontSize: 2,
      fontWeight: 400,
      lineHeight: '1.9',
      color: 'white',
      fontFamily: 'Ubuntu'
    },
  },
};
