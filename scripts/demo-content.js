const L = (en, zh, zhcn) => ({ en, zh, 'zh-cn': zhcn });

const GEN = {
  Booking: L(
    { services: ['Standard booking', 'Priority slot', 'Premium service', 'Express service'], meta: [{ icon: '\u{1F4C5}', price: 'HK$180', dur: '45 min' }, { icon: '\u{1F512}', price: 'HK$320', dur: '1 hr' }, { icon: '\u{1F3E2}', price: 'HK$680', dur: '1.5 hr' }, { icon: '\u26A1', price: 'HK$880', dur: '2 hr' }] },
    { services: ['標準預約', '優先時段', '尊尚服務', '特快服務'], meta: [{ icon: '\u{1F4C5}', price: 'HK$180', dur: '45 分鐘' }, { icon: '\u{1F512}', price: 'HK$320', dur: '1 小時' }, { icon: '\u{1F3E2}', price: 'HK$680', dur: '1.5 小時' }, { icon: '\u26A1', price: 'HK$880', dur: '2 小時' }] },
    { services: ['标准预约', '优先时段', '尊尚服务', '特快服务'], meta: [{ icon: '\u{1F4C5}', price: 'HK$180', dur: '45 分钟' }, { icon: '\u{1F512}', price: 'HK$320', dur: '1 小时' }, { icon: '\u{1F3E2}', price: 'HK$680', dur: '1.5 小时' }, { icon: '\u26A1', price: 'HK$880', dur: '2 小时' }] }
  ),
  Membership: L(
    { plans: [{ name: 'Starter', price: 'HK$68', perks: ['1 location', 'Core features', 'Email support'] }, { name: 'Plus', price: 'HK$128', perks: ['3 locations', 'Advanced reports', 'Priority support'] }, { name: 'Premium', price: 'HK$228', perks: ['Unlimited locations', 'API access', 'Dedicated manager'] }] },
    { plans: [{ name: '基本', price: 'HK$68', perks: ['1 間分店', '核心功能', '電郵支援'] }, { name: '升級', price: 'HK$128', perks: ['3 間分店', '進階報告', '優先支援'] }, { name: '尊尚', price: 'HK$228', perks: ['無限分店', 'API 存取', '專屬經理'] }] },
    { plans: [{ name: '基本', price: 'HK$68', perks: ['1 间分店', '核心功能', '电邮支援'] }, { name: '升级', price: 'HK$128', perks: ['3 间分店', '进阶报告', '优先支援'] }, { name: '尊尚', price: 'HK$228', perks: ['无限分店', 'API 存取', '专属经理'] }] }
  ),
  'Cloud System': L(
    { serviceList: [{ name: 'Web portal', status: 'Operational' }, { name: 'Mobile API', status: 'Operational' }, { name: 'Payments', status: 'Operational' }, { name: 'Notifications', status: 'Degraded' }] },
    { serviceList: [{ name: '網頁入口', status: 'Operational' }, { name: '手機 API', status: 'Operational' }, { name: '付款', status: 'Operational' }, { name: '通知', status: 'Degraded' }] },
    { serviceList: [{ name: '网页入口', status: 'Operational' }, { name: '手机 API', status: 'Operational' }, { name: '付款', status: 'Operational' }, { name: '通知', status: 'Degraded' }] }
  ),
  eCommerce: L(
    { products: [{ name: 'Classic Tote', price: 'HK$199' }, { name: 'Canvas Sneakers', price: 'HK$459' }, { name: 'Wool Overshirt', price: 'HK$899' }, { name: 'Leather Belt', price: 'HK$349' }, { name: 'Ceramic Mug Set', price: 'HK$129' }, { name: 'Trail Backpack', price: 'HK$549' }] },
    { products: [{ name: '經典手袋', price: 'HK$199' }, { name: '帆布波鞋', price: 'HK$459' }, { name: '羊毛外套', price: 'HK$899' }, { name: '皮帶', price: 'HK$349' }, { name: '陶瓷杯套裝', price: 'HK$129' }, { name: '登山背包', price: 'HK$549' }] },
    { products: [{ name: '经典手袋', price: 'HK$199' }, { name: '帆布球鞋', price: 'HK$459' }, { name: '羊毛外套', price: 'HK$899' }, { name: '皮带', price: 'HK$349' }, { name: '陶瓷杯套装', price: 'HK$129' }, { name: '登山背包', price: 'HK$549' }] }
  ),
  'Order Placement': L(
    { items: [{ name: 'House Special', price: 'HK$42' }, { name: 'Signature Set', price: 'HK$68' }, { name: 'Seasonal Bowl', price: 'HK$58' }, { name: 'Homemade Pastry', price: 'HK$28' }, { name: 'Fresh Juice', price: 'HK$26' }] },
    { items: [{ name: '招牌套餐', price: 'HK$42' }, { name: '精選組合', price: 'HK$68' }, { name: '時令碗', price: 'HK$58' }, { name: '自家烘焙糕點', price: 'HK$28' }, { name: '鮮榨果汁', price: 'HK$26' }] },
    { items: [{ name: '招牌套餐', price: 'HK$42' }, { name: '精选组合', price: 'HK$68' }, { name: '时令碗', price: 'HK$58' }, { name: '自制糕点', price: 'HK$28' }, { name: '鲜榨果汁', price: 'HK$26' }] }
  ),
  'Web/Website': L(
    { heroTitle: 'Built for your business', heroSub: 'A modern platform designed around how you work — fast, secure and effortless.', features: [{ title: 'Fast delivery', text: 'Ship features in weeks, not quarters.' }, { title: 'Secure by design', text: 'Encryption, backups and access control built in.' }, { title: 'Real-time data', text: 'Dashboards that update as your business runs.' }] },
    { heroTitle: '為您的業務而建', heroSub: '現代化平台，圍繞您的工作方式設計 — 快速、安全、簡單。', features: [{ title: '快速交付', text: '數星期內推出功能，而非數季。' }, { title: '安全設計', text: '內建加密、備份及存取控制。' }, { title: '實時數據', text: '業務運行時，儀表板同步更新。' }] },
    { heroTitle: '为您的业务而建', heroSub: '现代化平台，围绕您的工作方式设计 — 快速、安全、简单。', features: [{ title: '快速交付', text: '数周内推出功能，而非数月。' }, { title: '安全设计', text: '内置加密、备份及访问控制。' }, { title: '实时数据', text: '业务运行时，仪表板同步更新。' }] }
  ),
  'Mobile App': L(
    { upcoming: [{ name: 'Morning session', day: 'Sat', date: '14', time: '10:00', place: 'Central', status: 'Confirmed', tone: 'green', grad: 'linear-gradient(135deg,#EC4899,#DB2777)' }, { name: 'Evening session', day: 'Fri', date: '20', time: '19:00', place: 'Wan Chai', status: 'Booked', tone: 'purple', grad: 'linear-gradient(135deg,#0EA5E9,#0284C7)' }], bookings: [{ name: 'Morning session', date: 'Sat 14 Jun', status: 'Confirmed', tone: 'green' }, { name: 'Wellness care', date: 'Tue 17 Jun', status: 'Pending', tone: 'amber' }, { name: 'Evening session', date: 'Fri 20 Jun', status: 'Confirmed', tone: 'green' }], transactions: [['Standard visit', '+HK$880', 'in'], ['Extra service', '\u2212HK$320', 'out'], ['Referral bonus', '+HK$150', 'in']] },
    { upcoming: [{ name: '上午課程', day: '週六', date: '14', time: '10:00', place: '中環', status: '已確認', tone: 'green', grad: 'linear-gradient(135deg,#EC4899,#DB2777)' }, { name: '晚間課程', day: '週五', date: '20', time: '19:00', place: '灣仔', status: '已預約', tone: 'purple', grad: 'linear-gradient(135deg,#0EA5E9,#0284C7)' }], bookings: [{ name: '上午課程', date: '6月14日 (六)', status: '已確認', tone: 'green' }, { name: '健康護理', date: '6月17日 (二)', status: '處理中', tone: 'amber' }, { name: '晚間課程', date: '6月20日 (五)', status: '已確認', tone: 'green' }], transactions: [['標準服務', '+HK$880', 'in'], ['額外服務', '\u2212HK$320', 'out'], ['推薦獎賞', '+HK$150', 'in']] },
    { upcoming: [{ name: '上午课程', day: '周六', date: '14', time: '10:00', place: '中环', status: '已确认', tone: 'green', grad: 'linear-gradient(135deg,#EC4899,#DB2777)' }, { name: '晚间课程', day: '周五', date: '20', time: '19:00', place: '湾仔', status: '已预约', tone: 'purple', grad: 'linear-gradient(135deg,#0EA5E9,#0284C7)' }], bookings: [{ name: '上午课程', date: '6月14日（六）', status: '已确认', tone: 'green' }, { name: '健康护理', date: '6月17日（二）', status: '处理中', tone: 'amber' }, { name: '晚间课程', date: '6月20日（五）', status: '已确认', tone: 'green' }], transactions: [['标准服务', '+HK$880', 'in'], ['额外服务', '\u2212HK$320', 'out'], ['推荐奖赏', '+HK$150', 'in']] }
  ),
  Attendance: L(
    { sessions: [{ name: 'Morning class', expected: '24', checked: '22' }, { name: 'One-on-one', expected: '8', checked: '8' }, { name: 'Group workshop', expected: '15', checked: '11' }, { name: 'Evening class', expected: '20', checked: '20' }] },
    { sessions: [{ name: '上午班', expected: '24', checked: '22' }, { name: '一對一', expected: '8', checked: '8' }, { name: '小組工作坊', expected: '15', checked: '11' }, { name: '晚間班', expected: '20', checked: '20' }] },
    { sessions: [{ name: '上午班', expected: '24', checked: '22' }, { name: '一对一', expected: '8', checked: '8' }, { name: '小组工作坊', expected: '15', checked: '11' }, { name: '晚间班', expected: '20', checked: '20' }] }
  ),
  'Visitor Management': L(
    { purposes: ['Meeting', 'Delivery', 'Site tour', 'Interview'] },
    { purposes: ['會議', '送貨', '場地參觀', '面試'] },
    { purposes: ['会议', '送货', '场地参观', '面试'] }
  ),
  Inventory: L(
    { items: [{ sku: 'AP-101', name: 'Core product 16oz', onHand: '132', reorder: '40', status: 'In stock' }, { sku: 'CF-204', name: 'Value pack 12pk', onHand: '14', reorder: '30', status: 'Low' }, { sku: 'GR-310', name: 'Deluxe bundle', onHand: '0', reorder: '20', status: 'Out of stock' }, { sku: 'TN-415', name: 'Starter kit', onHand: '86', reorder: '25', status: 'In stock' }] },
    { items: [{ sku: 'AP-101', name: '核心產品 16oz', onHand: '132', reorder: '40', status: 'In stock' }, { sku: 'CF-204', name: '超值裝 12件', onHand: '14', reorder: '30', status: 'Low' }, { sku: 'GR-310', name: '豪華套裝', onHand: '0', reorder: '20', status: 'Out of stock' }, { sku: 'TN-415', name: '入門套裝', onHand: '86', reorder: '25', status: 'In stock' }] },
    { items: [{ sku: 'AP-101', name: '核心产品 16oz', onHand: '132', reorder: '40', status: 'In stock' }, { sku: 'CF-204', name: '超值装 12件', onHand: '14', reorder: '30', status: 'Low' }, { sku: 'GR-310', name: '豪华套装', onHand: '0', reorder: '20', status: 'Out of stock' }, { sku: 'TN-415', name: '入门套装', onHand: '86', reorder: '25', status: 'In stock' }] }
  ),
  Logistics: L(
    { shipments: [{ id: 'DC-4821', dest: 'Cheung Sha Wan', driver: 'K. Wong', eta: '12 min', step: 'out' }, { id: 'DC-4819', dest: 'Mong Kok', driver: 'M. Li', eta: '28 min', step: 'in' }, { id: 'DC-4816', dest: 'Causeway Bay', driver: 'T. Ho', eta: '44 min', step: 'in' }, { id: 'DC-4812', dest: 'Kwun Tong', driver: 'S. Chan', eta: 'Delivered', step: 'delivered' }] },
    { shipments: [{ id: 'DC-4821', dest: '長沙灣', driver: '黃先生', eta: '12 分鐘', step: 'out' }, { id: 'DC-4819', dest: '旺角', driver: '李先生', eta: '28 分鐘', step: 'in' }, { id: 'DC-4816', dest: '銅鑼灣', driver: '何先生', eta: '44 分鐘', step: 'in' }, { id: 'DC-4812', dest: '觀塘', driver: '陳先生', eta: '已送達', step: 'delivered' }] },
    { shipments: [{ id: 'DC-4821', dest: '长沙湾', driver: '黄先生', eta: '12 分钟', step: 'out' }, { id: 'DC-4819', dest: '旺角', driver: '李先生', eta: '28 分钟', step: 'in' }, { id: 'DC-4816', dest: '铜锣湾', driver: '何先生', eta: '44 分钟', step: 'in' }, { id: 'DC-4812', dest: '观塘', driver: '陈先生', eta: '已送达', step: 'delivered' }] }
  ),
  'Data & Analytics': L(
    { topProducts: [{ p: 'Signature product', s: '1,204', r: 'HK$239k', share: 100 }, { p: 'Premium bundle', s: '988', r: 'HK$542k', share: 82 }, { p: 'Starter set', s: '812', r: 'HK$104k', share: 64 }, { p: 'Seasonal line', s: '701', r: 'HK$321k', share: 48 }] },
    { topProducts: [{ p: '旗艦產品', s: '1,204', r: 'HK$239k', share: 100 }, { p: '尊尚套裝', s: '988', r: 'HK$542k', share: 82 }, { p: '入門套裝', s: '812', r: 'HK$104k', share: 64 }, { p: '季節系列', s: '701', r: 'HK$321k', share: 48 }] },
    { topProducts: [{ p: '旗舰产品', s: '1,204', r: 'HK$239k', share: 100 }, { p: '尊尚套装', s: '988', r: 'HK$542k', share: 82 }, { p: '入门套装', s: '812', r: 'HK$104k', share: 64 }, { p: '季节系列', s: '701', r: 'HK$321k', share: 48 }] }
  ),
  Ticketing: L(
    { events: [{ name: 'Opening night', date: 'Sat 14 Jun', price: 'HK$120' }, { name: 'Feature event', date: 'Thu 19 Jun', price: 'HK$180' }, { name: 'Grand finale', date: 'Fri 27 Jun', price: 'HK$260' }] },
    { events: [{ name: '首演之夜', date: '6月14日 (六)', price: 'HK$120' }, { name: '重點活動', date: '6月19日 (四)', price: 'HK$180' }, { name: '壓軸盛事', date: '6月27日 (五)', price: 'HK$260' }] },
    { events: [{ name: '首演之夜', date: '6月14日（六）', price: 'HK$120' }, { name: '重点活动', date: '6月19日（四）', price: 'HK$180' }, { name: '压轴盛事', date: '6月27日（五）', price: 'HK$260' }] }
  ),
  Loyalty: L(
    { rewards: [{ name: 'Free item', points: '120' }, { name: 'HK$50 voucher', points: '300' }, { name: 'Gift set', points: '500' }], history: [['Regular purchase', '120', 'earned', '09:14'], ['Birthday bonus', '200', 'earned', 'Yesterday'], ['Redeemed voucher', '300', 'spent', 'Mon']], purchaseLabel: 'Purchase \u00B7 Standard item' },
    { rewards: [{ name: '免費禮品', points: '120' }, { name: 'HK$50 禮券', points: '300' }, { name: '禮物套裝', points: '500' }], history: [['日常消費', '120', 'earned', '09:14'], ['生日獎賞', '200', 'earned', '昨天'], ['兌換禮券', '300', 'spent', '週一']], purchaseLabel: '消費 · 標準產品' },
    { rewards: [{ name: '免费礼品', points: '120' }, { name: 'HK$50 礼券', points: '300' }, { name: '礼物套装', points: '500' }], history: [['日常消费', '120', 'earned', '09:14'], ['生日奖赏', '200', 'earned', '昨天'], ['兑换礼券', '300', 'spent', '周一']], purchaseLabel: '消费 · 标准产品' }
  ),
  Payment: L(
    { amount: 'HK$1,248.00', subtotal: 'HK$1,198.00', shipping: 'HK$50.00' },
    { amount: 'HK$1,248.00', subtotal: 'HK$1,198.00', shipping: 'HK$50.00' },
    { amount: 'HK$1,248.00', subtotal: 'HK$1,198.00', shipping: 'HK$50.00' }
  ),
};

const C = [];

function cat(obj) {
  C.push(obj);
  return obj;
}

cat({
  key: 'fitness',
  product: L('Wellness Club', '健身會所', '健身会所'),
  theme: 'green',
  names: {
    Booking: L(['Personal training', 'Group class', 'Physio session', 'Sauna pass'], ['個人訓練', '團體課程', '物理治療', '桑拿通行證'], ['个人训练', '团体课程', '物理治疗', '桑拿通行证']),
    Membership: L(['Essential', 'Pro', 'Elite'], ['基本', '專業', '精英'], ['基本', '专业', '精英']),
    'Cloud System': L(['Class portal', 'Booking API', 'Member app', 'Payments'], ['課程入口', '預約 API', '會員應用', '付款'], ['课程入口', '预约 API', '会员应用', '付款']),
    eCommerce: L(['Protein powder', 'Yoga mat', 'Resistance bands', 'Recovery set', 'Steel bottle', 'Gym towel'], ['蛋白粉', '瑜珈墊', '彈力帶', '恢復套裝', '鋼製水樽', '健身毛巾'], ['蛋白粉', '瑜伽垫', '弹力带', '恢复套装', '钢制水壶', '健身毛巾']),
    'Order Placement': L(['Green smoothie', 'Protein shake', 'Oat bowl', 'Salad box', 'Herbal tea'], ['綠色果昔', '蛋白奶昔', '燕麥碗', '沙律盒', '花草茶'], ['绿色果昔', '蛋白奶昔', '燕麦碗', '沙拉盒', '花草茶']),
    'Web/Website': L({
      heroTitle: 'Built for your fitness journey',
      heroSub: 'A platform that runs your classes, bookings and members in one place.',
      features: [{ title: 'Easy booking', text: 'Book classes in seconds.' }, { title: 'Member tracking', text: 'Progress, attendance and payments in one place.' }, { title: 'Own-brand portal', text: 'Your club, your domain, your rules.' }]
    }, {
      heroTitle: '為您的健身旅程而建',
      heroSub: '一個平台管理您的課程、預約與會員。',
      features: [{ title: '輕鬆預約', text: '數秒完成課堂預約。' }, { title: '會員追蹤', text: '進度、出席與付款一應俱全。' }, { title: '自有門戶', text: '您的會所、您的網域、您的規則。' }]
    }, {
      heroTitle: '为您的健身旅程而建',
      heroSub: '一个平台管理您的课程、预约与会员。',
      features: [{ title: '轻松预约', text: '数秒完成课堂预约。' }, { title: '会员追踪', text: '进度、出席与付款一应俱全。' }, { title: '自有门户', text: '您的会所、您的网域、您的规则。' }]
    }),
    'Mobile App': L({
      upcoming: [{ name: 'Morning class', day: 'Sat', date: '14', time: '10:00', place: 'Central', status: 'Confirmed', tone: 'green', grad: 'linear-gradient(135deg,#EC4899,#DB2777)' }, { name: 'One-on-one', day: 'Fri', date: '20', time: '19:00', place: 'Wan Chai', status: 'Booked', tone: 'purple', grad: 'linear-gradient(135deg,#0EA5E9,#0284C7)' }],
      bookings: [{ name: 'Morning class', date: 'Sat 14 Jun', status: 'Confirmed', tone: 'green' }, { name: 'Recovery session', date: 'Tue 17 Jun', status: 'Pending', tone: 'amber' }, { name: 'Evening class', date: 'Fri 20 Jun', status: 'Confirmed', tone: 'green' }],
      transactions: [['Class pass', '+HK$880', 'in'], ['PT session', '-HK$320', 'out'], ['Referral bonus', '+HK$150', 'in']]
    }, {
      upcoming: [{ name: '上午課程', day: '六', date: '14', time: '10:00', place: '中環', status: '已確認', tone: 'green', grad: 'linear-gradient(135deg,#EC4899,#DB2777)' }, { name: '一對一', day: '五', date: '20', time: '19:00', place: '灣仔', status: '已預約', tone: 'purple', grad: 'linear-gradient(135deg,#0EA5E9,#0284C7)' }],
      bookings: [{ name: '上午課程', date: '6月14日（六）', status: '已確認', tone: 'green' }, { name: '恢復訓練', date: '6月17日（二）', status: '處理中', tone: 'amber' }, { name: '晚間課程', date: '6月20日（五）', status: '已確認', tone: 'green' }],
      transactions: [['課堂通行證', '+HK$880', 'in'], ['私教課程', '-HK$320', 'out'], ['推薦獎賞', '+HK$150', 'in']]
    }, {
      upcoming: [{ name: '上午课程', day: '六', date: '14', time: '10:00', place: '中环', status: '已确认', tone: 'green', grad: 'linear-gradient(135deg,#EC4899,#DB2777)' }, { name: '一对一', day: '五', date: '20', time: '19:00', place: '湾仔', status: '已预约', tone: 'purple', grad: 'linear-gradient(135deg,#0EA5E9,#0284C7)' }],
      bookings: [{ name: '上午课程', date: '6月14日（六）', status: '已确认', tone: 'green' }, { name: '恢复训练', date: '6月17日（二）', status: '处理中', tone: 'amber' }, { name: '晚间课程', date: '6月20日（五）', status: '已确认', tone: 'green' }],
      transactions: [['课堂通行证', '+HK$880', 'in'], ['私教课程', '-HK$320', 'out'], ['推荐奖赏', '+HK$150', 'in']]
    }),
    Attendance: L(['Morning class', 'One-on-one', 'Group workshop', 'Evening class'], ['上午班', '一對一', '小組工作坊', '晚間班'], ['上午班', '一对一', '小组工作坊', '晚间班']),
    'Visitor Management': L(['Member', 'Guest', 'Instructor', 'Interview'], ['會員', '訪客', '教練', '面試'], ['会员', '访客', '教练', '面试']),
    Inventory: L(['Yoga mat', 'Resistance band', 'Protein powder', 'Recovery set'], ['瑜珈墊', '彈力帶', '蛋白粉', '恢復套裝'], ['瑜伽垫', '弹力带', '蛋白粉', '恢复套装']),
    Logistics: L(['Central', 'Wan Chai', 'Mong Kok', 'Kwun Tong'], ['中環', '灣仔', '旺角', '觀塘'], ['中环', '湾仔', '旺角', '观塘']),
    'Data & Analytics': L(['Memberships', 'Class passes', 'PT sessions', 'Merchandise'], ['會籍', '課堂證', '私教課', '商品'], ['会籍', '课堂证', '私教课', '商品']),
    Ticketing: L(['Fitness bootcamp', 'Nutrition workshop', 'Summer retreat'], ['健身體驗營', '營養工作坊', '夏日營'], ['健身体验营', '营养工作坊', '夏日营']),
    Loyalty: L(['Free class', 'HK$50 voucher', 'Gift set'], ['免費課程', 'HK$50 禮券', '禮物套裝'], ['免费课程', 'HK$50 礼券', '礼物套装']),
  }
});

cat({
  key: 'beauty',
  product: L('Glow Beauty', '亮麗美容', '亮丽美容'),
  theme: 'pink',
  names: {
    Booking: L(['Facial treatment', 'Lash lift', 'Deep clean', 'Express glow'], ['面部護理', '睫毛翹睫', '深層清潔', '速效亮肌'], ['面部护理', '睫毛翘睫', '深层清洁', '速效亮肌']),
    Membership: L(['Glow Basic', 'Radiance', 'Luxury'], ['亮肌基本', '光采', '尊貴'], ['亮肌基本', '光采', '尊贵']),
    'Cloud System': L(['Booking portal', 'Client app', 'Treatment API', 'Payments'], ['預約入口', '客戶應用', '護理 API', '付款'], ['预约入口', '客户应用', '护理 API', '付款']),
    eCommerce: L(['Moisturising serum', 'Vitamin C cream', 'Sheet mask set', 'Gentle cleanser', 'Lip balm', 'SPF day lotion'], ['保濕精華', '維C 面霜', '面膜套裝', '溫和潔面', '潤唇膏', '防曬日霜'], ['保湿精华', '维C 面霜', '面膜套装', '温和洁面', '润唇膏', '防晒日霜']),
    'Order Placement': L(['Charcoal mask', 'Peptide serum', 'Eye gel', 'Cleansing oil', 'Toner'], ['活性碳面膜', '胜肽精華', '眼凝膠', '卸妝油', '爽膚水'], ['活性碳面膜', '胜肽精华', '眼凝胶', '卸妆油', '爽肤水']),
    'Web/Website': L({
      heroTitle: 'Your glow, our craft',
      heroSub: 'Book, track and grow your beauty business on one modern platform.',
      features: [{ title: 'Smart booking', text: 'Treatments booked in a tap.' }, { title: 'Client profiles', text: 'Skin notes, history and preferences together.' }, { title: 'Beautiful store', text: 'Sell your products with your own brand.' }]
    }, {
      heroTitle: '您的亮肌，我們的專業',
      heroSub: '在一個現代平台預約、追蹤並拓展您的美容事業。',
      features: [{ title: '智能預約', text: '一按完成護理預約。' }, { title: '客戶檔案', text: '皮膚紀錄、歷史與偏好集於一身。' }, { title: '精美商店', text: '以您的品牌銷售產品。' }]
    }, {
      heroTitle: '您的亮肌，我们的专业',
      heroSub: '在一个现代平台预约、追踪并拓展您的美容事业。',
      features: [{ title: '智能预约', text: '一按完成护理预约。' }, { title: '客户档案', text: '皮肤纪录、历史与偏好集于一身。' }, { title: '精美商店', text: '以您的品牌销售产品。' }]
    }),
    'Mobile App': L({
      upcoming: [{ name: 'Glow facial', day: 'Sat', date: '14', time: '11:00', place: 'Central', status: 'Confirmed', tone: 'green', grad: 'linear-gradient(135deg,#EC4899,#DB2777)' }, { name: 'Lash lift', day: 'Fri', date: '20', time: '15:00', place: 'CWB', status: 'Booked', tone: 'purple', grad: 'linear-gradient(135deg,#0EA5E9,#0284C7)' }],
      bookings: [{ name: 'Glow facial', date: 'Sat 14 Jun', status: 'Confirmed', tone: 'green' }, { name: 'Deep clean', date: 'Tue 17 Jun', status: 'Pending', tone: 'amber' }, { name: 'Express glow', date: 'Fri 20 Jun', status: 'Confirmed', tone: 'green' }],
      transactions: [['Signature facial', '+HK$1,280', 'in'], ['Product top-up', '-HK$340', 'out'], ['Referral bonus', '+HK$150', 'in']]
    }, {
      upcoming: [{ name: '亮肌面部護理', day: '六', date: '14', time: '11:00', place: '中環', status: '已確認', tone: 'green', grad: 'linear-gradient(135deg,#EC4899,#DB2777)' }, { name: '睫毛翹睫', day: '五', date: '20', time: '15:00', place: '銅鑼灣', status: '已預約', tone: 'purple', grad: 'linear-gradient(135deg,#0EA5E9,#0284C7)' }],
      bookings: [{ name: '亮肌面部護理', date: '6月14日（六）', status: '已確認', tone: 'green' }, { name: '深層清潔', date: '6月17日（二）', status: '處理中', tone: 'amber' }, { name: '速效亮肌', date: '6月20日（五）', status: '已確認', tone: 'green' }],
      transactions: [['旗艦面部護理', '+HK$1,280', 'in'], ['產品補購', '-HK$340', 'out'], ['推薦獎賞', '+HK$150', 'in']]
    }, {
      upcoming: [{ name: '亮肌面部护理', day: '六', date: '14', time: '11:00', place: '中环', status: '已确认', tone: 'green', grad: 'linear-gradient(135deg,#EC4899,#DB2777)' }, { name: '睫毛翘睫', day: '五', date: '20', time: '15:00', place: '铜锣湾', status: '已预约', tone: 'purple', grad: 'linear-gradient(135deg,#0EA5E9,#0284C7)' }],
      bookings: [{ name: '亮肌面部护理', date: '6月14日（六）', status: '已确认', tone: 'green' }, { name: '深层清洁', date: '6月17日（二）', status: '处理中', tone: 'amber' }, { name: '速效亮肌', date: '6月20日（五）', status: '已确认', tone: 'green' }],
      transactions: [['旗舰面部护理', '+HK$1,280', 'in'], ['产品补购', '-HK$340', 'out'], ['推荐奖赏', '+HK$150', 'in']]
    }),
    Attendance: L(['Facial room', 'Lash station', 'Deep clean bay', 'Consultations'], ['面部護理房', '睫毛工位', '深層清潔房', '諮詢室'], ['面部护理房', '睫毛工位', '深层清洁房', '咨询室']),
    'Visitor Management': L(['Client', 'Guest', 'Vendor', 'Interview'], ['客戶', '訪客', '供應商', '面試'], ['客户', '访客', '供应商', '面试']),
    Inventory: L(['Serum vials', 'Sheet masks', 'Vitamin C cream', 'Gloves & towels'], ['精華小瓶', '面膜', '維C 面霜', '手套毛巾'], ['精华小瓶', '面膜', '维C 面霜', '手套毛巾']),
    Logistics: L(['Central', 'Tsim Sha Tsui', 'Mong Kok', 'CWB'], ['中環', '尖沙咀', '旺角', '銅鑼灣'], ['中环', '尖沙咀', '旺角', '铜锣湾']),
    'Data & Analytics': L(['Facials', 'Lash services', 'Skincare sales', 'Consultations'], ['面部護理', '睫毛服務', '護膚品銷售', '諮詢'], ['面部护理', '睫毛服务', '护肤品销售', '咨询']),
    Ticketing: L(['Glow workshop', 'Skincare masterclass', 'Summer glow day'], ['亮肌工作坊', '護膚大師班', '夏日亮肌日'], ['亮肌工作坊', '护肤大师班', '夏日亮肌日']),
    Loyalty: L(['Free mini facial', 'HK$80 voucher', 'Luxury set'], ['免費迷你護理', 'HK$80 禮券', '尊貴套裝'], ['免费迷你护理', 'HK$80 礼券', '尊贵套装']),
  }
});

