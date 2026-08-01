import SEO from 'components/seo';
import Layout from 'components/layout';
import Cases from '../sections/cases';

export default function CasesPage() {
  return (
    <Layout>
      <SEO
        title="Client Success Stories | we2Tech"
        description="See how we2Tech helps Hong Kong businesses build mobile apps, websites, cloud systems and more — browse client work by service category." />
      <Cases />
    </Layout>
  );
}
