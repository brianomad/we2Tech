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
    altText: 'Fast Performance',
    title: 'PROBLEM IDENTIFICATION ADN PRECISE SOLUTION',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 2,
    imgSrc: stepTwo,
    altText: 'Partnership deal',
    title: 'DESIGN UI/UX FOR THE APPLICATION',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 3,
    imgSrc: stepThree,
    altText: 'Pro Subscription',
    title: 'EFFECTIVE PROJECT MANAGEMENT AND APPLICATION DEVELOPMENT',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 4,
    imgSrc: stepFour,
    altText: 'Customer Support',
    title: 'LANUCH THE APPLIACTION',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
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
                alt={item.altText}
                title={item.title}
                text={item.text} />
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  container: {
    marginTop: 60,
    textAlign: 'center',
    width: '100%',
    backgroundColor: 'black'
  },
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
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
