import React from 'react';

export const LOCALES = [
  { code: 'en', label: 'English', short: 'EN', htmlLang: 'en-HK', ogLocale: 'en_HK', prefix: '' },
  { code: 'zh', label: '繁體中文', short: '繁', htmlLang: 'zh-Hant-HK', ogLocale: 'zh_HK', prefix: '/zh' },
  { code: 'zh-cn', label: '简体中文', short: '简', htmlLang: 'zh-Hans-CN', ogLocale: 'zh_CN', prefix: '/zh-cn' },
];

const en = {
  nav: {
    home: 'HOME',
    services: 'SERVICES',
    cases: 'CASES',
    insights: 'INSIGHTS',
    faq: 'FAQ',
    contact: 'CONTACT',
  },
  serviceNames: [
    'Mobile App Development',
    'Web App Development',
    'UI/UX Design',
    'Server Deployment',
    'Maintenance & Support',
  ],
  cta: {
    getQuote: 'Get a Quote',
    bookConsultation: 'Book a Consultation',
    chatWhatsapp: 'Chat on WhatsApp',
    bookFreeConsultation: 'Book a free consultation',
    viewCaseStudy: 'View case study',
    viewAllCaseStudies: 'View all case studies',
  },
  home: {
    eyebrow: 'Hong Kong Software Development',
    title: 'We Build Mobile & Web Applications That Grow Your Business',
    description:
      'we2Tech is a Hong Kong-based development team crafting user-friendly mobile apps, websites, UI/UX design and cloud systems — from first idea to launch and beyond.',
  },
  stats: {
    years: 'Years in Business',
    appExp: 'Years App Development Experience',
    projects: 'Projects Delivered',
    support: 'Post-Launch Support',
  },
  techStack: {
    title: 'Technologies We Work With',
    slogan: 'Modern, proven tools to build reliable products',
    categories: [
      'Mobile Development',
      'Web Development',
      'Backend & Databases',
      'Cloud & DevOps',
      'AI & Machine Learning',
      'Blockchain & Web3',
      'E-commerce & Marketing',
      'Tools & Integrations',
    ],
  },
  instagram: {
    eyebrow: 'Instagram',
    title: 'Follow Us on Instagram',
    slogan: 'Daily tech insights, project builds and behind-the-scenes from the we2Tech team',
    follow: 'Follow @we2tech',
  },
  location: {
    eyebrow: 'Visit Us',
    title: 'Find Our Studio in Hong Kong',
    slogan:
      'Located in Cheung Sha Wan, a short walk from the MTR — drop by for a coffee and a chat about your project.',
    addressLabel: 'Address',
    addressLine1: 'West Wing 2/F, 822 Lai Chi Kok Road',
    addressLine2: 'Cheung Sha Wan, Kowloon, Hong Kong',
    whatsapp: 'WhatsApp / Phone',
    email: 'Email',
    getDirections: 'Get Directions',
  },
  footer: {
    blurb:
      'Hong Kong-based development team building mobile apps, websites, UI/UX design and cloud systems that help businesses grow.',
    services: 'Services',
    contactUs: 'Contact Us',
    address: 'Address',
    email: 'Email',
    telephone: 'Telephone Number',
    copyright: 'Copyright © {year} we2Tech Ltd. All rights reserved.',
  },
  faq: {
    title: 'Frequently Asked Questions',
    slogan: 'Answers to the questions we hear most often',
  },
  cases: {
    eyebrow: 'Use Case',
    title: 'Demo Cases',
    slogan:
      'Browse client work by service category and see how technology decisions connect with business stage, operations, data and customer experience.',
    casesLabel: 'Cases',
    categoriesLabel: 'Categories',
    all: 'All',
    prev: 'Prev',
    next: 'Next',
    pageOf: 'Page {page} of {total}',
    photo: 'Photo for reference',
    caseWord: 'case',
    techUsed: 'Technology used',
    discuss: 'Discuss a similar project',
    ctaTitle: 'Want results like these for your business?',
    ctaText:
      'Book a free consultation and we\u2019ll walk you through how your project would be scoped, built and supported.',
  },
  contact: {
    eyebrow: 'Book a Consultation',
    title: 'Tell us what system, workflow or operating issue you want to improve',
    slogan:
      'We will review the current stage, technical direction, risks, timeline and practical next step — free of charge.',
    infoTitle: 'Talk to your technology partner',
    infoText:
      'Share the business stage, pressure and outcome you are aiming for. We will consider the technology need together with customer experience, market context and operations.',
    howWeWork: 'How we work',
    steps: [
      { title: 'Share context', text: 'Tell us about your business goal, current workflow and target users.' },
      { title: 'Identify constraints', text: 'We review the business and technical limits that shape the project.' },
      { title: 'Discuss feasible scope', text: 'We propose a practical scope, approach and phasing for the build.' },
      { title: 'Define the next step', text: 'You leave with a clear recommendation and a decision path.' },
    ],
    namePh: 'Name',
    companyPh: 'Company (optional)',
    emailPh: 'Email',
    phonePh: 'Phone / WhatsApp (optional)',
    messagePh:
      'Tell us about your project — goals, current systems, timeline, and what you want to improve.',
    projectType: 'Project type',
    projectTypes: [
      'Mobile App',
      'Web App',
      'UI/UX Design',
      'Server Deployment',
      'Maintenance',
      'MVP / POC',
      'Other',
    ],
    errName: 'Name is required',
    errEmail: 'Email is required',
    errEmailInvalid: 'Invalid email format',
    errMessage: 'Message is required',
    success: 'Thank you! We\u2019ll get back to you within one business day.',
    submitting: 'Submitting...',
    send: 'Send Enquiry',
    failed: 'Submission failed. Please try again or email us directly.',
    storiesTitle: 'Demo cases',
    viewCase: 'View case study',
    viewAll: 'View all case studies',
  },
  blog: {
    eyebrow: 'Insights',
    title: 'Articles & Guides',
    slogan: 'Practical advice on apps, websites and technology strategy for Hong Kong businesses',
    readArticle: 'Read article \u2192',
  },
  post: {
    similarTitle: 'Have a similar project in mind?',
    similarText:
      'Talk to your technology partner in Hong Kong. Share your business goal and we will review your project — free of charge.',
    bookFree: 'Book a Free Consultation',
  },
  switcher: {
    label: 'Language',
  },
  service: {
    bookConsultation: 'Book a Consultation',
    chatWhatsapp: 'Chat on WhatsApp',
    directAnswersEyebrow: 'Direct Answers',
    directAnswersTitle: 'Quick answers before you ask',
    faqEyebrow: 'FAQ',
    faqTitle: 'Frequently asked questions',
    homeLabel: 'Home',
    servicesLabel: 'Services',
  },
  seo: {
    home: {
      title: 'we2Tech - Mobile & Website Application Development Hong Kong',
      desc: 'we2Tech provides professional mobile app development, website development, UI/UX design, and server deployment services in Hong Kong.',
    },
    cases: {
      title: 'Demo Cases | we2Tech',
      desc: 'See how we2Tech helps Hong Kong businesses build mobile apps, websites, cloud systems and more — browse client work by service category.',
    },
    contact: {
      title: 'Contact Us | we2Tech',
      desc: 'Talk to your technology partner in Hong Kong. Share your business goal, current workflow and constraints — we review your project stage, risks and next step free of charge.',
    },
    faq: {
      title: 'FAQ | we2Tech',
      desc: "Frequently asked questions about we2Tech's mobile app, web development, UI/UX design, server deployment and maintenance support services in Hong Kong.",
    },
    blog: {
      title: 'Insights & Blog | we2Tech',
      desc: 'Practical guides on app development, web development and technology strategy in Hong Kong — app costs, framework comparisons and how to build better products.',
    },
  },
};

