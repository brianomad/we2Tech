/** @jsx jsx */
import { jsx, Container, Grid, Box, Text } from 'theme-ui';
import { motion } from 'framer-motion';
import SectionHeader from '../components/section-header';
import Reveal from '../components/reveal';
import { FaProjectDiagram, FaPlug, FaSyncAlt } from 'react-icons/fa';

const data = [
  {
    id: 1,
    icon: <FaProjectDiagram />,
    title: 'Architecture',
    text:
      'Plan the system structure, data flow, access control and technical foundation before features pile up.',
  },
  {
    id: 2,
    icon: <FaPlug />,
    title: 'Integration',
    text:
      'Connect platforms, payments, messaging and operational tools so information flows without manual work.',
  },
  {
    id: 3,
    icon: <FaSyncAlt />,
    title: 'Improvement',
    text:
      'Modernise weak points and legacy bottlenecks without rebuilding more than necessary.',
  },
];

export default function Architecture() {
  return (
    <section id="architecture" sx={styles.section}>
      <Container>
        <SectionHeader
          eyebrow="Architecture & Integration"
          title="Connect the parts that keep your business running"
          slogan="We design and improve the technical layer behind your daily operations — backend systems, cloud infrastructure, databases, APIs and internal tools."
          icColor={true} />
        <Grid sx={styles.grid}>
          {data.map((item) => (
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
    backgroundColor: 'white',
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
    alignItems: 'flex-start',
    textAlign: 'left',
    p: [4, null, 5],
    height: '100%',
    backgroundColor: 'background_secondary',
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
