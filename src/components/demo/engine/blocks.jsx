/** @jsx jsx */
import { jsx, Box, Text, Button } from 'theme-ui';
import { font } from '../shared';
import { Icon } from '../icons';
import { useT } from './theme';

export function Panel({ children, sx, onClick }) {
  const t = useT();
  return (
    <Box
      sx={{
        backgroundColor: t.surface,
        border: `1px solid ${t.line}`,
        borderRadius: t.radius,
        boxShadow: t.dark ? 'none' : '0 1px 2px rgba(15,33,55,0.04), 0 10px 30px rgba(15,33,55,0.06)',
        transition: 'transform 0.18s ease, box-shadow 0.18s ease',
        '&:hover': onClick ? { transform: 'translateY(-2px)' } : {},
        ...sx,
      }}
      onClick={onClick}>
      {children}
    </Box>
  );
}

export function SectionTitle({ children, right, sx }) {
  const t = useT();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, mb: 2, ...sx }}>
      <Text sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 0, fontWeight: 700, color: t.muted, textTransform: 'uppercase', letterSpacing: '1.2px', fontFamily: font }}>
        <Box sx={{ width: 3, height: 14, borderRadius: 99, background: t.grad, flexShrink: 0 }} />
        {children}
      </Text>
      {right && <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>{right}</Box>}
    </Box>
  );
}

export function AccentBtn({ children, sx, ...props }) {
  const t = useT();
  return (
    <Button
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        px: 4,
        py: '11px',
        borderRadius: t.radius,
        fontWeight: 700,
        fontSize: 1,
        cursor: 'pointer',
        border: 'none',
        fontFamily: font,
        color: '#fff',
        backgroundImage: t.grad,
        boxShadow: `0 8px 18px ${t.accent}55, inset 0 1px 0 rgba(255,255,255,0.25)`,
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        '&:active': { transform: 'scale(0.97)' },
        '&:hover': { transform: 'translateY(-1px)' },
        ':disabled': { opacity: 0.5, cursor: 'not-allowed', transform: 'none' },
        ':focus-visible': { outline: 'none', boxShadow: `0 0 0 3px ${t.accent}44` },
        ...sx,
      }}
      {...props}>
      {children}
    </Button>
  );
}

export function GhostBtn({ children, sx, ...props }) {
  const t = useT();
  return (
    <Button
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        px: 4,
        py: '11px',
        borderRadius: t.radius,
        fontWeight: 700,
        fontSize: 1,
        cursor: 'pointer',
        border: `1.5px solid ${t.line}`,
        backgroundColor: 'transparent',
        color: t.ink,
        fontFamily: font,
        transition: 'border-color 0.15s',
        '&:hover': { borderColor: t.accent },
        ':focus-visible': { outline: 'none', boxShadow: `0 0 0 3px ${t.accent}44` },
        ...sx,
      }}
      {...props}>
      {children}
    </Button>
  );
}

export function Chip({ on, children, onClick, sx }) {
  const t = useT();
  return (
    <Box
      role="button"
      tabIndex={0}
      aria-pressed={!!on}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1.5,
        px: 3.5,
        py: '9px',
        borderRadius: 99,
        border: '1.5px solid',
        borderColor: on ? t.accent : t.line,
        backgroundColor: on ? `${t.accent}1c` : t.surface,
        color: on ? t.accent : t.slate,
        fontSize: 0,
        fontWeight: 700,
        cursor: 'pointer',
        fontFamily: font,
        whiteSpace: 'nowrap',
        transition: 'all 0.15s',
        '&:hover': { borderColor: t.accent },
        ':focus-visible': { outline: 'none', boxShadow: `0 0 0 2px ${t.accent}55` },
        ...sx,
      }}>
      {children}
    </Box>
  );
}

export function StatCard({ label, value, sub, color, sx }) {
  const t = useT();
  return (
    <Panel sx={{ p: 3, minWidth: 0, ...sx }}>
      <Text sx={{ fontSize: 0, fontWeight: 700, color: t.muted, fontFamily: font, display: 'block' }}>{label}</Text>
      <Text sx={{ fontSize: 3, fontWeight: 700, color: color || t.ink, my: '4px', fontFamily: font, display: 'block' }}>{value}</Text>
      {sub && <Text sx={{ fontSize: 0, fontWeight: 600, color: t.muted, fontFamily: font }}>{sub}</Text>}
    </Panel>
  );
}

