/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { S, font, Card, Badge, Progress, Avatar, SectionLabel } from './shared';
import { Toast } from './anim';

const TABS = [
  { key: 'home', icon: '\u2302', label: 'Home' },
  { key: 'bookings', icon: '\u2606', label: 'Bookings' },
  { key: 'wallet', icon: '\u25A4', label: 'Wallet' },
  { key: 'profile', icon: '\u263A', label: 'Profile' },
];

const UPCOMING_DEFAULT = [
  { name: 'HIIT Circuit', day: 'Sat', date: '14', time: '14:30', place: 'Central', status: 'Confirmed', tone: 'green', grad: 'linear-gradient(135deg,#EC4899,#DB2777)' },
  { name: 'Yoga Flow', day: 'Fri', date: '20', time: '19:00', place: 'Wan Chai', status: 'Booked', tone: 'purple', grad: 'linear-gradient(135deg,#0EA5E9,#0284C7)' },
];
const BOOKINGS_DEFAULT = [
  { name: 'HIIT Circuit', date: 'Sat 14 Jun', status: 'Confirmed', tone: 'green' },
  { name: 'Wellness Massage', date: 'Tue 17 Jun', status: 'Pending', tone: 'amber' },
  { name: 'Car Detailing', date: 'Fri 20 Jun', status: 'Confirmed', tone: 'green' },
];
const TRANSACTIONS_DEFAULT = [
  ['Class pass', '+HK$880', 'in'],
  ['Massage', '\u2212HK$520', 'out'],
  ['Referral bonus', '+HK$150', 'in'],
];

import { brandFor } from './demo-meta';
import { contentFor } from './case-content';

