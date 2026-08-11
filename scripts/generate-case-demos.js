const fs = require('fs');
const path = require('path');

const { C: CATEGORIES, GEN } = require('./demo-content.js');
const casesMod = require('../src/sections/case-data.js');
const CASES = Array.isArray(casesMod) ? casesMod : casesMod.default;

const DEFAULT_CATEGORY = 'ecommerce';

const RULES = [
  ['dental', /dental/],
  ['petcare', /pet services|pet grooming|pet food|animal shelter|veterinary/],
  ['beauty', /beauty|cosmetic clinic|nail salon|perfume|skincare/],
  ['salon', /hair salon|barber|salon/],
  ['spa', /\bspa\b/],
  ['coffeeroast', /roastery|roasting/],
  ['cafe', /coffee|cafe/],
  ['freshfood', /butcher|seafood|organic|meal-prep|meal prep/],
  ['grocery', /grocery|groceries|supermarket/],
  ['catering', /catering|canteen|food truck|cloud kitchen/],
  ['dining', /restaurant|bistro|kitchen|dessert|wine|members.? club|food hall/],
  ['bakery', /bakery/],
  ['gym', /gym|crossfit|martial arts|boxing/],
  ['studio', /yoga|pilates|dance/],
  ['fitness', /fitness|personal trainer|wellness|supplement/],
  ['pharmacy', /pharmacy|tcm/],
  ['clinic', /clinic|physiotherapy|chiropractic|optometry|medical lab|imaging centre|traditional medicine|healthcare|elder care|nursing home|hair transplant|dermatology/],
  ['education', /tuition|school|kindergarten|playgroup|childcare|university|language|alumni/],
  ['auto', /taxi|minibus|car rental|automotive|auto repair|bike|bicycle|fleet|car detailing|motorcycle/],
  ['travel', /travel|tour|tourist|boat rental/],
  ['hotel', /hotel|hostel|serviced apartment/],
  ['fintech', /payment|wallet|lending|crypto|forex|commodities|crowdfunding|remittance|buy-now-pay-later|venture|bank|finance/],
  ['insurance', /insurance|insurer/],
  ['accounting', /accountancy|bookkeeping/],
  ['professional', /staffing|headhunting|law firm|legal|recruitment|hr services|payroll|claims|brokerage|security company|chamber of commerce|trade association/],
  ['entertainment', /nightclub|sports bar|cinema|museum|theme park|escape room|bowling|ktv|arcade|trampoline|event|conference|exhibition|wedding|art gallery|gamefi|sports-gaming/],
  ['sports', /sports league|sports association|swimming|golf|tennis|badminton|running club|e-sports|esports/],
  ['ngo', /charitable|foundation|relief|non-profit/],
  ['church', /church|religious/],
  ['cospace', /co-working|coworking|office management|smart building|community centre|startup incubator|parking|storage|facilities|cleaning/],
  ['manufacturing', /manufacturing|manufacturer|quality control|spare-parts|factory|industrial/],
  ['laundry', /laundry|dry clean|dry cleaner|laundromat/],
  ['logistics', /logistics|courier|delivery|freight|warehouse|moving|distribution|supply chain|wholesale/],
  ['jewelry', /jewellery|jewelry|watch/],
  ['fashion', /fashion|apparel|shoe/],
  ['electronics', /electronics|phone repair|camera|appliance/],
  ['realestate', /real estate|property|renovation|construction|proptech/],
  ['loyalty', /loyalty|gift card|coupon|cashback/],
  ['workshop', /handmade|crafts/],
  ['retail', /retail|department store|outlet mall|gift shop|luxury|homeware|baby|furniture/],
  ['ecommerce', /ecommerce|online|marketplace|dropshipping|second-hand|bookstore|stationery|book publisher|tea brand/],
];

const OVERRIDES = {
  151: 'logistics',
};

