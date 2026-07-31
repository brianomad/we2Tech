/** @jsx jsx */
import { jsx, Container, Grid, Box, Text } from 'theme-ui';
import { motion } from 'framer-motion';
import SectionHeader from '../components/section-header';
import { FaQuoteLeft } from 'react-icons/fa';

const data = [
  {
    id: 1,
    quote:
      'we2Tech delivered our mobile app on time and on budget. The team communicated clearly at every stage and the result exceeded our expectations.',
    name: 'Founder, Retail Startup',
  },
  {
    id: 2,
    quote:
      'Professional, responsive and easy to work with. They took our rough idea and turned it into a polished, user-friendly website our customers love.',
    name: 'Operations Manager, Logistics Company',
  },
  {
    id: 3,
    quote:
      'Their post-launch support is outstanding. Any issue is resolved quickly and they keep improving the system as our business grows.',
    name: 'Director, Education Centre',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" sx={styles.section}>
      <Container>
        <SectionHeader
          title="What Our Clients Say"
          slogan="Trusted by businesses across Hong Kong"
          icColor={true} />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <motion.div
              key={item.id}
              className="card"
              whileHover={{ y: -6, transition: { duration: 0.2 } }}>
              <Box sx={styles.card}>
                <Box sx={styles.icon}>
                  <FaQuoteLeft />
                </Box>
                <Text sx={styles.quote}>{item.quote}</Text>
                <Text sx={styles.name}>{item.name}</Text>
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
    py: [7, null, 9],
    backgroundColor: 'white',
  },
  grid: {
    gridGap: ['30px 20px', null, '30px'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
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
    color: 'teal',
    fontSize: 4,
    mb: 3,
  },
  quote: {
    fontSize: 2,
    lineHeight: 1.9,
    color: 'text',
    fontStyle: 'italic',
    mb: 4,
    flexGrow: 1,
    fontFamily: 'Ubuntu',
  },
  name: {
    fontSize: 1,
    fontWeight: 700,
    color: 'heading',
    fontFamily: 'Ubuntu',
  },
};
