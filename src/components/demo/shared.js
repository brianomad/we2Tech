/** @jsx jsx */
import { jsx, Box, Text, Button } from 'theme-ui';

export const S = {
  ink: '#0F2137',
  slate: '#5A6B85',
  muted: '#8A97AC',
  faint: '#B7C2D2',
  line: '#E5ECF4',
  bg: '#EEF2F8',
  white: '#FFFFFF',
  teal: '#008B8B',
  tealDark: '#005555',
  amber: '#F5A623',
  red: '#E5484D',
  green: '#1FA971',
  blue: '#3B82F6',
  purple: '#8B5CF6',
  pink: '#EC4899',
  cyan: '#22D3EE',
  gold: '#C9A227',
  navy: '#0B1B33',
  orange: '#F97316',
};

export function SectionLabel({ children, color = S.muted, sx }) {
  return (
    <Text
      sx={{
        display: 'block',
        fontSize: 0,
        fontWeight: 700,
        color,
        textTransform: 'uppercase',
        letterSpacing: '1.2px',
        fontFamily: font,
        mb: 2,
        ...sx,
      }}>
      {children}
    </Text>
  );
}

export const card = {
  backgroundColor: S.white,
  border: `1px solid ${S.line}`,
  borderRadius: 12,
  boxShadow: '0 1px 2px rgba(15,33,55,0.04), 0 10px 30px rgba(15,33,55,0.07)',
};

export const font = "'Ubuntu', sans-serif";

export function TopBar({ brand, sub, right, dark }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 4,
        py: 3,
        borderBottom: '1px solid',
        borderColor: S.line,
        backgroundColor: dark ? S.ink : S.white,
        color: dark ? S.white : S.ink,
      }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box
          sx={{
            width: 26,
            height: 26,
            borderRadius: 8,
            background: `linear-gradient(135deg, ${S.teal}, ${S.cyan})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: S.white,
            fontWeight: 700,
            fontSize: 0,
          }}>
          w
        </Box>
        <Box>
          <Text sx={{ fontWeight: 700, fontSize: 2, lineHeight: 1.2, display: 'block', fontFamily: font }}>
            {brand}
          </Text>
          {sub && (
            <Text sx={{ fontSize: 0, color: dark ? 'rgba(255,255,255,0.6)' : S.muted, fontFamily: font }}>
              {sub}
            </Text>
          )}
        </Box>
      </Box>
      {right && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, color: dark ? 'rgba(255,255,255,0.85)' : S.slate }}>
          {right}
        </Box>
      )}
    </Box>
  );
}

export function Card({ children, sx, onClick }) {
  return (
    <Box sx={{ ...card, ...sx }} onClick={onClick}>
      {children}
    </Box>
  );
}

const badgeTones = {
  teal: { bg: 'rgba(0,139,139,0.1)', color: S.tealDark, dot: S.teal },
  green: { bg: 'rgba(31,169,113,0.12)', color: '#0C7A52', dot: S.green },
  amber: { bg: 'rgba(245,166,35,0.14)', color: '#9A5B00', dot: S.amber },
  red: { bg: 'rgba(229,72,77,0.12)', color: '#B3353A', dot: S.red },
  gray: { bg: '#EFF3F9', color: S.slate, dot: S.muted },
  blue: { bg: 'rgba(59,130,246,0.12)', color: '#2563EB', dot: S.blue },
  purple: { bg: 'rgba(139,92,246,0.12)', color: '#7C3AED', dot: S.purple },
  pink: { bg: 'rgba(236,72,153,0.12)', color: '#DB2777', dot: S.pink },
  orange: { bg: 'rgba(249,115,22,0.14)', color: '#C2410C', dot: S.orange },
};

export function Badge({ tone = 'gray', children, dot = true }) {
  const t = badgeTones[tone] || badgeTones.gray;
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        px: 2,
        py: '3px',
        borderRadius: 20,
        fontSize: 0,
        fontWeight: 700,
        color: t.color,
        backgroundColor: t.bg,
        whiteSpace: 'nowrap',
        fontFamily: font,
      }}>
      {dot && <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: t.dot }} />}
      {children}
    </Box>
  );
}

export function Btn({ tone = 'primary', children, sx, ...props }) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    px: 4,
    py: '10px',
    borderRadius: 10,
    fontWeight: 700,
    fontSize: 1,
    cursor: 'pointer',
    border: 'none',
    fontFamily: font,
    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
    '&:active': { transform: 'scale(0.97)' },
    '&:hover': { transform: 'translateY(-1px)' },
    ':disabled': { opacity: 0.5, cursor: 'not-allowed', transform: 'none' },
  };
  const tones = {
    primary: {
      backgroundColor: S.teal,
      color: '#fff',
      backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0) 55%)`,
      boxShadow: '0 8px 18px rgba(0,139,139,0.35), inset 0 1px 0 rgba(255,255,255,0.2)',
    },
    dark: { backgroundColor: S.ink, color: '#fff', boxShadow: '0 8px 16px rgba(15,33,55,0.28)' },
    ghost: { backgroundColor: '#fff', color: S.ink, border: `1px solid ${S.line}`, boxShadow: '0 1px 2px rgba(15,33,55,0.05)' },
    white: { backgroundColor: '#fff', color: S.tealDark },
    amber: { backgroundColor: S.amber, color: '#fff', boxShadow: '0 8px 16px rgba(245,166,35,0.35)' },
    danger: { backgroundColor: S.red, color: '#fff' },
  };
  return (
    <Button sx={{ ...base, ...tones[tone], ...sx }} {...props}>
      {children}
    </Button>
  );
}

