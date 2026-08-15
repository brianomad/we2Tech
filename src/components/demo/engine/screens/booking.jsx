/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { font } from '../../shared';
import { Icon } from '../../icons';
import { hashId } from '../../layouts';
import { useT } from '../theme';
import { Panel, SectionTitle, AccentBtn, GhostBtn, Chip, BrandTile, SuccessBadge, Page } from '../blocks';

const fmt = (x) => x;

const SERVICE_META = [
  { icon: '\u{1F4C5}', price: 'HK$180', dur: '45 min' },
  { icon: '\u{1F512}', price: 'HK$320', dur: '1 hr' },
  { icon: '\u{1F3E2}', price: 'HK$680', dur: '1.5 hr' },
  { icon: '\u26A1', price: 'HK$880', dur: '2 hr' },
];

function metaFor(item) {
  const seed = hashId(item && item.id != null ? item.id : 0);
  const rot = seed % SERVICE_META.length;
  return [...SERVICE_META.slice(rot), ...SERVICE_META.slice(0, rot)];
}

function ServiceTile({ meta, name, size = 44 }) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: 12,
        backgroundColor: 'rgba(255,255,255,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size / 2.1,
        flexShrink: 0,
      }}>
      {meta?.icon || '📅'}
    </Box>
  );
}

export function BookingA({ d, item }) {
  const t = useT();
  const meta = metaFor(item);
  const [sel, setSel] = useState(0);
  const [done, setDone] = useState(false);
  const [day, setDay] = useState(1);
  const days = d.booked === '已預約' ? [d.today, 'Tue', 'Wed'] : [d.today, 'Tomorrow', 'Sat'];
  const slots = ['09:00', '11:30', '14:00', '16:30'];
  const [slot, setSlot] = useState(1);
  return (
    <Page>
      <SectionTitle>{d.title}</SectionTitle>
      <Box sx={{ flex: 1, display: 'grid', gridTemplateColumns: ['1fr', null, '1.5fr 1fr'], gap: 3, minHeight: 0, '@container (max-width: 700px)': { gridTemplateColumns: '1fr' } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, minHeight: 0 }}>
          <Text sx={{ fontSize: 0, fontWeight: 700, color: t.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 1 }}>
            {d.stepService || 'Service'}
          </Text>
          {d.services.map((s, i) => {
            const on = sel === i;
            return (
              <Panel
                key={s}
                onClick={() => setSel(i)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  p: 2.5,
                  cursor: 'pointer',
                  borderWidth: 2,
                  borderColor: on ? t.accent : t.line,
                  backgroundColor: on ? `${t.accent}10` : t.surface,
                }}>
                <Box sx={{ width: 44, height: 44, borderRadius: 12, background: on ? t.grad : t.line, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: on ? '#fff' : t.muted }}>
                  <Icon name={on ? 'calendar' : 'clock'} size={20} />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Text sx={{ fontWeight: 700, fontSize: 1, color: t.ink, fontFamily: font, display: 'block' }}>{s}</Text>
                  <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{meta[i % meta.length]?.dur}</Text>
                </Box>
                <Box sx={{ textAlign: 'right', flexShrink: 0 }}>
                  <Text sx={{ fontWeight: 700, color: t.accent, fontFamily: font }}>{meta[i % meta.length]?.price}</Text>
                </Box>
              </Panel>
            );
          })}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, minHeight: 0 }}>
          <Panel sx={{ p: 3 }}>
            <SectionTitle sx={{ mb: 2 }}>{d.selectDate}</SectionTitle>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {days.map((dayName, i) => (
                <Chip key={dayName} on={day === i} onClick={() => setDay(i)}>{dayName}</Chip>
              ))}
            </Box>
            <SectionTitle sx={{ mt: 3, mb: 2 }}>{d.selectTime}</SectionTitle>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
              {slots.map((s, i) => (
                <Chip key={s} on={slot === i} onClick={() => setSlot(i)} sx={{ justifyContent: 'center' }}>{s}</Chip>
              ))}
            </Box>
          </Panel>
          <Panel sx={{ p: 3 }}>
            <SectionTitle sx={{ mb: 2 }}>{d.yourSelection}</SectionTitle>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
              <BrandTile label={d.services[sel]} size={40} />
              <Box sx={{ minWidth: 0 }}>
                <Text sx={{ fontWeight: 700, color: t.ink, fontFamily: font, display: 'block' }}>{d.services[sel]}</Text>
                <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>
                  {d.date}: {days[day]} &middot; {d.time}: {slots[slot]}
                </Text>
              </Box>
            </Box>
            <AccentBtn sx={{ width: '100%', mt: 2 }} onClick={() => setDone(true)}>
              {d.confirm} <Icon name="arrowRight" size={15} />
            </AccentBtn>
          </Panel>
        </Box>
      </Box>
      {done && (
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 20, backgroundColor: 'rgba(8,15,26,0.55)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4 }}>
          <Panel sx={{ p: 5, textAlign: 'center', maxWidth: 380, width: '100%' }}>
            <SuccessBadge />
            <Text sx={{ display: 'block', mt: 3, fontSize: 3, fontWeight: 700, color: t.ink, fontFamily: font }}>{d.confirmed}</Text>
            <Box sx={{ mt: 2, display: 'inline-block', px: 4, py: 2, borderRadius: 10, backgroundColor: `${t.accent}12`, border: '1px dashed', borderColor: t.accent }}>
              <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font, display: 'block' }}>{d.code}</Text>
              <Text sx={{ fontSize: 1, fontWeight: 700, color: t.accent, fontFamily: 'Menlo, monospace' }}>BK-{fmt(8800 + sel * 137)}</Text>
            </Box>
            <GhostBtn sx={{ mt: 4, width: '100%' }} onClick={() => setDone(false)}>{d.booked}</GhostBtn>
          </Panel>
        </Box>
      )}
    </Page>
  );
}

