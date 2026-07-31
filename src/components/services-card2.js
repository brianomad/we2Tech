import React from 'react';
import {
  Box,
  Grid,
  Text,
  Heading,
  Image,
} from 'theme-ui';

import ServiceThumb from 'assets/service-thumb.png';

import TextFeature from 'components/text-feature';

export default function ServicesCard2(props) {
  const { details } = props;

  return (
    <Box sx={styles.container} key={details.id}>
      <Box sx={styles.contentBox}>
        <TextFeature subTitle={details.subTitle} title={details.title} />

        {details.features.map((Details) => {
          return (
            <Grid sx={styles.grid} key={Details.title || Details.id}>
              <Box sx={styles.card} key={Details.id}>
                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{Details.title}</Heading>
                  <Text sx={styles.wrapper.subTitle}>{Details.text}</Text>
                </Box>
              </Box>
            </Grid>
          )
        })}
        <a href={details.path} sx={styles.learnMore}>Learn More →</a>
      </Box>
      <Box style={styles.imageContainer}>
        <Image
          src={details.features[0].imgSrc}
          alt="Thumbnail" />
      </Box>
    </Box>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    // m: 20,
    // ml: 60,
    // mr: 60,
    // border: '0.2px solid',
    // borderRadius: 20,
    // padding: 20,
    // margin: 20,
    // boxShadow: '0 10px 30px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    // borderColor: 'lightgrey',
    // backgroundColor: '#FAF0E6',
    // backgroundColor: '#028b8b',
    backgroundColor: 'white',
  },
  imageContainer: {
    width: '50%',
  },
  contentBox: {
    width: '50%',
    padding: 20,
    // flexShrink: 0,
    // mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left']
  },
  grid: {
    pr: [2, 0, null, null, 6, '70px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    // width: ['100%', 370, 420, '100%'],
    gridGap: ['35px 0', null, null, null, '50px 0'],
    gridTemplateColumns: ['repeat(1,1fr)'],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    mb: 40,
    title: {
      fontSize: 3,
      lineHeight: 1.4,
      fontWeight: 700,
      color: 'teal',
      fontFamily: 'Ubuntu'
    },
    subTitle: {
      fontSize: [1, null, null, '18px', 1],
      fontWeight: 400,
      lineHeight: 1.9,
      color: 'black',
      fontFamily: 'Ubuntu'
    },
  },
  learnMore: {
    display: 'inline-block',
    mt: 2,
    color: 'teal',
    fontSize: 2,
    fontWeight: 700,
    textDecoration: 'none',
    fontFamily: 'Ubuntu',
    '&:hover': {
      color: 'secondary',
    },
  },
}
