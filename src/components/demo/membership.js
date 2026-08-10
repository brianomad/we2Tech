/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Btn, Badge, Avatar, SectionLabel } from './shared';

const TIER_STYLE = [
  { grad: 'linear-gradient(135deg,#F1F5F9,#E2E8F0)', tint: S.slate, hot: false },
  { grad: 'linear-gradient(135deg,#FFF7E6,#FBE3B8)', tint: '#9A6B00', hot: true },
  { grad: 'linear-gradient(135deg,#0F2137,#1B2C45)', tint: S.gold, hot: false },
];

export default function MembershipDemo({ t }) {
  const d = t('caseDemo.membership');
  const plans = t('caseDemo.membership.plans');
  const [current, setCurrent] = useState(1);
  const [points] = useState('2,180');

  return (
    <BrowserFrame url="https://members.demo.we2tech.pro" height={500} brand="The Ascot Club">
      <Box sx={{ background: 'linear-gradient(180deg,#0B1B33 0%, #0F2137 100%)', p: [4, null, 5] }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4, flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Avatar label="A" color={S.gold} size={46} />
            <Box>
              <Text sx={{ display: 'block', fontWeight: 700, fontSize: 2, color: '#fff', fontFamily: font }}>Amanda Lee</Text>
              <Text sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: 0, color: S.gold, fontFamily: font }}>
                <Badge tone="amber" dot={false}>&#9733; Member</Badge>
              </Text>
            </Box>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Text sx={{ fontSize: 0, fontWeight: 700, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font }}>
              {d.pointsBalance}
            </Text>
            <Text sx={{ fontSize: 3, fontWeight: 700, color: S.gold, fontFamily: font }}>{points}</Text>
          </Box>
        </Box>

        <SectionLabel color="rgba(255,255,255,0.55)">{d.title}</SectionLabel>
        <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, 'repeat(3, 1fr)'], gap: 3 }}>
          {plans.map((plan, i) => {
            const active = current === i;
            const style = TIER_STYLE[i];
            return (
              <Card
                key={plan.name}
                onClick={() => setCurrent(i)}
                sx={{
                  p: 4,
                  position: 'relative',
                  cursor: 'pointer',
                  border: '1.5px solid',
                  borderColor: active ? S.gold : 'rgba(255,255,255,0.12)',
                  background: style.grad,
                  boxShadow: active
                    ? `0 18px 40px rgba(201,162,39,0.3)`
                    : '0 8px 20px rgba(0,0,0,0.25)',
                  transform: active ? 'translateY(-6px)' : 'none',
                  transition: 'all 0.2s',
                }}>
                {style.hot && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      px: 3,
                      py: '4px',
                      borderRadius: 20,
                      background: `linear-gradient(135deg, ${S.gold}, #E5B94B)`,
                      color: '#0B1B33',
                      fontSize: 0,
                      fontWeight: 700,
                      fontFamily: font,
                      whiteSpace: 'nowrap',
                    }}>
                    &#9733; Popular
                  </Box>
                )}
                <Text sx={{ fontWeight: 700, fontSize: 2, color: style.hot ? '#7A5700' : style.tint, fontFamily: font }}>
                  {plan.name}
                </Text>
                <Text sx={{ mt: 1, mb: 3, fontSize: 4, fontWeight: 700, color: style.hot ? '#5C4300' : '#0B1B33', fontFamily: font }}>
                  {plan.price}
                  <Text as="span" sx={{ fontSize: 0, fontWeight: 500, color: style.hot ? '#8A6A1A' : S.muted }}> {d.perMonth}</Text>
                </Text>
                <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {plan.perks.map((p) => (
                    <Box key={p} sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 1, color: style.hot ? '#6B5215' : style.tint, fontFamily: font }}>
                      <Box
                        sx={{
                          width: 18,
                          height: 18,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(31,169,113,0.16)',
                          color: S.green,
                          fontSize: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                        &#10003;
                      </Box>
                      {p}
                    </Box>
                  ))}
                </Box>
                <Btn
                  tone={active ? 'ghost' : i === 2 ? 'amber' : 'primary'}
                  sx={{ width: '100%' }}
                  onClick={() => setCurrent(i)}>
                  {active ? d.current : d.upgrade}
                </Btn>
              </Card>
            );
          })}
        </Box>
      </Box>
    </BrowserFrame>
  );
}
