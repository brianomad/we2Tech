/** @jsx jsx */
import { jsx, Container, Grid, Box, Text } from 'theme-ui';
import { motion } from 'framer-motion';
import Reveal from '../components/reveal';
import CountUp from '../components/count-up';

const data = [
  { id: 1, value: 10, suffix: '+', label: 'Years Combined Experience' },
  { id: 2, value: 50, suffix: '+', label: 'Projects Delivered' },
  { id: 3, value: 100, suffix: '%', label: 'Client Satisfaction' },
  { id: 4, value: 24, suffix: '/7', label: 'Post-Launch Support' },
];

export default function Stats() {
  return (
    <section id="stats" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          {data.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <motion.div
                className="card"
                whileHover={{ scale: 1.08, y: -4, transition: { duration: 0.2 } }}>
                <Box sx={styles.card}>
                  <Text sx={styles.number}>
                    <CountUp end={item.value} suffix={item.suffix} />
                  </Text>
                  <Text sx={styles.label}>{item.label}</Text>
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
    py: [5, null, 7],
    backgroundColor: 'background_secondary',
  },
  grid: {
    gridGap: ['30px 20px', null, '40px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
  card: {
    textAlign: 'center',
    px: 3,
    py: [4, null, 5],
    backgroundColor: 'white',
    borderRadius: 10,
    boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
  },
  number: {
    color: 'teal',
    fontSize: ['32px', null, '40px', '48px'],
    fontWeight: 700,
    lineHeight: 1.2,
    mb: 2,
    fontFamily: 'Ubuntu',
  },
  label: {
    color: 'text',
    fontSize: [1, null, 2],
    fontWeight: 500,
    lineHeight: 1.6,
    fontFamily: 'Ubuntu',
  },
};
