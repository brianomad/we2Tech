import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Home from '../sections/home';
import Stats from '../sections/stats';
import Stages from '../sections/stages';
import Operational from '../sections/operational';
import MVPPath from '../sections/mvpPath';
import Architecture from '../sections/architecture';
import ProjectRescue from '../sections/projectRescue';
import WhyChooseUs from '../sections/whyChooseUs';
import Services from '../sections/services';
import HowWeWork from '../sections/howWeWork';
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
          <Operational />
          <MVPPath />
          <Architecture />
          <ProjectRescue />
          <WhyChooseUs />
          <Services />
          <HowWeWork />
          <TechStack />
          <FAQ />
          <CTABand />
          <ContactUs />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
