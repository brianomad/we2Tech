import React from 'react';
import {
  Box,
  Grid,
  Text,
  Heading,
  Image,
} from 'theme-ui';

import ServiceThumb from 'assets/service-thumb.png';
import shapePattern from 'assets/shape-pattern1.png';

import TextFeature from 'components/text-feature';

export default function ServicesCard(props) {
  const { details } = props;

  return (
    <Box sx={styles.container} key={details.id}>
      <Box sx={styles.thumbnail}>
        <Image src={ServiceThumb} alt="Thumbnail" />
        {/* <Button
          sx={styles.videoBtn}
          onClick={handleClick}
          aria-label="Play Button"
        >
          <span>
            <IoIosPlay />
          </span>
        </Button> */}

        {/* <Box sx={styles.shapeBox}>
          <Image src={shapePattern} alt="Shape" />
        </Box> */}
      </Box>
      <Box sx={styles.contentBox}>
        <TextFeature subTitle={details.subTitle} title={details.title} />

        {details.features.map((Details) => {
          return (
            <Grid sx={styles.grid}>
              <Box sx={styles.card} key={Details.id}>
                {/* <Image src={item.imgSrc} alt={item.altText} sx={styles.icon} /> */}
                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{Details.title}</Heading>
                  <Text sx={styles.wrapper.subTitle}>{Details.text}</Text>
                </Box>
              </Box>
            </Grid>
          )
        })}

      </Box>
    </Box>
  );
}

const styles = {
  container: {
    display: 'flex',
    // flexDirection: 'row',
    // position: 'relative'
  },
  thumbnail: {
    // display: 'flex',
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left']
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
    },
    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9,
    },
  },
}
