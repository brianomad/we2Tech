/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Badge, Btn, Progress, Avatar } from './shared';

export default function AttendanceDemo({ t }) {
  const d = t('caseDemo.attendance');
  const sessions = t('caseDemo.attendance.sessions').map((s) => ({ ...s, checked: parseInt(s.checked, 10), expected: parseInt(s.expected, 10) }));
  const [list, setList] = useState(sessions);

  const checkIn = (i) =>
    setList((ls) => ls.map((s, j) => (j === i && s.checked < s.expected ? { ...s, checked: s.checked + 1 } : s)));

  return (
    <BrowserFrame url="https://attendance.demo.we2tech.pro" height={470}>
      <Box sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4, flexWrap: 'wrap', gap: 2 }}>
          <Text sx={{ fontWeight: 700, fontSize: 3, color: S.ink, fontFamily: font }}>{d.title}</Text>
          <Badge tone="green">&#9679; {d.live}</Badge>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1.4fr 1fr'], gap: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font }}>
              {d.today}
            </Text>
            {list.map((s, i) => {
              const pct = Math.round((s.checked / s.expected) * 100);
              const full = s.checked >= s.expected;
              return (
                <Card key={s.name} sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Avatar label={s.name.slice(0, 1)} color={[S.teal, S.blue, S.purple, S.pink][i % 4]} size={36} />
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{s.name}</Text>
                        <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>
                          <Text as="span" sx={{ fontWeight: 700, color: full ? S.green : S.teal }}>{s.checked}</Text> / {s.expected} {d.checkedIn.toLowerCase()}
                        </Text>
                      </Box>
                      <Progress pct={pct} color={full ? S.green : S.teal} height={7} />
                    </Box>
                    <Btn
                      tone={full ? 'ghost' : 'dark'}
                      sx={{ px: 3, py: '7px', fontSize: 0, whiteSpace: 'nowrap' }}
                      disabled={full}
                      onClick={() => checkIn(i)}>
                      {d.checkIn}
                    </Btn>
                  </Box>
                </Card>
              );
            })}
          </Box>
          <Card sx={{ p: 4, alignSelf: 'start', textAlign: 'center' }}>
            <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 3 }}>
              {d.checkIn}
            </Text>
            <Box
              sx={{
                width: 150,
                height: 150,
                mx: 'auto',
                borderRadius: 16,
                border: '1px dashed',
                borderColor: S.teal,
                background: 'repeating-linear-gradient(45deg, #F0F6F6 0 8px, #FAFCFC 8px 16px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: S.teal,
                fontSize: 5,
                mb: 3,
              }}>
              &#8987;
            </Box>
            <Text sx={{ fontSize: 0, color: S.slate, fontFamily: font, mb: 3 }}>
              {d.live} &middot; {list.reduce((a, s) => a + s.checked, 0)}/{list.reduce((a, s) => a + s.expected, 0)}
            </Text>
            <Progress pct={75} color={S.teal} />
          </Card>
        </Box>
      </Box>
    </BrowserFrame>
  );
}