export function Field({ label, value, placeholder, onChange, sx, mono }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px', ...sx }}>
      {label && (
        <Text sx={{ fontSize: 0, fontWeight: 700, color: S.slate, fontFamily: font }}>{label}</Text>
      )}
      <Box
        as="input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={!onChange}
        sx={{
          px: 3,
          py: 2,
          borderRadius: 10,
          border: '1px solid',
          borderColor: S.line,
          backgroundColor: '#fff',
          color: S.ink,
          fontSize: 1,
          fontFamily: mono ? "'SF Mono', Menlo, monospace" : font,
          outline: 'none',
          '&:focus': { borderColor: S.teal, boxShadow: `0 0 0 3px rgba(0,139,139,0.15)` },
        }}
      />
    </Box>
  );
}

export function Stat({ label, value, delta, up, color }) {
  return (
    <Card sx={{ p: 3, flex: 1, minWidth: 0 }}>
      <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, fontFamily: font }}>{label}</Text>
      <Text sx={{ fontSize: 3, fontWeight: 700, color: S.ink, my: '4px', fontFamily: font, display: 'block' }}>
        {value}
      </Text>
      {delta && (
        <Text
          sx={{
            fontSize: 0,
            fontWeight: 700,
            color: up ? S.green : S.red,
            fontFamily: font,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}>
          {up ? '\u2191' : '\u2193'} {delta}
        </Text>
      )}
    </Card>
  );
}

export function Progress({ pct, color = S.teal, height = 8, sx }) {
  return (
    <Box sx={{ width: '100%', height, borderRadius: 99, backgroundColor: '#E8EEF6', overflow: 'hidden', ...sx }}>
      <Box sx={{ width: `${pct}%`, height: '100%', borderRadius: 99, background: color }} />
    </Box>
  );
}

export function Avatar({ label, color, size = 34 }) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: color || S.teal,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontSize: size / 2.6,
        flexShrink: 0,
        fontFamily: font,
      }}>
      {label}
    </Box>
  );
}

export function Bars({ data, height = 120, color = S.teal, labels }) {
  const max = Math.max(...data);
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height, width: '100%' }}>
      {data.map((v, i) => (
        <Box key={i} sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', height: '100%', justifyContent: 'flex-end' }}>
          <Box
            sx={{
              width: '100%',
              maxWidth: 34,
              borderRadius: '8px 8px 4px 4px',
              height: `${(v / max) * 100}%`,
              background: `linear-gradient(180deg, ${color}, ${color}cc)`,
            }}
          />
          {labels && (
            <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{labels[i]}</Text>
          )}
        </Box>
      ))}
    </Box>
  );
}

