import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Home from '../sections/home';
import Stats from '../sections/stats';
import Stages from '../sections/stages';
import MVPPath from '../sections/mvpPath';
import Services from '../sections/services';
import HowWeWork from '../sections/howWeWork';
import Architecture from '../sections/architecture';
import Operational from '../sections/operational';
import ProjectRescue from '../sections/projectRescue';
import WhyChooseUs from '../sections/whyChooseUs';
import TechStack from '../sections/techStack';
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
          <Stages />
          <MVPPath />
          <Services />
          <HowWeWork />
          <Architecture />
          <Operational />
          <ProjectRescue />
          <WhyChooseUs />
          <TechStack />
          <FAQ />
          <CTABand />
          <ContactUs />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
