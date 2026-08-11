/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Btn, Badge, Stepper, SectionLabel } from './shared';
import { AppBar, FootBar } from './chrome';

const SLOTS = ['09:00', '10:30', '12:00', '14:30', '16:00', '18:30', '20:00'];
const BOOKED = [1, 4, 6];

const SERVICE_META = [
  { icon: '\u{1F6AA}', price: 'HK$480', dur: '45 min' },
  { icon: '\u{1F4E6}', price: 'HK$780', dur: '1.5 hr' },
  { icon: '\u{1F3E2}', price: 'HK$1,280', dur: '2 hr' },
  { icon: '\u{1F698}', price: 'HK$1,680', dur: '3 hr' },
];

export function days(locale) {
  const fmt = new Intl.DateTimeFormat(
    locale === 'zh' ? 'zh-HK' : locale === 'zh-cn' ? 'zh-CN' : 'en-GB',
    { weekday: 'short', day: 'numeric', month: 'short' }
  );
  const base = new Date(2026, 7, 17);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(base.getFullYear(), base.getMonth(), base.getDate() + i);
    return { key: d.toISOString().slice(5, 10), label: fmt.format(d), iso: d.toISOString().slice(0, 10) };
  });
}

import { demoUrlFor, brandFor } from './demo-meta';

