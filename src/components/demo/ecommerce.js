/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Btn, Badge, Quantity, Empty } from './shared';

const PRODUCT_COLORS = ['#0F6F6F', '#8B5CF6', '#D97706', '#B45309', '#0E7490', '#1FA971'];

export default function EcommerceDemo({ t }) {
  const d = t('caseDemo.ecommerce');
  const products = t('caseDemo.ecommerce.products');
  const [cart, setCart] = useState({});
  const [step, setStep] = useState('shop'); // shop | checkout | done
  const [orderNo] = useState(`OR-${Math.floor(2000 + Math.random() * 8000)}`);

  const add = (i) => setCart((c) => ({ ...c, [i]: (c[i] || 0) + 1 }));
  const setQty = (i, n) => setCart((c) => ({ ...c, [i]: n }));
  const subtotal = Object.entries(cart).reduce((sum, [i, n]) => sum + n * parseInt(products[i].price.replace(/[^\d]/g, ''), 10), 0);
  const shipping = subtotal === 0 || subtotal > 1000 ? 0 : 30;
  const total = subtotal + shipping;
  const count = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <BrowserFrame url="https://shop.demo.we2tech.pro" height={470}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: 470 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 4, py: 3, backgroundColor: '#fff', borderBottom: '1px solid', borderColor: S.line }}>
          <Text sx={{ fontWeight: 700, fontSize: 2, color: S.ink, fontFamily: font }}>
            {d.title} <Text as="span" sx={{ color: S.teal }}>&#128722;</Text>
          </Text>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 3, py: '7px', borderRadius: 10, backgroundColor: S.bg, color: S.muted, fontSize: 0, fontFamily: font }}>
              &#128269; {d.search}
            </Box>
            <Badge tone="teal">&#128722; {count}</Badge>
          </Box>
        </Box>

        {step === 'shop' && (
          <Box sx={{ flex: 1, p: 4, overflow: 'auto' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: ['repeat(2, 1fr)', null, 'repeat(3, 1fr)'], gap: 3 }}>
              {products.map((p, i) => {
                const inCart = cart[i] || 0;
                return (
                  <Card key={p.name} sx={{ overflow: 'hidden' }}>
                    <Box
                      sx={{
                        height: 110,
                        backgroundColor: PRODUCT_COLORS[i % PRODUCT_COLORS.length],
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(255,255,255,0.85)',
                        fontSize: 4,
                      }}>
                      &#128092;
                      {inCart > 0 && (
                        <Badge tone="teal" sx={{ position: 'absolute', top: 10, right: 10 }}>{inCart}</Badge>
                      )}
                    </Box>
                    <Box sx={{ p: 3 }}>
                      <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font, display: 'block' }}>{p.name}</Text>
                      <Text sx={{ fontWeight: 700, fontSize: 1, color: S.tealDark, fontFamily: font, mb: 2, display: 'block' }}>{p.price}</Text>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {inCart > 0 ? (
                          <Quantity value={inCart} onChange={(n) => setQty(i, n)} min={0} />
                        ) : (
                          <Btn tone="dark" sx={{ flex: 1, px: 2, py: '7px', fontSize: 0 }} onClick={() => add(i)}>
                            + {d.addToCart}
                          </Btn>
                        )}
                      </Box>
                    </Box>
                  </Card>
                );
              })}
            </Box>
          </Box>
        )}

        {step === 'checkout' && (
          <Box sx={{ flex: 1, p: 4, overflow: 'auto' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1.4fr 1fr'], gap: 4 }}>
              <Card sx={{ p: 4 }}>
                <Text sx={{ fontWeight: 700, fontSize: 2, color: S.ink, fontFamily: font, mb: 3 }}>{d.checkout}</Text>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {Object.entries(cart).map(([i, n]) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                      <Box sx={{ width: 40, height: 40, borderRadius: 10, backgroundColor: PRODUCT_COLORS[i % PRODUCT_COLORS.length] }} />
                      <Box sx={{ flex: 1 }}>
                        <Text sx={{ fontWeight: 600, fontSize: 1, color: S.ink, fontFamily: font }}>{products[i].name}</Text>
                        <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{products[i].price} &times; {n}</Text>
                      </Box>
                      <Quantity value={n} onChange={(v) => setQty(i, v)} min={0} />
                    </Box>
                  ))}
                </Box>
              </Card>
              <Card sx={{ p: 4, alignSelf: 'start' }}>
                <Text sx={{ fontWeight: 700, fontSize: 2, color: S.ink, fontFamily: font, mb: 3 }}>{d.cart}</Text>
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '8px 16px', fontSize: 1, color: S.slate, fontFamily: font, mb: 3 }}>
                  <Text>{d.subtotal}</Text>
                  <Text sx={{ fontWeight: 700, color: S.ink }}>HK${subtotal}</Text>
                  <Text>{d.shipping}</Text>
                  <Text sx={{ fontWeight: 700, color: S.ink }}>{shipping === 0 ? 'Free' : `HK$${shipping}`}</Text>
                  <Text sx={{ fontWeight: 700, color: S.ink, mt: 1 }}>{d.total}</Text>
                  <Text sx={{ fontWeight: 700, color: S.tealDark, fontSize: 2, mt: 1 }}>HK${total}</Text>
                </Box>
                <Btn tone="primary" sx={{ width: '100%' }} disabled={count === 0} onClick={() => setStep('done')}>
                  {d.pay}
                </Btn>
              </Card>
            </Box>
          </Box>
        )}

        {step === 'done' && (
          <Box sx={{ flex: 1, p: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Card sx={{ p: 5, textAlign: 'center', maxWidth: 420, width: '100%' }}>
              <Box sx={{ width: 64, height: 64, mx: 'auto', borderRadius: '50%', backgroundColor: 'rgba(31,169,113,0.14)', color: S.green, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 5 }}>
                &#10003;
              </Box>
              <Text sx={{ display: 'block', mt: 3, fontSize: 3, fontWeight: 700, color: S.ink, fontFamily: font }}>{d.orderConfirmed}</Text>
              <Text sx={{ display: 'block', mt: 1, fontSize: 1, color: S.muted, fontFamily: font }}>
                {d.orderNo}: {orderNo}
              </Text>
              <Text sx={{ display: 'block', mt: 2, fontSize: 1, color: S.slate, fontFamily: font }}>HK${total} &middot; {count} {d.cart.toLowerCase()}</Text>
              <Btn tone="ghost" sx={{ mt: 4, width: '100%' }} onClick={() => { setCart({}); setStep('shop'); }}>
                &#8592; {d.title}
              </Btn>
            </Card>
          </Box>
        )}
      </Box>
      {step === 'shop' && (
        <Box sx={{ px: 4, py: 3, backgroundColor: '#fff', borderTop: '1px solid', borderColor: S.line, display: 'flex', justifyContent: 'flex-end' }}>
          <Btn tone="primary" disabled={count === 0} onClick={() => setStep('checkout')}>
            {d.checkout} {count > 0 && <Text as="span" sx={{ opacity: 0.8 }}>({count})</Text>}
          </Btn>
        </Box>
      )}
    </BrowserFrame>
  );
}