export function LineChart({ values, height = 110, color = S.teal, width = 280 }) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const span = max - min || 1;
  const stepX = width / (values.length - 1);
  const pts = values.map((v, i) => `${i * stepX},${height - ((v - min) / span) * (height - 8) - 4}`);
  const area = `0,${height} ${pts.join(' ')} ${width},${height}`;
  return (
    <svg width="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="lcArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill="url(#lcArea)" />
      <polyline points={pts.join(' ')} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={width} cy={pts[pts.length - 1].split(',')[1]} r="4" fill={color} />
    </svg>
  );
}

export function Qr({ size = 84 }) {
  const cells = [];
  const positions = [
    [0, 0, 6, 6], [size - 6, 0, 6, 6], [0, size - 6, 6, 6],
  ];
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      const inFinder = positions.some(([fx, fy, fw, fh]) => x >= fx && x < fx + fw && y >= fy && y < fy + fh);
      if (inFinder) continue;
      const on = (x * 7 + y * 13 + x * y * 3) % 5 < 2;
      if (on) cells.push([x, y]);
    }
  }
  return (
    <Box
      sx={{
        width: size,
        height: size,
        position: 'relative',
        backgroundColor: '#fff',
        padding: 6,
        borderRadius: 8,
      }}>
      <Box sx={{ position: 'absolute', inset: 6 }}>
        {cells.map(([x, y]) => (
          <Box key={`${x}-${y}`} sx={{ position: 'absolute', left: x, top: y, width: 1, height: 1, backgroundColor: '#0F2137' }} />
        ))}
      </Box>
      {positions.map(([fx, fy, fw, fh], i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            left: fx,
            top: fy,
            width: fw,
            height: fh,
            border: '2px solid',
            borderColor: S.ink,
          }}>
          <Box sx={{ position: 'absolute', left: 2, top: 2, width: fw - 6, height: fh - 6, backgroundColor: S.ink }} />
        </Box>
      ))}
    </Box>
  );
}

export function Stepper({ steps, active }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0, width: '100%' }}>
      {steps.map((s, i) => {
        const done = i < active;
        const current = i === active;
        return (
          <Box key={i} sx={{ flex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 1, position: 'relative' }}>
            <Box
              sx={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                backgroundColor: done ? S.green : current ? S.teal : '#E3EAF2',
                color: done || current ? '#fff' : S.muted,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 0,
                fontWeight: 700,
                fontFamily: font,
                zIndex: 1,
              }}>
              {done ? '\u2713' : i + 1}
            </Box>
            <Text sx={{ fontSize: 0, fontWeight: current ? 700 : 500, color: current || done ? S.ink : S.muted, textAlign: 'center', fontFamily: font }}>
              {s}
            </Text>
            {i < steps.length - 1 && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 10,
                  left: 'calc(50% + 11px)',
                  width: 'calc(100% - 22px)',
                  height: 2,
                  backgroundColor: done ? S.green : '#E3EAF2',
                }}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
}

export function Quantity({ value, onChange, min = 0 }) {
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', border: `1px solid ${S.line}`, borderRadius: 10, overflow: 'hidden', backgroundColor: '#fff' }}>
      <Box
        onClick={() => onChange(Math.max(min, value - 1))}
        sx={{ px: 3, py: '7px', color: S.teal, fontWeight: 700, cursor: 'pointer', fontFamily: font, '&:active': { backgroundColor: '#F0F6F6' } }}>
        {'\u2212'}
      </Box>
      <Text sx={{ minWidth: 30, textAlign: 'center', fontWeight: 700, fontSize: 1, fontFamily: font, color: S.ink }}>{value}</Text>
      <Box
        onClick={() => onChange(value + 1)}
        sx={{ px: 3, py: '7px', color: S.teal, fontWeight: 700, cursor: 'pointer', fontFamily: font, '&:active': { backgroundColor: '#F0F6F6' } }}>
        +
      </Box>
    </Box>
  );
}

