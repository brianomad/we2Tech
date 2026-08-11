/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { S, font, Card, Btn, Badge, Quantity, Qr, SectionLabel } from './shared';
import { Icon } from './icons';

const EVENT_META = [
  { icon: 'flower', grad: 'linear-gradient(135deg,#F59E0B,#F97316)', img: 'poster-yoga' },
  { icon: 'message', grad: 'linear-gradient(135deg,#7C3AED,#6D28D9)', img: 'poster-talk' },
  { icon: 'music', grad: 'linear-gradient(135deg,#DB2777,#BE185D)', img: 'poster-music' },
];

import { brandFor } from './demo-meta';
import { contentFor } from './case-content';

export default function TicketingDemo({ t, locale, item }) {
  const d = contentFor(t, locale, item, 'ticketing');
  const events = d.events;
  const [selected, setSelected] = useState(0);
  const [qty, setQty] = useState(2);
  const [ticket, setTicket] = useState(null);

  const event = events[selected];
  const total = qty * parseInt(event.price.replace(/[^\d]/g, ''), 10);

  return (
    <>
      <Box sx={{ position: 'relative', flex: 1 }}>
        <Box sx={{ px: 4, py: 3, background: 'linear-gradient(135deg,#312E81,#6D28D9)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ width: 32, height: 32, borderRadius: 10, background: 'linear-gradient(135deg,#F472B6,#EC4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <Icon name="ticket" size={17} />
            </Box>
            <Box>
              <Text sx={{ fontWeight: 700, fontSize: 1, fontFamily: font }}>{brandFor(item, 'EventHub')}</Text>
              <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.65)', fontFamily: font }}>{d.subtitle}</Text>
            </Box>
          </Box>
          <Badge sx={{ backgroundColor: 'rgba(244,114,182,0.2)', color: '#F9A8D4', border: '1px solid rgba(244,114,182,0.4)' }} dot>{d.eventsCount}</Badge>
        </Box>

        <Box sx={{ p: 4 }}>
        {!ticket ? (
          <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1.35fr 1fr'], gap: 4, '@container (max-width: 700px)': { gridTemplateColumns: '1fr' } }}>
            <Box>
              <SectionLabel>{d.eventsTitle}</SectionLabel>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {events.map((e, i) => {
                  const meta = EVENT_META[i % EVENT_META.length];
                  const [day, rest] = e.date.split(' ');
                  return (
                    <Card
                      key={e.name}
                      onClick={() => setSelected(i)}
                      sx={{
                        p: 3,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        cursor: 'pointer',
                        border: '1.5px solid',
                        borderColor: selected === i ? '#8B5CF6' : S.line,
                        backgroundColor: selected === i ? 'rgba(139,92,246,0.05)' : '#fff',
                        transition: 'all 0.15s',
                        '&:hover': { borderColor: '#C4B5FD' },
                      }}>
                      <Box sx={{ width: 62, height: 62, borderRadius: 14, overflow: 'hidden', flexShrink: 0, boxShadow: '0 8px 18px rgba(0,0,0,0.2)', position: 'relative' }}>
                        <img src={`/images/demo/${meta.img}.svg`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '3px 6px', backgroundColor: 'rgba(11,15,25,0.55)', color: '#fff', fontFamily: font, textAlign: 'center', lineHeight: 1.15 }}>
                          <Text sx={{ fontSize: 0, fontWeight: 700 }}>{day}</Text>
                          <Text sx={{ fontSize: 0, fontWeight: 700 }}>{rest}</Text>
                        </Box>
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{e.name}</Text>
                        <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font, mt: '2px' }}>{e.date} &middot; {d.venueMeta}</Text>
                      </Box>
                      <Box sx={{ textAlign: 'right' }}>
                        <Text sx={{ fontWeight: 700, color: '#7C3AED', fontFamily: font }}>{e.price}</Text>
                        <Badge tone={i === 0 ? 'amber' : i === 1 ? 'purple' : 'pink'} dot={false} sx={{ mt: '4px' }}>
                          {i === 0 ? d.fewLeft : i === 1 ? d.almostFull : d.onSale}
                        </Badge>
                      </Box>
                      {selected === i && (
                        <Box sx={{ width: 22, height: 22, borderRadius: '50%', backgroundColor: '#8B5CF6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Icon name="check" size={13} />
                        </Box>
                      )}
                    </Card>
                  );
                })}
              </Box>
            </Box>

            <Card sx={{ p: 4, alignSelf: 'start', textAlign: 'center', position: 'sticky', top: 0 }}>
              <Box sx={{ width: 54, height: 54, mx: 'auto', mb: 2, borderRadius: 15, overflow: 'hidden', boxShadow: '0 10px 22px rgba(0,0,0,0.2)' }}>
                <img src={`/images/demo/${EVENT_META[selected % EVENT_META.length].img}.svg`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </Box>
              <Text sx={{ fontWeight: 700, fontSize: 2, color: S.ink, fontFamily: font, mb: 1 }}>{event.name}</Text>
              <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font, mb: 3 }}>{event.date} &middot; {d.venueMeta}</Text>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3, mb: 3 }}>
                <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{d.quantity}</Text>
                <Quantity value={qty} onChange={setQty} min={1} />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 1, py: 2, mb: 3, borderTop: '1px dashed', borderColor: '#D3E1EE', fontFamily: font }}>
                <Text sx={{ fontSize: 0, color: S.muted }}>{qty} &times; {event.price}</Text>
                <Text sx={{ fontSize: 2, fontWeight: 700, color: '#7C3AED' }}>HK${total.toLocaleString()}</Text>
              </Box>
              <Btn tone="primary" sx={{ width: '100%', mt: 1, backgroundColor: '#8B5CF6', backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.2), transparent 55%)', boxShadow: '0 10px 22px rgba(139,92,246,0.4)' }} onClick={() => setTicket(true)}>
                {d.getTickets} <Icon name="arrowRight" size={15} />
              </Btn>
            </Card>
          </Box>
        ) : (
          <Card sx={{ p: 5, maxWidth: 460, mx: 'auto', textAlign: 'center', position: 'relative' }}>
            <Box sx={{ position: 'absolute', left: -7, top: 118, width: 16, height: 16, borderRadius: '50%', backgroundColor: '#F1F4F9' }} />
            <Box sx={{ position: 'absolute', right: -7, top: 118, width: 16, height: 16, borderRadius: '50%', backgroundColor: '#F1F4F9' }} />
            <Badge tone="purple" sx={{ mb: 3 }}><Icon name="check" size={13} /> {d.eTicket}</Badge>
            <Text sx={{ fontWeight: 700, fontSize: 2, color: S.ink, fontFamily: font }}>{event.name}</Text>
            <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font, mt: '2px', mb: 3 }}>{event.date} &middot; 7:30 PM</Text>
            <Box sx={{ mx: 'auto', mb: 3, width: 150, height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderRadius: 14, border: '1px solid', borderColor: '#E2D9F7', boxShadow: '0 10px 26px rgba(139,92,246,0.16)' }}>
              <Qr size={108} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 1, py: 2, borderTop: '1px dashed', borderColor: '#E2D9F7', fontFamily: font }}>
              <Box sx={{ textAlign: 'left' }}>
                <Text sx={{ fontSize: 0, color: S.muted }}>{d.seats}</Text>
                <Text sx={{ fontSize: 1, fontWeight: 700, color: S.ink }}>{qty} {d.quantity} &middot; HK${total.toLocaleString()}</Text>
              </Box>
              <Text sx={{ fontSize: 1, fontWeight: 700, color: '#7C3AED' }}>EVT-20418</Text>
            </Box>
            <Text sx={{ fontSize: 0, color: S.green, fontFamily: font, mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <Icon name="lock" size={12} /> {d.scanAtDoor}
            </Text>
            <Btn tone="ghost" sx={{ mt: 4, width: '100%' }} onClick={() => setTicket(null)}>
              <Icon name="arrowLeft" size={15} /> {d.eventsTitle}
            </Btn>
          </Card>
        )}
      </Box>
      </Box>
    </>
  );
}
