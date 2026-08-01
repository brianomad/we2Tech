import ServicePage from '../../components/service-page';
import BannerImg from 'assets/we2Tech/UIUX.png';
import {
  FaSearch,
  FaDrawPolygon,
  FaPaintBrush,
  FaThLarge,
  FaMousePointer,
  FaEye,
} from 'react-icons/fa';

const content = {
  seo: {
    title: 'UI/UX Design Hong Kong | we2Tech',
    description:
      'User-centred UI/UX design for mobile and web applications in Hong Kong. User flows, wireframes, high-fidelity mock-ups and clickable prototypes.',
    keywords:
      'UI UX design Hong Kong, mobile app design, website design, wireframes, prototypes, user experience',
  },
  hero: {
    eyebrow: 'Application UI/UX Design',
    title: 'Interfaces your users will actually enjoy using',
    slogan:
      'Our design team creates user-friendly, attractive UI/UX for mobile and web applications — turning first-time visitors into loyal customers with clear, delightful experiences.',
    image: BannerImg,
    background: BannerImg,
    showBookButton: false,
  },
  features: {
    title: 'What we design',
    slogan: 'We design around how real users think and act, not just how the app should look.',
    items: [
      {
        icon: <FaSearch />,
        title: 'UX research & user flows',
        text:
          'Understand your users, map their journeys and define the clearest path to each goal in the app.',
      },
      {
        icon: <FaDrawPolygon />,
        title: 'Wireframes',
        text:
          'Low-fidelity layouts that agree on structure, hierarchy and content before visual design begins.',
      },
      {
        icon: <FaPaintBrush />,
        title: 'UI design',
        text:
          'High-fidelity screens for mobile and web with a consistent, attractive visual direction for your brand.',
      },
      {
        icon: <FaThLarge />,
        title: 'Design systems',
        text:
          'Reusable components, colours, typography and rules that keep every screen consistent as you grow.',
      },
      {
        icon: <FaMousePointer />,
        title: 'Clickable prototypes',
        text:
          'Interactive prototypes you can test, demo and share with stakeholders before any code is written.',
      },
      {
        icon: <FaEye />,
        title: 'Usability testing',
        text:
          'Review real user behaviour and refine the experience so the final app is intuitive and easy to use.',
      },
    ],
  },
  points: {
    title: 'Why good design matters',
    slogan: 'A user-friendly interface is one of the most important parts of any website or application.',
    items: [
      'Attract people to use your application more easily',
      'Convert first-time visitors into loyal customers',
      'Reduce confusion and support enquiries',
      'Strengthen your brand image with a consistent look',
      'Speed up development with clear design direction',
      'Make complex workflows feel simple and natural',
    ],
  },
  modules: {
    title: 'Design deliverables',
    slogan: 'Deliverables are tailored to your project stage — from concept to developer-ready screens.',
    items: [
      'User Personas',
      'User Flows',
      'Wireframes',
      'High-fidelity Mock-ups',
      'Clickable Prototypes',
      'Design System',
      'Icon Sets',
      'Accessibility Checks',
      'Developer Handoff',
    ],
  },
  process: {
    title: 'Our design process',
    slogan: 'A structured process that keeps you involved at every stage of the design journey.',
    items: [
      {
        title: 'Research',
        text: 'Understand your users, business goals and the problems the interface must solve.',
      },
      {
        title: 'Structure',
        text: 'Map information architecture, user flows and screen hierarchy.',
      },
      {
        title: 'Design',
        text: 'Create wireframes and high-fidelity UI in your brand\'s visual language.',
      },
      {
        title: 'Prototype',
        text: 'Link screens into clickable prototypes for testing and review.',
      },
      {
        title: 'Test',
        text: 'Validate usability with real users and refine the experience.',
      },
      {
        title: 'Handoff',
        text: 'Deliver organised design files and guidance so development builds it accurately.',
      },
    ],
  },
  directAnswers: [
    {
      q: 'What is included in a UI/UX design project?',
      a: 'Research, user flows, wireframes, high-fidelity screens, prototypes and developer handoff.',
    },
    {
      q: 'Who is it for?',
      a: 'Startups and businesses launching new apps or websites, or redesigning existing ones.',
    },
    {
      q: 'How does a project usually start?',
      a: 'Research and user mapping -> structure and wireframes -> visual design -> prototype and handoff.',
    },
  ],
  cta: {
    title: 'Want an interface your users will love?',
    text: 'Tell us about your product and users. We will design a user-friendly interface that reflects your brand and drives results.',
  },
};

export default function UIUXDesign() {
  return <ServicePage content={content} />;
}
