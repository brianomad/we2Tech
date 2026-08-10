/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Badge, Avatar, MockMap, Stepper, StatusDot } from './shared';

export default function LogisticsDemo({ t }) {
  const d = t('caseDemo.logistics');
  const shipments = t('caseDemo.logistics.shipments');
  const steps = [d.pickedUp, d.inTransit, d.outForDelivery, d.delivered];
  const [active, setActive] = useState(0);

  const ship = shipments[active];
  const stepIndex = Math.max(0, ['picked', 'in', 'out', 'delivered'].indexOf(ship.step));
  const stepLabel = (s) => ({ picked: d.pickedUp, in: d.inTransit, out: d.outForDelivery, delivered: d.delivered }[s] || s);

  return (
    <BrowserFrame url="https://dispatch.demo.we2tech.pro" height={486} brand="FleetTrack">
      <Box sx={{ px: 4, py: 3, background: 'linear-gradient(135deg,#0B1B33,#12324A)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ width: 32, height: 32, borderRadius: 10, background: 'linear-gradient(135deg,#22D3EE,#0EA5E9)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 1 }}>&#128663;</Box>
          <Box>
            <Text sx={{ fontWeight: 700, fontSize: 1, fontFamily: font, lineHeight: 1.2 }}>FleetTrack</Text>
            <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.6)', fontFamily: font }}>Hong Kong &middot; 14 vans active</Text>
          </Box>
        </Box>
        <Badge sx={{ backgroundColor: 'rgba(34,211,238,0.15)', color: '#67E8F9', border: '1px solid rgba(34,211,238,0.4)' }} dot>&#9679; Live</Badge>
      </Box>

      <Box sx={{ display: 'flex', minHeight: 440 }}>
        <Box sx={{ flex: 1, p: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Card sx={{ overflow: 'hidden' }}>
            <Box sx={{ px: 3, py: 2, borderBottom: '1px solid', borderColor: S.line, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text sx={{ fontWeight: 700, fontSize: 0, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font }}>{d.liveMap}</Text>
              <Badge tone="blue" dot={false}>3 updates / min</Badge>
            </Box>
            <Box sx={{ height: 210 }}>
              <MockMap />
            </Box>
          </Card>

          <Card sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, flexWrap: 'wrap', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar label={ship.driver.slice(0, 1)} color={S.blue} size={36} />
                <Box>
                  <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>
                    {d.tracking} &middot; <Text as="span" sx={{ fontFamily: 'Menlo, monospace' }}>{ship.id}</Text>
                  </Text>
                  <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{ship.dest} &middot; {ship.driver}</Text>
                </Box>
              </Box>
              <Badge tone={stepIndex === 3 ? 'green' : 'blue'}>{stepLabel(ship.step)}</Badge>
            </Box>
            <Stepper steps={steps} active={stepIndex} />
          </Card>
        </Box>

        <Box sx={{ width: [210, 250], borderLeft: '1px solid', borderColor: S.line, backgroundColor: '#fff', p: 3, overflow: 'auto' }}>
          <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 2 }}>
            {d.dispatches}
          </Text>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {shipments.map((s, i) => (
              <Box
                key={s.id}
                onClick={() => setActive(i)}
                sx={{
                  p: 3,
                  borderRadius: 12,
                  cursor: 'pointer',
                  border: '1.5px solid',
                  borderColor: active === i ? '#0EA5E9' : S.line,
                  backgroundColor: active === i ? 'rgba(14,165,233,0.05)' : '#fff',
                  fontFamily: font,
                  transition: 'all 0.15s',
                  '&:hover': { borderColor: '#7DD3FC' },
                }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Text sx={{ fontWeight: 700, fontSize: 0, color: S.ink, fontFamily: 'Menlo, monospace' }}>{s.id}</Text>
                  <StatusDot color={s.step === 'delivered' ? S.green : S.blue} />
                </Box>
                <Text sx={{ fontSize: 1, fontWeight: 700, color: S.ink }}>{s.dest}</Text>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1, fontSize: 0, color: S.muted }}>
                  <Text>{d.driver}: {s.driver}</Text>
                  <Text sx={{ fontWeight: 700, color: s.step === 'delivered' ? S.green : '#0369A1' }}>{s.eta}</Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </BrowserFrame>
  );
}
