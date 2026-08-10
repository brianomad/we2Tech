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
    <BrowserFrame url="https://dispatch.demo.we2tech.pro" height={470}>
      <Box sx={{ display: 'flex', height: '100%', minHeight: 470 }}>
        <Box sx={{ flex: 1, p: 4 }}>
          <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 2 }}>
            {d.liveMap}
          </Text>
          <Box sx={{ height: 240 }}>
            <MockMap />
          </Box>
          <Card sx={{ mt: 3, p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
              <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>
                {d.tracking} &middot; {ship.id}
              </Text>
              <Badge tone={stepIndex === 3 ? 'green' : 'blue'}>{stepLabel(ship.step)}</Badge>
            </Box>
            <Stepper steps={steps} active={stepIndex} />
          </Card>
        </Box>
        <Box
          sx={{
            width: [220, 260],
            borderLeft: '1px solid',
            borderColor: S.line,
            backgroundColor: '#fff',
            p: 3,
          }}>
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
                  border: '1px solid',
                  borderColor: active === i ? S.teal : S.line,
                  backgroundColor: active === i ? 'rgba(0,139,139,0.05)' : '#fff',
                  fontFamily: font,
                }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Text sx={{ fontWeight: 700, fontSize: 0, color: S.ink, fontFamily: 'Menlo, monospace' }}>{s.id}</Text>
                  <StatusDot color={s.step === 'delivered' ? S.green : S.blue} />
                </Box>
                <Text sx={{ fontSize: 1, fontWeight: 600, color: S.ink }}>{s.dest}</Text>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1, fontSize: 0, color: S.muted }}>
                  <Text>{d.driver}: {s.driver}</Text>
                  <Text>{s.eta}</Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </BrowserFrame>
  );
}
