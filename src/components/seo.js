import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'we2Tech provides professional mobile app development, website development, UI/UX design, and server deployment services in Hong Kong.',
  author = 'we2Tech Ltd',
  meta,
  title = 'we2Tech - Mobile & Website Application Development Hong Kong',
  image = 'https://we2tech.pro/we2Tech.ico',
}) {
  const metaData = [
    { name: `description`, content: description },
    { property: `og:title`, content: title },
    { property: `og:description`, content: description },
    { property: `og:type`, content: `website` },
    { property: `og:image`, content: image },
    { property: `og:url`, content: `https://we2tech.pro` },
    { name: `twitter:card`, content: `summary_large_image` },
    { name: `twitter:creator`, content: author },
    { name: `twitter:title`, content: title },
    { name: `twitter:description`, content: description },
    { name: `twitter:image`, content: image },
    { name: `keywords`, content: `mobile app development, website development, UI UX design, Hong Kong, iOS, Android, React Native, web application` },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
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
