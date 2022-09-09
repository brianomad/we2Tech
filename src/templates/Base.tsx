import { Meta } from '../layout/Meta';
import { HomePage } from '../pages/HomePage';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { NavBar } from './NavBar';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <NavBar />
    <HomePage />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };
