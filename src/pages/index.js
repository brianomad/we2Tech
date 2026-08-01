import SEO from 'components/seo';
import Layout from 'components/layout';
import JsonLd from '../components/json-ld';
import Home from '../sections/home';
import Stats from '../sections/stats';
import TechStack from '../sections/techStack';
import Instagram from '../sections/instagram';

export default function IndexPage() {
  return (
    <Layout>
      <SEO path="/" />
      <JsonLd type="organization" />
      <Home />
      <Stats />
      <TechStack />
      <Instagram />
    </Layout>
  );
}
