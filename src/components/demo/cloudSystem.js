/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState, useEffect } from 'react';
import { S, font, Card, Badge, LineChart, StatusDot, Avatar, SectionLabel } from './shared';
import { LiveDot, Toast, fadeUp, barGrow } from './anim';
import { Skeleton, LoadingRows } from './chrome';
import CountUp from '../count-up';

const NAV = [
  { icon: '\u{1F4C8}', label: 'Overview' },
  { icon: '\u{1F465}', label: 'Users' },
  { icon: '\u2699', label: 'Services' },
  { icon: '\u{1F4B3}', label: 'Billing' },
  { icon: '\u{1F6E0}', label: 'Settings' },
];

const BASE_REQ = [12, 19, 15, 24, 22, 30, 28, 36, 33, 41, 46, 44];

import { brandFor } from './demo-meta';
import { contentFor } from './case-content';

export default function CloudSystemDemo({ t, locale, item }) {
  const d = contentFor(t, locale, item, 'cloud');
  const nav = [d.overview, d.users, d.services, d.billing, d.settings];
  const servicesList = d.serviceList;
  const [tab, setTab] = useState(0);
  const [req, setReq] = useState(BASE_REQ);
  const [toast, setToast] = useState(0);
  const [loading, setLoading] = useState(true);
  const errors = [1, 2, 1, 1, 3, 2, 1, 2, 1, 1, 2, 1];

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setReq((prev) => {
        const next = prev[prev.length - 1] + Math.round((Math.random() - 0.42) * 7);
        return [...prev.slice(1), Math.max(6, next)];
      });
    }, 1800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setToast((v) => v + 1), 5200);
    return () => clearInterval(id);
  }, []);

  const toastMsg = servicesList[toast % servicesList.length];
  const toastOk = toastMsg.status === 'Operational';

  return (
    <>
      <Box sx={{ display: 'flex', minHeight: 0, position: 'relative' }}>
        <Box
          sx={{
            width: [52, 200],
            flexShrink: 0,
            background: 'linear-gradient(180deg,#0B1B33,#0F2137)',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Box sx={{ px: [2, 4], py: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                width: 34,
                height: 34,
                borderRadius: 10,
                background: 'linear-gradient(135deg,#22D3EE,#3B82F6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: 1,
                boxShadow: '0 6px 14px rgba(59,130,246,0.45)',
                flexShrink: 0,
              }}>
              &#9729;
            </Box>
            <Box sx={{ display: ['none', null, 'block'] }}>
              <Text sx={{ fontWeight: 700, fontSize: 1, fontFamily: font, lineHeight: 1.2 }}>{brandFor(item, 'CloudOS')}</Text>
              <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.5)', fontFamily: font }}>we2Tech Ltd.</Text>
            </Box>
          </Box>

          <Box sx={{ px: [2, 4], pb: 3, display: ['none', null, 'block'] }}>
            <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 1 }}>
              {d.menu}
            </Text>
          </Box>          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', px: [2, 3] }}>
            {NAV.map((n, i) => (
              <Box
                key={n.label}
                onClick={() => setTab(i)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  px: [0, 3],
                  py: 2.5,
                  borderRadius: 10,
                  cursor: 'pointer',
                  fontFamily: font,
                  fontWeight: 600,
                  fontSize: 1,
                  justifyContent: ['center', 'flex-start'],
                  color: tab === i ? '#fff' : 'rgba(255,255,255,0.6)',
                  backgroundColor: tab === i ? 'rgba(59,130,246,0.22)' : 'transparent',
                  border: tab === i ? '1px solid rgba(59,130,246,0.45)' : '1px solid transparent',
                  transition: 'background-color 0.2s, color 0.2s',
                  '&:hover': { backgroundColor: tab === i ? 'rgba(59,130,246,0.22)' : 'rgba(255,255,255,0.07)' },
                }}>
                <Box sx={{ fontSize: 1, width: 22, textAlign: 'center', flexShrink: 0 }}>{n.icon}</Box>
                <Text sx={{ display: ['none', null, 'inline'] }}>{nav[i]}</Text>
                {tab === i && (
                  <Box
                    sx={{
                      ml: 'auto',
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      backgroundColor: '#22D3EE',
                      display: ['none', null, 'block'],
                      animation: 'dPulse 1.6s ease-in-out infinite',
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>

          <Box sx={{ mt: 4, mx: [2, 4], p: 3, borderRadius: 12, background: 'linear-gradient(135deg,rgba(139,92,246,0.25),rgba(59,130,246,0.12))', border: '1px solid rgba(139,92,246,0.35)', display: ['none', null, 'block'] }}>
            <Text sx={{ fontSize: 1, fontWeight: 700, fontFamily: font }}>&#9889; {d.enterprise}</Text>
            <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.6)', fontFamily: font, mt: '2px', mb: 2 }}>
              {d.enterpriseNote}
            </Text>
            <Box sx={{ px: 3, py: 1.5, borderRadius: 8, backgroundColor: '#fff', color: '#4338CA', fontSize: 0, fontWeight: 700, fontFamily: font, textAlign: 'center', cursor: 'pointer', transition: 'transform 0.15s', '&:hover': { transform: 'translateY(-1px)' } }}>
              {d.upgrade}
            </Box>
          </Box>

          <Box sx={{ mt: 'auto', pt: 3, px: [2, 4], pb: 4, display: ['none', null, 'flex'], alignItems: 'center', gap: 2, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <Avatar label="K" color={S.blue} size={32} />
            <Box>
              <Text sx={{ fontSize: 0, fontWeight: 700, fontFamily: font, lineHeight: 1.3 }}>K. Wong</Text>
              <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.5)', fontFamily: font }}>{d.admin}</Text>
            </Box>
            <Box sx={{ ml: 'auto', color: 'rgba(255,255,255,0.5)', fontSize: 1 }}>&#8942;</Box>
          </Box>
        </Box>

        <Box sx={{ flex: 1, minWidth: 0, p: [3, 4], backgroundColor: '#F5F7FB' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3, mb: 4, flexWrap: 'wrap' }}>
            <Box>
              <Text sx={{ fontWeight: 700, fontSize: [2, null, 3], color: S.ink, fontFamily: font }}>{d.title}</Text>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: 0, color: S.muted, fontFamily: font, mt: '2px' }}>
                <LiveDot color={S.green} size={7} />
                {d.allOperational}
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: ['none', null, 'flex'], alignItems: 'center', gap: 2, px: 3, py: 2, borderRadius: 10, backgroundColor: '#fff', border: '1px solid', borderColor: S.line, color: S.muted, fontSize: 0, fontFamily: font }}>
                &#128269; {d.search}
              </Box>
              <Box sx={{ width: 36, height: 36, borderRadius: 10, backgroundColor: '#fff', border: '1px solid', borderColor: S.line, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 1, position: 'relative' }}>
                &#128276;
                <LiveDot color={S.red} size={6} ping={false} />
              </Box>
              <Avatar label="K" color={S.blue} size={36} />
            </Box>
          </Box>

          {loading && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr 1fr', null, 'repeat(4, 1fr)'], gap: 3 }}>
                {[0, 1, 2, 3].map((i) => (
                  <Card key={i} sx={{ p: 3 }}>
                    <Skeleton w={34} h={34} r={10} />
                    <Skeleton w="70%" h={16} sx={{ mt: 2 }} />
                    <Skeleton w="45%" h={9} sx={{ mt: 1 }} />
                  </Card>
                ))}
              </Box>
              <Card sx={{ p: 4 }}>
                <Skeleton w="40%" h={14} />
                <Skeleton w="100%" h={120} r={10} sx={{ mt: 3 }} />
              </Card>
              <LoadingRows rows={3} />
            </Box>
          )}

          {!loading && tab === 0 && (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, flexWrap: 'wrap', gap: 2 }}>
                <SectionLabel sx={{ mb: 0 }}>{d.allOperational}</SectionLabel>
                <Badge tone="green" dot>&#9679; {d.allOperational}</Badge>
              </Box>

              <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr 1fr', null, 'repeat(4, 1fr)'], gap: 3, mb: 4 }}>
                {[
                  { label: d.uptime, end: 99.98, decimals: 2, suffix: '%', delta: '+0.2%', color: S.green, icon: '\u{1F4C8}', bg: 'rgba(31,169,113,0.12)' },
                  { label: d.activeUsers, end: 12480, decimals: 0, suffix: '', delta: '+8.4%', color: S.blue, icon: '\u{1F465}', bg: 'rgba(59,130,246,0.12)' },
                  { label: d.requests, end: 86.2, decimals: 1, suffix: 'k', delta: '+3.1%', color: S.purple, icon: '\u2699', bg: 'rgba(139,92,246,0.12)' },
                  { label: d.incidents, end: 1, decimals: 0, suffix: '', delta: '\u22122', color: S.amber, icon: '\u{1F6A8}', bg: 'rgba(245,166,35,0.16)' },
                ].map((s, i) => (
                  <Card
                    key={s.label}
                    sx={{
                      p: 3,
                      animation: `${fadeUp}`,
                      animationDelay: `${i * 80}ms`,
                      '&:hover': { transform: 'translateY(-2px)' },
                      transition: 'transform 0.15s',
                    }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                      <Box sx={{ width: 34, height: 34, borderRadius: 10, backgroundColor: s.bg, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 2 }}>{s.icon}</Box>
                      <Badge tone={s.delta.startsWith('+') ? 'green' : 'amber'} dot={false}>{s.delta}</Badge>
                    </Box>
                    <Text sx={{ fontSize: [2, null, 3], fontWeight: 700, color: S.ink, fontFamily: font, mb: '2px', display: 'block' }}>
                      <CountUp end={s.end} decimals={s.decimals} suffix={s.suffix} duration={1400} />
                    </Text>
                    <Text sx={{ fontSize: 0, fontWeight: 600, color: S.muted, fontFamily: font }}>{s.label}</Text>
                  </Card>
                ))}
              </Box>

              <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1.7fr 1fr'], gap: 4, mb: 4 }}>
                <Card sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Box>
                      <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{d.requests}</Text>
                      <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{d.last24h}</Text>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Badge tone="blue" dot={false}>&#9679; {d.requestsBadge}</Badge>
                      <Badge tone="red" dot={false}>&#9679; {d.errorsBadge}</Badge>
                    </Box>
                  </Box>
                  <LineChart values={req} height={150} color="#3B82F6" />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 0, color: S.muted, fontFamily: font, mt: 1 }}>
                    <Text>00:00</Text>
                    <Text>06:00</Text>
                    <Text>12:00</Text>
                    <Text>18:00</Text>
                    <Text>Now</Text>
                  </Box>
                </Card>
                <Card sx={{ p: 4 }}>
                  <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font, mb: 3 }}>{d.errorRate}</Text>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: 100, mb: 2 }}>
                    {errors.map((e, i) => (
                      <Box
                        key={i}
                        sx={{
                          flex: 1,
                          height: `${e * 22}%`,
                          borderRadius: 4,
                          background: i === 5 ? S.red : '#FECACA',
                          transformOrigin: 'bottom',
                          animation: `${barGrow}`,
                          animationDelay: `${200 + i * 50}ms`,
                        }}
                      />
                    ))}
                  </Box>
                  <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{d.errorNote}</Text>
                </Card>
              </Box>

              <Card sx={{ overflow: 'hidden' }}>
                <Box sx={{ px: 4, py: 3, borderBottom: '1px solid', borderColor: S.line, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{d.services}</Text>
                  <Badge tone="green" dot={false}>{d.allOperational}</Badge>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  {servicesList.map((s, i) => {
                    const ok = s.status === 'Operational';
                    return (
                      <Box key={s.name} sx={{ display: 'flex', alignItems: 'center', gap: 3, px: 4, py: 3, borderTop: '1px solid', borderColor: S.line, '&:hover': { backgroundColor: '#FAFBFF' } }}>
                        <Box sx={{ width: 38, height: 38, borderRadius: 11, backgroundColor: ok ? 'rgba(31,169,113,0.12)' : 'rgba(245,166,35,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <StatusDot color={ok ? S.green : S.amber} />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Text sx={{ fontSize: 1, color: S.ink, fontWeight: 700, fontFamily: font }}>{s.name}</Text>
                          <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{['99.99%', '99.98%', '100%', '99.5%'][i]} {d.uptimeNote}</Text>
                        </Box>
                        <Badge tone={ok ? 'green' : 'amber'}>{ok ? d.operational : d.degraded}</Badge>
                      </Box>
                    );
                  })}
                </Box>
              </Card>
            </>
          )}
          {tab !== 0 && (
            <Card sx={{ p: 6, textAlign: 'center', color: S.muted }}>
              <Box sx={{ fontSize: 5, mb: 2, opacity: 0.5 }}>{NAV[tab].icon}</Box>
              <Text sx={{ fontSize: 1, fontWeight: 600, fontFamily: font }}>{nav[tab]}</Text>
            </Card>
          )}
        </Box>
        {tab === 0 && (
          <Box
            key={toast}
            sx={{
              position: 'absolute',
              right: 4,
              bottom: 4,
              zIndex: 5,
              display: ['none', null, 'block'],
            }}>
            <Toast tone="light" onClose={() => setToast((v) => v + 1)}>
              <LiveDot color={toastOk ? S.green : S.amber} size={8} />
              <Box>
                <Text sx={{ display: 'block', fontWeight: 700, mb: '1px' }}>{toastMsg.name}</Text>
                <Text sx={{ display: 'block', color: S.muted, fontWeight: 600 }}>{toastOk ? d.operational : d.degraded} &middot; just now</Text>
              </Box>
            </Toast>
          </Box>
        )}
      </Box>
    </>
  );
}
