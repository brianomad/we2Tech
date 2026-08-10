/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState, useEffect } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Btn, Badge, Stepper, SectionLabel } from './shared';

const ITEM_META = [
  { icon: '\u2615', grad: 'linear-gradient(135deg,#B45309,#92400E)' },
  { icon: '\u{1F9C8}', grad: 'linear-gradient(135deg,#16A34A,#15803D)' },
  { icon: '\u{1F950}', grad: 'linear-gradient(135deg,#F59E0B,#D97706)' },
  { icon: '\u{1F356}', grad: 'linear-gradient(135deg,#DC2626,#B91C1C)' },
  { icon: '\u{1F9C9}', grad: 'linear-gradient(135deg,#F97316,#EA580C)' },
];

import { demoUrlFor, brandFor } from './demo-meta';

export default function OrderPlacementDemo({ t, item }) {
  const d = t('caseDemo.order');
  const items = t('caseDemo.order.items');
  const [cart, setCart] = useState({});
  const [placed, setPlaced] = useState(false);
  const [stage, setStage] = useState(0);
  const [orderNo] = useState(`OD-${Math.floor(3000 + Math.random() * 8000)}`);

  useEffect(() => {
    if (!placed) return;
    const timers = [1, 2, 3].map((n) => setTimeout(() => setStage(n), n * 2200));
    return () => timers.forEach(clearTimeout);
  }, [placed]);

  const add = (i) => setCart((c) => ({ ...c, [i]: (c[i] || 0) + 1 }));
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const total = Object.entries(cart).reduce((s, [i, n]) => s + n * parseInt(items[i].price.replace(/[^\d]/g, ''), 10), 0);

  return (
    <BrowserFrame url={demoUrlFor(item, 'https://order.demo.we2tech.pro')} height={486} brand={brandFor(item, 'Daily Grind')}>
      <Box sx={{ px: 4, py: 3, background: 'linear-gradient(135deg,#451A03,#7C2D12)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ width: 32, height: 32, borderRadius: 10, background: 'linear-gradient(135deg,#F59E0B,#D97706)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 2 }}>&#9749;</Box>
          <Box>
            <Text sx={{ fontWeight: 700, fontSize: 2, fontFamily: font, lineHeight: 1.2 }}>Daily Grind</Text>
            <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.7)', fontFamily: font }}>Central &middot; Open 07:00</Text>
          </Box>
        </Box>
        {count > 0 && <Badge tone="amber" dot={false}>&#128722; {count}</Badge>}
      </Box>

      <Box sx={{ p: 4 }}>
        {!placed ? (
          <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1.5fr 1fr'], gap: 4 }}>
            <Card sx={{ p: 4 }}>
              <SectionLabel>{d.menu}</SectionLabel>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {items.map((item, i) => {
                  const meta = ITEM_META[i % ITEM_META.length];
                  return (
                    <Box key={item.name} sx={{ display: 'flex', alignItems: 'center', gap: 3, px: 3, py: '10px', borderRadius: 12, border: '1px solid', borderColor: S.line, '&:hover': { borderColor: '#E2B48A', backgroundColor: '#FFFBFA' }, transition: 'all 0.15s' }}>
                      <Box sx={{ width: 46, height: 46, borderRadius: 12, background: meta.grad, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 2, flexShrink: 0, boxShadow: '0 4px 10px rgba(0,0,0,0.18)' }}>
                        {meta.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{item.name}</Text>
                        <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{item.price}</Text>
                      </Box>
                      <Box
                        onClick={() => add(i)}
                        sx={{
                          width: 34,
                          height: 34,
                          borderRadius: '50%',
                          border: '1.5px solid',
                          borderColor: cart[i] ? S.teal : '#C9A227',
                          color: cart[i] ? '#fff' : '#92400E',
                          backgroundColor: cart[i] ? S.teal : '#FFF3E0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 2,
                          fontWeight: 700,
                          cursor: 'pointer',
                          fontFamily: font,
                          '&:active': { transform: 'scale(0.9)' },
                        }}>
                        {cart[i] || '+'}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Card>

            <Card sx={{ p: 4, alignSelf: 'start', position: 'sticky', top: 0 }}>
              <SectionLabel>{d.yourOrder}</SectionLabel>
              {count === 0 ? (
                <Box sx={{ py: 6, textAlign: 'center', color: S.muted }}>
                  <Box sx={{ fontSize: 4, mb: 1 }}>&#127869;</Box>
                  <Text sx={{ fontSize: 1, fontWeight: 600, fontFamily: font }}>{d.empty}</Text>
                </Box>
              ) : (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                  {Object.entries(cart).map(([i, n]) => (
                    <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 1, fontFamily: font, color: S.slate, px: 1 }}>
                      <Text>
                        <Text as="span" sx={{ color: S.muted }}>{n} &times;</Text> {items[i].name}
                      </Text>
                      <Text sx={{ fontWeight: 700, color: S.ink }}>HK${n * parseInt(items[i].price.replace(/[^\d]/g, ''), 10)}</Text>
                    </Box>
                  ))}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 1, fontWeight: 700, color: S.ink, fontFamily: font, borderTop: '1px dashed', borderColor: '#D3E1EE', pt: 2, mt: 1 }}>
                    <Text>{d.yourOrder} ({count})</Text>
                    <Text sx={{ color: S.tealDark, fontSize: 2 }}>HK${total}</Text>
                  </Box>
                </Box>
              )}
              <Btn tone="primary" sx={{ width: '100%' }} disabled={count === 0} onClick={() => setPlaced(true)}>
                {d.placeOrder} &#8594;
              </Btn>
            </Card>
          </Box>
        ) : (
          <Card sx={{ p: 5, textAlign: 'center', maxWidth: 560, mx: 'auto', mt: 2 }}>
            <Badge tone="green" sx={{ mb: 3 }}>&#10003; {d.placed}</Badge>
            <Text sx={{ display: 'block', fontSize: 3, fontWeight: 700, color: S.ink, fontFamily: font, mb: 1, letterSpacing: '1px' }}>{orderNo}</Text>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 2, mt: 1, mb: 4, px: 4, py: 2, borderRadius: 99, backgroundColor: '#FFF3E0', color: '#92400E', fontFamily: font, fontWeight: 700, fontSize: 1 }}>
              &#128647; {d.eta} <Text as="span">18&ndash;22 {d.minutes}</Text>
            </Box>
            <Box sx={{ maxWidth: 460, mx: 'auto' }}>
              <Stepper steps={d.steps} active={stage} />
            </Box>
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
              {['\u{1F35C}', '\u{1F374}', '\u{1F37D}', '\u{1F355}'].map((e, i) => (
                <Box
                  key={i}
                  sx={{
                    fontSize: 4,
                    opacity: stage >= i ? 1 : 0.2,
                    transform: stage >= i ? 'scale(1)' : 'scale(0.9)',
                    transition: 'all 0.3s',
                  }}>
                  {e}
                </Box>
              ))}
            </Box>
            <Btn tone="ghost" sx={{ mt: 4, width: '100%' }} onClick={() => { setPlaced(false); setCart({}); setStage(0); }}>
              &#8634; New order
            </Btn>
          </Card>
        )}
      </Box>
    </BrowserFrame>
  );
}
