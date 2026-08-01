import ServicePage from '../../components/service-page';
import BannerImg from 'assets/we2Tech/website.png';
import {
  FaGlobe,
  FaShoppingCart,
  FaUserLock,
  FaTachometerAlt,
  FaCalendarAlt,
  FaWordpress,
} from 'react-icons/fa';

const content = {
  seo: {
    title: 'Web App Development Hong Kong | we2Tech',
    description:
      'Responsive website and web application development in Hong Kong. React, Next.js and WordPress — from corporate sites to portals, dashboards and eCommerce.',
    keywords:
      'web development Hong Kong, website development, Next.js, React, WordPress, web application, eCommerce',
    path: '/services/web-app-development',
  },
  hero: {
    eyebrow: 'Web App Development',
    title: 'Web platforms and portals built to keep your business running',
    slogan:
      'We design and build responsive websites, customer portals, admin dashboards, booking systems and eCommerce flows around real users and operational workflows.',
    image: BannerImg,
    background: BannerImg,
    showBookButton: false,
  },
  features: {
    title: 'What we build',
    slogan: 'From corporate websites to full operational platforms, we shape the product around the workflow it must support.',
    items: [
      {
        icon: <FaGlobe />,
        title: 'Corporate websites',
        text:
          'Fast, responsive marketing and company websites that build your brand and convert visitors into enquiries.',
      },
      {
        icon: <FaUserLock />,
        title: 'Customer portals',
        text:
          'Self-service login areas where customers track orders, manage bookings, view records and update profiles.',
      },
      {
        icon: <FaShoppingCart />,
        title: 'eCommerce & ordering',
        text:
          'Online stores, ordering flows, payments, membership and rewards that make buying simple for your customers.',
      },
      {
        icon: <FaTachometerAlt />,
        title: 'Admin dashboards',
        text:
          'Internal panels for managing users, content, orders, reports and daily operations in one place.',
      },
      {
        icon: <FaCalendarAlt />,
        title: 'Booking & content systems',
        text:
          'Facility booking, appointments, event RSVP and content management workflows connected to your operations.',
      },
      {
        icon: <FaWordpress />,
        title: 'WordPress & CMS builds',
        text:
          'WordPress and headless CMS websites that your team can update easily without touching code.',
      },
    ],
  },
  points: {
    title: 'Why build a web platform',
    slogan: 'A well-built website or portal becomes a real channel for service delivery and growth.',
    items: [
      'Give customers a direct digital channel to your business',
      'Replace email and spreadsheet processes with connected workflows',
      'Enhance brand image and customer stickiness',
      'Launch new services faster without manual coordination',
      'Capture data for reporting, decisions and future automation',
      'Connect the platform to payments, CRM and third-party systems',
    ],
  },
  modules: {
    title: 'Common modules',
    slogan: 'Reusable building blocks speed up delivery while keeping the final system tailored to you.',
    items: [
      'Users',
      'Roles & Permissions',
      'Notifications',
      'Product Catalogue',
      'Order & Payment',
      'Booking',
      'Membership',
      'Content / CMS',
      'Reports & Logs',
      'SEO',
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
        text: 'Develop the frontend, backend, admin panel, APIs and integrations in iterations.',
      },
      {
        title: 'Test',
        text: 'Run QA, UAT, debugging, browser checks and integration validation.',
      },
      {
        title: 'Launch',
        text: 'Prepare production deployment, domains, analytics and monitoring.',
      },
      {
        title: 'Improve',
        text: 'Review real usage, fix issues, enhance features and plan the next phase.',
      },
    ],
  },
  directAnswers: [
    {
      q: 'What is included in a web project?',
      a: 'Discovery, UI/UX design, responsive development, backend and admin panel, testing, deployment and support planning.',
    },
    {
      q: 'Who is it for?',
      a: 'Businesses that need corporate websites, customer portals, booking, eCommerce, or internal web tools.',
    },
    {
      q: 'How does a project usually start?',
      a: 'Discovery and requirements mapping -> design -> development -> UAT, launch, analytics and support.',
    },
  ],
  cta: {
    title: 'Need a website or portal that actually works for you?',
    text: 'Tell us about your business, users and goals. We will define a practical web platform your team can run with confidence.',
  },
};

export default function WebAppDevelopment() {
  return <ServicePage content={content} />;
}
