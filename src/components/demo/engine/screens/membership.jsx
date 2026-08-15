/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { font } from '../../shared';
import { Icon } from '../../icons';
import { hashId } from '../logic';
import { useT } from '../theme';
import { Panel, SectionTitle, AccentBtn, GhostBtn, Chip, SuccessBadge, Page, Modal } from '../blocks';

const PERKS_ICONS = ['building', 'barChart', 'message', 'wrench', 'globe', 'creditCard', 'shield', 'users'];

function memberIdFor(item) {
  const seed = hashId(item && item.id != null ? item.id : 0);
  const code = ['ASC', 'NWT', 'CLB', 'PKG', 'STP'][seed % 5];
  return `${code}-${2049 + (seed % 400)}-${(seed % 9000) + 1000}`;
}

function TierTag({ tier }) {
  const t = useT();
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '6px', px: 2.5, py: '5px', borderRadius: 99, backgroundColor: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontSize: 0, fontWeight: 700, fontFamily: font, whiteSpace: 'nowrap' }}>
      <Icon name="star" size={11} /> {tier}
    </Box>
  );
}

function MemberCard({ d, item, tier, points = '2,180' }) {
  const t = useT();
  return (
    <Box
      sx={{
        p: 3.5,
        borderRadius: 16,
        background: t.dark ? `linear-gradient(120deg, ${t.accent2}, #0B1B33 70%)` : `linear-gradient(120deg, ${t.accent2}, #0B1B33 75%)`,
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}>
      <Box sx={{ position: 'absolute', width: 140, height: 140, borderRadius: '50%', background: `radial-gradient(circle, ${t.accent}44, transparent 70%)`, top: -40, right: -30 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, position: 'relative' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: 0 }}>
          <Box sx={{ width: 34, height: 34, borderRadius: 10, background: t.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15, flexShrink: 0, fontFamily: font }}>
            A
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Text sx={{ fontWeight: 700, fontSize: 1, fontFamily: font, display: 'block' }}>Amanda Lee</Text>
            <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.55)', fontFamily: font }}>{d.memberSince}</Text>
          </Box>
        </Box>
        <TierTag tier={tier} />
      </Box>
      <Box sx={{ position: 'relative' }}>
        <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.5)', fontFamily: font }}>{d.memberId}</Text>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mt: '2px' }}>
          <Text sx={{ fontSize: 1, fontWeight: 700, fontFamily: 'Menlo, monospace', letterSpacing: '1px' }}>{memberIdFor(item)}</Text>
          <Box sx={{ ml: 'auto', textAlign: 'right' }}>
            <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.5)', fontFamily: font }}>{d.pointsBalance}</Text>
            <Text sx={{ fontSize: 1, fontWeight: 700, color: '#F5D778', fontFamily: font }}>{points} pts</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function PlanCard({ p, i, on, onClick, onChoose, hot, d }) {
  const t = useT();
  return (
    <Panel
      onClick={onClick}
      sx={{
        p: 3.5,
        cursor: onClick ? 'pointer' : 'default',
        borderWidth: 2,
        borderColor: on ? t.accent : t.line,
        backgroundColor: on ? `${t.accent}0d` : t.surface,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}>
      {hot && (
        <Box sx={{ position: 'absolute', top: -9, left: '50%', transform: 'translateX(-50%)', px: 2.5, py: '4px', borderRadius: 99, background: t.grad, color: '#fff', fontSize: 0, fontWeight: 700, fontFamily: font, whiteSpace: 'nowrap' }}>
          <Icon name="star" size={11} /> {d.popular}
        </Box>
      )}
      <Text sx={{ fontWeight: 700, fontSize: 1, color: t.ink, fontFamily: font, display: 'block' }}>{p.name}</Text>
      <Box sx={{ mt: '6px', mb: 3, display: 'flex', alignItems: 'baseline', gap: '4px' }}>
        <Text sx={{ fontSize: 3, fontWeight: 700, color: on ? t.accent : t.ink, fontFamily: font }}>{p.price}</Text>
        <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{d.perMonth}</Text>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', mb: 3, flex: 1 }}>
        {(p.perks || []).map((perk, pi) => (
          <Box key={perk} sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 0, color: t.slate, fontFamily: font }}>
            <Box sx={{ width: 18, height: 18, borderRadius: '50%', backgroundColor: `${'#22C55E'}1a`, color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name={PERKS_ICONS[pi % PERKS_ICONS.length]} size={11} />
            </Box>
            <Box sx={{ minWidth: 0 }}>{perk}</Box>
          </Box>
        ))}
      </Box>
      <AccentBtn sx={{ width: '100%', py: '9px' }} onClick={onChoose}>{on ? d.current : d.upgrade}</AccentBtn>
    </Panel>
  );
}

function PointsStrip({ d }) {
  const t = useT();
  const pct = 68;
  return (
    <Panel sx={{ p: 3, mb: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Text sx={{ fontWeight: 700, fontSize: 1, color: t.ink, fontFamily: font }}>{d.pointsBalance}</Text>
        <Text sx={{ fontWeight: 700, color: '#D97706', fontFamily: font, fontSize: 1 }}>2,180 pts</Text>
      </Box>
      <Box sx={{ height: 8, borderRadius: 99, backgroundColor: t.line, overflow: 'hidden', mb: 1 }}>
        <Box sx={{ width: `${pct}%`, height: '100%', borderRadius: 99, background: 'linear-gradient(90deg,#F59E0B,#D97706)' }} />
      </Box>
      <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>520 pts to Gold &middot; {d.rewardsReady}</Text>
    </Panel>
  );
}

function PaymentForm({ d, onDone }) {
  const t = useT();
  const [vals, setVals] = useState({ name: 'AMANDA LEE', num: '4242 4242 4242 4242', exp: '09/28', cvv: '•••' });
  const [processing, setProcessing] = useState(false);
  const field = (label, value, w) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px', ...w }}>
      <Text sx={{ fontSize: 0, fontWeight: 700, color: t.slate, fontFamily: font }}>{label}</Text>
      <Box
        as="input"
        value={value}
        readOnly
        aria-label={label}
        sx={{
          px: 3,
          py: 2,
          borderRadius: t.radius,
          border: `1px solid ${t.line}`,
          backgroundColor: t.surface,
          color: t.ink,
          fontSize: 1,
          fontFamily: 'Menlo, monospace',
          outline: 'none',
        }}
      />
    </Box>
  );
  return (
    <Panel sx={{ p: 3.5 }}>
      <SectionTitle>{d.checkout}</SectionTitle>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {field(d.cardName, vals.name)}
        <Box sx={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 0.7fr', gap: 2, '@container (max-width: 460px)': { gridTemplateColumns: '1fr 1fr' } }}>
          {field('Card number', vals.num)}
          {field('Expiry', vals.exp)}
          {field('CVV', vals.cvv)}
        </Box>
      </Box>
      <AccentBtn sx={{ width: '100%', mt: 3 }} disabled={processing} onClick={() => {
        setProcessing(true);
        setTimeout(onDone, 1400);
      }}>
        {processing ? <Box sx={{ width: 16, height: 16, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', animation: 'spin 0.8s linear infinite' }} /> : <Icon name="lock" size={14} />}
        {processing ? 'Processing…' : d.confirmChange}
      </AccentBtn>
      <Text sx={{ mt: 2, fontSize: 0, color: t.muted, fontFamily: font, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
        <Icon name="shield" size={12} /> PCI-DSS secured
      </Text>
    </Panel>
  );
}

export function MembershipA({ d, item }) {
  const t = useT();
  const [current, setCurrent] = useState(1);
  const [step, setStep] = useState('plans');
  const [selected, setSelected] = useState(0);
  const plan = d.plans[step === 'plans' ? current : selected];
  return (
    <Page>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, gap: 3, flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5, minWidth: 0 }}>
          <Box sx={{ width: 42, height: 42, borderRadius: 12, background: t.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 17, flexShrink: 0, fontFamily: font }}>
            A
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Text sx={{ fontWeight: 700, fontSize: 2, color: t.ink, fontFamily: font, display: 'block' }}>Amanda Lee</Text>
            <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font, display: 'inline-flex', alignItems: 'center', gap: 1 }}>
              <Icon name="star" size={11} color="#D97706" /> {d.plans[current].name}
            </Text>
          </Box>
        </Box>
        <Box sx={{ textAlign: 'right' }}>
          <Text sx={{ fontSize: 0, fontWeight: 700, color: t.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font }}>{d.pointsBalance}</Text>
          <Text sx={{ fontSize: 2, fontWeight: 700, color: '#D97706', fontFamily: font }}>2,180</Text>
        </Box>
      </Box>
      {step === 'plans' && (
        <>
          <SectionTitle>{d.title}</SectionTitle>
          <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, 'repeat(3, 1fr)'], gap: 3, alignItems: 'stretch', '@container (max-width: 700px)': { gridTemplateColumns: '1fr' } }}>
            {d.plans.map((p, i) => (
              <PlanCard
                key={p.name}
                p={p}
                i={i}
                hot={i === 2}
                on={current === i}
                d={d}
                onClick={() => setCurrent(i)}
                onChoose={() => { setSelected(i); setStep('checkout'); }}
              />
            ))}
          </Box>
        </>
      )}
      {step === 'checkout' && (
        <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1.1fr 1fr'], gap: 3, alignItems: 'start', '@container (max-width: 700px)': { gridTemplateColumns: '1fr' } }}>
          <Panel sx={{ p: 3.5 }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2.5, py: '5px', borderRadius: 99, backgroundColor: `${'#D97706'}1a`, color: '#B45309', fontSize: 0, fontWeight: 700, fontFamily: font, mb: 2 }}>
              <Icon name="refresh" size={12} /> {d.planSwitch}
            </Box>
            <Text sx={{ fontWeight: 700, fontSize: 2, color: t.ink, fontFamily: font, display: 'block' }}>{plan.name}</Text>
            <Text sx={{ fontSize: 2, fontWeight: 700, color: t.accent, fontFamily: font, mb: 3 }}>
              {plan.price} <Text as="span" sx={{ fontSize: 0, color: t.muted, fontWeight: 500 }}>{d.billedMonthly}</Text>
            </Text>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
              {(plan.perks || []).map((perk, pi) => (
                <Box key={perk} sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 0, color: t.slate, fontFamily: font }}>
                  <Box sx={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: `${'#22C55E'}1a`, color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name="check" size={12} />
                  </Box>
                  {perk}
                </Box>
              ))}
            </Box>
            <Box sx={{ px: 3, py: 2.5, borderRadius: t.radius, backgroundColor: `${'#D97706'}14`, border: `1px dashed ${'#D97706'}55`, display: 'flex', alignItems: 'center', gap: 2, fontSize: 0, color: '#B45309', fontFamily: font }}>
              <Icon name="lock" size={13} /> {d.trialNote}
            </Box>
          </Panel>
          <PaymentForm d={d} onDone={() => setStep('done')} />
        </Box>
      )}
      {step === 'done' && (
        <Box sx={{ maxWidth: 480, mx: 'auto', width: '100%' }}>
          <Panel sx={{ p: 4, textAlign: 'center', mb: 3 }}>
            <SuccessBadge />
            <Text sx={{ mt: 3, display: 'block', fontWeight: 700, fontSize: 2, color: t.ink, fontFamily: font }}>{d.activated}</Text>
            <Text sx={{ mt: 1, fontSize: 1, color: t.muted, fontFamily: font }}>{plan.name} &middot; {plan.price} {d.perMonth}</Text>
          </Panel>
          <MemberCard d={d} item={item} tier={plan.name} />
          <GhostBtn sx={{ width: '100%', mt: 3 }} onClick={() => setStep('plans')}><Icon name="refresh" size={15} /> {d.title}</GhostBtn>
        </Box>
      )}
    </Page>
  );
}

