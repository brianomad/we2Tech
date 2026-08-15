/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { font } from '../../shared';
import { Icon } from '../../icons';
import { Stepper } from '../../shared';
import { useT } from '../theme';
import { Panel, SectionTitle, AccentBtn, GhostBtn, Chip, BrandTile, Qty, EmptyBox, Page } from '../blocks';

function useCart(items) {
  const [cart, setCart] = useState({});
  const add = (i) => setCart((c) => ({ ...c, [i]: (c[i] || 0) + 1 }));
  const setQty = (i, n) => {
    const next = { ...cart, [i]: n };
    if (n <= 0) delete next[i];
    setCart(next);
  };
  const subtotal = Object.entries(cart).reduce((s, [i, n]) => s + n * parseInt(items[i].price.replace(/[^\d]/g, ''), 10), 0);
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  return { cart, add, setQty, subtotal, count };
}

function CartLines({ items, cart, d }) {
  const t = useT();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {Object.entries(cart).map(([i, n]) => (
        <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <BrandTile label={items[i].name} size={36} radius={10} />
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Text sx={{ fontWeight: 600, fontSize: 1, color: t.ink, fontFamily: font, display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{items[i].name}</Text>
            <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{items[i].price} &times; {n}</Text>
          </Box>
          <Qty value={n} onChange={(v) => setQty(i, v)} min={0} />
        </Box>
      ))}
    </Box>
  );
}

function DoneOverlay({ d, onClose }) {
  const t = useT();
  const [stage, setStage] = useState(0);
  return (
    <Box sx={{ position: 'absolute', inset: 0, zIndex: 20, backgroundColor: 'rgba(8,15,26,0.55)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4 }}>
      <Panel sx={{ p: 5, textAlign: 'center', maxWidth: 400, width: '100%' }}>
        <Box sx={{ width: 72, height: 72, mx: 'auto', borderRadius: '50%', background: `${t.accent}1a`, color: t.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `inset 0 0 0 1px ${t.accent}44` }}>
          <Icon name="check" size={32} strokeWidth={2.4} />
        </Box>
        <Text sx={{ display: 'block', mt: 3, fontSize: 3, fontWeight: 700, color: t.ink, fontFamily: font }}>{d.placed}</Text>
        <Box sx={{ mt: 3 }}>
          <Stepper steps={d.steps || []} active={stage} />
        </Box>
        <Text sx={{ mt: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, color: t.muted, fontSize: 1, fontFamily: font }}>
          <Icon name="clock" size={15} /> {d.eta} 12–18 {d.minutes}
        </Text>
        <GhostBtn sx={{ mt: 4, width: '100%' }} onClick={onClose}>
          <Icon name="refresh" size={14} /> {d.newOrder}
        </GhostBtn>
      </Panel>
    </Box>
  );
}

export function OrderA({ d }) {
  const t = useT();
  const { cart, add, setQty, subtotal, count } = useCart(d.items);
  const [done, setDone] = useState(false);
  return (
    <Page>
      <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 2, mb: 1 }}>
        <Text sx={{ fontWeight: 700, fontSize: 2, color: t.ink, fontFamily: font }}>{d.title}</Text>
        <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{d.storeMeta}</Text>
      </Box>
      <Box sx={{ flex: 1, display: 'grid', gridTemplateColumns: ['1fr', null, '1.6fr 1fr'], gap: 3, minHeight: 0, '@container (max-width: 700px)': { gridTemplateColumns: '1fr' } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, minHeight: 0 }}>
          <SectionTitle>{d.menu}</SectionTitle>
          {d.items.map((item, i) => (
            <Panel key={item.name} sx={{ display: 'flex', alignItems: 'center', gap: 3, p: 2.5 }}>
              <BrandTile label={item.name} size={46} />
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Text sx={{ fontWeight: 700, color: t.ink, fontFamily: font, display: 'block' }}>{item.name}</Text>
                <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{item.price}</Text>
              </Box>
              {cart[i] > 0 ? (
                <Qty value={cart[i]} onChange={(n) => setQty(i, n)} min={0} />
              ) : (
                <Box onClick={() => add(i)} role="button" tabIndex={0} sx={{ px: 3, py: '8px', borderRadius: t.radius, background: t.grad, color: '#fff', fontSize: 0, fontWeight: 700, cursor: 'pointer', fontFamily: font, flexShrink: 0 }}>
                  + {d.add}
                </Box>
              )}
            </Panel>
          ))}
        </Box>
        <Panel sx={{ p: 3, alignSelf: 'start', minWidth: 0, width: '100%' }}>
          <SectionTitle>{d.yourOrder}</SectionTitle>
          {count === 0 ? (
            <EmptyBox icon="bag" text={d.empty} sx={{ py: 6 }} />
          ) : (
            <>
              <CartLines items={d.items} cart={cart} d={d} setQty={setQty} />
              <Box sx={{ mt: 3, pt: 3, borderTop: '1px dashed', borderColor: t.line, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text sx={{ fontWeight: 700, color: t.ink, fontFamily: font }}>{d.yourOrder}</Text>
                <Text sx={{ fontWeight: 700, fontSize: 2, color: t.accent, fontFamily: font }}>HK${subtotal}</Text>
              </Box>
            </>
          )}
          <AccentBtn sx={{ width: '100%', mt: 3 }} disabled={count === 0} onClick={() => setDone(true)}>
            {d.placeOrder} <Icon name="arrowRight" size={15} />
          </AccentBtn>
        </Panel>
      </Box>
      {done && <DoneOverlay d={d} onClose={() => setDone(false)} />}
    </Page>
  );
}

export function OrderB({ d }) {
  const t = useT();
  const { cart, add, setQty, subtotal, count } = useCart(d.items);
  const [slot, setSlot] = useState(0);
  const [done, setDone] = useState(false);
  const slots = [d.eta, `+10 ${d.minutes}`, `+20 ${d.minutes}`];
  return (
    <Page>
      <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 2, mb: 2 }}>
        <Text sx={{ fontWeight: 700, fontSize: 2, color: t.ink, fontFamily: font }}>{d.title}</Text>
        <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{d.storeMeta}</Text>
      </Box>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
        {slots.map((s, i) => (
          <Chip key={s} on={slot === i} onClick={() => setSlot(i)}>
            <Icon name="clock" size={13} /> {s}
          </Chip>
        ))}
      </Box>
      <Box sx={{ flex: 1, display: 'grid', gridTemplateColumns: ['repeat(2, 1fr)', null, 'repeat(3, 1fr)'], gap: 3, alignContent: 'start', '@container (max-width: 380px)': { gridTemplateColumns: '1fr 1fr' } }}>
        {d.items.map((item, i) => (
          <Panel key={item.name} sx={{ p: 3, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <BrandTile label={item.name} size={56} />
            <Text sx={{ fontWeight: 700, color: t.ink, fontFamily: font, display: 'block', mt: 2, lineHeight: 1.3, fontSize: 1 }}>{item.name}</Text>
            <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font, mb: 2 }}>{item.price}</Text>
            {cart[i] > 0 ? (
              <Qty value={cart[i]} onChange={(n) => setQty(i, n)} min={0} />
            ) : (
              <Box onClick={() => add(i)} role="button" tabIndex={0} sx={{ px: 4, py: '8px', borderRadius: t.radius, background: t.grad, color: '#fff', fontSize: 0, fontWeight: 700, cursor: 'pointer', fontFamily: font }}>
                + {d.add}
              </Box>
            )}
          </Panel>
        ))}
      </Box>
      <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 3, p: 3, borderRadius: t.radius, backgroundColor: t.surface, border: `1px solid ${t.line}` }}>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font, display: 'block' }}>{d.yourOrder}</Text>
          <Text sx={{ fontWeight: 700, color: t.ink, fontFamily: font }}>
            {count > 0 ? <>{count} {d.items.length > 0 ? 'items' : ''} &middot; <Text as="span" sx={{ color: t.accent }}>HK${subtotal}</Text></> : d.empty}
          </Text>
        </Box>
        <AccentBtn sx={{ flexShrink: 0 }} disabled={count === 0} onClick={() => setDone(true)}>
          {d.placeOrder} <Icon name="arrowRight" size={15} />
        </AccentBtn>
      </Box>
      {done && <DoneOverlay d={d} onClose={() => setDone(false)} />}
    </Page>
  );
}

