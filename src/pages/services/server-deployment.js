import ServicePage from '../../components/service-page';
import BannerImg from 'assets/we2Tech/serverDeployment.png';
import {
  FaCloudUploadAlt,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaSyncAlt,
  FaChartLine,
} from 'react-icons/fa';

const content = {
  seo: {
    title: 'Server Deployment & Cloud Hosting Hong Kong | we2Tech',
    description:
      'Cloud server deployment and hosting in Hong Kong. CI/CD pipelines, domains and SSL, database and storage setup, monitoring, backups and security hardening.',
    keywords:
      'server deployment Hong Kong, cloud hosting, cloud server, AWS, CI/CD, SSL, database, deployment',
    path: '/services/server-deployment',
  },
  hero: {
    eyebrow: 'Server Deployment & Cloud Hosting',
    title: 'Cloud infrastructure your business can rely on',
    slogan:
      'We deploy cloud-based systems and implement cloud servers based on your needs — adopting the worldwide trend of remote working and infusing digital culture into your work environment.',
    image: BannerImg,
    background: BannerImg,
    showBookButton: false,
  },
  features: {
    title: 'What we deploy',
    slogan: 'Every system is hosted, secured and monitored so it stays fast, safe and available.',
    items: [
      {
        icon: <FaCloudUploadAlt />,
        title: 'Cloud hosting setup',
        text:
          'Select and configure the right cloud platform (AWS, GCP, Azure, Alibaba Cloud or DigitalOcean) for your budget and traffic.',
      },
      {
        icon: <FaSyncAlt />,
        title: 'Deployment pipelines',
        text:
          'Set up CI/CD so code changes reach production automatically with release checks and easy rollback.',
      },
      {
        icon: <FaServer />,
        title: 'Domains, SSL & networking',
        text:
          'Configure domains, HTTPS certificates, email, DNS and network rules so your site is secure and reachable.',
      },
      {
        icon: <FaDatabase />,
        title: 'Database & storage',
        text:
          'Design and deploy databases, file storage and backups sized for your data and growth.',
      },
      {
        icon: <FaShieldAlt />,
        title: 'Security hardening',
        text:
          'Lock down access, permissions, secrets and firewalls so your systems are protected from day one.',
      },
      {
        icon: <FaChartLine />,
        title: 'Monitoring & alerts',
        text:
          'Set up uptime checks, logs, alerts and backup schedules so issues are caught before users notice.',
      },
    ],
  },
  points: {
    title: 'Why proper deployment matters',
    slogan: 'A reliable server foundation keeps your application fast, secure and available.',
    items: [
      'Avoid outages and slowdowns during busy periods',
      'Keep access, security, backup and recovery clear from the start',
      'Scale hosting as your users and data grow',
      'Control cloud costs with the right sized infrastructure',
      'Support remote working with reliable cloud access',
      'Create a stable foundation for reporting and future automation',
    ],
  },
  modules: {
    title: 'Common deployment components',
    slogan: 'The building blocks we configure before your system goes live.',
    items: [
      'Cloud Hosting',
      'Domains & SSL',
      'Backend Services',
      'Database Setup',
      'File Storage',
      'Backup Schedule',
      'CI/CD Pipeline',
      'Monitoring & Logs',
      'Security Controls',
      'Disaster Recovery',
      'Cost Governance',
      'Uptime Alerts',
    ],
  },
  process: {
    title: 'Our deployment process',
    slogan: 'We make infrastructure decisions visible and controlled before your launch.',
    items: [
      {
        title: 'Assess',
        text: 'Review your current setup, traffic, security needs and operational constraints.',
      },
      {
        title: 'Design',
        text: 'Define the target cloud architecture, environments and deployment approach.',
      },
      {
        title: 'Deploy',
        text: 'Set up hosting, databases, domains, pipelines, security and monitoring.',
      },
      {
        title: 'Validate',
        text: 'Test deployment, access, integration, backup and restore paths.',
      },
      {
        title: 'Operate',
        text: 'Monitor uptime, review costs, apply updates and keep the system healthy.',
      },
    ],
  },
  directAnswers: [
    {
      q: 'What is included in a deployment project?',
      a: 'Cloud setup, domains and SSL, databases, CI/CD, security hardening, monitoring and backup configuration.',
    },
    {
      q: 'Who is it for?',
      a: 'Businesses launching new systems, migrating existing systems, or needing more reliable cloud hosting.',
    },
    {
      q: 'How does a project usually start?',
      a: 'Current setup review -> target architecture design -> deployment -> validation and monitoring.',
    },
  ],
  cta: {
    title: 'Need a reliable home for your application?',
    text: 'Tell us about your system and traffic. We will deploy and configure a cloud foundation your team can operate with confidence.',
  },
};

export default function ServerDeployment() {
  return <ServicePage content={content} />;
}