const EMOJI_MAP = [
  [/nut|cashew|almond|pistachio|peanut|walnut/i, '🥜', '#FDE68A', '#92400E'],
  [/veg|vegetable|spinach|kale|lettuce|broccoli|carrot|tomato|onion/i, '🥬', '#BBF7D0', '#166534'],
  [/beef|steak|meat|pork|lamb|chicken/i, '🥩', '#FECACA', '#991B1B'],
  [/milk|cream|yogurt|dairy/i, '🥛', '#DBEAFE', '#1E40AF'],
  [/egg/i, '🥚', '#FEF3C7', '#92400E'],
  [/cereal|grain|oat|rice|wheat/i, '🥣', '#FEF9C3', '#854D0E'],
  [/fruit|apple|banana|orange|berry|grape|mango|peach|pear|cherry/i, '🍎', '#FED7AA', '#C2410C'],
  [/fish|salmon|tuna|seafood|prawn|shrimp/i, '🐟', '#CFFAFE', '#155E75'],
  [/bread|bakery|cake|pastry|donut|cookie/i, '🍞', '#FDE68A', '#92400E'],
  [/coffee|tea|latte|espresso|matcha/i, '☕', '#E7E5E4', '#44403C'],
  [/wine|beer|drink|juice|soda|beverage/i, '🍷', '#FCE7F3', '#9D174D'],
  [/cheese/i, '🧀', '#FEF3C7', '#92400E'],
  [/snack|chip|crisp|popcorn/i, '🍿', '#FEF3C7', '#854D0E'],
  [/frozen|ice cream|gelato/i, '🧊', '#E0F2FE', '#075985'],
  [/phone|mobile|smartphone|iphone|android/i, '📱', '#E0E7FF', '#3730A3'],
  [/laptop|computer|macbook|notebook/i, '💻', '#EDE9FE', '#5B21B6'],
  [/watch|clock|timer/i, '⌚', '#F3F4F6', '#1F2937'],
  [/headphone|earbud|earphone|airpod/i, '🎧', '#F3E8FF', '#7E22CE'],
  [/camera|photo|lens/i, '📷', '#F3F4F6', '#374151'],
  [/charger|battery|power bank/i, '🔋', '#D1FAE5', '#065F46'],
  [/speaker|audio|sound|boombox/i, '🔊', '#DBEAFE', '#1E40AF'],
  [/blouse|shirt|top|tee|polo/i, '👔', '#FCE7F3', '#9D174D'],
  [/dress|gown|frock/i, '👗', '#FDF2F8', '#BE185D'],
  [/pant|trouser|jean|short|skirt/i, '👖', '#DBEAFE', '#1E40AF'],
  [/shoe|sneaker|boot|sandal|slipper/i, '👟', '#FEF3C7', '#92400E'],
  [/bag|tote|backpack|purse|handbag/i, '👜', '#FDE68A', '#92400E'],
  [/hat|cap|beanie|visor/i, '🧢', '#DBEAFE', '#1E40AF'],
  [/scarf|shawl|wrap/i, '🧣', '#FECACA', '#991B1B'],
  [/sunglass|glasses|eyewear/i, '🕶️', '#E5E7EB', '#374151'],
  [/ring|necklace|bracelet|jewel|earring/i, '💍', '#FEF3C7', '#92400E'],
  [/book|novel|magazine|journal/i, '📖', '#FEF3C7', '#92400E'],
  [/pen|pencil|marker|stationery/i, '🖊️', '#DBEAFE', '#1E40AF'],
  [/toy|game|puzzle|figure/i, '🎮', '#C4B5FD', '#6D28D9'],
  [/plant|flower|pot|garden/i, '🌱', '#BBF7D0', '#166534'],
  [/soap|shampoo|lotion|skincare|cream/i, '🧴', '#FCE7F3', '#9D174D'],
  [/towel|sheet|pillow|blanket|linen/i, '🛏️', '#E0E7FF', '#3730A3'],
  [/tool|hammer|drill|saw|wrench/i, '🔧', '#F3F4F6', '#374151'],
  [/box|package|parcel|shipping|crate/i, '📦', '#FEF3C7', '#92400E'],
  [/med|pill|vitamin|supplement|health/i, '💊', '#FEE2E2', '#991B1B'],
  [/sport|gym|fitness|yoga|exercise/i, '🏋️', '#DBEAFE', '#1E40AF'],
  [/pet|dog|cat|fish|animal/i, '🐾', '#FDE68A', '#92400E'],
  [/clean|detergent|soap|wash|sponge/i, '🧹', '#E0F2FE', '#075985'],
  [/utensil|spoon|fork|knife|pan|pot|plate|bowl|cup|mug/i, '🍳', '#F3F4F6', '#374151'],
  [/bottle|flask|canteen/i, '🫙', '#E0F2FE', '#075985'],
  [/gift|present|surprise/i, '🎁', '#FECACA', '#991B1B'],
  [/tape|wrap|pallet|pack/i, '📋', '#FEF3C7', '#854D0E'],
  [/envelop|pouch|document|letter/i, '✉️', '#DBEAFE', '#1E40AF'],
  [/cold|freeze|chill|ice/i, '🧊', '#E0F2FE', '#075985'],
  [/haz|chemical|toxic|danger/i, '⚠️', '#FEF3C7', '#92400E'],
  [/venue|event|concert|show|pass/i, '🎟️', '#F3E8FF', '#7E22CE'],
  [/hoodie|jacket|coat|pullover|sweater/i, '🧥', '#E5E7EB', '#374151'],
  [/poster|print|canvas|art/i, '🖼️', '#FEF3C7', '#92400E'],
  [/badge|pin|sticker/i, '🪪', '#DBEAFE', '#1E40AF'],
  [/lamp|light|bulb|torch/i, '💡', '#FEF3C7', '#92400E'],
  [/travel|luggage|suitcase/i, '🧳', '#E0E7FF', '#3730A3'],
  [/wireless|bluetooth|cable|cord/i, '🔌', '#F3F4F6', '#374151'],
  [/webcam|camera|video/i, '📹', '#F3F4F6', '#374151'],
  [/power/i, '⚡', '#FEF3C7', '#92400E'],
  [/scarf|silk/i, '🧣', '#FECACA', '#991B1B'],
  [/set|collection|bundle|kit/i, '🎁', '#FCE7F3', '#9D174D'],
  [/poem|poetry|graphic/i, '📚', '#FEF3C7', '#92400E'],
];