export function MembershipB({ d, item }) {
  const t = useT();
  const [current, setCurrent] = useState(1);
  const [open, setOpen] = useState(false);
  const [flash, setFlash] = useState(false);
  const plan = d.plans[current];
  return (
    <Page>
      <MemberCard d={d} item={item} tier={plan.name} />
      <Box sx={{ mt: 3, display: 'grid', gridTemplateColumns: ['1fr', null, '1fr 1fr'], gap: 3, '@container (max-width: 600px)': { gridTemplateColumns: '1fr' } }}>
        <Panel sx={{ p: 3.5 }}>
          <SectionTitle>{d.perksTitle}</SectionTitle>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {(plan.perks || []).map((perk, pi) => (
              <Box key={perk} sx={{ display: 'flex', alignItems: 'center', gap: 2.5, fontSize: 0, color: t.slate, fontFamily: font }}>
                <Box sx={{ width: 26, height: 26, borderRadius: 9, backgroundColor: `${t.accent}14`, color: t.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={PERKS_ICONS[pi % PERKS_ICONS.length]} size={14} />
                </Box>
                {perk}
              </Box>
            ))}
          </Box>
          <GhostBtn sx={{ width: '100%', mt: 3 }} onClick={() => setOpen(true)}>
            {d.planSwitch} <Icon name="chevronRight" size={14} />
          </GhostBtn>
        </Panel>
        <Panel sx={{ p: 3.5 }}>
          <SectionTitle>{d.pointsBalance}</SectionTitle>
          <Text sx={{ fontSize: 3, fontWeight: 700, color: '#D97706', fontFamily: font, display: 'block', mb: 2 }}>2,180 pts</Text>
          <Box sx={{ height: 8, borderRadius: 99, backgroundColor: t.line, overflow: 'hidden', mb: 1 }}>
            <Box sx={{ width: '68%', height: '100%', borderRadius: 99, background: 'linear-gradient(90deg,#F59E0B,#D97706)' }} />
          </Box>
          <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>520 pts to Gold tier</Text>
        </Panel>
      </Box>
      <Panel sx={{ mt: 3, p: 3, display: 'flex', alignItems: 'center', gap: 3 }}>
        <Box sx={{ width: 40, height: 40, borderRadius: 11, background: t.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
          <Icon name="star" size={18} />
        </Box>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Text sx={{ fontWeight: 700, fontSize: 1, color: t.ink, fontFamily: font, display: 'block' }}>{plan.name} &middot; {plan.price} {d.perMonth}</Text>
          <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{d.billedMonthly}</Text>
        </Box>
        <AccentBtn onClick={() => setOpen(true)} sx={{ flexShrink: 0 }}>{d.upgrade}</AccentBtn>
      </Panel>
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <Text sx={{ fontWeight: 700, fontSize: 2, color: t.ink, fontFamily: font, mb: 3 }}>{d.title}</Text>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {d.plans.map((p, i) => {
              const on = current === i;
              return (
                <Panel
                  key={p.name}
                  onClick={() => setCurrent(i)}
                  sx={{ display: 'flex', alignItems: 'center', gap: 3, p: 2.5, cursor: 'pointer', borderWidth: 2, borderColor: on ? t.accent : t.line, backgroundColor: on ? `${t.accent}0d` : t.surface }}>
                  <Box sx={{ width: 38, height: 38, borderRadius: 11, background: on ? t.grad : t.line, color: on ? '#fff' : t.muted, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={['box', 'star', 'rocket'][i]} size={17} />
                  </Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Text sx={{ fontWeight: 700, fontSize: 1, color: t.ink, fontFamily: font, display: 'block' }}>{p.name}</Text>
                    <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{p.perks.length} perks</Text>
                  </Box>
                  <Box sx={{ textAlign: 'right' }}>
                    <Text sx={{ fontWeight: 700, color: t.accent, fontFamily: font }}>{p.price}</Text>
                    <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{d.perMonth}</Text>
                  </Box>
                  {on && <Box sx={{ width: 22, height: 22, borderRadius: '50%', background: t.grad, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="check" size={12} strokeWidth={3} /></Box>}
                </Panel>
              );
            })}
          </Box>
          <AccentBtn
            sx={{ width: '100%', mt: 3 }}
            onClick={() => {
              setOpen(false);
              setFlash(true);
              setTimeout(() => setFlash(false), 2400);
            }}>
            {d.confirmChange} &middot; {plan.price}
          </AccentBtn>
        </Modal>
      )}
      {flash && (
        <Box sx={{ position: 'absolute', left: 4, right: 4, bottom: 4, zIndex: 30 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 3, py: 2.5, borderRadius: t.radius, backgroundColor: t.dark ? '#13203A' : '#fff', border: `1px solid ${'#22C55E'}55`, boxShadow: '0 18px 40px rgba(8,15,26,0.35)' }}>
            <Box sx={{ width: 24, height: 24, borderRadius: '50%', background: t.grad, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name="check" size={13} strokeWidth={3} />
            </Box>
            <Box sx={{ minWidth: 0 }}>
              <Text sx={{ fontWeight: 700, color: t.ink, fontFamily: font, display: 'block' }}>{d.activated}</Text>
              <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{plan.name} &middot; {plan.price} {d.perMonth}</Text>
            </Box>
          </Box>
        </Box>
      )}
    </Page>
  );
}

export function MembershipC({ d, item }) {
  const t = useT();
  const [tab, setTab] = useState(0);
  const [sel, setSel] = useState(1);
  const [confirm, setConfirm] = useState(false);
  const [done, setDone] = useState(false);
  const plan = d.plans[sel];
  return (
    <Page sx={{ pb: 10 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, gap: 3, flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {[d.title, d.pointsBalance].map((label, i) => (
            <Chip key={label} on={tab === i} onClick={() => setTab(i)}>{label}</Chip>
          ))}
        </Box>
        <Text sx={{ fontSize: 0, fontWeight: 700, color: t.muted, fontFamily: font }}>
          <Icon name="star" size={12} color="#D97706" /> 2,180 pts
        </Text>
      </Box>
      {tab === 0 ? (
        <>
          <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, 'repeat(3, 1fr)'], gap: 3, alignItems: 'stretch', '@container (max-width: 700px)': { gridTemplateColumns: '1fr' } }}>
            {d.plans.map((p, i) => (
              <PlanCard key={p.name} p={p} i={i} hot={i === 2} on={sel === i} d={d} onClick={() => setSel(i)} onChoose={() => setConfirm(true)} />
            ))}
          </Box>
        </>
      ) : (
        <>
          <PointsStrip d={d} />
          <Panel sx={{ p: 3.5 }}>
            <SectionTitle>{d.perksTitle}</SectionTitle>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {(d.plans[1].perks || []).map((perk, pi) => (
                <Box key={perk} sx={{ display: 'flex', alignItems: 'center', gap: 2.5, fontSize: 0, color: t.slate, fontFamily: font }}>
                  <Box sx={{ width: 26, height: 26, borderRadius: 9, backgroundColor: `${t.accent}14`, color: t.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={PERKS_ICONS[pi % PERKS_ICONS.length]} size={14} />
                  </Box>
                  {perk}
                </Box>
              ))}
            </Box>
          </Panel>
        </>
      )}
      <Box sx={{ position: 'absolute', left: t.pad, right: t.pad, bottom: t.pad, zIndex: 10 }}>
        <Panel sx={{ p: 2.5, display: 'flex', alignItems: 'center', gap: 3, boxShadow: '0 18px 40px rgba(8,15,26,0.22)' }}>
          <Box sx={{ minWidth: 0 }}>
            <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font, display: 'block' }}>{plan.name}</Text>
            <Text sx={{ fontWeight: 700, fontSize: 2, color: t.ink, fontFamily: font }}>{plan.price} <Text as="span" sx={{ fontSize: 0, color: t.muted, fontWeight: 500 }}>{d.perMonth}</Text></Text>
          </Box>
          <AccentBtn sx={{ ml: 'auto', flexShrink: 0 }} onClick={() => setConfirm(true)}>{d.confirmChange}</AccentBtn>
        </Panel>
      </Box>
      {confirm && (
        <Modal onClose={() => setConfirm(false)}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
            <Box sx={{ width: 44, height: 44, borderRadius: 12, background: t.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
              <Icon name="star" size={20} />
            </Box>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Text sx={{ fontWeight: 700, fontSize: 2, color: t.ink, fontFamily: font, display: 'block' }}>{plan.name}</Text>
              <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{d.planSwitch}</Text>
            </Box>
            <Text sx={{ fontWeight: 700, fontSize: 2, color: t.accent, fontFamily: font }}>{plan.price}</Text>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
            {(plan.perks || []).map((perk, pi) => (
              <Box key={perk} sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 0, color: t.slate, fontFamily: font }}>
                <Box sx={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: `${'#22C55E'}1a`, color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="check" size={12} />
                </Box>
                {perk}
              </Box>
            ))}
          </Box>
          <AccentBtn sx={{ width: '100%' }} onClick={() => { setConfirm(false); setDone(true); setTimeout(() => setDone(false), 2600); }}>
            {d.confirmChange} &middot; {plan.price}
          </AccentBtn>
        </Modal>
      )}
      {done && (
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 40, backgroundColor: 'rgba(8,15,26,0.55)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4 }}>
          <Panel sx={{ p: 4, maxWidth: 380, width: '100%', textAlign: 'center' }}>
            <SuccessBadge />
            <Text sx={{ mt: 3, display: 'block', fontWeight: 700, fontSize: 2, color: t.ink, fontFamily: font }}>{d.activated}</Text>
            <Text sx={{ mt: 1, fontSize: 0, color: t.muted, fontFamily: font }}>{plan.name} &middot; {plan.price} {d.perMonth}</Text>
          </Panel>
        </Box>
      )}
    </Page>
  );
}
