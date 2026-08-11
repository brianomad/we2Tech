import { caseContent, categoryForCaseId, defaultCategory } from '../../data/case-demo-content';

const KEY_TO_TAG = {
  booking: 'Booking',
  membership: 'Membership',
  cloud: 'Cloud System',
  ecommerce: 'eCommerce',
  website: 'Web/Website',
  mobile: 'Mobile App',
  attendance: 'Attendance',
  visitor: 'Visitor Management',
  inventory: 'Inventory',
  logistics: 'Logistics',
  ticketing: 'Ticketing',
  loyalty: 'Loyalty',
  analytics: 'Data & Analytics',
  order: 'Order Placement',
};

export function categoryFor(item) {
  if (!item || item.id == null) return defaultCategory;
  return categoryForCaseId[item.id] || defaultCategory;
}

export function contentFor(t, locale, item, key) {
  const tag = KEY_TO_TAG[key] || key;
  const byTag = item && item.id != null ? caseContent[item.id] : undefined;
  const override = byTag && byTag[tag] ? byTag[tag][locale] || {} : {};
  const base = t(`caseDemo.${key}`) || {};
  return { ...base, ...override };
}
