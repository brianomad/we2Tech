/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { font } from '../../shared';
import { Icon } from '../../icons';
import { useT } from '../theme';
import { Panel, SectionTitle, AccentBtn, GhostBtn, BrandTile, ProductImage, Qty, EmptyBox, Page } from '../blocks';
import { R } from '../responsive';

const META = (d) => [
  { tag: null },
  { tag: d.newTag, tone: 'accent' },
  { tag: '-20%', tone: 'danger' },
  { tag: null },
  { tag: null },
  { tag: d.newTag, tone: 'accent' },
];

const TONES = { accent: '${accent}', danger: '#EF4444' };

function useCart(products) {
  const [cart, setCart] = useState({});
  const add = (i) => setCart((c) => ({ ...c, [i]: (c[i] || 0) + 1 }));
  const setQty = (i, n) => {
    const next = { ...cart, [i]: n };
    if (n <= 0) delete next[i];
    setCart(next);
  };
  const subtotal = Object.entries(cart).reduce((s, [i, n]) => s + n * parseInt(products[i].price.replace(/[^\d]/g, ''), 10), 0);
  const shipping = subtotal === 0 || subtotal > 1000 ? 0 : 30;
  const total = subtotal + shipping;
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  return { cart, add, setQty, subtotal, shipping, total, count };
}

function PriceTag({ price, sale }) {
  const t = useT();
  return (
    <Box>
      <Text sx={{ fontWeight: 700, fontSize: 1, color: t.ink, fontFamily: font }}>{price}</Text>
      {sale && <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font, textDecoration: 'line-through', ml: 1 }}>{price.replace(/\d+/, (n) => Math.round(Number(n) * 1.2))}</Text>}
    </Box>
  );
}

