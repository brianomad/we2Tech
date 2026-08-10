/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Btn, Badge } from './shared';

const NFTS = [
  { id: 0, name: '#2217', color: '#7C3AED', rarity: 'Epic' },
  { id: 1, name: '#8831', color: '#D97706', rarity: 'Legendary' },
  { id: 2, name: '#1092', color: '#0E7490', rarity: 'Rare' },
  { id: 3, name: '#4560', color: '#EC4899', rarity: 'Epic' },
  { id: 4, name: '#7723', color: '#1FA971', rarity: 'Rare' },
  { id: 5, name: '#9921', color: '#BE123C', rarity: 'Legendary' },
];

export default function BlockchainDemo({ t }) {
  const d = t('caseDemo.blockchain');
  const [connected, setConnected] = useState(true);

  const rarityKey = (r) => (r === 'Rare' ? 'rare' : r === 'Epic' ? 'epic' : 'legendary');

  return (
    <BrowserFrame url="https://chain.demo.we2tech.pro" height={470}>
      <Box sx={{ p: 4 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1fr 1.6fr'], gap: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Card sx={{ p: 4, background: `linear-gradient(135deg, ${S.ink}, #1B2C45)`, border: 'none' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Text sx={{ fontSize: 0, fontWeight: 700, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font }}>
                  {d.balance}
                </Text>
                <Badge tone="green">{d.connected}</Badge>
              </Box>
              <Text sx={{ fontSize: 4, fontWeight: 700, color: '#fff', fontFamily: 'Menlo, monospace' }}>1.284 ETH</Text>
              <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.5)', fontFamily: 'Menlo, monospace', mt: 2 }}>
                0x7f3a&hellip;92bc
              </Text>
              <Btn tone="ghost" sx={{ mt: 3, py: '7px', fontSize: 0 }} onClick={() => setConnected(false)}>
                {d.connect}
              </Btn>
            </Card>
            <Card sx={{ p: 4 }}>
              <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 2 }}>
                {d.stake}
              </Text>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Text sx={{ fontSize: 2, fontWeight: 700, color: S.ink, fontFamily: font }}>1,250</Text>
                  <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>wTKN</Text>
                </Box>
                <Badge tone="purple">8.4% {d.apy}</Badge>
              </Box>
            </Card>
          </Box>
          <Box>
            <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 2 }}>
              {d.gallery} <Text as="span" sx={{ color: S.faint }}>&middot; {d.rarity}</Text>
            </Text>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
              {NFTS.map((nft) => (
                <Card key={nft.id} sx={{ overflow: 'hidden', cursor: 'pointer', '&:hover': { transform: 'translateY(-3px)' }, transition: 'transform 0.2s' }}>
                  <Box sx={{ height: 84, backgroundColor: nft.color, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box
                      sx={{
                        width: 46,
                        height: 46,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle at 30% 30%, #fff, transparent 70%)',
                        opacity: 0.9,
                      }}
                    />
                    <Box sx={{ position: 'absolute', right: 6, top: 6 }}>
                      <Badge tone={nft.rarity === 'Legendary' ? 'amber' : nft.rarity === 'Epic' ? 'purple' : 'blue'} dot={false}>
                        {d[rarityKey(nft.rarity)]}
                      </Badge>
                    </Box>
                  </Box>
                  <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text sx={{ fontWeight: 700, fontSize: 0, color: S.ink, fontFamily: 'Menlo, monospace' }}>{nft.name}</Text>
                    <Text sx={{ fontSize: 0, fontWeight: 700, color: S.teal, fontFamily: 'Menlo, monospace' }}>0.04</Text>
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
