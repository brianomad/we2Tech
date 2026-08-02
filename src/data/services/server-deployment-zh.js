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
    title: '香港伺服器部署與雲端託管 | we2Tech',
    description:
      '香港雲端伺服器部署與託管。CI/CD 流程、網域與 SSL、數據庫與儲存設定、監控、備份及安全強化。',
    keywords:
      '香港伺服器部署、雲端託管、雲端伺服器、AWS、CI/CD、SSL、數據庫、部署',
    path: '/services/server-deployment',
  },
  hero: {
    eyebrow: '伺服器部署與雲端託管',
    title: '您的業務可以信賴的雲端基建',
    slogan:
      '我們按照您的需要部署雲端系統並落實雲端伺服器——順應全球遙距工作趨勢，並將數碼文化融入您的工作環境。',
    image: BannerImg,
    background: BannerImg,
    showBookButton: false,
  },
  features: {
    title: '我們部署甚麼',
    slogan: '每個系統都會被託管、保護及監控，保持快速、安全與可用。',
    items: [
      {
        icon: <FaCloudUploadAlt />,
        title: '雲端託管設定',
        text: '按您的預算與流量，選擇並配置合適的雲端平台（AWS、GCP、Azure、阿里雲或 DigitalOcean）。',
      },
      {
        icon: <FaSyncAlt />,
        title: '部署流程',
        text: '設定 CI/CD，讓程式碼變更自動到達生產環境，附設發佈檢查與簡易回滾。',
      },
      {
        icon: <FaServer />,
        title: '網域、SSL 與網絡',
        text: '配置網域、HTTPS 憑證、電郵、DNS 與網絡規則，確保您的網站安全且可達。',
      },
      {
        icon: <FaDatabase />,
        title: '數據庫與儲存',
        text: '按您的數據與增長規模，設計並部署數據庫、檔案儲存與備份。',
      },
      {
        icon: <FaShieldAlt />,
        title: '安全強化',
        text: '鎖定存取、權限、密鑰與防火牆，讓系統從第一天起已受保護。',
      },
      {
        icon: <FaChartLine />,
        title: '監控與警示',
        text: '設定正常運作檢查、紀錄、警示與備份時間表，在用戶察覺前及早發現問題。',
      },
    ],
  },
  points: {
    title: '為甚麼正確部署如此重要',
    slogan: '可靠的伺服器基礎，令您的應用程式保持快速、安全與可用。',
    items: [
      '避免繁忙時段的停機與緩慢',
      '從一開始便清楚掌握存取、安全、備份與復原',
      '隨用戶與數據增長而擴充託管',
      '以規模恰當的基建控制雲端成本',
      '以可靠的雲端存取支援遙距工作',
      '為報告與日後自動化建立穩定基礎',
    ],
  },
  modules: {
    title: '常用部署組件',
    slogan: '我們在您的系統上線前配置的構建模組。',
    items: [
      '雲端託管',
      '網域與 SSL',
      '後端服務',
      '數據庫設定',
      '檔案儲存',
      '備份時間表',
      'CI/CD 流程',
      '監控與紀錄',
      '安全控制',
      '災難復原',
      '成本治理',
      '正常運作警示',
    ],
  },
  process: {
    title: '我們的部署流程',
    slogan: '我們在上線前，令基建決策透明且受控。',
    items: [
      {
        title: '評估',
        text: '檢視您目前的設定、流量、安全需要與營運限制。',
      },
      {
        title: '設計',
        text: '界定目標雲端架構、環境與部署方式。',
      },
      {
        title: '部署',
        text: '設定託管、數據庫、網域、流程、安全與監控。',
      },
      {
        title: '驗證',
        text: '測試部署、存取、整合、備份與復原路徑。',
      },
      {
        title: '營運',
        text: '監控正常運作、檢視成本、套用更新並保持系統健康。',
      },
    ],
  },
  directAnswers: [
    {
      q: '部署項目包含甚麼？',
      a: '雲端設定、網域與 SSL、數據庫、CI/CD、安全強化、監控與備份配置。',
    },
    {
      q: '適合誰使用？',
      a: '推出新系統、遷移現有系統，或需要更可靠雲端託管的企業。',
    },
    {
      q: '項目通常如何開始？',
      a: '檢視目前設定 → 設計目標架構 → 部署 → 驗證與監控。',
    },
  ],
  cta: {
    title: '需要為您的應用程式找一個可靠的家？',
    text: '告訴我們您的系統與流量。我們會部署並配置一個您的團隊能夠安心營運的雲端基礎。',
  },
};

export default content;
