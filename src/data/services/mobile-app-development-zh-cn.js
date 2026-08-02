import {
  FaMobileAlt,
  FaApple,
  FaAndroid,
  FaReact,
  FaPlug,
  FaStore,
} from 'react-icons/fa';
import BannerImg from 'assets/we2Tech/mobileAppDevelopment.png';

const content = {
  seo: {
    title: '香港手机应用程式开发 | we2Tech',
    description:
      '香港自订 iOS、Android 及跨平台应用程式开发。React Native、Flutter、Swift、Kotlin——由 MVP 到正式上线及之后。',
    keywords:
      '香港手机应用程式开发、iOS 开发、Android 开发、React Native、Flutter、手机应用',
    path: '/services/mobile-app-development',
  },
  hero: {
    eyebrow: '手机应用程式开发',
    title: '为您的用户与营运而建的手机应用程式',
    slogan:
      '我们为客户、会员、前线团队及内部营运，设计并开发自订的 iOS、Android 及跨平台应用程式——由构思到应用商店上线，以及长期的支援。',
    image: BannerImg,
    background: BannerImg,
    showBookButton: false,
  },
  features: {
    title: '我们开发甚么',
    slogan: '每个应用程式都围绕它需要支援的工作流程来设计，而不只是它所显示的画面。',
    items: [
      {
        icon: <FaMobileAlt />,
        title: '自订手机应用程式',
        text: '专为客户、会员、员工及前线团队而设的原创 iOS、Android 及跨平台应用程式。',
      },
      {
        icon: <FaApple />,
        title: '原生 iOS 及 Android',
        text: 'Swift、Kotlin 与原生开发，适合需要深入平台性能及装置功能的应用程式。',
      },
      {
        icon: <FaReact />,
        title: '跨平台应用程式',
        text: '以 React Native 及 Flutter 开发，用同一套程式码在 iOS 与 Android 交付同一个产品。',
      },
      {
        icon: <FaPlug />,
        title: '系统整合',
        text: '将您的应用程式连接付款、地图、社交登入、CRM、后端系统及外部 API。',
      },
      {
        icon: <FaStore />,
        title: '上线及商店发布',
        text: '应用商店提交、发布检查、分析设定与监控，确保上线当日顺利无阻。',
      },
      {
        icon: <FaAndroid />,
        title: '营运及 IoT 应用',
        text: '为真实营运打造出席、预约、访客流程、物流及智能装置连接体验。',
      },
    ],
  },
  points: {
    title: '为甚么选择 we2Tech 开发',
    slogan: '一个优质的应用程式会成为您业务可量度的渠道。',
    items: [
      '为客户及会员提供直接的数码渠道',
      '简化依赖人手协调的工作流程',
      '毋须依靠电邮与试算表即可推出新服务',
      '收集实时数据用于报告与决策',
      '将应用程式连接云端系统、付款及其他平台',
      '提升品牌形象与客户黏性',
    ],
  },
  modules: {
    title: '常用模组',
    slogan: '可重用的构建模组有助缩短交付时间，同时保持系统按您的需要度身订造。',
    items: [
      '用户',
      '角色与权限',
      '通知',
      '会员制度',
      '预约',
      '订单与付款',
      '奖赏与积分',
      '内容',
      '管理后台',
      '报告与纪录',
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
        text: '以有条理的迭代方式开发应用程式、管理后台、API 及整合。',
      },
      {
        title: '测试',
        text: '执行 QA、UAT、除错、装置检查及整合验证。',
      },
      {
        title: '上线',
        text: '准备生产环境部署、商店提交、分析与监控。',
      },
      {
        title: '改善',
        text: '检视实际使用情况、修正问题、增强功能并规划下一阶段。',
      },
    ],
  },
  directAnswers: [
    {
      q: '手机应用程式项目包含甚么？',
      a: '需求探索、UI/UX 设计、开发、测试、应用商店提交，以及上线后支援规划。',
    },
    {
      q: '适合谁使用？',
      a: '需要客户应用程式、会员入口、预约、付款、忠诚计划或营运流动工具的企业。',
    },
    {
      q: '项目通常如何开始？',
      a: '需求探索与整理 → UX 及系统流程设计 → 开发 → UAT、上线、分析与支援。',
    },
  ],
  cta: {
    title: '有手机应用程式的想法？让我们一起开发吧。',
    text: '告诉我们您的应用程式、用户与业务阶段。我们会协助界定最有用的第一版，以及它应该成长成的系统。',
  },
};

export default content;
