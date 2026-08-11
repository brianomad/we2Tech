/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState, useEffect } from 'react';
import { S, font, Card, Badge, Avatar, MockMap, Stepper, StatusDot } from './shared';
import { Icon } from './icons';
import { Skeleton } from './chrome';

import { brandFor } from './demo-meta';
import { contentFor } from './case-content';

export default function LogisticsDemo({ t, locale, item }) {
  const d = contentFor(t, locale, item, 'logistics');
  const shipments = d.shipments;
  const steps = [d.pickedUp, d.inTransit, d.outForDelivery, d.delivered];
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const ship = shipments[active];
  const stepIndex = Math.max(0, ['picked', 'in', 'out', 'delivered'].indexOf(ship.step));
  const stepLabel = (s) => ({ picked: d.pickedUp, in: d.inTransit, out: d.outForDelivery, delivered: d.delivered }[s] || s);
  const deliveryOpen = shipments.filter((s) => s.step !== 'delivered').length;

  const timelineEvents = (s) => [
    { label: d.collectedAt, time: '08:40', done: true },
    { label: d.atHub, time: '09:15', done: true },
    { label: s.step === 'picked' ? d.inTransit : s.step === 'in' ? d.leftHub : d.outForDelivery, time: s.step === 'picked' ? 'Est. 11:20' : s.step === 'in' ? '10:02' : '10:30', done: s.step !== 'picked' },
    { label: d.outForDelivery, time: 'Est. 11:05', done: s.step === 'out' || s.step === 'delivered' },
    { label: d.deliveredOn, time: s.step === 'delivered' ? '11:48' : 'Est. 11:45', done: s.step === 'delivered' },
  ];

  return (
    <>
      <Box sx={{ position: 'relative', flex: 1 }}>
        <Box sx={{ px: 4, py: 3, background: 'linear-gradient(135deg,#0B1B33,#12324A)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ width: 32, height: 32, borderRadius: 10, background: 'linear-gradient(135deg,#22D3EE,#0EA5E9)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <Icon name="truck" size={18} />
            </Box>
            <Box>
              <Text sx={{ fontWeight: 700, fontSize: 1, fontFamily: font, lineHeight: 1.2 }}>{brandFor(item, 'FleetTrack')}</Text>
              <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.6)', fontFamily: font }}>{d.region}</Text>
            </Box>
          </Box>
          <Badge sx={{ backgroundColor: 'rgba(34,211,238,0.15)', color: '#67E8F9', border: '1px solid rgba(34,211,238,0.4)' }} dot>{d.live}</Badge>
        </Box>

        {loading ? (
          <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Card sx={{ overflow: 'hidden' }}>
              <Box sx={{ px: 3, py: 2, borderBottom: '1px solid', borderColor: S.line }}>
                <Skeleton w="40%" h={10} />
              </Box>
              <Box sx={{ height: 210, backgroundColor: '#F6F8FB' }}>
                <Skeleton w="60%" h={120} sx={{ mx: 'auto', my: 4 }} />
              </Box>
            </Card>
            <Card sx={{ p: 4 }}>
              <Skeleton w="35%" h={12} />
              <Skeleton w="70%" h={10} sx={{ mt: 3 }} />
              <Skeleton w="50%" h={10} sx={{ mt: 2 }} />
            </Card>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', minHeight: 430, '@container (max-width: 760px)': { flexDirection: 'column' } }}>
            <Box sx={{ flex: 1, p: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Card sx={{ overflow: 'hidden' }}>
                <Box sx={{ px: 3, py: 2, borderBottom: '1px solid', borderColor: S.line, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text sx={{ fontWeight: 700, fontSize: 0, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font }}>{d.liveMap}</Text>
                  <Badge tone="blue" dot={false}>{d.updatesPerMin}</Badge>
                </Box>
                <Box sx={{ height: 190 }}>
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
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Badge tone={stepIndex === 3 ? 'green' : 'blue'}>{stepLabel(ship.step)}</Badge>
                    <Badge sx={{ cursor: 'pointer', backgroundColor: 'rgba(14,165,233,0.08)', color: '#0369A1', border: '1px solid rgba(14,165,233,0.3)' }} onClick={() => setDetail(true)}>{d.timeline}</Badge>
                  </Box>
                </Box>
                <Stepper steps={steps} active={stepIndex} />
              </Card>
            </Box>

            <Box sx={{ width: [210, 250], borderLeft: '1px solid', borderColor: S.line, backgroundColor: '#fff', p: 3, overflow: 'auto', '@container (max-width: 760px)': { width: '100%', borderLeft: 'none', borderTop: '1px solid', borderColor: S.line, display: 'grid', gridTemplateColumns: ['1fr 1fr', null, 'repeat(3, 1fr)'], gap: 2 } }}>
              <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 2, '@container (max-width: 760px)': { gridColumn: '1 / -1' } }}>
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
        )}

        {detail && (
          <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 20, p: 3 }}>
            <Card sx={{ p: 4, maxWidth: 400, width: '100%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar label={ship.driver.slice(0, 1)} color={S.blue} size={38} />
                  <Box>
                    <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{d.tracking} {ship.id}</Text>
                    <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{ship.dest}</Text>
                  </Box>
                </Box>
                <Box onClick={() => setDetail(null)} sx={{ cursor: 'pointer', color: S.muted, display: 'flex' }}>
                  <Icon name="x" size={18} />
                </Box>
              </Box>

              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 3, '@container (max-width: 460px)': { gridTemplateColumns: '1fr' } }}>
                {[
                  [d.status, stepLabel(ship.step)],
                  [d.driver, ship.driver],
                  [d.origin, d.originName],
                  [d.cargo, `${d.weight}: 6.2 kg`],
                ].map(([l, v]) => (
                  <Box key={l} sx={{ p: 3, borderRadius: 12, backgroundColor: '#F6F8FB' }}>
                    <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{l}</Text>
                    <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{v}</Text>
                  </Box>
                ))}
              </Box>

              <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 3 }}>
                {d.timeline}
              </Text>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {timelineEvents(ship).map((ev, i) => (
                  <Box key={i} sx={{ display: 'flex', gap: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Box sx={{ width: 18, height: 18, borderRadius: '50%', backgroundColor: ev.done ? S.green : '#E3EAF2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                        {ev.done && <Icon name="check" size={10} />}
                      </Box>
                      {i < timelineEvents(ship).length - 1 && <Box sx={{ width: 2, height: 34, backgroundColor: ev.done ? S.green : '#E3EAF2', flex: 1 }} />}
                    </Box>
                    <Box sx={{ pb: 3 }}>
                      <Text sx={{ fontSize: 1, fontWeight: 600, color: ev.done ? S.ink : S.muted, fontFamily: font }}>{ev.label}</Text>
                      <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{ev.time}</Text>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{d.lastUpdated}: {d.updatedAt}</Text>
            </Card>
          </Box>
        )}
      </Box>
    </>
  );
}