export function ProductImage({ name, size = 120, radius, sx }) {
  const t = useT();
  const match = EMOJI_MAP.find(([re]) => re.test(name));
  const emoji = match ? match[1] : String(name || '·').slice(0, 1).toUpperCase();
  const bg1 = match ? match[2] : '#F3F4F6';
  const bg2 = match ? match[3] : '#6B7280';
  const r = radius || t.radius + 2;
  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: r,
        background: `linear-gradient(135deg, ${bg1}, ${bg2}22)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size * 0.42,
        lineHeight: 1,
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden',
        ...sx,
      }}>
      <Box sx={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}>{emoji}</Box>
    </Box>
  );
}

export function BrandTile({ label, size = 52, radius, sx }) {
  const t = useT();
  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: radius || Math.max(10, t.radius),
        background: t.grad,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontSize: size / 2.4,
        flexShrink: 0,
        boxShadow: `0 6px 14px ${t.accent}55`,
        fontFamily: font,
        ...sx,
      }}>
      {String(label || '·').slice(0, 1).toUpperCase()}
    </Box>
  );
}

export function Qty({ value, onChange, min = 0 }) {
  const t = useT();
  const btn = (name, fn, disabled) => (
    <Box
      role="button"
      tabIndex={0}
      onClick={fn}
      onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); fn(); } }}
      aria-disabled={disabled}
      sx={{
        width: 26,
        height: 26,
        borderRadius: t.radius - 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `${t.accent}16`,
        color: t.accent,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.35 : 1,
        ':focus-visible': { outline: 'none', boxShadow: `0 0 0 2px ${t.accent}55` },
      }}>
      <Icon name={name} size={13} strokeWidth={2.4} />
    </Box>
  );
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: `1.5px solid ${t.line}`, borderRadius: t.radius, padding: '4px', backgroundColor: t.surface }}>
      {btn('minus', () => onChange(Math.max(min, value - 1)), value <= min)}
      <Text sx={{ minWidth: 18, textAlign: 'center', fontSize: 1, fontWeight: 700, color: t.ink, fontFamily: font }}>{value}</Text>
      {btn('plus', () => onChange(value + 1), false)}
    </Box>
  );
}

export function Modal({ onClose, children, sx }) {
  const t = useT();
  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        zIndex: 20,
        backgroundColor: 'rgba(8,15,26,0.55)',
        backdropFilter: 'blur(3px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 4,
      }}
      onClick={onClose}>
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          width: '100%',
          maxWidth: 460,
          maxHeight: '100%',
          overflow: 'auto',
          backgroundColor: t.dark ? '#111C2E' : '#fff',
          border: `1px solid ${t.line}`,
          borderRadius: t.radius + 2,
          boxShadow: '0 30px 80px rgba(8,15,26,0.4)',
          p: 4,
          position: 'relative',
          ...sx,
        }}>
        {onClose && (
          <Box onClick={onClose} sx={{ position: 'absolute', top: 14, right: 14, cursor: 'pointer', color: t.muted, ':focus-visible': { outline: 'none' } }}>
            <Icon name="x" size={18} />
          </Box>
        )}
        {children}
      </Box>
    </Box>
  );
}

export function SuccessBadge({ size = 72 }) {
  const t = useT();
  return (
    <Box
      sx={{
        width: size,
        height: size,
        mx: 'auto',
        borderRadius: '50%',
        background: `${t.accent}1a`,
        color: t.accent,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `inset 0 0 0 1px ${t.accent}44`,
      }}>
      <Icon name="check" size={size / 2.2} strokeWidth={2.4} />
    </Box>
  );
}

export function EmptyBox({ icon = 'box', text, sx }) {
  const t = useT();
  return (
    <Box sx={{ py: 8, textAlign: 'center', color: t.muted, ...sx }}>
      <Box sx={{ color: t.line, display: 'flex', justifyContent: 'center', mb: 2 }}><Icon name={icon} size={30} /></Box>
      <Text sx={{ fontSize: 1, fontWeight: 600, fontFamily: font }}>{text}</Text>
    </Box>
  );
}

export function Page({ children, sx }) {
  const t = useT();
  return (
    <Box sx={{ minHeight: '100%', display: 'flex', flexDirection: 'column', p: t.pad, ...sx }}>
      {children}
    </Box>
  );
}
