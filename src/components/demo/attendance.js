/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Badge, Btn, Progress, Avatar, SectionLabel } from './shared';

export default function AttendanceDemo({ t }) {
  const d = t('caseDemo.attendance');
  const sessions = t('caseDemo.attendance.sessions').map((s) => ({ ...s, checked: parseInt(s.checked, 10), expected: parseInt(s.expected, 10) }));
  const [list, setList] = useState(sessions);

  const checkIn = (i) =>
    setList((ls) => ls.map((s, j) => (j === i && s.checked < s.expected ? { ...s, checked: s.checked + 1 } : s)));

  const totalChecked = list.reduce((a, s) => a + s.checked, 0);
  const totalExpected = list.reduce((a, s) => a + s.expected, 0);

  return (
    <BrowserFrame url="https://attendance.demo.we2tech.pro" height={486} brand="SweatLab">
      <Box sx={{ px: 4, py: 3, background: 'linear-gradient(135deg,#111827,#1F2937)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ width: 32, height: 32, borderRadius: 10, background: 'linear-gradient(135deg,#F97316,#EA580C)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 1 }}>&#128170;</Box>
          <Box>
            <Text sx={{ fontWeight: 700, fontSize: 1, fontFamily: font, lineHeight: 1.2 }}>SweatLab</Text>
            <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.6)', fontFamily: font }}>Central Studio</Text>
          </Box>
        </Box>
        <Badge sx={{ backgroundColor: 'rgba(249,115,22,0.2)', color: '#FDBA74', border: '1px solid rgba(249,115,22,0.4)' }} dot>&#9679; {d.live}</Badge>
      </Box>

      <Box sx={{ p: 4 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr 1fr', null, 'repeat(4, 1fr)'], gap: 3, mb: 4 }}>
          {[
            { label: d.today, value: String(totalChecked), sub: `of ${totalExpected}`, color: S.orange, icon: '\u{1F4CA}' },
            { label: d.expected, value: String(totalExpected), sub: 'today', color: S.blue, icon: '\u{1F465}' },
            { label: 'Check-ins', value: String(totalChecked), sub: '+12% vs last wk', color: S.green, icon: '\u2705' },
            { label: 'No-shows', value: '3', sub: '\u221233%', color: S.red, icon: '\u26A0' },
          ].map((s) => (
            <Card key={s.label} sx={{ p: 3, '&:hover': { transform: 'translateY(-2px)' }, transition: 'transform 0.15s' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, fontFamily: font }}>{s.label}</Text>
                <Box sx={{ fontSize: 1 }}>{s.icon}</Box>
              </Box>
              <Text sx={{ fontSize: [2, null, 3], fontWeight: 700, color: s.color, fontFamily: font }}>{s.value}</Text>
              <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{s.sub}</Text>
            </Card>
          ))}
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1.4fr 1fr'], gap: 4 }}>
          <Box>
            <SectionLabel>{d.today}</SectionLabel>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {list.map((s, i) => {
                const pct = Math.round((s.checked / s.expected) * 100);
                const full = s.checked >= s.expected;
                const colors = [S.orange, S.blue, S.purple, S.pink];
                return (
                  <Card key={s.name} sx={{ p: 3, '&:hover': { boxShadow: '0 10px 26px rgba(15,33,55,0.1)' }, transition: 'all 0.15s' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                      <Avatar label={s.name.slice(0, 1)} color={colors[i % 4]} size={38} />
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{s.name}</Text>
                          <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>
                            <Text as="span" sx={{ fontWeight: 700, color: full ? S.green : S.teal }}>{s.checked}</Text> / {s.expected} {d.checkedIn.toLowerCase()}
                          </Text>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ flex: 1 }}>
                            <Progress pct={pct} color={full ? S.green : S.orange} height={8} />
                          </Box>
                          <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, fontFamily: font, minWidth: 32, textAlign: 'right' }}>{pct}%</Text>
                        </Box>
                      </Box>
                      <Btn
                        tone={full ? 'ghost' : 'dark'}
                        sx={{ px: 3, py: '8px', fontSize: 0, whiteSpace: 'nowrap', backgroundColor: full ? '#fff' : S.orange, boxShadow: full ? 'none' : '0 6px 14px rgba(249,115,22,0.35)' }}
                        disabled={full}
                        onClick={() => checkIn(i)}>
                        {full ? '\u2713' : d.checkIn}
                      </Btn>
                    </Box>
                  </Card>
                );
              })}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Card sx={{ p: 4, textAlign: 'center', background: 'linear-gradient(150deg,#FFF7ED,#FFF1E0)', border: '1px solid #FDE4C2' }}>
              <SectionLabel sx={{ color: '#9A3412' }}>{d.checkIn}</SectionLabel>
              <Box
                sx={{
                  width: 132,
                  height: 132,
                  mx: 'auto',
                  borderRadius: '50%',
                  border: '2px dashed',
                  borderColor: S.orange,
                  background: 'repeating-conic-gradient(rgba(249,115,22,0.08) 0deg 20deg, rgba(255,255,255,0.8) 20deg 40deg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: S.orange,
                  fontSize: 5,
                  mb: 3,
                }}>
                &#128247;
              </Box>
              <Text sx={{ fontSize: 0, color: '#9A3412', fontFamily: font, mb: 2 }}>
                {d.live} &middot; {totalChecked}/{totalExpected}
              </Text>
              <Progress pct={Math.round((totalChecked / totalExpected) * 100)} color={S.orange} height={9} />
            </Card>
            <Card sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Box sx={{ fontSize: 2 }}>&#127944;</Box>
                <Box sx={{ flex: 1 }}>
                  <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>Scan &amp; go</Text>
                  <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>Members tap the kiosk to check in</Text>
                </Box>
                <Badge tone="orange" dot={false}>300ms</Badge>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
    </BrowserFrame>
  );
}
