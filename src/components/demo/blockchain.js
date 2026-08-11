/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState, useEffect } from 'react';
import { S, font, Card, Btn, Badge, SectionLabel, Field } from './shared';
import { AppBar, Skeleton } from './chrome';
import { Toast } from './anim';

const NFTS = [
  { id: 0, name: 'Nebula #2217', grad: 'linear-gradient(135deg,#7C3AED,#4C1D95)', rarity: 'Epic' },
  { id: 1, name: 'Aurora #8831', grad: 'linear-gradient(135deg,#F59E0B,#B45309)', rarity: 'Legendary' },
  { id: 2, name: 'Tide #1092', grad: 'linear-gradient(135deg,#0EA5E9,#0369A1)', rarity: 'Rare' },
  { id: 3, name: 'Blossom #4560', grad: 'linear-gradient(135deg,#EC4899,#BE185D)', rarity: 'Epic' },
  { id: 4, name: 'Ember #7723', grad: 'linear-gradient(135deg,#22C55E,#15803D)', rarity: 'Rare' },
  { id: 5, name: 'Nova #9921', grad: 'linear-gradient(135deg,#EF4444,#991B1B)', rarity: 'Legendary' },
];

const RARITY_TONE = { Rare: 'blue', Epic: 'purple', Legendary: 'amber' };

const TXS = [
  { type: 'in', who: '0x3f8a\u2026d21c', amt: '+0.42 ETH', time: '2 min ago', color: S.green, icon: '\u2B07' },
  { type: 'out', who: '0x91c2\u2026bb0e', amt: '\u22120.08 ETH', time: '1 hr ago', color: S.red, icon: '\u2197' },
  { type: 'swap', who: 'Uniswap V3', amt: '250 wTKN', time: 'Yesterday', color: S.purple, icon: '\u21C4' },
  { type: 'mint', who: 'NovaChain', amt: '+0.05 ETH', time: '2 days ago', color: S.cyan, icon: '\u2728' },
  { type: 'in', who: '0x7a11\u2026e09f', amt: '+0.15 ETH', time: '3 days ago', color: S.green, icon: '\u2B07' },
  { type: 'in', who: '0x5d90\u2026c332', amt: '+0.06 ETH', time: '4 days ago', color: S.green, icon: '\u2B07' },
];

import { brandFor } from './demo-meta';

