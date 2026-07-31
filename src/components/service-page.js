/** @jsx jsx */
import { jsx } from 'theme-ui';
import Layout from 'components/layout';
import SEO from 'components/seo';
import ContactUs from '../sections/contactUs.tsx';
import {
  ServiceHero,
  FeatureGrid,
  PointsList,
  ModuleChips,
  ProcessSteps,
  DirectAnswers,
  ServiceFAQ,
  ServiceCTA,
} from './service-blocks';

export default function ServicePage({ content }) {
  return (
    <Layout>
      <SEO
        title={content.seo.title}
        description={content.seo.description}
        keywords={content.seo.keywords} />
      <ServiceHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        slogan={content.hero.slogan} />
      <FeatureGrid
        title={content.features.title}
        slogan={content.features.slogan}
        items={content.features.items} />
      <PointsList
        title={content.points.title}
        slogan={content.points.slogan}
        points={content.points.items} />
      <ModuleChips
        title={content.modules.title}
        slogan={content.modules.slogan}
        modules={content.modules.items} />
      <ProcessSteps
        title={content.process.title}
        slogan={content.process.slogan}
        steps={content.process.items}
        dark={content.process.dark} />
      <DirectAnswers items={content.directAnswers} />
      <ServiceFAQ items={content.faq} />
      <ServiceCTA title={content.cta.title} text={content.cta.text} />
      <ContactUs />
    </Layout>
  );
}
