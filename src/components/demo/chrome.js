/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { S, font, Avatar } from './shared';
import { Icon } from './icons';
import { LiveDot } from './anim';

export function AppBar({ brand, sub, icon, grad = 'linear-gradient(135deg,#0F2137,#1B2C45)', nav = [], active = -1, onSelect, right, light, height = 'auto' }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 3,
        px: [3, null, 4],
        py: '10px',
        borderBottom: '1px solid',
        borderColor: light ? S.line : 'rgba(255,255,255,0.08)',
        background: light ? '#fff' : grad,
        color: light ? S.ink : '#fff',
        height,
        flexWrap: 'wrap',
      }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box
          sx={{
            width: 30,
            height: 30,
            borderRadius: 9,
            background: 'linear-gradient(135deg,#22D3EE,#3B82F6)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: 1,
            flexShrink: 0,
          }}>
          {icon || brand.slice(0, 1)}
        </Box>
        <Box>
          <Text sx={{ fontWeight: 700, fontSize: 1, fontFamily: font, lineHeight: 1.25, display: 'block' }}>{brand}</Text>
          {sub && (
            <Text sx={{ fontSize: 0, color: light ? S.muted : 'rgba(255,255,255,0.55)', fontFamily: font, lineHeight: 1.25, display: 'block' }}>
              {sub}
            </Text>
          )}
        </Box>
      </Box>

      {nav.length > 0 && (
        <Box
          sx={{
            display: ['none', null, 'flex'],
            alignItems: 'center',
            gap: 1,
            order: [3, null, 0],
            width: ['100%', null, 'auto'],
            justifyContent: ['flex-start', null, 'center'],
            pb: ['4px', null, 0],
          }}>
          {nav.map((n, i) => (
            <Box
              key={n}
              onClick={() => onSelect && onSelect(i)}
              sx={{
                px: 2.5,
                py: '6px',
                borderRadius: 8,
                fontSize: 0,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: font,
                color: light ? (active === i ? S.tealDark : S.slate) : active === i ? '#fff' : 'rgba(255,255,255,0.6)',
                backgroundColor: light ? (active === i ? 'rgba(0,139,139,0.1)' : 'transparent') : active === i ? 'rgba(255,255,255,0.14)' : 'transparent',
                transition: 'background-color 0.15s, color 0.15s',
                '&:hover': { color: light ? S.teal : '#fff' },
                ':focus-visible': { outline: 'none', boxShadow: `0 0 0 2px ${light ? S.teal : '#fff'}66` },
              }}>
              {n}
            </Box>
          ))}
        </Box>
      )}

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {right}
        <Avatar label="A" color={S.teal} size={30} />
      </Box>
    </Box>
  );
}

export function FootBar({ left, right, status = true, light }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        flexWrap: 'wrap',
        px: [3, null, 4],
        py: 2,
        borderTop: '1px solid',
        borderColor: light ? S.line : 'rgba(255,255,255,0.08)',
        backgroundColor: light ? '#FBFCFE' : S.ink,
        color: light ? S.muted : 'rgba(255,255,255,0.55)',
        fontSize: 0,
        fontFamily: font,
      }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {status && <LiveDot color={S.green} size={7} />}
        <Text>{left}</Text>
      </Box>
      <Text>{right}</Text>
    </Box>
  );
}

export function Skeleton({ w = '100%', h = 12, r = 8, sx }) {
  return (
    <Box
      sx={{
        width: w,
        height: h,
        borderRadius: r,
        background: 'linear-gradient(90deg, #E8EEF6 25%, #F6F9FC 40%, #E8EEF6 60%)',
        backgroundSize: '800px 100%',
        animation: 'dShimmer 1.3s linear infinite',
        ...sx,
      }}
    />
  );
}

export function LoadingRows({ rows = 3 }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {Array.from({ length: rows }).map((_, i) => (
        <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 3, p: 3, backgroundColor: '#fff', borderRadius: 12, border: `1px solid ${S.line}` }}>
          <Skeleton w={38} h={38} r={12} />
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Skeleton w="55%" h={10} />
            <Skeleton w="80%" h={8} />
          </Box>
          <Skeleton w={64} h={28} r={14} />
        </Box>
      ))}
    </Box>
  );
}

export function StatCard({ icon, bg, color, value, label, delta, up }) {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 12,
        border: '1px solid',
        borderColor: S.line,
        backgroundColor: '#fff',
        boxShadow: '0 1px 2px rgba(15,33,55,0.04), 0 10px 30px rgba(15,33,55,0.07)',
      }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, fontFamily: font }}>{label}</Text>
        <Box sx={{ width: 30, height: 30, borderRadius: 9, backgroundColor: bg || `${color}18`, color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 1 }}>
          {icon}
        </Box>
      </Box>
      <Text sx={{ fontSize: 3, fontWeight: 700, color: S.ink, fontFamily: font, display: 'block', mb: '2px' }}>{value}</Text>
      {delta && (
        <Text sx={{ fontSize: 0, fontWeight: 700, color: up ? S.green : S.red, fontFamily: font, display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
          <Icon name={up ? 'arrowUp' : 'arrowDown'} size={13} /> {delta}
        </Text>
      )}
    </Box>
  );
}

export function FilterChip({ label, active, onClick, color = S.teal }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        px: 3,
        py: '6px',
        borderRadius: 99,
        border: '1.5px solid',
        borderColor: active ? color : S.line,
        backgroundColor: active ? `${color}14` : '#fff',
        color: active ? (color === S.teal ? S.tealDark : color) : S.slate,
        fontSize: 0,
        fontWeight: 700,
        cursor: 'pointer',
        fontFamily: font,
        whiteSpace: 'nowrap',
        transition: 'all 0.15s',
        '&:hover': { borderColor: active ? color : '#B9CBDD' },
        ':focus-visible': { outline: 'none', boxShadow: `0 0 0 2px ${color}55` },
      }}>
      {label}
    </Box>
  );
}