// Per-case on-topic overrides: { caseId: { Tag: { en, zh, 'zh-cn' } } }.
// Lists must match the base GEN lengths per tag:
// Booking 4, Membership 3, Cloud System 4, eCommerce 6, Order Placement 5,
// Attendance 4, Visitor Management 4, Inventory 4, Logistics 4,
// Data & Analytics 4, Ticketing 3, Loyalty 3, Mobile App { up:2, bk:2, tx:2 }.
const CASE_OVERRIDES = {
  1: {
    Booking: { en: ['Unit viewing', 'Storage packing', 'Shuttle transfer', 'Insurance add-on'], zh: ['倉位參觀', '入倉打包', '穿梭運輸', '保險附加'], 'zh-cn': ['仓位参观', '入仓打包', '穿梭运输', '保险附加'] },
    'Cloud System': { en: ['Storage portal', 'Unit API', 'Access app', 'Billing engine'], zh: ['儲存入口', '倉位 API', '出入應用', '計費引擎'], 'zh-cn': ['储存入口', '仓位 API', '出入应用', '计费引擎'] },
    Membership: { en: ['Pay-as-you-go', 'Monthly', 'Annual'], zh: ['按次收費', '月費', '年費'], 'zh-cn': ['按次收费', '月费', '年费'] },
    'Visitor Management': { en: ['Tenant', 'Mover', 'Inspector', 'Courier'], zh: ['租戶', '搬運員', '驗收員', '速遞員'], 'zh-cn': ['租户', '搬运员', '验收员', '速递员'] },
  },
  6: {
    'Web/Website': {
      en: { heroTitle: 'Play. Earn. Score.', heroSub: 'A football GameFi platform blending matches, tokens and NFTs.', features: [{ title: 'Play-to-earn', text: 'Win tokens with every match.' }, { title: 'NFT squad', text: 'Own your players as collectibles.' }, { title: 'Token economy', text: 'Trade, stake and grow.' }] },
      zh: { heroTitle: '遊玩・賺幣・入球', heroSub: '足球 GameFi 平台，融合賽事、代幣與 NFT。', features: [{ title: '遊玩即賺', text: '每場比賽贏取代幣。' }, { title: 'NFT 球員', text: '球員化身收藏品。' }, { title: '代幣經濟', text: '交易、質押與增值。' }] },
      'zh-cn': { heroTitle: '游玩・赚币・入球', heroSub: '足球 GameFi 平台，融合赛事、代币与 NFT。', features: [{ title: '游玩即赚', text: '每场比赛赢取代币。' }, { title: 'NFT 球员', text: '球员化身收藏品。' }, { title: '代币经济', text: '交易、质押与增值。' }] },
    },
  },
  18: {
    'Web/Website': {
      en: { heroTitle: 'Own the art', heroSub: 'A curated marketplace for digital collectibles and generative art.', features: [{ title: 'Verified drops', text: 'Every drop authenticated on-chain.' }, { title: 'Instant trade', text: 'Buy and sell in seconds.' }, { title: 'Curated artists', text: 'Hand-picked creators you can trust.' }] },
      zh: { heroTitle: '擁有藝術', heroSub: '數碼藏品與生成藝術的策展市場。', features: [{ title: '認證發售', text: '每個發售均經鏈上認證。' }, { title: '即時交易', text: '數秒完成買賣。' }, { title: '策展藝術家', text: '經嚴選的可信創作者。' }] },
      'zh-cn': { heroTitle: '拥有艺术', heroSub: '数码藏品与生成艺术的策展市场。', features: [{ title: '认证发售', text: '每个发售均经链上认证。' }, { title: '即时交易', text: '数秒完成买卖。' }, { title: '策展艺术家', text: '经严选的可信创作者。' }] },
    },
  },
  31: {
    Booking: { en: ['Deep clean', 'Office cleaning', 'End-of-tenancy', 'Window wash'], zh: ['深度清潔', '辦公室清潔', '退租清潔', '玻璃清洗'], 'zh-cn': ['深度清洁', '办公室清洁', '退租清洁', '玻璃清洗'] },
    'Cloud System': { en: ['Client portal', 'Crew API', 'Scheduling app', 'Billing'], zh: ['客戶入口', '團隊 API', '排程應用', '計費'], 'zh-cn': ['客户入口', '团队 API', '排程应用', '计费'] },
    Logistics: { en: ['Central', 'TST', 'MK', 'Kowloon Bay'], zh: ['中環', '尖沙咀', '旺角', '九龍灣'], 'zh-cn': ['中环', '尖沙咀', '旺角', '九龙湾'] },
  },
  41: {
    'Web/Website': {
      en: { heroTitle: 'Build worlds players own', heroSub: 'A studio crafting blockchain games with living economies.', features: [{ title: 'Tokenomics', text: 'Economies balanced for the long run.' }, { title: 'On-chain assets', text: 'Players truly own their items.' }, { title: 'Live worlds', text: 'Seasons, events and endless updates.' }] },
      zh: { heroTitle: '打造玩家擁有的世界', heroSub: '以活躍經濟打造區塊鏈遊戲的工作室。', features: [{ title: '代幣經濟', text: '為長期平衡設計的經濟體系。' }, { title: '鏈上資產', text: '玩家真正擁有自己的物品。' }, { title: '活躍世界', text: '賽季、活動與持續更新。' }] },
      'zh-cn': { heroTitle: '打造玩家拥有的世界', heroSub: '以活跃经济打造区块链游戏的工作室。', features: [{ title: '代币经济', text: '为长期平衡设计的经济体系。' }, { title: '链上资产', text: '玩家真正拥有自己的物品。' }, { title: '活跃世界', text: '赛季、活动与持续更新。' }] },
    },
  },
  56: {
    eCommerce: { en: ['Hardcover novel', 'Children\u2019s picture book', 'Coffee-table book', 'Poetry collection', 'Graphic novel', 'Business title'], zh: ['精裝小說', '兒童繪本', '茶几書', '詩集', '圖像小說', '商業書'], 'zh-cn': ['精装小说', '儿童绘本', '茶几书', '诗集', '图像小说', '商业书'] },
    'Web/Website': {
      en: { heroTitle: 'Stories that travel far', heroSub: 'A publishing platform for editing, print and worldwide distribution.', features: [{ title: 'Editorial workflow', text: 'Manuscript to launch in one place.' }, { title: 'Global distribution', text: 'Sell into 40+ markets.' }, { title: 'Print on demand', text: 'Every title, never out of stock.' }] },
      zh: { heroTitle: '讓好書走得更遠', heroSub: '涵蓋編輯、印刷與全球發行的出版平台。', features: [{ title: '編輯流程', text: '從稿件到出版一站完成。' }, { title: '全球發行', text: '進入 40 多個市場。' }, { title: '按需印刷', text: '每本書永不缺貨。' }] },
      'zh-cn': { heroTitle: '让好书走得更远', heroSub: '涵盖编辑、印刷与全球发行的出版平台。', features: [{ title: '编辑流程', text: '从稿件到出版一站完成。' }, { title: '全球发行', text: '进入 40 多个市场。' }, { title: '按需印刷', text: '每本书永不断货。' }] },
    },
  },
  79: {
    eCommerce: { en: ['Gel pen set', 'A5 notebook', 'Washi tape pack', 'Desk calendar', 'Greeting card set', 'File folder'], zh: ['啫喱筆套裝', 'A5 筆記本', '和紙膠帶套裝', '桌面月曆', '賀卡套裝', '文件夾'], 'zh-cn': ['啫喱笔套装', 'A5 笔记本', '和纸胶带套装', '桌面月历', '贺卡套装', '文件夹'] },
    'Order Placement': { en: ['Custom print', 'Monogram stamp', 'Bulk corporate set', 'Refill pack', 'Gift wrap'], zh: ['客製印刷', '燙印姓名章', '企業批量套裝', '補充裝', '禮品包裝'], 'zh-cn': ['客制印刷', '烫印姓名章', '企业批量套装', '补充装', '礼品包装'] },
  },
  83: {
    'Order Placement': { en: ['Jasmine pearls', 'Oolong sampler', 'Pu-erh cake', 'Matcha set', 'Herbal blend'], zh: ['茉莉珍珠', '烏龍試飲裝', '普洱茶餅', '抹茶套裝', '草本拼配'], 'zh-cn': ['茉莉珍珠', '乌龙试饮装', '普洱茶饼', '抹茶套装', '草本拼配'] },
    eCommerce: { en: ['Jasmine pearls', 'Oolong tea', 'Pu-erh cake', 'Chamomile tin', 'Earl Grey tin', 'Green tea set'], zh: ['茉莉珍珠', '烏龍茶', '普洱茶餅', '洋甘菊罐', '伯爵茶罐', '綠茶禮盒'], 'zh-cn': ['茉莉珍珠', '乌龙茶', '普洱茶饼', '洋甘菊罐', '伯爵茶罐', '绿茶礼盒'] },
  },
  190: {
    'Order Placement': { en: ['Pro hair dryer', 'Clipper set', 'Curl tong', 'Barber chair', 'Salon mirror'], zh: ['專業風筒', '電剪套裝', '捲髮器', '理髮椅', '髮廊鏡'], 'zh-cn': ['专业风筒', '电剪套装', '卷发器', '理发椅', '发廊镜'] },
    eCommerce: { en: ['Pro hair dryer', 'Clipper set', 'Curl tong', 'Barber chair', 'Salon mirror', 'Hood dryer'], zh: ['專業風筒', '電剪套裝', '捲髮器', '理髮椅', '髮廊鏡', '頭盔式風罩'], 'zh-cn': ['专业风筒', '电剪套装', '卷发器', '理发椅', '发廊镜', '头盔式风罩'] },
    Logistics: { en: ['Central', 'Mong Kok', 'Tsuen Wan', 'Kowloon Bay'], zh: ['中環', '旺角', '荃灣', '九龍灣'], 'zh-cn': ['中环', '旺角', '荃湾', '九龙湾'] },
  },
  195: {
    Booking: { en: ['Hourly spot', 'Monthly pass', 'EV charging bay', 'Valet slot'], zh: ['時租車位', '月租泊位', '電動車充電位', '代客泊車'], 'zh-cn': ['时租车位', '月租泊位', '电动车充电位', '代客泊车'] },
    'Mobile App': {
      en: { up: ['EV charging', 'Reserved bay'], bk: ['Hourly spot', 'Monthly pass'], tx: ['Parking fee', 'EV top-up', 'Pass renewal'] },
      zh: { up: ['電動車充電', '預留車位'], bk: ['時租車位', '月租泊位'], tx: ['泊車費', '充電費', '月票續期'] },
      'zh-cn': { up: ['电动车充电', '预留车位'], bk: ['时租车位', '月租泊位'], tx: ['泊车费', '充电费', '月票续期'] },
    },
  },
  196: {
    Booking: { en: ['Standard unit', 'Climate unit', 'Locker day', 'Box delivery'], zh: ['標準倉位', '恆溫倉位', '迷你櫃日租', '儲物箱送貨'], 'zh-cn': ['标准仓位', '恒温仓位', '迷你柜日租', '储物箱送货'] },
    eCommerce: { en: ['Box pack', 'Bubble wrap roll', 'Packing tape', 'Furniture cover', 'Pallet jack', 'Lock set'], zh: ['儲物箱套裝', '氣泡膜', '封箱膠紙', '傢俬保護套', '手動油壓車', '鎖具套裝'], 'zh-cn': ['储物箱套装', '气泡膜', '封箱胶纸', '家具保护套', '手动油压车', '锁具套装'] },
    'Web/Website': {
      en: { heroTitle: 'Space, when you need it', heroSub: 'Secure self-storage with pickup, packing and online access.', features: [{ title: 'Climate control', text: 'Protect what matters.' }, { title: '24/7 access', text: 'Your unit, any hour.' }, { title: 'Free pickup', text: 'We collect your boxes.' }] },
      zh: { heroTitle: '需要時，隨時有空間', heroSub: '安全自助倉儲，支援取送、打包與網上管理。', features: [{ title: '恆溫恆濕', text: '守護重要之物。' }, { title: '24/7 存取', text: '隨時使用你的倉位。' }, { title: '免費上門', text: '我們上門收箱。' }] },
      'zh-cn': { heroTitle: '需要时，随时有空间', heroSub: '安全自助仓储，支援取送、打包与网上管理。', features: [{ title: '恒温恒湿', text: '守护重要之物。' }, { title: '24/7 存取', text: '随时使用你的仓位。' }, { title: '免费上门', text: '我们上门收箱。' }] },
    },
  },
};

