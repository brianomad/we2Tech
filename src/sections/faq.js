/** @jsx jsx */
import { jsx, Container, Box, Text } from 'theme-ui';
import { useState } from 'react';
import SectionHeader from '../components/section-header';
import { IoIosArrowDown } from 'react-icons/io';

const data = [
  {
    id: 1,
    question: 'How much does a mobile app or website cost?',
    answer:
      'The cost depends on the scope, features and complexity of your project. Contact us with your requirements and we will provide a clear, itemised quote — no hidden fees.',
  },
  {
    id: 2,
    question: 'How long does development take?',
    answer:
      'Typical projects range from 4 to 16 weeks depending on size. We break the work into milestones so you can see progress throughout the process.',
  },
  {
    id: 3,
    question: 'What technologies do you use?',
    answer:
      'We build with modern, proven technologies including React Native, Flutter, Swift, Kotlin for mobile, and React, Next.js and WordPress for web — all backed by cloud infrastructure.',
  },
  {
    id: 4,
    question: 'Do you provide support after launch?',
    answer:
      'Yes. We host, maintain and monitor your application after launch, fix any unexpected issues, and can upgrade the system as your requirements grow.',
  },
  {
    id: 5,
    question: 'How do we start a project with we2Tech?',
    answer:
      'Simply send us a message through the contact form or WhatsApp. We will arrange a consultation to understand your needs and outline the best solution for you.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeader
          title="Frequently Asked Questions"
          slogan="Answers to the questions we hear most often"
          icColor={true} />
        <Box sx={styles.wrapper}>
          {data.map((item) => (
            <Box sx={styles.item} key={item.id}>
              <Box
                sx={styles.questionRow}
                onClick={() => setOpen(open === item.id ? null : item.id)}
                role="button"
                aria-expanded={open === item.id}>
                <Text sx={styles.question}>{item.question}</Text>
                <Box
                  sx={{
                    ...styles.arrow,
                    ...(open === item.id ? styles.arrowOpen : {}),
                  }}>
                  <IoIosArrowDown />
                </Box>
              </Box>
              {open === item.id && (
                <Text sx={styles.answer}>{item.answer}</Text>
              )}
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
  container: {
    maxWidth: ['100%', null, null, '860px'],
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 10,
    border: '1px solid',
    borderColor: 'border_color',
    overflow: 'hidden',
  },
  questionRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 3,
    p: 4,
    cursor: 'pointer',
  },
  question: {
    fontSize: 2,
    fontWeight: 700,
    color: 'heading',
    fontFamily: 'Ubuntu',
  },
  arrow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'teal',
    fontSize: 4,
    transition: 'transform 0.3s',
    flexShrink: 0,
  },
  arrowOpen: {
    transform: 'rotate(180deg)',
  },
  answer: {
    px: 4,
    pb: 4,
    fontSize: 1,
    lineHeight: 1.9,
    color: 'text',
    fontFamily: 'Ubuntu',
  },
};
