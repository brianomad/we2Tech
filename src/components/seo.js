import React from 'react';
import Head from 'next/head';
import { LOCALES, getLocaleInfo, localizedPath } from '../locales';

const SITE_URL = 'https://we2tech.pro';

export default function SEO({
  description,
  author = 'we2Tech Ltd',
  meta,
  title,
  image = `${SITE_URL}/og-image.png`,
  path = '/',
  keywords,
  locale = 'en',
}) {
  const info = getLocaleInfo(locale);
  const localPath = localizedPath(locale, path);
  const url = `${SITE_URL}${localPath === '/' ? '/' : localPath}`;
  const metaData = [
    { name: `description`, content: description },
    { name: `keywords`, content: keywords },
    { property: `og:title`, content: title },
    { property: `og:description`, content: description },
    { property: `og:type`, content: `website` },
    { property: `og:site_name`, content: `we2Tech` },
    { property: `og:locale`, content: info.ogLocale },
    { property: `og:image`, content: image },
    { property: `og:url`, content: url },
    { name: `twitter:card`, content: `summary_large_image` },
    { name: `twitter:creator`, content: author },
    { name: `twitter:title`, content: title },
    { name: `twitter:description`, content: description },
    { name: `twitter:image`, content: image },
    { name: `geo.region`, content: `HK` },
    { name: `geo.placename`, content: `Hong Kong` },
  ].concat(meta || []);
  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      {LOCALES.map((l) => (
        <link
          key={l.code}
          rel="alternate"
          hrefLang={l.htmlLang}
          href={`${SITE_URL}${localizedPath(l.code, path) === '/' ? '/' : localizedPath(l.code, path)}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${SITE_URL}${localizedPath('en', path) === '/' ? '/' : localizedPath('en', path)}`}
      />
      {metaData.map(({ name, content, property }, i) => (
        <meta key={i} {...(property ? { property } : { name })} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  title: `we2Tech`,
};
