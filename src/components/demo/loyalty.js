/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Btn, Badge, Progress, Avatar } from './shared';

export default function LoyaltyDemo({ t }) {
  const d = t('caseDemo.loyalty');
  const rewards = t('caseDemo.loyalty.rewards');
  const [points, setPoints] = useState(340);
  const [redeemed, setRedeemed] = useState({});

  const redeem = (i) => {
    const cost = parseInt(rewards[i].points, 10);
    if (points < cost) return;
    setPoints((p) => p - cost);
    setRedeemed((r) => ({ ...r, [i]: true }));
  };

  return (
    <BrowserFrame url="https://rewards.demo.we2tech.pro" height={470}>
      <Box sx={{ p: 4 }}>
        <Card sx={{ p: 4, mb: 4, background: `linear-gradient(135deg, ${S.teal}, #0E7490)`, border: 'none' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 3 }}>
            <Box>
              <Text sx={{ fontSize: 0, fontWeight: 700, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font }}>
                {d.yourPoints}
              </Text>
              <Text sx={{ fontSize: 5, fontWeight: 700, color: '#fff', fontFamily: font }}>{points.toLocaleString()}</Text>
              <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.8)', fontFamily: font }}>
                {d.nextReward}: {Math.max(0, 500 - points)}
              </Text>
            </Box>
            <Box sx={{ width: ['100%', 220] }}>
              <Progress pct={Math.min(100, (points / 500) * 100)} color="#fff" sx={{ backgroundColor: 'rgba(255,255,255,0.25)' }} />
            </Box>
          </Box>
        </Card>

        <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1.2fr 1fr'], gap: 4 }}>
          <Box>
            <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 2 }}>
              {d.rewardsTitle}
            </Text>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {rewards.map((r, i) => (
                <Card key={r.name} sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Box sx={{ width: 42, height: 42, borderRadius: 10, backgroundColor: [S.amber, S.teal, S.pink][i % 3], color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 2 }}>
                    {['\u{1F415}', '\u{1F381}', '\u{1F381}'][i]}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{r.name}</Text>
                    <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{r.points} {d.yourPoints.toLowerCase()}</Text>
                  </Box>
                  <Btn
                    tone={redeemed[i] ? 'ghost' : points >= parseInt(r.points, 10) ? 'primary' : 'ghost'}
                    sx={{ px: 3, py: '7px', fontSize: 0 }}
                    disabled={redeemed[i] || points < parseInt(r.points, 10)}
                    onClick={() => redeem(i)}>
                    {redeemed[i] ? '\u2713' : d.redeem}
                  </Btn>
                </Card>
              ))}
            </Box>
          </Box>
          <Card sx={{ p: 4, alignSelf: 'start' }}>
            <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 2 }}>
              {d.historyTitle}
            </Text>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {[
                ['Coffee order', '120', 'earned'],
                ['Birthday bonus', '200', 'earned'],
                ['Redeemed voucher', '300', 'spent'],
              ].map(([label, pts, type]) => (
                <Box key={label} sx={{ display: 'flex', alignItems: 'center', gap: 3, py: 2, borderBottom: '1px solid', borderColor: S.line, ':last-child': { border: 'none' } }}>
                  <Avatar label={label.slice(0, 1)} color={type === 'earned' ? S.teal : S.pink} size={32} />
                  <Text sx={{ flex: 1, fontSize: 1, color: S.ink, fontWeight: 600, fontFamily: font }}>{label}</Text>
                  <Badge tone={type === 'earned' ? 'green' : 'red'} dot={false}>
                    {type === 'earned' ? `+${pts}` : `\u2212${pts}`}
                  </Badge>
                </Box>
              ))}
            </Box>
          </Card>
        </Box>
      </Box>
    </BrowserFrame>
  );
}
