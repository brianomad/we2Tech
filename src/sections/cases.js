/** @jsx jsx */
import { jsx, Container, Box, Text, Button } from 'theme-ui';
import { useState } from 'react';
import SectionHeader from '../components/section-header';
import Reveal from '../components/reveal';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import cases from './case-data';

const allCategories = ['All', ...Array.from(new Set(cases.flatMap((c) => c.tags)))];

export default function Cases() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? cases : cases.filter((c) => c.tags.includes(active));

  return (
    <section id="cases" sx={styles.section}>
      <Container>
        <SectionHeader
          eyebrow="Use Case"
          title="Client Success Stories"
          slogan="Browse client work by service category and see how technology decisions connect with business stage, operations, data and customer experience."
          icColor={true} />
        <Box sx={styles.stats}>
          <Box sx={styles.stat}>
            <Text sx={styles.statValue}>{cases.length}</Text>
            <Text sx={styles.statLabel}>Cases</Text>
          </Box>
          <Box sx={styles.stat}>
            <Text sx={styles.statValue}>{allCategories.length - 1}</Text>
            <Text sx={styles.statLabel}>Categories</Text>
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
              {cat}
            </Box>
          ))}
        </Box>
        <Box sx={styles.grid}>
          {filtered.map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 0.08}>
              <Box sx={styles.card}>
                <Box sx={styles.tags}>
                  {item.tags.map((tag) => (
                    <Text key={tag} sx={styles.tag}>{tag}</Text>
                  ))}
                </Box>
                <Text sx={styles.number}>
                  {String(item.id).padStart(2, '0')} case
                </Text>
                <Text sx={styles.title}>{item.title}</Text>
                <Text sx={styles.summary}>{item.summary}</Text>
                <a href="/#contactUs" sx={styles.link}>
                  Discuss a similar project <FaArrowRight />
                </a>
              </Box>
            </Reveal>
          ))}
        </Box>
        <Reveal delay={0.1}>
          <Box sx={styles.ctaCard}>
            <Text as="h2" sx={styles.ctaTitle}>
              Want results like these for your business?
            </Text>
            <Text as="p" sx={styles.ctaText}>
              Book a free consultation and we&apos;ll walk you through how your
              project would be scoped, built and supported.
            </Text>
            <Box sx={styles.ctaButtons}>
              <a
                href="https://wa.me/85253968435"
                target="_blank"
                rel="noopener noreferrer">
                <Button variant="whiteButton" sx={styles.ctaBtnPrimary}>
                  <FaWhatsapp /> Chat on WhatsApp
                </Button>
              </a>
              <a href="/#contactUs">
                <Button variant="textButton" sx={styles.ctaBtnOutline}>
                  Book a free consultation
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: '100%',
    p: [4, null, 5],
    backgroundColor: 'white',
    borderRadius: 12,
    border: '1px solid',
    borderColor: 'border_color',
    transition: 'all 0.25s',
    '&:hover': {
      boxShadow: '0 10px 30px rgba(0,139,139,0.12)',
      transform: 'translateY(-3px)',
    },
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    mb: 4,
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
