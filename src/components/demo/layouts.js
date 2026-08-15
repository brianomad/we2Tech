/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { S, font, StatusDot } from './shared';
import { Icon } from './icons';

export function hashId(id) {
  let h = (id * 2654435761) >>> 0;
  h = (h ^ (h >>> 16)) >>> 0;
  return h;
}

export const TAG_ICONS = {
  Booking: 'calendar',
  Membership: 'trophy',
  'Cloud System': 'cloud',
  eCommerce: 'bag',
  'Order Placement': 'utensils',
  'Web/Website': 'globe',
  'Mobile App': 'smartphone',
  Attendance: 'checkCircle',
  'Visitor Management': 'door',
  Blockchain: 'link',
  Loyalty: 'star',
  Inventory: 'package',
  Logistics: 'truck',
  'Data & Analytics': 'barChart',
  Payment: 'card',
  Ticketing: 'ticket',
};

function TagIcon({ name, size = 18 }) {
  return <Icon name={TAG_ICONS[name] || 'box'} size={size} />;
}

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
    ':focus-visible': { outline: 'none', boxShadow: `0 0 0 2px ${dark ? '#fff' : tint}88` },
    '@container (max-width: 920px)': { justifyContent: 'center', px: 2.5, gap: 0 },
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
    <Box key={m.tag} role="button" tabIndex={0} aria-label={m.label} title={m.label} onClick={() => onSelect(i)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(i); } }} sx={style}>
      <Box sx={{ width: 22, textAlign: 'center', flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
        <TagIcon name={m.tag} />
      </Box>
      <Text sx={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', '@container (max-width: 920px)': { display: 'none' } }}>{m.label}</Text>
      {on && <Box sx={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: dark || !light ? '#fff' : tint, flexShrink: 0, '@container (max-width: 920px)': { display: 'none' } }} />}
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

function SidebarDark({ modules, active, onSelect, brand, tint, children, flip, theme }) {
  return (
    <Box sx={{ display: 'flex', height: 560, width: '100%', containerType: 'inline-size' }}>
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
          '@container (max-width: 920px)': { width: 72 },
        }}>
        <Box sx={{ px: 3, py: 4, display: 'flex', alignItems: 'center', gap: 2, '@container (max-width: 920px)': { justifyContent: 'center', px: 2 } }}>
          {brandMark(brand, tint)}
          <Text sx={{ fontWeight: 700, fontSize: 1, fontFamily: font, lineHeight: 1.25, '@container (max-width: 920px)': { display: 'none' } }}>{brand}</Text>
        </Box>
        <Box sx={{ px: 3, pb: 2, '@container (max-width: 920px)': { display: 'none' } }}>
          <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font }}>
            {'Modules'}
          </Text>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', px: 3, '@container (max-width: 920px)': { px: 2 } }}>
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
            '@container (max-width: 920px)': { display: 'none' },
          }}>
          <Text>Demo preview &middot; live</Text>
          <Text sx={{ fontFamily: 'Menlo, monospace', fontSize: 0 }}>{modules.length} {'modules'}</Text>
        </Box>
      </Box>
      <Box sx={{ flex: 1, minWidth: 0, overflow: 'auto', position: 'relative', backgroundColor: (theme && theme.bg) || S.bg, containerType: 'inline-size' }}>{children()}</Box>
    </Box>
  );
}

function SidebarLight({ modules, active, onSelect, brand, tint, children, theme }) {
  return (
    <Box sx={{ display: 'flex', height: 560, width: '100%', containerType: 'inline-size' }}>
      <Box sx={{ flex: 1, minWidth: 0, overflow: 'auto', position: 'relative', backgroundColor: (theme && theme.bg) || S.bg, containerType: 'inline-size' }}>{children()}</Box>
      <Box
        sx={{
          width: 208,
          flexShrink: 0,
          backgroundColor: '#FBFCFE',
          borderLeft: '1px solid',
          borderColor: S.line,
          display: 'flex',
          flexDirection: 'column',
          '@container (max-width: 920px)': { width: 72 },
        }}>
        <Box sx={{ px: 3, py: 4, display: 'flex', alignItems: 'center', gap: 2, '@container (max-width: 920px)': { justifyContent: 'center', px: 2 } }}>
          {brandMark(brand, tint)}
          <Text sx={{ fontWeight: 700, fontSize: 1, fontFamily: font, lineHeight: 1.25, color: S.ink, '@container (max-width: 920px)': { display: 'none' } }}>{brand}</Text>
        </Box>
        <Box sx={{ px: 3, pb: 2, '@container (max-width: 920px)': { display: 'none' } }}>
          <Text sx={{ fontSize: 0, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font }}>
            {'Modules'}
          </Text>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', px: 3, '@container (max-width: 920px)': { px: 2 } }}>
          {modules.map(navItem({ modules, active, onSelect, tint, light: true }))}
        </Box>
        <Box sx={{ mt: 'auto', px: 3, py: 3, borderTop: '1px solid', borderColor: S.line, fontSize: 0, color: S.muted, fontFamily: font, lineHeight: 1.6, '@container (max-width: 920px)': { display: 'none' } }}>
          <Text>Demo preview &middot; live</Text>
          <Text sx={{ fontFamily: 'Menlo, monospace' }}>{modules.length} {'modules'}</Text>
        </Box>
      </Box>
    </Box>
  );
}

