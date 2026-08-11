/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Btn, Badge, Progress, Avatar, SectionLabel } from './shared';
import { AppBar, FootBar } from './chrome';
import { Toast } from './anim';

const REWARD_META = [
  { icon: '\u2615', grad: 'linear-gradient(135deg,#B45309,#92400E)' },
  { icon: '\u{1F381}', grad: 'linear-gradient(135deg,#7C3AED,#6D28D9)' },
  { icon: '\u{1F382}', grad: 'linear-gradient(135deg,#EC4899,#DB2777)' },
];

import { demoUrlFor, brandFor } from './demo-meta';

export default function LoyaltyDemo({ t, item }) {
  const d = t('caseDemo.loyalty');
  const rewards = t('caseDemo.loyalty.rewards');
  const [points, setPoints] = useState(340);
  const [redeemed, setRedeemed] = useState({});
  const [history, setHistory] = useState([
    ['Coffee order', '120', 'earned', '09:14'],
    ['Birthday bonus', '200', 'earned', 'Yesterday'],
    ['Redeemed voucher', '300', 'spent', 'Mon'],
  ]);
  const [justEarned, setJustEarned] = useState(false);

  const redeem = (i) => {
    const cost = parseInt(rewards[i].points, 10);
    if (points < cost) return;
    setPoints((p) => p - cost);
    setRedeemed((r) => ({ ...r, [i]: true }));
    setHistory((h) => [[`Redeemed: ${rewards[i].name}`, `\u2212${cost}`, 'spent', 'Just now'], ...h]);
  };

  const earn = () => {
    const gain = 25 + Math.round(Math.random() * 30);
    setPoints((p) => p + gain);
    setHistory((h) => [[`Purchase \u00B7 Coffee + pastry`, `+${gain}`, 'earned', 'Just now'], ...h]);
    setJustEarned(true);
    setTimeout(() => setJustEarned(false), 2600);
  };

  const NEXT = 500;

  return (
    <BrowserFrame url={demoUrlFor(item, 'https://rewards.demo.we2tech.pro')} height={540} brand={brandFor(item, 'Perks Club')}>
      <AppBar brand={brandFor(item, 'Perks Club')} sub={d.title} light nav={[d.title, d.rewardsTitle, d.historyTitle]} active={0} />

      <Box sx={{ p: [3, null, 4], position: 'relative', pb: 6 }}>
        <Card sx={{ p: 4, mb: 4, background: 'linear-gradient(135deg,#7C2D12,#B45309)', border: 'none', boxShadow: '0 18px 40px rgba(180,83,9,0.35)', overflow: 'hidden', position: 'relative' }}>
          <Box sx={{ position: 'absolute', width: 140, height: 140, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.12), transparent 70%)', top: -40, right: -30 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 3, position: 'relative' }}>
            <Box>
              <Text sx={{ fontSize: 0, fontWeight: 700, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '1.2px', fontFamily: font }}>
                {d.yourPoints}
              </Text>
              <Text sx={{ fontSize: 5, fontWeight: 700, color: '#fff', fontFamily: font, mt: '2px' }}>{points.toLocaleString()}</Text>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
                <Badge tone="amber" dot={false}>&#9733; Gold member</Badge>
                <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.75)', fontFamily: font }}>
                  {d.nextReward}: {Math.max(0, NEXT - points)}
                </Text>
              </Box>
            </Box>
            <Box sx={{ width: ['100%', 230] }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 0, color: 'rgba(255,255,255,0.7)', fontFamily: font, mb: 1 }}>
                <Text>{Math.min(100, Math.round((points / NEXT) * 100))}%</Text>
                <Text>{points}/{NEXT}</Text>
              </Box>
              <Progress pct={Math.min(100, (points / NEXT) * 100)} color="#FDE047" sx={{ backgroundColor: 'rgba(255,255,255,0.25)', height: 10 }} />
              <Btn
                tone="white"
                sx={{ mt: 3, width: '100%', py: '8px', fontSize: 0, backgroundColor: '#FDE047', color: '#7C2D12', boxShadow: '0 8px 18px rgba(0,0,0,0.25)' }}
                onClick={earn}>
                &#128722; {d.simulateEarn}
              </Btn>
            </Box>
          </Box>
        </Card>

        <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1.3fr 1fr'], gap: 4 }}>
          <Box>
            <SectionLabel>{d.rewardsTitle}</SectionLabel>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {rewards.map((r, i) => {
                const meta = REWARD_META[i % REWARD_META.length];
                const cost = parseInt(r.points, 10);
                const canAfford = points >= cost;
                return (
                  <Card key={r.name} sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 3, opacity: redeemed[i] ? 0.75 : 1, '&:hover': { boxShadow: '0 10px 26px rgba(15,33,55,0.1)' }, transition: 'all 0.15s' }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: 13, background: meta.grad, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 2, flexShrink: 0, boxShadow: '0 6px 14px rgba(0,0,0,0.2)' }}>
                      {meta.icon}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{r.name}</Text>
                      <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>
                        {redeemed[i] ? 'Redeemed \u2713' : canAfford ? 'Ready to redeem' : `${cost - points} more to go`}
                      </Text>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                      <Text sx={{ fontWeight: 700, fontSize: 1, color: canAfford ? S.tealDark : S.muted, fontFamily: font }}>{r.points} pts</Text>
                      <Btn
                        tone={redeemed[i] ? 'ghost' : canAfford ? 'primary' : 'ghost'}
                        sx={{ mt: 1, px: 3, py: '6px', fontSize: 0, whiteSpace: 'nowrap' }}
                        disabled={redeemed[i] || !canAfford}
                        onClick={() => redeem(i)}>
                        {redeemed[i] ? '\u2713' : d.redeem}
                      </Btn>
                    </Box>
                  </Card>
                );
              })}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Card sx={{ p: 4 }}>
              <SectionLabel>{d.earnMore}</SectionLabel>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Box sx={{ width: 56, height: 56, borderRadius: 14, backgroundColor: '#FFF7E6', border: '1px solid', borderColor: '#FBE3B8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 2, flexShrink: 0 }}>
                  &#128247;
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>QR code</Text>
                  <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font, mt: '2px' }}>{d.scanNote}</Text>
                </Box>
                <Badge tone="amber" dot={false}>{d.pointsEarned} +1/&#36;10</Badge>
              </Box>
            </Card>
            <Card sx={{ p: 4 }}>
              <SectionLabel>{d.historyTitle}</SectionLabel>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {history.slice(0, 4).map(([label, pts, type, time], i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 3, py: 2, borderBottom: '1px solid', borderColor: S.line, ':last-child': { border: 'none' } }}>
                    <Avatar label={label.slice(0, 1)} color={type === 'earned' ? S.green : S.pink} size={34} />
                    <Box sx={{ flex: 1 }}>
                      <Text sx={{ fontSize: 1, color: S.ink, fontWeight: 600, fontFamily: font }}>{label}</Text>
                      <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{time}</Text>
                    </Box>
                    <Badge tone={type === 'earned' ? 'green' : 'red'} dot={false}>
                      {type === 'earned' ? `+${pts}` : `\u2212${pts}`}
                    </Badge>
                  </Box>
                ))}
              </Box>
            </Card>
            <Box sx={{ p: 3, borderRadius: 12, backgroundColor: '#FFF7E6', border: '1px dashed', borderColor: '#E2B84C', display: 'flex', alignItems: 'center', gap: 2, fontSize: 0, color: '#92400E', fontFamily: font }}>
              &#128274; {d.weeklyGoal}: 3 purchases to unlock +100 bonus
            </Box>
          </Box>
        </Box>

        {justEarned && (
          <Box sx={{ position: 'absolute', right: 3, bottom: 16, display: ['none', null, 'block'] }}>
            <Toast tone="light">
              <Box sx={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(31,169,113,0.15)', color: S.green, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&#10003;</Box>
              <Box>
                <Text sx={{ display: 'block', fontWeight: 700 }}>{d.pointsEarned}</Text>
                <Text sx={{ display: 'block', color: S.muted, fontWeight: 600 }}>+pts added to balance</Text>
              </Box>
            </Toast>
          </Box>
        )}
      </Box>

      <FootBar light left={`${d.yourPoints} ${points.toLocaleString()}`} right="Synced just now" />
    </BrowserFrame>
  );
}
