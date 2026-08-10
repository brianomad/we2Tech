/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Btn, Badge, Field, Qr, Avatar, SectionLabel } from './shared';

const PURPOSE_ICONS = ['\u{1F4AC}', '\u{1F4E6}', '\u{1F3DB}', '\u{1F464}'];

export default function VisitorManagementDemo({ t }) {
  const d = t('caseDemo.visitor');
  const purposes = t('caseDemo.visitor.purposes');
  const [name, setName] = useState('Wong Ka Ho');
  const [host, setHost] = useState('M. Leung');
  const [purpose, setPurpose] = useState(0);
  const [pass, setPass] = useState(false);
  const [log, setLog] = useState([
    { name: 'Chan Tai Man', time: '09:12', purpose: purposes[0] },
    { name: 'Lau Wing Sze', time: '09:40', purpose: purposes[1] },
    { name: 'Ng Chun Kit', time: '10:01', purpose: purposes[2] },
  ]);

  const generate = () => {
    setPass(true);
    setLog((l) => [{ name, time: '10:05', purpose: purposes[purpose] }, ...l]);
  };

  return (
    <BrowserFrame url="https://visitor.demo.we2tech.pro" height={486} brand="AccessOne">
      <Box sx={{ px: 4, py: 3, background: 'linear-gradient(135deg,#0B1B33,#111827)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ width: 32, height: 32, borderRadius: 10, background: 'linear-gradient(135deg,#22D3EE,#3B82F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 1 }}>&#128274;</Box>
          <Text sx={{ fontWeight: 700, fontSize: 1, fontFamily: font }}>AccessOne</Text>
        </Box>
        <Badge sx={{ backgroundColor: 'rgba(34,211,238,0.15)', color: '#67E8F9', border: '1px solid rgba(34,211,238,0.4)' }} dot>Front desk</Badge>
      </Box>

      <Box sx={{ p: 4 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1.3fr 1fr'], gap: 4 }}>
          <Box>
            <Card sx={{ p: 4 }}>
              <SectionLabel>{d.preregister}</SectionLabel>
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
                <Field label={d.name} value={name} onChange={(e) => setName(e.target.value)} />
                <Field label={d.host} value={host} onChange={(e) => setHost(e.target.value)} />
              </Box>
              <Box sx={{ mt: 3, mb: 4 }}>
                <Text sx={{ fontSize: 0, fontWeight: 700, color: S.slate, fontFamily: font, mb: 2 }}>{d.purpose}</Text>
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                  {purposes.map((p, i) => (
                    <Box
                      key={p}
                      onClick={() => setPurpose(i)}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        px: 3,
                        py: 2,
                        borderRadius: 11,
                        cursor: 'pointer',
                        border: '1.5px solid',
                        borderColor: purpose === i ? '#0EA5E9' : S.line,
                        backgroundColor: purpose === i ? 'rgba(14,165,233,0.07)' : '#fff',
                        color: purpose === i ? '#0369A1' : S.slate,
                        fontSize: 1,
                        fontWeight: 700,
                        fontFamily: font,
                        transition: 'all 0.15s',
                      }}>
                      <Box>{PURPOSE_ICONS[i]}</Box>
                      {p}
                      {purpose === i && <Box sx={{ ml: 'auto', color: '#0EA5E9' }}>&#10003;</Box>}
                    </Box>
                  ))}
                </Box>
              </Box>
              <Btn tone="primary" sx={{ backgroundColor: '#0EA5E9', backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.18), transparent 55%)', boxShadow: '0 8px 18px rgba(14,165,233,0.4)' }} onClick={generate}>
                {d.generate} &#8594;
              </Btn>
            </Card>

            <Card sx={{ p: 4, mt: 3 }}>
              <SectionLabel>{d.entryLog}</SectionLabel>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {log.map((l, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 3, py: 2, borderBottom: '1px solid', borderColor: S.line, ':last-child': { border: 'none' } }}>
                    <Avatar label={l.name.slice(0, 1)} color={['#0EA5E9', S.teal, S.purple, S.orange][i % 4]} size={34} />
                    <Box sx={{ flex: 1 }}>
                      <Text sx={{ fontWeight: 600, fontSize: 1, color: S.ink, fontFamily: font }}>{l.name}</Text>
                      <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{l.purpose}</Text>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                      <Badge tone="green" dot={false}>{d.entered}</Badge>
                      <Text sx={{ fontSize: 0, color: S.muted, fontFamily: 'Menlo, monospace', mt: '2px' }}>{l.time}</Text>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Card>
          </Box>

          <Card sx={{ p: 4, alignSelf: 'start', textAlign: 'center', position: 'sticky', top: 0 }}>
            {pass ? (
              <>
                <Badge tone="green" sx={{ mb: 3 }}>&#10003; {d.passTitle}</Badge>
                <Box sx={{ position: 'relative', mx: 'auto', mb: 3, width: 150, height: 150 }}>
                  <Box sx={{ position: 'absolute', left: -8, top: 64, width: 18, height: 18, borderRadius: '50%', backgroundColor: S.bg }} />
                  <Box sx={{ position: 'absolute', right: -8, top: 64, width: 18, height: 18, borderRadius: '50%', backgroundColor: S.bg }} />
                  <Box sx={{ width: 150, height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderRadius: 14, border: '1px solid', borderColor: '#C4D6E8', boxShadow: '0 12px 28px rgba(15,33,55,0.12)' }}>
                    <Qr size={108} />
                  </Box>
                </Box>
                <Text sx={{ display: 'block', fontWeight: 700, fontSize: 2, color: S.ink, fontFamily: font }}>{name}</Text>
                <Text sx={{ display: 'block', fontSize: 1, color: S.slate, fontFamily: font, mt: 1 }}>{purposes[purpose]} &middot; {host}</Text>
                <Text sx={{ display: 'block', fontSize: 0, color: S.green, fontFamily: font, mt: 2 }}>&#10003; {d.validFor}</Text>
                <Btn tone="ghost" sx={{ mt: 4, width: '100%' }} onClick={() => setPass(false)}>&#8634; New visitor</Btn>
              </>
            ) : (
              <Box sx={{ py: 8 }}>
                <Box sx={{ width: 64, height: 64, mx: 'auto', borderRadius: '50%', backgroundColor: '#F0F7FF', color: '#0EA5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 4, mb: 3 }}>
                  &#128100;
                </Box>
                <Text sx={{ fontSize: 1, fontWeight: 700, color: S.ink, fontFamily: font }}>{d.passTitle}</Text>
                <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font, mt: 1 }}>Fill the form to issue a pass</Text>
              </Box>
            )}
          </Card>
        </Box>
      </Box>
    </BrowserFrame>
  );
}
