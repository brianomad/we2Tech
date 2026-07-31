/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';

import stepOne from 'assets/we2Tech/stepOne.png';
import stepTwo from 'assets/we2Tech/stepTwo.png';
import stepThree from 'assets/we2Tech/stepThree.png';
import stepFour from 'assets/we2Tech/stepFour.png';


const data = [
  {
    id: 1,
    imgSrc: stepOne,
    step: 'STEP 1',
    altText: 'Fast Performance',
    title: 'PROBLEM IDENTIFICATION AND PRECISE SOLUTION',
    text:
      'Helping you articulate where the problem areas are, and how tech might be able to provide the solutions you didn`t even know you needed.',
  },
  {
    id: 2,
    imgSrc: stepTwo,
    step: 'STEP 2',
    altText: 'Partnership deal',
    title: 'DESIGN UI/UX FOR THE APPLICATION',
    text:
      'Design awesome UI/UX based on your requirements. We make the UI/UX user-friendly and attractive for your application`s users.',
  },
  {
    id: 3,
    imgSrc: stepThree,
    step: 'STEP 3',
    altText: 'Pro Subscription',
    title: 'EFFECTIVE PROJECT MANAGEMENT AND APPLICATION DEVELOPMENT',
    text:
      'Processes in place to ensure the work gets done, on time and within budget. One less thing to worry about.',
  },
  {
    id: 4,
    imgSrc: stepFour,
    step: 'STEP 4',
    altText: 'Customer Support',
    title: 'LAUNCH THE APPLICATION',
    text:
      'Launch the application on time and without any unexpected issues.',
  },
];

export default function HowWeWorkSection() {
  return (
    <section sx={{ variant: 'section.services', backgroundColor: 'teal' }} id="howWeWork">
      <Container>
        <SectionHeader title="How We Work?" slogan="A transparent, step-by-step process from first idea to live launch." />
        <Box sx={styles.container}>
          <Grid sx={styles.grid}>
            {data.map((item) => (
              <FeatureCardColumn
                key={item.id}
                src={item.imgSrc}
                step={item.step}
                alt={item.altText}
                title={item.title}
                text={item.text}
                imgSrc={item.imgSrc} />
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    width: '100%',
    py: [6, null, 8],
  },
  grid: {
    width: ['100%', '80%', '100%'],
    // mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
