import React from 'react';
import Head from 'next/head';
import { faqDataByLocale } from '../sections/faq';
import { getLocaleInfo, localizedPath } from '../locales';

const SITE_URL = 'https://we2tech.pro';
const PHONE = '+85253968435';
const EMAIL = 'enquiry@we2tech.pro';

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'we2Tech',
  legalName: 'we2Tech Ltd',
  url: SITE_URL,
  logo: `${SITE_URL}/we2Tech.ico`,
  image: `${SITE_URL}/og-image.png`,
  telephone: PHONE,
  email: EMAIL,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: PHONE,
    contactType: 'sales',
    areaServed: 'HK',
    availableLanguage: ['en', 'zh-Hant'],
  },
  sameAs: [
    'https://www.instagram.com/we2tech/',
    'https://wa.me/85253968435',
  ],
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'we2Tech Ltd',
  description:
    'Hong Kong-based software development company building mobile apps, websites, UI/UX design and cloud systems.',
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  telephone: PHONE,
  email: EMAIL,
  priceRange: 'Contact for a quote',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'West Wing 2/F, 822 Lai Chi Kok Road, Cheung Sha Wan',
    addressLocality: 'Hong Kong',
    addressRegion: 'Kowloon',
    addressCountry: 'HK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 22.3193,
    longitude: 114.1694,
  },
  areaServed: {
    '@type': 'Place',
    name: 'Hong Kong',
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  sameAs: [
    'https://www.instagram.com/we2tech/',
    'https://wa.me/85253968435',
  ],
};

export default function JsonLd({ type, items, service, post, locale = 'en' }) {
  const info = getLocaleInfo(locale);
  let data = null;

  if (type === 'organization') {
    data = [organization, localBusiness];
  } else if (type === 'faq') {
    const faqList = faqDataByLocale[locale] || faqDataByLocale.en;
    data = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: info.htmlLang,
      mainEntity: faqList.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    };
  } else if (type === 'service' && service) {
    data = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title.split('|')[0].trim(),
      description: service.description,
      serviceType: service.title.split('|')[0].trim(),
      provider: { '@type': 'Organization', name: 'we2Tech Ltd', url: SITE_URL },
      areaServed: { '@type': 'Place', name: 'Hong Kong' },
      inLanguage: info.htmlLang,
      url: `${SITE_URL}${localizedPath(locale, service.path)}`,
    };
  } else if (type === 'article' && post) {
    data = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      author: { '@type': 'Organization', name: 'we2Tech', url: SITE_URL },
      publisher: { '@type': 'Organization', name: 'we2Tech Ltd', url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}/we2Tech.ico` } },
      mainEntityOfPage: { '@type': 'WebPage', '@id': post.url },
      inLanguage: info.htmlLang,
      image: `${SITE_URL}/og-image.png`,
    };
  } else if (type === 'breadcrumb' && items) {
    data = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: item.path ? `${SITE_URL}${localizedPath(locale, item.path)}` : item.url,
      })),
    };
  }

  if (!data) return null;

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data).replace(/</g, '\\u003c'),
        }}
      />
    </Head>
  );
}
