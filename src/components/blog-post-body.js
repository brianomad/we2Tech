/** @jsx jsx */
import { jsx, Container, Box, Text, Heading } from 'theme-ui';
import Reveal from '../components/reveal';
import SectionHeader from '../components/section-header';

function Block({ block, index }) {
  if (block.type === 'h2') {
    return <Heading as="h2" sx={styles.h2}>{block.text}</Heading>;
  }
  if (block.type === 'ul') {
    return (
      <Box as="ul" sx={styles.ul}>
        {block.items.map((item, i) => (
          <Box as="li" key={i} sx={styles.li}>{item}</Box>
        ))}
      </Box>
    );
  }
  return <Text as="p" sx={styles.p}>{block.text}</Text>;
}

export default function PostBody({ post }) {
  return (
    <section sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeader
          eyebrow={post.category}
          title={post.title}
          slogan={post.description}
          icColor={true} />
        <Reveal delay={0.1}>
          <Box sx={styles.metaRow}>
            <Text sx={styles.date}>{post.date}</Text>
            <Text sx={styles.dot}>·</Text>
            <Text sx={styles.readingTime}>{post.readingTime}</Text>
            <Text sx={styles.dot}>·</Text>
            <Text sx={styles.tags}>{post.tags.join(' · ')}</Text>
          </Box>
        </Reveal>
        <Reveal delay={0.15}>
          <Box sx={styles.body}>
            {post.content.map((block, index) => (
              <Block key={index} block={block} index={index} />
            ))}
          </Box>
        </Reveal>
        <Reveal delay={0.2}>
          <Box sx={styles.ctaBox}>
            <Heading as="h3" sx={styles.ctaTitle}>Have a similar project in mind?</Heading>
            <Text sx={styles.ctaText}>
              Talk to your technology partner in Hong Kong. Share your business goal and we will review your project — free of charge.
            </Text>
            <a href="/contact">
              <Box as="button" sx={styles.ctaBtn}>Book a Free Consultation</Box>
            </a>
          </Box>
        </Reveal>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    pt: [8, null, 10],
    pb: [7, null, 9],
    backgroundColor: 'background_secondary',
  },
  container: {
    maxWidth: ['100%', null, null, '860px'],
  },
  metaRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    mt: 3,
    flexWrap: 'wrap',
  },
  date: {
    fontSize: 0,
    fontFamily: 'Ubuntu',
    color: 'muted',
  },
  readingTime: {
    fontSize: 0,
    fontFamily: 'Ubuntu',
    color: 'muted',
  },
  tags: {
    fontSize: 0,
    fontFamily: 'Ubuntu',
    color: 'teal',
    fontWeight: 600,
  },
  dot: {
    color: 'muted',
  },
  body: {
    mt: [4, null, 5],
    backgroundColor: 'white',
    border: '1px solid',
    borderColor: 'border_color',
    borderRadius: 12,
    p: [4, null, 6],
  },
  h2: {
    fontFamily: 'Ubuntu',
    fontSize: 3,
    fontWeight: 700,
    color: 'heading',
    mt: 4,
    mb: 2,
    '&:first-of-type': {
      mt: 0,
    },
  },
  p: {
    fontFamily: 'Ubuntu',
    fontSize: 1,
    lineHeight: 1.8,
    color: 'text',
    mb: 3,
  },
  ul: {
    mb: 3,
    pl: 3,
  },
  li: {
    fontFamily: 'Ubuntu',
    fontSize: 1,
    lineHeight: 1.8,
    color: 'text',
    mb: 2,
    '::marker': {
      color: 'teal',
    },
  },
  ctaBox: {
    mt: 5,
    textAlign: 'center',
    p: [4, null, 5],
    backgroundColor: 'white',
    border: '1px solid',
    borderColor: 'teal',
    borderRadius: 12,
  },
  ctaTitle: {
    fontFamily: 'Ubuntu',
    fontSize: 3,
    fontWeight: 700,
    color: 'heading',
    mb: 2,
  },
  ctaText: {
    fontFamily: 'Ubuntu',
    fontSize: 1,
    color: 'text',
    mb: 4,
    maxWidth: '480px',
    mx: 'auto',
    lineHeight: 1.7,
  },
  ctaBtn: {
    fontFamily: 'Ubuntu',
    fontWeight: 700,
    fontSize: 1,
    color: 'white',
    backgroundColor: 'teal',
    border: 'none',
    borderRadius: 8,
    py: '12px',
    px: '28px',
    cursor: 'pointer',
    transition: 'all 0.25s',
    '&:hover': {
      backgroundColor: 'secondary',
    },
  },
};
