/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Badge, LineChart, StatusDot, Avatar } from './shared';

const NAV = [
  { icon: '\u{1F4C8}', label: 'Overview' },
  { icon: '\u{1F465}', label: 'Users' },
  { icon: '\u2699', label: 'Services' },
  { icon: '\u{1F4B3}', label: 'Billing' },
  { icon: '\u{1F6E0}', label: 'Settings' },
];

export default function CloudSystemDemo({ t }) {
  const d = t('caseDemo.cloud');
  const nav = [d.overview, d.users, d.services, d.billing, d.settings];
  const servicesList = t('caseDemo.cloud.serviceList');
  const [tab, setTab] = useState(0);
  const requests = [12, 19, 15, 24, 22, 30, 28, 36, 33, 41, 46, 44];

  return (
    <BrowserFrame url="https://console.demo.we2tech.pro" height={490} brand="CloudOS">
      <Box sx={{ display: 'flex', minHeight: 490 }}>
        <Box
          sx={{
            width: [52, 190],
            flexShrink: 0,
            background: 'linear-gradient(180deg,#0B1B33,#0F2137)',
            color: '#fff',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4, px: 1, pt: 1 }}>
            <Box
              sx={{
                width: 30,
                height: 30,
                borderRadius: 9,
                background: 'linear-gradient(135deg,#22D3EE,#3B82F6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: 1,
                boxShadow: '0 6px 14px rgba(59,130,246,0.4)',
              }}>
              &#9729;
            </Box>
            <Box sx={{ display: ['none', null, 'block'] }}>
              <Text sx={{ fontWeight: 700, fontSize: 1, fontFamily: font, lineHeight: 1.2 }}>CloudOS</Text>
              <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.5)', fontFamily: font }}>we2Tech Ltd.</Text>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {NAV.map((n, i) => (
              <Box
                key={n.label}
                onClick={() => setTab(i)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  px: [0, 3],
                  py: 2,
                  borderRadius: 10,
                  cursor: 'pointer',
                  fontFamily: font,
                  fontWeight: 600,
                  fontSize: 1,
                  justifyContent: ['center', 'flex-start'],
                  color: tab === i ? '#fff' : 'rgba(255,255,255,0.6)',
                  backgroundColor: tab === i ? 'rgba(59,130,246,0.25)' : 'transparent',
                  border: tab === i ? '1px solid rgba(59,130,246,0.5)' : '1px solid transparent',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' },
                }}>
                <Box sx={{ fontSize: 1, display: ['none', null, 'inline'] }}>{n.icon}</Box>
                <Text sx={{ display: ['none', null, 'inline'] }}>{nav[i]}</Text>
                {tab === i && <Box sx={{ ml: 'auto', width: 6, height: 6, borderRadius: '50%', backgroundColor: '#22D3EE', display: ['none', null, 'block'] }} />}
              </Box>
            ))}
          </Box>
          <Box sx={{ mt: 'auto', pt: 3, display: ['none', null, 'flex'], alignItems: 'center', gap: 2, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <Avatar label="K" color={S.blue} size={30} />
            <Box>
              <Text sx={{ fontSize: 0, fontWeight: 700, fontFamily: font }}>K. Wong</Text>
              <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.5)', fontFamily: font }}>Admin</Text>
            </Box>
          </Box>
        </Box>

        <Box sx={{ flex: 1, p: [3, 4], overflow: 'auto' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4, flexWrap: 'wrap', gap: 2 }}>
            <Box>
              <Text sx={{ fontWeight: 700, fontSize: 3, color: S.ink, fontFamily: font }}>{d.title}</Text>
              <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{d.last24h}</Text>
            </Box>
            <Badge tone="green" dot>&#9679; {d.allOperational}</Badge>
          </Box>

          {tab === 0 && (
            <>
              <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr 1fr', null, 'repeat(4, 1fr)'], gap: 3, mb: 4 }}>
                {[
                  { label: d.uptime, value: '99.98%', delta: '+0.2%', color: S.green },
                  { label: d.activeUsers, value: '12,480', delta: '+8.4%', color: S.blue },
                  { label: d.requests, value: '86.2k', delta: '+3.1%', color: S.purple },
                  { label: d.incidents, value: '1', delta: '\u22122', color: S.amber },
                ].map((s) => (
                  <Card key={s.label} sx={{ p: 3, '&:hover': { transform: 'translateY(-2px)' }, transition: 'transform 0.15s' }}>
                    <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, fontFamily: font }}>{s.label}</Text>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', mt: 1 }}>
                      <Text sx={{ fontSize: [2, null, 3], fontWeight: 700, color: S.ink, fontFamily: font }}>{s.value}</Text>
                      <Badge tone={s.delta.startsWith('+') ? 'green' : 'amber'} dot={false}>{s.delta}</Badge>
                    </Box>
                  </Card>
                ))}
              </Box>
              <Card sx={{ p: 4, mb: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>
                    {d.requests} <Text as="span" sx={{ color: S.muted, fontWeight: 500 }}>&middot; {d.last24h}</Text>
                  </Text>
                  <Badge tone="blue" dot={false}>API</Badge>
                </Box>
                <LineChart values={requests} height={130} color="#3B82F6" />
              </Card>
              <Card sx={{ p: 4 }}>
                <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font, mb: 3 }}>{d.services}</Text>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {servicesList.map((s) => (
                    <Box key={s.name} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 3, py: '11px', borderRadius: 12, backgroundColor: '#F7FAFD', border: '1px solid', borderColor: S.line }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 1, color: S.ink, fontWeight: 600, fontFamily: font }}>
                        <Box sx={{ width: 30, height: 30, borderRadius: 9, backgroundColor: s.status === 'Operational' ? 'rgba(31,169,113,0.14)' : 'rgba(245,166,35,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <StatusDot color={s.status === 'Operational' ? S.green : S.amber} />
                        </Box>
                        {s.name}
                      </Box>
                      <Badge tone={s.status === 'Operational' ? 'green' : 'amber'}>{s.status === 'Operational' ? d.operational : d.degraded}</Badge>
                    </Box>
                  ))}
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
      </Box>
    </BrowserFrame>
  );
}
