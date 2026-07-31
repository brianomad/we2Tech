/** @jsx jsx */
import { jsx, Container, Grid, Box, Text, Button } from 'theme-ui';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import SectionHeader from '../components/section-header';
import Reveal from '../components/reveal';
import { FaSearch, FaWrench, FaCrosshairs, FaRocket } from 'react-icons/fa';

const data = [
  {
    id: 1,
    icon: <FaSearch />,
    title: 'Diagnose',
    text: 'Review code, infrastructure, workflow and delivery blockers.',
  },
  {
    id: 2,
    icon: <FaWrench />,
    title: 'Stabilise',
    text: 'Fix urgent risks, unreliable builds and operational gaps.',
  },
  {
    id: 3,
    icon: <FaCrosshairs />,
    title: 'Refocus',
    text: 'Reset scope around business impact and the next useful release.',
  },
  {
    id: 4,
    icon: <FaRocket />,
    title: 'Relaunch',
    text: 'Ship improvements in clear increments with visible progress.',
  },
];

export default function ProjectRescue() {
  return (
    <section id="rescue" sx={styles.section}>
      <Container>
        <SectionHeader
          eyebrow="Improve Stuck Systems"
          title="Turn unclear systems into workable platforms"
          slogan="Projects slow down when scope, code quality or ownership become unclear. We help stabilise the system and move delivery back into practical milestones." />
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
        <Reveal delay={0.2}>
          <Box sx={styles.ctaWrap}>
            <ScrollLink to="contactUs" spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant="whiteButton" aria-label="Book a Consultation">
                Book a Consultation
              </Button>
            </ScrollLink>
          </Box>
        </Reveal>
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
      'repeat(4,1fr)',
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
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: ['60px', null, '70px'],
    height: ['60px', null, '70px'],
    borderRadius: '50%',
    backgroundColor: 'cyan',
    color: 'heading',
    fontSize: ['26px', null, '30px'],
    mb: 4,
    svg: {
      display: 'block',
    },
  },
  title: {
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
  ctaWrap: {
    textAlign: 'center',
    mt: [6, null, 8],
    a: {
      cursor: 'pointer',
    },
  },
};
