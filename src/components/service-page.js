/** @jsx jsx */
import { jsx } from 'theme-ui';
import Layout from 'components/layout';
import SEO from 'components/seo';
import JsonLd from './json-ld';
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
        keywords={content.seo.keywords}
        path={content.seo.path} />
      <JsonLd type="service" service={content.seo} />
      <JsonLd
        type="breadcrumb"
        items={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services/mobile-app-development' },
          { name: content.seo.title.split('|')[0].trim(), path: content.seo.path },
        ]} />
      <ServiceHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        slogan={content.hero.slogan}
        image={content.hero.image}
        backgroundImage={content.hero.background}
        showBookButton={content.hero.showBookButton !== false} />
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
      {content.faq && content.faq.length > 0 && <ServiceFAQ items={content.faq} />}
      {content.cta && <ServiceCTA title={content.cta.title} text={content.cta.text} />}
    </Layout>
  );
}
