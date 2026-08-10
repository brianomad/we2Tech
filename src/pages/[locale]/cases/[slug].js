import SEO from 'components/seo';
import Layout from 'components/layout';
import CaseDemo from '../../../sections/case-demo';
import JsonLd from '../../../components/json-ld';
import zhCases, { tagNames as zhTagNames } from '../../../data/case-data-zh';
import zhCnCases, { tagNames as zhCnTagNames } from '../../../data/case-data-zh-cn';
import { caseSlug, findCaseBySlug } from '../../../data/case-url';
import { useLocale } from '../../../locales';

const byLocale = { zh: zhCases, 'zh-cn': zhCnCases };
const tagNamesByLocale = { zh: zhTagNames, 'zh-cn': zhCnTagNames };

export default function LocaleCaseDemo({ item, tagNames }) {
  const { locale, t } = useLocale();
  const slug = caseSlug(item);
  return (
    <Layout>
      <SEO
        path={`/cases/${slug}`}
        locale={locale}
        title={`${item.title} | we2Tech`}
        description={item.summary} />
      <JsonLd
        type="breadcrumb"
        locale={locale}
        items={[
          { name: t('nav.home'), path: '/' },
          { name: t('nav.cases'), path: '/cases' },
          { name: item.title, path: `/cases/${slug}` },
        ]} />
      <CaseDemo item={item} locale={locale} t={t} tagNames={tagNames} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const locales = ['zh', 'zh-cn'];
  return {
    paths: locales.flatMap((locale) =>
      byLocale[locale].flatMap((c) => [
        { params: { locale, slug: caseSlug(c) } },
        { params: { locale, slug: String(c.id) } },
      ])
    ),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const list = byLocale[params.locale];
  const item = findCaseBySlug(list, params.slug);
  return { props: { item, tagNames: tagNamesByLocale[params.locale] } };
}
