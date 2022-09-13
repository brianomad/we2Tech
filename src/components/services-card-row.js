import React from 'react';
import {
  Box,
  Grid,
  Text,
  Heading
} from 'theme-ui';

import TextFeature from 'components/text-feature';

export default function ServicesCardRow() {

  const details = [
    {
      subTitle: 'our services',
      title: 'SERVER DEPLOYMENT',
      featuresTitle: 'Features',
      featuresText:
        'Develop cloud-based systems & implement cloud server based on your needs. Adopt worldwide trend of remote working & infuse digital culture into your work environment. ',
      // technologyTitle: 'Technology provided',
      // technologyText:
      //   'IOS APP DEVELOPMENT\nsubContext',
    },
    {
      subTitle: 'our services',
      title: 'MAINTAINENCE',
      featuresTitle: 'Features',
      featuresText:
        'We will host the site and maintain your application , and will also troubleshoot the unexpected issue. And even if things are going smoothly, we can upgrade the application according to the your requirement',
      // technologyTitle: 'Technology provided',
      // technologyText:
      //   'IOS APP DEVELOPMENT\nsubContext',
    },
  ]

  return (
    <Box sx={styles.container} key={details.id}>
      <Box sx={styles.contentBox}>
        {details.map((Details) => {
          return (
            <Box sx={styles.innerContainer}>
              <TextFeature subTitle={Details.subTitle} title={Details.title} />
              <Grid sx={styles.grid}>
                <Box sx={styles.card} key={Details.id}>
                  <Box sx={styles.wrapper}>
                    <Heading sx={styles.wrapper.title}>{Details.featuresTitle}</Heading>
                    <Text sx={styles.wrapper.subTitle}>{Details.featuresText}</Text>
                  </Box>
                </Box>
              </Grid>
              <Grid sx={styles.grid}>
                <Box sx={styles.card} key={Details.id}>
                  <Box sx={styles.wrapper}>
                    <Heading sx={styles.wrapper.title}>{Details.technologyTitle}</Heading>
                    <Text sx={styles.wrapper.subTitle}>{Details.technologyText}</Text>
                  </Box>
                </Box>
              </Grid>
            </Box>
          )
        })}
      </Box>
    </Box>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 40,
  },
  thumbnail: {
    // mr: ['auto', null, null, 6, 60, 85],
    // order: [2, null, null, 0],
    // ml: ['auto', null, null, 0],
    // display: 'inline-flex',
    // position: 'relative',
    // '> img': {
    //   position: 'relative',
    //   zIndex: 1,
    //   height: [310, 'auto'],
    // },
    paddingLeft: 100
  },
  contentBox: {
    width: '100%',
    display: 'flex',
    textAlign: ['left', null, 'left'],
  },
  innerContainer: {
    margin: 20
  },
  grid: {
    pr: [2, 0, null, null, 6, '70px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    width: ['100%', 370, 420, '100%'],
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
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
      color: 'lightgreen',
      fontFamily: 'Kalam'
    },
    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9,
      color: 'white',
      fontFamily: 'Kalam'
    },
  },
}
