/** @jsx jsx */
import { jsx, Container, Grid, Box, Text } from 'theme-ui';
import { motion } from 'framer-motion';
import SectionHeader from '../components/section-header';
import Reveal from '../components/reveal';
import {
  FaShieldAlt,
  FaChartLine,
  FaCogs,
  FaClipboardCheck,
} from 'react-icons/fa';

const pillars = [
  {
    id: 1,
    icon: <FaShieldAlt />,
    title: 'Reliable',
    text:
      'Monitoring and maintenance keep your application dependable after launch.',
  },
  {
    id: 2,
    icon: <FaChartLine />,
    title: 'Scalable',
    text:
      'Architecture is planned so users and data can grow without a rewrite.',
  },
  {
    id: 3,
    icon: <FaCogs />,
    title: 'Maintainable',
    text:
      'Clean code and documentation reduce long-term cost and risk.',
  },
  {
    id: 4,
    icon: <FaClipboardCheck />,
    title: 'Practical',
    text:
      'The application fits how your team actually works — not the other way around.',
  },
];

export default function Operational() {
  return (
    <section id="operational" sx={styles.section}>
      <Container>
        <SectionHeader
          eyebrow="01 · Operational Systems"
          title="Software only matters when your business can rely on it"
          slogan="Great apps do more than look good. They connect people, workflows and customers so your daily operations move with less manual follow-up."
          icColor={true} />
        <Grid sx={styles.compare}>
          <Reveal direction="left">
            <Box sx={styles.beforeCard}>
              <Text sx={styles.beforeLabel}>Before</Text>
              <Text sx={styles.cardTitle}>Build an application</Text>
              <Text sx={styles.cardText}>
                Pages, forms and features exist, but handoffs and follow-up still
                depend on people.
              </Text>
            </Box>
          </Reveal>
          <Reveal direction="right" delay={0.15}>
            <Box sx={styles.nowCard}>
              <Text sx={styles.nowLabel}>Now</Text>
              <Text sx={styles.nowTitle}>Build a system that supports your business</Text>
              <Text sx={styles.nowText}>
                The app connects workflows, updates records and gives your team
                clearer control over what happens next.
              </Text>
            </Box>
          </Reveal>
        </Grid>
        <Grid sx={styles.grid}>
          {pillars.map((item) => (
            <Reveal key={item.id} delay={(item.id - 1) * 0.1}>
              <motion.div
                className="card"
                whileHover={{ y: -6, transition: { duration: 0.2 } }}>
                <Box sx={styles.card}>
                  <Box sx={styles.icon}>{item.icon}</Box>
                  <Text sx={styles.title}>{item.title}</Text>
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
    backgroundColor: 'background_secondary',
  },
  compare: {
    gridGap: ['30px 20px', null, '30px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
    mt: [5, null, 7],
  },
  beforeCard: {
    p: [4, null, 5],
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    border: '1px solid',
    borderColor: 'border_color',
  },
  beforeLabel: {
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: 0,
    fontWeight: 700,
    color: 'text',
    mb: 2,
    fontFamily: 'Ubuntu',
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
  nowCard: {
    p: [4, null, 5],
    height: '100%',
    backgroundColor: 'teal',
    borderRadius: 10,
    boxShadow: '0 10px 30px rgba(0,139,139,0.25)',
  },
  nowLabel: {
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: 0,
    fontWeight: 700,
    color: 'cyan',
    mb: 2,
    fontFamily: 'Ubuntu',
  },
  nowTitle: {
    fontSize: [3, null, 4],
    fontWeight: 700,
    color: 'white',
    mb: 3,
    fontFamily: 'Ubuntu',
  },
  nowText: {
    fontSize: 1,
    lineHeight: 1.9,
    color: 'white',
    fontFamily: 'Ubuntu',
  },
  grid: {
    gridGap: ['30px 20px', null, '30px'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
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
    width: ['52px', null, '60px'],
    height: ['52px', null, '60px'],
    borderRadius: '50%',
    backgroundColor: 'teal',
    color: 'white',
    fontSize: ['22px', null, '26px'],
    mb: 4,
    svg: {
      display: 'block',
    },
  },
  title: {
    fontSize: [3, null, 4],
    fontWeight: 700,
    color: 'heading',
    mb: 3,
    fontFamily: 'Ubuntu',
  },
  text: {
    fontSize: 1,
    lineHeight: 1.9,
    color: 'text',
    fontFamily: 'Ubuntu',
  },
};
