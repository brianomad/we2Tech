/** @jsx jsx */
import { jsx, Container, Box, Text, Button } from 'theme-ui';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SectionHeader from '../components/section-header';
import Reveal from '../components/reveal';
import { FaArrowRight, FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import cases from './case-data';
import zhCases from '../data/case-data-zh';
import zhCnCases from '../data/case-data-zh-cn';
import { tagNames as zhTagNames } from '../data/case-data-zh';
import { tagNames as zhCnTagNames } from '../data/case-data-zh-cn';
import { useLocale, localizedPath } from '../locales';
import { caseSlug } from '../data/case-url';

const casesByLocale = { en: cases, zh: zhCases, 'zh-cn': zhCnCases };
const tagNamesByLocale = { en: {}, zh: zhTagNames, 'zh-cn': zhCnTagNames };

const allCategories = ['All', ...Array.from(new Set(cases.flatMap((c) => c.tags)))];

const PAGE_SIZE = 12;

export default function Cases() {
  const { locale, t } = useLocale();
  const router = useRouter();
  const data = casesByLocale[locale] || casesByLocale.en;
  const tagNames = tagNamesByLocale[locale] || {};
  const localizedTag = (cat) => tagNames[cat] || cat;
  const [active, setActive] = useState('All');
  const [page, setPage] = useState(1);

  const filtered =
    active === 'All' ? data : data.filter((c) => c.tags.includes(active));

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const startIndex = (page - 1) * PAGE_SIZE;
  const paginated = filtered.slice(startIndex, startIndex + PAGE_SIZE);

  const openDemo = (item) => router.push(localizedPath(locale, `/cases/${caseSlug(item)}`));

  useEffect(() => {
    setPage(1);
  }, [active]);

  useEffect(() => {
    const section = document.getElementById('cases');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [page]);

  const goToPage = (next) => {
    setPage(Math.min(Math.max(1, next), totalPages));
  };

  return (
    <section id="cases" sx={styles.section}>
      <Container>
        <SectionHeader
          eyebrow={t('cases.eyebrow')}
          title={t('cases.title')}
          slogan={t('cases.slogan')}
          icColor={true} />
        <Box sx={styles.stats}>
          <Box sx={styles.stat}>
            <Text sx={styles.statValue}>{data.length}</Text>
            <Text sx={styles.statLabel}>{t('cases.casesLabel')}</Text>
          </Box>
          <Box sx={styles.stat}>
            <Text sx={styles.statValue}>{allCategories.length - 1}</Text>
            <Text sx={styles.statLabel}>{t('cases.categoriesLabel')}</Text>
          </Box>
        </Box>
        <Box sx={styles.filters}>
          {allCategories.map((cat) => (
            <Box
              key={cat}
              onClick={() => setActive(cat)}
              sx={{
                ...styles.chip,
                ...(active === cat ? styles.chipActive : {}),
              }}>
              {cat === 'All' ? t('cases.all') : localizedTag(cat)}
            </Box>
          ))}
        </Box>
        <Box sx={styles.grid}>
          {paginated.map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 0.08}>
              <Box sx={styles.card} onClick={() => openDemo(item)}>
                <Box
                  sx={{
                    ...styles.cardImageBg,
                    backgroundImage: `linear-gradient(180deg, rgba(0,51,51,0.10) 0%, rgba(0,51,51,0.88) 100%), url(/images/cases/case-${item.id}.jpg)`,
                  }} />
                <Text sx={styles.refNote}>{t('cases.photo')}</Text>
                <Box sx={styles.cardContent}>
                  <Box sx={styles.cardTags}>
                    {item.tags.map((tag) => (
                      <Text key={tag} sx={styles.cardTag}>{localizedTag(tag)}</Text>
                    ))}
                  </Box>
                  <Text sx={styles.cardTitle}>{item.title}</Text>
                  <Text sx={styles.cardSummary}>{item.summary}</Text>
                  <Box sx={styles.viewDemo} onClick={(e) => e.stopPropagation()}>
                    <a href={localizedPath(locale, `/cases/${caseSlug(item)}`)} sx={styles.cardLink}>
                      {t('cases.viewDemo')} <FaArrowRight />
                    </a>
                  </Box>
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Box sx={styles.pagination}>
          <Button
            variant="textButton"
            sx={styles.pageBtn}
            disabled={page <= 1}
            onClick={() => goToPage(page - 1)}>
            <FaChevronLeft /> {t('cases.prev')}
          </Button>
          <Text sx={styles.pageInfo}>
            {t('cases.pageOf', { page, total: totalPages })}
          </Text>
          <Button
            variant="textButton"
            sx={styles.pageBtn}
            disabled={page >= totalPages}
            onClick={() => goToPage(page + 1)}>
            {t('cases.next')} <FaChevronRight />
          </Button>
        </Box>
        <Reveal delay={0.1}>
          <Box sx={styles.ctaCard}>
            <Text as="h2" sx={styles.ctaTitle}>
              {t('cases.ctaTitle')}
            </Text>
            <Text as="p" sx={styles.ctaText}>
              {t('cases.ctaText')}
            </Text>
            <Box sx={styles.ctaButtons}>
              <a
                href="https://wa.me/85253968435"
                target="_blank"
                rel="noopener noreferrer">
                <Button variant="whiteButton" sx={styles.ctaBtnPrimary}>
                  <FaWhatsapp /> {t('cta.chatWhatsapp')}
                </Button>
              </a>
              <a href={localizedPath(locale, '/contact')}>
                <Button variant="textButton" sx={styles.ctaBtnOutline}>
                  {t('cta.bookFreeConsultation')}
                </Button>
              </a>
            </Box>
          </Box>
        </Reveal>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    pt: [8, null, 10],
    pb: [7, null, 9],
    backgroundColor: 'background_secondary',
  },
  stats: {
    display: 'flex',
    justifyContent: 'center',
    gap: [4, null, 6],
    mb: 5,
  },
  stat: {
    textAlign: 'center',
    px: [4, null, 5],
    py: 3,
    backgroundColor: 'white',
    border: '1px solid',
    borderColor: 'border_color',
    borderRadius: 10,
    minWidth: ['110px', null, '140px'],
  },
  statValue: {
    display: 'block',
    fontSize: [4, null, 5],
    fontWeight: 700,
    color: 'teal',
    fontFamily: 'Ubuntu',
  },
  statLabel: {
    fontSize: 1,
    color: 'text',
    fontFamily: 'Ubuntu',
  },
  filters: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
    mb: [5, null, 6],
  },
  chip: {
    padding: '8px 18px',
    borderRadius: 20,
    border: '1px solid',
    borderColor: 'teal',
    color: 'teal',
    fontSize: 1,
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.2s',
    userSelect: 'none',
    fontFamily: 'Ubuntu',
    '&:hover': {
      backgroundColor: 'teal',
      color: 'white',
    },
  },
  chipActive: {
    backgroundColor: 'teal',
    color: 'white',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
    gridGap: ['24px', null, '30px'],
  },
  card: {
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: ['340px', null, '360px'],
    p: [4, null, 5],
    borderRadius: 12,
    cursor: 'pointer',
    transition: 'all 0.25s',
    '&:hover': {
      boxShadow: '0 10px 30px rgba(0,139,139,0.25)',
      transform: 'translateY(-3px)',
    },
  },
  cardImageBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: 12,
  },
  refNote: {
    position: 'absolute',
    top: 3,
    right: 3,
    zIndex: 2,
    px: 2,
    py: 1,
    borderRadius: 12,
    backgroundColor: 'rgba(51,51,51,0.55)',
    color: 'rgba(255,255,255,0.8)',
    fontSize: 0,
    fontWeight: 700,
    fontFamily: 'Ubuntu',
  },
  cardContent: {
    position: 'relative',
    zIndex: 1,
    mt: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  cardTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    mb: 3,
  },
  cardTag: {
    padding: '4px 12px',
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.18)',
    border: '1px solid rgba(255,255,255,0.35)',
    color: 'white',
    fontSize: 0,
    fontWeight: 700,
    fontFamily: 'Ubuntu',
  },
  cardTitle: {
    fontSize: [3, null, 4],
    fontWeight: 700,
    color: 'white',
    mb: 3,
    fontFamily: 'Ubuntu',
  },
  cardSummary: {
    fontSize: 1,
    lineHeight: 1.9,
    color: 'rgba(255,255,255,0.92)',
    mb: 4,
    fontFamily: 'Ubuntu',
  },
  cardLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 2,
    mt: 'auto',
    color: 'cyan',
    fontSize: 1,
    fontWeight: 700,
    textDecoration: 'none',
    fontFamily: 'Ubuntu',
    svg: {
      transition: 'transform 0.2s',
    },
    '&:hover': {
      color: 'white',
      svg: {
        transform: 'translateX(4px)',
      },
    },
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    mb: 3,
  },
  tag: {
    padding: '4px 12px',
    borderRadius: 14,
    backgroundColor: 'rgba(0,139,139,0.08)',
    border: '1px solid rgba(0,139,139,0.18)',
    color: 'teal',
    fontSize: 0,
    fontWeight: 700,
    fontFamily: 'Ubuntu',
  },
  tag: {
    padding: '4px 12px',
    borderRadius: 14,
    backgroundColor: 'rgba(0,139,139,0.08)',
    border: '1px solid rgba(0,139,139,0.18)',
    color: 'teal',
    fontSize: 0,
    fontWeight: 700,
    fontFamily: 'Ubuntu',
  },
  number: {
    color: 'secondary',
    fontSize: 0,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    mb: 2,
    fontFamily: 'Ubuntu',
  },
  title: {
    fontSize: [3, null, 4],
    fontWeight: 700,
    color: 'heading',
    mb: 3,
    fontFamily: 'Ubuntu',
  },
  summary: {
    fontSize: 1,
    lineHeight: 1.9,
    color: 'text',
    mb: 4,
    fontFamily: 'Ubuntu',
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 2,
    mt: 'auto',
    color: 'teal',
    fontSize: 1,
    fontWeight: 700,
    textDecoration: 'none',
    fontFamily: 'Ubuntu',
    svg: {
      transition: 'transform 0.2s',
    },
    '&:hover': {
      color: 'secondary',
      svg: {
        transform: 'translateX(4px)',
      },
    },
  },
  pagination: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    mt: [6, null, 8],
  },
  pageBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 2,
    border: '2px solid',
    borderColor: 'teal',
    color: 'teal',
    backgroundColor: 'transparent',
    fontFamily: 'Ubuntu',
    cursor: 'pointer',
    '&:hover:not(:disabled)': {
      backgroundColor: 'teal',
      color: 'white',
    },
    '&:disabled': {
      opacity: 0.35,
      cursor: 'not-allowed',
    },
  },
  pageInfo: {
    fontSize: 1,
    fontWeight: 700,
    color: 'text',
    fontFamily: 'Ubuntu',
  },
  viewDemo: {
    mt: 'auto',
    display: 'flex',
  },
  ctaCard: {
    mt: [6, null, 8],
    textAlign: 'center',
    backgroundColor: 'teal',
    borderRadius: 16,
    p: [6, null, 8],
    backgroundImage:
      'radial-gradient(circle at 20% 20%, rgba(0,255,255,0.15), transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,255,255,0.15), transparent 50%)',
  },
  ctaTitle: {
    color: 'white',
    fontSize: ['26px', null, '34px', '40px'],
    lineHeight: 1.3,
    fontWeight: 700,
    mb: 3,
    fontFamily: 'Ubuntu',
  },
  ctaText: {
    color: 'white',
    fontSize: 2,
    lineHeight: 1.9,
    mb: 5,
    maxWidth: '640px',
    mx: 'auto',
    fontFamily: 'Ubuntu',
  },
  ctaButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 3,
    a: {
      cursor: 'pointer',
    },
  },
  ctaBtnPrimary: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    fontFamily: 'Ubuntu',
  },
  ctaBtnOutline: {
    border: '2px solid',
    borderColor: 'white',
    color: 'white',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'white',
      color: 'teal',
    },
  },
};