cat({
  key: 'dining',
  product: L('Harbour Bistro', '海港小館', '海港小馆'),
  theme: 'amber',
  names: {
    Booking: L(['Table for two', 'Window table', 'Private room', 'Chef table'], ['二人桌', '窗邊桌', '私人包廂', '主廚餐桌'], ['二人桌', '窗边桌', '私人包厢', '主厨餐桌']),
    Membership: L(['Table', 'Regular', 'VIP'], ['會員', '熟客', 'VIP'], ['会员', '熟客', 'VIP']),
    'Cloud System': L(['Reservation portal', 'POS API', 'Menu app', 'Payments'], ['訂位入口', 'POS API', '餐單應用', '付款'], ['订位入口', 'POS API', '餐单应用', '付款']),
    eCommerce: L(['Signature set', 'Seasonal set', 'Premium set', 'Lunch set', 'Bento box', 'Gift voucher'], ['招牌套餐', '時令套餐', '尊尚套餐', '午餐套餐', '便當盒', '禮券'], ['招牌套餐', '时令套餐', '尊尚套餐', '午餐套餐', '便当盒', '礼券']),
    'Order Placement': L(['Handmade dumplings', 'Wok-fried noodles', 'Braised pork', 'Fresh fish', 'Jasmine tea'], ['手工水餃', '炒麵', '紅燒肉', '鮮魚', '茉莉花茶'], ['手工水饺', '炒面', '红烧肉', '鲜鱼', '茉莉花茶']),
    'Web/Website': L({
      heroTitle: 'Great food, seamless service',
      heroSub: 'Manage reservations, orders and takeaway from one platform.',
      features: [{ title: 'Table booking', text: 'Reservations that never double-book.' }, { title: 'Quick ordering', text: 'Kitchen tickets in seconds.' }, { title: 'Takeaway ready', text: 'Online orders, ready on time.' }]
    }, {
      heroTitle: '美食與順暢服務並存',
      heroSub: '以單一平台管理訂位、點餐與外賣。',
      features: [{ title: '餐桌訂位', text: '訂位絕不重複。' }, { title: '快速點餐', text: '廚房單數秒送達。' }, { title: '外賣就緒', text: '網上訂單準時備妥。' }]
    }, {
      heroTitle: '美食与顺畅服务并存',
      heroSub: '以单一平台管理订位、点餐与外卖。',
      features: [{ title: '餐桌订位', text: '订位绝不重复。' }, { title: '快速点餐', text: '厨房单数秒送达。' }, { title: '外卖就绪', text: '网上订单准时备妥。' }]
    }),
    'Mobile App': L({
      upcoming: [{ name: 'Dinner service', day: 'Sat', date: '14', time: '18:00', place: 'Harbour View', status: 'Confirmed', tone: 'green', grad: 'linear-gradient(135deg,#EC4899,#DB2777)' }, { name: 'Private dinner', day: 'Fri', date: '20', time: '19:30', place: 'Lounge', status: 'Booked', tone: 'purple', grad: 'linear-gradient(135deg,#0EA5E9,#0284C7)' }],
      bookings: [{ name: 'Dinner service', date: 'Sat 14 Jun', status: 'Confirmed', tone: 'green' }, { name: 'Lunch set', date: 'Tue 17 Jun', status: 'Pending', tone: 'amber' }, { name: 'Chef table', date: 'Fri 20 Jun', status: 'Confirmed', tone: 'green' }],
      transactions: [['Dinner set', '+HK$1,680', 'in'], ['Wine pairing', '-HK$480', 'out'], ['Seasonal promo', '+HK$280', 'in']]
    }, {
      upcoming: [{ name: '晚餐時段', day: '六', date: '14', time: '18:00', place: '海景廳', status: '已確認', tone: 'green', grad: 'linear-gradient(135deg,#EC4899,#DB2777)' }, { name: '私人晚宴', day: '五', date: '20', time: '19:30', place: '酒廊', status: '已預約', tone: 'purple', grad: 'linear-gradient(135deg,#0EA5E9,#0284C7)' }],
      bookings: [{ name: '晚餐時段', date: '6月14日（六）', status: '已確認', tone: 'green' }, { name: '午餐套餐', date: '6月17日（二）', status: '處理中', tone: 'amber' }, { name: '主廚餐桌', date: '6月20日（五）', status: '已確認', tone: 'green' }],
      transactions: [['晚餐套餐', '+HK$1,680', 'in'], ['餐酒配對', '-HK$480', 'out'], ['季節推廣', '+HK$280', 'in']]
    }, {
      upcoming: [{ name: '晚餐时段', day: '六', date: '14', time: '18:00', place: '海景厅', status: '已确认', tone: 'green', grad: 'linear-gradient(135deg,#EC4899,#DB2777)' }, { name: '私人晚宴', day: '五', date: '20', time: '19:30', place: '酒廊', status: '已预约', tone: 'purple', grad: 'linear-gradient(135deg,#0EA5E9,#0284C7)' }],
      bookings: [{ name: '晚餐时段', date: '6月14日（六）', status: '已确认', tone: 'green' }, { name: '午餐套餐', date: '6月17日（二）', status: '处理中', tone: 'amber' }, { name: '主厨餐桌', date: '6月20日（五）', status: '已确认', tone: 'green' }],
      transactions: [['晚餐套餐', '+HK$1,680', 'in'], ['餐酒配对', '-HK$480', 'out'], ['季节推广', '+HK$280', 'in']]
    }),
    Attendance: L(['Lunch service', 'Tea service', 'Dinner service', 'Late dinner'], ['午市', '下午茶時段', '晚市', '深夜時段'], ['午市', '下午茶时段', '晚市', '深夜时段']),
    'Visitor Management': L(['Diner', 'Guest', 'Supplier', 'Interview'], ['食客', '訪客', '供應商', '面試'], ['食客', '访客', '供应商', '面试']),
    Inventory: L(['Fresh fish', 'Pork belly', 'Handmade noodles', 'House sauces'], ['鮮魚', '五花腩', '手工麵', '秘製醬汁'], ['鲜鱼', '五花腩', '手工面', '秘制酱汁']),
    Logistics: L(['Central', 'Admiralty', 'Wan Chai', 'Mong Kok'], ['中環', '金鐘', '灣仔', '旺角'], ['中环', '金钟', '湾仔', '旺角']),
    'Data & Analytics': L(['Dinner sets', 'Lunch sets', 'Takeaway', 'Wine sales'], ['晚餐套餐', '午餐套餐', '外賣', '餐酒銷售'], ['晚餐套餐', '午餐套餐', '外卖', '餐酒销售']),
    Ticketing: L(['Tasting night', 'Wine dinner', 'Dim sum masterclass'], ['品嚐之夜', '餐酒晚宴', '點心大師班'], ['品尝之夜', '餐酒晚宴', '点心大师班']),
    Loyalty: L(['Free dessert', 'HK$100 voucher', 'Chef menu'], ['免費甜品', 'HK$100 禮券', '主廚菜單'], ['免费甜品', 'HK$100 礼券', '主厨菜单']),
  }
});

cat({
  key: 'cafe',
  product: L('Bean & Brew', '咖啡豆烘焙', '咖啡豆烘焙'),
  theme: 'brown',
  names: {
    Booking: L(['Barista class', 'Cupping session', 'Roasting tour', 'Private brew'], ['咖啡師課程', '杯測會', '烘焙導覽', '私人沖煮'], ['咖啡师课程', '杯测会', '烘焙导览', '私人冲煮']),
    Membership: L(['Regular', 'Bean Club', 'Roastery'], ['會員', '咖啡豆會', '烘焙廠'], ['会员', '咖啡豆会', '烘焙厂']),
    'Cloud System': L(['Roastery portal', 'Order API', 'Loyalty app', 'Payments'], ['烘焙廠入口', '訂單 API', '會員應用', '付款'], ['烘焙厂入口', '订单 API', '会员应用', '付款']),
    eCommerce: L(['House blend beans', 'Single origin', 'Cold brew pack', 'Brew kit', 'Ceramic mug', 'Coffee gift box'], ['自家拼配豆', '單一產地', '冷萃包', '沖煮套裝', '陶瓷杯', '咖啡禮盒'], ['自家拼配豆', '单一产地', '冷萃包', '冲煮套装', '陶瓷杯', '咖啡礼盒']),
    'Order Placement': L(['Flat white', 'Pour over', 'Iced latte', 'Butter croissant', 'Matcha latte'], ['鮮奶咖啡', '手沖咖啡', '凍拿鐵', '牛角包', '抹茶拿鐵'], ['鲜奶咖啡', '手冲咖啡', '冻拿铁', '牛角包', '抹茶拿铁']),
    'Web/Website': L({
      heroTitle: 'Crafted coffee, modern service',
      heroSub: 'Take orders, grow loyalty and roast smarter with one platform.',
      features: [{ title: 'Fast ordering', text: 'Queue-free mobile orders.' }, { title: 'Loyalty built-in', text: 'Reward your regulars automatically.' }, { title: 'Roastery insights', text: 'Track beans and batches end to end.' }]
    }, {
      heroTitle: '精心咖啡，現代服務',
      heroSub: '以單一平台接單、累積會員並精明烘焙。',
      features: [{ title: '快速下單', text: '手機下單免排隊。' }, { title: '內建會員制度', text: '自動獎勵常客。' }, { title: '烘焙數據', text: '全程追蹤咖啡豆與批次。' }]
    }, {
      heroTitle: '精心咖啡，现代服务',
      heroSub: '以单一平台接单、累积会员并精明烘焙。',
      features: [{ title: '快速下单', text: '手机下单免排队。' }, { title: '内建会员制度', text: '自动奖励常客。' }, { title: '烘焙数据', text: '全程追踪咖啡豆与批次。' }]
    }),
    'Mobile App': L({
      upcoming: [{ name: 'Cupping session', day: 'Sat', date: '14', time: '09:00', place: 'Roastery', status: 'Confirmed', tone: 'green', grad: 'linear-gradient(135deg,#EC4899,#DB2777)' }, { name: 'Barista class', day: 'Fri', date: '20', time: '14:00', place: 'Main Shop', status: 'Booked', tone: 'purple', grad: 'linear-gradient(135deg,#0EA5E9,#0284C7)' }],
      bookings: [{ name: 'Cupping session', date: 'Sat 14 Jun', status: 'Confirmed', tone: 'green' }, { name: 'Roasting tour', date: 'Tue 17 Jun', status: 'Pending', tone: 'amber' }, { name: 'Private brew', date: 'Fri 20 Jun', status: 'Confirmed', tone: 'green' }],
      transactions: [['Beans subscription', '+HK$268', 'in'], ['Equipment', '-HK$520', 'out'], ['Brew club bonus', '+HK$60', 'in']]
    }, {
      upcoming: [{ name: '杯測會', day: '六', date: '14', time: '09:00', place: '烘焙廠', status: '已確認', tone: 'green', grad: 'linear-gradient(135deg,#EC4899,#DB2777)' }, { name: '咖啡師課程', day: '五', date: '20', time: '14:00', place: '旗艦店', status: '已預約', tone: 'purple', grad: 'linear-gradient(135deg,#0EA5E9,#0284C7)' }],
      bookings: [{ name: '杯測會', date: '6月14日（六）', status: '已確認', tone: 'green' }, { name: '烘焙導覽', date: '6月17日（二）', status: '處理中', tone: 'amber' }, { name: '私人沖煮', date: '6月20日（五）', status: '已確認', tone: 'green' }],
      transactions: [['咖啡豆訂閱', '+HK$268', 'in'], ['器具', '-HK$520', 'out'], ['沖煮會獎賞', '+HK$60', 'in']]
    }, {
      upcoming: [{ name: '杯测会', day: '六', date: '14', time: '09:00', place: '烘焙厂', status: '已确认', tone: 'green', grad: 'linear-gradient(135deg,#EC4899,#DB2777)' }, { name: '咖啡师课程', day: '五', date: '20', time: '14:00', place: '旗舰店', status: '已预约', tone: 'purple', grad: 'linear-gradient(135deg,#0EA5E9,#0284C7)' }],
      bookings: [{ name: '杯测会', date: '6月14日（六）', status: '已确认', tone: 'green' }, { name: '烘焙导览', date: '6月17日（二）', status: '处理中', tone: 'amber' }, { name: '私人冲煮', date: '6月20日（五）', status: '已确认', tone: 'green' }],
      transactions: [['咖啡豆订阅', '+HK$268', 'in'], ['器具', '-HK$520', 'out'], ['冲煮会奖赏', '+HK$60', 'in']]
    }),
    Attendance: L(['Morning shift', 'Midday shift', 'Cupping club', 'Evening shift'], ['早班', '午班', '杯測會', '晚班'], ['早班', '午班', '杯测会', '晚班']),
    'Visitor Management': L(['Customer', 'Guest', 'Roaster', 'Interview'], ['顧客', '訪客', '烘焙師', '面試'], ['顾客', '访客', '烘焙师', '面试']),
    Inventory: L(['House blend', 'Single origin', 'Milk cartons', 'Paper cups'], ['自家拼配', '單一產地豆', '鮮奶', '紙杯'], ['自家拼配', '单一产地豆', '鲜奶', '纸杯']),
    Logistics: L(['Sheung Wan', 'TST', 'Kwun Tong', 'Shatin'], ['上環', '尖沙咀', '觀塘', '沙田'], ['上环', '尖沙咀', '观塘', '沙田']),
    'Data & Analytics': L(['Beverages', 'Beans sales', 'Pastries', 'Merch'], ['飲品', '咖啡豆', '糕點', '周邊'], ['饮品', '咖啡豆', '糕点', '周边']),
    Ticketing: L(['Latte art class', 'Brewing workshop', 'Bean festival'], ['拉花課程', '沖煮工作坊', '咖啡豆節'], ['拉花课程', '冲煮工作坊', '咖啡豆节']),
    Loyalty: L(['Free coffee', 'HK$40 voucher', 'Brew kit'], ['免費咖啡', 'HK$40 禮券', '沖煮套裝'], ['免费咖啡', 'HK$40 礼券', '冲煮套装']),
  }
});

cat({
  key: 'gym',
  product: L('IronWorks Gym', '鐵鑄健身', '铁铸健身'),
  theme: 'red',
  names: {
    Booking: L(['Strength session', 'HIIT class', 'PT consult', 'Spa & sauna'], ['力量訓練', 'HIIT 課程', '教練諮詢', '水療桑拿'], ['力量训练', 'HIIT 课程', '教练咨询', '水疗桑拿']),
    Membership: L(['Day Pass', 'Monthly', 'Annual'], ['日票', '月費', '年費'], ['日票', '月费', '年费']),
    'Cloud System': L(['Gym portal', 'Access API', 'PT app', 'Payments'], ['健身室入口', '門禁 API', '教練應用', '付款'], ['健身室入口', '门禁 API', '教练应用', '付款']),
    eCommerce: L(['Pre-workout', 'Lifting belt', 'Shaker bottle', 'Lifting straps', 'Gym T-shirt', 'Grip gloves'], ['訓練前配方', '舉重腰帶', '搖搖杯', '助力帶', '健身T恤', '防滑手套'], ['训练前配方', '举重腰带', '摇摇杯', '助力带', '健身T恤', '防滑手套']),
    'Order Placement': L(['Chicken & rice', 'Protein shake', 'Sweet potato', 'Greek yogurt', 'Isotonic drink'], ['雞肉糙米飯', '蛋白奶昔', '番薯', '希臘乳酪', '運動飲品'], ['鸡肉糙米饭', '蛋白奶昔', '番薯', '希腊乳酪', '运动饮品']),
    'Web/Website': L({
      heroTitle: 'Train harder, run smarter',
      heroSub: 'Membership, classes and coaching on a single platform.',
      features: [{ title: 'Class booking', text: 'Reserve your spot instantly.' }, { title: 'Access control', text: 'Secure entry with member passes.' }, { title: 'Coach tools', text: 'Plan sessions and track progress.' }]
    }, {
      heroTitle: '練得更狠，管理更精明',
      heroSub: '會籍、課程與教練於單一平台管理。',
      features: [{ title: '課程預約', text: '即時預留名額。' }, { title: '門禁管理', text: '會員通行證安全進場。' }, { title: '教練工具', text: '規劃課堂與追蹤進度。' }]
    }, {
      heroTitle: '练得更狠，管理更精明',
      heroSub: '会籍、课程与教练于单一平台管理。',
      features: [{ title: '课程预约', text: '即时预留名额。' }, { title: '门禁管理', text: '会员通行证安全进场。' }, { title: '教练工具', text: '规划课堂与追踪进度。' }]
    }),
    'Mobile App': L({
      upcoming: [{ name: 'Strength session', day: 'Sat', date: '14', time: '08:00', place: 'Iron Hall', status: 'Confirmed', tone: 'green', grad: 'linear-gradient(135deg,#EC4899,#DB2777)' }, { name: 'HIIT class', day: 'Fri', date: '20', time: '18:30', place: 'Studio B', status: 'Booked', tone: 'purple', grad: 'linear-gradient(135deg,#0EA5E9,#0284C7)' }],
      bookings: [{ name: 'Strength session', date: 'Sat 14 Jun', status: 'Confirmed', tone: 'green' }, { name: 'PT consult', date: 'Tue 17 Jun', status: 'Pending', tone: 'amber' }, { name: 'Spa & sauna', date: 'Fri 20 Jun', status: 'Confirmed', tone: 'green' }],
      transactions: [['Annual membership', '+HK$4,800', 'in'], ['PT pack', '-HK$1,200', 'out'], ['Referral bonus', '+HK$200', 'in']]
    }, {
      upcoming: [{ name: '力量訓練', day: '六', date: '14', time: '08:00', place: '鐵鑄館', status: '已確認', tone: 'green', grad: 'linear-gradient(135deg,#EC4899,#DB2777)' }, { name: 'HIIT 課程', day: '五', date: '20', time: '18:30', place: 'B 教室', status: '已預約', tone: 'purple', grad: 'linear-gradient(135deg,#0EA5E9,#0284C7)' }],
      bookings: [{ name: '力量訓練', date: '6月14日（六）', status: '已確認', tone: 'green' }, { name: '教練諮詢', date: '6月17日（二）', status: '處理中', tone: 'amber' }, { name: '水療桑拿', date: '6月20日（五）', status: '已確認', tone: 'green' }],
      transactions: [['年費會籍', '+HK$4,800', 'in'], ['教練套票', '-HK$1,200', 'out'], ['推薦獎賞', '+HK$200', 'in']]
    }, {
      upcoming: [{ name: '力量训练', day: '六', date: '14', time: '08:00', place: '铁铸馆', status: '已确认', tone: 'green', grad: 'linear-gradient(135deg,#EC4899,#DB2777)' }, { name: 'HIIT 课程', day: '五', date: '20', time: '18:30', place: 'B 教室', status: '已预约', tone: 'purple', grad: 'linear-gradient(135deg,#0EA5E9,#0284C7)' }],
      bookings: [{ name: '力量训练', date: '6月14日（六）', status: '已确认', tone: 'green' }, { name: '教练咨询', date: '6月17日（二）', status: '处理中', tone: 'amber' }, { name: '水疗桑拿', date: '6月20日（五）', status: '已确认', tone: 'green' }],
      transactions: [['年费会籍', '+HK$4,800', 'in'], ['教练套票', '-HK$1,200', 'out'], ['推荐奖赏', '+HK$200', 'in']]
    }),
    Attendance: L(['Strength zone', 'HIIT studio', 'Group class', 'Open gym'], ['力量區', 'HIIT 教室', '團體課', '開放健身區'], ['力量区', 'HIIT 教室', '团体课', '开放健身区']),
    'Visitor Management': L(['Member', 'Day pass', 'Coach', 'Interview'], ['會員', '日票', '教練', '面試'], ['会员', '日票', '教练', '面试']),
    Inventory: L(['Lifting belts', 'Straps', 'Pre-workout', 'Towels'], ['舉重腰帶', '助力帶', '訓練前配方', '毛巾'], ['举重腰带', '助力带', '训练前配方', '毛巾']),
    Logistics: L(['Mong Kok', 'Kwun Tong', 'CWB', 'Shatin'], ['旺角', '觀塘', '銅鑼灣', '沙田'], ['旺角', '观塘', '铜锣湾', '沙田']),
    'Data & Analytics': L(['Memberships', 'Class packs', 'PT hours', 'Supplements'], ['會籍', '課堂套票', '教練時數', '營養品'], ['会籍', '课堂套票', '教练时数', '营养品']),
    Ticketing: L(['Strength challenge', 'Bootcamp day', 'Summer camp'], ['力量挑戰賽', '訓練營日', '夏令營'], ['力量挑战赛', '训练营日', '夏令营']),
    Loyalty: L(['Free day pass', 'HK$60 voucher', 'Gym gear'], ['免費日票', 'HK$60 禮券', '健身裝備'], ['免费日票', 'HK$60 礼券', '健身装备']),
  }
});

cat({
  key: 'clinic',
  product: L('Caring Clinic', '關懷診所', '关怀诊所'),
  theme: 'teal',
  names: {
    Booking: L(['GP consultation', 'Specialist referral', 'Health check', 'Vaccination'], ['普通科門診', '專科轉介', '身體檢查', '疫苗接種'], ['普通科门诊', '专科转介', '身体检查', '疫苗接种']),
    Membership: L(['Standard', 'Family', 'Corporate'], ['標準', '家庭', '企業'], ['标准', '家庭', '企业']),
    'Cloud System': L(['Patient portal', 'Records API', 'Nurse app', 'Payments'], ['病人入口', '病歷 API', '護士應用', '付款'], ['病人入口', '病历 API', '护士应用', '付款']),
    eCommerce: L(['Vitamin D3', 'Omega-3', 'Probiotics', 'First aid kit', 'Pulse oximeter', 'Thermometer'], ['維他命 D3', '奧米加3', '益生菌', '急救包', '血氧儀', '體溫計'], ['维他命 D3', '奥米加3', '益生菌', '急救包', '血氧仪', '体温计']),
    'Order Placement': L(['Cough syrup', 'Pain relief', 'Allergy meds', 'Vitamin pack', 'Medical mask'], ['止咳藥水', '止痛藥', '抗敏藥', '維他命組合', '醫用口罩'], ['止咳药水', '止痛药', '抗敏药', '维他命组合', '医用口罩']),
    'Web/Website': L({
      heroTitle: 'Care that keeps everyone healthy',
      heroSub: 'Bookings, records and follow-ups, organised in one place.',
      features: [{ title: 'Easy appointments', text: 'Book a slot in seconds.' }, { title: 'Secure records', text: 'Patient data, encrypted and private.' }, { title: 'Smart reminders', text: 'Follow-ups that never get missed.' }]
    }, {
      heroTitle: '守護每個人健康的照護',
      heroSub: '預約、病歷與跟進，盡在一處。',
      features: [{ title: '輕鬆預約', text: '數秒完成掛號。' }, { title: '安全病歷', text: '病人資料加密私隱。' }, { title: '智能提醒', text: '跟進提醒絕不錯過。' }]
    }, {
      heroTitle: '守护每个人健康的照护',
      heroSub: '预约、病历与跟进，尽在一处。',
      features: [{ title: '轻松预约', text: '数秒完成挂号。' }, { title: '安全病历', text: '病人资料加密私隐。' }, { title: '智能提醒', text: '跟进提醒绝不错过。' }]
    }),
    'Mobile App': L({
      upcoming: [{ name: 'GP consultation', day: 'Sat', date: '14', time: '09:30', place: 'Room 3', status: 'Confirmed', tone: 'green', grad: 'linear-gradient(135deg,#EC4899,#DB2777)' }, { name: 'Health check', day: 'Fri', date: '20', time: '11:00', place: 'Lab', status: 'Booked', tone: 'purple', grad: 'linear-gradient(135deg,#0EA5E9,#0284C7)' }],
      bookings: [{ name: 'GP consultation', date: 'Sat 14 Jun', status: 'Confirmed', tone: 'green' }, { name: 'Vaccination', date: 'Tue 17 Jun', status: 'Pending', tone: 'amber' }, { name: 'Health check', date: 'Fri 20 Jun', status: 'Confirmed', tone: 'green' }],
      transactions: [['Consultation', '+HK$420', 'in'], ['Prescription', '-HK$180', 'out'], ['Insurance claim', '+HK$1,200', 'in']]
    }, {
      upcoming: [{ name: '普通科門診', day: '六', date: '14', time: '09:30', place: '3號診症室', status: '已確認', tone: 'green', grad: 'linear-gradient(135deg,#EC4899,#DB2777)' }, { name: '身體檢查', day: '五', date: '20', time: '11:00', place: '化驗室', status: '已預約', tone: 'purple', grad: 'linear-gradient(135deg,#0EA5E9,#0284C7)' }],
      bookings: [{ name: '普通科門診', date: '6月14日（六）', status: '已確認', tone: 'green' }, { name: '疫苗接種', date: '6月17日（二）', status: '處理中', tone: 'amber' }, { name: '身體檢查', date: '6月20日（五）', status: '已確認', tone: 'green' }],
      transactions: [['診症費', '+HK$420', 'in'], ['處方藥', '-HK$180', 'out'], ['保險理賠', '+HK$1,200', 'in']]
    }, {
      upcoming: [{ name: '普通科门诊', day: '六', date: '14', time: '09:30', place: '3号诊症室', status: '已确认', tone: 'green', grad: 'linear-gradient(135deg,#EC4899,#DB2777)' }, { name: '身体检查', day: '五', date: '20', time: '11:00', place: '化验室', status: '已预约', tone: 'purple', grad: 'linear-gradient(135deg,#0EA5E9,#0284C7)' }],
      bookings: [{ name: '普通科门诊', date: '6月14日（六）', status: '已确认', tone: 'green' }, { name: '疫苗接种', date: '6月17日（二）', status: '处理中', tone: 'amber' }, { name: '身体检查', date: '6月20日（五）', status: '已确认', tone: 'green' }],
      transactions: [['诊症费', '+HK$420', 'in'], ['处方药', '-HK$180', 'out'], ['保险理赔', '+HK$1,200', 'in']]
    }),
    Attendance: L(['GP clinic', 'Specialist clinic', 'Vaccination room', 'Health check'], ['普通科', '專科', '疫苗室', '身體檢查'], ['普通科', '专科', '疫苗室', '身体检查']),
    'Visitor Management': L(['Patient', 'Visitor', 'Supplier', 'Interview'], ['病人', '訪客', '供應商', '面試'], ['病人', '访客', '供应商', '面试']),
    Inventory: L(['Paracetamol', 'Bandages', 'Vitamins', 'Syringes'], ['撲熱息痛', '繃帶', '維他命', '針筒'], ['扑热息痛', '绷带', '维他命', '针筒']),
    Logistics: L(['Central', 'Admiralty', 'TST', 'MK'], ['中環', '金鐘', '尖沙咀', '旺角'], ['中环', '金钟', '尖沙咀', '旺角']),
    'Data & Analytics': L(['Consultations', 'Health checks', 'Vaccinations', 'Pharmacy sales'], ['診症', '身體檢查', '疫苗', '藥房銷售'], ['诊症', '身体检查', '疫苗', '药房销售']),
    Ticketing: L(['Wellness seminar', 'Health screening day', 'Vaccine drive'], ['健康講座', '健康篩查日', '疫苗接種日'], ['健康讲座', '健康筛查日', '疫苗接种日']),
    Loyalty: L(['Free check-up', 'HK$100 voucher', 'Wellness pack'], ['免費檢查', 'HK$100 禮券', '健康套裝'], ['免费检查', 'HK$100 礼券', '健康套装']),
  }
});
cat({
  key: 'education',
  product: L('Bright Academy', '明光學院', '明光学院'),
  theme: 'blue',
  names: {
    Booking: L(['Math tutorial', 'Language class', 'Exam prep', 'Homework club'], ['數學補習', '語言班', '考試操練', '功課輔導班'], ['数学补习', '语言班', '考试操练', '功课辅导班']),
    Membership: L(['Basic', 'Scholar', 'Plus'], ['基本', '學員', '進階'], ['基本', '学员', '进阶']),
    'Cloud System': L(['Student portal', 'Gradebook API', 'Tutor app', 'Payments'], ['學生入口', '成績表 API', '導師應用', '付款'], ['学生入口', '成绩表 API', '导师应用', '付款']),
    eCommerce: L(['Workbook set', 'Flashcards', 'Practice tests', 'Reading pack', 'Calculator', 'Notebook bundle'], ['練習冊套裝', '生字卡', '模擬試題', '閱讀套裝', '計算機', '筆記簿組合'], ['练习册套装', '生字卡', '模拟试题', '阅读套装', '计算机', '笔记簿组合']),
    'Order Placement': L(['Tutor booking', 'Practice pack', 'Study guide', 'Model test', 'Workshop seat'], ['導師預約', '練習套裝', '溫習指南', '模擬測驗', '工作坊名額'], ['导师预约', '练习套装', '温习指南', '模拟测验', '工作坊名额']),
    'Web/Website': L({
      heroTitle: 'Learning that sticks',
      heroSub: 'Run classes, track progress and engage parents on one platform.',
      features: [{ title: 'Class scheduling', text: 'Timetables that just work.' }, { title: 'Progress reports', text: 'Grades and notes in one view.' }, { title: 'Parent portal', text: 'Families stay in the loop.' }]
    }, {
      heroTitle: '讓學習更扎實',
      heroSub: '在單一平台開課、追蹤進度並聯繫家長。',
      features: [{ title: '課程編排', text: '時間表運作自如。' }, { title: '進度報告', text: '成績與評語一目了然。' }, { title: '家長入口', text: '家長時刻掌握進度。' }]
    }, {
      heroTitle: '让学习更扎实',
      heroSub: '在单一平台开课、追踪进度并联系家长。',
      features: [{ title: '课程编排', text: '时间表运作自如。' }, { title: '进度报告', text: '成绩与评语一目了然。' }, { title: '家长入口', text: '家长时刻掌握进度。' }]
    }),
    'Mobile App': L({ up: ['Math tutorial', 'Exam prep'], bk: ['Math tutorial', 'Language class', 'Exam prep'], tx: ['Tuition fee', 'Exam pack', 'Referral bonus'] }, { up: ['數學補習', '考試操練'], bk: ['數學補習', '語言班', '考試操練'], tx: ['學費', '試題套裝', '推薦獎賞'] }, { up: ['数学补习', '考试操练'], bk: ['数学补习', '语言班', '考试操练'], tx: ['学费', '试题套装', '推荐奖赏'] }),
    Attendance: L(['Math class', 'Language class', 'Exam prep', 'Homework club'], ['數學班', '語言班', '考試班', '功課班'], ['数学班', '语言班', '考试班', '功课班']),
    'Visitor Management': L(['Student', 'Parent', 'Tutor', 'Interview'], ['學生', '家長', '導師', '面試'], ['学生', '家长', '导师', '面试']),
    Inventory: L(['Workbooks', 'Flashcards', 'Model tests', 'Stationery'], ['練習冊', '生字卡', '模擬試題', '文具'], ['练习册', '生字卡', '模拟试题', '文具']),
    Logistics: L(['Kowloon Bay', 'TST', 'Mong Kok', 'Shatin'], ['九龍灣', '尖沙咀', '旺角', '沙田'], ['九龙湾', '尖沙咀', '旺角', '沙田']),
    'Data & Analytics': L(['Tutorials', 'Language classes', 'Exam prep', 'Materials'], ['補習課', '語言班', '考試操練', '教材'], ['补习课', '语言班', '考试操练', '教材']),
    Ticketing: L(['Science workshop', 'Writing camp', 'Mock exam day'], ['科學工作坊', '寫作營', '模擬考試日'], ['科学工作坊', '写作营', '模拟考试日']),
    Loyalty: L(['Free workbook', 'HK$50 voucher', 'Study set'], ['免費練習冊', 'HK$50 禮券', '溫習套裝'], ['免费练习册', 'HK$50 礼券', '温习套装']),
  }
});