export default function BookingDemo({ t, locale, item }) {
  const [service, setService] = useState(0);
  const [day, setDay] = useState(0);
  const [slot, setSlot] = useState(null);
  const [done, setDone] = useState(false);
  const d = t('caseDemo.booking');
  const services = t('caseDemo.booking.services');
  const daysList = days(locale);
  const refCode = `BK-${4810 + service * 37 + day * 3}`;
  const meta = SERVICE_META[service];

  return (
    <BrowserFrame url={demoUrlFor(item, 'https://book.demo.we2tech.pro')} height={540} brand={brandFor(item, 'SpaceBase')}>
      <AppBar
        brand={brandFor(item, 'SpaceBase')}
        sub={d.title}
        grad="linear-gradient(135deg,#003366,#005f5f)"
        nav={[d.stepService, d.stepDateTime, d.confirm]}
        active={done ? 2 : slot ? 1 : day ? 1 : 0}
        right={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Badge tone="green" dot>&#9679; {d.booked} 12 today</Badge>
          </Box>
        }
      />

      <Box sx={{ p: [4, null, 5] }}>
        <Box sx={{ maxWidth: 640, mx: 'auto', mb: 4 }}>
          <Stepper steps={[d.stepService, d.stepDateTime, d.confirm]} active={done ? 3 : slot ? 2 : day ? 1 : 0} />
        </Box>

        {done ? (
          <Card sx={{ p: 5, textAlign: 'center', maxWidth: 520, mx: 'auto', mt: 2 }}>
            <Box
              sx={{
                width: 72,
                height: 72,
                mx: 'auto',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(31,169,113,0.16), rgba(31,169,113,0.05))',
                color: S.green,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 5,
                boxShadow: 'inset 0 0 0 1px rgba(31,169,113,0.3)',
              }}>
              &#10003;
            </Box>
            <Text sx={{ display: 'block', mt: 3, fontSize: 3, fontWeight: 700, color: S.ink, fontFamily: font }}>
              {d.confirmed}
            </Text>
            <Text sx={{ display: 'block', mt: 2, fontSize: 1, color: S.slate, fontFamily: font, lineHeight: 1.7 }}>
              {services[service]} &middot; {daysList[day].label} &middot; {slot}
            </Text>
            <Box sx={{ mt: 3, display: 'inline-block', px: 5, py: 3, borderRadius: 12, backgroundColor: '#F0F6F6', border: '1px dashed', borderColor: S.teal }}>
              <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{d.code}</Text>
              <Text sx={{ fontSize: 2, fontWeight: 700, color: S.tealDark, fontFamily: 'Menlo, monospace', letterSpacing: '1px' }}>{refCode}</Text>
            </Box>
            <Btn tone="ghost" sx={{ mt: 4, width: '100%' }} onClick={() => { setDone(false); setSlot(null); setDay(0); }}>
              &#8592; {d.stepService}
            </Btn>
          </Card>
        ) : (
          <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1.25fr 1fr'], gap: 4 }}>
            <Card sx={{ p: 4 }}>
              <SectionLabel>{d.selectService}</SectionLabel>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {services.map((s, i) => (
                  <Box
                    key={s}
                    onClick={() => setService(i)}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      px: 3,
                      py: '12px',
                      borderRadius: 12,
                      cursor: 'pointer',
                      border: '1.5px solid',
                      borderColor: service === i ? S.teal : S.line,
                      backgroundColor: service === i ? 'rgba(0,139,139,0.05)' : '#fff',
                      transition: 'all 0.15s',
                      '&:hover': { borderColor: service === i ? S.teal : '#B9CBDD' },
                    }}>
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: 11,
                        background: service === i ? 'linear-gradient(135deg,#00C79A,#008B8B)' : '#EEF3F8',
                        color: service === i ? '#fff' : S.slate,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 2,
                        flexShrink: 0,
                      }}>
                      {SERVICE_META[i].icon}
                    </Box>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{s}</Text>
                      <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{SERVICE_META[i].dur}</Text>
                    </Box>
                    <Text sx={{ fontWeight: 700, fontSize: 1, color: service === i ? S.tealDark : S.slate, fontFamily: font }}>
                      {SERVICE_META[i].price}
                    </Text>
                    {service === i && (
                      <Box sx={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: S.teal, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 0 }}>&#10003;</Box>
                    )}
                  </Box>
                ))}
              </Box>

              <SectionLabel sx={{ mt: 4 }}>{d.selectDate}</SectionLabel>
              <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 1 }}>
                {daysList.map((dayItem, i) => {
                  const short = dayItem.label.replace(',', ' ').split(' ').slice(0, 2).join(' ');
                  const num = dayItem.label.match(/\d+/)?.[0] || dayItem.label;
                  return (
                    <Box
                      key={dayItem.key}
                      onClick={() => setDay(i)}
                      sx={{
                        flexShrink: 0,
                        minWidth: 62,
                        px: 2,
                        py: 2,
                        borderRadius: 12,
                        textAlign: 'center',
                        cursor: 'pointer',
                        border: '1.5px solid',
                        borderColor: day === i ? S.teal : S.line,
                        backgroundColor: day === i ? S.teal : '#fff',
                        color: day === i ? '#fff' : S.ink,
                        fontFamily: font,
                        transition: 'all 0.15s',
                      }}>
                      <Text sx={{ fontSize: 0, fontWeight: 600, display: 'block', textTransform: 'capitalize' }}>{short}</Text>
                      <Text sx={{ fontSize: 1, fontWeight: 700, display: 'block', mt: '2px' }}>{num}</Text>
                    </Box>
                  );
                })}
              </Box>
            </Card>

            <Card sx={{ p: 4, display: 'flex', flexDirection: 'column' }}>
              <SectionLabel>{d.selectTime}</SectionLabel>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, mb: 4 }}>
                {SLOTS.map((s, i) => {
                  const taken = BOOKED.includes(i);
                  const selected = slot === s;
                  return (
                    <Box
                      key={s}
                      onClick={() => !taken && setSlot(s)}
                      sx={{
                        px: 3,
                        py: 2,
                        textAlign: 'center',
                        borderRadius: 11,
                        cursor: taken ? 'not-allowed' : 'pointer',
                        fontFamily: font,
                        fontWeight: 700,
                        fontSize: 1,
                        border: '1.5px solid',
                        borderColor: selected ? S.teal : S.line,
                        backgroundColor: selected ? S.teal : taken ? '#F3F5F9' : '#fff',
                        color: selected ? '#fff' : taken ? S.faint : S.ink,
                        textDecoration: taken ? 'line-through' : 'none',
                        transition: 'all 0.15s',
                        '&:hover': { borderColor: selected ? S.teal : taken ? S.line : '#B9CBDD' },
                      }}>
                      {s}
                      {taken && (
                        <Text as="span" sx={{ ml: 1, fontSize: 0, fontWeight: 600 }}>&#9679;</Text>
                      )}
                    </Box>
                  );
                })}
              </Box>

              <Box sx={{ mt: 'auto', p: 4, borderRadius: 14, backgroundColor: '#F6FAFD', border: '1px solid', borderColor: S.line }}>
                <SectionLabel>{d.yourSelection}</SectionLabel>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 1, fontFamily: font }}>
                    <Text sx={{ color: S.slate }}>{d.service}</Text>
                    <Text sx={{ fontWeight: 700, color: S.ink }}>{services[service]}</Text>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 1, fontFamily: font }}>
                    <Text sx={{ color: S.slate }}>{d.date}</Text>
                    <Text sx={{ fontWeight: 700, color: S.ink }}>{daysList[day].label}</Text>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 1, fontFamily: font }}>
                    <Text sx={{ color: S.slate }}>{d.time}</Text>
                    <Text sx={{ fontWeight: 700, color: S.ink }}>{slot || '\u2014'}</Text>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 1, fontFamily: font, borderTop: '1px dashed', borderColor: '#D3E1EE', pt: 2 }}>
                    <Text sx={{ color: S.slate, fontWeight: 700 }}>{d.service}</Text>
                    <Text sx={{ fontWeight: 700, color: S.tealDark, fontSize: 2 }}>{SERVICE_META[service].price}</Text>
                  </Box>
                </Box>
                <Btn tone="primary" sx={{ width: '100%' }} disabled={!slot} onClick={() => setDone(true)}>
                  {d.confirm} {slot && `\u00B7 ${SERVICE_META[service].price}`}
                </Btn>
              </Box>
            </Card>
          </Box>
        )}
      </Box>

      <FootBar left="SpaceBase Booking" right="Syncs in real time" />
    </BrowserFrame>
  );
}
