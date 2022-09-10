/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'PROBLEM IDENTIFICATION ADN PRECISE SOLUTION',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'DESIGN UI/UX FOR THE APPLICATION',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Pro Subscription',
    title: 'EFFECTIVE PROJECT MANAGEMENT AND APPLICATION DEVELOPMENT',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 4,
    imgSrc: Support,
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
        <SectionHeader
          title="How We Work?"
          // slogan="Whats the function"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  container: {
    justifyContent: 'center',
    textAlign: 'center'
  },
  grid: {
    marginTop: 40,
    // marginLeft: 50,
    // margiRight: 50,
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
