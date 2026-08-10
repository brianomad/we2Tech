/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { BrowserFrame } from './frames';
import { S, font, Card, Stat, Badge, Bars, LineChart } from './shared';

export default function DataAnalyticsDemo({ t }) {
  const d = t('caseDemo.analytics');
  const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  const revenue = [42, 58, 51, 72, 66, 89, 84, 103, 96, 118, 112, 134];
  const orders = [820, 960, 1100, 1240, 1380, 1520];

  return (
    <BrowserFrame url="https://insights.demo.we2tech.pro" height={470}>
      <Box sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4, flexWrap: 'wrap', gap: 2 }}>
          <Text sx={{ fontWeight: 700, fontSize: 3, color: S.ink, fontFamily: font }}>{d.title}</Text>
          <Badge tone="green">{d.vsLastMonth} +12.4%</Badge>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr 1fr', null, 'repeat(4, 1fr)'], gap: 3, mb: 4 }}>
          <Stat label={d.revenue} value="HK$1.34M" delta="12.4%" up />
          <Stat label={d.orders} value="8,942" delta="7.8%" up />
          <Stat label={d.customers} value="5,316" delta="5.2%" up />
          <Stat label={d.conversion} value="3.8%" delta="0.3%" up />
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1.2fr 1fr'], gap: 4, mb: 4 }}>
          <Card sx={{ p: 4 }}>
            <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font, mb: 3 }}>{d.monthlyRevenue}</Text>
            <Bars data={revenue} height={130} labels={months} color={S.teal} />
          </Card>
          <Card sx={{ p: 4 }}>
            <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font, mb: 3 }}>{d.orders}</Text>
            <LineChart values={orders} height={120} color={S.blue} />
          </Card>
        </Box>
        <Card sx={{ overflow: 'hidden' }}>
          <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font, p: 3, pb: 2 }}>{d.topProducts}</Text>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1.8fr 0.6fr 0.8fr 1fr', gap: 2, px: 3, py: 2, backgroundColor: '#F3F6FB', fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: font }}>
            <Text>{d.product}</Text>
            <Text sx={{ textAlign: 'right' }}>{d.sold}</Text>
            <Text sx={{ textAlign: 'right' }}>{d.revenueLabel}</Text>
            <Text></Text>
          </Box>
          {[
            { p: 'Classic Tote', s: '1,204', r: 'HK$239k' },
            { p: 'Trail Backpack', s: '988', r: 'HK$542k' },
            { p: 'Ceramic Mug Set', s: '812', r: 'HK$104k' },
          ].map((row, i) => (
            <Box key={row.p} sx={{ display: 'grid', gridTemplateColumns: '1.8fr 0.6fr 0.8fr 1fr', gap: 2, alignItems: 'center', px: 3, py: 2, borderTop: '1px solid', borderColor: S.line, fontSize: 1, fontFamily: font }}>
              <Text sx={{ fontWeight: 600, color: S.ink }}>{row.p}</Text>
              <Text sx={{ textAlign: 'right', color: S.slate }}>{row.s}</Text>
              <Text sx={{ textAlign: 'right', fontWeight: 700, color: S.tealDark }}>{row.r}</Text>
              <Box sx={{ height: 6, borderRadius: 99, backgroundColor: [S.teal, S.blue, S.purple][i], width: ['100%', '100%', `${100 - i * 25}%`], justifySelf: 'end' }} />
            </Box>
          ))}
        </Card>
      </Box>
    </BrowserFrame>
  );
}
