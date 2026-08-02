import {
  FaCloudUploadAlt,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaSyncAlt,
  FaChartLine,
} from 'react-icons/fa';
import BannerImg from 'assets/we2Tech/serverDeployment.png';

const content = {
  seo: {
    title: '香港伺服器部署与云端托管 | we2Tech',
    description:
      '香港云端伺服器部署与托管。CI/CD 流程、网域与 SSL、数据库与储存设定、监控、备份及安全强化。',
    keywords:
      '香港伺服器部署、云端托管、云端伺服器、AWS、CI/CD、SSL、数据库、部署',
    path: '/services/server-deployment',
  },
  hero: {
    eyebrow: '伺服器部署与云端托管',
    title: '您的业务可以信赖的云端基建',
    slogan:
      '我们按照您的需要部署云端系统并落实云端伺服器——顺应全球遥距工作趋势，并将数码文化融入您的工作环境。',
    image: BannerImg,
    background: BannerImg,
    showBookButton: false,
  },
  features: {
    title: '我们部署甚么',
    slogan: '每个系统都会被托管、保护及监控，保持快速、安全与可用。',
    items: [
      {
        icon: <FaCloudUploadAlt />,
        title: '云端托管设定',
        text: '按您的预算与流量，选择并配置合适的云端平台（AWS、GCP、Azure、阿里云或 DigitalOcean）。',
      },
      {
        icon: <FaSyncAlt />,
        title: '部署流程',
        text: '设定 CI/CD，让程式码变更自动到达生产环境，附设发布检查与简易回滚。',
      },
      {
        icon: <FaServer />,
        title: '网域、SSL 与网络',
        text: '配置网域、HTTPS 凭证、电邮、DNS 与网络规则，确保您的网站安全且可达。',
      },
      {
        icon: <FaDatabase />,
        title: '数据库与储存',
        text: '按您的数据与增长规模，设计并部署数据库、档案储存与备份。',
      },
      {
        icon: <FaShieldAlt />,
        title: '安全强化',
        text: '锁定存取、权限、密钥与防火墙，让系统从第一天起已受保护。',
      },
      {
        icon: <FaChartLine />,
        title: '监控与警示',
        text: '设定正常运作检查、纪录、警示与备份时间表，在用户察觉前及早发现问题。',
      },
    ],
  },
  points: {
    title: '为甚么正确部署如此重要',
    slogan: '可靠的伺服器基础，令您的应用程式保持快速、安全与可用。',
    items: [
      '避免繁忙时段的停机与缓慢',
      '从一开始便清楚掌握存取、安全、备份与复原',
      '随用户与数据增长而扩充托管',
      '以规模恰当的基建控制云端成本',
      '以可靠的云端存取支援遥距工作',
      '为报告与日后自动化建立稳定基础',
    ],
  },
  modules: {
    title: '常用部署组件',
    slogan: '我们在您的系统上线前配置的构建模组。',
    items: [
      '云端托管',
      '网域与 SSL',
      '后端服务',
      '数据库设定',
      '档案储存',
      '备份时间表',
      'CI/CD 流程',
      '监控与纪录',
      '安全控制',
      '灾难复原',
      '成本治理',
      '正常运作警示',
    ],
  },
  process: {
    title: '我们的部署流程',
    slogan: '我们在上线前，令基建决策透明且受控。',
    items: [
      {
        title: '评估',
        text: '检视您目前的设定、流量、安全需要与营运限制。',
      },
      {
        title: '设计',
        text: '界定目标云端架构、环境与部署方式。',
      },
      {
        title: '部署',
        text: '设定托管、数据库、网域、流程、安全与监控。',
      },
      {
        title: '验证',
        text: '测试部署、存取、整合、备份与复原路径。',
      },
      {
        title: '营运',
        text: '监控正常运作、检视成本、套用更新并保持系统健康。',
      },
    ],
  },
  directAnswers: [
    {
      q: '部署项目包含甚么？',
      a: '云端设定、网域与 SSL、数据库、CI/CD、安全强化、监控与备份配置。',
    },
    {
      q: '适合谁使用？',
      a: '推出新系统、迁移现有系统，或需要更可靠云端托管的企业。',
    },
    {
      q: '项目通常如何开始？',
      a: '检视目前设定 → 设计目标架构 → 部署 → 验证与监控。',
    },
  ],
  cta: {
    title: '需要为您的应用程式找一个可靠的家？',
    text: '告诉我们您的系统与流量。我们会部署并配置一个您的团队能够安心营运的云端基础。',
  },
};

export default content;