cat({
  key: 'retail',
  product: L('Urban Market', '都市市集', '都市市集'),
  theme: 'purple',
  names: {
    Booking: L(['Shopping assistant', 'Click & collect', 'Try-on session', 'Style consult'], ['購物助理', '網購店取', '試穿時段', '造型諮詢'], ['购物助理', '网购店取', '试穿时段', '造型咨询']),
    Membership: L(['Member', 'Plus', 'VIP'], ['會員', 'Plus', 'VIP'], ['会员', 'Plus', 'VIP']),
    'Cloud System': L(['Store portal', 'POS API', 'Loyalty app', 'Payments'], ['門市入口', 'POS API', '會員應用', '付款'], ['门市入口', 'POS API', '会员应用', '付款']),
    eCommerce: L(['Cotton tee', 'Denim jeans', 'Canvas tote', 'Sun hat', 'Scarf', 'Sunglasses'], ['純棉T恤', '牛仔褲', '帆布袋', '太陽帽', '絲巾', '太陽眼鏡'], ['纯棉T恤', '牛仔裤', '帆布袋', '太阳帽', '丝巾', '太阳眼镜']),
    'Order Placement': L(['Fresh juice', 'Pastry box', 'Coffee', 'Salad wrap', 'Soup cup'], ['鮮榨果汁', '糕點盒', '咖啡', '沙律捲', '杯裝湯'], ['鲜榨果汁', '糕点盒', '咖啡', '沙律卷', '杯装汤']),
    'Web/Website': L({
      heroTitle: 'Shop local, run global',
      heroSub: 'POS, loyalty and online sales working as one.',
      features: [{ title: 'Unified POS', text: 'Store and online in sync.' }, { title: 'Smart loyalty', text: 'Reward repeat customers.' }, { title: 'Click & collect', text: 'Online orders, ready in store.' }]
    }, {
      heroTitle: '本地購物，環球營運',
      heroSub: 'POS、會員與網上銷售合一。',
      features: [{ title: '統一 POS', text: '門市與網上同步。' }, { title: '精明會員', text: '獎勵回頭客。' }, { title: '網購店取', text: '網上訂單店內備妥。' }]
    }, {
      heroTitle: '本地购物，环球营运',
      heroSub: 'POS、会员与网上销售合一。',
      features: [{ title: '统一 POS', text: '门市与网上同步。' }, { title: '精明会员', text: '奖励回头客。' }, { title: '网购店取', text: '网上订单店内备妥。' }]
    }),
    'Mobile App': L({ up: ['Style consult', 'Try-on session'], bk: ['Style consult', 'Shopping assistant', 'Try-on session'], tx: ['Store sale', 'Returns', 'Referral bonus'] }, { up: ['造型諮詢', '試穿時段'], bk: ['造型諮詢', '購物助理', '試穿時段'], tx: ['門市銷售', '退貨', '推薦獎賞'] }, { up: ['造型咨询', '试穿时段'], bk: ['造型咨询', '购物助理', '试穿时段'], tx: ['门市销售', '退货', '推荐奖赏'] }),
    Attendance: L(['Store team', 'Online orders', 'Loyalty desk', 'Fitting room'], ['門市團隊', '網上訂單', '會員櫃枱', '試身室'], ['门市团队', '网上订单', '会员柜台', '试身室']),
    'Visitor Management': L(['Customer', 'Guest', 'Supplier', 'Interview'], ['顧客', '訪客', '供應商', '面試'], ['顾客', '访客', '供应商', '面试']),
    Inventory: L(['T-shirts', 'Jeans', 'Tote bags', 'Sunglasses'], ['T恤', '牛仔褲', '帆布袋', '太陽眼鏡'], ['T恤', '牛仔裤', '帆布袋', '太阳眼镜']),
    Logistics: L(['Central', 'TST', 'Mong Kok', 'CWB'], ['中環', '尖沙咀', '旺角', '銅鑼灣'], ['中环', '尖沙咀', '旺角', '铜锣湾']),
    'Data & Analytics': L(['Apparel', 'Accessories', 'Footwear', 'Home goods'], ['服裝', '配飾', '鞋履', '家居用品'], ['服装', '配饰', '鞋履', '家居用品']),
    Ticketing: L(['Warehouse sale', 'Fashion show', 'VIP preview night'], ['倉儲特賣', '時裝展', 'VIP 預覽夜'], ['仓储特卖', '时装展', 'VIP 预览夜']),
    Loyalty: L(['Free tote', 'HK$80 voucher', 'VIP pack'], ['免費帆布袋', 'HK$80 禮券', 'VIP 套裝'], ['免费帆布袋', 'HK$80 礼券', 'VIP 套装']),
  }
});

cat({
  key: 'ecommerce',
  product: L('Nimbus Store', '雲端商店', '云端商店'),
  theme: 'cyan',
  names: {
    Booking: L(['Express delivery', 'Scheduled delivery', 'Try-on box', 'Pickup slot'], ['特快送貨', '指定時段送貨', '試穿盒', '自取時段'], ['特快送货', '指定时段送货', '试穿盒', '自取时段']),
    Membership: L(['Free', 'Plus', 'Pro'], ['免費', 'Plus', 'Pro'], ['免费', 'Plus', 'Pro']),
    'Cloud System': L(['Shop portal', 'Catalog API', 'Fulfilment app', 'Payments'], ['商店入口', '商品目錄 API', '出貨應用', '付款'], ['商店入口', '商品目录 API', '出货应用', '付款']),
    eCommerce: L(['Cloud backpack', 'Wireless charger', 'Desk lamp', 'Travel pouch', 'Fitness band', 'Water flosser'], ['雲朵背包', '無線充電器', '檯燈', '旅行收納袋', '智能手環', '沖牙器'], ['云朵背包', '无线充电器', '台灯', '旅行收纳袋', '智能手环', '冲牙器']),
    'Order Placement': L(['Priority box', 'Starter bundle', 'Family pack', 'Gift set', 'Add-on item'], ['優先組合', '入門套裝', '家庭組合', '禮物套裝', '附加商品'], ['优先组合', '入门套装', '家庭组合', '礼物套装', '附加商品']),
    'Web/Website': L({
      heroTitle: 'Your brand, on every screen',
      heroSub: 'Sell anywhere with a storefront built for growth.',
      features: [{ title: 'Sell anywhere', text: 'Web, mobile and social channels.' }, { title: 'Smart fulfilment', text: 'Orders shipped on time, every time.' }, { title: 'Conversion tools', text: 'Discounts, bundles and more.' }]
    }, {
      heroTitle: '您的品牌，處處呈現',
      heroSub: '以一個專為增長而建的商店，隨處銷售。',
      features: [{ title: '隨處銷售', text: '網頁、手機與社交平台。' }, { title: '精明出貨', text: '訂單準時出貨。' }, { title: '轉換工具', text: '折扣、套裝與更多。' }]
    }, {
      heroTitle: '您的品牌，处处呈现',
      heroSub: '以一个专为增长而建的商店，随处销售。',
      features: [{ title: '随处销售', text: '网页、手机与社交平台。' }, { title: '精明出货', text: '订单准时出货。' }, { title: '转换工具', text: '折扣、套装与更多。' }]
    }),
    'Mobile App': L({ up: ['Express delivery', 'Try-on box'], bk: ['Express delivery', 'Scheduled delivery', 'Pickup slot'], tx: ['Online order', 'Return refund', 'Cashback'] }, { up: ['特快送貨', '試穿盒'], bk: ['特快送貨', '指定時段送貨', '自取時段'], tx: ['網上訂單', '退貨退款', '回贈'] }, { up: ['特快送货', '试穿盒'], bk: ['特快送货', '指定时段送货', '自取时段'], tx: ['网上订单', '退货退款', '回赠'] }),
    Attendance: L(['Warehouse pick', 'Customer service', 'Quality check', 'Packing line'], ['倉庫揀貨', '客戶服務', '品質檢查', '包裝線'], ['仓库拣货', '客户服务', '品质检查', '包装线']),
    'Visitor Management': L(['Customer', 'Supplier', 'Auditor', 'Interview'], ['顧客', '供應商', '審計員', '面試'], ['顾客', '供应商', '审计员', '面试']),
    Inventory: L(['Backpacks', 'Chargers', 'Lamps', 'Bands'], ['背包', '充電器', '檯燈', '手環'], ['背包', '充电器', '台灯', '手环']),
    Logistics: L(['North Point', 'Tsuen Wan', 'Kowloon Bay', 'Tuen Mun'], ['北角', '荃灣', '九龍灣', '屯門'], ['北角', '荃湾', '九龙湾', '屯门']),
    'Data & Analytics': L(['Electronics', 'Bags', 'Home goods', 'Health'], ['電子產品', '袋類', '家居用品', '健康產品'], ['电子产品', '袋类', '家居用品', '健康产品']),
    Ticketing: L(['Flash sale', 'Member day', 'Summer tech fair'], ['限時搶購', '會員日', '夏日科技展'], ['限时抢购', '会员日', '夏日科技展']),
    Loyalty: L(['Free shipping', 'HK$60 voucher', 'Surprise box'], ['免運費', 'HK$60 禮券', '驚喜盒子'], ['免运费', 'HK$60 礼券', '惊喜盒子']),
  }
});

cat({
  key: 'realestate',
  product: L('Skyline Properties', '天際地產', '天际地产'),
  theme: 'indigo',
  names: {
    Booking: L(['Viewing tour', 'Valuation', 'Agent consultation', 'Open house'], ['睇樓導覽', '物業估價', '經紀諮詢', '開放日'], ['睇楼导览', '物业估价', '经纪咨询', '开放日']),
    Membership: L(['Basic', 'Investor', 'Corporate'], ['基本', '投資者', '企業'], ['基本', '投资者', '企业']),
    'Cloud System': L(['Listings portal', 'CRM API', 'Agent app', 'Payments'], ['樓盤入口', 'CRM API', '經紀應用', '付款'], ['楼盘入口', 'CRM API', '经纪应用', '付款']),
    eCommerce: L(['Floor plan pack', 'Valuation report', 'Tenancy check', 'Viewing report', 'Market report', 'Settlement kit'], ['圖則套裝', '估值報告', '租務查冊', '睇樓報告', '市況報告', '交收套裝'], ['图则套装', '估值报告', '租务查册', '睇楼报告', '市况报告', '交收套装']),
    'Order Placement': L(['Valuation service', 'Tenancy agreement', 'Property search', 'Photo shoot', 'Staging plan'], ['估價服務', '租約文件', '物業搜尋', '專業攝影', '佈置方案'], ['估价服务', '租约文件', '物业搜寻', '专业摄影', '布置方案']),
    'Web/Website': L({
      heroTitle: 'Property deals, done right',
      heroSub: 'Listings, clients and transactions on one platform.',
      features: [{ title: 'Smart listings', text: 'Your properties, beautifully presented.' }, { title: 'Client CRM', text: 'Every lead, every follow-up tracked.' }, { title: 'Secure deals', text: 'Documents and payments in one flow.' }]
    }, {
      heroTitle: '地產交易，妥帖處理',
      heroSub: '樓盤、客戶與交易盡在單一平台。',
      features: [{ title: '精明樓盤', text: '您的物業以最佳方式呈現。' }, { title: '客戶 CRM', text: '每個查詢與跟進均受追蹤。' }, { title: '安全交易', text: '文件與付款一氣呵成。' }]
    }, {
      heroTitle: '地产交易，妥帖处理',
      heroSub: '楼盘、客户与交易尽在单一平台。',
      features: [{ title: '精明楼盘', text: '您的物业以最佳方式呈现。' }, { title: '客户 CRM', text: '每个查询与跟进均受追踪。' }, { title: '安全交易', text: '文件与付款一气呵成。' }]
    }),
    'Mobile App': L({ up: ['Viewing tour', 'Open house'], bk: ['Viewing tour', 'Valuation', 'Open house'], tx: ['Commission', 'Marketing fee', 'Referral bonus'] }, { up: ['睇樓導覽', '開放日'], bk: ['睇樓導覽', '物業估價', '開放日'], tx: ['佣金', '推廣費', '推薦獎賞'] }, { up: ['睇楼导览', '开放日'], bk: ['睇楼导览', '物业估价', '开放日'], tx: ['佣金', '推广费', '推荐奖赏'] }),
    Attendance: L(['Viewing team', 'Valuation desk', 'Open house', 'Back office'], ['睇樓團隊', '估價部', '開放日', '後勤部門'], ['睇楼团队', '估价部', '开放日', '后勤部门']),
    'Visitor Management': L(['Buyer', 'Tenant', 'Owner', 'Interview'], ['買家', '租客', '業主', '面試'], ['买家', '租客', '业主', '面试']),
    Inventory: L(['Brochures', 'Floor plans', 'Signage', 'Key sets'], ['樓盤簡介', '圖則', '招牌', '鎖匙套'], ['楼盘简介', '图则', '招牌', '锁匙套']),
    Logistics: L(['Central', 'CWB', 'TST', 'MK'], ['中環', '銅鑼灣', '尖沙咀', '旺角'], ['中环', '铜锣湾', '尖沙咀', '旺角']),
    'Data & Analytics': L(['Sales', 'Leasing', 'Valuations', 'Marketing'], ['銷售', '租賃', '估價', '市場推廣'], ['销售', '租赁', '估价', '市场推广']),
    Ticketing: L(['Open house weekend', 'Property expo', 'First-time buyer talk'], ['開放日週末', '樓盤展銷會', '首次置業講座'], ['开放日周末', '楼盘展销会', '首次置业讲座']),
    Loyalty: L(['Free valuation', 'HK$200 voucher', 'Premium report'], ['免費估價', 'HK$200 禮券', '尊尚報告'], ['免费估价', 'HK$200 礼券', '尊尚报告']),
  }
});

cat({
  key: 'dental',
  product: L('Pearl Dental', '珍珠牙科', '珍珠牙科'),
  theme: 'cyan',
  names: {
    Booking: L(['Cleaning & polish', 'Check-up', 'Whitening', 'Root canal'], ['洗牙拋光', '例行檢查', '牙齒美白', '根管治療'], ['洗牙抛光', '例行检查', '牙齿美白', '根管治疗']),
    Membership: L(['Basic', 'Family', 'Smile Plus'], ['基本', '家庭', '微笑 Plus'], ['基本', '家庭', '微笑 Plus']),
    'Cloud System': L(['Clinic portal', 'Records API', 'Chairside app', 'Payments'], ['診所入口', '病歷 API', '診療應用', '付款'], ['诊所入口', '病历 API', '诊疗应用', '付款']),
    eCommerce: L(['Electric toothbrush', 'Whitening kit', 'Water flosser', 'Dental floss', 'Mouthwash', 'Toothpaste set'], ['電動牙刷', '美白套裝', '沖牙器', '牙線', '漱口水', '牙膏套裝'], ['电动牙刷', '美白套装', '冲牙器', '牙线', '漱口水', '牙膏套装']),
    'Order Placement': L(['Retainer cleaning', 'Whitening strips', 'Travel kit', 'Calcium gum', 'Gel'], ['牙箍清潔', '美白貼片', '旅行套裝', '鈣質香口膠', '凝膠'], ['牙箍清洁', '美白贴片', '旅行套装', '钙质香口胶', '凝胶']),
    'Web/Website': L({
      heroTitle: 'Healthy smiles, happy patients',
      heroSub: 'Appointments, records and reminders in one calm flow.',
      features: [{ title: 'Easy bookings', text: 'Patients book in a minute.' }, { title: 'Digital records', text: 'X-rays and notes together.' }, { title: 'Gentle reminders', text: 'Recall visits, automatically.' }]
    }, {
      heroTitle: '健康笑容，快樂病人',
      heroSub: '預約、病歷與提醒於流暢流程中合一。',
      features: [{ title: '輕鬆預約', text: '病人一分鐘完成預約。' }, { title: '數碼病歷', text: 'X光與紀錄一併存放。' }, { title: '貼心提醒', text: '自動安排覆診。' }]
    }, {
      heroTitle: '健康笑容，快乐病人',
      heroSub: '预约、病历与提醒于流畅流程中合一。',
      features: [{ title: '轻松预约', text: '病人一分钟完成预约。' }, { title: '数码病历', text: 'X光与纪录一併存放。' }, { title: '贴心提醒', text: '自动安排复诊。' }]
    }),
    'Mobile App': L({ up: ['Cleaning & polish', 'Whitening'], bk: ['Cleaning & polish', 'Check-up', 'Whitening'], tx: ['Treatment', 'Teeth kit', 'Referral bonus'] }, { up: ['洗牙拋光', '牙齒美白'], bk: ['洗牙拋光', '例行檢查', '牙齒美白'], tx: ['治療費', '口腔護理套裝', '推薦獎賞'] }, { up: ['洗牙抛光', '牙齿美白'], bk: ['洗牙抛光', '例行检查', '牙齿美白'], tx: ['治疗费', '口腔护理套装', '推荐奖赏'] }),
    Attendance: L(['Cleaning room', 'Surgery 1', 'Surgery 2', 'X-ray room'], ['洗牙房', '手術室一', '手術室二', 'X光室'], ['洗牙房', '手术室一', '手术室二', 'X光室']),
    'Visitor Management': L(['Patient', 'Visitor', 'Supplier', 'Interview'], ['病人', '訪客', '供應商', '面試'], ['病人', '访客', '供应商', '面试']),
    Inventory: L(['Toothpaste', 'Floss', 'Mouthwash', 'Gloves'], ['牙膏', '牙線', '漱口水', '手套'], ['牙膏', '牙线', '漱口水', '手套']),
    Logistics: L(['Central', 'Admiralty', 'TST', 'MK'], ['中環', '金鐘', '尖沙咀', '旺角'], ['中环', '金钟', '尖沙咀', '旺角']),
    'Data & Analytics': L(['Treatments', 'Check-ups', 'Whitening', 'Products'], ['治療', '檢查', '美白', '產品'], ['治疗', '检查', '美白', '产品']),
    Ticketing: L(['Smile seminar', 'Kids dental day', 'Whitening event'], ['微笑講座', '兒童牙齒日', '美白活動'], ['微笑讲座', '儿童牙齿日', '美白活动']),
    Loyalty: L(['Free polish', 'HK$100 voucher', 'Smile kit'], ['免費拋光', 'HK$100 禮券', '微笑套裝'], ['免费抛光', 'HK$100 礼券', '微笑套装']),
  }
});
cat({
  key: 'salon',
  product: L('Muse Salon', '繆斯髮廊', '缪斯发廊'),
  theme: 'pink',
  names: {
    Booking: L(['Haircut & style', 'Colour service', 'Keratin treatment', 'Blowout'], ['剪髮造型', '染髮服務', '角蛋白護理', '吹整造型'], ['剪发造型', '染发服务', '角蛋白护理', '吹整造型']),
    Membership: L(['Walk-in', 'Regular', 'Elite'], ['散客', '常客', '精英'], ['散客', '常客', '精英']),
    'Cloud System': L(['Salon portal', 'Booking API', 'Stylist app', 'Payments'], ['髮廊入口', '預約 API', '髮型師應用', '付款'], ['发廊入口', '预约 API', '发型师应用', '付款']),
    eCommerce: L(['Argan oil', 'Sulfate-free shampoo', 'Styling cream', 'Hair mask', 'Heat spray', 'Brushes set'], ['阿甘油', '無硫酸鹽洗髮水', '造型乳霜', '髮膜', '抗熱噴霧', '梳刷套裝'], ['阿甘油', '无硫酸盐洗发水', '造型乳霜', '发膜', '抗热喷雾', '梳刷套装']),
    'Order Placement': L(['Root touch-up', 'Glossy serum', 'Travel shampoo', 'Scalp scrub', 'Leave-in cream'], ['補染髮根', '光澤精華', '旅行洗髮水', '頭皮磨砂', '免沖護髮素'], ['补染发根', '光泽精华', '旅行洗发水', '头皮磨砂', '免冲护发素']),
    'Web/Website': L({
      heroTitle: 'Look sharp, run sharp',
      heroSub: 'Bookings, stylists and product sales on one platform.',
      features: [{ title: 'Instant bookings', text: 'Chairs never sit empty.' }, { title: 'Stylist calendars', text: 'Teams and tags, organised.' }, { title: 'Retail arm', text: 'Sell your product line easily.' }]
    }, {
      heroTitle: '型格出眾，營運利落',
      heroSub: '預約、髮型師與產品銷售於單一平台。',
      features: [{ title: '即時預約', text: '座椅不再空置。' }, { title: '髮型師日程', text: '團隊與分工井然有序。' }, { title: '零售拓展', text: '輕鬆銷售自家產品線。' }]
    }, {
      heroTitle: '型格出众，营运利落',
      heroSub: '预约、发型师与产品销售于单一平台。',
      features: [{ title: '即时预约', text: '座椅不再空置。' }, { title: '发型师日程', text: '团队与分工井然有序。' }, { title: '零售拓展', text: '轻松销售自家产品线。' }]
    }),
    'Mobile App': L({ up: ['Haircut & style', 'Colour service'], bk: ['Haircut & style', 'Colour service', 'Blowout'], tx: ['Hair service', 'Retail sale', 'Referral bonus'] }, { up: ['剪髮造型', '染髮服務'], bk: ['剪髮造型', '染髮服務', '吹整造型'], tx: ['髮型服務', '零售銷售', '推薦獎賞'] }, { up: ['剪发造型', '染发服务'], bk: ['剪发造型', '染发服务', '吹整造型'], tx: ['发型服务', '零售销售', '推荐奖赏'] }),
    Attendance: L(['Cutting stations', 'Colour bar', 'Wash area', 'Blow-dry line'], ['剪髮區', '染髮吧', '洗髮區', '吹整線'], ['剪发区', '染发吧', '洗发区', '吹整线']),
    'Visitor Management': L(['Client', 'Guest', 'Vendor', 'Interview'], ['客戶', '訪客', '供應商', '面試'], ['客户', '访客', '供应商', '面试']),
    Inventory: L(['Shampoo', 'Hair masks', 'Styling spray', 'Towels'], ['洗髮水', '髮膜', '造型噴霧', '毛巾'], ['洗发水', '发膜', '造型喷雾', '毛巾']),
    Logistics: L(['Central', 'TST', 'CWB', 'MK'], ['中環', '尖沙咀', '銅鑼灣', '旺角'], ['中环', '尖沙咀', '铜锣湾', '旺角']),
    'Data & Analytics': L(['Cutting', 'Colour', 'Treatments', 'Retail'], ['剪髮', '染髮', '護理', '零售'], ['剪发', '染发', '护理', '零售']),
    Ticketing: L(['Style workshop', 'Colour masterclass', 'Salon open day'], ['造型工作坊', '染髮大師班', '髮廊開放日'], ['造型工作坊', '染发大师班', '发廊开放日']),
    Loyalty: L(['Free blowout', 'HK$60 voucher', 'Gloss set'], ['免費吹整', 'HK$60 禮券', '光澤套裝'], ['免费吹整', 'HK$60 礼券', '光泽套装']),
  }
});