const zh = {
  nav: {
    home: '首頁',
    services: '服務',
    cases: '成功案例',
    insights: '洞察',
    faq: '常見問題',
    contact: '聯絡我們',
  },
  serviceNames: [
    '行動應用程式開發',
    '網頁應用程式開發',
    'UI/UX 設計',
    '伺服器部署',
    '維護及支援',
  ],
  cta: {
    getQuote: '索取報價',
    bookConsultation: '預約免費諮詢',
    chatWhatsapp: 'WhatsApp 聯絡我們',
    bookFreeConsultation: '預約免費諮詢',
    viewCaseStudy: '查看案例',
    viewAllCaseStudies: '查看所有案例',
  },
  home: {
    eyebrow: '香港軟件開發',
    title: '我們為您打造驅動業務增長的行動與網頁應用程式',
    description:
      '我們是紮根香港的開發團隊，專注打造易用的行動應用程式、網站、UI/UX 設計與雲端系統——由初步構想到正式推出，一路陪伴。',
  },
  stats: {
    years: '經營年資',
    appExp: '應用開發經驗（年）',
    projects: '已交付項目',
    support: '24/7 售後支援',
  },
  techStack: {
    title: '我們使用的技術',
    slogan: '以現代、可靠的技術打造穩健產品',
    categories: [
      '行動開發',
      '網頁開發',
      '後端與數據庫',
      '雲端與 DevOps',
      '人工智能與機器學習',
      '區塊鏈與 Web3',
      '電子商務與市場營銷',
      '工具與整合',
    ],
  },
  instagram: {
    eyebrow: 'Instagram',
    title: '在 Instagram 上追蹤我們',
    slogan: '來自 we2Tech 團隊的每日科技資訊、項目構建與幕後花絮',
    follow: '追蹤 @we2tech',
  },
  location: {
    eyebrow: '到訪我們',
    title: '尋找我們位於香港的工作室',
    slogan: '我們位於長沙灣，距離港鐵站數步之遙——歡迎過來喝杯咖啡，聊聊您的項目。',
    addressLabel: '地址',
    addressLine1: '西翼 2 樓，荔枝角道 822 號',
    addressLine2: '香港九龍長沙灣',
    whatsapp: 'WhatsApp / 電話',
    email: '電郵',
    getDirections: '取得路線',
  },
  footer: {
    blurb:
      '我們是紮根香港的開發團隊，專注打造行動應用程式、網站、UI/UX 設計與雲端系統，助業務持續增長。',
    services: '服務',
    contactUs: '聯絡我們',
    address: '地址',
    email: '電郵',
    telephone: '電話號碼',
    copyright: '版權所有 © {year} we2Tech Ltd. 保留一切權利。',
  },
  faq: {
    title: '常見問題',
    slogan: '我們最常被問到的問題與解答',
  },
  cases: {
    eyebrow: '客戶案例',
    title: '示範案例',
    slogan:
      '按服務類別瀏覽客戶項目，了解技術決策如何與業務階段、營運、數據及客戶體驗相連。',
    casesLabel: '案例',
    categoriesLabel: '類別',
    all: '全部',
    prev: '上一頁',
    next: '下一頁',
    pageOf: '第 {page} 頁，共 {total} 頁',
    photo: '參考圖片',
    caseWord: '案例',
    techUsed: '使用技術',
    discuss: '洽談類似項目',
    ctaTitle: '您也希望為業務帶來這樣的效果嗎？',
    ctaText: '預約免費諮詢，我們會為您說明項目如何劃分範圍、開發與支援。',
  },
  contact: {
    eyebrow: '預約諮詢',
    title: '告訴我們您想改善的系統、流程或營運問題',
    slogan: '我們會免費為您審視項目現階段、技術方向、風險、時間表與最實際的下一步。',
    infoTitle: '與您的科技夥伴對話',
    infoText:
      '分享您的業務階段、壓力與期望成果。我們會結合客戶體驗、市場環境與營運需要，一併考慮您的技術需求。',
    howWeWork: '我們的工作方式',
    steps: [
      { title: '分享背景', text: '告訴我們您的業務目標、現有流程與目標用戶。' },
      { title: '確認限制', text: '我們會審視影響項目的業務與技術限制。' },
      { title: '討論可行範圍', text: '我們會建議實際的範圍、方法與分期。' },
      { title: '定出下一步', text: '您會帶著清晰建議與決策路徑離開。' },
    ],
    namePh: '姓名',
    companyPh: '公司（選填）',
    emailPh: '電郵',
    phonePh: '電話 / WhatsApp（選填）',
    messagePh: '請告訴我們您的項目——目標、現有系統、時間表，以及您希望改善的地方。',
    projectType: '項目類型',
    projectTypes: ['行動應用程式', '網頁應用程式', 'UI/UX 設計', '伺服器部署', '維護', 'MVP / 原型', '其他'],
    errName: '請填寫姓名',
    errEmail: '請填寫電郵',
    errEmailInvalid: '電郵格式無效',
    errMessage: '請填寫訊息',
    success: '多謝！我們會於一個工作天內回覆您。',
    submitting: '正在送出...',
    send: '送出查詢',
    failed: '送出失敗，請再試一次或直接電郵我們。',
    storiesTitle: '示範案例',
    viewCase: '查看案例',
    viewAll: '查看所有案例',
  },
  blog: {
    eyebrow: '見解',
    title: '文章與指南',
    slogan: '為香港企業提供關於應用程式、網站與科技策略的實用建議',
    readArticle: '閱讀文章 →',
  },
  post: {
    similarTitle: '有類似的項目想法嗎？',
    similarText: '與您在香港的科技夥伴談談。分享您的業務目標，我們會免費審視您的項目。',
    bookFree: '預約免費諮詢',
  },
  switcher: {
    label: '語言',
  },
  service: {
    bookConsultation: '預約免費諮詢',
    chatWhatsapp: 'WhatsApp 聯絡我們',
    directAnswersEyebrow: '直接解答',
    directAnswersTitle: '在發問前快速了解',
    faqEyebrow: '常見問題',
    faqTitle: '常見問題',
    homeLabel: '首頁',
    servicesLabel: '服務',
  },
  seo: {
    home: {
      title: 'we2Tech – 香港行動與網頁應用程式開發',
      desc: 'we2Tech 提供香港專業行動應用程式開發、網站開發、UI/UX 設計及伺服器部署服務。',
    },
    cases: {
      title: '示範案例 | we2Tech',
      desc: '瀏覽 we2Tech 如何協助香港企業建立行動應用程式、網站、雲端系統等——按服務類別查看客戶項目。',
    },
    contact: {
      title: '聯絡我們 | we2Tech',
      desc: '與您在香港的科技夥伴對話。分享您的業務目標、現有流程與限制——我們會免費審視項目階段、風險與下一步。',
    },
    faq: {
      title: '常見問題 | we2Tech',
      desc: '關於 we2Tech 在香港的行動應用程式、網站開發、UI/UX 設計、伺服器部署與維護支援服務的常見問題。',
    },
    blog: {
      title: '見解與博客 | we2Tech',
      desc: '關於應用程式開發、網站開發與科技策略的實用指南——開發成本、框架比較與如何打造更好的產品。',
    },
  },
};