function matchCategory(c) {
  if (OVERRIDES[c.id]) return OVERRIDES[c.id];
  const haystack = String(c.title).toLowerCase();
  for (const [key, re] of RULES) {
    if (re.test(haystack)) return key;
  }
  return DEFAULT_CATEGORY;
}

function namesToOverride(tag, base, val, locale) {
  if (val && typeof val === 'object' && !Array.isArray(val)) {
    if (tag === 'Web/Website') {
      return { heroTitle: val.heroTitle, heroSub: val.heroSub, features: val.features };
    }
    if (tag === 'Mobile App') {
      if (val.upcoming) {
        return { upcomingList: val.upcoming, bookingsList: val.bookings, transactionsList: val.transactions };
      }
      const up = val.up || [];
      const bk = val.bk || [];
      const tx = val.tx || [];
      return {
        upcomingList: (base.upcoming || []).map((u, i) => ({ ...u, name: up[i] != null ? up[i] : u.name })),
        bookingsList: (base.bookings || []).map((b, i) => ({ ...b, name: bk[i] != null ? bk[i] : b.name })),
        transactionsList: (base.transactions || []).map((t, i) => (tx[i] ? [tx[i], t[1], t[2]] : t)),
      };
    }
    return val;
  }
  const list = Array.isArray(val) ? val : [];
  switch (tag) {
    case 'Booking':
      return { services: list };
    case 'Membership':
      return { plans: (base.plans || []).map((p, i) => ({ ...p, name: list[i] != null ? list[i] : p.name })) };
    case 'Cloud System':
      return { serviceList: (base.serviceList || []).map((s, i) => ({ ...s, name: list[i] != null ? list[i] : s.name })) };
    case 'eCommerce':
      return { products: (base.products || []).map((p, i) => ({ ...p, name: list[i] != null ? list[i] : p.name })) };
    case 'Order Placement':
      return { items: (base.items || []).map((p, i) => ({ ...p, name: list[i] != null ? list[i] : p.name })) };
    case 'Attendance':
      return { sessions: (base.sessions || []).map((s, i) => ({ ...s, name: list[i] != null ? list[i] : s.name })) };
    case 'Visitor Management':
      return { purposes: list };
    case 'Inventory':
      return { items: (base.items || []).map((it, i) => ({ ...it, name: list[i] != null ? list[i] : it.name })) };
    case 'Logistics':
      return { shipments: (base.shipments || []).map((s, i) => ({ ...s, dest: list[i] != null ? list[i] : s.dest })) };
    case 'Data & Analytics':
      return { topProductsList: (base.topProducts || []).map((t, i) => ({ ...t, p: list[i] != null ? list[i] : t.p })) };
    case 'Ticketing':
      return { events: (base.events || []).map((e, i) => ({ ...e, name: list[i] != null ? list[i] : e.name })) };
    case 'Loyalty': {
      const rewards = (base.rewards || []).map((r, i) => ({ ...r, name: list[i] != null ? list[i] : r.name }));
      const prefix = locale === 'en' ? 'Purchase' : locale === 'zh' ? '消費' : '消费';
      const purchaseLabel = list[0] ? `${prefix} \u00B7 ${list[0]}` : base.purchaseLabel;
      return { rewards, purchaseLabel };
    }
    default:
      return {};
  }
}

