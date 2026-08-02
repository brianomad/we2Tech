import {
  FaGlobe,
  FaShoppingCart,
  FaUserLock,
  FaTachometerAlt,
  FaCalendarAlt,
  FaWordpress,
} from 'react-icons/fa';
import BannerImg from 'assets/we2Tech/website.png';

const content = {
  seo: {
    title: '香港网页应用程式开发 | we2Tech',
    description:
      '香港响应式网站及网页应用程式开发。React、Next.js 与 WordPress——由企业网站到入口、仪表板与电子商务。',
    keywords:
      '香港网页开发、网站开发、Next.js、React、WordPress、网页应用程式、电子商务',
    path: '/services/web-app-development',
  },
  hero: {
    eyebrow: '网页应用程式开发',
    title: '让业务持续运作的网页平台与入口',
    slogan:
      '我们围绕真实用户与营运工作流程，设计并开发响应式网站、客户入口、管理仪表板、预约系统及电子商务流程。',
    image: BannerImg,
    background: BannerImg,
    showBookButton: false,
  },
  features: {
    title: '我们开发甚么',
    slogan: '由企业网站到完整的营运平台，我们以它需要支援的工作流程为核心来塑造产品。',
    items: [
      {
        icon: <FaGlobe />,
        title: '企业网站',
        text: '快速、响应式的市场推广及公司网站，建立您的品牌，并将访客转化为查询。',
      },
      {
        icon: <FaUserLock />,
        title: '客户入口',
        text: '自助登入区域，客户可在此追踪订单、管理预约、查阅纪录及更新个人资料。',
      },
      {
        icon: <FaShoppingCart />,
        title: '电子商务与落单',
        text: '网上商店、落单流程、付款、会员与奖赏，让您的客户轻松购物。',
      },
      {
        icon: <FaTachometerAlt />,
        title: '管理仪表板',
        text: '一站式内部后台，统一管理用户、内容、订单、报告与日常营运。',
      },
      {
        icon: <FaCalendarAlt />,
        title: '预约与内容系统',
        text: '设施预约、预约、活动报名及内容管理工作流程，与您的营运相连。',
      },
      {
        icon: <FaWordpress />,
        title: 'WordPress 及 CMS 开发',
        text: '您的团队毋须触碰程式码即可轻松更新的 WordPress 及无头 CMS 网站。',
      },
    ],
  },
  points: {
    title: '为甚么要建立网页平台',
    slogan: '一个优质的网站或入口，会成为服务交付与增长的真实渠道。',
    items: [
      '为客户提供直达您业务的数码渠道',
      '以互联的工作流程取代电邮与试算表程序',
      '提升品牌形象与客户黏性',
      '毋须人手协调即可更快推出新服务',
      '收集数据用于报告、决策及日后自动化',
      '将平台连接付款、CRM 及第三方系统',
    ],
  },
  modules: {
    title: '常用模组',
    slogan: '可重用的构建模组加快交付，同时保持最终系统按您所需度身订造。',
    items: [
      '用户',
      '角色与权限',
      '通知',
      '产品目录',
      '订单与付款',
      '预约',
      '会员制度',
      '内容／CMS',
      '报告与纪录',
      'SEO',
      '分析',
      '第三方 API',
    ],
  },
  process: {
    title: '我们的开发流程',
    slogan: '清晰的交付周期令需求、设计、开发、测试与上线环环相扣。',
    items: [
      {
        title: '探索',
        text: '了解您的业务目标、用户、工作流程与技术限制。',
      },
      {
        title: '定义',
        text: '将需求转化为范围、用户旅程、系统逻辑与交付里程碑。',
      },
      {
        title: '设计',
        text: '建立 UX 流程、UI 方向、线框图及可点击原型供您检视。',
      },
      {
        title: '开发',
        text: '以迭代方式开发前端、后端、管理后台、API 及整合。',
      },
      {
        title: '测试',
        text: '执行 QA、UAT、除错、浏览器检查及整合验证。',
      },
      {
        title: '上线',
        text: '准备生产环境部署、网域、分析与监控。',
      },
      {
        title: '改善',
        text: '检视实际使用情况、修正问题、增强功能并规划下一阶段。',
      },
    ],
  },
  directAnswers: [
    {
      q: '网页项目包含甚么？',
      a: '需求探索、UI/UX 设计、响应式开发、后端与管理后台、测试、部署及支援规划。',
    },
    {
      q: '适合谁使用？',
      a: '需要企业网站、客户入口、预约、电子商务或内部网页工具的企业。',
    },
    {
      q: '项目通常如何开始？',
      a: '需求探索与整理 → 设计 → 开发 → UAT、上线、分析与支援。',
    },
  ],
  cta: {
    title: '需要一个真正为您而设的网站或入口？',
    text: '告诉我们您的业务、用户与目标。我们会定义一个您的团队能够安心营运的实用网页平台。',
  },
};

export default content;