export function OrderC({ d }) {
  const t = useT();
  const { cart, add, setQty, subtotal, count } = useCart(d.items);
  const [step, setStep] = useState('menu');
  const steps = [d.menu, d.yourOrder, d.placed];
  const stepIdx = step === 'menu' ? 0 : step === 'review' ? 1 : 2;
  return (
    <Page>
      <Box sx={{ mb: 3 }}>
        <Stepper steps={steps} active={stepIdx} />
      </Box>
      {step === 'menu' && (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, minHeight: 0 }}>
          {d.items.map((item, i) => (
            <Panel key={item.name} sx={{ display: 'flex', alignItems: 'center', gap: 3, p: 2.5 }}>
              <BrandTile label={item.name} size={46} />
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Text sx={{ fontWeight: 700, color: t.ink, fontFamily: font, display: 'block' }}>{item.name}</Text>
                <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{item.price}</Text>
              </Box>
              {cart[i] > 0 ? (
                <Qty value={cart[i]} onChange={(n) => setQty(i, n)} min={0} />
              ) : (
                <Box onClick={() => add(i)} role="button" tabIndex={0} sx={{ px: 3, py: '8px', borderRadius: t.radius, background: t.grad, color: '#fff', fontSize: 0, fontWeight: 700, cursor: 'pointer', fontFamily: font }}>
                  + {d.add}
                </Box>
              )}
            </Panel>
          ))}
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3 }}>
            <Text sx={{ color: t.muted, fontSize: 1, fontFamily: font }}>{d.storeMeta}</Text>
            <AccentBtn disabled={count === 0} onClick={() => setStep('review')}>
              {d.yourOrder} ({count}) <Icon name="arrowRight" size={15} />
            </AccentBtn>
          </Box>
        </Box>
      )}
      {step === 'review' && (
        <Box sx={{ flex: 1, display: 'grid', gridTemplateColumns: ['1fr', null, '1.6fr 1fr'], gap: 3, minHeight: 0, '@container (max-width: 700px)': { gridTemplateColumns: '1fr' } }}>
          <Panel sx={{ p: 3 }}>
            <SectionTitle>{d.yourOrder}</SectionTitle>
            <CartLines items={d.items} cart={cart} d={d} setQty={setQty} />
          </Panel>
          <Panel sx={{ p: 3, alignSelf: 'start' }}>
            <SectionTitle>{d.eta}</SectionTitle>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Box sx={{ color: t.accent }}><Icon name="clock" size={18} /></Box>
              <Box>
                <Text sx={{ fontWeight: 700, color: t.ink, fontFamily: font, display: 'block' }}>12–18 {d.minutes}</Text>
                <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{d.storeMeta}</Text>
              </Box>
            </Box>
            <Box sx={{ pt: 3, borderTop: '1px dashed', borderColor: t.line, display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Text sx={{ fontWeight: 700, color: t.ink, fontFamily: font }}>{d.yourOrder}</Text>
              <Text sx={{ fontWeight: 700, fontSize: 2, color: t.accent, fontFamily: font }}>HK${subtotal}</Text>
            </Box>
            <AccentBtn sx={{ width: '100%' }} disabled={count === 0} onClick={() => setStep('done')}>
              {d.placeOrder} <Icon name="check" size={15} />
            </AccentBtn>
          </Panel>
        </Box>
      )}
      {step === 'done' && (
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Panel sx={{ p: 5, textAlign: 'center', maxWidth: 400, width: '100%' }}>
            <Box sx={{ width: 72, height: 72, mx: 'auto', borderRadius: '50%', background: `${t.accent}1a`, color: t.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `inset 0 0 0 1px ${t.accent}44` }}>
              <Icon name="check" size={32} strokeWidth={2.4} />
            </Box>
            <Text sx={{ display: 'block', mt: 3, fontSize: 3, fontWeight: 700, color: t.ink, fontFamily: font }}>{d.placed}</Text>
            <Text sx={{ mt: 1, color: t.muted, fontFamily: font, fontSize: 1 }}>{d.storeMeta} &middot; 12–18 {d.minutes}</Text>
            <GhostBtn sx={{ mt: 4, width: '100%' }} onClick={() => setStep('menu')}>
              <Icon name="refresh" size={14} /> {d.newOrder}
            </GhostBtn>
          </Panel>
        </Box>
      )}
    </Page>
  );
}