function TopNav({ modules, active, onSelect, brand, tint, children, theme }) {
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
        <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap', justifyContent: 'flex-end', maxWidth: '60%' }}>
          {modules.map((m, i) => {
            const on = active === i;
            return (
              <Box
                key={m.tag}
                role="button"
                tabIndex={0}
                aria-label={m.label}
                onClick={() => onSelect(i)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(i); } }}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  px: 3,
                  py: '8px',
                  borderRadius: 9,
                  fontSize: 0,
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: font,
                  whiteSpace: 'nowrap',
                  color: on ? '#fff' : 'rgba(255,255,255,0.6)',
                  backgroundColor: on ? tint : 'transparent',
                  transition: 'background-color 0.15s',
                  '&:hover': { backgroundColor: on ? tint : 'rgba(255,255,255,0.1)' },
                  ':focus-visible': { outline: 'none', boxShadow: '0 0 0 2px #ffffff88' },
                }}>
                <TagIcon name={m.tag} size={16} />
                <Text>{m.label}</Text>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box sx={{ flex: 1, minWidth: 0, overflow: 'auto', position: 'relative', backgroundColor: (theme && theme.bg) || S.bg, containerType: 'inline-size' }}>{children()}</Box>
    </Box>
  );
}

function Chips({ modules, active, onSelect, brand, tint, children, theme }) {
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
          gap: 2.5,
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
              role="button"
              tabIndex={0}
              aria-label={m.label}
              onClick={() => onSelect(i)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(i); } }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                px: 3.5,
                py: '9px',
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
                ':focus-visible': { outline: 'none', boxShadow: `0 0 0 2px ${tint}55` },
              }}>
              <TagIcon name={m.tag} size={16} />
              <Text>{m.label}</Text>
            </Box>
          );
        })}
      </Box>
      <Box sx={{ flex: 1, minWidth: 0, overflow: 'auto', position: 'relative', backgroundColor: S.bg, containerType: 'inline-size' }}>{children()}</Box>
    </Box>
  );
}

