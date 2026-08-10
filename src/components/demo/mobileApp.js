/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { PhoneFrame } from './frames';
import { S, font, Card, Badge, Progress, Avatar } from './shared';

export default function MobileAppDemo({ t }) {
  const d = t('caseDemo.mobile');
  const tabs = [
    { key: 'home', icon: '\u2302', label: d.home },
    { key: 'bookings', icon: '\u2606', label: d.bookings },
    { key: 'wallet', icon: '\u25A4', label: d.wallet },
    { key: 'profile', icon: '\u263A', label: d.profile },
  ];
  const [tab, setTab] = useState(0);

  return (
    <PhoneFrame title="we2Tech App">
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Box>
            <Text sx={{ display: 'block', fontSize: 0, color: S.muted, fontFamily: font }}>{d.hello},</Text>
            <Text sx={{ display: 'block', fontWeight: 700, fontSize: 2, color: S.ink, fontFamily: font }}>Amanda</Text>
          </Box>
          <Avatar label="A" color={S.teal} size={38} />
        </Box>

        {tab === 0 && (
          <>
            <Card sx={{ p: 3, mb: 3, background: `linear-gradient(135deg, ${S.teal}, #0E7490)`, border: 'none' }}>
              <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.8)', fontFamily: font }}>{d.balance}</Text>
              <Text sx={{ fontSize: 4, fontWeight: 700, color: '#fff', fontFamily: font, my: '4px' }}>HK$8,420.50</Text>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Badge tone="green" dot={false}>+HK$520</Badge>
                <Badge sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff' }} dot={false}>{d.points}: 1,280</Badge>
              </Box>
            </Card>
            <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 2 }}>
              {d.quickActions}
            </Text>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, mb: 3 }}>
              {[['\u{1F4C5}', 'Book'], ['\u{1F4B3}', 'Pay'], ['\u{1F4CC}', 'QR']].map(([icon, label]) => (
                <Card key={label} sx={{ p: 3, textAlign: 'center' }}>
                  <Box sx={{ fontSize: 3, mb: 1 }}>{icon}</Box>
                  <Text sx={{ fontSize: 0, fontWeight: 600, color: S.ink, fontFamily: font }}>{label}</Text>
                </Card>
              ))}
            </Box>
            <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 2 }}>
              {d.upcoming}
            </Text>
            <Card sx={{ p: 3, mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>Hair &amp; Style</Text>
                <Badge tone="teal">Sat 14 Jun</Badge>
              </Box>
              <Text sx={{ fontSize: 0, color: S.slate, fontFamily: font }}>14:30 &middot; Central</Text>
            </Card>
            <Card sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>Team Dinner</Text>
                <Badge tone="purple">Fri 20 Jun</Badge>
              </Box>
              <Text sx={{ fontSize: 0, color: S.slate, fontFamily: font }}>19:00 &middot; Wan Chai</Text>
            </Card>
          </>
        )}

        {tab === 1 && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {['Hair &amp; Style', 'Wellness Massage', 'Car Detailing'].map((name, i) => (
              <Card key={name} sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{name}</Text>
                  <Badge tone={i === 1 ? 'amber' : 'green'}>{i === 1 ? 'Pending' : 'Confirmed'}</Badge>
                </Box>
                <Text sx={{ fontSize: 0, color: S.slate, fontFamily: font }}>REF BK-{4820 + i * 7}</Text>
              </Card>
            ))}
          </Box>
        )}

        {tab === 2 && (
          <>
            <Card sx={{ p: 3, mb: 3 }}>
              <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, fontFamily: font, mb: 2 }}>{d.balance}</Text>
              <Text sx={{ fontSize: 4, fontWeight: 700, color: S.tealDark, fontFamily: font }}>HK$8,420.50</Text>
              <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font, mt: 1 }}>
                &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; 1234
              </Text>
            </Card>
            <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 2 }}>
              {d.points}
            </Text>
            <Card sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Text sx={{ fontWeight: 700, color: S.ink, fontFamily: font }}>1,280 pts</Text>
                <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>Gold tier</Text>
              </Box>
              <Progress pct={68} color={S.amber} />
            </Card>
          </>
        )}

        {tab === 3 && (
          <Card sx={{ p: 4, textAlign: 'center' }}>
            <Avatar label="A" color={S.teal} size={64} sx={{ mx: 'auto', mb: 2 }} />
            <Text sx={{ fontWeight: 700, fontSize: 2, color: S.ink, fontFamily: font }}>Amanda Lee</Text>
            <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font, mb: 3 }}>Member since 2024</Text>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              <Box sx={{ p: 2, borderRadius: 10, backgroundColor: S.bg }}>
                <Text sx={{ fontWeight: 700, color: S.ink, fontFamily: font }}>12</Text>
                <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{d.bookings}</Text>
              </Box>
              <Box sx={{ p: 2, borderRadius: 10, backgroundColor: S.bg }}>
                <Text sx={{ fontWeight: 700, color: S.ink, fontFamily: font }}>1,280</Text>
                <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{d.points}</Text>
              </Box>
            </Box>
          </Card>
        )}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-around',
          px: 4,
          py: 2,
          backgroundColor: '#fff',
          borderTop: '1px solid',
          borderColor: S.line,
        }}>
        {tabs.map((tb, i) => (
          <Box
            key={tb.key}
            onClick={() => setTab(i)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px',
              fontSize: 0,
              fontWeight: 700,
              color: tab === i ? S.teal : S.muted,
              fontFamily: font,
              cursor: 'pointer',
            }}>
            <Box sx={{ fontSize: 1 }}>{tb.icon}</Box>
            {tab === i ? tb.label : ''}
          </Box>
        ))}
      </Box>
    </PhoneFrame>
  );
}