const LOCALES = ['en', 'zh', 'zh-cn'];
const TAGS = Object.keys(GEN);

// --- seeded per-case variation ---------------------------------------------

function hashId(id) {
  let h = (id * 2654435761) >>> 0;
  h = (h ^ (h >>> 16)) >>> 0;
  return h;
}

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const NO_TOUCH_KEYS = new Set(['services', 'upcomingList', 'bookingsList', 'transactionsList']);
const NO_PERTURB_KEYS = new Set(['expected', 'checked', 'name']);

function rotate(list, off) {
  if (!Array.isArray(list) || list.length < 2) return list;
  const o = off % list.length;
  return [...list.slice(o), ...list.slice(0, o)];
}

function moneyStr(s, seed) {
  if (typeof s !== 'string') return s;
  const m = s.match(/^(HK\$)?\s*([\d,]+(?:\.\d+)?)\s*(k|M)?$/);
  if (!m) return s;
  const num = parseFloat(m[2].replace(/,/g, ''));
  const r = mulberry32(seed + Math.round(num * 13))();
  const factor = 1 + (r - 0.5) * 0.4;
  const prefix = m[1] || '';
  const unit = m[3];
  if (unit) {
    const out = Math.max(1, Math.round((num * factor) / 5) * 5);
    return `${prefix}${out}${unit}`;
  }
  const out = Math.max(5, Math.round((num * factor) / 5) * 5);
  return `${prefix}${out.toLocaleString('en-US')}`;
}

