import ServicePage from '../../../components/service-page';
import serviceContents from '../../../data/services';
import { useLocale } from '../../../locales';

export default function LocaleService({ slug }) {
  const { locale } = useLocale();
  const entry = serviceContents[slug];
  const content = entry ? entry[locale] || entry.zh : null;
  if (!content) return null;
  return <ServicePage content={content} />;
}

export async function getStaticPaths() {
  const locales = ['zh', 'zh-cn'];
  const paths = Object.keys(serviceContents).flatMap((slug) =>
    locales.map((locale) => ({ params: { locale, slug } }))
  );
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}
