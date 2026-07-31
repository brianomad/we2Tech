/** @jsx jsx */
import { jsx, Container, Box, Text } from 'theme-ui';
import SectionHeader from '../components/section-header';

const groups = [
  {
    id: 1,
    category: 'Mobile Development',
    items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'HarmonyOS'],
  },
  {
    id: 2,
    category: 'Web Development',
    items: ['React', 'Next.js', 'Vue', 'Angular', 'WordPress', 'TypeScript'],
  },
  {
    id: 3,
    category: 'Backend & Cloud',
    items: ['Node.js', 'Firebase', 'AWS', 'Google Cloud', 'Azure'],
  },
  {
    id: 4,
    category: 'Tools & Integrations',
    items: ['Git', 'Google Workspace', 'Google Analytics', 'Payment Gateways'],
  },
];

export default function TechStack() {
  return (
    <section id="techStack" sx={styles.section}>
      <Container>
        <SectionHeader
          title="Technologies We Work With"
          slogan="Modern, proven tools to build reliable products"
          icColor={true} />
        <Box sx={styles.wrapper}>
          {groups.map((group) => (
            <Box sx={styles.group} key={group.id}>
              <Text sx={styles.category}>{group.category}</Text>
              <Box sx={styles.chips}>
                {group.items.map((item) => (
                  <Box sx={styles.chip} key={item}>
                    <Text>{item}</Text>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    py: [7, null, 9],
    backgroundColor: 'background_secondary',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  group: {
    display: 'flex',
    flexDirection: ['column', null, 'row'],
    alignItems: ['flex-start', null, 'center'],
    gap: [2, null, 4],
  },
  category: {
    minWidth: ['100%', null, '220px'],
    fontSize: 2,
    fontWeight: 700,
    color: 'teal',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontFamily: 'Ubuntu',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2,
  },
  chip: {
    px: 3,
    py: 2,
    backgroundColor: 'white',
    border: '1px solid',
    borderColor: 'border_color',
    borderRadius: 30,
    color: 'text',
    fontSize: 1,
    fontFamily: 'Ubuntu',
    transition: 'all 0.25s',
    '&:hover': {
      backgroundColor: 'teal',
      borderColor: 'teal',
      color: 'white',
    },
  },
};