function numStr(s, seed) {
  if (typeof s !== 'string') return s;
  const m = s.match(/^([\d,]+)$/);
  if (!m) return s;
  const num = parseInt(m[1].replace(/,/g, ''), 10);
  const r = mulberry32(seed + num * 7)();
  const factor = 1 + (r - 0.5) * 0.5;
  const out = Math.max(1, Math.round(num * factor));
  return out.toLocaleString('en-US');
}

function varyScalar(id, v, key) {
  if (NO_PERTURB_KEYS.has(key)) return v;
  if (typeof v === 'number') {
    const r = mulberry32(hashId(id) + Math.round(v * 31))();
    const f = 1 + (r - 0.5) * 0.5;
    return Math.max(5, Math.min(100, Math.round(v * f)));
  }
  if (typeof v === 'string') {
    if (v.indexOf('HK$') !== -1) return moneyStr(v, hashId(id));
    const n = numStr(v, hashId(id));
    return n;
  }
  return v;
}

function varyTag(id, obj) {
  if (!obj || typeof obj !== 'object') return obj;
  const rnd = mulberry32(hashId(id));
  const out = {};
  for (const [key, val] of Object.entries(obj)) {
    let v = val;
    if (Array.isArray(v)) {
      if (NO_TOUCH_KEYS.has(key)) {
        out[key] = v;
        continue;
      }
      v = rotate(v, Math.floor(rnd() * v.length));
      v = v.map((item) => {
        if (Array.isArray(item)) return item.map((cell) => varyScalar(id, cell, ''));
        if (item && typeof item === 'object') {
          const o = {};
          for (const [k2, v2] of Object.entries(item)) o[k2] = varyScalar(id, v2, k2);
          return o;
        }
        return varyScalar(id, item, key);
      });
    } else if (v && typeof v === 'object') {
      if (Array.isArray(v.features)) {
        v = { ...v, features: rotate(v.features, Math.floor(rnd() * v.features.length)).map((ft) => {
          const o = {};
          for (const [k2, v2] of Object.entries(ft)) o[k2] = varyScalar(id, v2, k2);
          return o;
        }) };
      } else {
        const o = {};
        for (const [k2, v2] of Object.entries(v)) o[k2] = varyScalar(id, v2, k2);
        v = o;
      }
    } else {
      v = varyScalar(id, v, key);
    }
    out[key] = v;
  }
  return out;
}

