/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState, useEffect } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Badge, Btn, StatusDot } from './shared';
import { FootBar, Skeleton, LoadingRows, StatCard } from './chrome';
import { Toast } from './anim';

import { demoUrlFor, brandFor } from './demo-meta';

export default function InventoryDemo({ t, item }) {
  const d = t('caseDemo.inventory');
  const rows = t('caseDemo.inventory.items');
  const [items, setItems] = useState(rows);
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const statusTone = (s) => (s === 'In stock' ? 'green' : s === 'Low' ? 'amber' : 'red');
  const statusLabel = (s) => (s === 'In stock' ? d.inStock : s === 'Low' ? d.low : d.out);

  const reorder = (i) => {
    setItems((ls) => ls.map((row, j) => (j === i ? { ...row, onHand: row.status === 'Out of stock' ? row.reorder : String(parseInt(row.onHand, 10) + parseInt(row.reorder, 10)), status: 'In stock' } : row)));
    setToast(i);
    setTimeout(() => setToast(null), 2200);
  };

  const lowCount = items.filter((r) => r.status !== 'In stock').length;
  const outCount = items.filter((r) => r.status === 'Out of stock').length;
  const totalUnits = items.reduce((a, r) => a + parseInt(r.onHand, 10), 0);

  const openDetail = (i) => setDetail(items[i]);

  return (
    <BrowserFrame url={demoUrlFor(item, 'https://stock.demo.we2tech.pro')} height={540} brand={brandFor(item, 'StockPilot')}>
      <Box sx={{ position: 'relative', flex: 1 }}>
        <Box sx={{ px: [3, 4], py: 3, background: 'linear-gradient(135deg,#0F172A,#1E293B)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
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

        <Box sx={{ p: [3, 4] }}>
          {loading ? (
            <>
              <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr 1fr', null, 'repeat(4, 1fr)'], gap: 3, mb: 4 }}>
                {[0, 1, 2, 3].map((i) => (
                  <Card key={i} sx={{ p: 3 }}>
                    <Skeleton w="55%" h={9} />
                    <Skeleton w="65%" h={18} sx={{ mt: 2 }} />
                  </Card>
                ))}
              </Box>
              <Card sx={{ p: 4 }}>
                <Skeleton w="30%" h={14} />
                <Skeleton w="100%" h={10} sx={{ mt: 3 }} />
                <Skeleton w="100%" h={10} sx={{ mt: 2 }} />
                <Skeleton w="100%" h={10} sx={{ mt: 2 }} />
                <Skeleton w="70%" h={10} sx={{ mt: 2 }} />
              </Card>
            </>
          ) : (
            <>
              <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr 1fr', null, 'repeat(4, 1fr)'], gap: 3, mb: 4 }}>
                {[
                  { label: 'Total SKU', value: String(items.length), color: S.ink, icon: '\u{1F4E6}' },
                  { label: 'Units on hand', value: totalUnits.toLocaleString(), color: S.teal, icon: '\u{1F4CC}' },
                  { label: d.low, value: String(lowCount), color: '#B45309', icon: '\u26A0' },
                  { label: d.out, value: String(outCount), color: S.red, icon: '\u2716' },
                ].map((s) => (
                  <StatCard key={s.label} label={s.label} value={s.value} icon={s.icon} color={s.color} bg={`${s.color}14`} />
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
                      onClick={() => openDetail(i)}
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
                        cursor: 'pointer',
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
                          <Btn tone="dark" sx={{ px: 3, py: '6px', fontSize: 0, backgroundColor: row.status === 'Out of stock' ? S.red : S.ink }} onClick={(e) => { e.stopPropagation(); reorder(i); }}>
                            {d.reorder}
                          </Btn>
                        )}
                      </Box>
                    </Box>
                  );
                })}
              </Card>
            </>
          )}
        </Box>

        {detail && (
          <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 20, p: 3 }}>
            <Card sx={{ p: 4, maxWidth: 400, width: '100%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ width: 40, height: 40, borderRadius: 11, backgroundColor: '#E8F0EF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 2 }}>&#128230;</Box>
                  <Box>
                    <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{detail.name}</Text>
                    <Text sx={{ fontSize: 0, color: S.muted, fontFamily: 'Menlo, monospace' }}>{detail.sku}</Text>
                  </Box>
                </Box>
                <Box onClick={() => setDetail(null)} sx={{ cursor: 'pointer', color: S.muted, fontSize: 1 }}>&#10005;</Box>
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 3 }}>
                {[
                  ['On hand', detail.onHand],
                  ['Reorder level', detail.reorder],
                  ['Location', 'Aisle 3'],
                  ['Supplier', 'Luen Hing Co.'],
                ].map(([l, v]) => (
                  <Box key={l} sx={{ p: 3, borderRadius: 12, backgroundColor: '#F6F8FB' }}>
                    <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{l}</Text>
                    <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{v}</Text>
                  </Box>
                ))}
              </Box>
              <Badge tone={statusTone(detail.status)} dot sx={{ mb: 3 }}>{statusLabel(detail.status)}</Badge>
              <Btn tone="primary" sx={{ width: '100%' }} disabled={detail.status === 'In stock'} onClick={() => { reorder(items.findIndex((r) => r.sku === detail.sku)); setDetail(null); }}>
                {d.reorder} &#8594;
              </Btn>
            </Card>
          </Box>
        )}

        {toast !== null && (
          <Box sx={{ position: 'absolute', right: 4, bottom: 14, zIndex: 21, display: ['none', null, 'block'] }}>
            <Toast tone="light">
              <Box sx={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(31,169,113,0.14)', color: S.green, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&#10003;</Box>
              <Box>
                <Text sx={{ display: 'block', fontWeight: 700 }}>{items[toast].name}</Text>
                <Text sx={{ display: 'block', color: S.muted, fontWeight: 600 }}>{d.reorder} &#183; PO created</Text>
              </Box>
            </Toast>
          </Box>
        )}
      </Box>

      <FootBar light left={`${d.title} &middot; ${items.length} SKUs`} right="Synced 2s ago" />
    </BrowserFrame>
  );
}
