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
    title: '香港 UI/UX 设计 | we2Tech',
    description:
      '香港手机及网页应用程式的以用户为中心 UI/UX 设计。用户流程、线框图、高像真度设计稿及可点击原型。',
    keywords:
      '香港 UI UX 设计、手机应用设计、网站设计、线框图、原型、用户体验',
    path: '/services/ui-ux-design',
  },
  hero: {
    eyebrow: '应用程式 UI/UX 设计',
    title: '您的用户会真正享受使用的介面',
    slogan:
      '我们的设计团队为手机及网页应用程式打造易用、美观的 UI/UX——以清晰而愉悦的体验，将首次到访的访客变成忠实客户。',
    image: BannerImg,
    background: BannerImg,
    showBookButton: false,
  },
  features: {
    title: '我们设计甚么',
    slogan: '我们围绕真实用户的思考与行为来设计，而不只是考虑应用程式应该看起来怎样。',
    items: [
      {
        icon: <FaSearch />,
        title: 'UX 研究与用户流程',
        text: '了解您的用户、规划他们的旅程，并界定通往应用程式每个目标的最清晰路径。',
      },
      {
        icon: <FaDrawPolygon />,
        title: '线框图',
        text: '在视觉设计开始前，先以低像真度版面确定结构、层级与内容。',
      },
      {
        icon: <FaPaintBrush />,
        title: 'UI 设计',
        text: '为手机与网页制作高像真度画面，配合您的品牌呈现一致、吸引的视觉方向。',
      },
      {
        icon: <FaThLarge />,
        title: '设计系统',
        text: '可重用的元件、颜色、字型与规则，让每个画面在您成长时保持一致。',
      },
      {
        icon: <FaMousePointer />,
        title: '可点击原型',
        text: '在编写任何程式码之前，即可测试、示范并与持份者分享的互动原型。',
      },
      {
        icon: <FaEye />,
        title: '可用性测试',
        text: '检视真实用户行为并优化体验，确保最终应用程式直观易用。',
      },
    ],
  },
  points: {
    title: '为甚么优秀设计如此重要',
    slogan: '易用的介面是任何网站或应用程式最重要的部分之一。',
    items: [
      '吸引用户更容易使用您的应用程式',
      '将首次到访的访客转化为忠实客户',
      '减少困惑与支援查询',
      '以一致的风格强化您的品牌形象',
      '以清晰的设计方向加快开发',
      '令复杂的工作流程变得简单自然',
    ],
  },
  modules: {
    title: '设计交付物',
    slogan: '交付物按您的项目阶段度身订造——由概念到可直接交付开发的画面。',
    items: [
      '用户画像',
      '用户流程',
      '线框图',
      '高像真度设计稿',
      '可点击原型',
      '设计系统',
      '图示集',
      '无障碍检查',
      '开发交接',
    ],
  },
  process: {
    title: '我们的设计流程',
    slogan: '结构化的流程，让您在设计旅程的每个阶段都参与其中。',
    items: [
      {
        title: '研究',
        text: '了解您的用户、业务目标，以及介面必须解决的问题。',
      },
      {
        title: '结构',
        text: '规划资讯架构、用户流程与画面层级。',
      },
      {
        title: '设计',
        text: '以您品牌的视觉语言建立线框图与高像真度 UI。',
      },
      {
        title: '原型',
        text: '将画面串连成可点击原型，供测试与检视。',
      },
      {
        title: '测试',
        text: '以真实用户验证可用性并优化体验。',
      },
      {
        title: '交接',
        text: '交付有条理的设计档案与指引，让开发准确实现设计。',
      },
    ],
  },
  directAnswers: [
    {
      q: 'UI/UX 设计项目包含甚么？',
      a: '研究、用户流程、线框图、高像真度画面、原型及开发交接。',
    },
    {
      q: '适合谁使用？',
      a: '推出新应用程式或网站，或重新设计现有产品的初创与企业。',
    },
    {
      q: '项目通常如何开始？',
      a: '研究与用户规划 → 结构与线框图 → 视觉设计 → 原型与交接。',
    },
  ],
  cta: {
    title: '想要一个用户会喜欢的介面？',
    text: '告诉我们您的产品与用户。我们会设计一个反映您的品牌并推动成果的易用介面。',
  },
};

export default content;