// --- build ------------------------------------------------------------------

function buildTagContent(tag, base, val, locale, id) {
  const over = namesToOverride(tag, base, val, locale);
  return varyTag(id, over);
}

function main() {
  const byCase = {};
  const counts = {};
  const unmatched = [];

  for (const c of CASES) {
    const cat = matchCategory(c);
    byCase[c.id] = cat;
    counts[cat] = (counts[cat] || 0) + 1;
    if (cat === DEFAULT_CATEGORY && !RULES.some(([, re]) => re.test(String(c.title).toLowerCase()))) {
      unmatched.push(`${c.id}: ${c.title}`);
    }
  }

  console.log('\n=== Case -> category coverage ===');
  const sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
  for (const k of sorted) {
    console.log(String(counts[k]).padStart(4), k);
  }
  console.log(`\nDefaulted (no rule match, ${unmatched.length}):`);
  unmatched.forEach((u) => console.log('  ', u));

  const catByKey = {};
  for (const cat of CATEGORIES) catByKey[cat.key] = cat;

  const caseContent = {};
  for (const c of CASES) {
    const cat = catByKey[byCase[c.id]];
    const ovr = CASE_OVERRIDES[c.id] || {};
    const tags = Array.isArray(c.tags) ? c.tags : TAGS;
    const byTag = {};
    for (const tag of tags) {
      if (!TAGS.includes(tag)) continue;
      const byLocale = {};
      for (const loc of LOCALES) {
        const base = GEN[tag][loc] || {};
        const val = ovr[tag] ? ovr[tag][loc] : cat && cat.names && cat.names[tag] ? cat.names[tag][loc] : undefined;
        byLocale[loc] = buildTagContent(tag, base, val, loc, c.id);
      }
      byTag[tag] = byLocale;
    }
    caseContent[c.id] = byTag;
  }

  const body = [
    '// Generated by scripts/generate-case-demos.js \u2014 do not edit by hand.',
    `export const defaultCategory = ${JSON.stringify(DEFAULT_CATEGORY)};`,
    'export const categoryForCaseId = ' + JSON.stringify(byCase) + ';',
    'export const caseContent = ' + JSON.stringify(caseContent) + ';',
    '',
  ].join('\n');

  const outPath = path.join(__dirname, '..', 'src', 'data', 'case-demo-content.js');
  fs.writeFileSync(outPath, body);
  console.log(`\nWrote ${outPath}`);
}

main();