export function BookingB({ d, item }) {
  const t = useT();
  const meta = metaFor(item);
  const [sel, setSel] = useState(2);
  const [done, setDone] = useState(false);
  return (
    <Page>
      <SectionTitle>{d.selectService}</SectionTitle>
      <Box sx={{ flex: 1, display: 'grid', gridTemplateColumns: ['repeat(2, 1fr)', null, 'repeat(4, 1fr)'], gap: 3, alignContent: 'start', '@container (max-width: 380px)': { gridTemplateColumns: '1fr 1fr' } }}>
        {d.services.map((s, i) => {
          const on = sel === i;
          return (
            <Panel
              key={s}
              onClick={() => setSel(i)}
              sx={{
                p: 3,
                textAlign: 'center',
                cursor: 'pointer',
                borderWidth: 2,
                borderColor: on ? t.accent : t.line,
                backgroundColor: on ? `${t.accent}0d` : t.surface,
                position: 'relative',
              }}>
              {on && (
                <Box sx={{ position: 'absolute', top: 10, right: 10, width: 22, height: 22, borderRadius: '50%', background: t.grad, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="check" size={12} strokeWidth={3} />
                </Box>
              )}
              <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                <BrandTile label={s} size={54} />
              </Box>
              <Text sx={{ fontWeight: 700, fontSize: 1, color: t.ink, fontFamily: font, display: 'block', mb: '4px', lineHeight: 1.3 }}>{s}</Text>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
                <Box sx={{ color: t.muted }}><Icon name="clock" size={12} /></Box>
                <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{meta[i % meta.length]?.dur}</Text>
              </Box>
              <Text sx={{ fontWeight: 700, color: t.accent, fontFamily: font }}>{meta[i % meta.length]?.price}</Text>
            </Panel>
          );
        })}
      </Box>
      <Panel sx={{ mt: 3, p: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3 }}>
        <Box sx={{ minWidth: 0 }}>
          <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font, display: 'block' }}>{d.yourSelection}</Text>
          <Text sx={{ fontWeight: 700, color: t.ink, fontFamily: font }}>{d.services[sel]} &middot; {meta[sel % meta.length]?.price}</Text>
        </Box>
        <AccentBtn sx={{ flexShrink: 0 }} onClick={() => setDone(true)}>
          {d.confirm} <Icon name="check" size={15} />
        </AccentBtn>
      </Panel>
      {done && (
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 20, backgroundColor: 'rgba(8,15,26,0.55)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4 }}>
          <Panel sx={{ p: 5, textAlign: 'center', maxWidth: 360, width: '100%' }}>
            <SuccessBadge />
            <Text sx={{ display: 'block', mt: 3, fontSize: 3, fontWeight: 700, color: t.ink, fontFamily: font }}>{d.confirmed}</Text>
            <Text sx={{ mt: 1, color: t.muted, fontFamily: font, fontSize: 1 }}>{d.services[sel]}</Text>
            <Box sx={{ mt: 2, display: 'inline-block', px: 4, py: 2, borderRadius: 10, backgroundColor: `${t.accent}12`, border: '1px dashed', borderColor: t.accent }}>
              <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font, display: 'block' }}>{d.code}</Text>
              <Text sx={{ fontSize: 1, fontWeight: 700, color: t.accent, fontFamily: 'Menlo, monospace' }}>BK-{fmt(7100 + sel * 89)}</Text>
            </Box>
            <GhostBtn sx={{ mt: 4, width: '100%' }} onClick={() => setDone(false)}>{d.booked}</GhostBtn>
          </Panel>
        </Box>
      )}
    </Page>
  );
}

