import SEO from 'components/seo';
import Layout from 'components/layout';
import JsonLd from '../../components/json-ld';
import Home from '../../sections/home';
import Stats from '../../sections/stats';
import TechStack from '../../sections/techStack';
import Instagram from '../../sections/instagram';
import Location from '../../sections/location';
import { useLocale } from '../../locales';

export default function LocaleIndex() {
  const { locale, t } = useLocale();
  return (
    <Layout>
      <SEO path="/" locale={locale} title={t('seo.home.title')} description={t('seo.home.desc')} />
      <JsonLd type="organization" locale={locale} />
      <Home />
      <Stats />
      <TechStack />
      <Instagram />
      <Location />
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
