/** @jsx jsx */
import { jsx, Container, Box, Text } from 'theme-ui';
import SectionHeader from '../components/section-header';
import Reveal from '../components/reveal';
import posts from '../data/blog-data';

export default function Blog() {
  return (
    <section id="blog" sx={styles.section}>
      <Container>
        <SectionHeader
          eyebrow="Insights"
          title="Articles & Guides"
          slogan="Practical advice on apps, websites and technology strategy for Hong Kong businesses"
          icColor={true} />
        <Box sx={styles.grid}>
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={(index % 3) * 0.08}>
              <a href={`/blog/${post.slug}`} sx={styles.cardLink}>
                <Box sx={styles.card}>
                  <Box sx={styles.meta}>
                    <Text sx={styles.category}>{post.category}</Text>
                    <Text sx={styles.date}>{post.date}</Text>
                  </Box>
                  <Text sx={styles.title}>{post.title}</Text>
                  <Text sx={styles.excerpt}>{post.description}</Text>
                  <Box sx={styles.footer}>
                    <Text sx={styles.readMore}>Read article →</Text>
                    <Text sx={styles.readingTime}>{post.readingTime}</Text>
                  </Box>
                </Box>
              </a>
            </Reveal>
          ))}
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    pt: [8, null, 10],
    pb: [7, null, 9],
    scrollMarginTop: '70px',
    backgroundColor: 'background_secondary',
  },
  grid: {
    mt: [5, null, 7],
    display: 'grid',
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', 'repeat(3,1fr)'],
    gap: ['24px', null, '28px'],
  },
  cardLink: {
    textDecoration: 'none',
    display: 'block',
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    p: [4, null, 5],
    backgroundColor: 'white',
    borderRadius: 12,
    border: '1px solid',
    borderColor: 'border_color',
    transition: 'all 0.25s',
    '&:hover': {
      transform: 'translateY(-6px)',
      boxShadow: '0 12px 32px rgba(0,139,139,0.18)',
      borderColor: 'teal',
    },
  },
  meta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 3,
  },
  category: {
    display: 'inline-block',
    px: 3,
    py: 1,
    fontSize: 0,
    fontWeight: 700,
    fontFamily: 'Ubuntu',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: 'teal',
    backgroundColor: 'rgba(0,139,139,0.1)',
    borderRadius: 30,
  },
  date: {
    fontSize: 0,
    fontFamily: 'Ubuntu',
    color: 'muted',
  },
  title: {
    display: 'block',
    fontSize: 3,
    fontWeight: 700,
    fontFamily: 'Ubuntu',
    color: 'heading',
    lineHeight: 1.35,
    mb: 3,
  },
  excerpt: {
    display: 'block',
    fontSize: 1,
    fontFamily: 'Ubuntu',
    color: 'text',
    lineHeight: 1.6,
    flex: 1,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mt: 4,
  },
  readMore: {
    fontSize: 1,
    fontWeight: 600,
    fontFamily: 'Ubuntu',
    color: 'teal',
  },
  readingTime: {
    fontSize: 0,
    fontFamily: 'Ubuntu',
    color: 'muted',
  },
};
