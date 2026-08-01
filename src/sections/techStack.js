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
  SiIonic,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSass,
  SiPython,
  SiPhp,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiGraphql,
  SiDocker,
  SiKubernetes,
  SiGithub,
  SiGitlab,
  SiFigma,
  SiJira,
  SiSlack,
  SiNotion,
  SiStripe,
  SiPaypal,
  SiNextDotJs,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiJupyter,
  SiJenkins,
  SiCircleci,
  SiGithubactions,
  SiEthereum,
  SiParitysubstrate,
  SiRust,
  SiIpfs,
  SiShopify,
  SiWoo,
  SiMagento,
  SiGoogleads,
  SiHubspot,
  SiMailchimp,
  SiWix,
} from 'react-icons/si';
import {
  FaVuejs,
  FaNodeJs,
  FaCreditCard,
  FaMobileAlt,
  FaGoogle,
  FaRobot,
  FaBrain,
  FaFileCode,
  FaCoins,
} from 'react-icons/fa';

function SolidityIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      role="img"
      aria-label="Solidity">
      <path d="M4.409 6.608L7.981.255l3.572 6.353H4.409zM8.411 0l3.569 6.348L15.552 0H8.411zm4.036 17.392l3.572 6.354 3.575-6.354h-7.147zm-.608-10.284h-7.43l3.715 6.605 3.715-6.605zm.428-.25h7.428L15.982.255l-3.715 6.603zM15.589 24l-3.569-6.349L8.448 24h7.141zm-3.856-6.858H4.306l3.712 6.603 3.715-6.603zm.428-.25h7.433l-3.718-6.605-3.715 6.605z" />
    </svg>
  );
}

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
      { name: 'Ionic', icon: <SiIonic /> },
    ],
  },
  {
    id: 2,
    category: 'Web Development',
    items: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextDotJs /> },
      { name: 'Vue', icon: <FaVuejs /> },
      { name: 'Angular', icon: <SiAngular /> },
      { name: 'WordPress', icon: <SiWordpress /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <SiCss3 /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Sass', icon: <SiSass /> },
      { name: 'Wix', icon: <SiWix /> },
    ],
  },
  {
    id: 3,
    category: 'Backend & Databases',
    items: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'PHP', icon: <SiPhp /> },
      { name: 'Django', icon: <SiDjango /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'Redis', icon: <SiRedis /> },
      { name: 'GraphQL', icon: <SiGraphql /> },
    ],
  },
  {
    id: 4,
    category: 'Cloud & DevOps',
    items: [
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'AWS', icon: <SiAmazonaws /> },
      { name: 'Google Cloud', icon: <SiGooglecloud /> },
      { name: 'Azure', icon: <SiMicrosoftazure /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'GitHub Actions', icon: <SiGithubactions /> },
      { name: 'Jenkins', icon: <SiJenkins /> },
      { name: 'CircleCI', icon: <SiCircleci /> },
    ],
  },
  {
    id: 5,
    category: 'AI & Machine Learning',
    items: [
      { name: 'AI Chatbots', icon: <FaRobot /> },
      { name: 'Machine Learning', icon: <FaBrain /> },
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'PyTorch', icon: <SiPytorch /> },
      { name: 'Keras', icon: <SiKeras /> },
      { name: 'Jupyter', icon: <SiJupyter /> },
    ],
  },
  {
    id: 6,
    category: 'Blockchain & Web3',
    items: [
      { name: 'Substrate', icon: <SiParitysubstrate /> },
      { name: 'Solidity', icon: <SolidityIcon /> },
      { name: 'Rust', icon: <SiRust /> },
      { name: 'IPFS', icon: <SiIpfs /> },
      { name: 'Smart Contracts', icon: <FaFileCode /> },
      { name: 'Web3 & DApps', icon: <FaCoins /> },
    ],
  },
  {
    id: 7,
    category: 'E-commerce & Marketing',
    items: [
      { name: 'Shopify', icon: <SiShopify /> },
      { name: 'WooCommerce', icon: <SiWoo /> },
      { name: 'Magento', icon: <SiMagento /> },
      { name: 'Google Ads', icon: <SiGoogleads /> },
      { name: 'HubSpot', icon: <SiHubspot /> },
      { name: 'Mailchimp', icon: <SiMailchimp /> },
    ],
  },
  {
    id: 8,
    category: 'Tools & Integrations',
    items: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'GitLab', icon: <SiGitlab /> },
      { name: 'Figma', icon: <SiFigma /> },
      { name: 'Jira', icon: <SiJira /> },
      { name: 'Slack', icon: <SiSlack /> },
      { name: 'Notion', icon: <SiNotion /> },
      { name: 'Stripe', icon: <SiStripe /> },
      { name: 'PayPal', icon: <SiPaypal /> },
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
    backgroundColor: 'white',
  },
  grid: {
    gridGap: ['30px 20px', null, '30px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
  group: {
    height: '100%',
    p: [4, null, 5],
    backgroundColor: 'background_secondary',
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
    backgroundColor: 'white',
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
