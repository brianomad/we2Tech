import SEO from 'components/seo';
import Layout from 'components/layout';
import Home from '../sections/home';
import Stats from '../sections/stats';
import TechStack from '../sections/techStack';
import FAQ from '../sections/faq';
import ContactUs from '../sections/contactUs.tsx';

export default function IndexPage() {
  return (
    <Layout>
      <SEO />
      <Home />
      <Stats />
      <TechStack />
      <FAQ />
      <ContactUs />
    </Layout>
  );
}
