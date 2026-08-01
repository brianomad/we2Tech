import SEO from 'components/seo';
import Layout from 'components/layout';
import FAQ from '../sections/faq';

export default function FaqPage() {
  return (
    <Layout>
      <SEO
        title="FAQ | we2Tech"
        description="Frequently asked questions about we2Tech's mobile app, web development, UI/UX design, server deployment and maintenance support services in Hong Kong." />
      <FAQ />
    </Layout>
  );
}
