/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Btn, Badge, Quantity, Qr } from './shared';

export default function TicketingDemo({ t }) {
  const d = t('caseDemo.ticketing');
  const events = t('caseDemo.ticketing.events');
  const [selected, setSelected] = useState(0);
  const [qty, setQty] = useState(2);
  const [ticket, setTicket] = useState(null);

  const event = events[selected];
  const total = qty * parseInt(event.price.replace(/[^\d]/g, ''), 10);

  return (
    <BrowserFrame url="https://tickets.demo.we2tech.pro" height={470}>
      <Box sx={{ p: 4 }}>
        {!ticket ? (
          <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1.3fr 1fr'], gap: 4 }}>
            <Box>
              <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 2 }}>
                {d.eventsTitle}
              </Text>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {events.map((e, i) => (
                  <Card
                    key={e.name}
                    onClick={() => setSelected(i)}
                    sx={{
                      p: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      cursor: 'pointer',
                      border: '2px solid',
                      borderColor: selected === i ? S.teal : S.line,
                      backgroundColor: selected === i ? 'rgba(0,139,139,0.04)' : '#fff',
                    }}>
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 12,
                        backgroundColor: [S.purple, S.teal, S.pink][i % 3],
                        color: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: font,
                        flexShrink: 0,
                      }}>
                      <Text sx={{ fontSize: 0, fontWeight: 700 }}>{e.date.split(' ')[0]}</Text>
                      <Text sx={{ fontSize: 1, fontWeight: 700 }}>{e.date.split(' ')[1] || e.date}</Text>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{e.name}</Text>
                      <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{e.date}</Text>
                    </Box>
                    <Text sx={{ fontWeight: 700, color: S.tealDark, fontFamily: font }}>{e.price}</Text>
                  </Card>
                ))}
              </Box>
            </Box>
            <Card sx={{ p: 4, alignSelf: 'start', textAlign: 'center' }}>
              <Text sx={{ fontWeight: 700, fontSize: 2, color: S.ink, fontFamily: font, mb: 1 }}>{event.name}</Text>
              <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font, mb: 3 }}>{event.date}</Text>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3, mb: 4 }}>
                <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{d.quantity}</Text>
                <Quantity value={qty} onChange={setQty} min={1} />
              </Box>
              <Text sx={{ fontSize: 3, fontWeight: 700, color: S.tealDark, fontFamily: font, mb: 3 }}>HK${total.toLocaleString()}</Text>
              <Btn tone="primary" sx={{ width: '100%' }} onClick={() => setTicket(true)}>
                {d.getTickets}
              </Btn>
            </Card>
          </Box>
        ) : (
          <Card sx={{ p: 5, maxWidth: 440, mx: 'auto', textAlign: 'center' }}>
            <Badge tone="teal" sx={{ mb: 3 }}>&#10003; {d.eTicket}</Badge>
            <Box sx={{ mx: 'auto', mb: 3, width: 140, height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderRadius: 12, border: '1px solid', borderColor: S.line }}>
              <Qr size={104} />
            </Box>
            <Text sx={{ display: 'block', fontWeight: 700, fontSize: 2, color: S.ink, fontFamily: font }}>{event.name}</Text>
            <Text sx={{ display: 'block', fontSize: 1, color: S.slate, fontFamily: font, mt: 1 }}>{event.date} &middot; {qty} {d.quantity}</Text>
            <Text sx={{ display: 'block', fontSize: 0, color: S.green, fontFamily: font, mt: 2 }}>{d.scanAtDoor}</Text>
            <Btn tone="ghost" sx={{ mt: 4, width: '100%' }} onClick={() => setTicket(null)}>
              &#8592; {d.eventsTitle}
            </Btn>
          </Card>
        )}
      </Box>
    </BrowserFrame>
  );
}
