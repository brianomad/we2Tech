import {
  FaSearch,
  FaDrawPolygon,
  FaPaintBrush,
  FaThLarge,
  FaMousePointer,
  FaEye,
} from 'react-icons/fa';
import BannerImg from 'assets/we2Tech/UIUX.png';

const content = {
  seo: {
    title: '香港 UI/UX 設計 | we2Tech',
    description:
      '香港手機及網頁應用程式的以用戶為中心 UI/UX 設計。用戶流程、線框圖、高像真度設計稿及可點擊原型。',
    keywords:
      '香港 UI UX 設計、手機應用設計、網站設計、線框圖、原型、用戶體驗',
    path: '/services/ui-ux-design',
  },
  hero: {
    eyebrow: '應用程式 UI/UX 設計',
    title: '您的用戶會真正享受使用的介面',
    slogan:
      '我們的設計團隊為手機及網頁應用程式打造易用、美觀的 UI/UX——以清晰而愉悅的體驗，將首次到訪的訪客變成忠實客戶。',
    image: BannerImg,
    background: BannerImg,
    showBookButton: false,
  },
  features: {
    title: '我們設計甚麼',
    slogan: '我們圍繞真實用戶的思考與行為來設計，而不只是考慮應用程式應該看起來怎樣。',
    items: [
      {
        icon: <FaSearch />,
        title: 'UX 研究與用戶流程',
        text: '了解您的用戶、規劃他們的旅程，並界定通往應用程式每個目標的最清晰路徑。',
      },
      {
        icon: <FaDrawPolygon />,
        title: '線框圖',
        text: '在視覺設計開始前，先以低像真度版面確定結構、層級與內容。',
      },
      {
        icon: <FaPaintBrush />,
        title: 'UI 設計',
        text: '為手機與網頁製作高像真度畫面，配合您的品牌呈現一致、吸引的視覺方向。',
      },
      {
        icon: <FaThLarge />,
        title: '設計系統',
        text: '可重用的元件、顏色、字型與規則，讓每個畫面在您成長時保持一致。',
      },
      {
        icon: <FaMousePointer />,
        title: '可點擊原型',
        text: '在編寫任何程式碼之前，即可測試、示範並與持份者分享的互動原型。',
      },
      {
        icon: <FaEye />,
        title: '可用性測試',
        text: '檢視真實用戶行為並優化體驗，確保最終應用程式直觀易用。',
      },
    ],
  },
  points: {
    title: '為甚麼優秀設計如此重要',
    slogan: '易用的介面是任何網站或應用程式最重要的部分之一。',
    items: [
      '吸引用戶更容易使用您的應用程式',
      '將首次到訪的訪客轉化為忠實客戶',
      '減少困惑與支援查詢',
      '以一致的風格強化您的品牌形象',
      '以清晰的設計方向加快開發',
      '令複雜的工作流程變得簡單自然',
    ],
  },
  modules: {
    title: '設計交付物',
    slogan: '交付物按您的項目階段度身訂造——由概念到可直接交付開發的畫面。',
    items: [
      '用戶畫像',
      '用戶流程',
      '線框圖',
      '高像真度設計稿',
      '可點擊原型',
      '設計系統',
      '圖示集',
      '無障礙檢查',
      '開發交接',
    ],
  },
  process: {
    title: '我們的設計流程',
    slogan: '結構化的流程，讓您在設計旅程的每個階段都參與其中。',
    items: [
      {
        title: '研究',
        text: '了解您的用戶、業務目標，以及介面必須解決的問題。',
      },
      {
        title: '結構',
        text: '規劃資訊架構、用戶流程與畫面層級。',
      },
      {
        title: '設計',
        text: '以您品牌的視覺語言建立線框圖與高像真度 UI。',
      },
      {
        title: '原型',
        text: '將畫面串連成可點擊原型，供測試與檢視。',
      },
      {
        title: '測試',
        text: '以真實用戶驗證可用性並優化體驗。',
      },
      {
        title: '交接',
        text: '交付有條理的設計檔案與指引，讓開發準確實現設計。',
      },
    ],
  },
  directAnswers: [
    {
      q: 'UI/UX 設計項目包含甚麼？',
      a: '研究、用戶流程、線框圖、高像真度畫面、原型及開發交接。',
    },
    {
      q: '適合誰使用？',
      a: '推出新應用程式或網站，或重新設計現有產品的初創與企業。',
    },
    {
      q: '項目通常如何開始？',
      a: '研究與用戶規劃 → 結構與線框圖 → 視覺設計 → 原型與交接。',
    },
  ],
  cta: {
    title: '想要一個用戶會喜歡的介面？',
    text: '告訴我們您的產品與用戶。我們會設計一個反映您的品牌並推動成果的易用介面。',
  },
};

export default content;