export function Sidebar({ items, active, onSelect, brand }) {
  return (
    <Box
      sx={{
        width: [170, 190],
        flexShrink: 0,
        backgroundColor: S.ink,
        color: '#fff',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, px: 2, pt: 1 }}>
        <Box
          sx={{
            width: 26,
            height: 26,
            borderRadius: 8,
            background: `linear-gradient(135deg, ${S.teal}, ${S.cyan})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: 0,
          }}>
          w
        </Box>
        <Text sx={{ fontWeight: 700, fontSize: 2, fontFamily: font }}>{brand}</Text>
      </Box>
      {items.map((item, i) => (
        <Box
          key={item}
          onClick={() => onSelect && onSelect(i)}
          sx={{
            px: 3,
            py: 2,
            borderRadius: 10,
            fontSize: 1,
            cursor: 'pointer',
            fontFamily: font,
            fontWeight: 600,
            color: active === i ? '#fff' : 'rgba(255,255,255,0.65)',
            backgroundColor: active === i ? S.teal : 'transparent',
            '&:hover': { backgroundColor: active === i ? S.teal : 'rgba(255,255,255,0.08)' },
          }}>
          {item}
        </Box>
      ))}
    </Box>
  );
}

export function StatusDot({ color }) {
  return <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: color, flexShrink: 0 }} />;
}

export function MockMap({ seed = 1 }) {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        minHeight: 180,
        borderRadius: 12,
        overflow: 'hidden',
        background: `#E9F0F7`,
      }}>
      <svg width="100%" height="100%" viewBox="0 0 300 180" preserveAspectRatio="none">
        <rect width="300" height="180" fill="#E9F0F7" />
        <g stroke="#CFDBE8" strokeWidth="2" fill="none">
          <path d="M0 40 L90 40 L90 120 L300 120" />
          <path d="M0 90 L60 90 L60 30 L200 30 L200 150 L300 150" />
          <path d="M150 0 L150 180" />
          <path d="M0 160 L120 160 L120 100 L300 100" />
        </g>
        <g fill="#CFDBE8">
          <rect x="20" y="20" width="26" height="18" rx="3" />
          <rect x="200" y="50" width="30" height="20" rx="3" />
          <rect x="70" y="130" width="24" height="16" rx="3" />
          <rect x="230" y="20" width="28" height="18" rx="3" />
        </g>
      </svg>
      <Box
        sx={{
          position: 'absolute',
          left: '30%',
          top: '52%',
          width: 14,
          height: 14,
          borderRadius: '50% 50% 50% 0',
          transform: 'rotate(-45deg)',
          backgroundColor: S.teal,
          border: '2px solid #fff',
          boxShadow: `0 0 0 6px rgba(0,139,139,0.25)`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: '58%',
          top: '30%',
          width: 12,
          height: 12,
          borderRadius: '50%',
          backgroundColor: S.blue,
          border: '2px solid #fff',
          boxShadow: `0 0 0 5px rgba(59,130,246,0.2)`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: '76%',
          top: '66%',
          width: 10,
          height: 10,
          borderRadius: '50%',
          backgroundColor: S.amber,
          border: '2px solid #fff',
          boxShadow: `0 0 0 5px rgba(245,166,35,0.22)`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: 10,
          top: 10,
          px: 2,
          py: '4px',
          borderRadius: 8,
          backgroundColor: 'rgba(255,255,255,0.9)',
          fontSize: 0,
          fontWeight: 700,
          color: S.slate,
          fontFamily: font,
        }}>
        Live
      </Box>
    </Box>
  );
}

export function Empty({ label, icon }) {
  return (
    <Box
      sx={{
        py: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        color: S.muted,
      }}>
      <Box sx={{ fontSize: 4, color: S.faint }}>{icon || '\u2B07'}</Box>
      <Text sx={{ fontSize: 1, fontWeight: 600, fontFamily: font }}>{label}</Text>
    </Box>
  );
}
