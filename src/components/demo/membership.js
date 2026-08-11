/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState, useEffect } from 'react';
import { S, font, Card, Btn, Badge, Avatar, SectionLabel, Field } from './shared';
import { Icon } from './icons';
import { AppBar } from './chrome';
import { Toast, LiveDot } from './anim';

const TIER_STYLE = [
  { grad: 'linear-gradient(135deg,#F1F5F9,#E2E8F0)', tint: S.slate, hot: false },
  { grad: 'linear-gradient(135deg,#FFF7E6,#FBE3B8)', tint: '#9A6B00', hot: true },
  { grad: 'linear-gradient(135deg,#0F2137,#1B2C45)', tint: S.gold, hot: false },
];

const PERKS_ICONS = ['building', 'barChart', 'message', 'wrench', 'globe', 'creditCard'];

import { brandFor } from './demo-meta';
import { contentFor } from './case-content';

export default function MembershipDemo({ t, locale, item }) {
  const d = contentFor(t, locale, item, 'membership');
  const pay = t('caseDemo.payment');
  const plans = d.plans;
  const [current, setCurrent] = useState(1);
  const [points] = useState('2,180');
  const [step, setStep] = useState('plans'); // plans | checkout | processing | done
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (step !== 'processing') return;
    const timer = setTimeout(() => setStep('done'), 1600);
    return () => clearTimeout(timer);
  }, [step]);

  const goCheckout = (i) => {
    setSelected(i);
    setStep('checkout');
  };

  const plan = plans[step === 'plans' ? current : selected];

  return (
    <>
      <AppBar brand={brandFor(item, 'Ascot')} sub={d.title} grad="linear-gradient(135deg,#0B1B33,#1B2C45)" nav={[d.title, d.checkout, d.pointsBalance]} active={step === 'plans' ? 0 : step === 'checkout' || step === 'processing' ? 1 : 2} />

      <Box sx={{ p: [3, null, 4], pb: 6, position: 'relative' }}>
        {step === 'plans' && (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4, flexWrap: 'wrap', gap: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Avatar label="A" color={S.gold} size={46} />
                <Box>
                  <Text sx={{ display: 'block', fontWeight: 700, fontSize: 2, color: S.ink, fontFamily: font }}>Amanda Lee</Text>
                  <Text sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: 0, color: '#9A6B00', fontFamily: font }}>
                    <Badge tone="amber" dot={false}><Icon name="star" size={11} /> {plan.name}</Badge>
                  </Text>
                </Box>
              </Box>
              <Box sx={{ textAlign: 'right' }}>
                <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font }}>
                  {d.pointsBalance}
                </Text>
                <Text sx={{ fontSize: 3, fontWeight: 700, color: S.gold, fontFamily: font }}>{points}</Text>
              </Box>
            </Box>

            <SectionLabel>{d.title}</SectionLabel>
            <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, 'repeat(3, 1fr)'], gap: 3, '@container (max-width: 700px)': { gridTemplateColumns: '1fr' } }}>
              {plans.map((p, i) => {
                const active = current === i;
                const style = TIER_STYLE[i];
                return (
                  <Card
                    key={p.name}
                    onClick={() => setCurrent(i)}
                    sx={{
                      p: 4,
                      position: 'relative',
                      cursor: 'pointer',
                      border: '1.5px solid',
                      borderColor: active ? S.gold : S.line,
                      background: style.grad,
                      boxShadow: active ? `0 18px 40px rgba(201,162,39,0.2)` : '0 8px 20px rgba(15,33,55,0.08)',
                      transform: active ? 'translateY(-6px)' : 'none',
                      transition: 'all 0.2s',
                    }}>
                    {style.hot && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          px: 3,
                          py: '4px',
                          borderRadius: 20,
                          background: `linear-gradient(135deg, ${S.gold}, #E5B94B)`,
                          color: '#0B1B33',
                          fontSize: 0,
                          fontWeight: 700,
                          fontFamily: font,
                          whiteSpace: 'nowrap',
                        }}>
                        <Icon name="star" size={13} /> {d.popular}
                      </Box>
                    )}
                    <Text sx={{ fontWeight: 700, fontSize: 2, color: style.hot ? '#7A5700' : style.tint, fontFamily: font }}>
                      {p.name}
                    </Text>
                    <Text sx={{ mt: 1, mb: 3, fontSize: 4, fontWeight: 700, color: style.hot ? '#5C4300' : '#0B1B33', fontFamily: font }}>
                      {p.price}
                      <Text as="span" sx={{ fontSize: 0, fontWeight: 500, color: style.hot ? '#8A6A1A' : S.muted }}> {d.perMonth}</Text>
                    </Text>
                    <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {p.perks.map((perk, pi) => (
                        <Box key={perk} sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 1, color: style.hot ? '#6B5215' : style.tint, fontFamily: font }}>
                          <Box
                            sx={{
                              width: 18,
                              height: 18,
                              borderRadius: '50%',
                              backgroundColor: 'rgba(31,169,113,0.16)',
                              color: S.green,
                              fontSize: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}>
                            {PERKS_ICONS[pi] ? <Icon name={PERKS_ICONS[pi]} size={11} /> : <Icon name="check" size={11} />}
                          </Box>
                          {perk}
                        </Box>
                      ))}
                    </Box>
                    <Btn
                      tone={active ? 'ghost' : i === 2 ? 'amber' : 'primary'}
                      sx={{ width: '100%' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrent(i);
                      }}>
                      {active ? d.current : d.upgrade}
                    </Btn>
                  </Card>
                );
              })}
            </Box>
          </>
        )}

        {step === 'checkout' && (
          <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1.1fr 1fr'], gap: 4, maxWidth: 820, mx: 'auto', '@container (max-width: 700px)': { gridTemplateColumns: '1fr' } }}>
            <Card sx={{ p: 4 }}>
              <Badge tone="amber" dot={false} sx={{ mb: 2 }}>{d.planSwitch}</Badge>
              <Text sx={{ fontWeight: 700, fontSize: 2, color: S.ink, fontFamily: font, mb: 1 }}>{plan.name}</Text>
              <Text sx={{ fontSize: 3, fontWeight: 700, color: '#9A6B00', fontFamily: font, mb: 3 }}>
                {plan.price}<Text as="span" sx={{ fontSize: 0, color: S.muted }}> {d.billedMonthly}</Text>
              </Text>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                {plan.perks.map((perk, pi) => (
                  <Box key={perk} sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 1, color: S.slate, fontFamily: font }}>
                    <Box sx={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: 'rgba(31,169,113,0.14)', color: S.green, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon name="check" size={12} />
                    </Box>
                    {perk}
                  </Box>
                ))}
              </Box>
              <Box sx={{ p: 3, borderRadius: 12, backgroundColor: '#F6F4ED', border: '1px dashed', borderColor: '#E2C97E', display: 'flex', alignItems: 'center', gap: 2, fontSize: 0, color: '#7A5700', fontFamily: font }}>
                <Icon name="lock" size={13} /> {d.trialNote}
              </Box>
            </Card>

            <Card sx={{ p: 4 }}>
              <SectionLabel>{d.checkout}</SectionLabel>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 3 }}>
                <Field label={d.cardName} value="AMANDA LEE" />
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 0.6fr 0.4fr', gap: 2, '@container (max-width: 560px)': { gridTemplateColumns: '1fr' } }}>
                  <Field label={pay.cardNumber} value="4242 4242 4242 4242" mono />
                  <Field label={pay.expiry} value="09/28" mono />
                  <Field label={pay.cvv} value="123" mono />
                </Box>
              </Box>
              <Btn tone="amber" sx={{ width: '100%', mt: 1 }} onClick={() => setStep('processing')}>
                {d.confirmChange} &middot; {plan.price}
              </Btn>
              <Text sx={{ mt: 3, fontSize: 0, color: S.muted, fontFamily: font, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}><Icon name="lock" size={12} /> {pay.pci}</Text>
            </Card>
          </Box>
        )}

        {step === 'processing' && (
          <Card sx={{ p: 6, textAlign: 'center', maxWidth: 440, mx: 'auto', mt: 3 }}>
            <Box sx={{ width: 60, height: 60, mx: 'auto', borderRadius: '50%', border: '4px solid', borderColor: S.line, borderTopColor: S.gold, animation: 'spin 0.9s linear infinite' }} />
            <Text sx={{ display: 'block', mt: 4, fontSize: 1, color: S.slate, fontFamily: font }}>{pay.processing}</Text>
            <Text sx={{ display: 'block', mt: 1, fontSize: 0, color: S.muted, fontFamily: font }}>{plan.name} &middot; {plan.price} {d.perMonth}</Text>
          </Card>
        )}

        {step === 'done' && (
          <Box sx={{ maxWidth: 560, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Card sx={{ p: 5, textAlign: 'center' }}>
              <Box
                sx={{
                  width: 72,
                  height: 72,
                  mx: 'auto',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(31,169,113,0.18), rgba(31,169,113,0.05))',
                  color: S.green,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 5,
                  boxShadow: 'inset 0 0 0 1px rgba(31,169,113,0.3)',
                }}>
                <Icon name="check" size={34} />
              </Box>
              <Text sx={{ display: 'block', mt: 3, fontSize: 3, fontWeight: 700, color: S.ink, fontFamily: font }}>{d.activated}</Text>
              <Text sx={{ display: 'block', mt: 1, fontSize: 1, color: S.slate, fontFamily: font }}>
                {plan.name} &middot; {plan.price} {d.perMonth}
              </Text>
              <Box
                sx={{
                  mt: 4,
                  p: 4,
                  borderRadius: 16,
                  background: 'linear-gradient(135deg,#0F2137,#1B2C45)',
                  color: '#fff',
                  position: 'relative',
                  overflow: 'hidden',
                  textAlign: 'left',
                }}>
                <Box sx={{ position: 'absolute', width: 120, height: 120, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,162,39,0.25), transparent 70%)', top: -30, right: -20 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, position: 'relative' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar label="A" color={S.gold} size={34} />
                    <Box>
                      <Text sx={{ fontWeight: 700, fontSize: 1, fontFamily: font }}>Amanda Lee</Text>
                      <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.55)', fontFamily: font }}>{d.memberSince}</Text>
                    </Box>
                  </Box>
                  <Badge tone="amber" dot={false}><Icon name="star" size={11} /> {plan.name}</Badge>
                </Box>
                <Box sx={{ position: 'relative' }}>
                  <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.5)', fontFamily: font }}>{d.memberId}</Text>
                  <Text sx={{ fontSize: 1, fontWeight: 700, fontFamily: 'Menlo, monospace', letterSpacing: '1px' }}>ASC-2049-8821</Text>
                </Box>
              </Box>
              <Btn tone="ghost" sx={{ mt: 4, width: '100%' }} onClick={() => { setStep('plans'); }}>
                <Icon name="refresh" size={15} /> {d.title}
              </Btn>
            </Card>
          </Box>
        )}

        {step === 'plans' && (
          <Box sx={{ position: 'absolute', bottom: 14, left: 3, right: 3, display: ['none', null, 'block'] }}>
            <Toast tone="light">
              <LiveDot color={S.green} size={8} />
              <Box>
                <Text sx={{ display: 'block', fontWeight: 700 }}>Amanda Lee</Text>
                <Text sx={{ display: 'block', color: S.muted, fontWeight: 600 }}>{points} pts &middot; {d.rewardsReady}</Text>
              </Box>
            </Toast>
          </Box>
        )}
      </Box>
    </>
  );
}
