import React, { useEffect } from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Home from '../sections/home';
import ContactUs from '../sections/contactUs.tsx';
import Services from '../sections/services';
import HowWeWork from '../sections/howWeWork';

// import { motion, useAnimation } from "framer-motion";
// import { useInView } from 'react-intersection-observer';

// const variants = {
//   visible: { opacity: 1, scale: 2 },
//   hidden: { opacity: 0, scale: 0 },
// };

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="we2Tech [Mobile / Website application development]" />
          <Home />
          <Services />
          <HowWeWork />
          <ContactUs />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
