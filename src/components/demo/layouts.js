/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { S, font } from './shared';

export function hashId(id) {
  let h = (id * 2654435761) >>> 0;
  h = (h ^ (h >>> 16)) >>> 0;
  return h;
}

export const TAG_ICONS = {
  Booking: '\u{1F4C5}',
  Membership: '\u{1F3C6}',
  'Cloud System': '\u2601',
  eCommerce: '\u{1F6CD}',
  'Order Placement': '\u{1F35C}',
  'Web/Website': '\u{1F310}',
  'Mobile App': '\u{1F4F1}',
  Attendance: '\u2705',
  'Visitor Management': '\u{1F6C2}',
  Blockchain: '\u{1F517}',
  Loyalty: '\u2B50',
  Inventory: '\u{1F4E6}',
  Logistics: '\u{1F69A}',
  'Data & Analytics': '\u{1F4CA}',
  Payment: '\u{1F4B3}',
  Ticketing: '\u{1F39F}',
};

const navItem = ({ modules, active, onSelect, tint, dark, light }) => (m, i) => {
  const on = active === i;
  const base = {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    px: 3,
    py: '10px',
    borderRadius: 10,
    cursor: 'pointer',
    fontFamily: font,
    fontWeight: 600,
    fontSize: 1,
    transition: 'background-color 0.2s, color 0.2s',
  };
  const style = dark
    ? {
        ...base,
        color: on ? '#fff' : 'rgba(255,255,255,0.65)',
        backgroundColor: on ? tint : 'transparent',
        border: on ? '1px solid rgba(255,255,255,0.25)' : '1px solid transparent',
        '&:hover': { backgroundColor: on ? tint : 'rgba(255,255,255,0.08)' },
      }
    : {
        ...base,
        color: on ? (light ? tint : '#fff') : S.slate,
        backgroundColor: on ? (light ? `${tint}14` : tint) : 'transparent',
        border: on ? `1px solid ${light ? `${tint}55` : 'rgba(255,255,255,0.25)'}` : '1px solid transparent',
        '&:hover': { backgroundColor: on ? (light ? `${tint}14` : tint) : '#EEF3F9' },
      };
  return (
    <Box key={m.tag} onClick={() => onSelect(i)} sx={style}>
      <Box sx={{ fontSize: 1, width: 22, textAlign: 'center', flexShrink: 0 }}>{TAG_ICONS[m.tag] || '\u2022'}</Box>
      <Text sx={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.label}</Text>
      {on && <Box sx={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: dark || !light ? '#fff' : tint, flexShrink: 0 }} />}
    </Box>
  );
};

