import SEO from 'components/seo';
import Layout from 'components/layout';
import JsonLd from '../components/json-ld';
import Blog from '../sections/blog';

export default function BlogPage() {
  return (
    <Layout>
      <SEO
        path="/blog"
        title="Insights & Blog | we2Tech"
        description="Practical guides on app development, web development and technology strategy in Hong Kong — app costs, framework comparisons and how to build better products." />
      <JsonLd type="breadcrumb" items={[{ name: 'Home', path: '/' }, { name: 'Insights & Blog', path: '/blog' }]} />
      <Blog />
    </Layout>
  );
}