export function BookingC({ d, item }) {
  const t = useT();
  const meta = metaFor(item);
  const [sel, setSel] = useState(1);
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState(false);
  return (
    <Page>
      <SectionTitle>{d.selectService}</SectionTitle>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {d.services.map((s, i) => {
          const on = sel === i;
          return (
            <Panel key={s} sx={{ display: 'flex', alignItems: 'center', gap: 3, p: 2.5, borderWidth: 2, borderColor: on ? t.accent : t.line, backgroundColor: on ? `${t.accent}10` : t.surface }}>
              <ServiceTile meta={meta[i % meta.length]} />
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Text sx={{ fontWeight: 700, color: t.ink, fontFamily: font, display: 'block' }}>{s}</Text>
                <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{meta[i % meta.length]?.dur}</Text>
              </Box>
              <Text sx={{ fontWeight: 700, color: t.accent, fontFamily: font, flexShrink: 0 }}>{meta[i % meta.length]?.price}</Text>
              <Box
                onClick={() => { setSel(i); setOpen(true); }}
                sx={{ px: 3, py: '8px', borderRadius: t.radius, background: on ? t.grad : t.line, color: on ? '#fff' : t.slate, fontSize: 0, fontWeight: 700, cursor: 'pointer', fontFamily: font, flexShrink: 0 }}>
                {d.booked}
              </Box>
            </Panel>
          );
        })}
      </Box>
      {open && (
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 20, backgroundColor: 'rgba(8,15,26,0.55)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4 }}>
          <Panel sx={{ p: 4, maxWidth: 400, width: '100%' }}>
            <Text sx={{ fontWeight: 700, fontSize: 2, color: t.ink, fontFamily: font, mb: 1 }}>{d.confirm}</Text>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, p: 3, borderRadius: t.radius, backgroundColor: `${t.accent}0d`, border: `1px solid ${t.accent}33`, mb: 3 }}>
              <ServiceTile meta={meta[sel % meta.length]} size={48} />
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Text sx={{ fontWeight: 700, color: t.ink, fontFamily: font, display: 'block' }}>{d.services[sel]}</Text>
                <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{meta[sel % meta.length]?.dur}</Text>
              </Box>
              <Text sx={{ fontWeight: 700, fontSize: 2, color: t.accent, fontFamily: font }}>{meta[sel % meta.length]?.price}</Text>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 3 }}>
              <Box sx={{ p: 2.5, borderRadius: t.radius, border: `1px solid ${t.line}` }}>
                <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font, display: 'block' }}>{d.date}</Text>
                <Text sx={{ fontWeight: 700, color: t.ink, fontFamily: font }}>{d.today}</Text>
              </Box>
              <Box sx={{ p: 2.5, borderRadius: t.radius, border: `1px solid ${t.line}` }}>
                <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font, display: 'block' }}>{d.time}</Text>
                <Text sx={{ fontWeight: 700, color: t.ink, fontFamily: font }}>{['10:30', '13:00', '15:30', '18:00'][sel]}</Text>
              </Box>
            </Box>
            <AccentBtn sx={{ width: '100%' }} onClick={() => { setOpen(false); setToast(true); setTimeout(() => setToast(false), 2200); }}>
              <Icon name="check" size={15} /> {d.confirmed}
            </AccentBtn>
          </Panel>
        </Box>
      )}
      {toast && (
        <Box sx={{ position: 'absolute', left: 4, right: 4, bottom: 4, zIndex: 30 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 3, py: 2.5, borderRadius: t.radius, backgroundColor: t.dark ? '#13203A' : '#fff', border: `1px solid ${t.accent}55`, boxShadow: '0 18px 40px rgba(8,15,26,0.35)' }}>
            <Box sx={{ width: 24, height: 24, borderRadius: '50%', background: t.grad, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name="check" size={13} strokeWidth={3} />
            </Box>
            <Text sx={{ fontWeight: 700, color: t.ink, fontFamily: font }}>{d.services[sel]}</Text>
            <Text sx={{ ml: 'auto', fontSize: 0, color: t.muted, fontFamily: font }}>{d.confirmed}</Text>
          </Box>
        </Box>
      )}
    </Page>
  );
}
