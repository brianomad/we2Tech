/** @jsx jsx */
import { jsx, Container, Grid, Box, Text, Button, Image } from 'theme-ui';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './reveal';
import SectionHeader from './section-header';
import { IoIosArrowDown } from 'react-icons/io';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';

export function ServiceHero({ eyebrow, title, slogan, image, backgroundImage, showBookButton = true }) {
  return (
    <section
      sx={
        backgroundImage
          ? {
              ...styles.hero,
              backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.84) 55%, rgba(255,255,255,0.9) 100%), url(${backgroundImage})`,
              backgroundSize: 'cover, cover',
              backgroundPosition: 'center, center',
              backgroundRepeat: 'no-repeat, no-repeat',
            }
          : styles.hero
      }>
      <Container sx={styles.heroContainer}>
        <Reveal>
          {eyebrow && (
            <Text as="p" sx={styles.heroEyebrow}>{eyebrow}</Text>
          )}
          <Text as="h1" sx={styles.heroTitle}>{title}</Text>
          <Text as="p" sx={styles.heroSlogan}>{slogan}</Text>
          <Box sx={styles.heroButtons}>
            {showBookButton && (
              <a href="/contact">
                <Button variant="primary" sx={styles.heroBtnPrimary}>Book a Consultation</Button>
              </a>
            )}
            <a href="https://wa.me/85253968435" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" sx={styles.heroBtnOutline}>
                <FaWhatsapp /> Chat on WhatsApp
              </Button>
            </a>
          </Box>
        </Reveal>
      </Container>
      {image && !backgroundImage && (
        <Box sx={styles.heroImageBox}>
          <Image src={image} alt="" />
        </Box>
      )}
    </section>
  );
}

export function ServiceIntro({ eyebrow, title, slogan, children }) {
  return (
    <section sx={styles.section}>
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} slogan={slogan} icColor={true} />
        {children}
      </Container>
    </section>
  );
}

export function FeatureGrid({ title, slogan, items }) {
  return (
    <section sx={{ ...styles.section, backgroundColor: 'background_secondary' }} id="whatWeBuild">
      <Container>
        <SectionHeader title={title} slogan={slogan} icColor={true} />
        <Grid sx={styles.grid3}>
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <motion.div className="card" whileHover={{ y: -6, transition: { duration: 0.2 } }}>
                <Box sx={styles.card}>
                  <Box sx={styles.icon}>{item.icon}</Box>
                  <Text sx={styles.cardTitle}>{item.title}</Text>
                  <Text sx={styles.cardText}>{item.text}</Text>
                </Box>
              </motion.div>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export function PointsList({ title, slogan, points }) {
  return (
    <section sx={styles.section} id="whyItMatters">
      <Container>
        <SectionHeader title={title} slogan={slogan} icColor={true} />
        <Reveal>
          <Grid sx={styles.pointsGrid}>
            {points.map((point) => (
              <Box sx={styles.point} key={point}>
                <Box sx={styles.pointIcon}><FaCheckCircle /></Box>
                <Text sx={styles.pointText}>{point}</Text>
              </Box>
            ))}
          </Grid>
        </Reveal>
      </Container>
    </section>
  );
}

export function ModuleChips({ title, slogan, modules }) {
  return (
    <section sx={{ ...styles.section, backgroundColor: 'background_secondary' }} id="commonModules">
      <Container>
        <SectionHeader title={title} slogan={slogan} icColor={true} />
        <Reveal>
          <Box sx={styles.modulesWrap}>
            {modules.map((module, index) => (
              <Box sx={styles.module} key={module}>
                <Box sx={styles.moduleBadge}>{String(index + 1).padStart(2, '0')}</Box>
                {module}
              </Box>
            ))}
          </Box>
        </Reveal>
      </Container>
    </section>
  );
}

export function ProcessSteps({ title, slogan, steps, dark }) {
  return (
    <section
      sx={dark ? { ...styles.section, backgroundColor: 'teal' } : styles.section}
      id="process">
      <Container>
        <SectionHeader
          title={title}
          slogan={slogan}
          icColor={dark ? false : true} />
        <Grid sx={styles.gridSteps}>
          {steps.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <Box sx={dark ? styles.stepDark : styles.step}>
                <Box sx={dark ? styles.stepNumDark : styles.stepNum}>
                  {String(index + 1).padStart(2, '0')}
                </Box>
                <Text sx={dark ? styles.stepTitleDark : styles.stepTitle}>{item.title}</Text>
                <Text sx={dark ? styles.stepTextDark : styles.stepText}>{item.text}</Text>
              </Box>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export function DirectAnswers({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <section sx={{ ...styles.section, backgroundColor: 'background_secondary' }} id="directAnswers">
      <Container sx={styles.narrowContainer}>
        <SectionHeader
          eyebrow="Direct Answers"
          title="Quick answers before you ask"
          icColor={true} />
        <Box sx={styles.accordionWrap}>
          {items.map((item, index) => (
            <Reveal key={item.q} delay={index * 0.05}>
              <Box sx={styles.item}>
                <Box
                  sx={styles.questionRow}
                  onClick={() => setOpen(open === index ? null : index)}
                  role="button"
                  aria-expanded={open === index}>
                  <Text sx={styles.question}>{item.q}</Text>
                  <Box sx={{ ...styles.arrow, ...(open === index ? styles.arrowOpen : {}) }}>
                    <IoIosArrowDown />
                  </Box>
                </Box>
                <AnimatePresence initial={false}>
                  {open === index && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      style={{ overflow: 'hidden' }}>
                      <Text sx={styles.answer}>{item.a}</Text>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </section>
  );
}

export function ServiceFAQ({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <section sx={styles.section} id="faq">
      <Container sx={styles.narrowContainer}>
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          icColor={true} />
        <Box sx={styles.accordionWrap}>
          {items.map((item, index) => (
            <Reveal key={item.q} delay={index * 0.05}>
              <Box sx={styles.item}>
                <Box
                  sx={styles.questionRow}
                  onClick={() => setOpen(open === index ? null : index)}
                  role="button"
                  aria-expanded={open === index}>
                  <Text sx={styles.question}>{item.q}</Text>
                  <Box sx={{ ...styles.arrow, ...(open === index ? styles.arrowOpen : {}) }}>
                    <IoIosArrowDown />
                  </Box>
                </Box>
                <AnimatePresence initial={false}>
                  {open === index && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      style={{ overflow: 'hidden' }}>
                      <Text sx={styles.answer}>{item.a}</Text>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </section>
  );
}

export function ServiceCTA({ title, text }) {
  return (
    <section sx={{ ...styles.section, py: 0, pb: [7, null, 9] }}>
      <Container>
        <Reveal>
          <Box sx={styles.ctaCard}>
            <Text as="h2" sx={styles.ctaTitle}>{title}</Text>
            <Text as="p" sx={styles.ctaText}>{text}</Text>
            <Box sx={styles.ctaButtons}>
              <a href="https://wa.me/85253968435" target="_blank" rel="noopener noreferrer">
                <Button variant="whiteButton" sx={styles.ctaBtnPrimary}>
                  <FaWhatsapp /> Chat on WhatsApp
                </Button>
              </a>
              <a href="/contact">
                <Button variant="textButton" sx={styles.ctaBtnOutline}>Book a Consultation</Button>
              </a>
            </Box>
          </Box>
        </Reveal>
      </Container>
    </section>
  );
}

const styles = {
  hero: {
    position: 'relative',
    pt: [120, null, 140, 160],
    pb: [40, null, 60],
    overflow: 'hidden',
    backgroundColor: 'white',
    backgroundImage:
      'linear-gradient(180deg, rgba(0,139,139,0.07) 0%, rgba(255,255,255,0) 55%)',
    '::before, ::after': {
      content: '""',
      position: 'absolute',
      borderRadius: '50%',
      filter: 'blur(90px)',
      pointerEvents: 'none',
    },
    '::before': {
      width: ['260px', null, '420px'],
      height: ['260px', null, '420px'],
      top: ['60px', null, '80px'],
      left: '-160px',
      backgroundColor: 'rgba(0,139,139,0.10)',
    },
    '::after': {
      width: ['220px', null, '360px'],
      height: ['220px', null, '360px'],
      top: ['180px', null, '240px'],
      right: '-140px',
      backgroundColor: 'rgba(0,255,255,0.08)',
    },
  },
  heroContainer: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    maxWidth: ['100%', null, null, '820px'],
  },
  heroEyebrow: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 2,
    color: 'secondary',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontWeight: 'bold',
    fontSize: [1, null, 2],
    mb: 3,
    py: 2,
    px: 3,
    backgroundColor: 'rgba(0,139,139,0.08)',
    border: '1px solid rgba(0,139,139,0.18)',
    borderRadius: '30px',
    fontFamily: 'Ubuntu',
  },
  heroTitle: {
    color: 'heading',
    fontSize: ['30px', '38px', '44px', '48px', '56px'],
    lineHeight: 1.25,
    fontWeight: 700,
    letterSpacing: '-1px',
    mb: 4,
    fontFamily: 'Ubuntu',
  },
  heroSlogan: {
    color: 'text',
    fontSize: [2, null, 3],
    lineHeight: 1.9,
    mb: 5,
    maxWidth: '640px',
    mx: 'auto',
    fontFamily: 'Ubuntu',
  },
  heroButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 3,
    a: {
      cursor: 'pointer',
    },
  },
  heroBtnPrimary: {
    fontFamily: 'Ubuntu',
  },
  heroBtnOutline: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    fontFamily: 'Ubuntu',
  },
  heroImageBox: {
    position: 'relative',
    zIndex: 1,
    mt: [5, null, 6],
    px: [0, null, null, 4],
    img: {
      width: '100%',
      height: 'auto',
      borderRadius: [0, null, null, 12],
    },
  },
  section: {
    py: [7, null, 9],
    backgroundColor: 'white',
  },
  grid3: {
    gridGap: ['30px 20px', null, '30px'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    mt: [5, null, 7],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    p: [4, null, 5],
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    border: '1px solid',
    borderColor: 'border_color',
    transition: 'all 0.3s',
    '&:hover': {
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    },
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: ['60px', null, '70px'],
    height: ['60px', null, '70px'],
    borderRadius: '50%',
    backgroundColor: 'teal',
    color: 'white',
    fontSize: ['26px', null, '30px'],
    mb: 4,
    svg: {
      display: 'block',
    },
  },
  cardTitle: {
    fontSize: [3, null, 4],
    fontWeight: 700,
    color: 'heading',
    mb: 3,
    fontFamily: 'Ubuntu',
  },
  cardText: {
    fontSize: 1,
    lineHeight: 1.9,
    color: 'text',
    fontFamily: 'Ubuntu',
  },
  pointsGrid: {
    gridGap: ['20px', null, '24px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
    mt: [5, null, 7],
  },
  point: {
    display: 'flex',
    alignItems: 'center',
    gap: 3,
    p: [3, null, 4],
    backgroundColor: 'background_secondary',
    borderRadius: 10,
    border: '1px solid',
    borderColor: 'border_color',
  },
  pointIcon: {
    color: 'teal',
    fontSize: 3,
    flexShrink: 0,
    svg: {
      display: 'block',
    },
  },
  pointText: {
    fontSize: 1,
    lineHeight: 1.7,
    color: 'text',
    fontWeight: 600,
    fontFamily: 'Ubuntu',
  },
  modulesWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '14px',
    mt: [5, null, 7],
  },
  module: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    p: '10px 18px',
    backgroundColor: 'white',
    borderRadius: 24,
    border: '1px solid',
    borderColor: 'border_color',
    fontWeight: 700,
    color: 'heading',
    fontFamily: 'Ubuntu',
    fontSize: 1,
  },
  moduleBadge: {
    color: 'teal',
    fontWeight: 700,
    fontFamily: 'Ubuntu',
  },
  gridSteps: {
    gridGap: ['30px 20px', null, '30px'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
    mt: [5, null, 7],
  },
  step: {
    p: [4, null, 5],
    height: '100%',
    backgroundColor: 'background_secondary',
    borderRadius: 10,
    border: '1px solid',
    borderColor: 'border_color',
  },
  stepNum: {
    fontSize: 7,
    fontWeight: 700,
    color: 'teal',
    lineHeight: 1,
    mb: 3,
    fontFamily: 'Ubuntu',
  },
  stepTitle: {
    fontSize: [3, null, 4],
    fontWeight: 700,
    color: 'heading',
    mb: 3,
    fontFamily: 'Ubuntu',
  },
  stepText: {
    fontSize: 1,
    lineHeight: 1.9,
    color: 'text',
    fontFamily: 'Ubuntu',
  },
  stepDark: {
    p: [4, null, 5],
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 10,
  },
  stepNumDark: {
    fontSize: 7,
    fontWeight: 700,
    color: 'cyan',
    lineHeight: 1,
    mb: 3,
    fontFamily: 'Ubuntu',
  },
  stepTitleDark: {
    fontSize: [3, null, 4],
    fontWeight: 700,
    color: 'white',
    mb: 3,
    fontFamily: 'Ubuntu',
  },
  stepTextDark: {
    fontSize: 1,
    lineHeight: 1.9,
    color: 'white',
    fontFamily: 'Ubuntu',
  },
  narrowContainer: {
    maxWidth: ['100%', null, null, '860px'],
  },
  accordionWrap: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    mt: [5, null, 7],
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 10,
    border: '1px solid',
    borderColor: 'border_color',
    overflow: 'hidden',
  },
  questionRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 3,
    p: 4,
    cursor: 'pointer',
  },
  question: {
    fontSize: 2,
    fontWeight: 700,
    color: 'heading',
    fontFamily: 'Ubuntu',
  },
  arrow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'teal',
    fontSize: 4,
    transition: 'transform 0.3s',
    flexShrink: 0,
  },
  arrowOpen: {
    transform: 'rotate(180deg)',
  },
  answer: {
    px: 4,
    pb: 4,
    fontSize: 1,
    lineHeight: 1.9,
    color: 'text',
    fontFamily: 'Ubuntu',
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
