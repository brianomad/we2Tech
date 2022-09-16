import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'startup product landing page',
  author = 'RedQ, Inc',
  meta,
  title = 'startup landing title',
}) {
  const metaData = [
    {
      name: `description`,
      content: "we2Tech [Mobile / Website application development]",
    },
    {
      property: `og:title`,
      content: "we2Tech",
    },
    {
      property: `og:description`,
      content: "we2Tech [Mobile / Website application development]",
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: "we2Tech",
    },
    {
      name: `twitter:title`,
      content: "we2Tech",
    },
    {
      name: `twitter:description`,
      content: "we2Tech [Mobile / Website application development]",
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
