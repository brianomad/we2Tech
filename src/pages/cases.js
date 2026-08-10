import SEO from 'components/seo';
import Layout from 'components/layout';
import Cases from '../sections/cases';
import JsonLd from '../components/json-ld';

export default function CasesPage() {
  return (
    <Layout>
      <SEO
        path="/cases"
        title="Demo Cases | we2Tech"
        description="See how we2Tech helps Hong Kong businesses build mobile apps, websites, cloud systems and more — browse client work by service category." />
      <JsonLd type="breadcrumb" items={[{ name: 'Home', path: '/' }, { name: 'Demo Cases', path: '/cases' }]} />
      <Cases />
    </Layout>
  );
}
