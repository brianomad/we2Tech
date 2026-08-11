/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState, useEffect } from 'react';
import { S, font, Card, Btn, Badge, Stepper, SectionLabel } from './shared';
import { Icon } from './icons';
import { Toast } from './anim';

const ITEM_IMAGES = ['latte', 'matcha', 'croissant', 'tuna', 'juice'];

import { brandFor } from './demo-meta';
import { contentFor } from './case-content';

export default function OrderPlacementDemo({ t, locale, item }) {
  const d = contentFor(t, locale, item, 'order');
  const brand = brandFor(item, 'Daily Grind');
  const items = d.items;
  const [cart, setCart] = useState({});
  const [placed, setPlaced] = useState(false);
  const [stage, setStage] = useState(0);
  const [orderNo] = useState(`OD-${Math.floor(3000 + Math.random() * 8000)}`);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!placed) return;
    const timers = [1, 2, 3].map((n) => setTimeout(() => setStage(n), n * 2200));
    return () => timers.forEach(clearTimeout);
  }, [placed]);

  const add = (i) => {
    setCart((c) => ({ ...c, [i]: (c[i] || 0) + 1 }));
    setToast(i);
    setTimeout(() => setToast(null), 1600);
  };
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const total = Object.entries(cart).reduce((s, [i, n]) => s + n * parseInt(items[i].price.replace(/[^\d]/g, ''), 10), 0);

  return (
    <>
      <Box sx={{ px: 4, py: 3, background: 'linear-gradient(135deg,#451A03,#7C2D12)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ width: 32, height: 32, borderRadius: 10, background: 'linear-gradient(135deg,#F59E0B,#D97706)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#451A03' }}>
            <Icon name="coffee" size={18} />
          </Box>
          <Box>
            <Text sx={{ fontWeight: 700, fontSize: 2, fontFamily: font, lineHeight: 1.2 }}>{brand}</Text>
            <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.7)', fontFamily: font }}>{d.storeMeta}</Text>
          </Box>
        </Box>
        {count > 0 && <Badge tone="amber" dot={false}><Icon name="shoppingCart" size={13} /> {count}</Badge>}
      </Box>

      <Box sx={{ p: 4, position: 'relative', flex: 1 }}>
        {!placed ? (
          <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1.5fr 1fr'], gap: 4, '@container (max-width: 700px)': { gridTemplateColumns: '1fr' } }}>
            <Card sx={{ p: 4 }}>
              <SectionLabel>{d.menu}</SectionLabel>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {items.map((item, i) => {
                  return (
                    <Box key={item.name} sx={{ display: 'flex', alignItems: 'center', gap: 3, px: 2, py: 2, borderRadius: 12, border: '1px solid', borderColor: S.line, '&:hover': { borderColor: '#E2B48A', backgroundColor: '#FFFBFA' }, transition: 'all 0.15s' }}>
                      <Box sx={{ width: 52, height: 52, borderRadius: 12, overflow: 'hidden', flexShrink: 0, boxShadow: '0 4px 10px rgba(0,0,0,0.14)' }}>
                        <img src={`/images/products/${ITEM_IMAGES[i % ITEM_IMAGES.length]}.jpg`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{item.name}</Text>
                        <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{item.price}</Text>
                      </Box>
                      <Box
                        role="button"
                        tabIndex={0}
                        aria-label={item.name}
                        onClick={() => add(i)}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); add(i); } }}
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
                          ':focus-visible': { outline: 'none', boxShadow: '0 0 0 2px #C9A22788' },
                          '&:active': { transform: 'scale(0.9)' },
                        }}>
                        {cart[i] || <Icon name="plus" size={16} />}
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
                  <Box sx={{ mb: 1, display: 'flex', justifyContent: 'center' }}>
                    <Icon name="utensils" size={30} />
                  </Box>
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
              <Btn tone="primary" sx={{ width: '100%', mt: 1 }} disabled={count === 0} onClick={() => setPlaced(true)}>
                {d.placeOrder} <Icon name="arrowRight" size={15} />
              </Btn>
            </Card>
          </Box>
        ) : (
          <Card sx={{ p: 5, textAlign: 'center', maxWidth: 560, mx: 'auto', mt: 2 }}>
            <Badge tone="green" sx={{ mb: 3 }}><Icon name="check" size={13} /> {d.placed}</Badge>
            <Text sx={{ display: 'block', fontSize: 3, fontWeight: 700, color: S.ink, fontFamily: font, mb: 1, letterSpacing: '1px' }}>{orderNo}</Text>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 2, mt: 1, mb: 4, px: 4, py: 2, borderRadius: 99, backgroundColor: '#FFF3E0', color: '#92400E', fontFamily: font, fontWeight: 700, fontSize: 1 }}>
              <Icon name="truck" size={16} /> {d.eta} <Text as="span">18&ndash;22 {d.minutes}</Text>
            </Box>
            <Box sx={{ maxWidth: 460, mx: 'auto' }}>
              <Stepper steps={d.steps} active={stage} />
            </Box>
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
              {['coffee', 'utensils', 'box', 'check'].map((e, i) => (
                <Box
                  key={i}
                  sx={{
                    color: stage >= i ? S.tealDark : S.faint,
                    opacity: stage >= i ? 1 : 0.35,
                    transform: stage >= i ? 'scale(1)' : 'scale(0.9)',
                    transition: 'all 0.3s',
                  }}>
                  <Icon name={e} size={30} />
                </Box>
              ))}
            </Box>
            <Btn tone="ghost" sx={{ mt: 4, width: '100%' }} onClick={() => { setPlaced(false); setCart({}); setStage(0); }}>
              <Icon name="refresh" size={15} /> {d.newOrder}
            </Btn>
          </Card>
        )}
      </Box>

      {toast !== null && (
        <Box sx={{ position: 'absolute', right: 4, bottom: 14, zIndex: 10, display: ['none', null, 'block'] }}>
          <Toast tone="light">
            <Box sx={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(201,162,39,0.15)', color: '#92400E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="check" size={14} />
            </Box>
            <Box>
              <Text sx={{ display: 'block', fontWeight: 700 }}>{items[toast].name}</Text>
              <Text sx={{ display: 'block', color: S.muted, fontWeight: 600 }}>{items[toast].price} {d.added}</Text>
            </Box>
          </Toast>
        </Box>
      )}
    </>
  );
}