function BottomTab({ modules, active, onSelect, brand, tint, children, theme }) {
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
      <Box sx={{ flex: 1, minWidth: 0, overflow: 'auto', position: 'relative', backgroundColor: (theme && theme.bg) || S.bg, containerType: 'inline-size' }}>{children()}</Box>
      <Box sx={{ display: 'flex', backgroundColor: S.ink, flexShrink: 0, px: 3, py: '10px', gap: 1.5 }}>
        {modules.map((m, i) => {
          const on = active === i;
          return (
            <Box
              key={m.tag}
              role="button"
              tabIndex={0}
              aria-label={m.label}
              onClick={() => onSelect(i)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(i); } }}
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                py: '8px',
                borderRadius: 10,
                cursor: 'pointer',
                minWidth: 0,
                color: on ? '#fff' : 'rgba(255,255,255,0.55)',
                backgroundColor: on ? `${tint}33` : 'transparent',
                fontFamily: font,
                transition: 'background-color 0.15s',
                ':focus-visible': { outline: 'none', boxShadow: '0 0 0 2px #ffffff88' },
              }}>
              <Box sx={{ lineHeight: 1 }}><TagIcon name={m.tag} size={16} /></Box>
              <Text sx={{ fontSize: 0, fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100%' }}>{m.label}</Text>
              {on && <Box sx={{ width: 14, height: 3, borderRadius: 99, backgroundColor: tint, mt: '1px' }} />}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

function Dashboard({ modules, active, onSelect, brand, tint, seed, children, theme }) {
  const statVals = [1200 + (seed % 8900), 42 + (seed % 900), seed % 31 + 3];
  const statLabels = [0, 1, 2].map((i) => modules[(active + i + 1) % modules.length]?.label || 'Active');
  return (
    <Box sx={{ display: 'flex', height: 560, width: '100%', containerType: 'inline-size' }}>
      <Box
        sx={{
          width: 200,
          flexShrink: 0,
          backgroundColor: S.ink,
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          '@container (max-width: 920px)': { width: 72 },
        }}>
        <Box sx={{ px: 3, py: 4, display: 'flex', alignItems: 'center', gap: 2, '@container (max-width: 920px)': { justifyContent: 'center', px: 2 } }}>
          {brandMark(brand, tint)}
          <Text sx={{ fontWeight: 700, fontSize: 1, fontFamily: font, lineHeight: 1.25, '@container (max-width: 920px)': { display: 'none' } }}>{brand}</Text>
        </Box>
        <Box sx={{ px: 3, pb: 2, '@container (max-width: 920px)': { display: 'none' } }}>
          <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font }}>
            {'Modules'}
          </Text>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', px: 3, '@container (max-width: 920px)': { px: 2 } }}>
          {modules.map(navItem({ modules, active, onSelect, tint, dark: true }))}
        </Box>
        <Box sx={{ mt: 'auto', px: 3, py: 3, borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: 0, color: 'rgba(255,255,255,0.5)', fontFamily: font, lineHeight: 1.6, '@container (max-width: 920px)': { display: 'none' } }}>
          <Text>Dashboard &middot; live</Text>
          <Text sx={{ fontFamily: 'Menlo, monospace' }}>{modules.length} {'modules'}</Text>
        </Box>
      </Box>
      <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', backgroundColor: (theme && theme.bg) || S.bg, containerType: 'inline-size' }}>
        <Box sx={{ px: 4, py: 3, background: `linear-gradient(120deg, ${S.ink}, ${tint})`, color: '#fff', display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap', flexShrink: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: 0 }}>
            <Box sx={{ width: 40, height: 40, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <TagIcon name={modules[active].tag} size={20} />
            </Box>
            <Box sx={{ minWidth: 0 }}>
              <Text sx={{ fontWeight: 700, fontSize: 2, fontFamily: font, lineHeight: 1.2, display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 240 }}>{brand}</Text>
              <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.7)', fontFamily: font }}>{modules[active].label} &middot; overview</Text>
            </Box>
          </Box>
          <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ px: 3, py: '7px', borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.14)', fontSize: 0, fontWeight: 700, fontFamily: font, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <StatusDot color={S.green} /> Live
            </Box>
          </Box>
        </Box>
        <Box sx={{ px: 4, py: 3, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3, flexShrink: 0, backgroundColor: (theme && theme.bg) || S.bg, '@container (max-width: 560px)': { gridTemplateColumns: '1fr 1fr' } }}>
          {statLabels.map((label, i) => (
            <Box key={i} sx={{ px: 3, py: 2.5, borderRadius: 12, backgroundColor: '#fff', border: '1px solid', borderColor: S.line, transition: 'transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease', '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 12px 30px rgba(15,33,55,0.12)' } }}>
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

function CoverHero({ modules, active, onSelect, brand, tint, children, theme }) {
  return (
    <Box sx={{ height: 560, width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ background: `linear-gradient(130deg, #0B1B33 0%, ${tint} 88%, ${tint} 100%)`, color: '#fff', flexShrink: 0 }}>
        <Box sx={{ px: 4, py: 2, display: 'flex', alignItems: 'center', gap: 3 }}>
          <Box sx={{ width: 40, height: 40, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, flexShrink: 0, fontFamily: font }}>
            {(brand || 'W').slice(0, 1)}
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Text sx={{ fontWeight: 800, fontSize: 1, fontFamily: font, lineHeight: 1.2, display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 220 }}>{brand}</Text>
            <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.7)', fontFamily: font }}>Demo preview &middot; live</Text>
          </Box>
          <Box sx={{ ml: 'auto', px: 2.5, py: '5px', borderRadius: 99, backgroundColor: 'rgba(255,255,255,0.16)', border: '1px solid rgba(255,255,255,0.28)', fontSize: 0, fontWeight: 700, fontFamily: font }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><StatusDot color="#4ADE80" /> Live</Box>
          </Box>
        </Box>
        <Box sx={{ px: 4, pb: 2, display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
          {modules.map((m, i) => {
            const on = active === i;
            return (
              <Box
                key={m.tag}
                role="button"
                tabIndex={0}
                aria-label={m.label}
                onClick={() => onSelect(i)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(i); } }}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  px: 2.5,
                  py: '6px',
                  borderRadius: 99,
                  fontSize: 0,
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: font,
                  whiteSpace: 'nowrap',
                  color: on ? tint : '#fff',
                  backgroundColor: on ? '#fff' : 'rgba(255,255,255,0.14)',
                  transition: 'background-color 0.15s',
                  '&:hover': { backgroundColor: on ? '#fff' : 'rgba(255,255,255,0.24)' },
                  ':focus-visible': { outline: 'none', boxShadow: '0 0 0 2px #ffffff88' },
                }}>
                <TagIcon name={m.tag} size={16} />
                <Text>{m.label}</Text>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box sx={{ flex: 1, minWidth: 0, overflow: 'auto', position: 'relative', backgroundColor: (theme && theme.bg) || S.bg, containerType: 'inline-size' }}>{children()}</Box>
    </Box>
  );
}

function Kiosk({ modules, active, onSelect, brand, tint, children }) {
  return (
    <Box sx={{ height: 560, width: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#0B1220' }}>
      <Box sx={{ px: 4, py: 3, display: 'flex', alignItems: 'center', gap: 2, flexShrink: 0 }}>
        <Box sx={{ width: 34, height: 34, borderRadius: 10, background: `linear-gradient(135deg, ${tint}, #0B1B33)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15, flexShrink: 0, fontFamily: font, boxShadow: `0 6px 14px ${tint}55` }}>
          {(brand || 'W').slice(0, 1)}
        </Box>
        <Text sx={{ fontWeight: 700, fontSize: 1, color: '#fff', fontFamily: font, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 260 }}>{brand}</Text>
        <Box sx={{ ml: 'auto', fontSize: 0, color: 'rgba(255,255,255,0.45)', fontFamily: 'Menlo, monospace' }}>kiosk &middot; live</Box>
      </Box>
      <Box sx={{ flex: 1, minWidth: 0, overflow: 'auto', position: 'relative', containerType: 'inline-size' }}>{children()}</Box>
      <Box sx={{ px: 3, pb: 3, display: 'grid', gridTemplateColumns: modules.length > 1 ? '1fr 1fr' : '1fr', gap: 2, flexShrink: 0, maxWidth: 560, mx: 'auto', width: '100%' }}>
        {modules.map((m, i) => {
          const on = active === i;
          return (
            <Box
              key={m.tag}
              role="button"
              tabIndex={0}
              aria-label={m.label}
              onClick={() => onSelect(i)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(i); } }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2.5,
                px: 3.5,
                py: 3,
                borderRadius: 14,
                cursor: 'pointer',
                backgroundColor: on ? `${tint}33` : 'rgba(255,255,255,0.06)',
                border: '1px solid',
                borderColor: on ? `${tint}88` : 'rgba(255,255,255,0.12)',
                color: on ? '#fff' : 'rgba(255,255,255,0.65)',
                fontFamily: font,
                transition: 'background-color 0.15s',
                ':focus-visible': { outline: 'none', boxShadow: '0 0 0 2px #ffffff88' },
              }}>
              <Box sx={{ width: 34, height: 34, borderRadius: 10, backgroundColor: on ? tint : 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <TagIcon name={m.tag} size={18} />
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Text sx={{ display: 'block', fontWeight: 700, fontSize: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.label}</Text>
                <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.45)' }}>{on ? 'In use' : 'Tap to open'}</Text>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

function SplitList({ modules, active, onSelect, brand, tint, children, theme }) {
  return (
    <Box sx={{ display: 'flex', height: 560, width: '100%', containerType: 'inline-size' }}>
      <Box sx={{ flex: 1, minWidth: 0, overflow: 'auto', position: 'relative', backgroundColor: (theme && theme.bg) || S.bg, containerType: 'inline-size' }}>{children()}</Box>
      <Box sx={{ width: 196, flexShrink: 0, backgroundColor: '#FFFFFF', borderLeft: '1px solid', borderColor: S.line, display: 'flex', flexDirection: 'column', '@container (max-width: 920px)': { width: 64 } }}>
        <Box sx={{ px: 3, py: 3, borderBottom: '1px solid', borderColor: S.line, display: 'flex', alignItems: 'center', gap: 2, '@container (max-width: 920px)': { justifyContent: 'center', px: 2 } }}>
          {brandMark(brand, tint, 30)}
          <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', '@container (max-width: 920px)': { display: 'none' } }}>{brand}</Text>
        </Box>
        <Box sx={{ px: 3, pt: 3, pb: 2, '@container (max-width: 920px)': { display: 'none' } }}>
          <Text sx={{ fontSize: 0, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font }}>{'Navigation'}</Text>
        </Box>
        <Box sx={{ px: 2, display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {modules.map((m, i) => {
            const on = active === i;
            return (
              <Box
                key={m.tag}
                role="button"
                tabIndex={0}
                aria-label={m.label}
                onClick={() => onSelect(i)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(i); } }}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2.5,
                  px: 2.5,
                  py: '10px',
                  borderRadius: 10,
                  cursor: 'pointer',
                  borderLeft: '3px solid',
                  borderColor: on ? tint : 'transparent',
                  backgroundColor: on ? `${tint}12` : 'transparent',
                  color: on ? tint : S.slate,
                  fontWeight: 700,
                  fontSize: 1,
                  fontFamily: font,
                  transition: 'background-color 0.15s',
                  '&:hover': { backgroundColor: on ? `${tint}12` : '#EEF3F9' },
                  '@container (max-width: 920px)': { justifyContent: 'center', px: 1 },
                  ':focus-visible': { outline: 'none', boxShadow: `0 0 0 2px ${tint}55` },
                }}>
                <TagIcon name={m.tag} size={17} />
                <Text sx={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', '@container (max-width: 920px)': { display: 'none' } }}>{m.label}</Text>
              </Box>
            );
          })}
        </Box>
        <Box sx={{ mt: 'auto', px: 3, py: 3, borderTop: '1px solid', borderColor: S.line, fontSize: 0, color: S.muted, fontFamily: font, lineHeight: 1.6, '@container (max-width: 920px)': { display: 'none' } }}>
          <Text>Demo preview &middot; live</Text>
        </Box>
      </Box>
    </Box>
  );
}

function Terminal({ modules, active, onSelect, brand, tint, children }) {
  return (
    <Box sx={{ height: 560, width: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#0A0F1A' }}>
      <Box sx={{ px: 4, py: 2.5, borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: 2, flexShrink: 0 }}>
        <Box sx={{ display: 'flex', gap: '6px' }}>
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FF5F57' }} />
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FEBC2E' }} />
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#28C840' }} />
        </Box>
        <Text sx={{ ml: 2, fontSize: 0, color: 'rgba(255,255,255,0.5)', fontFamily: 'Menlo, monospace', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 260 }}>
          {brand && `~/apps/${brand.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
        </Text>
        <Box sx={{ ml: 'auto', fontSize: 0, color: 'rgba(255,255,255,0.45)', fontFamily: 'Menlo, monospace' }}>
          <StatusDot color={tint} /> live
        </Box>
      </Box>
      <Box sx={{ flex: 1, minWidth: 0, overflow: 'auto', position: 'relative', containerType: 'inline-size' }}>{children()}</Box>
      <Box sx={{ px: 4, py: 2.5, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap', flexShrink: 0, fontFamily: 'Menlo, monospace' }}>
        {modules.map((m, i) => {
          const on = active === i;
          return (
            <Box
              key={m.tag}
              role="button"
              tabIndex={0}
              aria-label={m.label}
              onClick={() => onSelect(i)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(i); } }}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                px: 2.5,
                py: '6px',
                borderRadius: 8,
                cursor: 'pointer',
                fontSize: 0,
                fontWeight: 700,
                color: on ? tint : 'rgba(255,255,255,0.55)',
                backgroundColor: on ? `${tint}1f` : 'rgba(255,255,255,0.05)',
                border: '1px solid',
                borderColor: on ? `${tint}88` : 'rgba(255,255,255,0.12)',
                transition: 'all 0.15s',
                '&:hover': { borderColor: `${tint}88` },
                ':focus-visible': { outline: 'none', boxShadow: `0 0 0 2px ${tint}66` },
              }}>
              <Box sx={{ opacity: on ? 1 : 0.4, color: tint }}><TagIcon name={m.tag} size={14} /></Box>
              <Text>{i + 1}. {m.label}</Text>
            </Box>
          );
        })}
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
  'cover-hero': CoverHero,
  kiosk: Kiosk,
  'split-list': SplitList,
  terminal: Terminal,
};

const LAYOUT_KEYS = Object.keys(LAYOUTS);

export function layoutFor(id) {
  const keys = [...LAYOUT_KEYS];
  const off = hashId(id) % keys.length;
  return keys[off];
}
