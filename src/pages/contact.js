import SEO from 'components/seo';
import Layout from 'components/layout';
import ContactUs from '../sections/contactUs.tsx';
import JsonLd from '../components/json-ld';

export default function ContactPage() {
  return (
    <Layout>
      <SEO
        path="/contact"
        title="Contact Us | we2Tech"
        description="Talk to your technology partner in Hong Kong. Share your business goal, current workflow and constraints — we review your project stage, risks and next step free of charge." />
      <JsonLd type="breadcrumb" items={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]} />
      <ContactUs />
    </Layout>
  );
}
