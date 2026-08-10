/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Btn, Badge, SectionLabel } from './shared';

const NFTS = [
  { id: 0, name: 'Nebula #2217', grad: 'linear-gradient(135deg,#7C3AED,#4C1D95)', rarity: 'Epic' },
  { id: 1, name: 'Aurora #8831', grad: 'linear-gradient(135deg,#F59E0B,#B45309)', rarity: 'Legendary' },
  { id: 2, name: 'Tide #1092', grad: 'linear-gradient(135deg,#0EA5E9,#0369A1)', rarity: 'Rare' },
  { id: 3, name: 'Blossom #4560', grad: 'linear-gradient(135deg,#EC4899,#BE185D)', rarity: 'Epic' },
  { id: 4, name: 'Ember #7723', grad: 'linear-gradient(135deg,#22C55E,#15803D)', rarity: 'Rare' },
  { id: 5, name: 'Nova #9921', grad: 'linear-gradient(135deg,#EF4444,#991B1B)', rarity: 'Legendary' },
];

const RARITY_TONE = { Rare: 'blue', Epic: 'purple', Legendary: 'amber' };

export default function BlockchainDemo({ t }) {
  const d = t('caseDemo.blockchain');
  const [connected, setConnected] = useState(true);

  const rarityKey = (r) => (r === 'Rare' ? 'rare' : r === 'Epic' ? 'epic' : 'legendary');

  return (
    <BrowserFrame url="https://chain.demo.we2tech.pro" height={486} brand="NovaChain">
      <Box sx={{ background: 'radial-gradient(circle at 70% 0%, #1E1B4B 0%, #0B1220 60%)', p: [4, null, 5] }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
          <Text sx={{ fontWeight: 700, fontSize: 1, color: '#fff', fontFamily: font }}>
            <Box as="span" sx={{ display: 'inline-flex', width: 30, height: 30, borderRadius: 9, background: 'linear-gradient(135deg,#8B5CF6,#EC4899)', alignItems: 'center', justifyContent: 'center', mr: 2, fontSize: 1 }}>&#9732;</Box>
            NovaChain
          </Text>
          <Btn
            tone={connected ? 'ghost' : 'primary'}
            sx={{ px: 3, py: '7px', fontSize: 0, backgroundColor: connected ? 'rgba(34,197,94,0.15)' : '#8B5CF6', color: connected ? '#4ADE80' : '#fff', border: connected ? '1px solid rgba(34,197,94,0.4)' : 'none' }}
            onClick={() => setConnected(!connected)}>
            {connected ? <>&#9679; {d.connected}</> : `+ ${d.connect}`}
          </Btn>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1fr 1.6fr'], gap: 4 }}>
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
            <Card sx={{ p: 4, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <SectionLabel sx={{ color: 'rgba(255,255,255,0.5)' }}>{d.stake}</SectionLabel>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Text sx={{ fontSize: 2, fontWeight: 700, color: '#fff', fontFamily: font }}>1,250 <Text as="span" sx={{ fontSize: 0, color: 'rgba(255,255,255,0.5)' }}>wTKN</Text></Text>
                  <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.45)', fontFamily: font, mt: '2px' }}>+32.4 wTKN this month</Text>
                </Box>
                <Badge tone="purple">8.4% {d.apy}</Badge>
              </Box>
            </Card>
            <Card sx={{ p: 3, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: 3 }}>
              <Box sx={{ width: 40, height: 40, borderRadius: 12, background: 'linear-gradient(135deg,#22D3EE,#3B82F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 1 }}>&#8689;</Box>
              <Box sx={{ flex: 1 }}>
                <Text sx={{ fontWeight: 700, fontSize: 1, color: '#fff', fontFamily: font }}>Send</Text>
                <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.45)', fontFamily: font }}>Transfer to any wallet</Text>
              </Box>
              <Text sx={{ color: 'rgba(255,255,255,0.5)' }}>&#10146;</Text>
            </Card>
          </Box>

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
        </Box>
      </Box>
    </BrowserFrame>
  );
}
