import React from 'react';
/** @jsx jsx */
import {
  jsx,
  Container,
} from 'theme-ui';
import { keyframes } from '@emotion/react';

import ServicesCardRow from '../components/services-card-row';

import mobileAppDevelopment from 'assets/we2Tech/mobileAppDevelopment.png';
import UIUX from 'assets/we2Tech/UIUX.png';
import website from 'assets/we2Tech/website.png';

import ServicesCard from '../components/services-card';
import ServicesCard2 from '../components/services-card2';

const details = [
  {
    subTitle: 'our services',
    title: 'MOBILE APPLICATION DEVELOPMENT',
    features: [
      {
        id: 1,
        // imgSrc: Smart,
        imgSrc: mobileAppDevelopment,
        altText: 'Features',
        title: 'Features',
        text:
          'Our mobile app developers take the guesswork out of the equation by implementing proven strategies that optimize your app.',
      },
      {
        id: 2,
        altText: 'Technology provided',
        title: 'Technology provided',
        text:
          'All the technology inculded React Native, Flutter, swift, Kotlin etc. will be provide to the client.',
      },
    ],
  },
  {
    subTitle: 'our services',
    title: 'WEBSITE APPLICATION DEVELOPMENT',
    features: [
      {
        id: 1,
        imgSrc: website,
        altText: 'Features',
        title: 'Features',
        text:
          'We develop most kinds of website applications – for staff use to smoothen internal operations or for customers & end-users to purchase goods, collect points & more. This is an effective way to enhance brand image & customer stickiness. ',
      },
      {
        id: 2,
        title: 'Technology provided',
        text:
          'All the technology inculded React, Next, Wordpress, Angular etc. will be provide to the client.',
      },
    ]
  },
  {
    subTitle: 'our services',
    title: 'APPLICATION UI/UX DESIGN',
    features: [
      {
        id: 1,
        imgSrc: UIUX,
        altText: 'Features',
        title: 'Features',
        text:
          'UI/UX is one of the important part when developing your own website or mobile application. The layout design which is user-friendly can more easy to attract people to use your application and even its simple to convert them into loyal customers. Our design teams will design the most suitable UI UX according to the customer requirements. ',
      },
      // {
      //   id: 2,
      //   // imgSrc: Secure,
      //   altText: 'Technology provided',
      //   title: 'Technology provided',
      //   text:
      //     'IOS APP DEVELOPMENT\nsubContext',
      // },
    ]
  }
];

export default function Services() {
  return (
    <section sx={{ variant: 'section.services' }} id="services">
      <Container sx={styles.containerBox}>
        {details.map((Details, index) => (
          index % 2 === 1 ? (
            <ServicesCard2 details={Details} />
          ) : (
            <ServicesCard details={Details} />
          )
        ))}
        <ServicesCardRow />
      </Container>
    </section>
  );
}

const playPluse = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative',
  },
  containerBox: {
    // display: 'flex',
    // alignItems: ['flex-start', null, null, 'center'],
    // justifyContent: ['flex-start', null, null, 'space-between'],
    // flexDirection: ['column', null, null, 'row'],
    // pb: [0, null, null, null, null, 7],
    // minHeight: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  // container: {
  //   display: 'flex',
  // },
  // thumbnail: {
  //   // display: 'flex',
  //   mr: ['auto', null, null, 6, 60, 85],
  //   order: [2, null, null, 0],
  //   ml: ['auto', null, null, 0],
  //   display: 'inline-flex',
  //   position: 'relative',
  //   '> img': {
  //     position: 'relative',
  //     zIndex: 1,
  //     height: [310, 'auto'],
  //   },
  // },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block'],
  },
  videoBtn: {
    zIndex: 2,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: ['60px', null, '80px', null, '100px'],
    height: ['60px', null, '80px', null, '100px'],
    p: '0px !important',
    backgroundColor: 'transparent',
    '&::before': {
      position: 'absolute',
      content: '""',
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: ['60px', null, '80px', null, '100px'],
      height: ['60px', null, '80px', null, '100px'],
      backgroundColor: 'primary',
      borderRadius: '50%',
      animation: `${playPluse} 1.5s ease-out infinite`,
      opacity: 0.5,
    },
    '> span': {
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 'inherit',
      height: 'inherit',
      textAlign: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2,
    },
    svg: {
      fontSize: [40, null, 48, null, 62],
    },
  },
  // contentBox: {
  //   width: ['100%', null, null, 315, 390, 450, null, 500],
  //   flexShrink: 0,
  //   mb: [7, null, 60, 0],
  //   textAlign: ['center', null, null, 'left'],
  //   paddingLeft: 50
  // },
  // grid: {
  //   pr: [2, 0, null, null, 6, '70px'],
  //   pl: [2, 0],
  //   pt: [2, null, null, null, 3],
  //   mx: 'auto',
  //   width: ['100%', 370, 420, '100%'],
  //   gridGap: ['35px 0', null, null, null, '50px 0'],
  //   gridTemplateColumns: ['repeat(1,1fr)'],
  // },
  // card: {
  //   display: 'flex',
  //   alignItems: 'flex-start',
  //   transition: 'all 0.3s',
  // },

  icon: {
    width: ['45px', null, null, null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, null, null, null, 4],
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
  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%',
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
};
