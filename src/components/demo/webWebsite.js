/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { BrowserFrame } from './frames';
import { S, font, Btn, Card } from './shared';

export default function WebWebsiteDemo({ t }) {
  const d = t('caseDemo.website');
  const menu = t('caseDemo.website.menu');
  const features = t('caseDemo.website.features');

  return (
    <BrowserFrame url="https://www.demo.we2tech.pro" height={470}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: 470, backgroundColor: '#fff' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 4, py: 3, borderBottom: '1px solid', borderColor: S.line, backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(6px)' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ width: 28, height: 28, borderRadius: 8, background: `linear-gradient(135deg, ${S.teal}, ${S.cyan})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>w</Box>
            <Text sx={{ fontWeight: 700, fontFamily: font, color: S.ink }}>we2Tech</Text>
          </Box>
          <Box sx={{ display: ['none', null, 'flex'], gap: 4, color: S.slate, fontSize: 1, fontFamily: font }}>
            {menu.map((m) => (
              <Box key={m} sx={{ cursor: 'pointer', '&:hover': { color: S.teal }, fontWeight: 600 }}>{m}</Box>
            ))}
          </Box>
          <Btn tone="primary" sx={{ px: 3, py: '8px', fontSize: 0 }}>{d.cta}</Btn>
        </Box>

        <Box sx={{ px: 4, py: 6, textAlign: 'center', background: `linear-gradient(160deg, #F0F8F8 0%, #E6F2F2 55%, #DCEFEF 100%)`, borderBottom: '1px solid', borderColor: S.line }}>
          <Text sx={{ display: 'block', fontSize: [3, null, 5], fontWeight: 700, color: S.ink, fontFamily: font, lineHeight: 1.25, maxWidth: 560, mx: 'auto' }}>
            {d.heroTitle}
          </Text>
          <Text sx={{ display: 'block', mt: 3, fontSize: 2, color: S.slate, fontFamily: font, maxWidth: 480, mx: 'auto', lineHeight: 1.6 }}>
            {d.heroSub}
          </Text>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Btn tone="primary">{d.cta} &#8594;</Btn>
            <Btn tone="ghost">{d.learnMore}</Btn>
          </Box>
          <Box sx={{ mt: 5, mx: 'auto', width: ['100%', 420], height: 150, borderRadius: 14, backgroundColor: '#fff', border: '1px solid', borderColor: S.line, boxShadow: '0 16px 40px rgba(0,139,139,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <Box sx={{ width: '100%', height: '100%', background: 'repeating-linear-gradient(90deg, #EAF3F3 0 40px, #F7FBFB 40px 80px)', position: 'relative' }}>
              <Box sx={{ position: 'absolute', inset: 24, borderRadius: 10, backgroundColor: '#fff', border: '1px solid', borderColor: S.line, display: 'flex', gap: 2, p: 3 }}>
                <Box sx={{ flex: 1, borderRadius: 8, backgroundColor: '#EAF3F3' }} />
                <Box sx={{ flex: 1.6, borderRadius: 8, backgroundColor: '#DCEFEF' }} />
                <Box sx={{ flex: 1, borderRadius: 8, backgroundColor: '#EAF3F3' }} />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ px: 4, py: 5, textAlign: 'center' }}>
          <Text sx={{ display: 'block', fontSize: 3, fontWeight: 700, color: S.ink, fontFamily: font, mb: 4 }}>{d.featuresTitle}</Text>
          <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, 'repeat(3, 1fr)'], gap: 3, maxWidth: 720, mx: 'auto' }}>
            {features.map((f, i) => (
              <Card key={f.title} sx={{ p: 4, textAlign: 'center' }}>
                <Box sx={{ width: 44, height: 44, mx: 'auto', mb: 3, borderRadius: 12, background: ['rgba(0,139,139,0.1)', 'rgba(139,92,246,0.1)', 'rgba(245,166,35,0.12)'][i], color: [S.teal, S.purple, S.amber][i], display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 2 }}>
                  {['\u{1F680}', '\u{1F512}', '\u{1F4CA}'][i]}
                </Box>
                <Text sx={{ display: 'block', fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font, mb: 1 }}>{f.title}</Text>
                <Text sx={{ fontSize: 0, color: S.slate, fontFamily: font, lineHeight: 1.6 }}>{f.text}</Text>
              </Card>
            ))}
          </Box>
        </Box>

        <Box sx={{ px: 4, py: 5, backgroundColor: S.ink, textAlign: 'center', color: '#fff' }}>
          <Text sx={{ display: 'block', fontSize: 0, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontFamily: font, mb: 3 }}>{d.statsTitle}</Text>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: 480, mx: 'auto', gap: 3 }}>
            {[['120+', 'Projects'], ['98%', 'Satisfaction'], ['4.9', 'Rating']].map(([v, l]) => (
              <Box key={l}>
                <Text sx={{ display: 'block', fontSize: 4, fontWeight: 700, color: S.cyan, fontFamily: font }}>{v}</Text>
                <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.7)', fontFamily: font }}>{l}</Text>
              </Box>
            ))}
          </Box>
          <Box sx={{ mt: 5, maxWidth: 520, mx: 'auto', fontSize: 2, fontFamily: font, color: '#fff', lineHeight: 1.7 }}>
            &ldquo;{d.quote}&rdquo;
          </Box>
          <Text sx={{ mt: 2, fontSize: 1, color: S.cyan, fontWeight: 700, fontFamily: font, display: 'block' }}>{d.quoteAuthor}</Text>
        </Box>

        <Box sx={{ px: 4, py: 5, textAlign: 'center' }}>
          <Text sx={{ display: 'block', fontSize: 3, fontWeight: 700, color: S.ink, fontFamily: font, mb: 3 }}>{d.contactCta}</Text>
          <Btn tone="primary">{d.cta} &#8594;</Btn>
        </Box>
      </Box>
    </BrowserFrame>
  );
}