const zhCn = {
  nav: {
    home: '首页',
    services: '服务',
    cases: '成功案例',
    insights: '洞察',
    faq: '常见问题',
    contact: '联系我们',
  },
  serviceNames: [
    '移动应用开发',
    '网页应用开发',
    'UI/UX 设计',
    '服务器部署',
    '维护及支持',
  ],
  cta: {
    getQuote: '获取报价',
    bookConsultation: '预约免费咨询',
    chatWhatsapp: 'WhatsApp 联系我们',
    bookFreeConsultation: '预约免费咨询',
    viewCaseStudy: '查看案例',
    viewAllCaseStudies: '查看所有案例',
  },
  home: {
    eyebrow: '香港软件开发',
    title: '我们为您打造驱动业务增长的移动与网页应用程序',
    description:
      '我们是一家扎根香港的开发团队，专注打造易用的移动应用、网站、UI/UX 设计与云端系统——从初步构想到正式上线，一路相伴。',
  },
  stats: {
    years: '经营年资',
    appExp: '应用开发经验（年）',
    projects: '已交付项目',
    support: '24/7 售后支持',
  },
  techStack: {
    title: '我们使用的技术',
    slogan: '以现代、可靠的技术打造稳健产品',
    categories: [
      '移动开发',
      '网页开发',
      '后端与数据库',
      '云端与 DevOps',
      '人工智能与机器学习',
      '区块链与 Web3',
      '电子商务与市场营销',
      '工具与集成',
    ],
  },
  instagram: {
    eyebrow: 'Instagram',
    title: '在 Instagram 上关注我们',
    slogan: '来自 we2Tech 团队的每日科技资讯、项目构建与幕后花絮',
    follow: '关注 @we2tech',
  },
  location: {
    eyebrow: '到访我们',
    title: '寻找我们位于香港的工作室',
    slogan: '我们位于长沙湾，距离港铁站几步之遥——欢迎过来喝杯咖啡，聊聊您的项目。',
    addressLabel: '地址',
    addressLine1: '西翼 2 楼，荔枝角道 822 号',
    addressLine2: '香港九龙长沙湾',
    whatsapp: 'WhatsApp / 电话',
    email: '邮箱',
    getDirections: '获取路线',
  },
  footer: {
    blurb:
      '我们是一家扎根香港的开发团队，专注打造移动应用、网站、UI/UX 设计与云端系统，助力业务持续增长。',
    services: '服务',
    contactUs: '联系我们',
    address: '地址',
    email: '邮箱',
    telephone: '电话号码',
    copyright: '版权所有 © {year} we2Tech Ltd. 保留一切权利。',
  },
  faq: {
    title: '常见问题',
    slogan: '我们最常被问到的问题与解答',
  },
  cases: {
    eyebrow: '客户案例',
    title: '示范案例',
    slogan: '按服务类别浏览客户项目，了解技术决策如何与业务阶段、运营、数据及客户体验相连。',
    casesLabel: '案例',
    categoriesLabel: '类别',
    all: '全部',
    prev: '上一页',
    next: '下一页',
    pageOf: '第 {page} 页，共 {total} 页',
    photo: '参考图片',
    caseWord: '案例',
    techUsed: '使用技术',
    discuss: '洽谈类似项目',
    ctaTitle: '您也希望为业务带来这样的效果吗？',
    ctaText: '预约免费咨询，我们会为您说明项目如何划分范围、开发与支持。',
  },
  contact: {
    eyebrow: '预约咨询',
    title: '告诉我们您想改善的系统、流程或运营问题',
    slogan: '我们会免费为您审视项目现阶段、技术方向、风险、时间表与实际可行的下一步。',
    infoTitle: '与您的科技伙伴对话',
    infoText:
      '分享您的业务阶段、压力与期望成果。我们会结合客户体验、市场环境与运营需要，一并考虑您的技术需求。',
    howWeWork: '我们的工作方式',
    steps: [
      { title: '分享背景', text: '告诉我们您的业务目标、现有流程与目标用户。' },
      { title: '确认限制', text: '我们会审视影响项目的业务与技术限制。' },
      { title: '讨论可行范围', text: '我们会建议实际的范围、方法与分期。' },
      { title: '定出下一步', text: '您会带着清晰建议与决策路径离开。' },
    ],
    namePh: '姓名',
    companyPh: '公司（选填）',
    emailPh: '邮箱',
    phonePh: '电话 / WhatsApp（选填）',
    messagePh: '请告诉我们您的项目——目标、现有系统、时间表，以及您希望改善的地方。',
    projectType: '项目类型',
    projectTypes: ['移动应用', '网页应用', 'UI/UX 设计', '服务器部署', '维护', 'MVP / 原型', '其他'],
    errName: '请填写姓名',
    errEmail: '请填写邮箱',
    errEmailInvalid: '邮箱格式无效',
    errMessage: '请填写信息',
    success: '谢谢！我们会在一个工作日内回复您。',
    submitting: '正在提交...',
    send: '提交咨询',
    failed: '提交失败，请重试或直接发邮件给我们。',
    storiesTitle: '示范案例',
    viewCase: '查看案例',
    viewAll: '查看所有案例',
  },
  blog: {
    eyebrow: '洞察',
    title: '文章与指南',
    slogan: '为香港企业提供关于应用、网站与科技策略的实用建议',
    readArticle: '阅读文章 →',
  },
  post: {
    similarTitle: '有类似的项目想法吗？',
    similarText: '与您在香港的科技伙伴聊聊。分享您的业务目标，我们会免费审视您的项目。',
    bookFree: '预约免费咨询',
  },
  switcher: {
    label: '语言',
  },
  service: {
    bookConsultation: '预约免费咨询',
    chatWhatsapp: 'WhatsApp 联系我们',
    directAnswersEyebrow: '直接解答',
    directAnswersTitle: '在提问前快速了解',
    faqEyebrow: '常见问题',
    faqTitle: '常见问题',
    homeLabel: '首页',
    servicesLabel: '服务',
  },
  seo: {
    home: {
      title: 'we2Tech – 香港移动与网页应用开发',
      desc: 'we2Tech 提供香港专业移动应用开发、网站开发、UI/UX 设计及服务器部署服务。',
    },
    cases: {
      title: '示范案例 | we2Tech',
      desc: '浏览 we2Tech 如何协助香港企业建立移动应用、网站、云端系统等——按服务类别查看客户项目。',
    },
    contact: {
      title: '联系我们 | we2Tech',
      desc: '与您在香港的科技伙伴对话。分享您的业务目标、现有流程与限制——我们会免费审视项目阶段、风险与下一步。',
    },
    faq: {
      title: '常见问题 | we2Tech',
      desc: '关于 we2Tech 在香港的移动应用、网站开发、UI/UX 设计、服务器部署与维护支持服务的常见问题。',
    },
    blog: {
      title: '洞察与博客 | we2Tech',
      desc: '关于应用开发、网站开发与科技策略的实用指南——开发成本、框架比较与如何打造更好的产品。',
    },
  },
};

