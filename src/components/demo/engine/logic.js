export function hashId(id) {
  let h = (id * 2654435761) >>> 0;
  h = (h ^ (h >>> 16)) >>> 0;
  return h;
}

export function hashStr(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h ^ (h >>> 16)) >>> 0;
}

export function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const SHELLS = [
  'sidebar-dark',
  'sidebar-light',
  'sidebar-right',
  'topnav',
  'chips',
  'bottom-tab',
  'dashboard',
  'cover-hero',
  'kiosk',
  'split-list',
  'terminal',
];

export const ACCENTS = [
  { a: '#008B8B', b: '#0E7490' },
  { a: '#7C3AED', b: '#4C1D95' },
  { a: '#2563EB', b: '#1E3A8A' },
  { a: '#DB2777', b: '#9D174D' },
  { a: '#F97316', b: '#C2410C' },
  { a: '#16A34A', b: '#15803D' },
  { a: '#B45309', b: '#92400E' },
  { a: '#0EA5E9', b: '#0369A1' },
  { a: '#EF4444', b: '#B91C1C' },
  { a: '#A855F7', b: '#6B21A8' },
  { a: '#14B8A6', b: '#0F766E' },
  { a: '#EAB308', b: '#A16207' },
];

export const MODES = ['light', 'dark'];
export const RADII = [10, 12, 14, 16, 18];
export const DENSITIES = ['compact', 'cozy', 'spacious'];

export const VARIANTS = {
  Booking: 3,
  'Order Placement': 3,
  eCommerce: 3,
  'Cloud System': 3,
  Membership: 3,
  'Visitor Management': 3,
};

export function accentFor(category) {
  return ACCENTS[hashStr(String(category || 'default')) % ACCENTS.length];
}

export function themeFor(caseId, category) {
  const rnd = mulberry32((hashId(caseId) ^ hashStr(String(category || 'default'))) >>> 0);
  const accent = accentFor(category);
  const dark = rnd() < 0.22;
  const radius = RADII[Math.floor(rnd() * RADII.length)];
  const density = DENSITIES[Math.floor(rnd() * DENSITIES.length)];
  const pad = density === 'compact' ? 2 : density === 'cozy' ? 3 : 4;
  return {
    accent: accent.a,
    accent2: accent.b,
    dark,
    radius,
    density,
    pad,
    ink: dark ? '#F1F5F9' : '#0B1B33',
    muted: dark ? 'rgba(241,245,249,0.6)' : '#64748B',
    slate: dark ? 'rgba(241,245,249,0.85)' : '#334155',
    line: dark ? 'rgba(255,255,255,0.12)' : '#E4ECF5',
    surface: dark ? 'rgba(255,255,255,0.05)' : '#fff',
    bg: dark ? '#0B1220' : '#F6F9FC',
    grad: `linear-gradient(135deg, ${accent.a}, ${accent.b})`,
    onAccent: '#fff',
  };
}

export function blueprintFor(caseId, category, tags = []) {
  const seed = (hashId(caseId) ^ hashStr(String(category || 'default'))) >>> 0;
  const rnd = mulberry32(seed);
  const shell = SHELLS[Math.floor(rnd() * SHELLS.length)];
  const theme = themeFor(caseId, category);
  const variants = {};
  for (const tag of tags) {
    const n = VARIANTS[tag] || 1;
    variants[tag] = 1 + Math.floor(rnd() * n);
  }
  return { caseId, category, shell, theme, variants };
}

export function signatureOf(bp) {
  const t = bp.theme;
  const vs = Object.keys(bp.variants || {})
    .sort()
    .map((k) => `${k}:${bp.variants[k]}`)
    .join('|');
  return `${bp.shell}|${bp.category}|${t.dark ? 'd' : 'l'}|${t.radius}|${t.density}|${vs}`;
}
