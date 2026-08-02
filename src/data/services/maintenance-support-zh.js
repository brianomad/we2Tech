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
    title: '香港應用程式維護與支援 | we2Tech',
    description:
      '香港應用程式持續維護與支援。錯誤修正、監控、安全修補、備份、升級及每月服務報告。',
    keywords:
      '香港應用程式維護、應用程式支援、錯誤修正、伺服器維護、監控、SLA',
    path: '/services/maintenance-support',
  },
  hero: {
    eyebrow: '維護與支援',
    title: '讓您的應用程式保持監控、維護，並準備迎接未來',
    slogan:
      '我們負責託管與維護您的應用程式、排解突發問題，並隨您的需求增長而升級系統——即使在上線很久之後。',
    image: BannerImg,
    background: BannerImg,
    showBookButton: false,
  },
  features: {
    title: '我們支援甚麼',
    slogan: '清晰的營運節奏，讓您的系統在上線後保持健康。',
    items: [
      {
        icon: <FaBug />,
        title: '錯誤修正與排解疑難',
        text: '透過單一清晰渠道報告問題，我們會快速優先處理、修正並驗證。',
      },
      {
        icon: <FaHeartbeat />,
        title: '監控與正常運作',
        text: '我們監察您的應用程式、伺服器與整合，在用戶察覺前及早發現問題。',
      },
      {
        icon: <FaShieldAlt />,
        title: '安全修補與更新',
        text: '我們套用安全更新與依賴升級，讓您的系統保持受保護。',
      },
      {
        icon: <FaDatabase />,
        title: '備份管理',
        text: '備份按時間表進行、測試並復原，確保您的數據隨時可以恢復。',
      },
      {
        icon: <FaRocket />,
        title: '升級與增強',
        text: '即使一切順利，我們也會按您的新需求升級並擴展應用程式。',
      },
      {
        icon: <FaFileAlt />,
        title: '每月服務報告',
        text: '清晰報告正常運作時間、已解決問題、已完成的維護及下一步應改善之處。',
      },
    ],
  },
  points: {
    title: '為甚麼持續支援如此重要',
    slogan: '支援可防止緩慢退化——小問題、無人跟進的警示與不明確的下一步。',
    items: [
      '以清晰的解決路徑更快處理問題',
      '透過從不遺忘的監控、備份與更新降低營運風險',
      '以可預測的發佈取代緊急變更週期',
      '基於真實使用與支援模式持續改善',
      '安心知道您的系統掌握在專家手中',
      '一個隨您成長而保持安全、快速與可靠的應用程式',
    ],
  },
  modules: {
    title: '常用支援範圍',
    slogan: '支援方案按您系統的風險與重要性度身訂造。',
    items: [
      '問題分流',
      '錯誤修正',
      '正常運作檢查',
      '備份檢視',
      '安全修補',
      '依賴更新',
      '內容更新',
      '監控與警示',
      '發佈支援',
      '每月報告',
      'SLA 規劃',
      '功能升級',
    ],
  },
  process: {
    title: '我們如何接管支援',
    slogan: '在接受支援擁有權之前，我們會先清晰了解現有情況與重要事項。',
    items: [
      {
        title: '檢視',
        text: '審核程式碼、託管、存取、整合與目前的支援缺口。',
      },
      {
        title: '定義',
        text: '商定受支援範圍、回應預期、渠道與除外項目。',
      },
      {
        title: '穩定',
        text: '設定警示、紀錄、備份、操作手冊與定期檢查。',
      },
      {
        title: '營運',
        text: '處理問題、報告服務健康並規劃受控發佈。',
      },
    ],
  },
  directAnswers: [
    {
      q: '維護方案包含甚麼？',
      a: '監控、錯誤修正、安全更新、備份管理、支援與每月報告。',
    },
    {
      q: '適合誰使用？',
      a: '擁有已上線應用程式，需要可靠的上線後照顧與改善的企業。',
    },
    {
      q: '項目通常如何開始？',
      a: '系統與擁有權檢視 → 範圍與 SLA 商定 → 監控設定 → 持續營運。',
    },
  ],
  cta: {
    title: '需要可靠的上線後支援？',
    text: '告訴我們您需要支援的系統，以及一次故障會令您損失多少。我們會制定合適的支援計劃。',
  },
};

export default content;
