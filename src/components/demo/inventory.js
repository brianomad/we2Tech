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

  return (
    <BrowserFrame url="https://stock.demo.we2tech.pro" height={470}>
      <Box sx={{ p: 4 }}>
        {lowCount > 0 && (
          <Box
            sx={{
              mb: 4,
              px: 3,
              py: 2,
              borderRadius: 10,
              backgroundColor: 'rgba(245,166,35,0.14)',
              border: '1px solid',
              borderColor: 'rgba(245,166,35,0.4)',
              color: '#9A5B00',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              fontSize: 1,
              fontWeight: 600,
              fontFamily: font,
            }}>
            &#9888; {d.lowStockAlerts}: {lowCount}
          </Box>
        )}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Text sx={{ fontWeight: 700, fontSize: 3, color: S.ink, fontFamily: font }}>{d.title}</Text>
          <Badge tone="teal">{items.length} SKU</Badge>
        </Box>
        <Card sx={{ overflow: 'hidden' }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '0.6fr 1.6fr 0.7fr 0.8fr 0.7fr 0.9fr',
              gap: 2,
              px: 3,
              py: 2,
              backgroundColor: '#F3F6FB',
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
            <Text sx={{ textAlign: 'right' }}></Text>
          </Box>
          {items.map((row, i) => (
            <Box
              key={row.sku}
              sx={{
                display: 'grid',
                gridTemplateColumns: '0.6fr 1.6fr 0.7fr 0.8fr 0.7fr 0.9fr',
                gap: 2,
                alignItems: 'center',
                px: 3,
                py: 2,
                borderTop: '1px solid',
                borderColor: S.line,
                backgroundColor: row.status !== 'In stock' ? 'rgba(245,166,35,0.05)' : '#fff',
                fontSize: 1,
                fontFamily: font,
              }}>
              <Text sx={{ fontFamily: 'Menlo, monospace', fontSize: 0, color: S.muted }}>{row.sku}</Text>
              <Text sx={{ fontWeight: 600, color: S.ink }}>{row.name}</Text>
              <Text sx={{ textAlign: 'right', fontWeight: 700, color: row.status === 'Out of stock' ? S.red : S.ink }}>{row.onHand}</Text>
              <Text sx={{ textAlign: 'right', color: S.muted }}>{row.reorder}</Text>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Badge tone={statusTone(row.status)}>{statusLabel(row.status)}</Badge>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {row.status !== 'In stock' && (
                  <Btn tone="dark" sx={{ px: 3, py: '6px', fontSize: 0 }} onClick={() => reorder(i)}>
                    {d.reorder}
                  </Btn>
                )}
              </Box>
            </Box>
          ))}
        </Card>
      </Box>
    </BrowserFrame>
  );
}