cat({
  key: 'petcare',
  product: L('PawCare', '爪爪護理', '爪爪护理'),
  theme: 'amber',
  names: {
    Booking: L(['Grooming session', 'Pet daycare', 'Vet check', 'Training class'], ['寵物美容', '寵物日托', '獸醫檢查', '訓練課程'], ['宠物美容', '宠物日托', '兽医检查', '训练课程']),
    Membership: L(['Basic', 'Paw Plus', 'VIP Pet'], ['基本', '爪爪 Plus', 'VIP 寵物'], ['基本', '爪爪 Plus', 'VIP 宠物']),
    'Cloud System': L(['Pet portal', 'Records API', 'Groomer app', 'Payments'], ['寵物入口', '紀錄 API', '美容師應用', '付款'], ['宠物入口', '纪录 API', '美容师应用', '付款']),
    eCommerce: L(['Grain-free kibble', 'Chicken treats', 'Grooming brush', 'Puppy pad', 'Collar set', 'Pet shampoo'], ['無穀物狗糧', '雞肉小食', '美容刷', '寵物尿墊', '頸圈套裝', '寵物洗毛液'], ['无谷物狗粮', '鸡肉小食', '美容刷', '宠物尿垫', '颈圈套装', '宠物洗毛液']),
    'Order Placement': L(['Dog biscuit', 'Fish flakes', 'Grooming towel', 'Calming spray', 'Toy ball'], ['狗狗餅乾', '魚糧', '美容毛巾', '安撫噴霧', '玩具球'], ['狗狗饼干', '鱼粮', '美容毛巾', '安抚喷雾', '玩具球']),
    'Web/Website': L({
      heroTitle: 'Happy pets, busy owners',
      heroSub: 'Grooming, daycare and health records, all in one app.',
      features: [{ title: 'Easy scheduling', text: 'Book grooming in a tap.' }, { title: 'Pet profiles', text: 'Vaccines, weight and notes together.' }, { title: 'Care reminders', text: 'Next visits, never forgotten.' }]
    }, {
      heroTitle: '快樂寵物，安心主人',
      heroSub: '美容、日托與健康紀錄，盡在一處。',
      features: [{ title: '輕鬆排程', text: '一按完成美容預約。' }, { title: '寵物檔案', text: '疫苗、體重與筆記集於一身。' }, { title: '護理提醒', text: '下次到訪絕不忘記。' }]
    }, {
      heroTitle: '快乐宠物，安心主人',
      heroSub: '美容、日托与健康纪录，尽在一处。',
      features: [{ title: '轻松排程', text: '一按完成美容预约。' }, { title: '宠物档案', text: '疫苗、体重与笔记集于一身。' }, { title: '护理提醒', text: '下次到访绝不忘记。' }]
    }),
    'Mobile App': L({ up: ['Grooming session', 'Training class'], bk: ['Grooming session', 'Pet daycare', 'Vet check'], tx: ['Grooming fee', 'Pet shop', 'Referral bonus'] }, { up: ['寵物美容', '訓練課程'], bk: ['寵物美容', '寵物日托', '獸醫檢查'], tx: ['美容費', '寵物用品', '推薦獎賞'] }, { up: ['宠物美容', '训练课程'], bk: ['宠物美容', '宠物日托', '兽医检查'], tx: ['美容费', '宠物用品', '推荐奖赏'] }),
    Attendance: L(['Grooming bay', 'Daycare zone', 'Training area', 'Vet room'], ['美容區', '日托區', '訓練區', '獸醫室'], ['美容区', '日托区', '训练区', '兽医室']),
    'Visitor Management': L(['Pet owner', 'Guest', 'Vet', 'Interview'], ['寵物主人', '訪客', '獸醫', '面試'], ['宠物主人', '访客', '兽医', '面试']),
    Inventory: L(['Kibble', 'Treats', 'Shampoo', 'Toys'], ['狗糧', '小食', '洗毛液', '玩具'], ['狗粮', '小食', '洗毛液', '玩具']),
    Logistics: L(['Kowloon Bay', 'CWB', 'TST', 'MK'], ['九龍灣', '銅鑼灣', '尖沙咀', '旺角'], ['九龙湾', '铜锣湾', '尖沙咀', '旺角']),
    'Data & Analytics': L(['Grooming', 'Daycare', 'Training', 'Supplies'], ['美容', '日托', '訓練', '用品'], ['美容', '日托', '训练', '用品']),
    Ticketing: L(['Pet fair day', 'Adoption drive', 'Obedience demo'], ['寵物嘉年華', '領養日', '服從示範'], ['宠物嘉年华', '领养日', '服从示范']),
    Loyalty: L(['Free grooming comb', 'HK$80 voucher', 'Pamper pack'], ['免費美容梳', 'HK$80 禮券', '寵愛套裝'], ['免费美容梳', 'HK$80 礼券', '宠爱套装']),
  }
});

cat({
  key: 'auto',
  product: L('Speedline Auto', '快線汽車', '快线汽车'),
  theme: 'red',
  names: {
    Booking: L(['Oil change', 'Brake service', 'Tyre swap', 'Full inspection'], ['換機油', '煞車服務', '換輪胎', '全面檢查'], ['换机油', '刹车服务', '换轮胎', '全面检查']),
    Membership: L(['Basic', 'Auto Plus', 'Fleet'], ['基本', '汽車 Plus', '車隊'], ['基本', '汽车 Plus', '车队']),
    'Cloud System': L(['Garage portal', 'Parts API', 'Workshop app', 'Payments'], ['車房入口', '零件 API', '工場應用', '付款'], ['车房入口', '零件 API', '工场应用', '付款']),
    eCommerce: L(['Synthetic oil', 'Air filter', 'Spark plugs', 'Brake pads', 'Wiper blades', 'Roof rack'], ['合成機油', '空氣濾芯', '火嘴', '煞車皮', '雨刮', '行李架'], ['合成机油', '空气滤芯', '火嘴', '刹车皮', '雨刮', '行李架']),
    'Order Placement': L(['Engine oil', 'Coolant top-up', 'Wiper fluid', 'Tyre gauge', 'Screen wash'], ['引擎機油', '補充冷卻液', '玻璃水', '胎壓計', '擋風玻璃水'], ['引擎机油', '补充冷却液', '玻璃水', '胎压计', '挡风玻璃水']),
    'Web/Website': L({
      heroTitle: 'Every car, serviced on time',
      heroSub: 'Bookings, parts and job cards on one garage platform.',
      features: [{ title: 'Service bookings', text: 'Bay time, planned ahead.' }, { title: 'Parts & stock', text: 'Fit, bill and reorder in one flow.' }, { title: 'Service history', text: 'Every car\'s record at a glance.' }]
    }, {
      heroTitle: '每部愛車，準時保養',
      heroSub: '預約、零件與工單於單一車房平台。',
      features: [{ title: '保養預約', text: '維修車位提前規劃。' }, { title: '零件庫存', text: '安裝、入帳、補貨一氣呵成。' }, { title: '保養紀錄', text: '每部車的記錄一目了然。' }]
    }, {
      heroTitle: '每部爱车，准时保养',
      heroSub: '预约、零件与工单于单一车房平台。',
      features: [{ title: '保养预约', text: '维修车位提前规划。' }, { title: '零件库存', text: '安装、入帐、补货一气呵成。' }, { title: '保养纪录', text: '每部车的记录一目了然。' }]
    }),
    'Mobile App': L({ up: ['Oil change', 'Tyre swap'], bk: ['Oil change', 'Brake service', 'Full inspection'], tx: ['Service fee', 'Parts', 'Referral bonus'] }, { up: ['換機油', '換輪胎'], bk: ['換機油', '煞車服務', '全面檢查'], tx: ['服務費', '零件', '推薦獎賞'] }, { up: ['换机油', '换轮胎'], bk: ['换机油', '刹车服务', '全面检查'], tx: ['服务费', '零件', '推荐奖赏'] }),
    Attendance: L(['Service bay', 'Diagnostics', 'Tyre room', 'Detailing'], ['維修車位', '診斷區', '輪胎房', '美容區'], ['维修车位', '诊断区', '轮胎房', '美容区']),
    'Visitor Management': L(['Customer', 'Guest', 'Supplier', 'Interview'], ['車主', '訪客', '供應商', '面試'], ['车主', '访客', '供应商', '面试']),
    Inventory: L(['Engine oil', 'Brake pads', 'Filters', 'Wipers'], ['機油', '煞車皮', '濾芯', '雨刮'], ['机油', '刹车皮', '滤芯', '雨刮']),
    Logistics: L(['Kwun Tong', 'CWB', 'MK', 'TST'], ['觀塘', '銅鑼灣', '旺角', '尖沙咀'], ['观塘', '铜锣湾', '旺角', '尖沙咀']),
    'Data & Analytics': L(['Services', 'Parts', 'Detailing', 'Tyres'], ['維修服務', '零件', '美容', '輪胎'], ['维修服务', '零件', '美容', '轮胎']),
    Ticketing: L(['Auto show', 'Diagnostics day', 'EV seminar'], ['車展', '檢測日', '電動車講座'], ['车展', '检测日', '电动车讲座']),
    Loyalty: L(['Free car wash', 'HK$120 voucher', 'Detail pack'], ['免費洗車', 'HK$120 禮券', '美容套裝'], ['免费洗车', 'HK$120 礼券', '美容套装']),
  }
});

cat({
  key: 'coffeeroast',
  product: L('Roast House', '烘焙工房', '烘焙工房'),
  theme: 'brown',
  names: {
    Booking: L(['Roastery tour', 'Cupping class', 'Brew bar session', 'Roast master talk'], ['烘焙廠導覽', '杯測課程', '沖煮吧體驗', '烘焙大師分享'], ['烘焙厂导览', '杯测课程', '冲煮吧体验', '烘焙大师分享']),
    Membership: L(['Coffee Lover', 'Roast Club', 'Wholesale'], ['啡迷', '烘焙會', '批發'], ['啡迷', '烘焙会', '批发']),
    'Cloud System': L(['Roast portal', 'Order API', 'Blend app', 'Payments'], ['烘焙入口', '訂單 API', '拼配應用', '付款'], ['烘焙入口', '订单 API', '拼配应用', '付款']),
    eCommerce: L(['Signature roast', 'Limited single origin', 'Cold brew kit', 'Roast sampler', 'Barista apron', 'Grinder'], ['招牌烘焙', '限量單一產地', '冷萃套裝', '烘焙嚐鮮盒', '咖啡師圍裙', '磨豆機'], ['招牌烘焙', '限量单一产地', '冷萃套装', '烘焙尝鲜盒', '咖啡师围裙', '磨豆机']),
    'Order Placement': L(['Espresso blend', 'Filter roast', 'Chocolate cake', 'Biscotti', 'Kombucha'], ['濃縮拼配', '手沖烘焙', '朱古力蛋糕', '意式脆餅', '康普茶'], ['浓缩拼配', '手冲烘焙', '朱古力蛋糕', '意式脆饼', '康普茶']),
    'Web/Website': L({
      heroTitle: 'Roast with purpose',
      heroSub: 'Bean-to-cup, tracked from roast to receipt.',
      features: [{ title: 'Batch tracking', text: 'Every roast logged and traceable.' }, { title: 'Wholesale portal', text: 'Cafes order straight from the roastery.' }, { title: 'Subscription ready', text: 'Fresh beans on repeat, automated.' }]
    }, {
      heroTitle: '以目標烘焙',
      heroSub: '由生豆到杯裝，全程追蹤。',
      features: [{ title: '批次追蹤', text: '每次烘焙均有記錄可追溯。' }, { title: '批發入口', text: '咖啡店直接向烘焙廠下單。' }, { title: '訂閱服務', text: '新鮮咖啡豆自動定期送達。' }]
    }, {
      heroTitle: '以目标烘焙',
      heroSub: '由生豆到杯装，全程追踪。',
      features: [{ title: '批次追踪', text: '每次烘焙均有记录可追溯。' }, { title: '批发入口', text: '咖啡店直接向烘焙厂下单。' }, { title: '订阅服务', text: '新鲜咖啡豆自动定期送达。' }]
    }),
    'Mobile App': L({ up: ['Cupping class', 'Brew bar session'], bk: ['Cupping class', 'Roastery tour', 'Brew bar session'], tx: ['Beans order', 'Equipment', 'Referral bonus'] }, { up: ['杯測課程', '沖煮吧體驗'], bk: ['杯測課程', '烘焙廠導覽', '沖煮吧體驗'], tx: ['咖啡豆訂單', '器具', '推薦獎賞'] }, { up: ['杯测课程', '冲煮吧体验'], bk: ['杯测课程', '烘焙厂导览', '冲煮吧体验'], tx: ['咖啡豆订单', '器具', '推荐奖赏'] }),
    Attendance: L(['Roasting floor', 'Cupping lab', 'Brew bar', 'Pack line'], ['烘焙車間', '杯測室', '沖煮吧', '包裝線'], ['烘焙车间', '杯测室', '冲煮吧', '包装线']),
    'Visitor Management': L(['Customer', 'Wholesale buyer', 'Guest', 'Interview'], ['顧客', '批發買家', '訪客', '面試'], ['顾客', '批发买家', '访客', '面试']),
    Inventory: L(['Green beans', 'Roasted beans', 'Kits', 'Bags'], ['生豆', '烘焙豆', '套裝', '包裝袋'], ['生豆', '烘焙豆', '套装', '包装袋']),
    Logistics: L(['Kwun Tong', 'Shatin', 'Tsuen Wan', 'Tuen Mun'], ['觀塘', '沙田', '荃灣', '屯門'], ['观塘', '沙田', '荃湾', '屯门']),
    'Data & Analytics': L(['Direct sales', 'Wholesale', 'Subscriptions', 'Merch'], ['直銷', '批發', '訂閱', '周邊'], ['直销', '批发', '订阅', '周边']),
    Ticketing: L(['Cupping festival', 'Roast masterclass', 'Latte art night'], ['杯測節', '烘焙大師班', '拉花之夜'], ['杯测节', '烘焙大师班', '拉花之夜']),
    Loyalty: L(['Free bag of beans', 'HK$60 voucher', 'Tasting box'], ['免費一袋咖啡豆', 'HK$60 禮券', '品嚐盒'], ['免费一袋咖啡豆', 'HK$60 礼券', '品尝盒']),
  }
});

cat({
  key: 'hotel',
  product: L('Grand Central Hotel', '中央大酒店', '中央大酒店'),
  theme: 'indigo',
  names: {
    Booking: L(['Standard room', 'Deluxe room', 'Suite', 'Conference room'], ['標準客房', '豪華客房', '套房', '會議室'], ['标准客房', '豪华客房', '套房', '会议室']),
    Membership: L(['Guest', 'Loyalty', 'Corporate'], ['旅客', '會員', '企業'], ['旅客', '会员', '企业']),
    'Cloud System': L(['Hotel portal', 'Reservations API', 'Housekeeping app', 'Payments'], ['酒店入口', '訂房 API', '房務應用', '付款'], ['酒店入口', '订房 API', '房务应用', '付款']),
    eCommerce: L(['Stay package', 'Breakfast bundle', 'Spa credit', 'Late checkout', 'Room upgrade', 'City tour'], ['住宿套餐', '早餐組合', '水療禮券', '延遲退房', '客房升級', '城市導覽'], ['住宿套餐', '早餐组合', '水疗礼券', '延迟退房', '客房升级', '城市导览']),
    'Order Placement': L(['Room service', 'Club lounge pass', 'Minibar top-up', 'Laundry', 'Spa booking'], ['客房送餐', '行政酒廊通行證', '迷你吧補充', '洗衣服務', '水療預約'], ['客房送餐', '行政酒廊通行证', '迷你吧补充', '洗衣服务', '水疗预约']),
    'Web/Website': L({
      heroTitle: 'Hospitality, perfected',
      heroSub: 'Rooms, events and guests on one seamless platform.',
      features: [{ title: 'Smart reservations', text: 'Rooms and rates, always in sync.' }, { title: 'Guest services', text: 'Requests handled in minutes.' }, { title: 'Event ready', text: 'Conferences and banquets, planned.' }]
    }, {
      heroTitle: '待客之道，至臻至善',
      heroSub: '客房、活動與賓客盡在單一流暢平台。',
      features: [{ title: '精明訂房', text: '房價與房況時刻同步。' }, { title: '賓客服務', text: '要求數分鐘內辦妥。' }, { title: '活動就緒', text: '會議與宴會精心規劃。' }]
    }, {
      heroTitle: '待客之道，至臻至善',
      heroSub: '客房、活动与宾客尽在单一流畅平台。',
      features: [{ title: '精明订房', text: '房价与房况时刻同步。' }, { title: '宾客服务', text: '要求数分钟内办妥。' }, { title: '活动就绪', text: '会议与宴会精心规划。' }]
    }),
    'Mobile App': L({ up: ['Deluxe room', 'Conference room'], bk: ['Deluxe room', 'Standard room', 'Suite'], tx: ['Room charge', 'Dining', 'Referral bonus'] }, { up: ['豪華客房', '會議室'], bk: ['豪華客房', '標準客房', '套房'], tx: ['房費', '餐飲', '推薦獎賞'] }, { up: ['豪华客房', '会议室'], bk: ['豪华客房', '标准客房', '套房'], tx: ['房费', '餐饮', '推荐奖赏'] }),
    Attendance: L(['Front desk', 'Housekeeping', 'Kitchen', 'Banquet hall'], ['前台', '房務', '廚房', '宴會廳'], ['前台', '房务', '厨房', '宴会厅']),
    'Visitor Management': L(['Guest', 'Day visitor', 'Supplier', 'Interview'], ['住客', '日間訪客', '供應商', '面試'], ['住客', '日间访客', '供应商', '面试']),
    Inventory: L(['Linen', 'Toiletries', 'Mini bar', 'Candles'], ['床單', '洗漱用品', '迷你吧', '蠟燭'], ['床单', '洗漱用品', '迷你吧', '蜡烛']),
    Logistics: L(['Central', 'Admiralty', 'TST', 'Mong Kok'], ['中環', '金鐘', '尖沙咀', '旺角'], ['中环', '金钟', '尖沙咀', '旺角']),
    'Data & Analytics': L(['Rooms', 'Dining', 'Events', 'Spa'], ['客房', '餐飲', '活動', '水療'], ['客房', '餐饮', '活动', '水疗']),
    Ticketing: L(['Weekend brunch', 'New year gala', 'Wedding showcase'], ['週末早午餐', '新年晚會', '婚宴展'], ['周末早午餐', '新年晚会', '婚宴展']),
    Loyalty: L(['Late checkout', 'HK$150 voucher', 'Spa credit'], ['延遲退房', 'HK$150 禮券', '水療禮券'], ['延迟退房', 'HK$150 礼券', '水疗礼券']),
  }
});
cat({
  key: 'travel',
  product: L('Horizon Travel', '地平線旅遊', '地平线旅游'),
  theme: 'cyan',
  names: {
    Booking: L(['City tour', 'Day trip', 'Cruise package', 'Airport transfer'], ['城市導覽', '一日遊', '郵輪套票', '機場接送'], ['城市导览', '一日游', '邮轮套票', '机场接送']),
    Membership: L(['Explorer', 'Adventurer', 'Elite'], ['探索者', '冒險家', '精英'], ['探索者', '冒险家', '精英']),
    'Cloud System': L(['Tour portal', 'Booking API', 'Traveler app', 'Payments'], ['行程入口', '訂票 API', '旅客應用', '付款'], ['行程入口', '订票 API', '旅客应用', '付款']),
    eCommerce: L(['Weekend getaway', 'Island hop', 'Heritage walk', 'Foodie tour', 'Spa day pass', 'City pass'], ['週末短途', '離島遊', '文化導賞', '美食之旅', '水療日票', '城市通行證'], ['周末短途', '离岛游', '文化导赏', '美食之旅', '水疗日票', '城市通行证']),
    'Order Placement': L(['Breakfast set', 'Picnic hamper', 'Bottled water', 'Sun block', 'Camera kit'], ['早餐套餐', '野餐籃', '瓶裝水', '防曬霜', '相機套裝'], ['早餐套餐', '野餐篮', '瓶装水', '防晒霜', '相机套装']),
    'Web/Website': L({
      heroTitle: 'Travel made effortless',
      heroSub: 'Tours, bookings and travellers, managed from one place.',
      features: [{ title: 'Easy booking', text: 'Trips booked in minutes.' }, { title: 'Live availability', text: 'Seats and dates, always current.' }, { title: 'Traveler care', text: 'Support before, during and after.' }]
    }, {
      heroTitle: '旅遊，輕鬆愜意',
      heroSub: '行程、訂票與旅客，盡在一處管理。',
      features: [{ title: '輕鬆訂票', text: '數分鐘完成行程預訂。' }, { title: '即時名額', text: '座位與日期時刻更新。' }, { title: '旅客關懷', text: '旅程前中後全程支援。' }]
    }, {
      heroTitle: '旅游，轻松惬意',
      heroSub: '行程、订票与旅客，尽在一处管理。',
      features: [{ title: '轻松订票', text: '数分钟完成行程预订。' }, { title: '即时名额', text: '座位与日期时刻更新。' }, { title: '旅客关怀', text: '旅程前中后全程支援。' }]
    }),
    'Mobile App': L({ up: ['City tour', 'Cruise package'], bk: ['City tour', 'Day trip', 'Cruise package'], tx: ['Tour fee', 'Insurance', 'Referral bonus'] }, { up: ['城市導覽', '郵輪套票'], bk: ['城市導覽', '一日遊', '郵輪套票'], tx: ['行程費用', '保險', '推薦獎賞'] }, { up: ['城市导览', '邮轮套票'], bk: ['城市导览', '一日游', '邮轮套票'], tx: ['行程费用', '保险', '推荐奖赏'] }),
    Attendance: L(['Island tour', 'Heritage walk', 'Foodie tour', 'Night cruise'], ['離島遊', '文化導賞', '美食之旅', '夜間遊船'], ['离岛游', '文化导赏', '美食之旅', '夜间游船']),
    'Visitor Management': L(['Traveler', 'Group leader', 'Vendor', 'Interview'], ['旅客', '領隊', '供應商', '面試'], ['旅客', '领队', '供应商', '面试']),
    Inventory: L(['City passes', 'Map packs', 'SIM cards', 'Luggage tags'], ['城市通行證', '地圖包', 'SIM 卡', '行李牌'], ['城市通行证', '地图包', 'SIM 卡', '行李牌']),
    Logistics: L(['Central', 'TST', 'CWB', 'Airport'], ['中環', '尖沙咀', '銅鑼灣', '機場'], ['中环', '尖沙咀', '铜锣湾', '机场']),
    'Data & Analytics': L(['Tours', 'Cruises', 'Transfers', 'Add-ons'], ['行程', '郵輪', '接送', '附加項目'], ['行程', '邮轮', '接送', '附加项目']),
    Ticketing: L(['Summer tour expo', 'Island festival', 'Photo walk'], ['夏日旅遊展', '離島節', '攝影之旅'], ['夏日旅游展', '离岛节', '摄影之旅']),
    Loyalty: L(['Free city pass', 'HK$100 voucher', 'Upgrade credit'], ['免費城市通行證', 'HK$100 禮券', '升級禮券'], ['免费城市通行证', 'HK$100 礼券', '升级礼券']),
  }
});

cat({
  key: 'studio',
  product: L('Bloom Yoga', '綻放瑜伽', '绽放瑜伽'),
  theme: 'green',
  names: {
    Booking: L(['Vinyasa flow', 'Hot yoga', 'Yin class', 'Private session'], ['流動瑜伽', '高溫瑜伽', '陰瑜伽', '私人課堂'], ['流动瑜伽', '高温瑜伽', '阴瑜伽', '私人课堂']),
    Membership: L(['Drop-in', 'Monthly', 'Annual'], ['單次', '月費', '年費'], ['单次', '月费', '年费']),
    'Cloud System': L(['Studio portal', 'Class API', 'Member app', 'Payments'], ['教室入口', '課程 API', '會員應用', '付款'], ['教室入口', '课程 API', '会员应用', '付款']),
    eCommerce: L(['Yoga mat', 'Bolster cushion', 'Strap & blocks', 'Yoga towel', 'Mat carrier', 'Breath incense'], ['瑜伽墊', '抱枕', '伸展帶與磚', '瑜伽毛巾', '墊袋', '香薰'], ['瑜伽垫', '抱枕', '伸展带与砖', '瑜伽毛巾', '垫袋', '香薰']),
    'Order Placement': L(['Kombucha', 'Yoga bag', 'Bamboo mat', 'Tea set', 'Incense stick'], ['康普茶', '瑜伽袋', '竹製墊', '茶具', '香薰棒'], ['康普茶', '瑜伽袋', '竹制垫', '茶具', '香薰棒']),
    'Web/Website': L({
      heroTitle: 'Breathe, move, belong',
      heroSub: 'Classes, memberships and community on one platform.',
      features: [{ title: 'Class schedule', text: 'Live timetables, always accurate.' }, { title: 'Member passes', text: 'Plans that manage themselves.' }, { title: 'Community feel', text: 'Keep your studio personal at scale.' }]
    }, {
      heroTitle: '呼吸、流動、歸屬',
      heroSub: '課程、會籍與社群於單一平台。',
      features: [{ title: '課程時間表', text: '即時時間表，準確無誤。' }, { title: '會員套票', text: '會籍自動管理。' }, { title: '社群氛圍', text: '規模化之餘保持親切。' }]
    }, {
      heroTitle: '呼吸、流动、归属',
      heroSub: '课程、会籍与社群于单一平台。',
      features: [{ title: '课程时间表', text: '即时时间表，准确无误。' }, { title: '会员套票', text: '会籍自动管理。' }, { title: '社群氛围', text: '规模化之余保持亲切。' }]
    }),
    'Mobile App': L({ up: ['Vinyasa flow', 'Hot yoga'], bk: ['Vinyasa flow', 'Yin class', 'Private session'], tx: ['Class pack', 'Retail', 'Referral bonus'] }, { up: ['流動瑜伽', '高溫瑜伽'], bk: ['流動瑜伽', '陰瑜伽', '私人課堂'], tx: ['課堂套票', '零售', '推薦獎賞'] }, { up: ['流动瑜伽', '高温瑜伽'], bk: ['流动瑜伽', '阴瑜伽', '私人课堂'], tx: ['课堂套票', '零售', '推荐奖赏'] }),
    Attendance: L(['Studio A', 'Studio B', 'Private room', 'Mats desk'], ['A 教室', 'B 教室', '私人房', '瑜伽墊櫃枱'], ['A 教室', 'B 教室', '私人房', '瑜伽垫柜台']),
    'Visitor Management': L(['Member', 'Drop-in guest', 'Teacher', 'Interview'], ['會員', '單次訪客', '導師', '面試'], ['会员', '单次访客', '导师', '面试']),
    Inventory: L(['Yoga mats', 'Bolsters', 'Blocks', 'Towels'], ['瑜伽墊', '抱枕', '瑜伽磚', '毛巾'], ['瑜伽垫', '抱枕', '瑜伽砖', '毛巾']),
    Logistics: L(['Central', 'Sheung Wan', 'CWB', 'MK'], ['中環', '上環', '銅鑼灣', '旺角'], ['中环', '上环', '铜锣湾', '旺角']),
    'Data & Analytics': L(['Classes', 'Memberships', 'Retail', 'Workshops'], ['課程', '會籍', '零售', '工作坊'], ['课程', '会籍', '零售', '工作坊']),
    Ticketing: L(['Sunrise retreat', 'Meditation evening', 'Teacher training'], ['日出靜修', '冥想之夜', '導師培訓'], ['日出静修', '冥想之夜', '导师培训']),
    Loyalty: L(['Free class', 'HK$80 voucher', 'Retreat credit'], ['免費課堂', 'HK$80 禮券', '靜修禮券'], ['免费课堂', 'HK$80 礼券', '静修礼券']),
  }
});

