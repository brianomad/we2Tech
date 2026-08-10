/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Badge, Btn, StatusDot } from './shared';

export default function InventoryDemo({ t }) {
  const d = t('caseDemo.inventory');
  const rows = t('caseDemo.inventory.items');
  const [items, setItems] = useState(rows);

  const statusTone = (s) => (s === 'In stock' ? 'green' : s === 'Low' ? 'amber' : 'red');
  const statusLabel = (s) => (s === 'In stock' ? d.inStock : s === 'Low' ? d.low : d.out);

  const reorder = (i) =>
    setItems((ls) => ls.map((row, j) => (j === i ? { ...row, onHand: row.status === 'Out of stock' ? row.reorder : String(parseInt(row.onHand, 10) + parseInt(row.reorder, 10)), status: 'In stock' } : row)));

  const lowCount = items.filter((r) => r.status !== 'In stock').length;
  const outCount = items.filter((r) => r.status === 'Out of stock').length;
  const totalUnits = items.reduce((a, r) => a + parseInt(r.onHand, 10), 0);

  return (
    <BrowserFrame url="https://stock.demo.we2tech.pro" height={486} brand="StockPilot">
      <Box sx={{ px: 4, py: 3, background: 'linear-gradient(135deg,#0F172A,#1E293B)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ width: 32, height: 32, borderRadius: 10, background: 'linear-gradient(135deg,#F59E0B,#D97706)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 1 }}>&#128230;</Box>
          <Box>
            <Text sx={{ fontWeight: 700, fontSize: 1, fontFamily: font, lineHeight: 1.2 }}>StockPilot</Text>
            <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.6)', fontFamily: font }}>Warehouse A &middot; Tsuen Wan</Text>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 3, py: '8px', borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', fontSize: 0, fontFamily: font, border: '1px solid rgba(255,255,255,0.15)' }}>
          &#128269; Search SKU&hellip;
        </Box>
      </Box>

      <Box sx={{ p: 4 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr 1fr', null, 'repeat(4, 1fr)'], gap: 3, mb: 4 }}>
          {[
            { label: 'Total SKU', value: String(items.length), color: S.ink, icon: '\u{1F4E6}' },
            { label: 'Units on hand', value: totalUnits.toLocaleString(), color: S.teal, icon: '\u{1F4CC}' },
            { label: d.low, value: String(lowCount), color: '#B45309', icon: '\u26A0' },
            { label: d.out, value: String(outCount), color: S.red, icon: '\u2716' },
          ].map((s) => (
            <Card key={s.label} sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, fontFamily: font }}>{s.label}</Text>
                <Box sx={{ fontSize: 1 }}>{s.icon}</Box>
              </Box>
              <Text sx={{ fontSize: 3, fontWeight: 700, color: s.color, fontFamily: font }}>{s.value}</Text>
            </Card>
          ))}
        </Box>

        <Card sx={{ overflow: 'hidden' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 4, py: 3, borderBottom: '1px solid', borderColor: S.line }}>
            <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{d.title}</Text>
            <Badge tone="teal" dot={false}>{items.length} SKU</Badge>
          </Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '0.7fr 1.6fr 0.7fr 0.8fr 0.7fr 1.1fr',
              gap: 2,
              px: 4,
              py: 2,
              backgroundColor: '#F6F8FB',
              fontSize: 0,
              fontWeight: 700,
              color: S.muted,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              fontFamily: font,
            }}>
            <Text>{d.sku}</Text>
            <Text>{d.product}</Text>
            <Text sx={{ textAlign: 'right' }}>{d.onHand}</Text>
            <Text sx={{ textAlign: 'right' }}>{d.reorderLevel}</Text>
            <Text sx={{ textAlign: 'center' }}>{d.status}</Text>
            <Text sx={{ textAlign: 'right' }}>Stock level</Text>
          </Box>
          {items.map((row, i) => {
            const max = Math.max(...items.map((r) => parseInt(r.onHand, 10)), 1);
            const pct = Math.min(100, (parseInt(row.onHand, 10) / max) * 100);
            return (
              <Box
                key={row.sku}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '0.7fr 1.6fr 0.7fr 0.8fr 0.7fr 1.1fr',
                  gap: 2,
                  alignItems: 'center',
                  px: 4,
                  py: 2.5,
                  borderTop: '1px solid',
                  borderColor: S.line,
                  backgroundColor: row.status === 'Out of stock' ? 'rgba(229,72,77,0.04)' : row.status === 'Low' ? 'rgba(245,166,35,0.05)' : '#fff',
                  fontSize: 1,
                  fontFamily: font,
                  '&:hover': { backgroundColor: '#FAFBFF' },
                }}>
                <Text sx={{ fontFamily: 'Menlo, monospace', fontSize: 0, color: S.muted }}>{row.sku}</Text>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: 0 }}>
                  <Box sx={{ width: 30, height: 30, borderRadius: 9, backgroundColor: i % 2 ? '#EEF2F7' : '#E8F0EF', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 1 }}>{['\u{1F95C}', '\u2615', '\u{1F966}', '\u{1F414}'][i % 4]}</Box>
                  <Text sx={{ fontWeight: 600, color: S.ink, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.name}</Text>
                </Box>
                <Text sx={{ textAlign: 'right', fontWeight: 700, color: row.status === 'Out of stock' ? S.red : S.ink }}>{row.onHand}</Text>
                <Text sx={{ textAlign: 'right', color: S.muted }}>{row.reorder}</Text>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Badge tone={statusTone(row.status)} dot>{statusLabel(row.status)}</Badge>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2 }}>
                  <Box sx={{ width: 56, height: 6, borderRadius: 99, backgroundColor: '#E8EEF6', overflow: 'hidden' }}>
                    <Box sx={{ width: `${pct}%`, height: '100%', borderRadius: 99, backgroundColor: row.status === 'In stock' ? S.green : row.status === 'Low' ? S.amber : S.red }} />
                  </Box>
                  {row.status !== 'In stock' && (
                    <Btn tone="dark" sx={{ px: 3, py: '6px', fontSize: 0, backgroundColor: row.status === 'Out of stock' ? S.red : S.ink }} onClick={() => reorder(i)}>
                      {d.reorder}
                    </Btn>
                  )}
                </Box>
              </Box>
            );
          })}
        </Card>
      </Box>
    </BrowserFrame>
  );
}
