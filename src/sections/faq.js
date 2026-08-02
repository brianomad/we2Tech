/** @jsx jsx */
import { jsx, Container, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/section-header';
import Reveal from '../components/reveal';
import { IoIosArrowDown } from 'react-icons/io';
import { useLocale } from '../locales';
import faqDataByLocale from '../data/faq-data';

export { faqDataByLocale };

export default function FAQ() {
  const { locale, t } = useLocale();
  const [open, setOpen] = useState(null);
  const data = faqDataByLocale[locale] || faqDataByLocale.en;

  return (
    <section id="faq" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeader
          title={t('faq.title')}
          slogan={t('faq.slogan')}
          icColor={true} />
        <Box sx={styles.wrapper}>
          {data.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06}>
              <Box sx={styles.item}>
                <Box
                  sx={styles.questionRow}
                  onClick={() => setOpen(open === item.id ? null : item.id)}
                  role="button"
                  aria-expanded={open === item.id}>
                  <Text sx={styles.question}>{item.question}</Text>
                  <Box
                    sx={{
                      ...styles.arrow,
                      ...(open === item.id ? styles.arrowOpen : {}),
                    }}>
                    <IoIosArrowDown />
                  </Box>
                </Box>
                <AnimatePresence initial={false}>
                  {open === item.id && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      style={{ overflow: 'hidden' }}>
                      <Text sx={styles.answer}>{item.answer}</Text>
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

const styles = {
  section: {
    pt: [8, null, 10],
    pb: [7, null, 9],
    backgroundColor: 'background_secondary',
  },
  container: {
    maxWidth: ['100%', null, null, '860px'],
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
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
};
