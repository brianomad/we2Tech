import SEO from 'components/seo';
import Layout from 'components/layout';
import JsonLd from '../../../components/json-ld';
import { postsByLocale } from '../../../data/blog-data';
import PostBody from '../../../components/blog-post-body';
import { useLocale, localizedPath } from '../../../locales';

export default function LocaleBlogPost({ post }) {
  const { locale, t } = useLocale();
  const url = `https://we2tech.pro${localizedPath(locale, `/blog/${post.slug}`)}`;
  return (
    <Layout>
      <SEO
        path={`/blog/${post.slug}`}
        locale={locale}
        title={`${post.title} | we2Tech`}
        description={post.description} />
      <JsonLd type="article" locale={locale} post={{ ...post, url }} />
      <JsonLd
        type="breadcrumb"
        locale={locale}
        items={[
          { name: t('nav.home'), path: '/' },
          { name: t('blog.title'), path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ]} />
      <PostBody post={post} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const locales = ['zh', 'zh-cn'];
  const slugs = postsByLocale.en.map((post) => post.slug);
  return {
    paths: locales.flatMap((locale) =>
      slugs.map((slug) => ({ params: { locale, slug } }))
    ),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = postsByLocale[params.locale] || postsByLocale.en;
  const post = posts.find((p) => p.slug === params.slug);
  return { props: { post } };
}