cat({
  key: 'church',
  product: L('City Grace Church', '城市恩典教會', '城市恩典教会'),
  theme: 'purple',
  names: {
    Booking: L(['Sunday service', 'Prayer meeting', 'Bible study', 'Youth group'], ['主日崇拜', '祈禱會', '查經班', '青少年團契'], ['主日崇拜', '祈祷会', '查经班', '青少年团契']),
    Membership: L(['Visitor', 'Member', 'Volunteer'], ['訪客', '會友', '義工'], ['访客', '会友', '义工']),
    'Cloud System': L(['Church portal', 'Sermons API', 'Ministry app', 'Giving'], ['教會入口', '講道 API', '事工應用', '奉獻'], ['教会入口', '讲道 API', '事工应用', '奉献']),
    eCommerce: L(['Devotional book', 'Worship CD', 'Bible cover', 'Study journal', 'Tote bag', 'Lanyard set'], ['靈修書籍', '敬拜專輯', '聖經書套', '研經筆記', '帆布袋', '掛繩套裝'], ['灵修书籍', '敬拜专辑', '圣经书套', '研经笔记', '帆布袋', '挂绳套装']),
    'Order Placement': L(['Coffee hour snack', 'Kids pack', 'Conference book', 'Event ticket', 'Gift bundle'], ['茶敍小食', '兒童禮包', '研討會書本', '活動門票', '禮物組合'], ['茶敍小食', '儿童礼包', '研讨会书本', '活动门票', '礼物组合']),
    'Web/Website': L({
      heroTitle: 'A church that runs on grace and good systems',
      heroSub: 'Services, giving and ministries on one connected platform.',
      features: [{ title: 'Service planning', text: 'Schedules and volunteers in sync.' }, { title: 'Online giving', text: 'Secure, simple and transparent.' }, { title: 'Small groups', text: 'Connect members with purpose.' }]
    }, {
      heroTitle: '以恩典與好系統運作的教會',
      heroSub: '崇拜、奉獻與事工於一個連繫的平台。',
      features: [{ title: '崇拜規劃', text: '時間表與義工同步。' }, { title: '網上奉獻', text: '安全、簡單、透明。' }, { title: '小組連結', text: '讓會友有意義地連繫。' }]
    }, {
      heroTitle: '以恩典与好系统运作的教会',
      heroSub: '崇拜、奉献与事工于一个连系的平台。',
      features: [{ title: '崇拜规划', text: '时间表与义工同步。' }, { title: '网上奉献', text: '安全、简单、透明。' }, { title: '小组连结', text: '让会友有意义地连系。' }]
    }),
    'Mobile App': L({ up: ['Sunday service', 'Bible study'], bk: ['Sunday service', 'Prayer meeting', 'Youth group'], tx: ['Tithe offering', 'Bookstore', 'Event ticket'] }, { up: ['主日崇拜', '查經班'], bk: ['主日崇拜', '祈禱會', '青少年團契'], tx: ['十一奉獻', '書室', '活動門票'] }, { up: ['主日崇拜', '查经班'], bk: ['主日崇拜', '祈祷会', '青少年团契'], tx: ['十一奉献', '书室', '活动门票'] }),
    Attendance: L(['Sunday service', 'Prayer meeting', 'Bible study', 'Youth group'], ['主日崇拜', '祈禱會', '查經班', '青少年團契'], ['主日崇拜', '祈祷会', '查经班', '青少年团契']),
    'Visitor Management': L(['Visitor', 'Member', 'Guest speaker', 'Interview'], ['訪客', '會友', '嘉賓講員', '面試'], ['访客', '会友', '嘉宾讲员', '面试']),
    Inventory: L(['Devotionals', 'Bibles', 'Children\'s packs', 'Communion'], ['靈修書', '聖經', '兒童禮包', '聖餐用品'], ['灵修书', '圣经', '儿童礼包', '圣餐用品']),
    Logistics: L(['CWB', 'TST', 'MK', 'Kwun Tong'], ['銅鑼灣', '尖沙咀', '旺角', '觀塘'], ['铜锣湾', '尖沙咀', '旺角', '观塘']),
    'Data & Analytics': L(['Attendance', 'Giving', 'Bookstore', 'Events'], ['出席人數', '奉獻', '書室', '活動'], ['出席人数', '奉献', '书室', '活动']),
    Ticketing: L(['Christmas concert', 'Summer camp', 'Conference'], ['聖誕音樂會', '夏令營', '研討會'], ['圣诞音乐会', '夏令营', '研讨会']),
    Loyalty: L(['Gift book', 'HK$50 voucher', 'Kids pack'], ['禮物書', 'HK$50 禮券', '兒童禮包'], ['礼物书', 'HK$50 礼券', '儿童礼包']),
  }
});

cat({
  key: 'accounting',
  product: L('Ledger Accountants', '賬房會計', '账房会计'),
  theme: 'slate',
  names: {
    Booking: L(['Tax filing', 'Bookkeeping review', 'Audit prep', 'Payroll setup'], ['報稅', '賬目覆核', '審計準備', '薪酬設定'], ['报税', '账目复核', '审计准备', '薪酬设定']),
    Membership: L(['Retainer', 'Monthly', 'Project'], ['長期服務', '月費', '項目制'], ['长期服务', '月费', '项目制']),
    'Cloud System': L(['Client portal', 'Ledger API', 'Tax app', 'Payments'], ['客戶入口', '賬目 API', '報稅應用', '付款'], ['客户入口', '账目 API', '报税应用', '付款']),
    eCommerce: L(['Tax guide', 'Excel templates', 'Compliance pack', 'Payroll book', 'Startup kit', 'CPD course'], ['報稅指南', '試算表範本', '合規套裝', '薪酬手冊', '創業套裝', '進修課程'], ['报税指南', '试算表范本', '合规套装', '薪酬手册', '创业套装', '进修课程']),
    'Order Placement': L(['Bank statement scan', 'Receipt scanning', 'Invoice template', 'Reports bundle', 'Advisory hour'], ['銀行月結單掃描', '收據掃描', '發票範本', '報告組合', '諮詢時段'], ['银行月结单扫描', '收据扫描', '发票范本', '报告组合', '咨询时段']),
    'Web/Website': L({
      heroTitle: 'Numbers in perfect order',
      heroSub: 'Clients, filings and books on one organised platform.',
      features: [{ title: 'Client portal', text: 'Secure document exchange.' }, { title: 'Filing tracker', text: 'Deadlines you will never miss.' }, { title: 'Live books', text: 'Numbers that are always current.' }]
    }, {
      heroTitle: '數字井井有條',
      heroSub: '客戶、報稅與賬目於一個有序平台。',
      features: [{ title: '客戶入口', text: '安全文件交換。' }, { title: '申報追蹤', text: '截止日期絕不遺漏。' }, { title: '實時賬目', text: '數字時刻更新。' }]
    }, {
      heroTitle: '数字井井有条',
      heroSub: '客户、报税与账目于一个有序平台。',
      features: [{ title: '客户入口', text: '安全文件交换。' }, { title: '申报追踪', text: '截止日期绝不遗漏。' }, { title: '实时账目', text: '数字时刻更新。' }]
    }),
    'Mobile App': L({ up: ['Tax filing', 'Audit prep'], bk: ['Tax filing', 'Bookkeeping review', 'Payroll setup'], tx: ['Service fee', 'Software', 'Referral bonus'] }, { up: ['報稅', '審計準備'], bk: ['報稅', '賬目覆核', '薪酬設定'], tx: ['服務費', '軟件', '推薦獎賞'] }, { up: ['报税', '审计准备'], bk: ['报税', '账目复核', '薪酬设定'], tx: ['服务费', '软件', '推荐奖赏'] }),
    Attendance: L(['Tax team', 'Audit room', 'Bookkeeping desk', 'Client meetings'], ['報稅團隊', '審計室', '賬目部', '客戶會議'], ['报税团队', '审计室', '账目部', '客户会议']),
    'Visitor Management': L(['Client', 'Auditor', 'Supplier', 'Interview'], ['客戶', '審計師', '供應商', '面試'], ['客户', '审计师', '供应商', '面试']),
    Inventory: L(['Tax guides', 'Folders', 'Ledgers', 'Stationery'], ['報稅指南', '文件夾', '賬簿', '文具'], ['报税指南', '文件夹', '账簿', '文具']),
    Logistics: L(['Central', 'Admiralty', 'TST', 'MK'], ['中環', '金鐘', '尖沙咀', '旺角'], ['中环', '金钟', '尖沙咀', '旺角']),
    'Data & Analytics': L(['Tax filings', 'Audits', 'Bookkeeping', 'Advisory'], ['報稅', '審計', '簿記', '諮詢'], ['报税', '审计', '簿记', '咨询']),
    Ticketing: L(['Tax seminar', 'Compliance day', 'Startup workshop'], ['稅務講座', '合規日', '創業工作坊'], ['税务讲座', '合规日', '创业工作坊']),
    Loyalty: L(['Free review hour', 'HK$200 voucher', 'Template pack'], ['免費覆核時段', 'HK$200 禮券', '範本套裝'], ['免费复核时段', 'HK$200 礼券', '范本套装']),
  }
});

cat({
  key: 'logistics',
  product: L('Swift Logistics', '迅捷物流', '迅捷物流'),
  theme: 'blue',
  names: {
    Booking: L(['Standard freight', 'Express courier', 'Cold chain', 'Warehouse slot'], ['標準貨運', '特快速遞', '冷鏈運輸', '倉庫時段'], ['标准货运', '特快速递', '冷链运输', '仓库时段']),
    Membership: L(['Business', 'Premium', 'Enterprise'], ['企業', '尊尚', '大型企業'], ['企业', '尊尚', '大型企业']),
    'Cloud System': L(['Fleet portal', 'Tracking API', 'Driver app', 'Payments'], ['車隊入口', '追蹤 API', '司機應用', '付款'], ['车队入口', '追踪 API', '司机应用', '付款']),
    eCommerce: L(['Same-day box', 'Padded envelope', 'Cold pack kit', 'Document pouch', 'Hazmat box', 'Pallet wrap'], ['即日送達箱', '防護信封', '冷凍包套裝', '文件袋', '危險品箱', '貨板保鮮膜'], ['即日送达箱', '防护信封', '冷冻包套装', '文件袋', '危险品箱', '货板保鲜膜']),
    'Order Placement': L(['Freight add-on', 'Insurance cover', 'Signature service', 'Priority sorting', 'Return pickup'], ['貨運附加服務', '保險保障', '簽收服務', '優先分揀', '退回件收件'], ['货运附加服务', '保险保障', '签收服务', '优先分拣', '退回件收件']),
    'Web/Website': L({
      heroTitle: 'Deliveries that never miss a beat',
      heroSub: 'Fleet, routes and tracking on one control tower.',
      features: [{ title: 'Live tracking', text: 'Every parcel, every minute.' }, { title: 'Route planning', text: 'Smarter routes, lower cost.' }, { title: 'Fleet health', text: 'Vehicles monitored end to end.' }]
    }, {
      heroTitle: '每一件貨，準時送達',
      heroSub: '車隊、路線與追蹤於一個控制中心。',
      features: [{ title: '實時追蹤', text: '每一件包裹每分鐘更新。' }, { title: '路線規劃', text: '更精明路線，更低成本。' }, { title: '車隊健康', text: '全程監察車輛狀態。' }]
    }, {
      heroTitle: '每一件货，准时送达',
      heroSub: '车队、路线与追踪于一个控制中心。',
      features: [{ title: '实时追踪', text: '每一件包裹每分钟更新。' }, { title: '路线规划', text: '更精明路线，更低成本。' }, { title: '车队健康', text: '全程监察车辆状态。' }]
    }),
    'Mobile App': L({ up: ['Express courier', 'Cold chain'], bk: ['Standard freight', 'Express courier', 'Warehouse slot'], tx: ['Freight charge', 'Fuel surcharge', 'Referral bonus'] }, { up: ['特快速遞', '冷鏈運輸'], bk: ['標準貨運', '特快速遞', '倉庫時段'], tx: ['貨運費', '燃油附加費', '推薦獎賞'] }, { up: ['特快速递', '冷链运输'], bk: ['标准货运', '特快速递', '仓库时段'], tx: ['货运费', '燃油附加费', '推荐奖赏'] }),
    Attendance: L(['Dispatch desk', 'Warehouse floor', 'Cold storage', 'Sorting line'], ['派車櫃枱', '倉庫作業區', '冷凍庫', '分揀線'], ['派车柜台', '仓库作业区', '冷冻库', '分拣线']),
    'Visitor Management': L(['Client', 'Driver', 'Auditor', 'Interview'], ['客戶', '司機', '審計員', '面試'], ['客户', '司机', '审计员', '面试']),
    Inventory: L(['Packing boxes', 'Cold packs', 'Straps', 'Labels'], ['包裝箱', '冷凍包', '綑綁帶', '標籤'], ['包装箱', '冷冻包', '捆绑带', '标签']),
    Logistics: L(['Airport', 'Kwai Chung', 'Kowloon Bay', 'Tsuen Wan'], ['機場', '葵涌', '九龍灣', '荃灣'], ['机场', '葵涌', '九龙湾', '荃湾']),
    'Data & Analytics': L(['Freight', 'Courier', 'Cold chain', 'Warehousing'], ['貨運', '速遞', '冷鏈', '倉儲'], ['货运', '速递', '冷链', '仓储']),
    Ticketing: L(['Fleet expo', 'Cold chain summit', 'SME logistics day'], ['車隊博覽', '冷鏈峰會', '中小企物流日'], ['车队博览', '冷链峰会', '中小企物流日']),
    Loyalty: L(['Free pick-up', 'HK$100 voucher', 'Priority lane'], ['免費收件', 'HK$100 禮券', '優先通道'], ['免费收件', 'HK$100 礼券', '优先通道']),
  }
});
cat({
  key: 'insurance',
  product: L('SafeGuard Insurance', '安護保險', '安护保险'),
  theme: 'slate',
  names: {
    Booking: L(['Policy review', 'Claim filing', 'Advisor meeting', 'Renewal talk'], ['保單檢視', '索償申請', '顧問會面', '續保會議'], ['保单检视', '索偿申请', '顾问会面', '续保会议']),
    Membership: L(['Basic', 'Family', 'Enterprise'], ['基本', '家庭', '企業'], ['基本', '家庭', '企业']),
    'Cloud System': L(['Policy portal', 'Claims API', 'Advisor app', 'Payments'], ['保單入口', '索償 API', '顧問應用', '付款'], ['保单入口', '索偿 API', '顾问应用', '付款']),
    eCommerce: L(['Home cover', 'Health cover', 'Travel plan', 'Motor policy', 'Savings plan', 'Pet policy'], ['家居保障', '醫療保障', '旅遊計劃', '汽車保險', '儲蓄計劃', '寵物保險'], ['家居保障', '医疗保障', '旅游计划', '汽车保险', '储蓄计划', '宠物保险']),
    'Order Placement': L(['Add-on rider', 'Extended cover', 'Premium installment', 'Claim docs', 'Policy copy'], ['附加條款', '延長保障', '分期保費', '索償文件', '保單副本'], ['附加条款', '延长保障', '分期保费', '索偿文件', '保单副本']),
    'Web/Website': L({
      heroTitle: 'Protection, made simple',
      heroSub: 'Policies, claims and clients on one reliable platform.',
      features: [{ title: 'Quote fast', text: 'Instant premiums, accurate risks.' }, { title: 'Claims online', text: 'File and track in minutes.' }, { title: 'Renewal reminders', text: 'Coverage never lapses.' }]
    }, {
      heroTitle: '保障，從簡',
      heroSub: '保單、索償與客戶於一個可靠平台。',
      features: [{ title: '快速報價', text: '即時保費，準確風險。' }, { title: '網上索償', text: '數分鐘內提交及追蹤。' }, { title: '續保提醒', text: '保障永不斷保。' }]
    }, {
      heroTitle: '保障，从简',
      heroSub: '保单、索偿与客户于一个可靠平台。',
      features: [{ title: '快速报价', text: '即时保费，准确风险。' }, { title: '网上索偿', text: '数分钟内提交及追踪。' }, { title: '续保提醒', text: '保障永不断保。' }]
    }),
    'Mobile App': L({ up: ['Policy review', 'Claim filing'], bk: ['Policy review', 'Advisor meeting', 'Renewal talk'], tx: ['Premium', 'Claim payout', 'Referral bonus'] }, { up: ['保單檢視', '索償申請'], bk: ['保單檢視', '顧問會面', '續保會議'], tx: ['保費', '索償賠款', '推薦獎賞'] }, { up: ['保单检视', '索偿申请'], bk: ['保单检视', '顾问会面', '续保会议'], tx: ['保费', '索偿赔款', '推荐奖赏'] }),
    Attendance: L(['Advisor desk', 'Claims room', 'Call centre', 'Underwriting'], ['顧問櫃枱', '索償部', '客服中心', '核保部'], ['顾问柜台', '索偿部', '客服中心', '核保部']),
    'Visitor Management': L(['Client', 'Claimant', 'Partner', 'Interview'], ['客戶', '索償人', '夥伴', '面試'], ['客户', '索偿人', '伙伴', '面试']),
    Inventory: L(['Policy folders', 'Brochures', 'Claim forms', 'Gift sets'], ['保單文件夾', '單張', '索償表格', '禮品套裝'], ['保单文件夹', '单张', '索偿表格', '礼品套装']),
    Logistics: L(['Central', 'TST', 'MK', 'CWB'], ['中環', '尖沙咀', '旺角', '銅鑼灣'], ['中环', '尖沙咀', '旺角', '铜锣湾']),
    'Data & Analytics': L(['Health', 'Home', 'Travel', 'Motor'], ['醫療', '家居', '旅遊', '汽車'], ['医疗', '家居', '旅游', '汽车']),
    Ticketing: L(['Insurance seminar', 'Retirement talk', 'Claims workshop'], ['保險講座', '退休規劃講座', '索償工作坊'], ['保险讲座', '退休规划讲座', '索偿工作坊']),
    Loyalty: L(['Premium discount', 'HK$150 voucher', 'Cover upgrade'], ['保費折扣', 'HK$150 禮券', '保障升級'], ['保费折扣', 'HK$150 礼券', '保障升级']),
  }
});

cat({
  key: 'bakery',
  product: L('Boulangerie', '麵包工坊', '面包工坊'),
  theme: 'amber',
  names: {
    Booking: L(['Cake order', 'Custom pastry', 'Baking class', 'Bulk order'], ['蛋糕訂單', '訂製糕點', '烘焙課程', '大量訂單'], ['蛋糕订单', '订制糕点', '烘焙课程', '大量订单']),
    Membership: L(['Customer', 'Baker\'s Club', 'Wholesale'], ['顧客', '烘焙會', '批發'], ['顾客', '烘焙会', '批发']),
    'Cloud System': L(['Bakery portal', 'Order API', 'Baking app', 'Payments'], ['烘焙坊入口', '訂單 API', '烘焙應用', '付款'], ['烘焙坊入口', '订单 API', '烘焙应用', '付款']),
    eCommerce: L(['Sourdough loaf', 'Croissant box', 'Birthday cake', 'Cookies tin', 'Brioche bun', 'Gift hamper'], ['酸種麵包', '牛角包盒', '生日蛋糕', '曲奇罐', '布里歐包', '禮物籃'], ['酸种面包', '牛角包盒', '生日蛋糕', '曲奇罐', '布里欧包', '礼物篮']),
    'Order Placement': L(['Sourdough', 'Bagel', 'Cinnamon roll', 'Iced bun', 'Cheesecake slice'], ['酸種包', '貝果', '肉桂卷', '冰皮包', '芝士蛋糕'], ['酸种包', '贝果', '肉桂卷', '冰皮包', '芝士蛋糕']),
    'Web/Website': L({
      heroTitle: 'Baked fresh, ordered easy',
      heroSub: 'Orders, baking runs and wholesale on one platform.',
      features: [{ title: 'Order ahead', text: 'Fresh bread, ready to collect.' }, { title: 'Baking planner', text: 'Match baking to demand.' }, { title: 'Cakes & custom', text: 'Custom orders, no chaos.' }]
    }, {
      heroTitle: '新鮮出爐，輕鬆下單',
      heroSub: '訂單、烘焙排程與批發於單一平台。',
      features: [{ title: '預先訂購', text: '新鮮麵包即時可取。' }, { title: '烘焙規劃', text: '按需求安排烘焙。' }, { title: '蛋糕訂製', text: '訂製訂單有條不紊。' }]
    }, {
      heroTitle: '新鲜出炉，轻松下单',
      heroSub: '订单、烘焙排程与批发于单一平台。',
      features: [{ title: '预先订购', text: '新鲜面包即时可取。' }, { title: '烘焙规划', text: '按需求安排烘焙。' }, { title: '蛋糕订制', text: '订制订单有条不紊。' }]
    }),
    'Mobile App': L({ up: ['Cake order', 'Baking class'], bk: ['Cake order', 'Custom pastry', 'Bulk order'], tx: ['Bakery sale', 'Cake deposit', 'Referral bonus'] }, { up: ['蛋糕訂單', '烘焙課程'], bk: ['蛋糕訂單', '訂製糕點', '大量訂單'], tx: ['烘焙銷售', '蛋糕訂金', '推薦獎賞'] }, { up: ['蛋糕订单', '烘焙课程'], bk: ['蛋糕订单', '订制糕点', '大量订单'], tx: ['烘焙销售', '蛋糕订金', '推荐奖赏'] }),
    Attendance: L(['Oven line', 'Decorating bench', 'Front counter', 'Pack station'], ['焗爐線', '裝飾枱', '前枱', '包裝站'], ['焗炉线', '装饰台', '前枱', '包装站']),
    'Visitor Management': L(['Customer', 'Wholesale buyer', 'Guest', 'Interview'], ['顧客', '批發買家', '訪客', '面試'], ['顾客', '批发买家', '访客', '面试']),
    Inventory: L(['Flour', 'Butter', 'Chocolate', 'Decorations'], ['麵粉', '牛油', '朱古力', '裝飾'], ['面粉', '牛油', '朱古力', '装饰']),
    Logistics: L(['Central', 'CWB', 'TST', 'MK'], ['中環', '銅鑼灣', '尖沙咀', '旺角'], ['中环', '铜锣湾', '尖沙咀', '旺角']),
    'Data & Analytics': L(['Bread', 'Pastries', 'Cakes', 'Wholesale'], ['麵包', '糕點', '蛋糕', '批發'], ['面包', '糕点', '蛋糕', '批发']),
    Ticketing: L(['Baking workshop', 'Bread festival', 'Cake decorating day'], ['烘焙工作坊', '麵包節', '蛋糕裝飾日'], ['烘焙工作坊', '面包节', '蛋糕装饰日']),
    Loyalty: L(['Free croissant', 'HK$40 voucher', 'Pastry box'], ['免費牛角包', 'HK$40 禮券', '糕點盒'], ['免费牛角包', 'HK$40 礼券', '糕点盒']),
  }
});

cat({
  key: 'music',
  product: L('Melody Music', '旋律音樂', '旋律音乐'),
  theme: 'purple',
  names: {
    Booking: L(['Piano lesson', 'Guitar lesson', 'Voice training', 'Ensemble rehearsal'], ['鋼琴課', '結他課', '聲樂訓練', '合奏排練'], ['钢琴课', '结他课', '声乐训练', '合奏排练']),
    Membership: L(['Casual', 'Student', 'Pro'], ['散客', '學生', '專業'], ['散客', '学生', '专业']),
    'Cloud System': L(['Studio portal', 'Lesson API', 'Teacher app', 'Payments'], ['音樂室入口', '課堂 API', '導師應用', '付款'], ['音乐室入口', '课堂 API', '导师应用', '付款']),
    eCommerce: L(['Acoustic guitar', 'Digital piano', 'Sheet music', 'Capo set', 'Metronome', 'Headphones'], ['木結他', '數碼鋼琴', '樂譜', '移調夾套裝', '拍子機', '耳機'], ['木结他', '数码钢琴', '乐谱', '移调夹套装', '拍子机', '耳机']),
    'Order Placement': L(['Guitar strings', 'Piano tuning', 'Music stand', 'Tuner', 'Book set'], ['結他弦', '鋼琴調音', '譜架', '調音器', '教材套裝'], ['结他弦', '钢琴调音', '谱架', '调音器', '教材套装']),
    'Web/Website': L({
      heroTitle: 'Music in perfect harmony',
      heroSub: 'Lessons, teachers and studios on one platform.',
      features: [{ title: 'Lesson booking', text: 'Practice slots, sorted.' }, { title: 'Teacher tools', text: 'Lesson notes and progress.' }, { title: 'Studio rental', text: 'Rooms booked and billed.' }]
    }, {
      heroTitle: '音樂，和諧共鳴',
      heroSub: '課堂、導師與音樂室於單一平台。',
      features: [{ title: '課堂預約', text: '練習時段輕鬆安排。' }, { title: '導師工具', text: '課堂筆記與進度。' }, { title: '音樂室租用', text: '房間預訂與收費。' }]
    }, {
      heroTitle: '音乐，和谐共鸣',
      heroSub: '课堂、导师与音乐室于单一平台。',
      features: [{ title: '课堂预约', text: '练习时段轻松安排。' }, { title: '导师工具', text: '课堂笔记与进度。' }, { title: '音乐室租用', text: '房间预订与收费。' }]
    }),
    'Mobile App': L({ up: ['Piano lesson', 'Voice training'], bk: ['Piano lesson', 'Guitar lesson', 'Ensemble rehearsal'], tx: ['Lesson fee', 'Sheet music', 'Referral bonus'] }, { up: ['鋼琴課', '聲樂訓練'], bk: ['鋼琴課', '結他課', '合奏排練'], tx: ['學費', '樂譜', '推薦獎賞'] }, { up: ['钢琴课', '声乐训练'], bk: ['钢琴课', '结他课', '合奏排练'], tx: ['学费', '乐谱', '推荐奖赏'] }),
    Attendance: L(['Piano room', 'Guitar room', 'Vocal booth', 'Ensemble hall'], ['鋼琴室', '結他室', '聲樂房', '合奏廳'], ['钢琴室', '结他室', '声乐房', '合奏厅']),
    'Visitor Management': L(['Student', 'Parent', 'Teacher', 'Interview'], ['學生', '家長', '導師', '面試'], ['学生', '家长', '导师', '面试']),
    Inventory: L(['Strings', 'Picks', 'Books', 'Microphones'], ['結他弦', '撥片', '教材', '麥克風'], ['结他弦', '拨片', '教材', '麦克风']),
    Logistics: L(['Central', 'CWB', 'MK', 'TST'], ['中環', '銅鑼灣', '旺角', '尖沙咀'], ['中环', '铜锣湾', '旺角', '尖沙咀']),
    'Data & Analytics': L(['Piano', 'Guitar', 'Voice', 'Studio rental'], ['鋼琴', '結他', '聲樂', '音樂室租用'], ['钢琴', '结他', '声乐', '音乐室租用']),
    Ticketing: L(['Recital night', 'Open mic', 'Summer camp'], ['演奏會之夜', '開放麥克風', '夏令營'], ['演奏会之夜', '开放麦克风', '夏令营']),
    Loyalty: L(['Free lesson', 'HK$60 voucher', 'Music pack'], ['免費課堂', 'HK$60 禮券', '音樂套裝'], ['免费课堂', 'HK$60 礼券', '音乐套装']),
  }
});

