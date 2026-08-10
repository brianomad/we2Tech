/** @jsx jsx */
import { jsx, Container, Box, Text, Button } from 'theme-ui';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Reveal from '../components/reveal';
import { localizedPath } from '../locales';
import { DemoForTag } from '../components/demo/registry';
import { DemoGlobalStyles } from '../components/demo/anim';
import { S } from '../components/demo/shared';
import cases from './case-data';
import { caseSlug } from '../data/case-url';

const TOTAL = 200;

export default function CaseDemo({ item, locale, t, tagNames = {} }) {
  const [activeTab, setActiveTab] = useState(0);
  const tags = item.tags || [];
  const prevId = item.id - 1 <= 0 ? TOTAL : item.id - 1;
  const nextId = item.id + 1 > TOTAL ? 1 : item.id + 1;
  const prevItem = cases.find((c) => c.id === prevId);
  const nextItem = cases.find((c) => c.id === nextId);
  const label = (tag) => tagNames[tag] || tag;

  return (
    <section sx={styles.section}>
      <DemoGlobalStyles />
      <Container>
        <Box sx={styles.backRow}>
          <a href={localizedPath(locale, '/cases')} sx={styles.backLink}>
            <FaArrowLeft /> {t('caseDemo.backToCases')}
          </a>
        </Box>

        <Box sx={styles.hero}>
          <Box
            sx={{
              ...styles.heroBg,
              backgroundImage: `linear-gradient(180deg, rgba(2,51,51,0.55) 0%, rgba(2,51,51,0.85) 100%), url(/images/cases/case-${item.id}.jpg)`,
            }}
          />
          <Box sx={styles.heroContent}>
            <Text sx={styles.eyebrow}>
              {t('caseDemo.eyebrow')} {String(item.id).padStart(2, '0')}
            </Text>
            <Text as="h1" sx={styles.title}>{item.title}</Text>
            <Text as="p" sx={styles.summary}>{item.summary}</Text>
            <Box sx={styles.tags}>
              {tags.map((tag) => (
                <Box key={tag} sx={styles.heroTag}>{label(tag)}</Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box sx={styles.demoPanel}>
          <Box sx={styles.demoHeader}>
            <Box>
              <Text as="h2" sx={styles.demoTitle}>
                <Box as="span" sx={styles.liveDot} /> {t('caseDemo.liveDemo')}
              </Text>
              <Text as="p" sx={styles.tryNote}>{t('caseDemo.tryNote')}</Text>
            </Box>
          </Box>
          <Box sx={styles.tabs}>
            {tags.map((tag, i) => (
              <Box
                key={tag}
                onClick={() => setActiveTab(i)}
                sx={{
                  ...styles.tab,
                  ...(activeTab === i ? styles.tabActive : {}),
                }}>
                {label(tag)}
              </Box>
            ))}
          </Box>
          <Box sx={styles.demoBody}>
            <AnimatePresence>
              {tags[activeTab] && (
                <motion.div
                  key={tags[activeTab]}
                  initial={{ opacity: 0, y: 16, scale: 0.995 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}>
                  <DemoForTag tag={tags[activeTab]} t={t} locale={locale} item={item} />
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </Box>

        <Box sx={styles.detailsGrid}>
          <Box>
            <Text as="h2" sx={styles.detailHeading}>{t('caseDemo.whatWeBuilt')}</Text>
            {item.detail.map((p, i) => (
              <Text key={i} as="p" sx={styles.detailText}>{p}</Text>
            ))}
          </Box>
          <Box>
            <Text as="h2" sx={styles.detailHeading}>{t('caseDemo.techStack')}</Text>
            <Box sx={styles.techList}>
              {item.tech.map((tech) => (
                <Box key={tech} sx={styles.tech}>{tech}</Box>
              ))}
            </Box>
            <Box sx={styles.ctaCardSmall}>
              <Text as="h3" sx={styles.ctaCardTitle}>{t('caseDemo.startProject')}</Text>
              <a href={localizedPath(locale, '/contact')}>
                <Button variant="primary" sx={styles.ctaBtn}>
                  <FaArrowRight /> {t('cta.getQuote')}
                </Button>
              </a>
            </Box>
          </Box>
        </Box>

        <Box sx={styles.prevNext}>
          <a href={localizedPath(locale, `/cases/${caseSlug(prevItem)}`)} sx={styles.pnLink}>
            <FaChevronLeft /> {t('caseDemo.prevCase')}
          </a>
          <a href={localizedPath(locale, `/cases/${caseSlug(nextItem)}`)} sx={styles.pnLink}>
            {t('caseDemo.nextCase')} <FaChevronRight />
          </a>
        </Box>

        <Reveal delay={0.1}>
          <Box sx={styles.ctaCard}>
            <Text as="h2" sx={styles.ctaTitle}>{t('cases.ctaTitle')}</Text>
            <Text as="p" sx={styles.ctaText}>{t('cases.ctaText')}</Text>
            <Box sx={styles.ctaButtons}>
              <a href="https://wa.me/85253968435" target="_blank" rel="noopener noreferrer">
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
    pt: [4, null, 6],
    pb: [7, null, 9],
    backgroundColor: 'background_secondary',
  },
  backRow: {
    mb: [3, null, 4],
  },
  backLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 2,
    color: 'teal',
    fontSize: 1,
    fontWeight: 700,
    textDecoration: 'none',
    fontFamily: 'Ubuntu',
    '&:hover': { color: 'secondary' },
  },
  hero: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 16,
    minHeight: ['280px', null, '340px'],
    display: 'flex',
    alignItems: 'flex-end',
    mb: [5, null, 6],
  },
  heroBg: {
    position: 'absolute',
    inset: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  heroContent: {
    position: 'relative',
    p: [4, null, 6],
    width: '100%',
  },
  eyebrow: {
    display: 'inline-block',
    color: 'cyan',
    fontSize: 0,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    mb: 2,
    fontFamily: 'Ubuntu',
  },
  title: {
    color: 'white',
    fontSize: ['28px', null, '40px'],
    fontWeight: 700,
    lineHeight: 1.25,
    mb: 2,
    fontFamily: 'Ubuntu',
  },
  summary: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: [1, null, 2],
    lineHeight: 1.9,
    maxWidth: 680,
    mb: 3,
    fontFamily: 'Ubuntu',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  heroTag: {
    padding: '5px 14px',
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.16)',
    border: '1px solid rgba(255,255,255,0.35)',
    color: 'white',
    fontSize: 0,
    fontWeight: 700,
    fontFamily: 'Ubuntu',
  },
  demoPanel: {
    backgroundColor: 'white',
    border: '1px solid',
    borderColor: 'border_color',
    borderRadius: 16,
    overflow: 'hidden',
    mb: [6, null, 8],
  },
  demoHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 3,
    p: [4, null, 5],
    borderBottom: '1px solid',
    borderColor: 'border_color',
  },
  demoTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    fontSize: [2, null, 3],
    fontWeight: 700,
    color: 'heading',
    fontFamily: 'Ubuntu',
  },
  liveDot: {
    width: 9,
    height: 9,
    borderRadius: '50%',
    backgroundColor: S.green,
    display: 'inline-block',
    boxShadow: '0 0 0 4px rgba(31,169,113,0.18)',
    animation: 'dPulse 1.6s ease-in-out infinite',
  },
  tryNote: {
    fontSize: 1,
    color: 'text_secondary',
    mt: 1,
    fontFamily: 'Ubuntu',
  },
  tabs: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    px: [4, null, 5],
    py: 3,
    backgroundColor: 'background_secondary',
    borderBottom: '1px solid',
    borderColor: 'border_color',
  },
  tab: {
    padding: '8px 18px',
    borderRadius: 20,
    border: '1px solid',
    borderColor: 'teal',
    color: 'teal',
    fontSize: 0,
    fontWeight: 700,
    cursor: 'pointer',
    fontFamily: 'Ubuntu',
    transition: 'all 0.2s',
  },
  tabActive: {
    backgroundColor: 'teal',
    color: 'white',
  },
  demoBody: {
    p: [3, null, 5],
    backgroundColor: S.bg,
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: ['1fr', null, '1.4fr 1fr'],
    gap: [5, null, 6],
    mb: [6, null, 8],
  },
  detailHeading: {
    fontSize: [2, null, 3],
    fontWeight: 700,
    color: 'heading',
    mb: 3,
    fontFamily: 'Ubuntu',
  },
  detailText: {
    fontSize: 1,
    lineHeight: 1.9,
    color: 'text',
    mb: 3,
    fontFamily: 'Ubuntu',
  },
  techList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    mb: 5,
  },
  tech: {
    padding: '6px 16px',
    borderRadius: 16,
    backgroundColor: 'secondary',
    color: 'white',
    fontSize: 0,
    fontWeight: 700,
    fontFamily: 'Ubuntu',
  },
  ctaCardSmall: {
    p: [4, null, 5],
    borderRadius: 16,
    background: `linear-gradient(135deg, ${S.teal}, #0E7490)`,
  },
  ctaCardTitle: {
    color: 'white',
    fontSize: [2, null, 3],
    fontWeight: 700,
    mb: 3,
    fontFamily: 'Ubuntu',
  },
  ctaBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 2,
    fontFamily: 'Ubuntu',
  },
  prevNext: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 3,
    mb: [6, null, 8],
  },
  pnLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 2,
    color: 'teal',
    fontSize: 1,
    fontWeight: 700,
    textDecoration: 'none',
    fontFamily: 'Ubuntu',
    '&:hover': { color: 'secondary' },
  },
  ctaCard: {
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
    a: { cursor: 'pointer' },
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
    '&:hover': { backgroundColor: 'white', color: 'teal' },
  },
};
