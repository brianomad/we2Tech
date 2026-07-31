/** @jsx jsx */
import { jsx, Container, Grid, Box, Text } from 'theme-ui';
import { motion } from 'framer-motion';
import SectionHeader from '../components/section-header';
import Reveal from '../components/reveal';

const data = [
  {
    id: 1,
    step: 'Goal',
    text: 'Focus on what the project needs to prove.',
  },
  {
    id: 2,
    step: 'Risk',
    text: 'Spot what could fail before it costs time.',
  },
  {
    id: 3,
    step: 'Workflow',
    text: 'Map the core user journey end to end.',
  },
  {
    id: 4,
    step: 'Prototype',
    text: 'Ship a small MVP or POC quickly.',
  },
  {
    id: 5,
    step: 'Feedback',
    text: 'Collect real signals from real users.',
  },
  {
    id: 6,
    step: 'Decision',
    text: 'Scale the build or refine the scope.',
  },
];

export default function MVPPath() {
  return (
    <section id="mvp" sx={styles.section}>
      <Container>
        <SectionHeader
          eyebrow="MVP / POC Path"
          title="Small build. Clear decision."
          slogan="Validate your core idea before investing in the full system." />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Reveal key={item.id} delay={(item.id - 1) * 0.08}>
              <motion.div
                className="card"
                whileHover={{ y: -6, transition: { duration: 0.2 } }}>
                <Box sx={styles.card}>
                  <Box sx={styles.badge}>{item.id}</Box>
                  <Text sx={styles.step}>{item.step}</Text>
                  <Text sx={styles.text}>{item.text}</Text>
                </Box>
              </motion.div>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    py: [7, null, 9],
    backgroundColor: 'teal',
  },
  grid: {
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
    alignItems: 'center',
    textAlign: 'center',
    p: [4, null, 5],
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 10,
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.16)',
    },
  },
  badge: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 46,
    height: 46,
    borderRadius: '50%',
    backgroundColor: 'cyan',
    color: 'heading',
    fontSize: 2,
    fontWeight: 700,
    mb: 4,
    fontFamily: 'Ubuntu',
  },
  step: {
    fontSize: [3, null, 4],
    fontWeight: 700,
    color: 'white',
    mb: 3,
    fontFamily: 'Ubuntu',
  },
  text: {
    fontSize: 1,
    lineHeight: 1.9,
    color: 'white',
    fontFamily: 'Ubuntu',
  },
};