cat({
  key: 'tutoring',
  product: L('NextGen Tuition', '進階補習', '进阶补习'),
  theme: 'indigo',
  names: {
    Booking: L(['Math intensive', 'English writing', 'Science revision', 'Interview prep'], ['數學密集班', '英文寫作', '科學溫習班', '面試操練'], ['数学密集班', '英文写作', '科学温习班', '面试操练']),
    Membership: L(['Pay-as-you-go', 'Term plan', 'Annual'], ['逐堂收費', '學期計劃', '年費'], ['逐堂收费', '学期计划', '年费']),
    'Cloud System': L(['Student portal', 'Gradebook API', 'Tutor app', 'Payments'], ['學生入口', '成績表 API', '導師應用', '付款'], ['学生入口', '成绩表 API', '导师应用', '付款']),
    eCommerce: L(['Exam papers', 'Answer guides', 'Flashcards', 'Writing prompts', 'Calculator', 'Storage box'], ['模擬試卷', '答案指南', '生字卡', '寫作提示', '計算機', '收納盒'], ['模拟试卷', '答案指南', '生字卡', '写作提示', '计算机', '收纳盒']),
    'Order Placement': L(['Extra drill', 'Essay review', 'Mock test', 'Study planner', 'Parent report'], ['額外操練', '作文批改', '模擬測驗', '溫習計劃', '家長報告'], ['额外操练', '作文批改', '模拟测验', '温习计划', '家长报告']),
    'Web/Website': L({
      heroTitle: 'Results you can measure',
      heroSub: 'Tutoring, tests and progress on one connected platform.',
      features: [{ title: 'Smart classes', text: 'Groups sized for learning.' }, { title: 'Progress analytics', text: 'Scores that tell the story.' }, { title: 'Parent updates', text: 'Reports, automatic and clear.' }]
    }, {
      heroTitle: '成效，一目了然',
      heroSub: '補習、測驗與進度於一個連繫平台。',
      features: [{ title: '精明編班', text: '按學習規模分組。' }, { title: '進度分析', text: '分數訴說進步故事。' }, { title: '家長更新', text: '報告自動且清晰。' }]
    }, {
      heroTitle: '成效，一目了然',
      heroSub: '补习、测验与进度于一个连系平台。',
      features: [{ title: '精明编班', text: '按学习规模分组。' }, { title: '进度分析', text: '分数诉说进步故事。' }, { title: '家长更新', text: '报告自动且清晰。' }]
    }),
    'Mobile App': L({ up: ['Math intensive', 'Science revision'], bk: ['Math intensive', 'English writing', 'Interview prep'], tx: ['Tuition fee', 'Test pack', 'Referral bonus'] }, { up: ['數學密集班', '科學溫習班'], bk: ['數學密集班', '英文寫作', '面試操練'], tx: ['學費', '試題套裝', '推薦獎賞'] }, { up: ['数学密集班', '科学温习班'], bk: ['数学密集班', '英文写作', '面试操练'], tx: ['学费', '试题套装', '推荐奖赏'] }),
    Attendance: L(['Math class', 'Writing class', 'Revision lab', 'Mock exam hall'], ['數學班', '寫作班', '溫習室', '模擬試場'], ['数学班', '写作班', '温习室', '模拟试场']),
    'Visitor Management': L(['Student', 'Parent', 'Tutor', 'Interview'], ['學生', '家長', '導師', '面試'], ['学生', '家长', '导师', '面试']),
    Inventory: L(['Test papers', 'Guides', 'Flashcards', 'Writing pads'], ['試卷', '指南', '生字卡', '寫作本'], ['试卷', '指南', '生字卡', '写作本']),
    Logistics: L(['Mong Kok', 'Kowloon Bay', 'TST', 'Shatin'], ['旺角', '九龍灣', '尖沙咀', '沙田'], ['旺角', '九龙湾', '尖沙咀', '沙田']),
    'Data & Analytics': L(['Math', 'English', 'Science', 'Interview prep'], ['數學', '英文', '科學', '面試操練'], ['数学', '英文', '科学', '面试操练']),
    Ticketing: L(['Mock exam day', 'Parent briefing', 'Study skills camp'], ['模擬考試日', '家長簡介會', '溫習技巧營'], ['模拟考试日', '家长简介会', '温习技巧营']),
    Loyalty: L(['Free mock test', 'HK$80 voucher', 'Study pack'], ['免費模擬試', 'HK$80 禮券', '溫習套裝'], ['免费模拟试', 'HK$80 礼券', '温习套装']),
  }
});

cat({
  key: 'ngo',
  product: L('Community Care', '社區關懷', '社区关怀'),
  theme: 'teal',
  names: {
    Booking: L(['Volunteer shift', 'Counselling session', 'Workshop slot', 'Food bank slot'], ['義工當值', '輔導時段', '工作坊名額', '食物銀行時段'], ['义工当值', '辅导时段', '工作坊名额', '食物银行时段']),
    Membership: L(['Supporter', 'Volunteer', 'Partner'], ['支持者', '義工', '夥伴'], ['支持者', '义工', '伙伴']),
    'Cloud System': L(['Centre portal', 'Casework API', 'Volunteer app', 'Donations'], ['中心入口', '個案 API', '義工應用', '捐款'], ['中心入口', '个案 API', '义工应用', '捐款']),
    eCommerce: L(['Charity tee', 'Recovery kit', 'Food pack', 'Toiletry set', 'Tote bag', 'Christmas card'], ['慈善T恤', '救濟包', '食物包', '洗漱套裝', '帆布袋', '聖誕卡'], ['慈善T恤', '救济包', '食物包', '洗漱套装', '帆布袋', '圣诞卡']),
    'Order Placement': L(['Donation box', 'Food pack', 'Clothing drop', 'Toy bundle', 'Emergency kit'], ['捐款箱', '食物包', '舊衣回收', '玩具組合', '應急包'], ['捐款箱', '食物包', '旧衣回收', '玩具组合', '应急包']),
    'Web/Website': L({
      heroTitle: 'Community first, always',
      heroSub: 'Volunteers, cases and donations on one caring platform.',
      features: [{ title: 'Volunteer sign-up', text: 'Shifts filled in hours.' }, { title: 'Case tracking', text: 'Help delivered, followed up.' }, { title: 'Transparent giving', text: 'Donations with real impact.' }]
    }, {
      heroTitle: '社區為先，始終如一',
      heroSub: '義工、個案與捐款於一個有愛平台。',
      features: [{ title: '義工招募', text: '當值名額數小時內滿額。' }, { title: '個案追蹤', text: '援助送達並持續跟進。' }, { title: '透明捐贈', text: '捐款產生真實影響。' }]
    }, {
      heroTitle: '社区为先，始终如一',
      heroSub: '义工、个案与捐款于一个有爱平台。',
      features: [{ title: '义工招募', text: '当值名额数小时内满额。' }, { title: '个案追踪', text: '援助送达并持续跟进。' }, { title: '透明捐赠', text: '捐款产生真实影响。' }]
    }),
    'Mobile App': L({ up: ['Volunteer shift', 'Workshop slot'], bk: ['Volunteer shift', 'Counselling session', 'Food bank slot'], tx: ['Donation', 'Fundraising', 'Grant'] }, { up: ['義工當值', '工作坊名額'], bk: ['義工當值', '輔導時段', '食物銀行時段'], tx: ['捐款', '籌款', '資助'] }, { up: ['义工当值', '工作坊名额'], bk: ['义工当值', '辅导时段', '食物银行时段'], tx: ['捐款', '筹款', '资助'] }),
    Attendance: L(['Volunteer shift', 'Counselling room', 'Workshop hall', 'Food bank'], ['義工當值', '輔導室', '工作坊', '食物銀行'], ['义工当值', '辅导室', '工作坊', '食物银行']),
    'Visitor Management': L(['Client', 'Volunteer', 'Donor', 'Interview'], ['受助者', '義工', '捐贈者', '面試'], ['受助者', '义工', '捐赠者', '面试']),
    Inventory: L(['Food packs', 'Hygiene kits', 'Blankets', 'Toy bundles'], ['食物包', '清潔套裝', '毛毯', '玩具組合'], ['食物包', '清洁套装', '毛毯', '玩具组合']),
    Logistics: L(['Sham Shui Po', 'MK', 'Tsuen Wan', 'Kowloon City'], ['深水埗', '旺角', '荃灣', '九龍城'], ['深水埗', '旺角', '荃湾', '九龙城']),
    'Data & Analytics': L(['Casework', 'Volunteers', 'Food bank', 'Donations'], ['個案', '義工', '食物銀行', '捐款'], ['个案', '义工', '食物银行', '捐款']),
    Ticketing: L(['Charity gala', 'Volunteer day', 'Community fair'], ['慈善晚宴', '義工日', '社區嘉年華'], ['慈善晚宴', '义工日', '社区嘉年华']),
    Loyalty: L(['Volunteer badge', 'HK$50 voucher', 'Care pack'], ['義工襟章', 'HK$50 禮券', '關懷禮包'], ['义工襟章', 'HK$50 礼券', '关怀礼包']),
  }
});
cat({
  key: 'cospace',
  product: L('HubWorks Co-Space', '集作空間', '集作空间'),
  theme: 'amber',
  names: {
    Booking: L(['Meeting room', 'Hot desk day', 'Conference hall', 'Pod session'], ['會議室', '流動辦公桌日票', '會議廳', '電話房'], ['会议室', '流动办公桌日票', '会议厅', '电话房']),
    Membership: L(['Day pass', 'Co-working', 'Private office'], ['日票', '共享工作', '私人辦公室'], ['日票', '共享工作', '私人办公室']),
    'Cloud System': L(['Space portal', 'Desk API', 'Member app', 'Payments'], ['空間入口', '座位 API', '會員應用', '付款'], ['空间入口', '座位 API', '会员应用', '付款']),
    eCommerce: L(['Standing desk', 'Ergo chair', 'Monitor arm', 'Noise-cancelling set', 'Laptop sleeve', 'Fridge box'], ['升降桌', '人體工學椅', '顯示器支架', '降噪套裝', '電腦袋', '雪櫃儲存格'], ['升降桌', '人体工学椅', '显示器支架', '降噪套装', '电脑袋', '雪柜储存格']),
    'Order Placement': L(['Flat white', 'Sandwich', 'Energy bar', 'Filter coffee', 'Fruit cup'], ['鮮奶咖啡', '三文治', '能量棒', '濾掛咖啡', '水果杯'], ['鲜奶咖啡', '三文治', '能量棒', '滤挂咖啡', '水果杯']),
    'Web/Website': L({
      heroTitle: 'Space to do great work',
      heroSub: 'Desks, rooms and members on one flexible platform.',
      features: [{ title: 'Instant booking', text: 'Desks and rooms in a tap.' }, { title: 'Flexible plans', text: 'From day passes to offices.' }, { title: 'Member perks', text: 'Networking and events built in.' }]
    }, {
      heroTitle: '成就好工作的空間',
      heroSub: '座位、會議室與會員於一個靈活平台。',
      features: [{ title: '即時預約', text: '座位與房間一按搞定。' }, { title: '靈活方案', text: '由日票到辦公室皆可。' }, { title: '會員福利', text: '內建人脈與活動。' }]
    }, {
      heroTitle: '成就好工作的空间',
      heroSub: '座位、会议室与会员于一个灵活平台。',
      features: [{ title: '即时预约', text: '座位与房间一按搞定。' }, { title: '灵活方案', text: '由日票到办公室皆可。' }, { title: '会员福利', text: '内建人脉与活动。' }]
    }),
    'Mobile App': L({ up: ['Meeting room', 'Conference hall'], bk: ['Meeting room', 'Hot desk day', 'Pod session'], tx: ['Membership fee', 'Room rental', 'Referral bonus'] }, { up: ['會議室', '會議廳'], bk: ['會議室', '流動辦公桌日票', '電話房'], tx: ['會籍費用', '房間租用', '推薦獎賞'] }, { up: ['会议室', '会议厅'], bk: ['会议室', '流动办公桌日票', '电话房'], tx: ['会籍费用', '房间租用', '推荐奖赏'] }),
    Attendance: L(['Open floor', 'Meeting rooms', 'Conference hall', 'Phone pods'], ['開放工作區', '會議室', '會議廳', '電話房'], ['开放工作区', '会议室', '会议厅', '电话房']),
    'Visitor Management': L(['Member', 'Day pass', 'Guest', 'Interview'], ['會員', '日票', '訪客', '面試'], ['会员', '日票', '访客', '面试']),
    Inventory: L(['Chairs', 'Monitors', 'Coffee beans', 'Stationery'], ['座椅', '顯示器', '咖啡豆', '文具'], ['座椅', '显示器', '咖啡豆', '文具']),
    Logistics: L(['Wan Chai', 'TST', 'MK', 'Kwun Tong'], ['灣仔', '尖沙咀', '旺角', '觀塘'], ['湾仔', '尖沙咀', '旺角', '观塘']),
    'Data & Analytics': L(['Memberships', 'Room rental', 'Events', 'Cafe'], ['會籍', '會議室租用', '活動', '咖啡廳'], ['会籍', '会议室租用', '活动', '咖啡厅']),
    Ticketing: L(['Founder pitch night', 'Networking mixer', 'Demo day'], ['創辦人路演之夜', '交流聯誼', '演示日'], ['创办人路演之夜', '交流联谊', '演示日']),
    Loyalty: L(['Free day pass', 'HK$100 voucher', 'Room credit'], ['免費日票', 'HK$100 禮券', '會議室禮券'], ['免费日票', 'HK$100 礼券', '会议室礼券']),
  }
});

cat({
  key: 'freshfood',
  product: L('Fresh Basket', '新鮮籃子', '新鲜篮子'),
  theme: 'green',
  names: {
    Booking: L(['Delivery slot', 'Farm visit', 'Tasting table', 'Pickup time'], ['送貨時段', '農場參觀', '試食枱', '自取時段'], ['送货时段', '农场参观', '试食枱', '自取时段']),
    Membership: L(['Casual', 'Weekly box', 'Season pass'], ['散客', '每週箱', '季度證'], ['散客', '每周箱', '季度证']),
    'Cloud System': L(['Market portal', 'Stock API', 'Farm app', 'Payments'], ['市集入口', '庫存 API', '農場應用', '付款'], ['市集入口', '库存 API', '农场应用', '付款']),
    eCommerce: L(['Vegetable box', 'Fruit basket', 'Free-range eggs', 'Sourdough', 'Honey jar', 'Seasonal jam'], ['蔬菜盒', '水果籃', '走地雞蛋', '酸種麵包', '蜂蜜罐', '時令果醬'], ['蔬菜盒', '水果篮', '走地鸡蛋', '酸种面包', '蜂蜜罐', '时令果酱']),
    'Order Placement': L(['Baby spinach', 'Tomatoes', 'Sourdough', 'Free-range eggs', 'Mint tea'], ['嫩菠菜', '番茄', '酸種包', '走地雞蛋', '薄荷茶'], ['嫩菠菜', '番茄', '酸种包', '走地鸡蛋', '薄荷茶']),
    'Web/Website': L({
      heroTitle: 'Farm to table, on time',
      heroSub: 'Stock, orders and deliveries on one fresh platform.',
      features: [{ title: 'Live stock', text: 'What is in, when it sells out.' }, { title: 'Subscription boxes', text: 'Weekly baskets, on autopilot.' }, { title: 'Smooth delivery', text: 'Slots that always fit.' }]
    }, {
      heroTitle: '由農場到餐桌，準時到達',
      heroSub: '庫存、訂單與送貨於一個新鮮平台。',
      features: [{ title: '實時庫存', text: '何時有貨、何時售罄。' }, { title: '訂閱蔬菜箱', text: '每週菜籃自動送達。' }, { title: '順暢送貨', text: '送貨時段永遠合時。' }]
    }, {
      heroTitle: '由农场到餐桌，准时到达',
      heroSub: '库存、订单与送货于一个新鲜平台。',
      features: [{ title: '实时库存', text: '何时有货、何时售罄。' }, { title: '订阅蔬菜箱', text: '每周菜篮自动送达。' }, { title: '顺畅送货', text: '送货时段永远合时。' }]
    }),
    'Mobile App': L({ up: ['Delivery slot', 'Tasting table'], bk: ['Delivery slot', 'Farm visit', 'Pickup time'], tx: ['Groceries', 'Delivery fee', 'Referral bonus'] }, { up: ['送貨時段', '試食枱'], bk: ['送貨時段', '農場參觀', '自取時段'], tx: ['雜貨', '送貨費', '推薦獎賞'] }, { up: ['送货时段', '试食枱'], bk: ['送货时段', '农场参观', '自取时段'], tx: ['杂货', '送货费', '推荐奖赏'] }),
    Attendance: L(['Market stall', 'Packing bench', 'Farm pickup', 'Delivery line'], ['市集攤檔', '包裝枱', '農場自取', '送貨線'], ['市集摊档', '包装台', '农场自取', '送货线']),
    'Visitor Management': L(['Customer', 'Farmer', 'Guest', 'Interview'], ['顧客', '農夫', '訪客', '面試'], ['顾客', '农夫', '访客', '面试']),
    Inventory: L(['Vegetables', 'Fruit', 'Eggs', 'Bread'], ['蔬菜', '水果', '雞蛋', '麵包'], ['蔬菜', '水果', '鸡蛋', '面包']),
    Logistics: L(['Tsuen Wan', 'Sha Tin', 'Tuen Mun', 'North Point'], ['荃灣', '沙田', '屯門', '北角'], ['荃湾', '沙田', '屯门', '北角']),
    'Data & Analytics': L(['Vegetables', 'Fruit', 'Dairy', 'Bakery'], ['蔬菜', '水果', '乳製品', '烘焙'], ['蔬菜', '水果', '乳制品', '烘焙']),
    Ticketing: L(['Farmers market', 'Harvest festival', 'Cooking demo'], ['農夫市集', '豐收節', '烹飪示範'], ['农夫市集', '丰收节', '烹饪示范']),
    Loyalty: L(['Free herbs', 'HK$60 voucher', 'Basket upgrade'], ['免費香草', 'HK$60 禮券', '蔬菜箱升級'], ['免费香草', 'HK$60 礼券', '蔬菜箱升级']),
  }
});

cat({
  key: 'catering',
  product: L('Feast & Co Catering', '盛宴餐飲', '盛宴餐饮'),
  theme: 'red',
  names: {
    Booking: L(['Corporate lunch', 'Wedding banquet', 'Canapé bar', 'Cooking demo'], ['企業午餐', '婚宴酒席', '小食吧', '烹飪示範'], ['企业午餐', '婚宴酒席', '小食吧', '烹饪示范']),
    Membership: L(['One-off', 'Corporate', 'Annual client'], ['單次', '企業', '年度客戶'], ['单次', '企业', '年度客户']),
    'Cloud System': L(['Kitchen portal', 'Menu API', 'Event app', 'Payments'], ['廚房入口', '菜單 API', '活動應用', '付款'], ['厨房入口', '菜单 API', '活动应用', '付款']),
    eCommerce: L(['Canapé set', 'Buffet package', 'Dessert tower', 'BBQ kit', 'Bartender hour', 'Grazing table'], ['小食套餐', '自助餐套餐', '甜品塔', '燒烤套裝', '調酒師時段', '小食桌'], ['小食套餐', '自助餐套餐', '甜品塔', '烧烤套装', '调酒师时段', '小食桌']),
    'Order Placement': L(['Canapé platter', 'Mini burger', 'Spring rolls', 'Mocktail', 'Dessert cup'], ['小食拼盤', '迷你漢堡', '春卷', '無酒精雞尾酒', '甜品杯'], ['小食拼盘', '迷你汉堡', '春卷', '无酒精鸡尾酒', '甜品杯']),
    'Web/Website': L({
      heroTitle: 'Events served perfectly',
      heroSub: 'Menus, kitchens and events on one catering platform.',
      features: [{ title: 'Menu builder', text: 'Quotes and menus in minutes.' }, { title: 'Event calendar', text: 'Kitchen capacity, planned.' }, { title: 'Live service', text: 'Orders track to the table.' }]
    }, {
      heroTitle: '宴會服務，完美上菜',
      heroSub: '菜單、廚房與活動於一個餐飲平台。',
      features: [{ title: '菜單設計', text: '報價與菜單數分鐘完成。' }, { title: '活動日程', text: '廚房產能提前規劃。' }, { title: '即時服務', text: '訂單追蹤至每張餐桌。' }]
    }, {
      heroTitle: '宴会服务，完美上菜',
      heroSub: '菜单、厨房与活动于一个餐饮平台。',
      features: [{ title: '菜单设计', text: '报价与菜单数分钟完成。' }, { title: '活动日程', text: '厨房产能提前规划。' }, { title: '即时服务', text: '订单追踪至每张餐桌。' }]
    }),
    'Mobile App': L({ up: ['Corporate lunch', 'Wedding banquet'], bk: ['Corporate lunch', 'Wedding banquet', 'Canapé bar'], tx: ['Catering invoice', 'Ingredients', 'Referral bonus'] }, { up: ['企業午餐', '婚宴酒席'], bk: ['企業午餐', '婚宴酒席', '小食吧'], tx: ['餐飲帳單', '食材', '推薦獎賞'] }, { up: ['企业午餐', '婚宴酒席'], bk: ['企业午餐', '婚宴酒席', '小食吧'], tx: ['餐饮帐单', '食材', '推荐奖赏'] }),
    Attendance: L(['Prep kitchen', 'Canapé line', 'Event floor', 'Cold store'], ['備餐廚房', '小食線', '活動場地', '冷庫'], ['备餐厨房', '小食线', '活动场地', '冷库']),
    'Visitor Management': L(['Client', 'Guest', 'Supplier', 'Interview'], ['客戶', '來賓', '供應商', '面試'], ['客户', '来宾', '供应商', '面试']),
    Inventory: L(['Canapé trays', 'Napkins', 'Ice', 'Beverages'], ['小食盤', '餐巾', '冰塊', '飲品'], ['小食盘', '餐巾', '冰块', '饮品']),
    Logistics: L(['CWB', 'Wan Chai', 'MK', 'TST'], ['銅鑼灣', '灣仔', '旺角', '尖沙咀'], ['铜锣湾', '湾仔', '旺角', '尖沙咀']),
    'Data & Analytics': L(['Corporate', 'Weddings', 'Parties', 'Add-ons'], ['企業', '婚宴', '派對', '附加服務'], ['企业', '婚宴', '派对', '附加服务']),
    Ticketing: L(['Tasting night', 'Wedding showcase', 'Chef masterclass'], ['試食之夜', '婚宴展', '廚師大師班'], ['试食之夜', '婚宴展', '厨师大师班']),
    Loyalty: L(['Free dessert bar', 'HK$200 voucher', 'Menu tasting'], ['免費甜品吧', 'HK$200 禮券', '菜單試食'], ['免费甜品吧', 'HK$200 礼券', '菜单试食']),
  }
});

cat({
  key: 'jewelry',
  product: L('Aurum Jewellery', '金藝珠寶', '金艺珠宝'),
  theme: 'yellow',
  names: {
    Booking: L(['Diamond consult', 'Ring sizing', 'Engraving service', 'Private viewing'], ['鑽石諮詢', '戒指度身', '刻字服務', '私人鑑賞'], ['钻石咨询', '戒指度身', '刻字服务', '私人鉴赏']),
    Membership: L(['Guest', 'Collector', 'VIP'], ['訪客', '收藏家', 'VIP'], ['访客', '收藏家', 'VIP']),
    'Cloud System': L(['Boutique portal', 'Stock API', 'Advisor app', 'Payments'], ['專門店入口', '庫存 API', '顧問應用', '付款'], ['专门店入口', '库存 API', '顾问应用', '付款']),
    eCommerce: L(['Diamond ring', 'Gold bangle', 'Pearl necklace', 'Sapphire earrings', 'Wedding band', 'Charity charm'], ['鑽石戒指', '黃金手鐲', '珍珠頸鏈', '藍寶石耳環', '結婚對戒', '慈善吊墜'], ['钻石戒指', '黄金手镯', '珍珠颈链', '蓝宝石耳环', '结婚对戒', '慈善吊坠']),
    'Order Placement': L(['Ring cleaning', 'Chain repair', 'Polish service', 'Storage box', 'Gift wrap'], ['戒指清潔', '鏈條維修', '拋光服務', '珠寶盒', '禮物包裝'], ['戒指清洁', '链条维修', '抛光服务', '珠宝盒', '礼物包装']),
    'Web/Website': L({
      heroTitle: 'Crafted to be treasured',
      heroSub: 'Inventory, consultations and orders on one elegant platform.',
      features: [{ title: 'Live stock', text: 'Every piece accounted for.' }, { title: 'Advisor tools', text: 'Consultations that convert.' }, { title: 'Secure orders', text: 'High-value sales, handled safely.' }]
    }, {
      heroTitle: '匠心打造，值得珍藏',
      heroSub: '庫存、諮詢與訂單於一個典雅平台。',
      features: [{ title: '實時庫存', text: '每件首飾有據可查。' }, { title: '顧問工具', text: '諮詢促成交易。' }, { title: '安全訂單', text: '高價值銷售安全處理。' }]
    }, {
      heroTitle: '匠心打造，值得珍藏',
      heroSub: '库存、咨询与订单于一个典雅平台。',
      features: [{ title: '实时库存', text: '每件首饰有据可查。' }, { title: '顾问工具', text: '咨询促成交易。' }, { title: '安全订单', text: '高价值销售安全处理。' }]
    }),
    'Mobile App': L({ up: ['Diamond consult', 'Private viewing'], bk: ['Diamond consult', 'Ring sizing', 'Private viewing'], tx: ['Ring purchase', 'Custom order', 'Referral bonus'] }, { up: ['鑽石諮詢', '私人鑑賞'], bk: ['鑽石諮詢', '戒指度身', '私人鑑賞'], tx: ['戒指購買', '訂製訂單', '推薦獎賞'] }, { up: ['钻石咨询', '私人鉴赏'], bk: ['钻石咨询', '戒指度身', '私人鉴赏'], tx: ['戒指购买', '订制订单', '推荐奖赏'] }),
    Attendance: L(['Showcase floor', 'Consultation room', 'Workshop bench', 'Vault'], ['展示大堂', '諮詢室', '工藝枱', '保險庫'], ['展示大堂', '咨询室', '工艺台', '保险库']),
    'Visitor Management': L(['Client', 'Guest', 'Supplier', 'Interview'], ['客戶', '訪客', '供應商', '面試'], ['客户', '访客', '供应商', '面试']),
    Inventory: L(['Diamond rings', 'Gold chains', 'Pearl sets', 'Charms'], ['鑽石戒指', '金鏈', '珍珠套裝', '吊墜'], ['钻石戒指', '金链', '珍珠套装', '吊坠']),
    Logistics: L(['Central', 'TST', 'CWB', 'MK'], ['中環', '尖沙咀', '銅鑼灣', '旺角'], ['中环', '尖沙咀', '铜锣湾', '旺角']),
    'Data & Analytics': L(['Rings', 'Bangles', 'Necklaces', 'Custom'], ['戒指', '手鐲', '頸鏈', '訂製'], ['戒指', '手镯', '颈链', '订制']),
    Ticketing: L(['Diamond masterclass', 'Gem fair', 'Anniversary event'], ['鑽石大師班', '寶石展', '週年紀念活動'], ['钻石大师班', '宝石展', '周年纪念活动']),
    Loyalty: L(['Free polishing', 'HK$300 voucher', 'Storage upgrade'], ['免費拋光', 'HK$300 禮券', '保管升級'], ['免费抛光', 'HK$300 礼券', '保管升级']),
  }
});

