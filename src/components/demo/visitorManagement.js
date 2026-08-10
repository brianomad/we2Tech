/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Btn, Badge, Field, Qr, Avatar } from './shared';

export default function VisitorManagementDemo({ t }) {
  const d = t('caseDemo.visitor');
  const purposes = t('caseDemo.visitor.purposes');
  const [name, setName] = useState('Wong Ka Ho');
  const [host, setHost] = useState('M. Leung');
  const [purpose, setPurpose] = useState(0);
  const [pass, setPass] = useState(false);
  const [log, setLog] = useState([
    { name: 'Chan Tai Man', time: '09:12', status: 'Entered' },
    { name: 'Lau Wing Sze', time: '09:40', status: 'Entered' },
  ]);

  const generate = () => {
    setPass(true);
    setLog((l) => [{ name, time: '10:05', status: 'Entered' }, ...l]);
  };

  return (
    <BrowserFrame url="https://visitor.demo.we2tech.pro" height={470}>
      <Box sx={{ p: 4 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1.3fr 1fr'], gap: 4 }}>
          <Box>
            <Card sx={{ p: 4 }}>
              <Text sx={{ fontWeight: 700, fontSize: 2, color: S.ink, fontFamily: font, mb: 3 }}>{d.preregister}</Text>
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
                <Field label={d.name} value={name} onChange={(e) => setName(e.target.value)} />
                <Field label={d.host} value={host} onChange={(e) => setHost(e.target.value)} />
              </Box>
              <Box sx={{ mt: 3, mb: 4 }}>
                <Text sx={{ fontSize: 0, fontWeight: 700, color: S.slate, fontFamily: font, mb: 2 }}>{d.purpose}</Text>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  {purposes.map((p, i) => (
                    <Box
                      key={p}
                      onClick={() => setPurpose(i)}
                      sx={{
                        px: 3,
                        py: 1.5,
                        borderRadius: 20,
                        cursor: 'pointer',
                        border: '1px solid',
                        borderColor: purpose === i ? S.teal : S.line,
                        backgroundColor: purpose === i ? 'rgba(0,139,139,0.08)' : '#fff',
                        color: purpose === i ? S.tealDark : S.slate,
                        fontSize: 0,
                        fontWeight: 700,
                        fontFamily: font,
                      }}>
                      {p}
                    </Box>
                  ))}
                </Box>
              </Box>
              <Btn tone="primary" onClick={generate}>{d.generate}</Btn>
            </Card>

            <Card sx={{ p: 4, mt: 3 }}>
              <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 2 }}>
                {d.entryLog}
              </Text>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {log.map((l, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 3, py: 2, borderBottom: '1px solid', borderColor: S.line, ':last-child': { border: 'none' } }}>
                    <Avatar label={l.name.slice(0, 1)} color={[S.teal, S.blue, S.purple][i % 3]} size={32} />
                    <Box sx={{ flex: 1 }}>
                      <Text sx={{ fontWeight: 600, fontSize: 1, color: S.ink, fontFamily: font }}>{l.name}</Text>
                      <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{l.time}</Text>
                    </Box>
                    <Badge tone="green">{d.entered}</Badge>
                  </Box>
                ))}
              </Box>
            </Card>
          </Box>

          <Card sx={{ p: 4, alignSelf: 'start', textAlign: 'center' }}>
            {pass ? (
              <>
                <Badge tone="teal" sx={{ mb: 3 }}>&#10003; {d.passTitle}</Badge>
                <Box sx={{ mx: 'auto', mb: 3, width: 130, height: 130, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderRadius: 12, border: '1px solid', borderColor: S.line }}>
                  <Qr size={96} />
                </Box>
                <Text sx={{ display: 'block', fontWeight: 700, fontSize: 2, color: S.ink, fontFamily: font }}>{name}</Text>
                <Text sx={{ display: 'block', fontSize: 1, color: S.slate, fontFamily: font, mt: 1 }}>{purposes[purpose]} &middot; {host}</Text>
                <Text sx={{ display: 'block', fontSize: 0, color: S.green, fontFamily: font, mt: 2 }}>{d.validFor}</Text>
              </>
            ) : (
              <Box sx={{ py: 8 }}>
                <Box sx={{ fontSize: 5, color: S.faint, mb: 2 }}>&#128100;</Box>
                <Text sx={{ fontSize: 1, color: S.muted, fontFamily: font }}>{d.passTitle}</Text>
              </Box>
            )}
          </Card>
        </Box>
      </Box>
    </BrowserFrame>
  );
}
