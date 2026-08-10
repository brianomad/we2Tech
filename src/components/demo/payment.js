/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState, useEffect } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Btn, Badge, Field } from './shared';

export default function PaymentDemo({ t }) {
  const d = t('caseDemo.payment');
  const [method, setMethod] = useState(0);
  const [step, setStep] = useState('pay'); // pay | processing | done
  const [receiptNo] = useState(`RC-${Math.floor(5000 + Math.random() * 5000)}`);
  const amount = 'HK$1,248.00';

  useEffect(() => {
    if (step !== 'processing') return;
    const timer = setTimeout(() => setStep('done'), 1600);
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <BrowserFrame url="https://pay.demo.we2tech.pro" height={470}>
      <Box sx={{ p: 4 }}>
        {step === 'pay' && (
          <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1fr 1fr'], gap: 4, maxWidth: 760, mx: 'auto' }}>
            <Card sx={{ p: 4 }}>
              <Text sx={{ fontWeight: 700, fontSize: 2, color: S.ink, fontFamily: font, mb: 3 }}>{d.method}</Text>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  { label: d.card, icon: '\u{1F4B3}', sub: '\u9679\u9679\u9679\u9679 4242' },
                  { label: d.wallet, icon: '\u{1F4B1}', sub: 'Amanda Lee' },
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
                      borderRadius: 12,
                      cursor: 'pointer',
                      border: '1px solid',
                      borderColor: method === i ? S.teal : S.line,
                      backgroundColor: method === i ? 'rgba(0,139,139,0.05)' : '#fff',
                      fontFamily: font,
                    }}>
                    <Box sx={{ fontSize: 2 }}>{m.icon}</Box>
                    <Box sx={{ flex: 1 }}>
                      <Text sx={{ fontWeight: 700, color: S.ink, fontSize: 1 }}>{m.label}</Text>
                      <Text sx={{ fontSize: 0, color: S.muted }}>{m.sub}</Text>
                    </Box>
                    <Box
                      sx={{
                        width: 18,
                        height: 18,
                        borderRadius: '50%',
                        border: '2px solid',
                        borderColor: method === i ? S.teal : S.line,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      {method === i && <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: S.teal }} />}
                    </Box>
                  </Box>
                ))}
              </Box>
              {method === 0 && (
                <Box sx={{ mt: 4, display: 'grid', gridTemplateColumns: '1fr 0.6fr 0.5fr', gap: 2 }}>
                  <Field label={d.cardNumber} value="4242 4242 4242 4242" sx={{ gridColumn: '1 / -1' }} />
                  <Field label={d.expiry} value="09/28" />
                  <Field label={d.cvv} value="123" />
                </Box>
              )}
            </Card>
            <Card sx={{ p: 4, alignSelf: 'start' }}>
              <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 2 }}>
                {d.amount}
              </Text>
              <Text sx={{ fontSize: 5, fontWeight: 700, color: S.ink, fontFamily: font, mb: 4 }}>{amount}</Text>
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '8px 16px', fontSize: 1, color: S.slate, fontFamily: font, mb: 4 }}>
                <Text>{d.subtotal}</Text>
                <Text sx={{ fontWeight: 700, color: S.ink }}>HK$1,198.00</Text>
                <Text>{d.shipping}</Text>
                <Text sx={{ fontWeight: 700, color: S.ink }}>HK$50.00</Text>
              </Box>
              <Btn tone="primary" sx={{ width: '100%' }} onClick={() => setStep('processing')}>
                {d.payNow} &middot; {amount}
              </Btn>
            </Card>
          </Box>
        )}
        {(step === 'processing' || step === 'done') && (
          <Card sx={{ p: 6, textAlign: 'center', maxWidth: 420, mx: 'auto' }}>
            {step === 'processing' ? (
              <>
                <Box sx={{ width: 56, height: 56, mx: 'auto', borderRadius: '50%', border: '4px solid', borderColor: S.line, borderTopColor: S.teal, animation: 'spin 0.9s linear infinite' }} />
                <Text sx={{ display: 'block', mt: 3, fontSize: 1, color: S.slate, fontFamily: font }}>{d.processing}</Text>
              </>
            ) : (
              <>
                <Box sx={{ width: 64, height: 64, mx: 'auto', borderRadius: '50%', backgroundColor: 'rgba(31,169,113,0.14)', color: S.green, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 5 }}>
                  &#10003;
                </Box>
                <Text sx={{ display: 'block', mt: 3, fontSize: 3, fontWeight: 700, color: S.ink, fontFamily: font }}>{d.receipt}</Text>
                <Text sx={{ display: 'block', mt: 1, fontSize: 1, color: S.muted, fontFamily: font }}>
                  {d.receiptNo}: {receiptNo}
                </Text>
                <Badge tone="teal" sx={{ mt: 3 }}>{amount}</Badge>
                <Btn tone="ghost" sx={{ mt: 4, width: '100%' }} onClick={() => setStep('pay')}>
                  {d.payNow} &middot; demo
                </Btn>
              </>
            )}
          </Card>
        )}
      </Box>
    </BrowserFrame>
  );
}
