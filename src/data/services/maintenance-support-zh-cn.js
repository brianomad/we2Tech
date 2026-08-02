import {
  FaBug,
  FaHeartbeat,
  FaShieldAlt,
  FaDatabase,
  FaRocket,
  FaFileAlt,
} from 'react-icons/fa';
import BannerImg from 'assets/we2Tech/maintenance.png';

const content = {
  seo: {
    title: '香港应用程式维护与支援 | we2Tech',
    description:
      '香港应用程式持续维护与支援。错误修正、监控、安全修补、备份、升级及每月服务报告。',
    keywords:
      '香港应用程式维护、应用程式支援、错误修正、伺服器维护、监控、SLA',
    path: '/services/maintenance-support',
  },
  hero: {
    eyebrow: '维护与支援',
    title: '让您的应用程式保持监控、维护，并准备迎接未来',
    slogan:
      '我们负责托管与维护您的应用程式、排解突发问题，并随您的需求增长而升级系统——即使在上线很久之后。',
    image: BannerImg,
    background: BannerImg,
    showBookButton: false,
  },
  features: {
    title: '我们支援甚么',
    slogan: '清晰的营运节奏，让您的系统在上线后保持健康。',
    items: [
      {
        icon: <FaBug />,
        title: '错误修正与排解疑难',
        text: '透过单一清晰渠道报告问题，我们会快速优先处理、修正并验证。',
      },
      {
        icon: <FaHeartbeat />,
        title: '监控与正常运作',
        text: '我们监察您的应用程式、伺服器与整合，在用户察觉前及早发现问题。',
      },
      {
        icon: <FaShieldAlt />,
        title: '安全修补与更新',
        text: '我们套用安全更新与依赖升级，让您的系统保持受保护。',
      },
      {
        icon: <FaDatabase />,
        title: '备份管理',
        text: '备份按时间表进行、测试并复原，确保您的数据随时可以恢复。',
      },
      {
        icon: <FaRocket />,
        title: '升级与增强',
        text: '即使一切顺利，我们也会按您的新需求升级并扩展应用程式。',
      },
      {
        icon: <FaFileAlt />,
        title: '每月服务报告',
        text: '清晰报告正常运作时间、已解决问题、已完成的维护及下一步应改善之处。',
      },
    ],
  },
  points: {
    title: '为甚么持续支援如此重要',
    slogan: '支援可防止缓慢退化——小问题、无人跟进的警示与不明确的下一步。',
    items: [
      '以清晰的解决路径更快处理问题',
      '透过从不遗忘的监控、备份与更新降低营运风险',
      '以可预测的发布取代紧急变更周期',
      '基于真实使用与支援模式持续改善',
      '安心知道您的系统掌握在专家手中',
      '一个随您成长而保持安全、快速与可靠的应用程式',
    ],
  },
  modules: {
    title: '常用支援范围',
    slogan: '支援方案按您系统的风险与重要性度身订造。',
    items: [
      '问题分流',
      '错误修正',
      '正常运作检查',
      '备份检视',
      '安全修补',
      '依赖更新',
      '内容更新',
      '监控与警示',
      '发布支援',
      '每月报告',
      'SLA 规划',
      '功能升级',
    ],
  },
  process: {
    title: '我们如何接管支援',
    slogan: '在接受支援拥有权之前，我们会先清晰了解现有情况与重要事项。',
    items: [
      {
        title: '检视',
        text: '审核程式码、托管、存取、整合与目前的支援缺口。',
      },
      {
        title: '定义',
        text: '商定受支援范围、回应预期、渠道与除外项目。',
      },
      {
        title: '稳定',
        text: '设定警示、纪录、备份、操作手册与定期检查。',
      },
      {
        title: '营运',
        text: '处理问题、报告服务健康并规划受控发布。',
      },
    ],
  },
  directAnswers: [
    {
      q: '维护方案包含甚么？',
      a: '监控、错误修正、安全更新、备份管理、支援与每月报告。',
    },
    {
      q: '适合谁使用？',
      a: '拥有已上线应用程式，需要可靠的上线后照顾与改善的企业。',
    },
    {
      q: '项目通常如何开始？',
      a: '系统与拥有权检视 → 范围与 SLA 商定 → 监控设定 → 持续营运。',
    },
  ],
  cta: {
    title: '需要可靠的上线后支援？',
    text: '告诉我们您需要支援的系统，以及一次故障会令您损失多少。我们会制定合适的支援计划。',
  },
};

export default content;
