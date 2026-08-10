/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Btn, Badge, Stepper, StatusDot } from './shared';

const SLOTS = ['09:00', '10:30', '12:00', '14:30', '16:00', '18:30', '20:00'];
const BOOKED = [1, 4, 6];

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

export default function BookingDemo({ t, locale }) {
  const [service, setService] = useState(0);
  const [day, setDay] = useState(0);
  const [slot, setSlot] = useState(null);
  const [done, setDone] = useState(false);
  const d = t('caseDemo.booking');
  const services = t('caseDemo.booking.services');
  const daysList = days(locale);

  const refCode = `BK-${4810 + service * 37 + day * 3}`;

  return (
    <BrowserFrame url="https://book.demo.we2tech.pro" height={470}>
      <Box sx={{ p: 4 }}>
        <Stepper steps={[d.stepService, d.stepDateTime, d.confirm]} active={done ? 2 : slot ? 2 : day ? 1 : 0} />
        {done ? (
          <Card sx={{ mt: 4, p: 5, textAlign: 'center' }}>
            <Box
              sx={{
                width: 64,
                height: 64,
                mx: 'auto',
                borderRadius: '50%',
                backgroundColor: 'rgba(31,169,113,0.14)',
                color: S.green,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 5,
              }}>
              &#10003;
            </Box>
            <Text sx={{ display: 'block', mt: 3, fontSize: 3, fontWeight: 700, color: S.ink, fontFamily: font }}>
              {d.confirmed}
            </Text>
            <Text sx={{ display: 'block', mt: 2, fontSize: 1, color: S.slate, fontFamily: font }}>
              {services[service]} &middot; {daysList[day].label} &middot; {slot}
            </Text>
            <Box sx={{ mt: 3, display: 'inline-block', px: 4, py: 2, borderRadius: 10, backgroundColor: '#F0F6F6', border: '1px dashed', borderColor: S.teal }}>
              <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{d.code}</Text>
              <Text sx={{ fontSize: 2, fontWeight: 700, color: S.tealDark, fontFamily: 'Menlo, monospace' }}>{refCode}</Text>
            </Box>
          </Card>
        ) : (
          <Box sx={{ mt: 4, display: 'grid', gridTemplateColumns: ['1fr', null, '1.2fr 1fr'] , gap: 4 }}>
            <Card sx={{ p: 4 }}>
              <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 2 }}>
                {d.selectService}
              </Text>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {services.map((s, i) => (
                  <Box
                    key={s}
                    onClick={() => setService(i)}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      px: 3,
                      py: '12px',
                      borderRadius: 10,
                      cursor: 'pointer',
                      border: '1px solid',
                      borderColor: service === i ? S.teal : S.line,
                      backgroundColor: service === i ? 'rgba(0,139,139,0.06)' : '#fff',
                      fontWeight: 600,
                      fontFamily: font,
                      color: S.ink,
                    }}>
                    <Text>{s}</Text>
                    {service === i && <Badge tone="teal">{d.stepService}</Badge>}
                  </Box>
                ))}
              </Box>
              <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mt: 4, mb: 2 }}>
                {d.selectDate}
              </Text>
              <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 1 }}>
                {daysList.map((dayItem, i) => (
                  <Box
                    key={dayItem.key}
                    onClick={() => setDay(i)}
                    sx={{
                      flexShrink: 0,
                      px: 3,
                      py: 2,
                      borderRadius: 10,
                      textAlign: 'center',
                      cursor: 'pointer',
                      border: '1px solid',
                      borderColor: day === i ? S.teal : S.line,
                      backgroundColor: day === i ? S.teal : '#fff',
                      color: day === i ? '#fff' : S.ink,
                      fontFamily: font,
                    }}>
                    <Text sx={{ fontSize: 0, fontWeight: 600, display: 'block' }}>{dayItem.label}</Text>
                  </Box>
                ))}
              </Box>
            </Card>
            <Card sx={{ p: 4, display: 'flex', flexDirection: 'column' }}>
              <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 2 }}>
                {d.selectTime}
              </Text>
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
                        borderRadius: 10,
                        cursor: taken ? 'not-allowed' : 'pointer',
                        fontFamily: font,
                        fontWeight: 600,
                        fontSize: 1,
                        border: '1px solid',
                        borderColor: selected ? S.teal : S.line,
                        backgroundColor: selected ? S.teal : taken ? '#F3F5F9' : '#fff',
                        color: selected ? '#fff' : taken ? S.faint : S.ink,
                        textDecoration: taken ? 'line-through' : 'none',
                      }}>
                      {s}
                    </Box>
                  );
                })}
              </Box>
              <Box sx={{ mt: 'auto', p: 3, borderRadius: 10, backgroundColor: '#F7FAFD', border: '1px solid', borderColor: S.line }}>
                <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 2 }}>
                  {d.yourSelection}
                </Text>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4px 12px', fontSize: 1, color: S.slate, fontFamily: font, mb: 3 }}>
                  <Text sx={{ fontWeight: 700, color: S.ink }}>{d.service}</Text>
                  <Text>{services[service]}</Text>
                  <Text sx={{ fontWeight: 700, color: S.ink }}>{d.date}</Text>
                  <Text>{daysList[day].label}</Text>
                  <Text sx={{ fontWeight: 700, color: S.ink }}>{d.time}</Text>
                  <Text>{slot || '\u2014'}</Text>
                </Box>
                <Btn
                  tone="primary"
                  sx={{ width: '100%' }}
                  disabled={!slot}
                  onClick={() => setDone(true)}>
                  {d.confirm}
                </Btn>
              </Box>
            </Card>
          </Box>
        )}
        <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 2, color: S.muted, fontSize: 0, fontFamily: font }}>
          <StatusDot color={S.green} /> {services[service]} &middot; {daysList[day].label}
        </Box>
      </Box>
    </BrowserFrame>
  );
}
