import ServicePage from '../../components/service-page';
import BannerImg from 'assets/we2Tech/maintenance.png';
import {
  FaBug,
  FaHeartbeat,
  FaShieldAlt,
  FaDatabase,
  FaRocket,
  FaFileAlt,
} from 'react-icons/fa';

const content = {
  seo: {
    title: 'Application Maintenance & Support Hong Kong | we2Tech',
    description:
      'Ongoing maintenance and support for applications in Hong Kong. Bug fixing, monitoring, security patches, backups, upgrades and monthly service reports.',
    keywords:
      'application maintenance Hong Kong, app support, bug fixing, server maintenance, monitoring, SLA',
  },
  hero: {
    eyebrow: 'Maintenance & Support',
    title: 'Keep your application monitored, maintained and ready for what comes next',
    slogan:
      'We host and maintain your application, troubleshoot unexpected issues, and upgrade the system as your requirements grow — long after launch.',
    image: BannerImg,
  },
  features: {
    title: 'What we support',
    slogan: 'A clear operating rhythm that keeps your system healthy after launch.',
    items: [
      {
        icon: <FaBug />,
        title: 'Bug fixing & troubleshooting',
        text:
          'Report issues through one clear channel and we prioritise, fix and verify them quickly.',
      },
      {
        icon: <FaHeartbeat />,
        title: 'Monitoring & uptime',
        text:
          'We watch your application, servers and integrations so problems are caught before users notice.',
      },
      {
        icon: <FaShieldAlt />,
        title: 'Security patches & updates',
        text:
          'We apply security updates and dependency upgrades to keep your system protected.',
      },
      {
        icon: <FaDatabase />,
        title: 'Backup management',
        text:
          'Backups are scheduled, tested and restored on schedule so your data is always recoverable.',
      },
      {
        icon: <FaRocket />,
        title: 'Upgrades & enhancements',
        text:
          'Even when things are going smoothly, we upgrade and extend the application to your new requirements.',
      },
      {
        icon: <FaFileAlt />,
        title: 'Monthly service reports',
        text:
          'Clear reports on uptime, issues resolved, maintenance done and what should improve next.',
      },
    ],
  },
  points: {
    title: 'Why ongoing support matters',
    slogan: 'Support prevents slow decline — small issues, unowned alerts and unclear next steps.',
    items: [
      'Faster issue handling with a clear route to resolve problems',
      'Lower operating risk with monitoring, backups and updates never forgotten',
      'More predictable releases instead of emergency change cycles',
      'Continuous improvement based on real usage and support patterns',
      'Peace of mind that your system is in expert hands',
      'An application that stays secure, fast and reliable as you grow',
    ],
  },
  modules: {
    title: 'Common support scope',
    slogan: 'Support packages are shaped around the risk and importance of your system.',
    items: [
      'Issue Triage',
      'Bug Fixing',
      'Uptime Checks',
      'Backup Review',
      'Security Patching',
      'Dependency Updates',
      'Content Updates',
      'Monitoring & Alerts',
      'Release Support',
      'Monthly Report',
      'SLA Planning',
      'Feature Upgrades',
    ],
  },
  process: {
    title: 'How we take over support',
    slogan: 'Before accepting support ownership, we build a clear picture of what exists and what matters.',
    items: [
      {
        title: 'Review',
        text: 'Audit the codebase, hosting, access, integrations and current support gaps.',
      },
      {
        title: 'Define',
        text: 'Agree the supported scope, response expectations, channels and exclusions.',
      },
      {
        title: 'Stabilise',
        text: 'Set up alerts, logs, backups, runbooks and recurring checks.',
      },
      {
        title: 'Operate',
        text: 'Handle issues, report service health and plan controlled releases.',
      },
    ],
  },
  directAnswers: [
    {
      q: 'What is included in a maintenance package?',
      a: 'Monitoring, bug fixing, security updates, backup management, support and monthly reports.',
    },
    {
      q: 'Who is it for?',
      a: 'Businesses with live applications that need reliable post-launch care and improvement.',
    },
    {
      q: 'How does a project usually start?',
      a: 'System and ownership review -> scope and SLA agreement -> monitoring setup -> ongoing operation.',
    },
  ],
  faq: [
    {
      q: 'Do you only support apps you built?',
      a: 'No. We also take over inherited systems that need a clearer maintenance routine.',
    },
    {
      q: 'How fast will you respond to issues?',
      a: 'Response time depends on the SLA you choose. We agree severity rules and expectations up front.',
    },
    {
      q: 'Can you upgrade our application?',
      a: 'Yes. We plan enhancements in controlled releases based on real usage and business priorities.',
    },
    {
      q: 'How do we report an issue?',
      a: 'Through WhatsApp, email or a support channel we agree — whichever is easiest for your team.',
    },
  ],
  cta: {
    title: 'Need reliable post-launch support?',
    text: 'Tell us what system you need supported and what a failure would cost you. We will shape a support plan that fits.',
  },
};

export default function MaintenanceSupport() {
  return <ServicePage content={content} />;
}
