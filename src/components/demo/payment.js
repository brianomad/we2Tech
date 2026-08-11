/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState, useEffect } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Btn, Badge, Field, SectionLabel } from './shared';
import { FootBar } from './chrome';
import { Toast } from './anim';

import { demoUrlFor, brandFor } from './demo-meta';

export default function PaymentDemo({ t, item }) {
  const d = t('caseDemo.payment');
  const [method, setMethod] = useState(0);
  const [step, setStep] = useState('pay'); // pay | processing | done
  const [toast, setToast] = useState(false);
  const [receiptNo] = useState(`RC-${Math.floor(5000 + Math.random() * 5000)}`);
  const amount = 'HK$1,248.00';

  useEffect(() => {
    if (step !== 'processing') return;
    const timer = setTimeout(() => { setStep('done'); setToast(true); setTimeout(() => setToast(false), 2600); }, 1600);
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <BrowserFrame url={demoUrlFor(item, 'https://pay.demo.we2tech.pro')} height={540} brand={brandFor(item, 'Payflow')}>
      <Box sx={{ position: 'relative', flex: 1 }}>
        <Box sx={{ px: 4, py: 3, background: 'linear-gradient(135deg,#0B1B33,#14532D)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ width: 32, height: 32, borderRadius: 10, background: 'linear-gradient(135deg,#22C55E,#16A34A)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 1 }}>&#128179;</Box>
            <Box>
              <Text sx={{ fontWeight: 700, fontSize: 1, fontFamily: font }}>Payflow</Text>
              <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.6)', fontFamily: font }}>Checkout &middot; Order #9284</Text>
            </Box>
          </Box>
          <Badge sx={{ backgroundColor: 'rgba(34,197,94,0.18)', color: '#86EFAC', border: '1px solid rgba(34,197,94,0.4)' }} dot>Secure payment</Badge>
        </Box>

        <Box sx={{ p: 4 }}>
        {step === 'pay' && (
          <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1fr 1fr'], gap: 4, maxWidth: 780, mx: 'auto' }}>
            <Card sx={{ p: 4 }}>
              <SectionLabel>{d.method}</SectionLabel>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
                {[
                  { label: d.card, icon: '\u{1F4B3}', sub: '\u9679\u9679\u9679\u9679 4242', grad: 'linear-gradient(135deg,#1E3A8A,#3B82F6)' },
                  { label: d.wallet, icon: '\u{1F4B1}', sub: 'Payflow Wallet', grad: 'linear-gradient(135deg,#065F46,#10B981)' },
                ].map((m, i) => (
                  <Box
                    key={m.label}
                    onClick={() => setMethod(i)}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      px: 3,
                      py: 3,
                      borderRadius: 13,
                      cursor: 'pointer',
                      border: '1.5px solid',
                      borderColor: method === i ? '#16A34A' : S.line,
                      backgroundColor: method === i ? 'rgba(34,197,94,0.05)' : '#fff',
                      fontFamily: font,
                      transition: 'all 0.15s',
                      '&:hover': { borderColor: '#86EFAC' },
                    }}>
                    <Box sx={{ width: 40, height: 40, borderRadius: 11, background: m.grad, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 2, flexShrink: 0 }}>{m.icon}</Box>
                    <Box sx={{ flex: 1 }}>
                      <Text sx={{ fontWeight: 700, color: S.ink, fontSize: 1 }}>{m.label}</Text>
                      <Text sx={{ fontSize: 0, color: S.muted }}>{m.sub}</Text>
                    </Box>
                    <Box sx={{ width: 20, height: 20, borderRadius: '50%', border: '2px solid', borderColor: method === i ? '#16A34A' : S.line, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {method === i && <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#16A34A' }} />}
                    </Box>
                  </Box>
                ))}
              </Box>
              {method === 0 ? (
                <>
                  <SectionLabel>{d.card}</SectionLabel>
                  <Card sx={{ p: 3, mb: 3, background: 'linear-gradient(135deg,#0B1B33,#1E3A8A)', border: 'none', boxShadow: '0 14px 30px rgba(30,58,138,0.4)' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                      <Box sx={{ fontSize: 2 }}>&#128179;</Box>
                      <Text sx={{ fontSize: 2, fontWeight: 700, color: 'rgba(255,255,255,0.85)', fontFamily: 'Menlo, monospace' }}>VISA</Text>
                    </Box>
                    <Text sx={{ fontSize: 2, fontWeight: 700, color: '#fff', fontFamily: 'Menlo, monospace', letterSpacing: '2px' }}>4242 4242 4242 4242</Text>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, fontSize: 0, color: 'rgba(255,255,255,0.7)', fontFamily: 'Menlo, monospace' }}>
                      <Text>AMANDA LEE</Text>
                      <Text>09/28</Text>
                    </Box>
                  </Card>
                  <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 0.6fr 0.5fr', gap: 2 }}>
                    <Field label={d.cardNumber} value="4242 4242 4242 4242" mono />
                    <Field label={d.expiry} value="09/28" mono />
                    <Field label={d.cvv} value="123" mono />
                  </Box>
                </>
              ) : (
                <Card sx={{ p: 3, background: 'linear-gradient(135deg,#065F46,#10B981)', border: 'none', boxShadow: '0 14px 30px rgba(16,185,129,0.4)', display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Box sx={{ width: 44, height: 44, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 2 }}>&#128178;</Box>
                  <Box>
                    <Text sx={{ fontWeight: 700, color: '#fff', fontFamily: font }}>Amanda Lee</Text>
                    <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.75)', fontFamily: font }}>Balance: HK$12,480.00</Text>
                  </Box>
                </Card>
              )}
            </Card>

            <Card sx={{ p: 4, alignSelf: 'start' }}>
              <SectionLabel>{d.amount}</SectionLabel>
              <Text sx={{ fontSize: 5, fontWeight: 700, color: S.ink, fontFamily: font, mb: 4 }}>{amount}</Text>
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '10px 16px', fontSize: 1, color: S.slate, fontFamily: font, mb: 4 }}>
                <Text>{d.subtotal}</Text>
                <Text sx={{ fontWeight: 700, color: S.ink }}>HK$1,198.00</Text>
                <Text>{d.shipping}</Text>
                <Text sx={{ fontWeight: 700, color: S.ink }}>HK$50.00</Text>
                <Box sx={{ borderTop: '1px dashed', borderColor: '#D3E1EE', gridColumn: '1 / -1', my: 1 }} />
                <Text sx={{ fontWeight: 700, color: S.ink }}>{d.amount}</Text>
                <Text sx={{ fontWeight: 700, color: S.green, fontSize: 2 }}>{amount}</Text>
              </Box>
              <Btn tone="primary" sx={{ width: '100%', backgroundColor: '#16A34A', boxShadow: '0 10px 20px rgba(22,163,74,0.35)' }} onClick={() => setStep('processing')}>
                {d.payNow} &middot; {amount}
              </Btn>
              <Text sx={{ mt: 3, fontSize: 0, color: S.muted, fontFamily: font, textAlign: 'center' }}>&#128274; Encrypted with PCI-DSS</Text>
            </Card>
          </Box>
        )}

        {(step === 'processing' || step === 'done') && (
          <Card sx={{ p: 6, textAlign: 'center', maxWidth: 440, mx: 'auto', mt: 2 }}>
            {step === 'processing' ? (
              <>
                <Box sx={{ width: 60, height: 60, mx: 'auto', borderRadius: '50%', border: '4px solid', borderColor: S.line, borderTopColor: '#16A34A', animation: 'spin 0.9s linear infinite' }} />
                <Text sx={{ display: 'block', mt: 4, fontSize: 1, color: S.slate, fontFamily: font }}>{d.processing}</Text>
                <Text sx={{ display: 'block', mt: 1, fontSize: 0, color: S.muted, fontFamily: font }}>{amount} &middot; Payflow Secure</Text>
              </>
            ) : (
              <>
                <Box sx={{ width: 72, height: 72, mx: 'auto', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(22,163,74,0.18), rgba(22,163,74,0.05))', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 5, boxShadow: 'inset 0 0 0 1px rgba(22,163,74,0.35)' }}>
                  &#10003;
                </Box>
                <Text sx={{ display: 'block', mt: 3, fontSize: 3, fontWeight: 700, color: S.ink, fontFamily: font }}>{d.receipt}</Text>
                <Box sx={{ mt: 2, display: 'inline-block', px: 4, py: 2, borderRadius: 10, backgroundColor: '#F0F6F6', border: '1px dashed', borderColor: '#16A34A' }}>
                  <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{d.receiptNo}</Text>
                  <Text sx={{ fontSize: 1, fontWeight: 700, color: '#166534', fontFamily: 'Menlo, monospace' }}>{receiptNo}</Text>
                </Box>
                <Badge tone="green" sx={{ mt: 3 }}>&#10003; {amount}</Badge>
                <Btn tone="ghost" sx={{ mt: 4, width: '100%' }} onClick={() => setStep('pay')}>
                  {d.payNow} &middot; demo
                </Btn>
              </>
            )}
          </Card>
        )}

        {toast && (
          <Box sx={{ position: 'absolute', right: 4, bottom: 14, zIndex: 10, display: ['none', null, 'block'] }}>
            <Toast tone="light">
              <Box sx={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(22,163,74,0.14)', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&#10003;</Box>
              <Box>
                <Text sx={{ display: 'block', fontWeight: 700 }}>{d.receipt}</Text>
                <Text sx={{ display: 'block', color: S.muted, fontWeight: 600 }}>{amount} &middot; {receiptNo}</Text>
              </Box>
            </Toast>
          </Box>
        )}
      </Box>
      </Box>

      <FootBar light left="Payflow &middot; Checkout" right="PCI-DSS encrypted" />
    </BrowserFrame>
  );
}