cat({
  key: 'workshop',
  product: L('Maker Lab', '創客工坊', '创客工坊'),
  theme: 'slate',
  names: {
    Booking: L(['Woodwork class', '3D printing', 'CNC training', 'Studio bench hour'], ['木工課程', '3D 打印', 'CNC 培訓', '工坊枱時段'], ['木工课程', '3D 打印', 'CNC 培训', '工坊枱时段']),
    Membership: L(['Day member', 'Monthly bench', 'Studio pass'], ['日間會員', '月費工枱', '工坊證'], ['日间会员', '月费工枱', '工坊证']),
    'Cloud System': L(['Lab portal', 'Machine API', 'Maker app', 'Payments'], ['工坊入口', '機器 API', '創客應用', '付款'], ['工坊入口', '机器 API', '创客应用', '付款']),
    eCommerce: L(['Wood kit', '3D printer spool', 'Tool set', 'Sandpaper pack', 'Safety goggles', 'Project board'], ['木工套件', '3D 打印耗材', '工具套裝', '砂紙包', '護目鏡', '作品板'], ['木工套件', '3D 打印耗材', '工具套装', '砂纸包', '护目镜', '作品板']),
    'Order Placement': L(['Wood blocks', 'Filament', 'Fasteners', 'Paint set', 'Measuring kit'], ['木塊', '打印耗材', '緊固件', '顏料套裝', '量度工具'], ['木块', '打印耗材', '紧固件', '颜料套装', '量度工具']),
    'Web/Website': L({
      heroTitle: 'Make something great',
      heroSub: 'Classes, machines and members on one maker platform.',
      features: [{ title: 'Class booking', text: 'Seats fill, slots sell.' }, { title: 'Machine time', text: 'Book the tools you need.' }, { title: 'Project tracking', text: 'From sketch to showcase.' }]
    }, {
      heroTitle: '動手創造非凡',
      heroSub: '課程、機器與會員於一個創客平台。',
      features: [{ title: '課程預約', text: '名額有限，先到先得。' }, { title: '機器時段', text: '預約所需工具。' }, { title: '作品追蹤', text: '由草稿到展出。' }]
    }, {
      heroTitle: '动手创造非凡',
      heroSub: '课程、机器与会员于一个创客平台。',
      features: [{ title: '课程预约', text: '名额有限，先到先得。' }, { title: '机器时段', text: '预约所需工具。' }, { title: '作品追踪', text: '由草稿到展出。' }]
    }),
    'Mobile App': L({ up: ['Woodwork class', '3D printing'], bk: ['Woodwork class', 'CNC training', 'Studio bench hour'], tx: ['Class fee', 'Materials', 'Referral bonus'] }, { up: ['木工課程', '3D 打印'], bk: ['木工課程', 'CNC 培訓', '工坊枱時段'], tx: ['課程費', '材料', '推薦獎賞'] }, { up: ['木工课程', '3D 打印'], bk: ['木工课程', 'CNC 培训', '工坊枱时段'], tx: ['课程费', '材料', '推荐奖赏'] }),
    Attendance: L(['Wood bench', '3D printing corner', 'CNC bay', 'Paint room'], ['木工枱', '3D 打印角', 'CNC 區', '噴漆房'], ['木工枱', '3D 打印角', 'CNC 区', '喷漆房']),
    'Visitor Management': L(['Member', 'Guest', 'Supplier', 'Interview'], ['會員', '訪客', '供應商', '面試'], ['会员', '访客', '供应商', '面试']),
    Inventory: L(['Wood', 'Filament', 'Fasteners', 'Paints'], ['木材', '打印耗材', '緊固件', '顏料'], ['木材', '打印耗材', '紧固件', '颜料']),
    Logistics: L(['Kwun Tong', 'Tsuen Wan', 'Shatin', 'CWB'], ['觀塘', '荃灣', '沙田', '銅鑼灣'], ['观塘', '荃湾', '沙田', '铜锣湾']),
    'Data & Analytics': L(['Classes', 'Machine rental', 'Materials', 'Memberships'], ['課程', '機器租用', '材料', '會籍'], ['课程', '机器租用', '材料', '会籍']),
    Ticketing: L(['Maker fair', 'Robotics night', 'DIY weekend'], ['創客市集', '機械人之夜', '自製週末'], ['创客市集', '机械人之夜', '自制周末']),
    Loyalty: L(['Free bench hour', 'HK$80 voucher', 'Material pack'], ['免費工枱時段', 'HK$80 禮券', '材料包'], ['免费工枱时段', 'HK$80 礼券', '材料包']),
  }
});
cat({
  key: 'spa',
  product: L('Serenity Spa', '寧逸水療', '宁逸水疗'),
  theme: 'teal',
  names: {
    Booking: L(['Relaxing massage', 'Aromatherapy', 'Body scrub', 'Couple retreat'], ['舒壓按摩', '香薰療法', '身體磨砂', '雙人水療'], ['舒压按摩', '香薰疗法', '身体磨砂', '双人水疗']),
    Membership: L(['Day guest', 'Wellness', 'Premium'], ['日間賓客', '養生', '尊尚'], ['日间宾客', '养生', '尊尚']),
    'Cloud System': L(['Spa portal', 'Booking API', 'Therapist app', 'Payments'], ['水療入口', '預約 API', '治療師應用', '付款'], ['水疗入口', '预约 API', '治疗师应用', '付款']),
    eCommerce: L(['Massage oil', 'Aroma diffuser', 'Bath salts', 'Silk robe', 'Slippers set', 'Wellness tea'], ['按摩油', '香薰擴香器', '浴鹽', '絲質浴袍', '拖鞋套裝', '養生茶'], ['按摩油', '香薰扩香器', '浴盐', '丝质浴袍', '拖鞋套装', '养生茶']),
    'Order Placement': L(['Ginger tea', 'Fruit platter', 'Towel set', 'Scalp serum', 'Cooling mist'], ['薑茶', '水果拼盤', '毛巾套裝', '頭皮精華', '清涼噴霧'], ['姜茶', '水果拼盘', '毛巾套装', '头皮精华', '清凉喷雾']),
    'Web/Website': L({
      heroTitle: 'Serenity, scheduled',
      heroSub: 'Treatments, therapists and retail on one calm platform.',
      features: [{ title: 'Treatment menu', text: 'Bookings that flow smoothly.' }, { title: 'Therapist rosters', text: 'Teams planned with care.' }, { title: 'Retail corner', text: 'Products, priced and stocked.' }]
    }, {
      heroTitle: '寧靜，按時而至',
      heroSub: '護理、治療師與零售於一個恬靜平台。',
      features: [{ title: '護理菜單', text: '預約流程順暢無間。' }, { title: '治療師排班', text: '團隊安排細心周到。' }, { title: '零售角落', text: '產品明碼標價庫存充足。' }]
    }, {
      heroTitle: '宁静，按时而至',
      heroSub: '护理、治疗师与零售于一个恬静平台。',
      features: [{ title: '护理菜单', text: '预约流程顺畅无间。' }, { title: '治疗师排班', text: '团队安排细心周到。' }, { title: '零售角落', text: '产品明码标价库存充足。' }]
    }),
    'Mobile App': L({ up: ['Relaxing massage', 'Couple retreat'], bk: ['Relaxing massage', 'Aromatherapy', 'Body scrub'], tx: ['Spa package', 'Retail', 'Referral bonus'] }, { up: ['舒壓按摩', '雙人水療'], bk: ['舒壓按摩', '香薰療法', '身體磨砂'], tx: ['水療套票', '零售', '推薦獎賞'] }, { up: ['舒压按摩', '双人水疗'], bk: ['舒压按摩', '香薰疗法', '身体磨砂'], tx: ['水疗套票', '零售', '推荐奖赏'] }),
    Attendance: L(['Massage room', 'Steam suite', 'Relax lounge', 'Retail desk'], ['按摩房', '蒸氣室', '休息室', '零售櫃枱'], ['按摩房', '蒸气室', '休息室', '零售柜台']),
    'Visitor Management': L(['Guest', 'Couple', 'Supplier', 'Interview'], ['賓客', '雙人組合', '供應商', '面試'], ['宾客', '双人组合', '供应商', '面试']),
    Inventory: L(['Massage oils', 'Towels', 'Bath salts', 'Robes'], ['按摩油', '毛巾', '浴鹽', '浴袍'], ['按摩油', '毛巾', '浴盐', '浴袍']),
    Logistics: L(['Central', 'TST', 'CWB', 'Admiralty'], ['中環', '尖沙咀', '銅鑼灣', '金鐘'], ['中环', '尖沙咀', '铜锣湾', '金钟']),
    'Data & Analytics': L(['Massages', 'Facials', 'Retail', 'Packages'], ['按摩', '面部護理', '零售', '套票'], ['按摩', '面部护理', '零售', '套票']),
    Ticketing: L(['Wellness retreat', 'Couples night', 'Spa day'], ['養生靜修', '雙人之夜', '水療日'], ['养生静修', '双人之夜', '水疗日']),
    Loyalty: L(['Free foot massage', 'HK$120 voucher', 'Robes set'], ['免費足底按摩', 'HK$120 禮券', '浴袍套裝'], ['免费足底按摩', 'HK$120 礼券', '浴袍套装']),
  }
});

cat({
  key: 'fashion',
  product: L('VKouture', '時尚服飾', '时尚服饰'),
  theme: 'pink',
  names: {
    Booking: L(['Style consult', 'Fitting room', 'Personal shopper', 'Alteration'], ['造型諮詢', '試身時段', '個人購物顧問', '修改服務'], ['造型咨询', '试身时段', '个人购物顾问', '修改服务']),
    Membership: L(['Shopper', 'Insider', 'VIP'], ['顧客', '會員', 'VIP'], ['顾客', '会员', 'VIP']),
    'Cloud System': L(['Studio portal', 'Stock API', 'Stylist app', 'Payments'], ['工作室入口', '庫存 API', '造型師應用', '付款'], ['工作室入口', '库存 API', '造型师应用', '付款']),
    eCommerce: L(['Silk blouse', 'Tailored trousers', 'Knit dress', 'Leather belt', 'Cashmere scarf', 'Linen shirt'], ['絲質襯衫', '訂造西褲', '針織連身裙', '皮帶', '羊絨圍巾', '亞麻恤衫'], ['丝质衬衫', '订造西裤', '针织连衣裙', '皮带', '羊绒围巾', '亚麻恤衫']),
    'Order Placement': L(['Express tailoring', 'Premium fabric', 'Button repair', 'Pressing', 'Style guide'], ['特快訂造', '高級布料', '鈕扣維修', '熨燙服務', '造型指南'], ['特快订造', '高级布料', '钮扣维修', '熨烫服务', '造型指南']),
    'Web/Website': L({
      heroTitle: 'Wear the vision',
      heroSub: 'Collection, stock and styling on one runway-ready platform.',
      features: [{ title: 'Collection launch', text: 'Drops go live on time.' }, { title: 'Smart stock', text: 'Sizes and colours in sync.' }, { title: 'Stylist notes', text: 'Looks customers love.' }]
    }, {
      heroTitle: '穿上願景',
      heroSub: '系列、庫存與造型於一個隨時登場的平台。',
      features: [{ title: '系列發佈', text: '新品準時上架。' }, { title: '精明庫存', text: '尺碼與顏色同步。' }, { title: '造型筆記', text: '顧客喜愛的穿搭。' }]
    }, {
      heroTitle: '穿上愿景',
      heroSub: '系列、库存与造型于一个随时登场的平台。',
      features: [{ title: '系列发布', text: '新品准时上架。' }, { title: '精明库存', text: '尺码与颜色同步。' }, { title: '造型笔记', text: '顾客喜爱的穿搭。' }]
    }),
    'Mobile App': L({ up: ['Style consult', 'Personal shopper'], bk: ['Style consult', 'Fitting room', 'Alteration'], tx: ['Garment sale', 'Tailoring fee', 'Referral bonus'] }, { up: ['造型諮詢', '個人購物顧問'], bk: ['造型諮詢', '試身時段', '修改服務'], tx: ['服裝銷售', '訂造費', '推薦獎賞'] }, { up: ['造型咨询', '个人购物顾问'], bk: ['造型咨询', '试身时段', '修改服务'], tx: ['服装销售', '订造费', '推荐奖赏'] }),
    Attendance: L(['Boutique floor', 'Fitting rooms', 'Tailor bench', 'Stock room'], ['門市樓層', '試身室', '裁縫枱', '倉庫'], ['门市楼层', '试身室', '裁缝台', '仓库']),
    'Visitor Management': L(['Client', 'Guest', 'Supplier', 'Interview'], ['客戶', '訪客', '供應商', '面試'], ['客户', '访客', '供应商', '面试']),
    Inventory: L(['Silk blouses', 'Tailored pants', 'Scarves', 'Belts'], ['絲質襯衫', '訂造西褲', '圍巾', '皮帶'], ['丝质衬衫', '订造西裤', '围巾', '皮带']),
    Logistics: L(['Central', 'CWB', 'TST', 'MK'], ['中環', '銅鑼灣', '尖沙咀', '旺角'], ['中环', '铜锣湾', '尖沙咀', '旺角']),
    'Data & Analytics': L(['Ready-to-wear', 'Tailoring', 'Accessories', 'Alterations'], ['成衣', '訂造', '配飾', '修改'], ['成衣', '订造', '配饰', '修改']),
    Ticketing: L(['Fashion show', 'Sample sale', 'Styling workshop'], ['時裝秀', '樣板特賣', '造型工作坊'], ['时装秀', '样板特卖', '造型工作坊']),
    Loyalty: L(['Free alteration', 'HK$150 voucher', 'Styling session'], ['免費修改', 'HK$150 禮券', '造型時段'], ['免费修改', 'HK$150 礼券', '造型时段']),
  }
});

cat({
  key: 'electronics',
  product: L('Voltex Electronics', '電子精品', '电子精品'),
  theme: 'cyan',
  names: {
    Booking: L(['Repair appointment', 'Setup service', 'Trade-in check', 'Tech consult'], ['維修預約', '安裝服務', '以舊換新檢查', '科技諮詢'], ['维修预约', '安装服务', '以旧换新检查', '科技咨询']),
    Membership: L(['Basic', 'Plus Care', 'Pro'], ['基本', 'Plus 保養', 'Pro'], ['基本', 'Plus 保养', 'Pro']),
    'Cloud System': L(['Store portal', 'Parts API', 'Tech app', 'Payments'], ['門市入口', '零件 API', '技術員應用', '付款'], ['门市入口', '零件 API', '技术员应用', '付款']),
    eCommerce: L(['Earbuds', 'Smart watch', 'Bluetooth speaker', 'Power bank', 'USB-C hub', 'Webcam'], ['無線耳機', '智能手錶', '藍牙喇叭', '行動電源', 'USB-C 集線器', '網絡攝影機'], ['无线耳机', '智能手表', '蓝牙喇叭', '行动电源', 'USB-C 集线器', '网络摄影机']),
    'Order Placement': L(['Screen repair', 'Battery swap', 'Clean & check', 'Cable kit', 'Warranty plan'], ['換螢幕', '換電池', '清潔檢查', '線材套裝', '保養計劃'], ['换萤幕', '换电池', '清洁检查', '线材套装', '保养计划']),
    'Web/Website': L({
      heroTitle: 'Tech that just works',
      heroSub: 'Sales, repairs and support on one gadget-grade platform.',
      features: [{ title: 'Repair tracking', text: 'Jobs tracked to the minute.' }, { title: 'Trade-ins', text: 'Old devices, fair value.' }, { title: 'Smart warranty', text: 'Coverage you can rely on.' }]
    }, {
      heroTitle: '科技，一切順暢',
      heroSub: '銷售、維修與支援於一個專業平台。',
      features: [{ title: '維修追蹤', text: '工單精確至分鐘。' }, { title: '以舊換新', text: '舊裝置公道估值。' }, { title: '精明保養', text: '保障可靠安心。' }]
    }, {
      heroTitle: '科技，一切顺畅',
      heroSub: '销售、维修与支援于一个专业平台。',
      features: [{ title: '维修追踪', text: '工单精确至分钟。' }, { title: '以旧换新', text: '旧装置公道估值。' }, { title: '精明保养', text: '保障可靠安心。' }]
    }),
    'Mobile App': L({ up: ['Repair appointment', 'Tech consult'], bk: ['Repair appointment', 'Setup service', 'Trade-in check'], tx: ['Device sale', 'Repair fee', 'Referral bonus'] }, { up: ['維修預約', '科技諮詢'], bk: ['維修預約', '安裝服務', '以舊換新檢查'], tx: ['裝置銷售', '維修費', '推薦獎賞'] }, { up: ['维修预约', '科技咨询'], bk: ['维修预约', '安装服务', '以旧换新检查'], tx: ['装置销售', '维修费', '推荐奖赏'] }),
    Attendance: L(['Service counter', 'Repair bench', 'Test bench', 'Showroom'], ['服務櫃枱', '維修枱', '測試枱', '陳列室'], ['服务柜台', '维修台', '测试台', '陈列室']),
    'Visitor Management': L(['Customer', 'Guest', 'Supplier', 'Interview'], ['顧客', '訪客', '供應商', '面試'], ['顾客', '访客', '供应商', '面试']),
    Inventory: L(['Earbuds', 'Power banks', 'Screens', 'Batteries'], ['耳機', '行動電源', '螢幕', '電池'], ['耳机', '行动电源', '萤幕', '电池']),
    Logistics: L(['Mong Kok', 'CWB', 'TST', 'Tsuen Wan'], ['旺角', '銅鑼灣', '尖沙咀', '荃灣'], ['旺角', '铜锣湾', '尖沙咀', '荃湾']),
    'Data & Analytics': L(['Devices', 'Repairs', 'Accessories', 'Warranty'], ['裝置', '維修', '配件', '保養'], ['装置', '维修', '配件', '保养']),
    Ticketing: L(['Product launch', 'Tech night', 'Trade-in week'], ['新品發佈', '科技之夜', '以舊換新週'], ['新品发布', '科技之夜', '以旧换新周']),
    Loyalty: L(['Free cleaning', 'HK$80 voucher', 'Warranty boost'], ['免費清潔', 'HK$80 禮券', '保養升級'], ['免费清洁', 'HK$80 礼券', '保养升级']),
  }
});

cat({
  key: 'grocery',
  product: L('GreenMart', '綠市集', '绿市集'),
  theme: 'green',
  names: {
    Booking: L(['Delivery slot', 'Meal kit plan', 'Tasting corner', 'Pickup point'], ['送貨時段', '餐盒計劃', '試食角', '自取點'], ['送货时段', '餐盒计划', '试食角', '自取点']),
    Membership: L(['Shopper', 'Family', 'Zero-waste club'], ['顧客', '家庭', '零浪費會'], ['顾客', '家庭', '零浪费会']),
    'Cloud System': L(['Market portal', 'Stock API', 'Cashier app', 'Payments'], ['市集入口', '庫存 API', '收銀應用', '付款'], ['市集入口', '库存 API', '收银应用', '付款']),
    eCommerce: L(['Organic veg box', 'Grass-fed beef', 'Milk pack', 'Egg tray', 'Cereal jar', 'Bulk nuts'], ['有機蔬菜盒', '草飼牛肉', '牛奶裝', '雞蛋托', '穀物罐', '散裝堅果'], ['有机蔬菜盒', '草饲牛肉', '牛奶装', '鸡蛋托', '谷物罐', '散装坚果']),
    'Order Placement': L(['Wholegrain bread', 'Greek yogurt', 'Bananas', 'Olive oil', 'Honey'], ['全麥麵包', '希臘乳酪', '香蕉', '橄欖油', '蜂蜜'], ['全麦面包', '希腊乳酪', '香蕉', '橄榄油', '蜂蜜']),
    'Web/Website': L({
      heroTitle: 'Fresh is the default',
      heroSub: 'Stock, orders and home delivery on one green platform.',
      features: [{ title: 'Live stock', text: 'Fresh counts, always current.' }, { title: 'Home delivery', text: 'Slots that respect your time.' }, { title: 'Zero-waste', text: 'Bulk, refill and reuse made easy.' }]
    }, {
      heroTitle: '新鮮，就是預設',
      heroSub: '庫存、訂單與送貨於一個綠色平台。',
      features: [{ title: '實時庫存', text: '新鮮數量時刻更新。' }, { title: '送貨上門', text: '時段尊重您的時間。' }, { title: '零浪費', text: '散裝、補充與重用輕鬆做到。' }]
    }, {
      heroTitle: '新鲜，就是预设',
      heroSub: '库存、订单与送货于一个绿色平台。',
      features: [{ title: '实时库存', text: '新鲜数量时刻更新。' }, { title: '送货上门', text: '时段尊重您的时间。' }, { title: '零浪费', text: '散装、补充与重用轻松做到。' }]
    }),
    'Mobile App': L({ up: ['Delivery slot', 'Meal kit plan'], bk: ['Delivery slot', 'Meal kit plan', 'Pickup point'], tx: ['Groceries', 'Delivery fee', 'Referral bonus'] }, { up: ['送貨時段', '餐盒計劃'], bk: ['送貨時段', '餐盒計劃', '自取點'], tx: ['雜貨', '送貨費', '推薦獎賞'] }, { up: ['送货时段', '餐盒计划'], bk: ['送货时段', '餐盒计划', '自取点'], tx: ['杂货', '送货费', '推荐奖赏'] }),
    Attendance: L(['Produce aisle', 'Butcher counter', 'Bakery corner', 'Checkout line'], ['蔬果區', '肉檔', '烘焙角', '收銀線'], ['蔬果区', '肉档', '烘焙角', '收银线']),
    'Visitor Management': L(['Shopper', 'Guest', 'Supplier', 'Interview'], ['顧客', '訪客', '供應商', '面試'], ['顾客', '访客', '供应商', '面试']),
    Inventory: L(['Vegetables', 'Dairy', 'Bakery', 'Bulk goods'], ['蔬菜', '乳製品', '烘焙', '散裝貨品'], ['蔬菜', '乳制品', '烘焙', '散装货品']),
    Logistics: L(['North Point', 'Shatin', 'Tsuen Wan', 'TKO'], ['北角', '沙田', '荃灣', '將軍澳'], ['北角', '沙田', '荃湾', '将军澳']),
    'Data & Analytics': L(['Produce', 'Dairy', 'Bakery', 'Bulk'], ['蔬果', '乳製品', '烘焙', '散裝'], ['蔬果', '乳制品', '烘焙', '散装']),
    Ticketing: L(['Organic week', 'Kids cooking', 'Farmers demo'], ['有機週', '兒童烹飪', '農夫示範'], ['有机周', '儿童烹饪', '农夫示范']),
    Loyalty: L(['Free apples', 'HK$50 voucher', 'Refill pack'], ['免費蘋果', 'HK$50 禮券', '補充套裝'], ['免费苹果', 'HK$50 礼券', '补充套装']),
  }
});

cat({
  key: 'pharmacy',
  product: L('Plus Pharmacy', '康健藥房', '康健药房'),
  theme: 'cyan',
  names: {
    Booking: L(['Medication review', 'Health check', 'Vaccination', 'Consultation'], ['用藥覆核', '健康檢查', '疫苗接種', '藥劑師諮詢'], ['用药复核', '健康检查', '疫苗接种', '药剂师咨询']),
    Membership: L(['Walk-in', 'Care plan', 'Chronic plan'], ['散客', '護理計劃', '長期計劃'], ['散客', '护理计划', '长期计划']),
    'Cloud System': L(['Pharmacy portal', 'Prescription API', 'Pharmacist app', 'Payments'], ['藥房入口', '處方 API', '藥劑師應用', '付款'], ['药房入口', '处方 API', '药剂师应用', '付款']),
    eCommerce: L(['Vitamin C', 'Melatonin', 'Hand sanitizer', 'Blood pressure monitor', 'Pill organizer', 'First aid pack'], ['維他命C', '褪黑素', '消毒洗手液', '血壓計', '藥盒', '急救包'], ['维他命C', '褪黑素', '消毒洗手液', '血压计', '药盒', '急救包']),
    'Order Placement': L(['Cough drops', 'Pain relief gel', 'Zinc lozenges', 'Thermometer', 'Sanitizer'], ['止咳糖', '止痛凝膠', '鋅含片', '體溫計', '消毒液'], ['止咳糖', '止痛凝胶', '锌含片', '体温计', '消毒液']),
    'Web/Website': L({
      heroTitle: 'Care at the counter',
      heroSub: 'Prescriptions, health checks and retail on one pharmacy platform.',
      features: [{ title: 'Prescription ready', text: 'Refills prepared in advance.' }, { title: 'Health checks', text: 'Quick tests, clear advice.' }, { title: 'Trusted stock', text: 'Authentic products, verified.' }]
    }, {
      heroTitle: '櫃枱前的關懷',
      heroSub: '處方、健康檢查與零售於一個藥房平台。',
      features: [{ title: '處方就緒', text: '續配藥提前備妥。' }, { title: '健康檢查', text: '快速檢測，清晰建議。' }, { title: '可信庫存', text: '正貨產品，經已驗證。' }]
    }, {
      heroTitle: '柜台前的关怀',
      heroSub: '处方、健康检查与零售于一个药房平台。',
      features: [{ title: '处方就绪', text: '续配药提前备妥。' }, { title: '健康检查', text: '快速检测，清晰建议。' }, { title: '可信库存', text: '正货产品，经已验证。' }]
    }),
    'Mobile App': L({ up: ['Medication review', 'Vaccination'], bk: ['Medication review', 'Health check', 'Consultation'], tx: ['Medication', 'Health kit', 'Referral bonus'] }, { up: ['用藥覆核', '疫苗接種'], bk: ['用藥覆核', '健康檢查', '藥劑師諮詢'], tx: ['藥物', '健康套裝', '推薦獎賞'] }, { up: ['用药复核', '疫苗接种'], bk: ['用药复核', '健康检查', '药剂师咨询'], tx: ['药物', '健康套装', '推荐奖赏'] }),
    Attendance: L(['Dispensary', 'Check-up corner', 'Vaccine room', 'Retail floor'], ['配藥部', '檢查角', '疫苗室', '零售樓層'], ['配药部', '检查角', '疫苗室', '零售楼层']),
    'Visitor Management': L(['Customer', 'Patient', 'Supplier', 'Interview'], ['顧客', '病人', '供應商', '面試'], ['顾客', '病人', '供应商', '面试']),
    Inventory: L(['Vitamins', 'First aid', 'Over-the-counter', 'Devices'], ['維他命', '急救用品', '成藥', '醫療儀器'], ['维他命', '急救用品', '成药', '医疗仪器']),
    Logistics: L(['Central', 'TST', 'MK', 'CWB'], ['中環', '尖沙咀', '旺角', '銅鑼灣'], ['中环', '尖沙咀', '旺角', '铜锣湾']),
    'Data & Analytics': L(['Dispensary', 'Health checks', 'Vaccines', 'Retail'], ['配藥', '健康檢查', '疫苗', '零售'], ['配药', '健康检查', '疫苗', '零售']),
    Ticketing: L(['Health week', 'Vaccine drive', 'Sleep seminar'], ['健康週', '疫苗接種日', '睡眠講座'], ['健康周', '疫苗接种日', '睡眠讲座']),
    Loyalty: L(['Free thermometer', 'HK$60 voucher', 'Care pack'], ['免費體溫計', 'HK$60 禮券', '護理包'], ['免费体温计', 'HK$60 礼券', '护理包']),
  }
});

cat({
  key: 'fintech',
  product: L('NovaPay', '新融支付', '新融支付'),
  theme: 'indigo',
  names: {
    Booking: L(['Priority support', 'Business onboarding', 'Settlement review', 'Instant payout'], ['優先支援', '企業開戶', '結算審核', '即時出款'], ['优先支援', '企业开户', '结算审核', '即时出款']),
    Membership: L(['Standard', 'Business', 'Enterprise'], ['標準', '商業', '企業'], ['标准', '商业', '企业']),
    'Cloud System': L(['Payment gateway', 'Wallet API', 'Settlement engine', 'Risk monitor'], ['支付閘道', '錢包 API', '結算引擎', '風險監控'], ['支付网关', '钱包 API', '结算引擎', '风险监控']),
    eCommerce: L(['Card terminal', 'POS kit', 'QR stand', 'Receipt printer', 'Cash box', 'Tally roll'], ['讀卡終端', 'POS 套件', 'QR 支付座', '收據打印機', '錢箱', '結算紙卷'], ['读卡终端', 'POS 套件', 'QR 支付座', '收据打印机', '钱箱', '结算纸卷']),
    'Order Placement': L(['Instant transfer', 'Bill pay', 'Split bill', 'Top-up', 'Pay out'], ['即時轉賬', '賬單付款', '分單付款', '充值', '出款'], ['即时转账', '账单付款', '分单付款', '充值', '出款']),
    'Web/Website': L({
      heroTitle: 'Payments built for growth',
      heroSub: 'One platform for wallets, transfers, cards and reconciliation.',
      features: [{ title: 'Instant settlement', text: 'Funds move in real time.' }, { title: 'Secure vault', text: 'Bank-grade encryption on every transaction.' }, { title: 'Multi-currency', text: 'Accept and settle in the currencies you need.' }]
    }, {
      heroTitle: '為增長而建的支付',
      heroSub: '一個平台管理錢包、轉賬、卡支付與對賬。',
      features: [{ title: '即時結算', text: '資金實時流動。' }, { title: '安全金庫', text: '每筆交易均採用銀行級加密。' }, { title: '多幣種', text: '以所需幣種收款與結算。' }]
    }, {
      heroTitle: '为增长而建的支付',
      heroSub: '一个平台管理钱包、转账、卡支付与对账。',
      features: [{ title: '即时结算', text: '资金实时流动。' }, { title: '安全金库', text: '每笔交易均采用银行级加密。' }, { title: '多币种', text: '以所需币种收款与结算。' }]
    }),
    'Mobile App': L({ up: ['Business onboarding', 'Wallet review'], bk: ['Business onboarding', 'Settlement review', 'Premium card'], tx: ['Business account', 'Card top-up', 'Referral bonus'] }, { up: ['企業開戶', '錢包覆核'], bk: ['企業開戶', '結算審核', '尊尚卡'], tx: ['企業賬戶', '卡充值', '推薦獎賞'] }, { up: ['企业开户', '钱包复核'], bk: ['企业开户', '结算审核', '尊尚卡'], tx: ['企业账户', '卡充值', '推荐奖赏'] }),
    Attendance: L(['Front desk', 'Teller row', 'Sales floor', 'Compliance room'], ['前台', '櫃枱列', '銷售樓層', '合規室'], ['前台', '柜台列', '销售楼层', '合规室']),
    'Visitor Management': L(['Client', 'Auditor', 'Vendor', 'Interview'], ['客戶', '審計員', '供應商', '面試'], ['客户', '审计员', '供应商', '面试']),
    Inventory: L(['Card readers', 'POS terminals', 'QR stands', 'Tally printers'], ['讀卡器', 'POS 終端', 'QR 支付座', '結算打印機'], ['读卡器', 'POS 终端', 'QR 支付座', '结算打印机']),
    Logistics: L(['Central', 'CWB', 'Kwun Tong', 'Tsuen Wan'], ['中環', '銅鑼灣', '觀塘', '荃灣'], ['中环', '铜锣湾', '观塘', '荃湾']),
    'Data & Analytics': L(['Transfers', 'Card payments', 'Wallet top-ups', 'Bill pay'], ['轉賬', '卡支付', '錢包充值', '賬單付款'], ['转账', '卡支付', '钱包充值', '账单付款']),
    Ticketing: L(['Fintech summit', 'Payments expo', 'API workshop'], ['金融科技峰會', '支付博覽會', 'API 工作坊'], ['金融科技峰会', '支付博览会', 'API 工作坊']),
    Loyalty: L(['Fee-free transfer', 'HK$50 cashback', 'Premium card'], ['免手續費轉賬', 'HK$50 回贈', '尊尚卡'], ['免手续费转账', 'HK$50 回赠', '尊尚卡']),
  }
});

