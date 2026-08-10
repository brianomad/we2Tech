/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Btn, Badge, Avatar, card } from './shared';

export default function MembershipDemo({ t }) {
  const d = t('caseDemo.membership');
  const plans = t('caseDemo.membership.plans');
  const [current, setCurrent] = useState(1);
  const [points] = useState('1,280');

  return (
    <BrowserFrame url="https://members.demo.we2tech.pro" height={470}>
      <Box sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4, flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Avatar label="A" color={S.teal} size={44} />
            <Box>
              <Text sx={{ display: 'block', fontWeight: 700, fontSize: 2, color: S.ink, fontFamily: font }}>Amanda Lee</Text>
              <Badge tone="teal">{d.current}</Badge>
            </Box>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, fontFamily: font }}>{d.pointsBalance}</Text>
            <Text sx={{ fontSize: 3, fontWeight: 700, color: S.teal, fontFamily: font }}>{points}</Text>
          </Box>
        </Box>

        <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: font, mb: 2 }}>
          {d.title}
        </Text>
        <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, 'repeat(3, 1fr)'], gap: 3 }}>
          {plans.map((plan, i) => {
            const active = current === i;
            return (
              <Card
                key={plan.name}
                sx={{
                  p: 4,
                  position: 'relative',
                  border: '2px solid',
                  borderColor: active ? S.teal : S.line,
                  boxShadow: active ? '0 14px 34px rgba(0,139,139,0.18)' : card.boxShadow,
                  transform: active ? 'translateY(-4px)' : 'none',
                  transition: 'all 0.2s',
                }}>
                {active && (
                  <Badge tone="teal" sx={{ position: 'absolute', top: 12, right: 12 }}>
                    {d.current}
                  </Badge>
                )}
                <Text sx={{ fontWeight: 700, fontSize: 2, color: S.ink, fontFamily: font }}>{plan.name}</Text>
                <Text sx={{ mt: 1, mb: 3, fontSize: 3, fontWeight: 700, color: S.tealDark, fontFamily: font }}>
                  {plan.price}
                  <Text as="span" sx={{ fontSize: 0, fontWeight: 500, color: S.muted }}> {d.perMonth}</Text>
                </Text>
                <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {plan.perks.map((p) => (
                    <Box key={p} sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 1, color: S.slate, fontFamily: font }}>
                      <Box sx={{ color: S.green, fontWeight: 700 }}>&#10003;</Box>
                      {p}
                    </Box>
                  ))}
                </Box>
                <Btn
                  tone={active ? 'ghost' : 'primary'}
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
