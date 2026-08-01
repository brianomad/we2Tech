import React from 'react';
import Head from 'next/head';

const SITE_URL = 'https://we2tech.pro';

export default function SEO({
  description = 'we2Tech provides professional mobile app development, website development, UI/UX design, and server deployment services in Hong Kong.',
  author = 'we2Tech Ltd',
  meta,
  title = 'we2Tech - Mobile & Website Application Development Hong Kong',
  image = `${SITE_URL}/og-image.png`,
  path = '/',
  keywords = 'mobile app development, website development, UI UX design, Hong Kong, iOS, Android, React Native, web application',
}) {
  const url = `${SITE_URL}${path === '/' ? '/' : path}`;
  const metaData = [
    { name: `description`, content: description },
    { name: `keywords`, content: keywords },
    { property: `og:title`, content: title },
    { property: `og:description`, content: description },
    { property: `og:type`, content: `website` },
    { property: `og:site_name`, content: `we2Tech` },
    { property: `og:locale`, content: `en_HK` },
    { property: `og:image`, content: image },
    { property: `og:url`, content: url },
    { name: `twitter:card`, content: `summary_large_image` },
    { name: `twitter:creator`, content: author },
    { name: `twitter:title`, content: title },
    { name: `twitter:description`, content: description },
    { name: `twitter:image`, content: image },
    { name: `geo.region`, content: `HK` },
    { name: `geo.placename`, content: `Hong Kong` },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      {metaData.map(({ name, content, property }, i) => (
        <meta key={i} {...(property ? { property } : { name })} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
