import SEO from 'components/seo';
import Layout from 'components/layout';
import CaseDemo from '../../sections/case-demo';
import JsonLd from '../../components/json-ld';
import cases from '../../sections/case-data';
import { useLocale } from '../../locales';

export default function CaseDemoPage({ item }) {
  const { locale, t } = useLocale();
  return (
    <Layout>
      <SEO
        path={`/cases/${item.id}`}
        locale={locale}
        title={`${item.title} Demo | we2Tech`}
        description={item.summary} />
      <JsonLd
        type="breadcrumb"
        locale={locale}
        items={[
          { name: t('nav.home'), path: '/' },
          { name: t('nav.cases'), path: '/cases' },
          { name: item.title, path: `/cases/${item.id}` },
        ]} />
      <CaseDemo item={item} locale={locale} t={t} tagNames={{}} />
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: cases.map((c) => ({ params: { id: String(c.id) } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const item = cases.find((c) => String(c.id) === params.id);
  return { props: { item } };
}
