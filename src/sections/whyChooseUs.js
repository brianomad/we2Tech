/** @jsx jsx */
import { jsx, Container, Grid, Box, Text } from 'theme-ui';
import { motion } from 'framer-motion';
import SectionHeader from '../components/section-header';
import {
  FaMapMarkerAlt,
  FaRocket,
  FaHandshake,
  FaHeadset,
  FaCode,
} from 'react-icons/fa';

const data = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    title: 'Hong Kong Team',
    text:
      'Local context, direct communication and face-to-face collaboration throughout your project.',
  },
  {
    id: 2,
    icon: <FaRocket />,
    title: 'On-Time Delivery',
    text:
      'Clear milestones and effective project management so your application launches on schedule.',
  },
  {
    id: 3,
    icon: <FaHandshake />,
    title: 'Transparent Pricing',
    text:
      'Clear quotes and honest advice. No hidden costs — you always know what you are paying for.',
  },
  {
    id: 4,
    icon: <FaHeadset />,
    title: 'Post-Launch Support',
    text:
      'We host, maintain and troubleshoot your application long after launch — even upgrade it for you.',
  },
  {
    id: 5,
    icon: <FaCode />,
    title: 'Modern Tech Stack',
    text:
      'React Native, Flutter, Next.js and more — we build with proven, scalable technology.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="whyChooseUs" sx={styles.section}>
      <Container>
        <SectionHeader
          title="Why Choose We2Tech?"
          slogan="A technology partner who cares about your business goals"
          icColor={true} />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <motion.div
              key={item.id}
              className="card"
              whileHover={{ y: -6, transition: { duration: 0.2 } }}>
              <Box sx={styles.card}>
                <Box sx={styles.icon}>{item.icon}</Box>
                <Text sx={styles.title}>{item.title}</Text>
                <Text sx={styles.text}>{item.text}</Text>
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
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
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
