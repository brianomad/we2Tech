import cases from '../../sections/case-data';

const GENERIC = [
  'company', 'group', 'chain', 'startup', 'brand', 'provider', 'store',
  'shop', 'centre', 'center', 'club', 'management', 'service', 'services',
  'ltd', 'limited', 'inc', 'co', 'network', 'online', 'platform', 'agency',
  'business', 'solution', 'solutions', 'system', 'systems', 'app', 'portal',
];

const PREFIXES = ['hong-kong', 'hong kong'];

export function slugify(title = '') {
  let s = String(title).toLowerCase().trim();
  for (const p of PREFIXES) {
    s = s.replace(new RegExp(`^${p}[\\s-]*`, 'i'), '');
  }
  s = s.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  const parts = s.split('-').filter((w) => w && !GENERIC.includes(w));
  return parts.join('-') || s;
}

const slugByCaseId = {};
cases.forEach((c) => {
  slugByCaseId[c.id] = slugify(c.title);
});

export function slugFor(item) {
  if (!item) return '';
  if (item.slug) return item.slug;
  if (item.id && slugByCaseId[item.id]) return slugByCaseId[item.id];
  return slugify(item.title);
}

export function demoUrlFor(item, fallback) {
  const slug = slugFor(item);
  if (!slug) return fallback;
  return `https://${slug}.demo.we2tech.pro`;
}

export function brandFor(item, fallback) {
  if (!item || !item.title) return fallback;
  const brand = String(item.title);
  return brand.length > 28 ? `${brand.slice(0, 27)}\u2026` : brand;
}
