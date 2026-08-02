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
    title: '香港網頁應用程式開發 | we2Tech',
    description:
      '香港響應式網站及網頁應用程式開發。React、Next.js 與 WordPress——由企業網站到入口、儀表板與電子商務。',
    keywords:
      '香港網頁開發、網站開發、Next.js、React、WordPress、網頁應用程式、電子商務',
    path: '/services/web-app-development',
  },
  hero: {
    eyebrow: '網頁應用程式開發',
    title: '讓業務持續運作的網頁平台與入口',
    slogan:
      '我們圍繞真實用戶與營運工作流程，設計並開發響應式網站、客戶入口、管理儀表板、預約系統及電子商務流程。',
    image: BannerImg,
    background: BannerImg,
    showBookButton: false,
  },
  features: {
    title: '我們開發甚麼',
    slogan: '由企業網站到完整的營運平台，我們以它需要支援的工作流程為核心來塑造產品。',
    items: [
      {
        icon: <FaGlobe />,
        title: '企業網站',
        text: '快速、響應式的市場推廣及公司網站，建立您的品牌，並將訪客轉化為查詢。',
      },
      {
        icon: <FaUserLock />,
        title: '客戶入口',
        text: '自助登入區域，客戶可在此追蹤訂單、管理預約、查閱紀錄及更新個人資料。',
      },
      {
        icon: <FaShoppingCart />,
        title: '電子商務與落單',
        text: '網上商店、落單流程、付款、會員與獎賞，讓您的客戶輕鬆購物。',
      },
      {
        icon: <FaTachometerAlt />,
        title: '管理儀表板',
        text: '一站式內部後台，統一管理用戶、內容、訂單、報告與日常營運。',
      },
      {
        icon: <FaCalendarAlt />,
        title: '預約與內容系統',
        text: '設施預約、預約、活動報名及內容管理工作流程，與您的營運相連。',
      },
      {
        icon: <FaWordpress />,
        title: 'WordPress 及 CMS 開發',
        text: '您的團隊毋須觸碰程式碼即可輕鬆更新的 WordPress 及無頭 CMS 網站。',
      },
    ],
  },
  points: {
    title: '為甚麼要建立網頁平台',
    slogan: '一個優質的網站或入口，會成為服務交付與增長的真實渠道。',
    items: [
      '為客戶提供直達您業務的數碼渠道',
      '以互聯的工作流程取代電郵與試算表程序',
      '提升品牌形象與客戶黏性',
      '毋須人手協調即可更快推出新服務',
      '收集數據用於報告、決策及日後自動化',
      '將平台連接付款、CRM 及第三方系統',
    ],
  },
  modules: {
    title: '常用模組',
    slogan: '可重用的構建模組加快交付，同時保持最終系統按您所需度身訂造。',
    items: [
      '用戶',
      '角色與權限',
      '通知',
      '產品目錄',
      '訂單與付款',
      '預約',
      '會員制度',
      '內容／CMS',
      '報告與紀錄',
      'SEO',
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
        text: '以迭代方式開發前端、後端、管理後台、API 及整合。',
      },
      {
        title: '測試',
        text: '執行 QA、UAT、除錯、瀏覽器檢查及整合驗證。',
      },
      {
        title: '上線',
        text: '準備生產環境部署、網域、分析與監控。',
      },
      {
        title: '改善',
        text: '檢視實際使用情況、修正問題、增強功能並規劃下一階段。',
      },
    ],
  },
  directAnswers: [
    {
      q: '網頁項目包含甚麼？',
      a: '需求探索、UI/UX 設計、響應式開發、後端與管理後台、測試、部署及支援規劃。',
    },
    {
      q: '適合誰使用？',
      a: '需要企業網站、客戶入口、預約、電子商務或內部網頁工具的企業。',
    },
    {
      q: '項目通常如何開始？',
      a: '需求探索與整理 → 設計 → 開發 → UAT、上線、分析與支援。',
    },
  ],
  cta: {
    title: '需要一個真正為您而設的網站或入口？',
    text: '告訴我們您的業務、用戶與目標。我們會定義一個您的團隊能夠安心營運的實用網頁平台。',
  },
};

export default content;
