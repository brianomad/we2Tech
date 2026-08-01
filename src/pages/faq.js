import SEO from 'components/seo';
import Layout from 'components/layout';
import FAQ from '../sections/faq';
import JsonLd from '../components/json-ld';

export default function FaqPage() {
  return (
    <Layout>
      <SEO
        path="/faq"
        title="FAQ | we2Tech"
        description="Frequently asked questions about we2Tech's mobile app, web development, UI/UX design, server deployment and maintenance support services in Hong Kong." />
      <JsonLd type="breadcrumb" items={[{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }]} />
      <JsonLd type="faq" />
      <FAQ />
    </Layout>
  );
}
