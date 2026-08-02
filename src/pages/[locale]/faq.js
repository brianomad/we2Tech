import SEO from 'components/seo';
import Layout from 'components/layout';
import FAQ from '../../sections/faq';
import JsonLd from '../../components/json-ld';
import { useLocale } from '../../locales';

export default function LocaleFaq() {
  const { locale, t } = useLocale();
  return (
    <Layout>
      <SEO path="/faq" locale={locale} title={t('seo.faq.title')} description={t('seo.faq.desc')} />
      <JsonLd
        type="breadcrumb"
        locale={locale}
        items={[
          { name: t('nav.home'), path: '/' },
          { name: t('nav.faq'), path: '/faq' },
        ]} />
      <JsonLd type="faq" locale={locale} />
      <FAQ />
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
