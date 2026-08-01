import SEO from 'components/seo';
import Layout from 'components/layout';
import JsonLd from '../../components/json-ld';
import posts from '../../data/blog-data';
import PostBody from '../../components/blog-post-body';

export default function BlogPost({ post }) {
  const url = `https://we2tech.pro/blog/${post.slug}`;
  return (
    <Layout>
      <SEO
        path={`/blog/${post.slug}`}
        title={`${post.title} | we2Tech`}
        description={post.description} />
      <JsonLd
        type="article"
        post={{ ...post, url }} />
      <JsonLd
        type="breadcrumb"
        items={[
          { name: 'Home', path: '/' },
          { name: 'Insights & Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ]} />
      <PostBody post={post} />
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  return { props: { post } };
}
