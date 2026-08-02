import SEO from 'components/seo';
import Layout from 'components/layout';
import ContactUs from '../../sections/contactUs.tsx';
import JsonLd from '../../components/json-ld';
import { useLocale } from '../../locales';

export default function LocaleContact() {
  const { locale, t } = useLocale();
  return (
    <Layout>
      <SEO path="/contact" locale={locale} title={t('seo.contact.title')} description={t('seo.contact.desc')} />
      <JsonLd
        type="breadcrumb"
        locale={locale}
        items={[
          { name: t('nav.home'), path: '/' },
          { name: t('nav.contact'), path: '/contact' },
        ]} />
      <ContactUs />
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
