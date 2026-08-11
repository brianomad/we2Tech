/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { S, font, Btn, Card, SectionLabel } from './shared';

const FEATURE_META = [
  { icon: '\u{1F680}', color: S.teal, bg: 'rgba(0,139,139,0.1)' },
  { icon: '\u{1F512}', color: S.purple, bg: 'rgba(139,92,246,0.1)' },
  { icon: '\u{1F4CA}', color: S.amber, bg: 'rgba(245,166,35,0.14)' },
  { icon: '\u{1F6E0}', color: S.blue, bg: 'rgba(59,130,246,0.1)' },
  { icon: '\u{1F30D}', color: S.pink, bg: 'rgba(236,72,153,0.1)' },
  { icon: '\u{1F4E6}', color: S.green, bg: 'rgba(31,169,113,0.12)' },
];

import { brandFor } from './demo-meta';
import { contentFor } from './case-content';

export default function WebWebsiteDemo({ t, locale, item }) {
  const d = contentFor(t, locale, item, 'website');
  const menu = d.menu;
  const features = d.features;
  const [active, setActive] = useState(0);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: 540, backgroundColor: '#fff' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 4, py: 3, borderBottom: '1px solid', borderColor: S.line, backgroundColor: 'rgba(255,255,255,0.85)' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ width: 30, height: 30, borderRadius: 9, background: 'linear-gradient(135deg,#6366F1,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontFamily: font, boxShadow: '0 6px 14px rgba(99,102,241,0.4)' }}>{brandFor(item, 'Nimbus').slice(0, 1)}</Box>
            <Text sx={{ fontWeight: 700, fontFamily: font, color: S.ink }}>{brandFor(item, 'Nimbus')}</Text>
          </Box>
          <Box sx={{ display: ['none', null, 'flex'], gap: 4, color: S.slate, fontSize: 1, fontFamily: font }}>
            {menu.map((m, i) => (
              <Box key={m} onClick={() => setActive(i)} sx={{ cursor: 'pointer', '&:hover': { color: '#6366F1' }, fontWeight: 600, position: 'relative', color: active === i ? '#4338CA' : S.slate }}>
                {m}
                {active === i && <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: -3, height: 2, borderRadius: 99, backgroundColor: '#6366F1' }} />}
              </Box>
            ))}
          </Box>
          <Btn tone="primary" sx={{ px: 3, py: '8px', fontSize: 0 }}>{d.cta}</Btn>
        </Box>

        <Box sx={{ px: 4, py: 6, textAlign: 'center', background: 'radial-gradient(circle at 50% 0%, #EEF2FF 0%, #F8FAFC 70%)' }}>
          <Box sx={{ display: 'inline-block', px: 3, py: 1, mb: 3, borderRadius: 99, backgroundColor: '#EEF2FF', color: '#4338CA', fontSize: 0, fontWeight: 700, fontFamily: font }}>
            &#9733; {d.statsTitle}
          </Box>
          <Text sx={{ display: 'block', fontSize: [4, null, 5], fontWeight: 700, color: S.ink, fontFamily: font, lineHeight: 1.2, maxWidth: 520, mx: 'auto' }}>
            {d.heroTitle}
          </Text>
          <Text sx={{ display: 'block', mt: 3, fontSize: 1, color: S.slate, fontFamily: font, maxWidth: 460, mx: 'auto', lineHeight: 1.7 }}>
            {d.heroSub}
          </Text>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Btn tone="primary">{d.cta} &#8594;</Btn>
            <Btn tone="ghost">{d.learnMore}</Btn>
          </Box>
          <Box sx={{ mt: 5, mx: 'auto', width: ['100%', 440], borderRadius: 14, backgroundColor: '#fff', border: '1px solid', borderColor: '#E2E8F0', boxShadow: '0 24px 60px rgba(79,70,229,0.14)', overflow: 'hidden' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 3, py: 2, backgroundColor: '#F8FAFC', borderBottom: '1px solid', borderColor: '#E2E8F0' }}>
              <Box sx={{ display: 'flex', gap: '4px' }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FF5F57' }} />
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FEBC2E' }} />
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#28C840' }} />
              </Box>
              <Box sx={{ flex: 1, mx: 'auto', textAlign: 'center', fontSize: 0, color: S.muted, fontFamily: font }}>app.nimbus.io/dashboard</Box>
            </Box>
            <Box sx={{ p: 3, display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 2, height: 130 }}>
              <Box sx={{ borderRadius: 10, backgroundColor: '#EEF2FF', display: 'flex', flexDirection: 'column', gap: 1, p: 2 }}>
                <Box sx={{ height: 8, width: '60%', borderRadius: 99, backgroundColor: '#C7D2FE' }} />
                <Box sx={{ height: 8, width: '80%', borderRadius: 99, backgroundColor: '#E0E7FF' }} />
                <Box sx={{ height: 30, borderRadius: 8, backgroundColor: '#C7D2FE', mt: 1 }} />
              </Box>
              <Box sx={{ borderRadius: 10, backgroundColor: '#F8FAFC', p: 2, display: 'flex', flexDirection: 'column', gap: 1, border: '1px solid', borderColor: '#E2E8F0' }}>
                <Box sx={{ height: 8, width: '50%', borderRadius: 99, backgroundColor: '#E2E8F0' }} />
                <Box sx={{ height: 8, width: '70%', borderRadius: 99, backgroundColor: '#E2E8F0' }} />
                <Box sx={{ flex: 1, borderRadius: 8, background: 'linear-gradient(90deg,#6366F1 0 55%,#EEF2FF 55% 100%)' }} />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ px: 4, py: 5 }}>
          <SectionLabel sx={{ textAlign: 'center' }}>{d.featuresTitle}</SectionLabel>
          <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, 'repeat(3, 1fr)'], gap: 3, maxWidth: 720, mx: 'auto' }}>
            {features.map((f, i) => {
              const m = FEATURE_META[i];
              return (
                <Card key={f.title} sx={{ p: 4, textAlign: 'center', '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 16px 36px rgba(15,33,55,0.12)' }, transition: 'all 0.2s' }}>
                  <Box sx={{ width: 46, height: 46, mx: 'auto', mb: 3, borderRadius: 13, background: m.bg, color: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 2 }}>
                    {m.icon}
                  </Box>
                  <Text sx={{ display: 'block', fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font, mb: 1 }}>{f.title}</Text>
                  <Text sx={{ fontSize: 0, color: S.slate, fontFamily: font, lineHeight: 1.6 }}>{f.text}</Text>
                </Card>
              );
            })}
          </Box>
        </Box>

        <Box sx={{ px: 4, py: 5, background: 'linear-gradient(135deg,#111827,#1F2937)', textAlign: 'center', color: '#fff' }}>
          <Text sx={{ display: 'block', fontSize: 0, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', fontFamily: font, mb: 4 }}>{d.statsTitle}</Text>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: 480, mx: 'auto', gap: 3 }}>
            {[['120+', d.statProjects], ['98%', d.statSatisfaction], ['4.9', d.statRating]].map(([v, l]) => (
              <Box key={l}>
                <Text sx={{ display: 'block', fontSize: 4, fontWeight: 700, color: '#818CF8', fontFamily: font }}>{v}</Text>
                <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.7)', fontFamily: font }}>{l}</Text>
              </Box>
            ))}
          </Box>
          <Box sx={{ mt: 5, maxWidth: 560, mx: 'auto' }}>
            <Box sx={{ fontSize: 4, color: '#818CF8', mb: 2 }}>&#10077;</Box>
            <Text sx={{ fontSize: 1, fontFamily: font, color: '#fff', lineHeight: 1.8 }}>&ldquo;{d.quote}&rdquo;</Text>
            <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
              <Box sx={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg,#6366F1,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontFamily: font, fontSize: 1 }}>J</Box>
              <Text sx={{ fontSize: 1, color: '#818CF8', fontWeight: 700, fontFamily: font, display: 'block' }}>{d.quoteAuthor}</Text>
            </Box>
          </Box>
        </Box>

        <Box sx={{ px: 4, py: 5, textAlign: 'center', background: 'radial-gradient(circle at 50% 100%, #EEF2FF 0%, #fff 70%)' }}>
          <Text sx={{ display: 'block', fontSize: 3, fontWeight: 700, color: S.ink, fontFamily: font, mb: 3 }}>{d.contactCta}</Text>
          <Btn tone="primary">{d.cta} &#8594;</Btn>
        </Box>
    </Box>
  );
}