export default function MobileAppDemo({ t, locale, item }) {
  const d = contentFor(t, locale, item, 'mobile');
  const tabs = TABS.map((tb) => ({ ...tb, label: d[tb.key] }));
  const upcomingList = d.upcomingList || UPCOMING_DEFAULT;
  const bookingsList = d.bookingsList || BOOKINGS_DEFAULT;
  const transactionList = d.transactionsList || TRANSACTIONS_DEFAULT;
  const [tab, setTab] = useState(0);
  const [toast, setToast] = useState(null);

  const notify = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  };

  return (
    <>
      <Box sx={{ p: 3, pb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Box>
            <Text sx={{ display: 'block', fontSize: 0, color: S.muted, fontFamily: font }}>{d.hello},</Text>
            <Text sx={{ display: 'block', fontWeight: 700, fontSize: 2, color: S.ink, fontFamily: font }}>Amanda</Text>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ width: 32, height: 32, borderRadius: 10, backgroundColor: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 1 }}>&#128276;</Box>
            <Avatar label="A" color="#7C3AED" size={36} />
          </Box>
        </Box>

        {tab === 0 && (
          <>
            <Card sx={{ p: 3, mb: 3, background: 'linear-gradient(135deg,#7C3AED,#A855F7)', border: 'none', boxShadow: '0 14px 30px rgba(124,58,237,0.35)' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box>
                  <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.85)', fontFamily: font }}>{d.balance}</Text>
                  <Text sx={{ fontSize: 4, fontWeight: 700, color: '#fff', fontFamily: font, my: '4px' }}>HK$8,420.50</Text>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Badge sx={{ backgroundColor: 'rgba(255,255,255,0.22)', color: '#fff' }} dot={false}>{d.thisWeek}</Badge>
                  </Box>
                </Box>
                <Badge sx={{ backgroundColor: 'rgba(255,255,255,0.22)', color: '#fff' }} dot={false}>{d.points}: 1,280</Badge>
              </Box>
            </Card>

            <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 2 }}>
              {d.quickActions}
            </Text>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, mb: 3 }}>
              {d.quickActionsList.map((label, i) => (
                <Card key={label} onClick={() => notify(`\u2713 ${label}`)} sx={{ p: 3, textAlign: 'center', cursor: 'pointer', '&:active': { transform: 'scale(0.96)' } }}>
                  <Box sx={{ fontSize: 3, mb: 1 }}>{['\u{1F4C5}', '\u{1F4B3}', '\u{1F4CC}', '\u{1F3CB}', '\u{1F4C8}', '\u{1F4DD}'][i % 6]}</Box>
                  <Text sx={{ fontSize: 0, fontWeight: 600, color: S.ink, fontFamily: font }}>{label}</Text>
                </Card>
              ))}
            </Box>

            <Card sx={{ p: 3, mb: 3, background: 'linear-gradient(135deg,#0F2137,#1B2C45)', border: 'none' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Text sx={{ fontWeight: 700, fontSize: 1, color: '#fff', fontFamily: font }}>{d.todayActivity}</Text>
                <Badge tone="purple" dot={false}>68%</Badge>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-end', height: 56 }}>
                {[38, 55, 42, 70, 58, 84, 66].map((h, i) => (
                  <Box key={i} sx={{ flex: 1, height: `${h}%`, borderRadius: 6, background: i === 5 ? 'linear-gradient(180deg,#A855F7,#7C3AED)' : 'rgba(255,255,255,0.16)' }} />
                ))}
              </Box>
            </Card>

            <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 2 }}>
              {d.upcoming}
            </Text>
            {upcomingList.map((u, i) => (
              <Card key={`${u.name}-${i}`} sx={{ p: 3, mb: i < upcomingList.length - 1 ? 2 : 0, display: 'flex', alignItems: 'center', gap: 3 }}>
                <Box sx={{ width: 48, height: 48, borderRadius: 13, background: u.grad || 'linear-gradient(135deg,#EC4899,#DB2777)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: font, flexShrink: 0 }}>
                  <Text sx={{ fontSize: 0, fontWeight: 700 }}>{u.day}</Text>
                  <Text sx={{ fontSize: 1, fontWeight: 700 }}>{u.date}</Text>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{u.name}</Text>
                  <Text sx={{ fontSize: 0, color: S.slate, fontFamily: font }}>{u.time} &middot; {u.place}</Text>
                </Box>
                <Badge tone={u.tone} dot={false}>{u.status}</Badge>
              </Card>
            ))}
          </>
        )}

        {tab === 1 && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {bookingsList.map((item) => (
              <Card key={item.name} sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{item.name}</Text>
                  <Badge tone={item.tone} dot={false}>{item.status}</Badge>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 0, color: S.slate, fontFamily: font }}>
                  <Text>{item.date}</Text>
                  <Text sx={{ fontFamily: 'Menlo, monospace' }}>BK-4821</Text>
                </Box>
              </Card>
            ))}
          </Box>
        )}

        {tab === 2 && (
          <>
            <Card sx={{ p: 3, mb: 3, background: 'linear-gradient(135deg,#111827,#374151)', border: 'none' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Text sx={{ fontSize: 0, fontWeight: 700, color: 'rgba(255,255,255,0.6)', fontFamily: font }}>{d.balance}</Text>
                <Badge sx={{ backgroundColor: 'rgba(255,255,255,0.18)', color: '#fff' }} dot={false}>&#9679;&#9679;&#9679;&#9679; 1234</Badge>
              </Box>
              <Text sx={{ fontSize: 4, fontWeight: 700, color: '#fff', fontFamily: font }}>HK$8,420.50</Text>
            </Card>
            <SectionLabel>{d.points}</SectionLabel>
            <Card sx={{ p: 3, mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Text sx={{ fontWeight: 700, color: S.ink, fontFamily: font }}>1,280 pts</Text>
                <Badge tone="amber" dot={false}>&#9733; {d.goldTier}</Badge>
              </Box>
              <Progress pct={68} color="#D97706" />
              <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font, mt: 1 }}>520 {d.toNextTier}</Text>
            </Card>
            <SectionLabel>{d.transactions}</SectionLabel>
            <Card sx={{ p: 2 }}>
              {transactionList.map(([label, amt, type], i) => (
                <Box key={label} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, py: 2, borderBottom: '1px solid', borderColor: S.line, ':last-child': { border: 'none' } }}>
                  <Text sx={{ fontWeight: 600, fontSize: 1, color: S.ink, fontFamily: font }}>{label}</Text>
                  <Text sx={{ fontWeight: 700, fontSize: 1, color: type === 'in' ? S.green : S.slate, fontFamily: font }}>{amt}</Text>
                </Box>
              ))}
            </Card>
          </>
        )}

        {tab === 3 && (
          <Card sx={{ p: 4, textAlign: 'center' }}>
            <Avatar label="A" color="#7C3AED" size={68} sx={{ mx: 'auto', mb: 2 }} />
            <Text sx={{ fontWeight: 700, fontSize: 2, color: S.ink, fontFamily: font }}>Amanda Lee</Text>
            <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font, mb: 3 }}>{d.memberSince}</Text>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              <Box sx={{ p: 3, borderRadius: 12, backgroundColor: '#F5F3FF', border: '1px solid #EDE9FE' }}>
                <Text sx={{ fontWeight: 700, color: '#6D28D9', fontFamily: font, fontSize: 2 }}>12</Text>
                <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{d.bookings}</Text>
              </Box>
              <Box sx={{ p: 3, borderRadius: 12, backgroundColor: '#FFF7E6', border: '1px solid #FBE3B8' }}>
                <Text sx={{ fontWeight: 700, color: '#92400E', fontFamily: font, fontSize: 2 }}>1,280</Text>
                <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{d.points}</Text>
              </Box>
            </Box>
          </Card>
        )}
      </Box>

      {toast && (
        <Box sx={{ position: 'absolute', right: 3, bottom: 14, zIndex: 10, width: 'max-content', maxWidth: '92%' }}>
          <Toast tone="light">
            <Box sx={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(124,58,237,0.14)', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&#10003;</Box>
            <Text sx={{ fontWeight: 700 }}>{toast}</Text>
          </Toast>
        </Box>
      )}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          px: 4,
          py: 2,
          mt: 2,
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
              color: tab === i ? '#7C3AED' : S.muted,
              fontFamily: font,
              cursor: 'pointer',
            }}>
            <Box sx={{ fontSize: 1, opacity: tab === i ? 1 : 0.6 }}>{tb.icon}</Box>
            <Text sx={{ fontSize: 0 }}>{tb.label}</Text>
            {tab === i && <Box sx={{ width: 16, height: 3, borderRadius: 99, backgroundColor: '#7C3AED', mt: '2px' }} />}
          </Box>
        ))}
      </Box>
    </>
  );
}
