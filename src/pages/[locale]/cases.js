import SEO from 'components/seo';
import Layout from 'components/layout';
import Cases from '../../sections/cases';
import JsonLd from '../../components/json-ld';
import { useLocale } from '../../locales';

export default function LocaleCases() {
  const { locale, t } = useLocale();
  return (
    <Layout>
      <SEO path="/cases" locale={locale} title={t('seo.cases.title')} description={t('seo.cases.desc')} />
      <JsonLd
        type="breadcrumb"
        locale={locale}
        items={[
          { name: t('nav.home'), path: '/' },
          { name: t('nav.cases'), path: '/cases' },
        ]} />
      <Cases />
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { locale: 'zh' } }, { params: { locale: 'zh-cn' } }],
    fallback: false,
  };
}

export async function getStaticProps() {
  return { props: {} };
}