const brandMark = (brand, tint, size = 34) => (
  <Box
    sx={{
      width: size,
      height: size,
      borderRadius: 10,
      background: `linear-gradient(135deg, ${tint}, #0B1B33)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: size / 2.2,
      flexShrink: 0,
      boxShadow: `0 6px 14px ${tint}55`,
    }}>
    {(brand || 'W').slice(0, 1)}
  </Box>
);

function SidebarDark({ modules, active, onSelect, brand, tint, children, flip }) {
  return (
    <Box sx={{ display: 'flex', height: 560, width: '100%' }}>
      <Box
        sx={{
          width: 200,
          flexShrink: 0,
          backgroundColor: S.ink,
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          order: flip ? 1 : 0,
          position: 'relative',
        }}>
        <Box sx={{ px: 3, py: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
          {brandMark(brand, tint)}
          <Text sx={{ fontWeight: 700, fontSize: 1, fontFamily: font, lineHeight: 1.25 }}>{brand}</Text>
        </Box>
        <Box sx={{ px: 3, pb: 2 }}>
          <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font }}>
            {'Modules'}
          </Text>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', px: 3 }}>
          {modules.map(navItem({ modules, active, onSelect, tint, dark: true }))}
        </Box>
        <Box
          sx={{
            mt: 'auto',
            px: 3,
            py: 3,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            fontSize: 0,
            color: 'rgba(255,255,255,0.5)',
            fontFamily: font,
            lineHeight: 1.6,
          }}>
          <Text>Demo preview &middot; live</Text>
          <Text sx={{ fontFamily: 'Menlo, monospace', fontSize: 0 }}>{modules.length} {'modules'}</Text>
        </Box>
      </Box>
      <Box sx={{ flex: 1, minWidth: 0, overflow: 'auto', position: 'relative', backgroundColor: S.bg }}>{children()}</Box>
    </Box>
  );
}

function SidebarLight({ modules, active, onSelect, brand, tint, children }) {
  return (
    <Box sx={{ display: 'flex', height: 560, width: '100%' }}>
      <Box sx={{ flex: 1, minWidth: 0, overflow: 'auto', position: 'relative', backgroundColor: S.bg }}>{children()}</Box>
      <Box
        sx={{
          width: 208,
          flexShrink: 0,
          backgroundColor: '#FBFCFE',
          borderLeft: '1px solid',
          borderColor: S.line,
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Box sx={{ px: 3, py: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
          {brandMark(brand, tint)}
          <Text sx={{ fontWeight: 700, fontSize: 1, fontFamily: font, lineHeight: 1.25, color: S.ink }}>{brand}</Text>
        </Box>
        <Box sx={{ px: 3, pb: 2 }}>
          <Text sx={{ fontSize: 0, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font }}>
            {'Modules'}
          </Text>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', px: 3 }}>
          {modules.map(navItem({ modules, active, onSelect, tint, light: true }))}
        </Box>
        <Box sx={{ mt: 'auto', px: 3, py: 3, borderTop: '1px solid', borderColor: S.line, fontSize: 0, color: S.muted, fontFamily: font, lineHeight: 1.6 }}>
          <Text>Demo preview &middot; live</Text>
          <Text sx={{ fontFamily: 'Menlo, monospace' }}>{modules.length} {'modules'}</Text>
        </Box>
      </Box>
    </Box>
  );
}

function TopNav({ modules, active, onSelect, brand, tint, children }) {
  return (
    <Box sx={{ height: 560, width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          px: 4,
          py: 3,
          background: `linear-gradient(135deg, ${S.ink}, #1B2C45)`,
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          gap: 3,
          flexWrap: 'wrap',
          flexShrink: 0,
        }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: 0 }}>
          {brandMark(brand, tint)}
          <Box sx={{ minWidth: 0 }}>
            <Text sx={{ fontWeight: 700, fontSize: 2, fontFamily: font, lineHeight: 1.2, display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 220 }}>
              {brand}
            </Text>
            <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.55)', fontFamily: font }}>Demo preview &middot; live</Text>
          </Box>
        </Box>
        <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', justifyContent: 'flex-end', maxWidth: '60%' }}>
          {modules.map((m, i) => {
            const on = active === i;
            return (
              <Box
                key={m.tag}
                onClick={() => onSelect(i)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2.5,
                  py: '7px',
                  borderRadius: 9,
                  fontSize: 0,
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: font,
                  whiteSpace: 'nowrap',
                  color: on ? '#fff' : 'rgba(255,255,255,0.6)',
                  backgroundColor: on ? tint : 'transparent',
                  '&:hover': { backgroundColor: on ? tint : 'rgba(255,255,255,0.1)' },
                }}>
                <Text>{TAG_ICONS[m.tag] || '\u2022'}</Text>
                <Text>{m.label}</Text>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box sx={{ flex: 1, minWidth: 0, overflow: 'auto', position: 'relative', backgroundColor: S.bg }}>{children()}</Box>
    </Box>
  );
}

function Chips({ modules, active, onSelect, brand, tint, children }) {
  return (
    <Box sx={{ height: 560, width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ px: 4, py: 2.5, backgroundColor: '#fff', borderBottom: '1px solid', borderColor: S.line, display: 'flex', alignItems: 'center', gap: 3, flexShrink: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: 0 }}>
          {brandMark(brand, tint, 28)}
          <Text sx={{ fontWeight: 700, fontSize: 1, fontFamily: font, color: S.ink, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 220 }}>{brand}</Text>
        </Box>
        <Box sx={{ ml: 'auto', width: 30, height: 30, borderRadius: '50%', backgroundColor: `${tint}22`, color: tint, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 0, flexShrink: 0 }}>A</Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          px: 4,
          py: 2.5,
          borderBottom: '1px solid',
          borderColor: S.line,
          backgroundColor: '#F6F9FC',
          overflowX: 'auto',
          flexShrink: 0,
          '::-webkit-scrollbar': { display: 'none' },
        }}>
        {modules.map((m, i) => {
          const on = active === i;
          return (
            <Box
              key={m.tag}
              onClick={() => onSelect(i)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                px: 3,
                py: '8px',
                borderRadius: 99,
                border: '1.5px solid',
                borderColor: on ? tint : S.line,
                backgroundColor: on ? `${tint}14` : '#fff',
                color: on ? tint : S.slate,
                fontSize: 0,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: font,
                whiteSpace: 'nowrap',
                transition: 'all 0.15s',
                '&:hover': { borderColor: on ? tint : '#B9CBDD' },
              }}>
              <Text>{TAG_ICONS[m.tag] || '\u2022'}</Text>
              <Text>{m.label}</Text>
            </Box>
          );
        })}
      </Box>
      <Box sx={{ flex: 1, minWidth: 0, overflow: 'auto', position: 'relative', backgroundColor: S.bg }}>{children()}</Box>
    </Box>
  );
}

