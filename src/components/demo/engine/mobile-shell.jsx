/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { font, StatusDot } from '../shared';
import { Icon } from '../icons';
import { TAG_ICONS } from '../layouts';
import { BrandTile } from './blocks';
import { ThemeContext } from './theme';

export default function MobileShell({ modules, active, onSelect, brand, theme, children }) {
  const t = theme;
  const dark = t.dark;
  const chrome = dark ? '#0B1B33' : '#FFFFFF';
  return (
    <ThemeContext.Provider value={theme}>
    <Box data-shell="mobile" sx={{ height: 560, width: '100%', display: 'flex', flexDirection: 'column', backgroundColor: t.bg, position: 'relative' }}>
      <Box
        sx={{
          px: 3,
          py: 2.5,
          background: `linear-gradient(135deg, ${dark ? '#0B1B33' : t.accent}, ${dark ? t.accent : t.accent2})`,
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          gap: 2.5,
          flexShrink: 0,
        }}>
        <BrandTile label={brand} size={30} />
        <Box sx={{ flex: '1 1 auto', minWidth: 0 }}>
          <Text sx={{ fontWeight: 800, fontSize: 1, fontFamily: font, lineHeight: 1.15, display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 190 }}>{brand}</Text>
          <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.7)', fontFamily: font }}>Demo preview &middot; live</Text>
        </Box>
        <Box sx={{ ml: 'auto', px: 2.5, py: '6px', borderRadius: 99, backgroundColor: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)', fontSize: 0, fontWeight: 700, fontFamily: font, display: 'inline-flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
          <StatusDot color="#4ADE80" /> Live
        </Box>
      </Box>
      <Box sx={{ flex: 1, minWidth: 0, overflow: 'auto', position: 'relative', backgroundColor: t.bg, containerType: 'inline-size' }}>{children()}</Box>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: chrome,
          borderTop: `1px solid ${t.line}`,
          flexShrink: 0,
          overflowX: 'auto',
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
              title={m.label}
              onClick={() => onSelect(i)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(i); } }}
              sx={{
                flex: '1 1 64px',
                maxWidth: 96,
                minWidth: 64,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                py: '9px',
                px: 1,
                cursor: 'pointer',
                borderRadius: 10,
                color: on ? t.accent : (dark ? 'rgba(255,255,255,0.5)' : t.muted),
                fontFamily: font,
                transition: 'background-color 0.15s',
                ':focus-visible': { outline: 'none', boxShadow: `0 0 0 2px ${t.accent}66` },
              }}>
              <Box sx={{ lineHeight: 1, opacity: on ? 1 : 0.7 }}>
                <Icon name={TAG_ICONS[m.tag] || 'box'} size={17} />
              </Box>
              <Text sx={{ fontSize: 0, fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100%' }}>{m.label}</Text>
              {on && <Box sx={{ width: 16, height: 3, borderRadius: 99, backgroundColor: t.accent, mt: '1px' }} />}
            </Box>
          );
        })}
      </Box>
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: t.grad, pointerEvents: 'none' }} />
    </Box>
    </ThemeContext.Provider>
  );
}
