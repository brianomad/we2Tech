/** @jsx jsx */
import { jsx, Container, Grid, Box, Text } from 'theme-ui';
import { motion } from 'framer-motion';

const data = [
  { id: 1, number: '10+', label: 'Years Combined Experience' },
  { id: 2, number: '50+', label: 'Projects Delivered' },
  { id: 3, number: '100%', label: 'Client Satisfaction' },
  { id: 4, number: '24/7', label: 'Post-Launch Support' },
];

export default function Stats() {
  return (
    <section id="stats" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <motion.div
              key={item.id}
              className="card"
              whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}>
              <Box sx={styles.card}>
                <Text sx={styles.number}>{item.number}</Text>
                <Text sx={styles.label}>{item.label}</Text>
              </Box>
            </motion.div>
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
    fontSize: ['36px', null, '44px', '52px'],
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
