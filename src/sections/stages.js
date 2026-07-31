/** @jsx jsx */
import { jsx, Container, Grid, Box, Text } from 'theme-ui';
import { motion } from 'framer-motion';
import SectionHeader from '../components/section-header';
import Reveal from '../components/reveal';

const data = [
  {
    id: 1,
    number: '01',
    title: 'New Project Planning',
    text:
      'We help you articulate your requirements, define scope and choose the right approach before a single line of code is written.',
  },
  {
    id: 2,
    number: '02',
    title: 'Design & Development',
    text:
      'We design the UI/UX and build the application with clear milestones, regular demos and visible progress.',
  },
  {
    id: 3,
    number: '03',
    title: 'Launch & Rollout',
    text:
      'We deploy to production, configure hosting and make sure everything runs smoothly on day one.',
  },
  {
    id: 4,
    number: '04',
    title: 'Ongoing Improvement',
    text:
      'We monitor, maintain and upgrade your application as your business grows.',
  },
];

export default function Stages() {
  return (
    <section id="stages" sx={styles.section}>
      <Container>
        <SectionHeader
          eyebrow="Your Technology Partner"
          title="Support for every stage of your project"
          slogan="We review your needs, budget and roadmap before shaping a practical plan."
          icColor={true} />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Reveal key={item.id} delay={(item.id - 1) * 0.1}>
              <motion.div
                className="card"
                whileHover={{ y: -6, transition: { duration: 0.2 } }}>
                <Box sx={styles.card}>
                  <Text as="span" sx={styles.number}>{item.number}</Text>
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
    backgroundColor: 'background_secondary',
    borderRadius: 10,
    border: '1px solid',
    borderColor: 'border_color',
    transition: 'all 0.3s',
    '&:hover': {
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    },
  },
  number: {
    fontSize: 7,
    fontWeight: 700,
    color: 'teal',
    lineHeight: 1,
    mb: 3,
    fontFamily: 'Ubuntu',
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
