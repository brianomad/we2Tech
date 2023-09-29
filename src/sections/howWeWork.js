/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';

// import stepOne from 'assets/we2Tech/stepOne.png';
import stepTwo from 'assets/we2Tech/stepTwo.png';
import stepThree from 'assets/we2Tech/stepThree.png';
import stepFour from 'assets/we2Tech/stepFour.png';

import stepOne from 'assets/we2Tech/stepOne.png';


const data = [
  {
    id: 1,
    imgSrc: stepOne,
    step: 'STEP 1',
    altText: 'Fast Performance',
    title: 'PROBLEM IDENTIFICATION ADN PRECISE SOLUTION',
    text:
      'Helping you articulate where the problem areas are, and how tech might be able to provide the solutions you didn`t even know you needed.',
      imgSrc: stepOne,
  },
  {
    id: 2,
    imgSrc: stepTwo,
    step: 'STEP 2',
    altText: 'Partnership deal',
    title: 'DESIGN UI/UX FOR THE APPLICATION',
    text:
      'Design awesome UI/UX base on your requirement and design the UI/UX become more user-friendly and attractive for teh application`s user',
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
    title: 'LANUCH THE APPLIACTION',
    text:
      'Lannch the application on time and without any unexpected issue.',
  },
];

export default function HowWeWorkSection() {
  return (
    <section sx={{ variant: 'section.services' }} id="howWeWork">
      <Container sx={styles.container}>
        <SectionHeader title="How We Work?" />
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
    backgroundColor: '#008B8B',
    p: 20
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
