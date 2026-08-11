/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Btn, Badge, Quantity } from './shared';
import { FootBar } from './chrome';
import { Toast } from './anim';

const PRODUCT_META = [
  { tag: null },
  { tag: 'New', tagTone: 'blue' },
  { tag: '\u221220%', tagTone: 'red', sale: true },
  { tag: null },
  { tag: null },
  { tag: 'New', tagTone: 'blue' },
];

const PRODUCT_IMAGES = ['tote', 'sneakers', 'overshirt', 'belt', 'mugset', 'backpack'];

function ProductArt({ i }) {
  return (
    <Box sx={{ width: '100%', height: '100%', overflow: 'hidden', backgroundColor: '#F4F6FA' }}>
      <img src={`/images/products/${PRODUCT_IMAGES[i % PRODUCT_IMAGES.length]}.jpg`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </Box>
  );
}

import { demoUrlFor, brandFor } from './demo-meta';

export default function EcommerceDemo({ t, item }) {
  const d = t('caseDemo.ecommerce');
  const products = t('caseDemo.ecommerce.products');
  const [cart, setCart] = useState({});
  const [step, setStep] = useState('shop'); // shop | checkout | done
  const [orderNo] = useState(`OR-${Math.floor(2000 + Math.random() * 8000)}`);
  const [toast, setToast] = useState(null);

  const add = (i) => {
    setCart((c) => ({ ...c, [i]: (c[i] || 0) + 1 }));
    setToast(i);
    setTimeout(() => setToast(null), 1800);
  };
  const setQty = (i, n) => {
    const next = { ...cart, [i]: n };
    if (n <= 0) delete next[i];
    setCart(next);
  };
  const subtotal = Object.entries(cart).reduce((sum, [i, n]) => sum + n * parseInt(products[i].price.replace(/[^\d]/g, ''), 10), 0);
  const shipping = subtotal === 0 || subtotal > 1000 ? 0 : 30;
  const total = subtotal + shipping;
  const count = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <BrowserFrame url={demoUrlFor(item, 'https://shop.demo.we2tech.pro')} height={486} brand={brandFor(item, 'Mono')}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: 486, position: 'relative' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 4, py: 3, backgroundColor: '#fff', borderBottom: '1px solid', borderColor: S.line, position: 'relative', zIndex: 2 }}>
          <Text sx={{ fontWeight: 700, fontSize: 2, color: S.ink, fontFamily: font, letterSpacing: '1px' }}>
            MONO
          </Text>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 3, py: '7px', borderRadius: 10, backgroundColor: '#F4F6FA', color: S.muted, fontSize: 0, fontFamily: font, border: '1px solid', borderColor: S.line }}>
              &#128269; {d.search}
            </Box>
            <Box
              onClick={() => step === 'shop' && setStep('checkout')}
              sx={{ position: 'relative', cursor: 'pointer' }}>
              <Box sx={{ fontSize: 2 }}>&#128722;</Box>
              {count > 0 && (
                <Box sx={{ position: 'absolute', top: -6, right: -8, minWidth: 18, height: 18, borderRadius: 99, backgroundColor: S.teal, color: '#fff', fontSize: 0, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', px: '4px', fontFamily: font }}>
                  {count}
                </Box>
              )}
            </Box>
          </Box>
        </Box>

        {step === 'shop' && (
          <>
            <Box sx={{ flex: 1, p: 4, overflow: 'auto' }}>
              <Box sx={{ display: 'grid', gridTemplateColumns: ['repeat(2, 1fr)', null, 'repeat(3, 1fr)'], gap: 3 }}>
                {products.map((p, i) => {
                  const meta = PRODUCT_META[i % PRODUCT_META.length];
                  const inCart = cart[i] || 0;
                  const numeric = parseInt(p.price.replace(/[^\d]/g, ''), 10);
                  return (
                    <Card key={p.name} sx={{ overflow: 'hidden', cursor: 'pointer', '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 16px 36px rgba(15,33,55,0.14)' }, transition: 'all 0.2s' }} onClick={() => add(i)}>
                      <Box sx={{ height: 130, position: 'relative', overflow: 'hidden' }}>
                        <ProductArt i={i} />
                        {meta.tag && <Badge tone={meta.tagTone} dot={false} sx={{ position: 'absolute', top: 10, left: 10, zIndex: 2 }}>{meta.tag}</Badge>}
                        {inCart > 0 && (
                          <Badge tone="teal" dot={false} sx={{ position: 'absolute', top: 10, right: 10, zIndex: 2 }}>&#10003; {inCart}</Badge>
                        )}
                      </Box>
                      <Box sx={{ p: 3 }}>
                        <Text sx={{ fontWeight: 600, fontSize: 1, color: S.ink, fontFamily: font, display: 'block', mb: '2px' }}>{p.name}</Text>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                          <Text sx={{ color: S.amber, fontSize: 0 }}>&#9733;</Text>
                          <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>4.8</Text>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Box>
                            <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{p.price}</Text>
                            {meta.sale && <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font, textDecoration: 'line-through' }}>HK${Math.round(numeric * 1.2)}</Text>}
                          </Box>
                          {inCart > 0 ? (
                            <Box onClick={(e) => e.stopPropagation()}>
                              <Quantity value={inCart} onChange={(n) => setQty(i, n)} min={0} />
                            </Box>
                          ) : (
                            <Box
                              onClick={(e) => e.stopPropagation()}
                              sx={{ px: 3, py: '8px', borderRadius: 10, backgroundColor: S.ink, color: '#fff', fontSize: 0, fontWeight: 700, fontFamily: font, '&:hover': { backgroundColor: S.teal } }}>
                              + {d.addToCart}
                            </Box>
                          )}
                        </Box>
                      </Box>
                    </Card>
                  );
                })}
              </Box>
            </Box>
            <Box sx={{ px: 4, py: 3, backgroundColor: '#fff', borderTop: '1px solid', borderColor: S.line, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text sx={{ fontSize: 1, fontFamily: font, color: S.slate }}>
                {count > 0 ? <><Text as="span" sx={{ fontWeight: 700, color: S.ink }}>{count}</Text> {d.cart.toLowerCase()}</> : d.emptyCart}
              </Text>
              <Btn tone="primary" disabled={count === 0} onClick={() => setStep('checkout')}>
                {d.checkout} &#8594;
              </Btn>
            </Box>
          </>
        )}

        {step === 'checkout' && (
          <Box sx={{ flex: 1, p: 4, overflow: 'auto' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1.5fr 1fr'], gap: 4 }}>
              <Card sx={{ p: 4 }}>
                <Text sx={{ fontWeight: 700, fontSize: 2, color: S.ink, fontFamily: font, mb: 3 }}>{d.checkout}</Text>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {Object.entries(cart).map(([i, n]) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                      <Box sx={{ width: 52, height: 52, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}>
                        <ProductArt i={i} />
                      </Box>
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
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '10px 16px', fontSize: 1, color: S.slate, fontFamily: font, mb: 3 }}>
                  <Text>{d.subtotal}</Text>
                  <Text sx={{ fontWeight: 700, color: S.ink }}>HK${subtotal}</Text>
                  <Text>{d.shipping}</Text>
                  <Text sx={{ fontWeight: 700, color: S.ink }}>{shipping === 0 ? 'Free' : `HK$${shipping}`}</Text>
                  <Box sx={{ borderTop: '1px dashed', borderColor: '#D3E1EE', gridColumn: '1 / -1', my: 1 }} />
                  <Text sx={{ fontWeight: 700, color: S.ink }}>{d.total}</Text>
                  <Text sx={{ fontWeight: 700, color: S.tealDark, fontSize: 2 }}>HK${total}</Text>
                </Box>
                <Btn tone="primary" sx={{ width: '100%' }} disabled={count === 0} onClick={() => setStep('done')}>
                  {d.pay} &middot; HK${total}
                </Btn>
              </Card>
            </Box>
          </Box>
        )}

        {step === 'done' && (
          <Box sx={{ flex: 1, p: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(180deg,#F6FAFD,#EEF4FA)' }}>
            <Card sx={{ p: 5, textAlign: 'center', maxWidth: 420, width: '100%' }}>
              <Box sx={{ width: 72, height: 72, mx: 'auto', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(31,169,113,0.18), rgba(31,169,113,0.05))', color: S.green, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 5, boxShadow: 'inset 0 0 0 1px rgba(31,169,113,0.3)' }}>
                &#10003;
              </Box>
              <Text sx={{ display: 'block', mt: 3, fontSize: 3, fontWeight: 700, color: S.ink, fontFamily: font }}>{d.orderConfirmed}</Text>
              <Box sx={{ mt: 2, display: 'inline-block', px: 4, py: 2, borderRadius: 10, backgroundColor: '#F0F6F6', border: '1px dashed', borderColor: S.teal }}>
                <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{d.orderNo}</Text>
                <Text sx={{ fontSize: 1, fontWeight: 700, color: S.tealDark, fontFamily: 'Menlo, monospace' }}>{orderNo}</Text>
              </Box>
              <Text sx={{ display: 'block', mt: 2, fontSize: 1, color: S.slate, fontFamily: font }}>HK${total} &middot; {count} {d.cart.toLowerCase()}</Text>
              <Btn tone="ghost" sx={{ mt: 4, width: '100%' }} onClick={() => { setCart({}); setStep('shop'); }}>
                &#8592; {d.title}
              </Btn>
            </Card>
          </Box>
        )}

        {toast !== null && (
          <Box sx={{ position: 'absolute', right: 4, bottom: 64, zIndex: 10, display: ['none', null, 'block'] }}>
            <Toast tone="light">
              <Box sx={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(0,139,139,0.12)', color: S.teal, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&#10003;</Box>
              <Box>
                <Text sx={{ display: 'block', fontWeight: 700 }}>{products[toast].name}</Text>
                <Text sx={{ display: 'block', color: S.muted, fontWeight: 600 }}>{d.addToCart} &#183; {products[toast].price}</Text>
              </Box>
            </Toast>
          </Box>
        )}
      </Box>

      <FootBar light left="MONO Store &middot; Free shipping over HK$1,000" right="Live inventory" />
    </BrowserFrame>
  );
}
