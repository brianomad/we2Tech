import SEO from 'components/seo';
import Layout from 'components/layout';
import JsonLd from '../../components/json-ld';
import Blog from '../../sections/blog';
import { useLocale } from '../../locales';

export default function LocaleBlog() {
  const { locale, t } = useLocale();
  return (
    <Layout>
      <SEO path="/blog" locale={locale} title={t('seo.blog.title')} description={t('seo.blog.desc')} />
      <JsonLd
        type="breadcrumb"
        locale={locale}
        items={[
          { name: t('nav.home'), path: '/' },
          { name: t('nav.insights'), path: '/blog' },
        ]} />
      <Blog />
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