function BottomTab({ modules, active, onSelect, brand, tint, children }) {
  return (
    <Box sx={{ height: 560, width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          px: 4,
          py: 2.5,
          background: `linear-gradient(135deg, ${S.ink}, #1B2C45)`,
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          flexShrink: 0,
        }}>
        {brandMark(brand, tint, 28)}
        <Text sx={{ fontWeight: 700, fontSize: 1, fontFamily: font, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 300 }}>{brand}</Text>
        <Box sx={{ ml: 'auto', fontSize: 0, color: 'rgba(255,255,255,0.55)', fontFamily: font }}>Demo preview &middot; live</Box>
      </Box>
      <Box sx={{ flex: 1, minWidth: 0, overflow: 'auto', position: 'relative', backgroundColor: S.bg }}>{children()}</Box>
      <Box sx={{ display: 'flex', backgroundColor: S.ink, flexShrink: 0, px: 2, py: '8px', gap: 1 }}>
        {modules.map((m, i) => {
          const on = active === i;
          return (
            <Box
              key={m.tag}
              onClick={() => onSelect(i)}
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3px',
                py: '6px',
                borderRadius: 10,
                cursor: 'pointer',
                minWidth: 0,
                color: on ? '#fff' : 'rgba(255,255,255,0.55)',
                backgroundColor: on ? `${tint}33` : 'transparent',
                fontFamily: font,
              }}>
              <Box sx={{ fontSize: 1, lineHeight: 1 }}>{TAG_ICONS[m.tag] || '\u2022'}</Box>
              <Text sx={{ fontSize: 0, fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100%' }}>{m.label}</Text>
              {on && <Box sx={{ width: 14, height: 3, borderRadius: 99, backgroundColor: tint, mt: '1px' }} />}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

function Dashboard({ modules, active, onSelect, brand, tint, seed, children }) {
  const statVals = [1200 + (seed % 8900), 42 + (seed % 900), seed % 31 + 3];
  const statLabels = [0, 1, 2].map((i) => modules[(active + i + 1) % modules.length]?.label || 'Active');
  return (
    <Box sx={{ display: 'flex', height: 560, width: '100%' }}>
      <Box
        sx={{
          width: 200,
          flexShrink: 0,
          backgroundColor: S.ink,
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}>
        <Box sx={{ px: 3, py: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
          {brandMark(brand, tint)}
          <Text sx={{ fontWeight: 700, fontSize: 1, fontFamily: font, lineHeight: 1.25 }}>{brand}</Text>
        </Box>
        <Box sx={{ px: 3, pb: 2 }}>
          <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font }}>
            {'Modules'}
          </Text>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', px: 3 }}>
          {modules.map(navItem({ modules, active, onSelect, tint, dark: true }))}
        </Box>
        <Box sx={{ mt: 'auto', px: 3, py: 3, borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: 0, color: 'rgba(255,255,255,0.5)', fontFamily: font, lineHeight: 1.6 }}>
          <Text>Dashboard &middot; live</Text>
          <Text sx={{ fontFamily: 'Menlo, monospace' }}>{modules.length} {'modules'}</Text>
        </Box>
      </Box>
      <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', backgroundColor: S.bg }}>
        <Box sx={{ px: 4, py: 3, background: `linear-gradient(120deg, ${S.ink}, ${tint})`, color: '#fff', display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap', flexShrink: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: 0 }}>
            <Box sx={{ width: 40, height: 40, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 2, flexShrink: 0 }}>
              {TAG_ICONS[modules[active].tag] || '\u{1F4CA}'}
            </Box>
            <Box sx={{ minWidth: 0 }}>
              <Text sx={{ fontWeight: 700, fontSize: 2, fontFamily: font, lineHeight: 1.2, display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 240 }}>{brand}</Text>
              <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.7)', fontFamily: font }}>{modules[active].label} &middot; overview</Text>
            </Box>
          </Box>
          <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ px: 3, py: '7px', borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.14)', fontSize: 0, fontWeight: 700, fontFamily: font }}>&#9679; Live</Box>
          </Box>
        </Box>
        <Box sx={{ px: 4, py: 3, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3, flexShrink: 0, backgroundColor: S.bg }}>
          {statLabels.map((label, i) => (
            <Box key={i} sx={{ px: 3, py: 2.5, borderRadius: 12, backgroundColor: '#fff', border: '1px solid', borderColor: S.line }}>
              <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, fontFamily: font, display: 'block', mb: '4px' }}>{label}</Text>
              <Text sx={{ fontSize: 2, fontWeight: 700, color: S.ink, fontFamily: font }}>{statVals[i].toLocaleString('en-US')}</Text>
            </Box>
          ))}
        </Box>
        <Box sx={{ flex: 1, minWidth: 0, overflow: 'auto', position: 'relative' }}>{children()}</Box>
      </Box>
    </Box>
  );
}

export const LAYOUTS = {
  'sidebar-dark': SidebarDark,
  'sidebar-light': SidebarLight,
  'sidebar-right': ({ ...props }) => <SidebarDark {...props} flip />,
  topnav: TopNav,
  chips: Chips,
  'bottom-tab': BottomTab,
  dashboard: Dashboard,
};

const LAYOUT_KEYS = Object.keys(LAYOUTS);

export function layoutFor(id) {
  const keys = [...LAYOUT_KEYS];
  const off = hashId(id) % keys.length;
  return keys[off];
}
