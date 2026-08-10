/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState, useEffect } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Btn, Badge, Stepper, Empty } from './shared';

export default function OrderPlacementDemo({ t }) {
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
    <BrowserFrame url="https://order.demo.we2tech.pro" height={470}>
      <Box sx={{ p: 4 }}>
        {!placed ? (
          <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1.4fr 1fr'], gap: 4 }}>
            <Card sx={{ p: 4 }}>
              <Text sx={{ fontWeight: 700, fontSize: 1, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 3 }}>
                {d.menu}
              </Text>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {items.map((item, i) => (
                  <Box key={item.name} sx={{ display: 'flex', alignItems: 'center', gap: 3, px: 3, py: '10px', borderRadius: 10, border: '1px solid', borderColor: S.line }}>
                    <Box sx={{ width: 40, height: 40, borderRadius: 10, backgroundColor: ['#0E7490', '#7C3AED', '#B45309', '#C2410C', '#0F766E', '#BE123C'][i % 6], color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontFamily: font }}>
                      {(cart[i] || 0) > 0 ? cart[i] : '\u2715'}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Text sx={{ fontWeight: 600, fontSize: 1, color: S.ink, fontFamily: font }}>{item.name}</Text>
                      <Text sx={{ fontSize: 0, color: S.tealDark, fontWeight: 700, fontFamily: font }}>{item.price}</Text>
                    </Box>
                    <Btn tone={cart[i] ? 'primary' : 'dark'} sx={{ px: 3, py: '6px', fontSize: 0 }} onClick={() => add(i)}>
                      + {d.add}
                    </Btn>
                  </Box>
                ))}
              </Box>
            </Card>
            <Card sx={{ p: 4, alignSelf: 'start' }}>
              <Text sx={{ fontWeight: 700, fontSize: 1, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 3 }}>
                {d.yourOrder}
              </Text>
              {count === 0 ? (
                <Empty label={d.empty} icon="\u{1F37D}" />
              ) : (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                  {Object.entries(cart).map(([i, n]) => (
                    <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 1, fontFamily: font, color: S.slate }}>
                      <Text>{items[i].name} &times; {n}</Text>
                      <Text sx={{ fontWeight: 700, color: S.ink }}>HK${n * parseInt(items[i].price.replace(/[^\d]/g, ''), 10)}</Text>
                    </Box>
                  ))}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 1, fontWeight: 700, color: S.ink, fontFamily: font, borderTop: '1px solid', borderColor: S.line, pt: 2, mt: 1 }}>
                    <Text>{d.yourOrder} ({count})</Text>
                    <Text>HK${total}</Text>
                  </Box>
                </Box>
              )}
              <Btn tone="primary" sx={{ width: '100%' }} disabled={count === 0} onClick={() => setPlaced(true)}>
                {d.placeOrder}
              </Btn>
            </Card>
          </Box>
        ) : (
          <Card sx={{ p: 5, textAlign: 'center', maxWidth: 560, mx: 'auto' }}>
            <Badge tone="green" sx={{ mb: 3 }}>&#10003; {d.placed}</Badge>
            <Text sx={{ display: 'block', fontSize: 3, fontWeight: 700, color: S.ink, fontFamily: font, mb: 1 }}>{orderNo}</Text>
            <Text sx={{ display: 'block', fontSize: 1, color: S.slate, fontFamily: font, mb: 4 }}>
              {d.eta} <Text sx={{ fontWeight: 700, color: S.tealDark }}>18-22 {d.minutes}</Text>
            </Text>
            <Stepper steps={d.steps} active={stage} />
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
              {['\u{1F35C}', '\u{1F374}', '\u{1F37D}', '\u{1F355}'].map((e, i) => (
                <Box key={i} sx={{ fontSize: 4, opacity: stage >= i ? 1 : 0.25 }}>{e}</Box>
              ))}
            </Box>
          </Card>
        )}
      </Box>
    </BrowserFrame>
  );
}