const dicts = { en, zh, 'zh-cn': zhCn };

function lookup(dict, key) {
  return key.split('.').reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : undefined), dict);
}

function format(str, vars) {
  if (!vars) return str;
  return str.replace(/\{(\w+)\}/g, (match, name) => (vars[name] !== undefined ? vars[name] : match));
}

export const getLocaleInfo = (locale) =>
  LOCALES.find((l) => l.code === locale) || LOCALES[0];

export function localizedPath(locale, path) {
  if (locale === 'en') return path;
  const hashIndex = path.indexOf('#');
  const base = hashIndex === -1 ? path : path.slice(0, hashIndex);
  const hash = hashIndex === -1 ? '' : path.slice(hashIndex);
  const prefix = locale === 'zh' ? '/zh' : '/zh-cn';
  const joined = base === '/' ? prefix + '/' : prefix + base;
  return joined + hash;
}

export function stripLocalePrefix(asPath) {
  let p = asPath.split('?')[0];
  let query = asPath.includes('?') ? asPath.slice(asPath.indexOf('?')) : '';
  for (const pre of ['/zh-cn', '/zh']) {
    if (p === pre) return '/' + query;
    if (p.startsWith(pre + '/')) return p.slice(pre.length) + query;
  }
  return asPath;
}

export function switchToLocale(asPath, targetLocale) {
  const base = stripLocalePrefix(asPath);
  return localizedPath(targetLocale, base);
}

const LocaleContext = React.createContext({ locale: 'en', t: (k) => k });

export function LocaleProvider({ locale = 'en', children }) {
  const t = React.useCallback(
    (key, vars) => {
      const dict = dicts[locale] || dicts.en;
      const value = lookup(dict, key) !== undefined ? lookup(dict, key) : lookup(dicts.en, key);
      if (Array.isArray(value) || typeof value !== 'string') return value;
      return format(value, vars);
    },
    [locale]
  );
  return <LocaleContext.Provider value={{ locale, t }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return React.useContext(LocaleContext);
}
