/** @jsx jsx */
import { jsx, Container, Box, Text, Button } from 'theme-ui';
import { useState, useEffect } from 'react';
import SectionHeader from '../components/section-header';
import Reveal from '../components/reveal';
import { FaArrowRight, FaWhatsapp, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import cases from './case-data';

const allCategories = ['All', ...Array.from(new Set(cases.flatMap((c) => c.tags)))];

const PAGE_SIZE = 12;

export default function Cases() {
  const [active, setActive] = useState('All');
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);

  const filtered =
    active === 'All' ? cases : cases.filter((c) => c.tags.includes(active));

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const startIndex = (page - 1) * PAGE_SIZE;
  const paginated = filtered.slice(startIndex, startIndex + PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [active]);

  useEffect(() => {
    const section = document.getElementById('cases');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [page]);

  useEffect(() => {
    if (!selected) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [selected]);

  const goToPage = (next) => {
    setPage(Math.min(Math.max(1, next), totalPages));
  };

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
          {paginated.map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 0.08}>
              <Box sx={styles.card} onClick={() => setSelected(item)}>
                <Box
                  sx={{
                    ...styles.cardImageBg,
                    backgroundImage: `linear-gradient(180deg, rgba(0,51,51,0.10) 0%, rgba(0,51,51,0.88) 100%), url(/images/cases/case-${item.id}.jpg)`,
                  }} />
                <Text sx={styles.refNote}>Photo for reference</Text>
                <Box sx={styles.cardContent}>
                  <Box sx={styles.cardTags}>
                    {item.tags.map((tag) => (
                      <Text key={tag} sx={styles.cardTag}>{tag}</Text>
                    ))}
                  </Box>
                  <Text sx={styles.cardNumber}>
                    {String(item.id).padStart(2, '0')} case
                  </Text>
                  <Text sx={styles.cardTitle}>{item.title}</Text>
                  <Text sx={styles.cardSummary}>{item.summary}</Text>
                  <a href="/contact" sx={styles.cardLink} onClick={(e) => e.stopPropagation()}>
                    Discuss a similar project <FaArrowRight />
                  </a>
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
            <FaChevronLeft /> Prev
          </Button>
          <Text sx={styles.pageInfo}>
            Page {page} of {totalPages}
          </Text>
          <Button
            variant="textButton"
            sx={styles.pageBtn}
            disabled={page >= totalPages}
            onClick={() => goToPage(page + 1)}>
            Next <FaChevronRight />
          </Button>
        </Box>
        {selected && (
          <Box sx={styles.modalOverlay} onClick={() => setSelected(null)}>
            <Box sx={styles.modal} onClick={(e) => e.stopPropagation()}>
              <Box
                sx={{
                  ...styles.modalImageBox,
                  backgroundImage: `url(/images/cases/case-${selected.id}.jpg)`,
                }}>
                <Text sx={styles.refNote}>Photo for reference</Text>
              </Box>
              <Box sx={styles.modalHeader}>
                <Box>
                  <Text sx={styles.number}>
                    {String(selected.id).padStart(2, '0')} case
                  </Text>
                  <Text as="h3" sx={styles.modalTitle}>{selected.title}</Text>
                </Box>
                <button sx={styles.modalClose} onClick={() => setSelected(null)} aria-label="Close">
                  <FaTimes />
                </button>
              </Box>
              <Box sx={styles.tags}>
                {selected.tags.map((tag) => (
                  <Text key={tag} sx={styles.tag}>{tag}</Text>
                ))}
              </Box>
              <Box>
                {selected.detail.map((p, i) => (
                  <Text key={i} sx={styles.modalText}>{p}</Text>
                ))}
              </Box>
              <Text sx={styles.techLabel}>Technology used</Text>
              <Box sx={styles.techList}>
                {selected.tech.map((t) => (
                  <Text key={t} sx={styles.tech}>{t}</Text>
                ))}
              </Box>
              <a href="/contact" sx={styles.modalCta}>
                <Button variant="primary">Discuss a similar project</Button>
              </a>
            </Box>
          </Box>
        )}
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
              <a href="/contact">
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
    backgroundColor: 'rgba(255,255,255,0.88)',
    color: '#005555',
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
  cardNumber: {
    color: 'cyan',
    fontSize: 0,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    mb: 2,
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
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.55)',
    zIndex: 1200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    p: [3, null, 5],
    overflowY: 'auto',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 16,
    maxWidth: '680px',
    width: '100%',
    maxHeight: '85vh',
    overflowY: 'auto',
    p: [4, null, 6],
    boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
  },
  modalHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 3,
    mb: 3,
  },
  modalImageBox: {
    position: 'relative',
    height: ['180px', null, '220px'],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: 10,
    mb: 4,
  },
  modalTitle: {
    fontSize: [3, null, 4],
    fontWeight: 700,
    color: 'heading',
    fontFamily: 'Ubuntu',
  },
  modalClose: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    flexShrink: 0,
    borderRadius: '50%',
    border: '1px solid',
    borderColor: 'border_color',
    backgroundColor: 'transparent',
    color: 'text',
    fontSize: 2,
    cursor: 'pointer',
    fontFamily: 'Ubuntu',
    '&:hover': {
      backgroundColor: 'teal',
      color: 'white',
      borderColor: 'teal',
    },
  },
  modalText: {
    fontSize: 1,
    lineHeight: 1.9,
    color: 'text',
    mb: 3,
    fontFamily: 'Ubuntu',
  },
  techLabel: {
    display: 'block',
    color: 'secondary',
    fontSize: 0,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    mt: 2,
    mb: 2,
    fontFamily: 'Ubuntu',
  },
  techList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    mb: 4,
  },
  tech: {
    padding: '4px 12px',
    borderRadius: 14,
    backgroundColor: 'secondary',
    color: 'white',
    fontSize: 0,
    fontWeight: 700,
    fontFamily: 'Ubuntu',
  },
  modalCta: {
    display: 'inline-flex',
    fontFamily: 'Ubuntu',
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
