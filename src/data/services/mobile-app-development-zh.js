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
    title: '香港手機應用程式開發 | we2Tech',
    description:
      '香港自訂 iOS、Android 及跨平台應用程式開發。React Native、Flutter、Swift、Kotlin——由 MVP 到正式上線及之後。',
    keywords:
      '香港手機應用程式開發、iOS 開發、Android 開發、React Native、Flutter、手機應用',
    path: '/services/mobile-app-development',
  },
  hero: {
    eyebrow: '手機應用程式開發',
    title: '為您的用戶與營運而建的手機應用程式',
    slogan:
      '我們為客戶、會員、前線團隊及內部營運，設計並開發自訂的 iOS、Android 及跨平台應用程式——由構思到應用商店上線，以及長期的支援。',
    image: BannerImg,
    background: BannerImg,
    showBookButton: false,
  },
  features: {
    title: '我們開發甚麼',
    slogan: '每個應用程式都圍繞它需要支援的工作流程來設計，而不只是它所顯示的畫面。',
    items: [
      {
        icon: <FaMobileAlt />,
        title: '自訂手機應用程式',
        text: '專為客戶、會員、員工及前線團隊而設的原創 iOS、Android 及跨平台應用程式。',
      },
      {
        icon: <FaApple />,
        title: '原生 iOS 及 Android',
        text: 'Swift、Kotlin 與原生開發，適合需要深入平台性能及裝置功能的應用程式。',
      },
      {
        icon: <FaReact />,
        title: '跨平台應用程式',
        text: '以 React Native 及 Flutter 開發，用同一套程式碼在 iOS 與 Android 交付同一個產品。',
      },
      {
        icon: <FaPlug />,
        title: '系統整合',
        text: '將您的應用程式連接付款、地圖、社交登入、CRM、後端系統及外部 API。',
      },
      {
        icon: <FaStore />,
        title: '上線及商店發佈',
        text: '應用商店提交、發佈檢查、分析設定與監控，確保上線當日順利無阻。',
      },
      {
        icon: <FaAndroid />,
        title: '營運及 IoT 應用',
        text: '為真實營運打造出席、預約、訪客流程、物流及智能裝置連接體驗。',
      },
    ],
  },
  points: {
    title: '為甚麼選擇 we2Tech 開發',
    slogan: '一個優質的應用程式會成為您業務可量度的渠道。',
    items: [
      '為客戶及會員提供直接的數碼渠道',
      '簡化依賴人手協調的工作流程',
      '毋須依靠電郵與試算表即可推出新服務',
      '收集實時數據用於報告與決策',
      '將應用程式連接雲端系統、付款及其他平台',
      '提升品牌形象與客戶黏性',
    ],
  },
  modules: {
    title: '常用模組',
    slogan: '可重用的構建模組有助縮短交付時間，同時保持系統按您的需要度身訂造。',
    items: [
      '用戶',
      '角色與權限',
      '通知',
      '會員制度',
      '預約',
      '訂單與付款',
      '獎賞與積分',
      '內容',
      '管理後台',
      '報告與紀錄',
      '分析',
      '第三方 API',
    ],
  },
  process: {
    title: '我們的開發流程',
    slogan: '清晰的交付週期令需求、設計、開發、測試與上線環環相扣。',
    items: [
      {
        title: '探索',
        text: '了解您的業務目標、用戶、工作流程與技術限制。',
      },
      {
        title: '定義',
        text: '將需求轉化為範圍、用戶旅程、系統邏輯與交付里程碑。',
      },
      {
        title: '設計',
        text: '建立 UX 流程、UI 方向、線框圖及可點擊原型供您檢視。',
      },
      {
        title: '開發',
        text: '以有條理的迭代方式開發應用程式、管理後台、API 及整合。',
      },
      {
        title: '測試',
        text: '執行 QA、UAT、除錯、裝置檢查及整合驗證。',
      },
      {
        title: '上線',
        text: '準備生產環境部署、商店提交、分析與監控。',
      },
      {
        title: '改善',
        text: '檢視實際使用情況、修正問題、增強功能並規劃下一階段。',
      },
    ],
  },
  directAnswers: [
    {
      q: '手機應用程式項目包含甚麼？',
      a: '需求探索、UI/UX 設計、開發、測試、應用商店提交，以及上線後支援規劃。',
    },
    {
      q: '適合誰使用？',
      a: '需要客戶應用程式、會員入口、預約、付款、忠誠計劃或營運流動工具的企業。',
    },
    {
      q: '項目通常如何開始？',
      a: '需求探索與整理 → UX 及系統流程設計 → 開發 → UAT、上線、分析與支援。',
    },
  ],
  cta: {
    title: '有手機應用程式的想法？讓我們一起開發吧。',
    text: '告訴我們您的應用程式、用戶與業務階段。我們會協助界定最有用的第一版，以及它應該成長成的系統。',
  },
};

export default content;
