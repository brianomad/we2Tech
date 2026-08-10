/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { BrowserFrame } from './frames';
import { S, font, Card, Badge, Bars, LineChart, SectionLabel } from './shared';

const KPIS = [
  { label: 'Revenue', value: 'HK$1.34M', delta: '+12.4%', color: S.teal, spark: [40, 52, 46, 60, 55, 72, 68, 84, 78, 92, 88, 100] },
  { label: 'Orders', value: '8,942', delta: '+7.8%', color: S.blue, spark: [55, 48, 62, 58, 70, 66, 74, 72, 80, 86, 90, 96] },
  { label: 'Customers', value: '5,316', delta: '+5.2%', color: S.purple, spark: [42, 50, 46, 54, 60, 58, 66, 70, 68, 76, 82, 90] },
  { label: 'Conversion', value: '3.8%', delta: '+0.3%', color: S.orange, spark: [48, 52, 50, 56, 54, 60, 58, 64, 62, 66, 68, 72] },
];

import { demoUrlFor, brandFor } from './demo-meta';

export default function DataAnalyticsDemo({ t, item }) {
  const d = t('caseDemo.analytics');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const revenue = [42, 58, 51, 72, 66, 89, 84, 103, 96, 118, 112, 134];
  const orders = [820, 960, 1100, 1240, 1380, 1520];

  return (
    <BrowserFrame url={demoUrlFor(item, 'https://insights.demo.we2tech.pro')} height={486} brand={brandFor(item, 'Insightly')}>
      <Box sx={{ px: 4, py: 3, background: 'linear-gradient(135deg,#0F172A,#334155)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ width: 32, height: 32, borderRadius: 10, background: 'linear-gradient(135deg,#F59E0B,#F97316)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 1 }}>&#128200;</Box>
          <Box>
            <Text sx={{ fontWeight: 700, fontSize: 1, fontFamily: font, lineHeight: 1.2 }}>Insightly</Text>
            <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.6)', fontFamily: font }}>Sales analytics</Text>
          </Box>
        </Box>
        <Badge sx={{ backgroundColor: 'rgba(249,115,22,0.18)', color: '#FDBA74', border: '1px solid rgba(249,115,22,0.4)' }} dot>Updated 2 min ago</Badge>
      </Box>

      <Box sx={{ p: 4 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr 1fr', null, 'repeat(4, 1fr)'], gap: 3, mb: 4 }}>
          {KPIS.map((s) => (
            <Card key={s.label} sx={{ p: 3, overflow: 'hidden', '&:hover': { transform: 'translateY(-2px)' }, transition: 'transform 0.15s' }}>
              <Text sx={{ fontSize: 0, fontWeight: 700, color: S.muted, fontFamily: font }}>{d[s.label.toLowerCase()] || s.label}</Text>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
                <Box>
                  <Text sx={{ fontSize: [2, null, 3], fontWeight: 700, color: S.ink, fontFamily: font }}>{s.value}</Text>
                  <Badge tone="green" dot={false} sx={{ mt: 1 }}>{s.delta}</Badge>
                </Box>
                <Box sx={{ width: 64, height: 30 }}>
                  <LineChart values={s.spark} height={30} color={s.color} width={64} />
                </Box>
              </Box>
            </Card>
          ))}
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1.2fr 1fr'], gap: 4, mb: 4 }}>
          <Card sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{d.monthlyRevenue}</Text>
              <Badge tone="teal" dot={false}>HK$ 000</Badge>
            </Box>
            <Bars data={revenue} height={140} labels={months} color="#14B8A6" />
          </Card>
          <Card sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{d.orders}</Text>
              <Badge tone="blue" dot={false}>{d.vsLastMonth}</Badge>
            </Box>
            <LineChart values={orders} height={140} color="#3B82F6" />
            <Box sx={{ mt: 2, display: 'flex', gap: 4, fontSize: 0, color: S.muted, fontFamily: font }}>
              <Text><Box as="span" sx={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', backgroundColor: '#3B82F6', mr: 1 }} />This month: 1,520</Text>
              <Text><Box as="span" sx={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', backgroundColor: '#BFDBFE', mr: 1 }} />Last month: 1,380</Text>
            </Box>
          </Card>
        </Box>

        <Card sx={{ overflow: 'hidden' }}>
          <Box sx={{ px: 4, py: 3, borderBottom: '1px solid', borderColor: S.line, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{d.topProducts}</Text>
            <Badge tone="purple" dot={false}>This quarter</Badge>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1.8fr 0.6fr 0.8fr 1.2fr', gap: 2, px: 4, py: 2, backgroundColor: '#F6F8FB', fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: font }}>
            <Text>{d.product}</Text>
            <Text sx={{ textAlign: 'right' }}>{d.sold}</Text>
            <Text sx={{ textAlign: 'right' }}>{d.revenueLabel}</Text>
            <Text>Share</Text>
          </Box>
          {[
            { p: 'Classic Tote', s: '1,204', r: 'HK$239k', share: 100, color: S.teal },
            { p: 'Trail Backpack', s: '988', r: 'HK$542k', share: 82, color: S.blue },
            { p: 'Ceramic Mug Set', s: '812', r: 'HK$104k', share: 64, color: S.purple },
            { p: 'Canvas Sneakers', s: '701', r: 'HK$321k', share: 48, color: S.pink },
          ].map((row, i) => (
            <Box key={row.p} sx={{ display: 'grid', gridTemplateColumns: '1.8fr 0.6fr 0.8fr 1.2fr', gap: 2, alignItems: 'center', px: 4, py: 2.5, borderTop: '1px solid', borderColor: S.line, fontSize: 1, fontFamily: font, '&:hover': { backgroundColor: '#FAFBFF' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ width: 26, height: 26, borderRadius: 8, backgroundColor: `${row.color}1f`, color: row.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 1 }}>{['\u{1F45C}', '\u{1F9F3}', '\u2615', '\u{1F45F}'][i]}</Box>
                <Text sx={{ fontWeight: 600, color: S.ink }}>{row.p}</Text>
              </Box>
              <Text sx={{ textAlign: 'right', color: S.slate }}>{row.s}</Text>
              <Text sx={{ textAlign: 'right', fontWeight: 700, color: S.tealDark }}>{row.r}</Text>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ flex: 1, height: 8, borderRadius: 99, backgroundColor: '#E8EEF6', overflow: 'hidden' }}>
                  <Box sx={{ width: `${row.share}%`, height: '100%', borderRadius: 99, background: `linear-gradient(90deg, ${row.color}, ${row.color}bb)` }} />
                </Box>
                <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font, minWidth: 34, textAlign: 'right' }}>{row.share}%</Text>
              </Box>
            </Box>
          ))}
        </Card>
      </Box>
    </BrowserFrame>
  );
}
