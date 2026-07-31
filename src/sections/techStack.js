/** @jsx jsx */
import { jsx, Container, Grid, Box, Text } from 'theme-ui';
import { motion } from 'framer-motion';
import SectionHeader from '../components/section-header';
import Reveal from '../components/reveal';
import {
  SiReact,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiAngular,
  SiWordpress,
  SiTypescript,
  SiJavascript,
  SiFirebase,
  SiAmazonaws,
  SiGooglecloud,
  SiMicrosoftazure,
  SiGit,
  SiGoogleanalytics,
} from 'react-icons/si';
import {
  FaVuejs,
  FaNodeJs,
  FaCode,
  FaCreditCard,
  FaMobileAlt,
  FaGoogle,
} from 'react-icons/fa';

const groups = [
  {
    id: 1,
    category: 'Mobile Development',
    items: [
      { name: 'React Native', icon: <SiReact /> },
      { name: 'Flutter', icon: <SiFlutter /> },
      { name: 'Swift', icon: <SiSwift /> },
      { name: 'Kotlin', icon: <SiKotlin /> },
      { name: 'HarmonyOS', icon: <FaMobileAlt /> },
    ],
  },
  {
    id: 2,
    category: 'Web Development',
    items: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Next.js', icon: <FaCode /> },
      { name: 'Vue', icon: <FaVuejs /> },
      { name: 'Angular', icon: <SiAngular /> },
      { name: 'WordPress', icon: <SiWordpress /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
    ],
  },
  {
    id: 3,
    category: 'Backend & Cloud',
    items: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'AWS', icon: <SiAmazonaws /> },
      { name: 'Google Cloud', icon: <SiGooglecloud /> },
      { name: 'Azure', icon: <SiMicrosoftazure /> },
    ],
  },
  {
    id: 4,
    category: 'Tools & Integrations',
    items: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'Google Workspace', icon: <FaGoogle /> },
      { name: 'Google Analytics', icon: <SiGoogleanalytics /> },
      { name: 'Payment Gateways', icon: <FaCreditCard /> },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};

export default function TechStack() {
  return (
    <section id="techStack" sx={styles.section}>
      <Container>
        <SectionHeader
          title="Technologies We Work With"
          slogan="Modern, proven tools to build reliable products"
          icColor={true} />
        <Grid sx={styles.grid}>
          {groups.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.1}>
              <Box sx={styles.group}>
                <Text sx={styles.category}>{group.category}</Text>
                <Box sx={styles.chips}>
                  {group.items.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ scale: 1.08, y: -4 }}
                      transition={{ duration: 0.2 }}>
                      <Box sx={styles.chip}>
                        <Box sx={styles.icon}>{item.icon}</Box>
                        <Text>{item.name}</Text>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </Box>
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
  grid: {
    gridGap: ['30px 20px', null, '30px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
  group: {
    height: '100%',
    p: [4, null, 5],
    backgroundColor: 'white',
    borderRadius: 12,
    border: '1px solid',
    borderColor: 'border_color',
  },
  category: {
    display: 'block',
    fontSize: 2,
    fontWeight: 700,
    color: 'teal',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontFamily: 'Ubuntu',
    mb: 3,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2,
  },
  chip: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    px: 3,
    py: 2,
    backgroundColor: 'background_secondary',
    border: '1px solid',
    borderColor: 'border_color',
    borderRadius: 30,
    color: 'text',
    fontSize: 1,
    fontWeight: 500,
    fontFamily: 'Ubuntu',
    transition: 'all 0.25s',
    cursor: 'default',
    '&:hover': {
      backgroundColor: 'teal',
      borderColor: 'teal',
      color: 'white',
      boxShadow: '0 6px 16px rgba(0,139,139,0.35)',
      svg: {
        color: 'white',
      },
    },
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'teal',
    fontSize: 3,
    svg: {
      display: 'block',
    },
    '&:hover': {
      color: 'white',
    },
  },
};
