import SEO from 'components/seo';
import Layout from 'components/layout';
import CaseDemo from '../../sections/case-demo';
import JsonLd from '../../components/json-ld';
import cases from '../../sections/case-data';
import { caseSlug, findCaseBySlug } from '../../data/case-url';
import { useLocale } from '../../locales';

export default function CaseDemoPage({ item }) {
  const { locale, t } = useLocale();
  const slug = caseSlug(item);
  return (
    <Layout>
      <SEO
        path={`/cases/${slug}`}
        locale={locale}
        title={`${item.title} Demo | we2Tech`}
        description={item.summary} />
      <JsonLd
        type="breadcrumb"
        locale={locale}
        items={[
          { name: t('nav.home'), path: '/' },
          { name: t('nav.cases'), path: '/cases' },
          { name: item.title, path: `/cases/${slug}` },
        ]} />
      <CaseDemo item={item} locale={locale} t={t} tagNames={{}} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = cases.flatMap((c) => [
    { params: { slug: caseSlug(c) } },
    { params: { slug: String(c.id) } },
  ]);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const item = findCaseBySlug(cases, params.slug);
  return { props: { item } };
}
