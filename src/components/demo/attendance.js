/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState, useEffect } from 'react';
import { S, font, Card, Badge, Btn, Progress, Avatar, SectionLabel } from './shared';
import { Icon } from './icons';
import { AppBar, Skeleton, LoadingRows } from './chrome';

import { brandFor } from './demo-meta';
import { contentFor } from './case-content';

export default function AttendanceDemo({ t, locale, item }) {
  const d = contentFor(t, locale, item, 'attendance');
  const sessions = d.sessions.map((s) => ({ ...s, checked: parseInt(s.checked, 10), expected: parseInt(s.expected, 10) }));
  const [list, setList] = useState(sessions);
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const checkIn = (i) =>
    setList((ls) => ls.map((s, j) => (j === i && s.checked < s.expected ? { ...s, checked: s.checked + 1 } : s)));

  const totalChecked = list.reduce((a, s) => a + s.checked, 0);
  const totalExpected = list.reduce((a, s) => a + s.expected, 0);

  return (
    <>
      <AppBar
        brand={brandFor(item, 'SweatLab')}
        sub={d.title}
        grad="linear-gradient(135deg,#111827,#1F2937)"
        nav={[d.today, d.expected, d.checkIn]}
        active={0}
        right={
          <Badge sx={{ backgroundColor: 'rgba(249,115,22,0.2)', color: '#FDBA74', border: '1px solid rgba(249,115,22,0.4)' }} dot>{d.live}</Badge>
        }
      />

      <Box sx={{ p: [3, null, 4], position: 'relative' }}>
        {loading ? (
          <>
            <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr 1fr', null, 'repeat(4, 1fr)'], gap: 3, mb: 4, '@container (max-width: 640px)': { gridTemplateColumns: '1fr 1fr' } }}>
              {[0, 1, 2, 3].map((i) => (
                <Card key={i} sx={{ p: 3 }}>
                  <Skeleton w="50%" h={9} />
                  <Skeleton w="60%" h={18} sx={{ mt: 2 }} />
                  <Skeleton w="40%" h={8} sx={{ mt: 1 }} />
                </Card>
              ))}
            </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1.4fr 1fr'], gap: 4, '@container (max-width: 700px)': { gridTemplateColumns: '1fr' } }}>
              <LoadingRows rows={4} />
              <Skeleton w="100%" h={200} r={12} />
            </Box>
          </>
        ) : (
          <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1.4fr 1fr'], gap: 4, '@container (max-width: 700px)': { gridTemplateColumns: '1fr' } }}>
            <Box>
              <SectionLabel>{d.today}</SectionLabel>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {list.map((s, i) => {
                  const pct = Math.round((s.checked / s.expected) * 100);
                  const full = s.checked >= s.expected;
                  const colors = [S.orange, S.blue, S.purple, S.pink];
                  return (
                    <Card key={s.name} sx={{ p: 3, cursor: 'pointer', '&:hover': { boxShadow: '0 10px 26px rgba(15,33,55,0.1)' }, transition: 'all 0.15s' }} onClick={() => setDetail(i)}>
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
                          onClick={(e) => { e.stopPropagation(); checkIn(i); }}>
                          {full ? <Icon name="check" size={14} /> : d.checkIn}
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
                    mb: 3,
                  }}>
                  <Icon name="camera" size={52} />
                </Box>
                <Text sx={{ fontSize: 0, color: '#9A3412', fontFamily: font, mb: 2 }}>
                  {d.live} &middot; {totalChecked}/{totalExpected}
                </Text>
                <Progress pct={Math.round((totalChecked / totalExpected) * 100)} color={S.orange} height={9} />
              </Card>
              <Card sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Box sx={{ width: 40, height: 40, borderRadius: 11, backgroundColor: 'rgba(59,130,246,0.1)', color: S.blue, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="users" size={22} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{d.scanAndGo}</Text>
                    <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{d.scanNote}</Text>
                  </Box>
                  <Badge tone="orange" dot={false}>300ms</Badge>
                </Box>
              </Card>
            </Box>
          </Box>
        )}

        {detail !== null && (
          <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 20, p: 3 }}>
            <Card sx={{ p: 4, maxWidth: 400, width: '100%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Text sx={{ fontWeight: 700, fontSize: 2, color: S.ink, fontFamily: font }}>{list[detail].name}</Text>
                <Box onClick={() => setDetail(null)} sx={{ cursor: 'pointer', color: S.muted, '&:hover': { color: S.ink } }}>
                  <Icon name="x" size={18} />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
                <Avatar label={list[detail].name.slice(0, 1)} color={[S.orange, S.blue, S.purple, S.pink][detail % 4]} size={44} />
                <Box sx={{ flex: 1 }}>
                  <Progress pct={Math.round((list[detail].checked / list[detail].expected) * 100)} color={list[detail].checked >= list[detail].expected ? S.green : S.orange} height={9} />
                  <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font, mt: 1 }}>
                    {list[detail].checked} / {list[detail].expected} {d.checkedIn.toLowerCase()}
                  </Text>
                </Box>
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 3, '@container (max-width: 460px)': { gridTemplateColumns: '1fr' } }}>
                {[['10:30', d.start], ['18:00', d.end], [list[detail].checked, d.checkedIn], ['3', d.noShows]].map(([v, l]) => (
                  <Box key={l} sx={{ p: 3, borderRadius: 12, backgroundColor: '#F6F8FB', textAlign: 'center' }}>
                    <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{v}</Text>
                    <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{l}</Text>
                  </Box>
                ))}
              </Box>
              <Btn tone="primary" sx={{ width: '100%', mt: 1, backgroundColor: S.orange, boxShadow: '0 8px 18px rgba(249,115,22,0.35)' }} disabled={list[detail].checked >= list[detail].expected} onClick={() => { checkIn(detail); setDetail(null); }}>
                {d.checkIn}
              </Btn>
            </Card>
          </Box>
        )}
      </Box>
    </>
  );
}