cat({
  key: 'entertainment',
  product: L('Verve Events', '盛薈娛樂', '盛荟娱乐'),
  theme: 'violet',
  names: {
    Booking: L(['Standard entry', 'VIP box', 'Priority access', 'Group booking'], ['標準入場', 'VIP 廂房', '優先進場', '團體預訂'], ['标准入场', 'VIP 厢房', '优先进场', '团体预订']),
    Membership: L(['Standard', 'Plus', 'VIP'], ['標準', '升級', '尊貴'], ['标准', '升级', '尊贵']),
    'Cloud System': L(['Box office', 'Venue app', 'Ticketing API', 'Access control'], ['票房系統', '場館應用', '票務 API', '入場管制'], ['票房系统', '场馆应用', '票务 API', '入场管制']),
    eCommerce: L(['Collector badge', 'Limited poster', 'Exclusive pass', 'Venue hoodie', 'Keychain set', 'Programme book'], ['收藏徽章', '限量海報', '尊貴通行證', '場館連帽衫', '鎖匙扣套裝', '場刊'], ['收藏徽章', '限量海报', '尊贵通行证', '场馆连帽衫', '钥匙扣套装', '场刊']),
    'Order Placement': L(['Popcorn combo', 'Nachos', 'Hot dog', 'Soft drink', 'Ice-cream'], ['爆谷套餐', '墨西哥脆片', '熱狗', '汽水', '雪糕'], ['爆谷套餐', '墨西哥脆片', '热狗', '汽水', '雪糕']),
    'Web/Website': L({
      heroTitle: 'Every show, sold out',
      heroSub: 'Tickets, access control and concessions on one events platform.',
      features: [{ title: 'Seamless ticketing', text: 'Secure check-in in seconds.' }, { title: 'Live access', text: 'Gates and badges update instantly.' }, { title: 'Venue insights', text: 'Know what sells, seat by seat.' }]
    }, {
      heroTitle: '每一場都爆滿',
      heroSub: '門票、入場管制與小食部於一個活動平台。',
      features: [{ title: '流暢票務', text: '數秒完成安心入場。' }, { title: '即時入場', text: '閘口與證件即時更新。' }, { title: '場館洞察', text: '逐座位了解銷售情況。' }]
    }, {
      heroTitle: '每一场都爆满',
      heroSub: '门票、入场管制与小吃部于一个活动平台。',
      features: [{ title: '流畅票务', text: '数秒完成安心入场。' }, { title: '即时入场', text: '闸口与证件即时更新。' }, { title: '场馆洞察', text: '逐座位了解销售情况。' }]
    }),
    'Mobile App': L({ up: ['VIP box', 'Backstage tour'], bk: ['VIP box', 'Priority access', 'After-party'], tx: ['Ticket top-up', 'VIP box', 'Referral bonus'] }, { up: ['VIP 廂房', '後台導賞'], bk: ['VIP 廂房', '優先進場', '慶功派對'], tx: ['門票充值', 'VIP 廂房', '推薦獎賞'] }, { up: ['VIP 厢房', '后台导赏'], bk: ['VIP 厢房', '优先进场', '庆功派对'], tx: ['门票充值', 'VIP 厢房', '推荐奖赏'] }),
    Attendance: L(['Main hall', 'VIP lounge', 'South gate', 'North gate'], ['主場館', 'VIP 休息室', '南門', '北門'], ['主场馆', 'VIP 休息室', '南门', '北门']),
    'Visitor Management': L(['Guest', 'Performer', 'Press', 'Staff'], ['嘉賓', '表演者', '傳媒', '工作人員'], ['嘉宾', '表演者', '传媒', '工作人员']),
    Inventory: L(['Passes & badges', 'Merch tees', 'Posters', 'Lanyards'], ['通行證與徽章', '紀念T恤', '海報', '掛繩'], ['通行证与徽章', '纪念T恤', '海报', '挂绳']),
    Logistics: L(['Kowloon Bay', 'Central Pier', 'TST', 'Airport Expo'], ['九龍灣', '中環碼頭', '尖沙咀', '機場博覽館'], ['九龙湾', '中环码头', '尖沙咀', '机场博览馆']),
    'Data & Analytics': L(['Ticket sales', 'Concessions', 'Merchandise', 'VIP boxes'], ['門票銷售', '小食部', '紀念品', 'VIP 廂房'], ['门票销售', '小食部', '纪念品', 'VIP 厢房']),
    Ticketing: L(['Opening night', 'Headline show', 'After-party'], ['首演之夜', '壓軸演出', '慶功派對'], ['首演之夜', '压轴演出', '庆功派对']),
    Loyalty: L(['Free merch item', 'Priority seating', 'VIP upgrade'], ['免費紀念品', '優先座位', 'VIP 升級'], ['免费纪念品', '优先座位', 'VIP 升级']),
  }
});

cat({
  key: 'sports',
  product: L('CourtClub', '競峰體育', '竞峰体育'),
  theme: 'sky',
  names: {
    Booking: L(['Court booking', 'League entry', 'Coaching slot', 'Equipment hire'], ['場地預約', '聯賽報名', '教練時段', '器材租借'], ['场地预约', '联赛报名', '教练时段', '器材租借']),
    Membership: L(['Amateur', 'Competitive', 'Elite'], ['業餘', '競技', '精英'], ['业余', '竞技', '精英']),
    'Cloud System': L(['Match portal', 'Court API', 'Scores feed', 'Referee app'], ['賽事入口', '場地 API', '比分推送', '裁判應用'], ['赛事入口', '场地 API', '比分推送', '裁判应用']),
    eCommerce: L(['Club jersey', 'Training bibs', 'Corner flags', 'Goalkeeper gloves', 'Water bottle', 'Team towel'], ['會所球衣', '訓練背心', '角旗', '龍門手套', '水樽', '球隊毛巾'], ['会所球衣', '训练背心', '角旗', '龙门手套', '水壶', '球队毛巾']),
    'Order Placement': L(['Energy drink', 'Protein bar', 'Sports salad', 'Banana box', 'Isotonic drink'], ['能量飲品', '蛋白棒', '運動沙律', '香蕉盒', '電解飲料'], ['能量饮品', '蛋白棒', '运动沙拉', '香蕉盒', '电解质饮料']),
    'Web/Website': L({
      heroTitle: 'Train, play, compete',
      heroSub: 'Courts, leagues and scores on one sports platform.',
      features: [{ title: 'Instant court booking', text: 'Reserve any court in seconds.' }, { title: 'Live scores', text: 'Results the moment they happen.' }, { title: 'Team management', text: 'Rosters, fixtures and payments together.' }]
    }, {
      heroTitle: '訓練、比賽、競爭',
      heroSub: '場地、聯賽與比分於一個體育平台。',
      features: [{ title: '即時訂場', text: '數秒預留任何場地。' }, { title: '即時比分', text: '結果即時發布。' }, { title: '隊伍管理', text: '名單、賽程與付款一應俱全。' }]
    }, {
      heroTitle: '训练、比赛、竞争',
      heroSub: '场地、联赛与比分于一个体育平台。',
      features: [{ title: '即时订场', text: '数秒预留任何场地。' }, { title: '即时比分', text: '结果即时发布。' }, { title: '队伍管理', text: '名单、赛程与付款一应俱全。' }]
    }),
    'Mobile App': L({ up: ['Court session', 'League match'], bk: ['Court session', 'Coaching slot', 'League match'], tx: ['Court pass', 'Equipment hire', 'Referral bonus'] }, { up: ['場地時段', '聯賽賽事'], bk: ['場地時段', '教練時段', '聯賽賽事'], tx: ['場地通行證', '器材租借', '推薦獎賞'] }, { up: ['场地时段', '联赛赛事'], bk: ['场地时段', '教练时段', '联赛赛事'], tx: ['场地通行证', '器材租借', '推荐奖赏'] }),
    Attendance: L(['Main court', 'Training pitch', 'Youth league', 'Finals day'], ['主場地', '訓練場', '青少年聯賽', '決賽日'], ['主场地', '训练场', '青少年联赛', '决赛日']),
    'Visitor Management': L(['Player', 'Coach', 'Spectator', 'Official'], ['球員', '教練', '觀眾', '裁判'], ['球员', '教练', '观众', '裁判']),
    Inventory: L(['Match balls', 'Training bibs', 'Goal nets', 'First-aid kit'], ['比賽用球', '訓練背心', '龍門網', '急救箱'], ['比赛用球', '训练背心', '龙门网', '急救箱']),
    Logistics: L(['HK Park', 'MK Stadium', 'TKO', 'Happy Valley'], ['香港公園', '旺角球場', '將軍澳', '跑馬地'], ['香港公园', '旺角球场', '将军澳', '跑马地']),
    'Data & Analytics': L(['Match tickets', 'Membership', 'Merchandise', 'Coaching'], ['賽事門票', '會員', '紀念品', '教練服務'], ['赛事门票', '会员', '纪念品', '教练服务']),
    Ticketing: L(['Season opener', 'Local derby', 'Championship final'], ['開季戰', '本地打吡', '錦標賽決賽'], ['开季战', '本地打比', '锦标赛决赛']),
    Loyalty: L(['Free jersey', 'Priority tickets', 'VIP seating'], ['免費球衣', '優先購票', 'VIP 座位'], ['免费球衣', '优先购票', 'VIP 座位']),
  }
});

cat({
  key: 'professional',
  product: L('CorpSuite', '峻業企管', '峻业企管'),
  theme: 'slate',
  names: {
    Booking: L(['Consultation', 'Document review', 'On-site visit', 'Compliance check'], ['諮詢', '文件審閱', '到場視察', '合規檢查'], ['咨询', '文件审阅', '到场视察', '合规检查']),
    Membership: L(['Starter', 'Professional', 'Enterprise'], ['入門', '專業', '企業'], ['入门', '专业', '企业']),
    'Cloud System': L(['Case portal', 'Client portal', 'Document vault', 'Billing engine'], ['案件入口', '客戶入口', '文件庫', '計費引擎'], ['案件入口', '客户入口', '文件库', '计费引擎']),
    eCommerce: L(['SOP handbook', 'Template pack', 'Compliance kit', 'Training deck', 'Brand package', 'Annual report'], ['流程手冊', '範本套件', '合規套件', '培訓簡報', '品牌套裝', '年度報告'], ['流程手册', '范本套件', '合规套件', '培训简报', '品牌套装', '年度报告']),
    'Order Placement': L(['Coffee', 'Sparkling water', 'Pastry set', 'Light lunch', 'Fruit platter'], ['咖啡', '梳打水', '糕點拼盤', '輕食午餐', '水果盤'], ['咖啡', '苏打水', '糕点拼盘', '轻食午餐', '水果盘']),
    'Web/Website': L({
      heroTitle: 'Run a firm, not admin',
      heroSub: 'Matters, clients and billing on one professional platform.',
      features: [{ title: 'Matter tracking', text: 'Every case, every deadline, visible.' }, { title: 'Client portal', text: 'Share updates without the email trails.' }, { title: 'Accurate billing', text: 'Billable time captured automatically.' }]
    }, {
      heroTitle: '管理業務，而非行政',
      heroSub: '案件、客戶與賬單於一個專業平台。',
      features: [{ title: '案件追蹤', text: '每個案件、每個期限一目了然。' }, { title: '客戶入口', text: '免電郵往來即時分享進度。' }, { title: '精確計費', text: '自動記錄可計費工時。' }]
    }, {
      heroTitle: '管理业务，而非行政',
      heroSub: '案件、客户与账单于一个专业平台。',
      features: [{ title: '案件追踪', text: '每个案件、每个期限一目了然。' }, { title: '客户入口', text: '免电邮往来即时分享进度。' }, { title: '精确计费', text: '自动记录可计费工时。' }]
    }),
    'Mobile App': L({ up: ['Client briefing', 'Document review'], bk: ['Client briefing', 'Document review', 'Compliance check'], tx: ['Consultation', 'Invoice payment', 'Referral bonus'] }, { up: ['客戶簡報會', '文件審閱'], bk: ['客戶簡報會', '文件審閱', '合規檢查'], tx: ['諮詢', '發票付款', '推薦獎賞'] }, { up: ['客户简报会', '文件审阅'], bk: ['客户简报会', '文件审阅', '合规检查'], tx: ['咨询', '发票付款', '推荐奖赏'] }),
    Attendance: L(['Meeting room A', 'Meeting room B', 'Open desk', 'Client suite'], ['會議室 A', '會議室 B', '開放座位', '客戶室'], ['会议室 A', '会议室 B', '开放座位', '客户室']),
    'Visitor Management': L(['Client', 'Candidate', 'Courier', 'Interview'], ['客戶', '求職者', '速遞員', '面試'], ['客户', '求职者', '速递员', '面试']),
    Inventory: L(['Laptops', 'Print cartridges', 'Stationery', 'Brand collaterals'], ['手提電腦', '打印墨盒', '文具', '品牌用品'], ['手提电脑', '打印墨盒', '文具', '品牌用品']),
    Logistics: L(['Central', 'Admiralty', 'CWB', 'Kowloon Bay'], ['中環', '金鐘', '銅鑼灣', '九龍灣'], ['中环', '金钟', '铜锣湾', '九龙湾']),
    'Data & Analytics': L(['Billable hours', 'Client matters', 'Invoicing', 'Referrals'], ['可計費工時', '客戶案件', '發票', '轉介'], ['可计费工时', '客户案件', '发票', '转介']),
    Ticketing: L(['Client briefing', 'Industry forum', 'Annual dinner'], ['客戶簡報會', '行業論壇', '年度晚宴'], ['客户简报会', '行业论坛', '年度晚宴']),
    Loyalty: L(['Free consultation', 'Priority scheduling', 'Client gift set'], ['免費諮詢', '優先排期', '客戶禮品套裝'], ['免费咨询', '优先排期', '客户礼品套装']),
  }
});

cat({
  key: 'loyalty',
  product: L('RewardHub', '回饋俱樂部', '回馈俱乐部'),
  theme: 'amber',
  names: {
    Booking: L(['Points redeem', 'Membership upgrade', 'Partner visit', 'Bonus top-up'], ['積分兌換', '會籍升級', '合作商戶到訪', '額外積分加購'], ['积分兑换', '会籍升级', '合作商户到访', '额外积分加购']),
    Membership: L(['Starter', 'Gold', 'Platinum'], ['入門', '金卡', '白金'], ['入门', '金卡', '白金']),
    'Cloud System': L(['Rewards portal', 'Points API', 'Partner app', 'Billing engine'], ['積分入口', '積分 API', '合作應用', '計費引擎'], ['积分入口', '积分 API', '合作应用', '计费引擎']),
    eCommerce: L(['Gift card', 'Reward mug', 'Membership pack', 'Brand tote', 'Bonus points', 'Mystery gift'], ['禮品卡', '積分馬克杯', '會員套裝', '品牌布袋', '獎賞積分', '神秘禮物'], ['礼品卡', '积分马克杯', '会员套装', '品牌布袋', '奖赏积分', '神秘礼物']),
    'Order Placement': L(['Gift card', 'Top-up pack', 'Voucher set', 'Surprise box', 'Bonus bundle'], ['禮品卡', '增值套裝', '禮券套裝', '驚喜盒', '獎賞組合'], ['礼品卡', '增值套装', '礼券套装', '惊喜盒', '奖赏组合']),
    'Web/Website': L({
      heroTitle: 'Earn on every purchase',
      heroSub: 'Points, perks and partner rewards on one loyalty platform.',
      features: [{ title: 'Instant earn', text: 'Points the moment you buy.' }, { title: 'Partner network', text: 'Redeem across the city.' }, { title: 'Smart tiers', text: 'Rewards that grow with you.' }]
    }, {
      heroTitle: '每次消費都賺到',
      heroSub: '積分、禮遇與合作商戶獎賞於一個忠誠計劃平台。',
      features: [{ title: '即時賺分', text: '購物瞬間賺取積分。' }, { title: '合作網絡', text: '全城商戶兌換。' }, { title: '聰明會籍', text: '獎賞隨你升級。' }]
    }, {
      heroTitle: '每次消费都赚到',
      heroSub: '积分、礼遇与合作商户奖赏于一个忠诚计划平台。',
      features: [{ title: '即时赚分', text: '购物瞬间赚取积分。' }, { title: '合作网络', text: '全城商户兑换。' }, { title: '聪明会籍', text: '奖赏随你升级。' }]
    }),
    'Mobile App': L({ up: ['Points balance', 'Partner store'], bk: ['Points balance', 'Reward redeem'], tx: ['Points earn', 'Reward redeem'] }, { up: ['積分結餘', '合作商戶'], bk: ['積分結餘', '獎賞兌換'], tx: ['賺取積分', '兌換獎賞'] }, { up: ['积分结余', '合作商户'], bk: ['积分结余', '奖赏兑换'], tx: ['赚取积分', '兑换奖赏'] }),
    Attendance: L(['Central', 'TST', 'MK', 'CWB'], ['中環', '尖沙咀', '旺角', '銅鑼灣'], ['中环', '尖沙咀', '旺角', '铜锣湾']),
    'Visitor Management': L(['Partner', 'Auditor', 'Guest', 'Interview'], ['合作商戶', '審計員', '嘉賓', '面試'], ['合作商户', '审计员', '嘉宾', '面试']),
    Inventory: L(['Gift cards', 'Voucher stock', 'Merch', 'Bonus tokens'], ['禮品卡', '禮券庫存', '精品', '獎賞代幣'], ['礼品卡', '礼券库存', '精品', '奖赏代币']),
    Logistics: L(['Central', 'TST', 'MK', 'CWB'], ['中環', '尖沙咀', '旺角', '銅鑼灣'], ['中环', '尖沙咀', '旺角', '铜锣湾']),
    'Data & Analytics': L(['Members', 'Points issued', 'Redemptions', 'Partners'], ['會員', '發出積分', '兌換', '合作商戶'], ['会员', '发出积分', '兑换', '合作商户']),
    Ticketing: L(['Double points day', 'Partner fair', 'Members\u2019 night'], ['雙倍積分日', '合作商戶展', '會員之夜'], ['双倍积分日', '合作商户展', '会员之夜']),
    Loyalty: L(['Bonus points', 'Gold upgrade', 'Mystery gift'], ['額外積分', '金卡升級', '神秘禮物'], ['额外积分', '金卡升级', '神秘礼物']),
  }
});

cat({
  key: 'manufacturing',
  product: L('Precision Works', '精工製造', '精工制造'),
  theme: 'zinc',
  names: {
    Booking: L(['Production slot', 'Line setup', 'QC inspection', 'Maintenance window'], ['生產時段', '產線調試', '品質檢測', '保養窗口'], ['生产时段', '产线调试', '品质检测', '保养窗口']),
    Membership: L(['Basic', 'Professional', 'Enterprise'], ['基本', '專業', '企業'], ['基本', '专业', '企业']),
    'Cloud System': L(['Plant portal', 'Machine API', 'Shift app', 'Quality monitor'], ['廠房入口', '機器 API', '班次應用', '品質監控'], ['厂房入口', '机器 API', '班次应用', '品质监控']),
    eCommerce: L(['Steel brackets', 'Aluminium frames', 'Gear sets', 'Conveyor belts', 'Control boards', 'Fastener kits'], ['鋼製支架', '鋁合金框架', '齒輪組', '輸送帶', '控制板', '緊固件套裝'], ['钢制支架', '铝合金框架', '齿轮组', '输送带', '控制板', '紧固件套装']),
    'Order Placement': L(['Safety gloves', 'Cutting oil', 'Machine bolts', 'Spare belts', 'Spray lubricant'], ['安全手套', '切削油', '機器螺栓', '備用皮帶', '噴霧潤滑油'], ['安全手套', '切削油', '机器螺栓', '备用皮带', '喷雾润滑油']),
    'Web/Website': L({
      heroTitle: 'From blueprint to batch',
      heroSub: 'Production, quality and delivery on one industrial platform.',
      features: [{ title: 'Line control', text: 'Start, pause and hand over any line.' }, { title: 'Quality gates', text: 'Inspections logged at every stage.' }, { title: 'Real-time output', text: 'See throughput as it happens.' }]
    }, {
      heroTitle: '從藍圖到批量',
      heroSub: '生產、品質與交付於一個工業平台。',
      features: [{ title: '產線控制', text: '隨時開線、暫停與交接。' }, { title: '品質關卡', text: '每個工序記錄檢測。' }, { title: '即時產量', text: '產出實時一目了然。' }]
    }, {
      heroTitle: '从蓝图到批量',
      heroSub: '生产、品质与交付于一个工业平台。',
      features: [{ title: '产线控制', text: '随时开线、暂停与交接。' }, { title: '品质关卡', text: '每个工序记录检测。' }, { title: '即时产量', text: '产出实时一目了然。' }]
    }),
    'Mobile App': L({ up: ['Shift briefing', 'Line walk'], bk: ['Shift briefing', 'QC inspection', 'Maintenance'], tx: ['Machine hours', 'Parts order', 'Referral bonus'] }, { up: ['班次簡報', '產線巡檢'], bk: ['班次簡報', '品質檢測', '保養'], tx: ['機器工時', '零件訂單', '推薦獎賞'] }, { up: ['班次简报', '产线巡检'], bk: ['班次简报', '品质检测', '保养'], tx: ['机器工时', '零件订单', '推荐奖赏'] }),
    Attendance: L(['Line A', 'Line B', 'QC bay', 'Warehouse'], ['A 線', 'B 線', '檢測區', '倉庫'], ['A 线', 'B 线', '检测区', '仓库']),
    'Visitor Management': L(['Supplier', 'Auditor', 'Maintenance', 'Interview'], ['供應商', '審計員', '保養人員', '面試'], ['供应商', '审计员', '保养人员', '面试']),
    Inventory: L(['Steel stock', 'Machine parts', 'Packaging', 'Safety gear'], ['鋼材', '機器零件', '包裝物料', '安全裝備'], ['钢材', '机器零件', '包装物料', '安全装备']),
    Logistics: L(['Kwai Chung', 'Tuen Mun', 'Tsing Yi', 'Fanling'], ['葵涌', '屯門', '青衣', '粉嶺'], ['葵涌', '屯门', '青衣', '粉岭']),
    'Data & Analytics': L(['Line output', 'Quality passes', 'Downtime', 'Scrap rate'], ['產線產量', '合格品', '停機時間', '報廢率'], ['产线产量', '合格品', '停机时间', '报废率']),
    Ticketing: L(['Factory open day', 'Safety training', 'Machinery expo'], ['廠房開放日', '安全培訓', '機械博覽會'], ['厂房开放日', '安全培训', '机械博览会']),
    Loyalty: L(['Free tool set', 'Priority line slots', 'Annual maintenance'], ['免費工具套裝', '優先產線時段', '年度保養'], ['免费工具套装', '优先产线时段', '年度保养']),
  }
});

cat({
  key: 'laundry',
  product: L('WashHub', '潔洗衣務', '洁洗衣务'),
  theme: 'blue',
  names: {
    Booking: L(['Standard wash', 'Dry cleaning', 'Express pick-up', 'Bulk load'], ['標準洗衣', '乾洗', '特快取件', '大量洗滌'], ['标准洗衣', '干洗', '特快取件', '大量洗涤']),
    Membership: L(['Per-load', 'Monthly', 'Family plan'], ['單次', '月費', '家庭計劃'], ['单次', '月费', '家庭计划']),
    'Cloud System': L(['Laundry portal', 'Machine API', 'Pickup app', 'Payments'], ['洗衣入口', '機器 API', '取件應用', '付款'], ['洗衣入口', '机器 API', '取件应用', '付款']),
    eCommerce: L(['Detergent pods', 'Fabric softener', 'Stain remover', 'Lint roller', 'Garment bags', 'Ironing spray'], ['洗衣膠囊', '柔順劑', '去漬劑', '除毛器', '衣物袋', '熨燙噴霧'], ['洗衣胶囊', '柔顺剂', '去渍剂', '除毛器', '衣物袋', '熨烫喷雾']),
    'Order Placement': L(['Wash & fold', 'Ironing set', 'Stain treatment', 'Bedding set', 'Express service'], ['洗摺服務', '熨衫套餐', '去漬處理', '床品套裝', '特快服務'], ['洗折服务', '熨衫套餐', '去渍处理', '床品套装', '特快服务']),
    'Web/Website': L({
      heroTitle: 'Fresh in, fresher out',
      heroSub: 'Wash, dry clean and pickup on one laundry platform.',
      features: [{ title: 'Schedule pickup', text: 'Book a slot in seconds.' }, { title: 'Track each load', text: 'Every order visible, every step.' }, { title: 'Fabric care', text: 'Settings tuned for every garment.' }]
    }, {
      heroTitle: '送來乾淨，帶走清新',
      heroSub: '洗衣、乾洗與取送於一個洗衣平台。',
      features: [{ title: '預約取件', text: '數秒預約時段。' }, { title: '追蹤每批', text: '每個訂單每步可見。' }, { title: '布料護理', text: '為每件衣物設定模式。' }]
    }, {
      heroTitle: '送来干净，带走清新',
      heroSub: '洗衣、干洗与取送于一个洗衣平台。',
      features: [{ title: '预约取件', text: '数秒预约时段。' }, { title: '追踪每批', text: '每个订单每步可见。' }, { title: '布料护理', text: '为每件衣物设定模式。' }]
    }),
    'Mobile App': L({ up: ['Pickup slot', 'Bulk load'], bk: ['Pickup slot', 'Dry cleaning', 'Bulk load'], tx: ['Wash & fold', 'Express service', 'Referral bonus'] }, { up: ['取件時段', '大量洗滌'], bk: ['取件時段', '乾洗', '大量洗滌'], tx: ['洗摺服務', '特快服務', '推薦獎賞'] }, { up: ['取件时段', '大量洗涤'], bk: ['取件时段', '干洗', '大量洗涤'], tx: ['洗折服务', '特快服务', '推荐奖赏'] }),
    Attendance: L(['Wash floor', 'Drying room', 'Folding bay', 'Pickup desk'], ['洗衣間', '烘乾房', '摺疊區', '取件櫃枱'], ['洗衣间', '烘干房', '折叠区', '取件柜台']),
    'Visitor Management': L(['Customer', 'Supplier', 'Courier', 'Interview'], ['顧客', '供應商', '速遞員', '面試'], ['顾客', '供应商', '速递员', '面试']),
    Inventory: L(['Detergents', 'Softener', 'Hangers', 'Garment bags'], ['洗滌劑', '柔順劑', '衣架', '衣物袋'], ['洗涤剂', '柔顺剂', '衣架', '衣物袋']),
    Logistics: L(['Central', 'TST', 'MK', 'CWB'], ['中環', '尖沙咀', '旺角', '銅鑼灣'], ['中环', '尖沙咀', '旺角', '铜锣湾']),
    'Data & Analytics': L(['Wash loads', 'Dry cleaning', 'Pickup', 'Ironing'], ['洗滌量', '乾洗', '取件', '熨燙'], ['洗涤量', '干洗', '取件', '熨烫']),
    Ticketing: L(['Spring refresh day', 'Winter coat care', 'Bedding week'], ['春日煥新日', '冬季大衣護理', '床品週'], ['春日焕新日', '冬季大衣护理', '床品周']),
    Loyalty: L(['Free stain treatment', 'HK$50 voucher', 'Premium care set'], ['免費去漬', 'HK$50 禮券', '尊尚護理套裝'], ['免费去渍', 'HK$50 礼券', '尊尚护理套装']),
  }
});

module.exports = { L, GEN, C, cat };