export default function BlockchainDemo({ t, item }) {
  const d = t('caseDemo.blockchain');
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState(0); // 0 wallet, 1 gallery, 2 activity
  const [sendOpen, setSendOpen] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [sent, setSent] = useState(false);
  const [to, setTo] = useState('0x91c2\u2026bb0e');
  const [amt, setAmt] = useState('0.05');
  const [txList, setTxList] = useState(TXS);

  const rarityKey = (r) => (r === 'Rare' ? 'rare' : r === 'Epic' ? 'epic' : 'legendary');
  const views = [d.balance, d.gallery, d.history];

  const connect = () => {
    if (connected) return;
    setLoading(true);
    setTimeout(() => {
      setConnected(true);
      setLoading(false);
    }, 1100);
  };

  useEffect(() => {
    if (!confirming) return;
    const timer = setTimeout(() => {
      setConfirming(false);
      setSent(true);
      setTxList((ls) => [
        { type: 'out', who: to, amt: `\u2212${amt} ETH`, time: 'Just now', color: S.red, icon: '\u2197' },
        ...ls,
      ]);
      setTimeout(() => setSent(false), 2600);
      setSendOpen(false);
    }, 1400);
    return () => clearTimeout(timer);
  }, [confirming]);

  return (
    <>
      <AppBar
        brand={brandFor(item, 'NovaChain')}
        icon={'\u9732'}
        grad="linear-gradient(135deg,#0B1220,#1E1B4B)"
        nav={views}
        active={view}
        onSelect={setView}
        right={
          <Btn
            tone={connected ? 'ghost' : 'primary'}
            sx={{ px: 3, py: '6px', fontSize: 0, backgroundColor: connected ? 'rgba(34,197,94,0.15)' : '#8B5CF6', color: connected ? '#4ADE80' : '#fff', border: connected ? '1px solid rgba(34,197,94,0.4)' : 'none', boxShadow: 'none' }}
            onClick={connect}>
            {loading ? d.connect + '\u2026' : connected ? `\u25CF ${d.connected}` : `+ ${d.connect}`}
          </Btn>
        }
      />

      <Box sx={{ background: 'radial-gradient(circle at 70% 0%, #1E1B4B 0%, #0B1220 60%)', p: [3, null, 4], minHeight: 470, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        {!connected ? (
          <Card sx={{ p: 6, textAlign: 'center', background: 'rgba(255,255,255,0.04)', border: '1px dashed rgba(255,255,255,0.18)', maxWidth: 420, mx: 'auto', my: 'auto' }}>
            <Box sx={{ width: 72, height: 72, mx: 'auto', borderRadius: '50%', background: 'linear-gradient(135deg,#8B5CF6,#EC4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 4, mb: 3, boxShadow: '0 18px 40px rgba(139,92,246,0.45)' }}>&#128179;</Box>
            <Text sx={{ display: 'block', fontWeight: 700, fontSize: 2, color: '#fff', fontFamily: font, mb: 1 }}>{d.title}</Text>
            <Text sx={{ display: 'block', fontSize: 0, color: 'rgba(255,255,255,0.55)', fontFamily: font, mb: 4, lineHeight: 1.7 }}>
              Wallet &middot; NFTs &middot; Staking
            </Text>
            <Btn tone="primary" sx={{ backgroundColor: '#8B5CF6', backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.2), transparent 55%)', boxShadow: '0 10px 24px rgba(139,92,246,0.45)' }} onClick={connect}>
              {loading ? <>&#8987; {d.connect}&hellip;</> : `+ ${d.connect}`}
            </Btn>
          </Card>
        ) : (
          <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1fr 1.7fr'], gap: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Card sx={{ p: 4, background: 'linear-gradient(135deg,#7C3AED,#4C1D95)', border: 'none', boxShadow: '0 18px 40px rgba(124,58,237,0.4)' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                  <Text sx={{ fontSize: 0, fontWeight: 700, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font }}>
                    {d.balance}
                  </Text>
                  <Box sx={{ fontSize: 2 }}>&#128176;</Box>
                </Box>
                <Text sx={{ fontSize: 4, fontWeight: 700, color: '#fff', fontFamily: 'Menlo, monospace' }}>1.284 ETH</Text>
                <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.65)', fontFamily: 'Menlo, monospace', mt: 1 }}>&asymp; US$4,120.00</Text>
                <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.5)', fontFamily: 'Menlo, monospace', mt: 2 }}>
                  0x7f3a&hellip;92bc
                </Text>
                <Box sx={{ mt: 3, display: 'flex', alignItems: 'flex-end', height: 34, gap: 1 }}>
                  {[30, 42, 38, 55, 48, 62, 58, 72, 66, 80, 74, 88].map((h, i) => (
                    <Box key={i} sx={{ flex: 1, height: `${h}%`, borderRadius: 3, background: i === 11 ? '#fff' : 'rgba(255,255,255,0.35)' }} />
                  ))}
                </Box>
              </Card>

              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
                <Card sx={{ p: 4, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <SectionLabel sx={{ color: 'rgba(255,255,255,0.5)' }}>{d.stake}</SectionLabel>
                  <Text sx={{ fontSize: 2, fontWeight: 700, color: '#fff', fontFamily: font }}>1,250 <Text as="span" sx={{ fontSize: 0, color: 'rgba(255,255,255,0.5)' }}>wTKN</Text></Text>
                  <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.45)', fontFamily: font, mt: '2px' }}>+32.4 wTKN this month</Text>
                  <Badge tone="purple" sx={{ mt: 2 }}>8.4% {d.apy}</Badge>
                </Card>
                <Card
                  onClick={() => setSendOpen(true)}
                  sx={{ p: 4, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2, '&:hover': { borderColor: 'rgba(139,92,246,0.6)', backgroundColor: 'rgba(139,92,246,0.12)' }, transition: 'all 0.15s' }}>
                  <Box sx={{ width: 44, height: 44, borderRadius: 13, background: 'linear-gradient(135deg,#22D3EE,#3B82F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 1, boxShadow: '0 8px 18px rgba(34,211,238,0.35)' }}>&#8689;</Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Text sx={{ fontWeight: 700, fontSize: 1, color: '#fff', fontFamily: font }}>{d.send}</Text>
                    <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.45)', fontFamily: font }}>{d.sendNote}</Text>
                  </Box>
                </Card>
              </Box>
            </Box>

            {view === 0 && (
              <Box>
                <SectionLabel sx={{ color: 'rgba(255,255,255,0.5)' }}>
                  {d.history}
                </SectionLabel>
                <Card sx={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                  {txList.map((tx, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 3, px: 3, py: 2.5, borderBottom: '1px solid rgba(255,255,255,0.08)', ':last-child': { border: 'none' }, '&:hover': { backgroundColor: 'rgba(255,255,255,0.04)' } }}>
                      <Box sx={{ width: 36, height: 36, borderRadius: 10, backgroundColor: `${tx.color}22`, color: tx.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 1, flexShrink: 0 }}>{tx.icon}</Box>
                      <Box sx={{ flex: 1 }}>
                        <Text sx={{ fontWeight: 700, fontSize: 1, color: '#E2E8F0', fontFamily: font, textTransform: 'capitalize' }}>
                          {tx.type === 'in' ? d.incoming : tx.type === 'out' ? d.outgoing : tx.type === 'swap' ? d.swap : d.mint}
                        </Text>
                        <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.45)', fontFamily: 'Menlo, monospace' }}>{tx.who} &middot; {tx.time}</Text>
                      </Box>
                      <Text sx={{ fontWeight: 700, fontSize: 1, color: tx.color, fontFamily: 'Menlo, monospace' }}>{tx.amt}</Text>
                    </Box>
                  ))}
                </Card>
              </Box>
            )}

            {view === 1 && (
              <Box>
                <SectionLabel sx={{ color: 'rgba(255,255,255,0.5)' }}>
                  {d.gallery} <Text as="span" sx={{ color: 'rgba(255,255,255,0.3)' }}>&middot; {d.rarity}</Text>
                </SectionLabel>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
                  {NFTS.map((nft) => (
                    <Card key={nft.id} sx={{ overflow: 'hidden', cursor: 'pointer', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 16px 34px rgba(0,0,0,0.4)' }, transition: 'all 0.2s' }}>
                      <Box sx={{ height: 88, background: nft.grad, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <Box sx={{ position: 'absolute', width: 60, height: 60, borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), transparent 70%)', top: -12, right: -8 }} />
                        <Box sx={{ position: 'absolute', width: 34, height: 34, borderRadius: '50%', background: 'radial-gradient(circle at 40% 40%, rgba(255,255,255,0.5), transparent 70%)', bottom: 6, left: 8 }} />
                        <Box sx={{ fontSize: 3, filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.4))' }}>&#11088;</Box>
                        <Box sx={{ position: 'absolute', right: 6, top: 6 }}>
                          <Badge tone={RARITY_TONE[nft.rarity]} dot={false}>{d[rarityKey(nft.rarity)]}</Badge>
                        </Box>
                      </Box>
                      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                        <Text sx={{ fontWeight: 700, fontSize: 0, color: '#E2E8F0', fontFamily: font }}>{nft.name}</Text>
                        <Text sx={{ fontSize: 0, fontWeight: 700, color: '#A78BFA', fontFamily: 'Menlo, monospace' }}>0.04</Text>
                      </Box>
                    </Card>
                  ))}
                </Box>
              </Box>
            )}

            {view === 2 && (
              <Card sx={{ p: 5, textAlign: 'center', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Box sx={{ width: 64, height: 64, mx: 'auto', borderRadius: '50%', background: 'rgba(139,92,246,0.2)', color: '#A78BFA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 3, mb: 3 }}>&#128202;</Box>
                <Text sx={{ display: 'block', fontWeight: 700, color: '#fff', fontFamily: font }}>{d.gallery} &amp; {d.stake}</Text>
                <Text sx={{ display: 'block', fontSize: 0, color: 'rgba(255,255,255,0.5)', fontFamily: font, mt: 1 }}>Analytics view &middot; demo</Text>
              </Card>
            )}
          </Box>
        )}

        {sendOpen && (
          <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 20, p: 3 }}>
            <Card sx={{ p: 4, maxWidth: 420, width: '100%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Text sx={{ fontWeight: 700, fontSize: 2, color: S.ink, fontFamily: font }}>{confirming ? d.review : d.send}</Text>
                {!confirming && (
                  <Box onClick={() => setSendOpen(false)} sx={{ cursor: 'pointer', color: S.muted, fontSize: 1 }}>&#10005;</Box>
                )}
              </Box>
              {!confirming ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Field label={d.sendTo} value={to} onChange={(e) => setTo(e.target.value)} mono />
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Text sx={{ fontSize: 0, fontWeight: 700, color: S.slate, fontFamily: font }}>{d.amount}</Text>
                      <Text onClick={() => setAmt('1.284')} sx={{ fontSize: 0, fontWeight: 700, color: '#8B5CF6', cursor: 'pointer', fontFamily: font }}>{d.max}: 1.284</Text>
                    </Box>
                    <Box
                      sx={{
                        px: 3,
                        py: 2,
                        borderRadius: 10,
                        border: '1px solid',
                        borderColor: S.line,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Box
                        as="input"
                        value={amt}
                        onChange={(e) => setAmt(e.target.value)}
                        sx={{ border: 'none', outline: 'none', fontSize: 1, fontFamily: 'Menlo, monospace', color: S.ink, flex: 1 }} />
                      <Text sx={{ fontWeight: 700, color: S.purple, fontFamily: font }}>ETH</Text>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 0, color: S.muted, fontFamily: font }}>
                    <Text>{d.gas}</Text>
                    <Text sx={{ fontWeight: 700, color: S.slate }}>&asymp; 0.0021 ETH</Text>
                  </Box>
                  <Btn tone="primary" sx={{ backgroundColor: '#8B5CF6', backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.2), transparent 55%)', width: '100%' }} onClick={() => setConfirming(true)}>
                    {d.sendCta}
                  </Btn>
                </Box>
              ) : (
                <Box sx={{ textAlign: 'center', py: 3 }}>
                  <Box sx={{ width: 56, height: 56, mx: 'auto', borderRadius: '50%', border: '4px solid', borderColor: S.line, borderTopColor: '#8B5CF6', animation: 'spin 0.9s linear infinite' }} />
                  <Text sx={{ display: 'block', mt: 3, fontSize: 1, color: S.slate, fontFamily: font }}>{d.sendCta}&hellip;</Text>
                  <Text sx={{ display: 'block', mt: 1, fontSize: 0, color: S.muted, fontFamily: 'Menlo, monospace' }}>{amt} ETH</Text>
                </Box>
              )}
            </Card>
          </Box>
        )}

        {sent && (
          <Box sx={{ position: 'absolute', right: 3, bottom: 14, zIndex: 21, display: ['none', null, 'block'] }}>
            <Toast tone="dark">
              <Box sx={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(74,222,128,0.2)', color: '#4ADE80', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&#10003;</Box>
              <Box>
                <Text sx={{ display: 'block', fontWeight: 700 }}>{d.confirmed}</Text>
                <Text sx={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{amt} ETH &middot; {d.txId} 0x8b&hellip;e11f</Text>
              </Box>
            </Toast>
          </Box>
        )}

        <Box
          sx={{
            mt: 'auto',
            pt: 3,
            pb: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            flexWrap: 'wrap',
            borderTop: '1px solid rgba(255,255,255,0.14)',
            color: 'rgba(255,255,255,0.65)',
            fontFamily: 'Menlo, monospace',
            fontSize: 0,
            fontWeight: 600,
          }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22C55E', boxShadow: '0 0 0 3px rgba(34,197,94,0.22)', flexShrink: 0 }} />
            <Text>NovaChain {d.mainnet}</Text>
          </Box>
          <Text>{d.blockHeight} 24,981,204</Text>
        </Box>
      </Box>
    </>
  );
}