function StoreHeader({ d, brand, count, onCart, onSearch, query, setQuery }) {
  const t = useT();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, pb: 3, flexWrap: 'wrap' }}>
      <Text sx={{ fontWeight: 800, fontSize: 2, color: t.ink, fontFamily: font, letterSpacing: '1px' }}>
        {String(brand).toUpperCase()}
      </Text>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
        <Box sx={{ position: 'relative', ...R('display', ['none', 'block', 'block']) }}>
          <Box sx={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: t.muted, pointerEvents: 'none' }}>
            <Icon name="search" size={14} />
          </Box>
          <Box
            as="input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={d.search}
            sx={{
              width: 190,
              pl: '34px',
              pr: 3,
              py: '7px',
              borderRadius: t.radius,
              border: `1px solid ${t.line}`,
              backgroundColor: t.surface,
              color: t.ink,
              fontSize: 0,
              fontFamily: font,
              outline: 'none',
              '&:focus': { borderColor: t.accent, boxShadow: `0 0 0 3px ${t.accent}22` },
              '::placeholder': { color: t.muted },
            }}
          />
        </Box>
        <Box onClick={onCart} role="button" tabIndex={0} sx={{ position: 'relative', cursor: 'pointer', color: t.ink }}>
          <Icon name="shoppingCart" size={21} />
          {count > 0 && (
            <Box sx={{ position: 'absolute', top: -7, right: -9, minWidth: 18, height: 18, borderRadius: 99, background: t.grad, color: '#fff', fontSize: 0, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', px: '4px', fontFamily: font }}>
              {count}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

function CartDrawer({ d, products, cart, setQty, onCheckout, onClose }) {
  const t = useT();
  return (
    <Box sx={{ position: 'absolute', top: 0, right: 0, bottom: 0, ...R('width', ['100%', 340, 340]), zIndex: 25, backgroundColor: t.dark ? '#111C2E' : '#fff', borderLeft: `1px solid ${t.line}`, display: 'flex', flexDirection: 'column', boxShadow: '-20px 0 60px rgba(8,15,26,0.3)' }}>
      <Box sx={{ px: 3, py: 3, borderBottom: `1px solid ${t.line}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text sx={{ fontWeight: 700, color: t.ink, fontFamily: font, fontSize: 2 }}>{d.cart}</Text>
        <Box onClick={onClose} role="button" tabIndex={0} sx={{ cursor: 'pointer', color: t.muted }}>
          <Icon name="x" size={18} />
        </Box>
      </Box>
      <Box sx={{ flex: 1, overflow: 'auto', p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {Object.keys(cart).length === 0 ? (
          <EmptyBox icon="bag" text={d.emptyCart} />
        ) : (
          Object.entries(cart).map(([i, n]) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <ProductImage name={products[i].name} size={38} radius={8} />
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Text sx={{ fontWeight: 600, color: t.ink, fontFamily: font, display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{products[i].name}</Text>
                <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{products[i].price}</Text>
              </Box>
              <Qty value={n} onChange={(v) => setQty(i, v)} min={0} />
            </Box>
          ))
        )}
      </Box>
      {Object.keys(cart).length > 0 && (
        <Box sx={{ p: 3, borderTop: `1px solid ${t.line}` }}>
          <AccentBtn sx={{ width: '100%' }} onClick={onCheckout}>
            {d.checkout} <Icon name="arrowRight" size={15} />
          </AccentBtn>
        </Box>
      )}
    </Box>
  );
}

function DoneScreen({ d, total, count, onReset }) {
  const t = useT();
  const [no] = useState(() => `OR-${Math.floor(2000 + Math.random() * 8000)}`);
  return (
    <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4 }}>
      <Panel sx={{ p: 5, textAlign: 'center', maxWidth: 400, width: '100%' }}>
        <Box sx={{ width: 72, height: 72, mx: 'auto', borderRadius: '50%', background: `${t.accent}1a`, color: t.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `inset 0 0 0 1px ${t.accent}44` }}>
          <Icon name="check" size={32} strokeWidth={2.4} />
        </Box>
        <Text sx={{ display: 'block', mt: 3, fontSize: 3, fontWeight: 700, color: t.ink, fontFamily: font }}>{d.orderConfirmed}</Text>
        <Box sx={{ mt: 2, display: 'inline-block', px: 4, py: 2, borderRadius: t.radius, backgroundColor: `${t.accent}12`, border: '1px dashed', borderColor: t.accent }}>
          <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font, display: 'block' }}>{d.orderNo}</Text>
          <Text sx={{ fontSize: 1, fontWeight: 700, color: t.accent, fontFamily: 'Menlo, monospace' }}>{no}</Text>
        </Box>
        <Text sx={{ display: 'block', mt: 2, fontSize: 1, color: t.slate, fontFamily: font }}>HK${total} &middot; {count} {d.cart}</Text>
        <GhostBtn sx={{ mt: 4, width: '100%' }} onClick={onReset}>
          <Icon name="arrowLeft" size={14} /> {d.title}
        </GhostBtn>
      </Panel>
    </Box>
  );
}

function CheckoutCard({ d, products, cart, setQty, subtotal, shipping, total, onPay, count }) {
  const t = useT();
  return (
    <Box sx={{ flex: 1, display: 'grid', gridTemplateColumns: ['1fr', null, '1.5fr 1fr'], gap: 3, minHeight: 0, alignContent: 'start', '@container (max-width: 700px)': { gridTemplateColumns: '1fr' } }}>
      <Panel sx={{ p: 3 }}>
        <SectionTitle>{d.cart}</SectionTitle>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {Object.entries(cart).map(([i, n]) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <ProductImage name={products[i].name} size={42} radius={8} />
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Text sx={{ fontWeight: 600, color: t.ink, fontFamily: font, display: 'block' }}>{products[i].name}</Text>
                <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{products[i].price} &times; {n}</Text>
              </Box>
              <Qty value={n} onChange={(v) => setQty(i, v)} min={0} />
            </Box>
          ))}
        </Box>
      </Panel>
      <Panel sx={{ p: 3, alignSelf: 'start' }}>
        <Text sx={{ fontWeight: 700, fontSize: 2, color: t.ink, fontFamily: font, mb: 3 }}>{d.checkout}</Text>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '8px 14px', fontSize: 1, color: t.slate, fontFamily: font, mb: 3 }}>
          <Text>{d.subtotal}</Text>
          <Text sx={{ fontWeight: 700, color: t.ink }}>HK${subtotal}</Text>
          <Text>{d.shipping}</Text>
          <Text sx={{ fontWeight: 700, color: t.ink }}>{shipping === 0 ? d.free : `HK$${shipping}`}</Text>
          <Box sx={{ borderTop: '1px dashed', borderColor: t.line, gridColumn: '1 / -1', my: 1 }} />
          <Text sx={{ fontWeight: 700, color: t.ink }}>{d.total}</Text>
          <Text sx={{ fontWeight: 700, color: t.accent, fontSize: 2 }}>HK${total}</Text>
        </Box>
        <AccentBtn sx={{ width: '100%' }} disabled={count === 0} onClick={onPay}>
          {d.pay} &middot; HK${total}
        </AccentBtn>
      </Panel>
    </Box>
  );
}

export function EcomA({ d, brand }) {
  const t = useT();
  const { cart, add, setQty, subtotal, shipping, total, count } = useCart(d.products);
  const [step, setStep] = useState('shop');
  const [drawer, setDrawer] = useState(false);
  const [query, setQuery] = useState('');
  const [toast, setToast] = useState(null);
  const metas = META(d);
  const q = query.trim().toLowerCase();
  const visible = d.products.map((p, i) => ({ p, i })).filter(({ p }) => !q || String(p.name).toLowerCase().includes(q));
  const addItem = (i) => { add(i); setToast(i); setTimeout(() => setToast(null), 1800); };
  const reset = () => { setCart({}); setStep('shop'); };
  return (
    <Box sx={{ minHeight: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <Box sx={{ px: 4, pt: 3, borderBottom: `1px solid ${t.line}`, backgroundColor: t.surface }}>
        <StoreHeader d={d} brand={brand} count={count} onCart={() => setDrawer(true)} query={query} setQuery={setQuery} />
      </Box>
      {step === 'shop' && (
        <>
        <Box sx={{ flex: 1, p: 3, overflow: 'auto', minHeight: 0 }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: ['repeat(2, 1fr)', null, 'repeat(3, 1fr)'], gap: 3, '@container (max-width: 380px)': { gridTemplateColumns: '1fr 1fr' } }}>
              {visible.map(({ p, i }) => {
                const meta = metas[i % metas.length];
                const inCart = cart[i] || 0;
                return (
                  <Panel key={p.name} sx={{ overflow: 'hidden', cursor: 'pointer', '&:hover': { transform: 'translateY(-3px)', boxShadow: t.dark ? '0 12px 30px rgba(0,0,0,0.4)' : '0 12px 30px rgba(15,33,55,0.12)' } }} onClick={() => addItem(i)}>
                    <Box sx={{ height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', background: t.dark ? 'linear-gradient(135deg,#16233B,#0B1220)' : 'linear-gradient(135deg,#EFF6FF,#F8FAFC)', position: 'relative', overflow: 'hidden' }}>
                      <ProductImage name={p.name} size={90} radius={t.radius + 4} />
                      {meta.tag && (
                        <Box sx={{ position: 'absolute', top: 10, left: 10, px: 2, py: '4px', borderRadius: 99, fontSize: 0, fontWeight: 700, color: '#fff', backgroundColor: meta.tone === 'danger' ? TONES.danger : t.accent, fontFamily: font, boxShadow: `0 2px 8px ${meta.tone === 'danger' ? '#EF4444' : t.accent}44` }}>
                          {meta.tag}
                        </Box>
                      )}
                      {inCart > 0 && (
                        <Box sx={{ position: 'absolute', top: 10, right: 10, width: 22, height: 22, borderRadius: '50%', fontSize: 0, fontWeight: 700, color: '#fff', backgroundColor: t.accent, fontFamily: font, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 2px 8px ${t.accent}44` }}>
                          {inCart}
                        </Box>
                      )}
                    </Box>
                    <Box sx={{ p: 3 }}>
                      <Text sx={{ fontWeight: 600, fontSize: 1, color: t.ink, fontFamily: font, display: 'block', mb: '3px', lineHeight: 1.35 }}>{p.name}</Text>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                        <Box sx={{ color: '#F5B40C' }}><Icon name="star" size={13} /></Box>
                        <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{(4 + (i % 10) * 0.1).toFixed(1)}</Text>
                        <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font, ml: 1 }}>({12 + i * 7})</Text>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <PriceTag price={p.price} sale={meta.tag === '-20%'} />
                        {inCart > 0 ? (
                          <Box onClick={(e) => e.stopPropagation()}>
                            <Qty value={inCart} onChange={(n) => setQty(i, n)} min={0} />
                          </Box>
                        ) : (
                          <Box onClick={(e) => e.stopPropagation()} sx={{ px: 3, py: '9px', borderRadius: t.radius, background: t.grad, color: '#fff', fontSize: 0, fontWeight: 700, fontFamily: font, cursor: 'pointer', transition: 'transform 0.15s', '&:hover': { transform: 'scale(1.05)' }, '&:active': { transform: 'scale(0.97)' }, boxShadow: `0 4px 12px ${t.accent}44` }}>
                            + {d.addToCart}
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Panel>
                );
              })}
            </Box>
            {visible.length === 0 && <EmptyBox icon="search" text={d.noResults} />}
          </Box>
          <Box sx={{ px: 4, py: 3, borderTop: `1px solid ${t.line}`, backgroundColor: t.surface, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text sx={{ fontSize: 1, fontFamily: font, color: t.slate }}>
              {count > 0 ? <><Text as="span" sx={{ fontWeight: 700, color: t.ink }}>{count}</Text> {d.cart.toLowerCase()}</> : d.emptyCart}
            </Text>
            <AccentBtn disabled={count === 0} onClick={() => setStep('checkout')}>
              {d.checkout} <Icon name="arrowRight" size={15} />
            </AccentBtn>
          </Box>
        </>
      )}
      {step === 'checkout' && (
        <Box sx={{ flex: 1, p: 4, overflow: 'auto', minHeight: 0 }}>
          <CheckoutCard d={d} products={d.products} cart={cart} setQty={setQty} subtotal={subtotal} shipping={shipping} total={total} count={count} onPay={() => setStep('done')} />
        </Box>
      )}
      {step === 'done' && <DoneScreen d={d} total={total} count={count} onReset={reset} />}
      {drawer && step === 'shop' && (
        <CartDrawer d={d} products={d.products} cart={cart} setQty={setQty} onCheckout={() => { setDrawer(false); setStep('checkout'); }} onClose={() => setDrawer(false)} />
      )}
      {toast !== null && step === 'shop' && (
        <Box sx={{ position: 'absolute', right: 4, bottom: 64, zIndex: 30, ...R('display', ['none', 'block', 'block']) }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 3, py: 2.5, borderRadius: t.radius, backgroundColor: t.dark ? '#13203A' : '#fff', border: `1px solid ${t.accent}55`, boxShadow: '0 18px 40px rgba(8,15,26,0.35)' }}>
            <Box sx={{ width: 24, height: 24, borderRadius: '50%', background: t.grad, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="check" size={13} strokeWidth={3} />
            </Box>
            <Box>
              <Text sx={{ display: 'block', fontWeight: 700, color: t.ink, fontFamily: font, fontSize: 1 }}>{d.products[toast].name}</Text>
              <Text sx={{ display: 'block', color: t.muted, fontWeight: 600, fontSize: 0, fontFamily: font }}>{d.added} &middot; {d.products[toast].price}</Text>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export function EcomB({ d, brand }) {
  const t = useT();
  const { cart, add, setQty, subtotal, shipping, total, count } = useCart(d.products);
  const [step, setStep] = useState('shop');
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();
  const visible = d.products.map((p, i) => ({ p, i })).filter(({ p }) => !q || String(p.name).toLowerCase().includes(q));
  const reset = () => { setCart({}); setStep('shop'); };
  return (
    <Box sx={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ px: 4, pt: 3, borderBottom: `1px solid ${t.line}`, backgroundColor: t.surface }}>
        <StoreHeader d={d} brand={brand} count={count} onCart={() => setStep('checkout')} query={query} setQuery={setQuery} />
      </Box>
      {step === 'shop' && (
        <Box sx={{ flex: 1, p: 4, overflow: 'auto', display: 'grid', gridTemplateColumns: ['1fr', null, '1.4fr 1fr'], gap: 3, alignContent: 'start', minHeight: 0, '@container (max-width: 700px)': { gridTemplateColumns: '1fr' } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {visible.map(({ p, i }) => (
              <Panel key={p.name} sx={{ display: 'flex', alignItems: 'center', gap: 3, p: 2.5, '&:hover': { transform: 'translateY(-1px)', boxShadow: t.dark ? '0 6px 16px rgba(0,0,0,0.3)' : '0 6px 16px rgba(15,33,55,0.08)' } }}>
                <ProductImage name={p.name} size={52} radius={t.radius} />
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Text sx={{ fontWeight: 700, color: t.ink, fontFamily: font, display: 'block', lineHeight: 1.3 }}>{p.name}</Text>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: '2px' }}>
                    <Box sx={{ color: '#F5B40C' }}><Icon name="star" size={11} /></Box>
                    <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{(4 + (i % 10) * 0.1).toFixed(1)}</Text>
                    <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font, ml: 1 }}>({12 + i * 7})</Text>
                  </Box>
                </Box>
                <PriceTag price={p.price} />
                {cart[i] > 0 ? (
                  <Qty value={cart[i]} onChange={(n) => setQty(i, n)} min={0} />
                ) : (
                  <Box onClick={() => add(i)} role="button" tabIndex={0} sx={{ px: 3, py: '9px', borderRadius: t.radius, background: t.grad, color: '#fff', fontSize: 0, fontWeight: 700, cursor: 'pointer', fontFamily: font, transition: 'transform 0.15s', '&:hover': { transform: 'scale(1.05)' }, '&:active': { transform: 'scale(0.97)' }, boxShadow: `0 4px 12px ${t.accent}44` }}>
                    + {d.addToCart}
                  </Box>
                )}
              </Panel>
            ))}
            {visible.length === 0 && <EmptyBox icon="search" text={d.noResults} />}
          </Box>
          <Panel sx={{ p: 3, alignSelf: 'start' }}>
            <SectionTitle>{d.cart}</SectionTitle>
            {count === 0 ? (
              <EmptyBox icon="bag" text={d.emptyCart} sx={{ py: 6 }} />
            ) : (
              <>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {Object.entries(cart).map(([i, n]) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Text sx={{ fontWeight: 600, fontSize: 1, color: t.ink, fontFamily: font, display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{d.products[i].name}</Text>
                        <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{d.products[i].price}</Text>
                      </Box>
                      <Qty value={n} onChange={(v) => setQty(i, v)} min={0} />
                    </Box>
                  ))}
                </Box>
                <Box sx={{ mt: 3, pt: 3, borderTop: '1px dashed', borderColor: t.line, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text sx={{ fontWeight: 700, color: t.ink, fontFamily: font }}>{d.total}</Text>
                  <Text sx={{ fontWeight: 700, fontSize: 2, color: t.accent, fontFamily: font }}>HK${total}</Text>
                </Box>
              </>
            )}
            <AccentBtn sx={{ width: '100%', mt: 3 }} disabled={count === 0} onClick={() => setStep('checkout')}>
              {d.checkout} <Icon name="arrowRight" size={15} />
            </AccentBtn>
          </Panel>
        </Box>
      )}
      {step === 'checkout' && (
        <Box sx={{ flex: 1, p: 4, overflow: 'auto', minHeight: 0 }}>
          <CheckoutCard d={d} products={d.products} cart={cart} setQty={setQty} subtotal={subtotal} shipping={shipping} total={total} count={count} onPay={() => setStep('done')} />
        </Box>
      )}
      {step === 'done' && <DoneScreen d={d} total={total} count={count} onReset={reset} />}
    </Box>
  );
}

export function EcomC({ d, brand }) {
  const t = useT();
  const { cart, add, setQty, subtotal, shipping, total, count } = useCart(d.products);
  const [step, setStep] = useState('shop');
  const [toast, setToast] = useState(null);
  const hero = d.products[0];
  const rest = d.products.slice(1);
  const reset = () => { setCart({}); setStep('shop'); };
  const addItem = (i) => { add(i); setToast(i); setTimeout(() => setToast(null), 1800); };
  return (
    <Box sx={{ minHeight: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <Box sx={{ px: 4, pt: 3, borderBottom: `1px solid ${t.line}`, backgroundColor: t.surface }}>
        <StoreHeader d={d} brand={brand} count={count} onCart={() => setStep('checkout')} />
      </Box>
      {step === 'shop' && (
        <Box sx={{ flex: 1, p: 4, overflow: 'auto', minHeight: 0 }}>
          <Panel sx={{ p: 3, ...R('display', ['block', 'flex', 'flex']), alignItems: 'center', gap: 3, background: t.dark ? `linear-gradient(135deg, ${t.accent}26, transparent)` : undefined, mb: 3 }}>
            <Box sx={{ ...R('width', ['100%', 120, 120]), height: 120, borderRadius: t.radius + 2, background: t.dark ? 'linear-gradient(135deg,#16233B,#0B1220)' : 'linear-gradient(135deg,#F8FAFC,#EFF6FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, ...R('mb', [3, 0, 0]) }}>
              <ProductImage name={hero.name} size={72} radius={t.radius + 4} />
            </Box>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Box sx={{ mb: 1, display: 'inline-block', px: 2, py: '3px', borderRadius: 99, fontSize: 0, fontWeight: 700, color: '#fff', backgroundColor: t.accent, fontFamily: font }}>
                {d.newTag}
              </Box>
              <Text sx={{ fontWeight: 800, fontSize: 2, color: t.ink, fontFamily: font, display: 'block', lineHeight: 1.25 }}>{hero.name}</Text>
              <Text sx={{ mt: 1, mb: 2, color: t.muted, fontSize: 1, fontFamily: font }}>{hero.price}</Text>
              <AccentBtn onClick={() => addItem(0)}>
                <Icon name="bag" size={15} /> {d.addToCart}
              </AccentBtn>
            </Box>
          </Panel>
          <SectionTitle right={<Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{rest.length} {d.cart.toLowerCase()}</Text>}>{d.title}</SectionTitle>
          <Box sx={{ display: 'grid', gridTemplateColumns: ['repeat(2, 1fr)', null, 'repeat(3, 1fr)'], gap: 2, '@container (max-width: 380px)': { gridTemplateColumns: '1fr 1fr' } }}>
            {rest.map((p, i) => {
              const idx = i + 1;
              const inCart = cart[idx] || 0;
              return (
                <Panel key={p.name} sx={{ p: 2, textAlign: 'center', cursor: 'pointer', '&:hover': { transform: 'translateY(-3px)', boxShadow: t.dark ? '0 12px 30px rgba(0,0,0,0.4)' : '0 12px 30px rgba(15,33,55,0.12)' } }} onClick={() => addItem(idx)}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1.5 }}>
                    <ProductImage name={p.name} size={52} radius={t.radius + 2} />
                  </Box>
                  <Text sx={{ fontWeight: 700, fontSize: 0, color: t.ink, fontFamily: font, display: 'block', mb: '2px', lineHeight: 1.3 }}>{p.name}</Text>
                  <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font, mb: 1.5, display: 'block' }}>{p.price}</Text>
                  {inCart > 0 ? (
                    <Box onClick={(e) => e.stopPropagation()} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Qty value={inCart} onChange={(n) => setQty(idx, n)} min={0} />
                    </Box>
                  ) : (
                    <Box onClick={(e) => e.stopPropagation()} sx={{ px: 4, py: '8px', borderRadius: t.radius, background: t.grad, color: '#fff', fontSize: 0, fontWeight: 700, fontFamily: font, display: 'inline-block' }}>
                      + {d.addToCart}
                    </Box>
                  )}
                </Panel>
              );
            })}
          </Box>
        </Box>
      )}
      {step === 'checkout' && (
        <Box sx={{ flex: 1, p: 4, overflow: 'auto', minHeight: 0 }}>
          <CheckoutCard d={d} products={d.products} cart={cart} setQty={setQty} subtotal={subtotal} shipping={shipping} total={total} count={count} onPay={() => setStep('done')} />
        </Box>
      )}
      {step === 'done' && <DoneScreen d={d} total={total} count={count} onReset={reset} />}
      {toast !== null && step === 'shop' && (
        <Box sx={{ position: 'absolute', right: 4, bottom: 24, zIndex: 30, ...R('display', ['none', 'block', 'block']) }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 3, py: 2.5, borderRadius: t.radius, backgroundColor: t.dark ? '#13203A' : '#fff', border: `1px solid ${t.accent}55`, boxShadow: '0 18px 40px rgba(8,15,26,0.35)' }}>
            <Box sx={{ width: 24, height: 24, borderRadius: '50%', background: t.grad, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="check" size={13} strokeWidth={3} />
            </Box>
            <Box>
              <Text sx={{ display: 'block', fontWeight: 700, color: t.ink, fontFamily: font, fontSize: 1 }}>{d.products[toast].name}</Text>
              <Text sx={{ display: 'block', color: t.muted, fontWeight: 600, fontSize: 0, fontFamily: font }}>{d.added} &middot; {d.products[toast].price}</Text>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
