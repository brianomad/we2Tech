import ServicePage from '../../components/service-page';
import BannerImg from 'assets/we2Tech/mobileAppDevelopment.png';
import {
  FaMobileAlt,
  FaApple,
  FaAndroid,
  FaReact,
  FaPlug,
  FaStore,
} from 'react-icons/fa';

const content = {
  seo: {
    title: 'Mobile App Development Hong Kong | we2Tech',
    description:
      'Custom iOS, Android and cross-platform mobile app development in Hong Kong. React Native, Flutter, Swift, Kotlin — from MVP to launch and beyond.',
    keywords:
      'mobile app development Hong Kong, iOS development, Android development, React Native, Flutter, mobile application',
  },
  hero: {
    eyebrow: 'Mobile App Development',
    title: 'Mobile apps built for your users and your operations',
    slogan:
      'We design and build custom iOS, Android and cross-platform applications for customers, members, field teams and internal operations — from idea to app store launch and long-term support.',
    image: BannerImg,
    background: BannerImg,
    showBookButton: false,
  },
  features: {
    title: 'What we build',
    slogan: 'Every app is shaped around the workflow it must support, not just the screens it shows.',
    items: [
      {
        icon: <FaMobileAlt />,
        title: 'Custom mobile apps',
        text:
          'Bespoke iOS, Android and cross-platform applications for customers, members, staff and field teams.',
      },
      {
        icon: <FaApple />,
        title: 'Native iOS & Android',
        text:
          'Swift, Kotlin and native development for apps that need deep platform performance and device features.',
      },
      {
        icon: <FaReact />,
        title: 'Cross-platform apps',
        text:
          'React Native and Flutter builds that deliver one product across iOS and Android with a shared codebase.',
      },
      {
        icon: <FaPlug />,
        title: 'Integrations',
        text:
          'Connect your app with payments, maps, social login, CRM, backend systems and external APIs.',
      },
      {
        icon: <FaStore />,
        title: 'Launch & store release',
        text:
          'App store submission, release checks, analytics setup and monitoring so launch day goes smoothly.',
      },
      {
        icon: <FaAndroid />,
        title: 'Operational & IoT apps',
        text:
          'Attendance, booking, visitor flows, logistics and smart-device connected experiences for real operations.',
      },
    ],
  },
  points: {
    title: 'Why build with we2Tech',
    slogan: 'A well-built app becomes a measurable channel for your business.',
    items: [
      'Give customers and members a direct digital channel',
      'Streamline workflows that depend on manual coordination',
      'Launch new services without relying on email and spreadsheets',
      'Capture real-time data for reporting and decisions',
      'Connect the app to cloud systems, payments and other platforms',
      'Enhance brand image and customer stickiness',
    ],
  },
  modules: {
    title: 'Common modules',
    slogan: 'Reusable building blocks help shorten delivery time while keeping your system tailored to you.',
    items: [
      'Users',
      'Roles & Permissions',
      'Notifications',
      'Membership',
      'Booking',
      'Order & Payment',
      'Rewards & Points',
      'Content',
      'Admin Panel',
      'Reports & Logs',
      'Analytics',
      'Third-party APIs',
    ],
  },
  process: {
    title: 'Our development process',
    slogan: 'A clear delivery cycle keeps requirements, design, development, testing and launch connected.',
    items: [
      {
        title: 'Discover',
        text: 'Understand your business goals, users, workflows and technical constraints.',
      },
      {
        title: 'Define',
        text: 'Turn requirements into scope, user journeys, system logic and delivery milestones.',
      },
      {
        title: 'Design',
        text: 'Create UX flow, UI direction, wireframes and clickable mock-ups for your review.',
      },
      {
        title: 'Build',
        text: 'Develop the app, admin panel, APIs and integrations in structured iterations.',
      },
      {
        title: 'Test',
        text: 'Run QA, UAT, debugging, device checks and integration validation.',
      },
      {
        title: 'Launch',
        text: 'Prepare production deployment, store submission, analytics and monitoring.',
      },
      {
        title: 'Improve',
        text: 'Review real usage, fix issues, enhance features and plan the next phase.',
      },
    ],
  },
  directAnswers: [
    {
      q: 'What is included in a mobile app project?',
      a: 'Discovery, UI/UX design, development, testing, app store submission and post-launch support planning.',
    },
    {
      q: 'Who is it for?',
      a: 'Businesses that need customer apps, member portals, booking, payment, loyalty or operational mobile tools.',
    },
    {
      q: 'How does a project usually start?',
      a: 'Discovery and requirements mapping -> UX and system flow design -> development -> UAT, launch, analytics and support.',
    },
  ],
};

export default function MobileAppDevelopment() {
  return <ServicePage content={content} />;
}
