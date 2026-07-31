import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Home from '../sections/home';
import Stats from '../sections/stats';
import Services from '../sections/services';
import HowWeWork from '../sections/howWeWork';
import WhyChooseUs from '../sections/whyChooseUs';
import TechStack from '../sections/techStack';
import Testimonials from '../sections/testimonials';
import FAQ from '../sections/faq';
import CTABand from '../sections/ctaBand';
import ContactUs from '../sections/contactUs.tsx';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO />
          <Home />
          <Stats />
          <Services />
          <HowWeWork />
          <WhyChooseUs />
          <TechStack />
          <Testimonials />
          <FAQ />
          <CTABand />
          <ContactUs />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
