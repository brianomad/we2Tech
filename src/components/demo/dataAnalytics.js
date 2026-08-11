/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState, useEffect } from 'react';
import { S, font, Card, Badge, Bars, LineChart } from './shared';
import { Skeleton, FilterChip } from './chrome';

const RANGES = ['7D', '30D', '90D', 'YTD'];
const RANGE_DATA = {
  '7D': [
    { label: 'Revenue', value: 'HK$382k', delta: '+6.1%', color: S.teal, spark: [42, 48, 46, 55, 52, 60, 58, 64, 70, 66, 78, 84] },
    { label: 'Orders', value: '2,418', delta: '+4.3%', color: S.blue, spark: [50, 46, 55, 60, 58, 66, 62, 70, 72, 78, 82, 88] },
    { label: 'Customers', value: '1,540', delta: '+3.8%', color: S.purple, spark: [44, 50, 48, 54, 60, 58, 66, 64, 70, 74, 80, 86] },
    { label: 'Conversion', value: '4.1%', delta: '+0.2%', color: S.orange, spark: [48, 52, 50, 56, 54, 60, 58, 64, 62, 66, 68, 72] },
  ],
  '30D': [
    { label: 'Revenue', value: 'HK$1.34M', delta: '+12.4%', color: S.teal, spark: [40, 52, 46, 60, 55, 72, 68, 84, 78, 92, 88, 100] },
    { label: 'Orders', value: '8,942', delta: '+7.8%', color: S.blue, spark: [55, 48, 62, 58, 70, 66, 74, 72, 80, 86, 90, 96] },
    { label: 'Customers', value: '5,316', delta: '+5.2%', color: S.purple, spark: [42, 50, 46, 54, 60, 58, 66, 70, 68, 76, 82, 90] },
    { label: 'Conversion', value: '3.8%', delta: '+0.3%', color: S.orange, spark: [48, 52, 50, 56, 54, 60, 58, 64, 62, 66, 68, 72] },
  ],
  '90D': [
    { label: 'Revenue', value: 'HK$3.92M', delta: '+18.2%', color: S.teal, spark: [38, 44, 50, 46, 58, 62, 70, 66, 78, 82, 90, 100] },
    { label: 'Orders', value: '26,110', delta: '+11.4%', color: S.blue, spark: [44, 50, 54, 60, 58, 66, 72, 70, 78, 84, 90, 98] },
    { label: 'Customers', value: '14,208', delta: '+9.6%', color: S.purple, spark: [40, 46, 52, 50, 58, 64, 62, 70, 74, 80, 86, 94] },
    { label: 'Conversion', value: '3.6%', delta: '+0.1%', color: S.orange, spark: [46, 50, 52, 50, 56, 58, 60, 58, 62, 64, 66, 68] },
  ],
  YTD: [
    { label: 'Revenue', value: 'HK$9.87M', delta: '+24.6%', color: S.teal, spark: [30, 36, 40, 48, 52, 60, 66, 72, 78, 84, 92, 100] },
    { label: 'Orders', value: '61,720', delta: '+15.9%', color: S.blue, spark: [34, 40, 46, 52, 58, 64, 70, 74, 80, 86, 92, 98] },
    { label: 'Customers', value: '31,540', delta: '+13.2%', color: S.purple, spark: [36, 42, 46, 52, 56, 62, 66, 72, 76, 82, 88, 96] },
    { label: 'Conversion', value: '3.4%', delta: '+0.2%', color: S.orange, spark: [44, 46, 50, 48, 54, 56, 58, 60, 62, 64, 66, 68] },
  ],
};

const TOP_DEFAULT = [
  { p: 'Classic Tote', s: '1,204', r: 'HK$239k', share: 100, color: S.teal },
  { p: 'Trail Backpack', s: '988', r: 'HK$542k', share: 82, color: S.blue },
  { p: 'Ceramic Mug Set', s: '812', r: 'HK$104k', share: 64, color: S.purple },
  { p: 'Canvas Sneakers', s: '701', r: 'HK$321k', share: 48, color: S.pink },
];
const TOP_EMOJIS = ['\u{1F45C}', '\u{1F9F3}', '\u2615', '\u{1F45F}'];
const TOP_COLORS = [S.teal, S.blue, S.purple, S.pink];

import { brandFor } from './demo-meta';
import { contentFor } from './case-content';

export default function DataAnalyticsDemo({ t, locale, item }) {
  const d = contentFor(t, locale, item, 'analytics');
  const [range, setRange] = useState('30D');
  const [tick, setTick] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => setTick((n) => n + 1), 2500);
    return () => clearInterval(iv);
  }, []);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const revenue = [42, 58, 51, 72, 66, 89, 84, 103, 96, 118, 112, 134];
  const orders = [820, 960, 1100, 1240, 1380, 1520];
  const kpis = RANGE_DATA[range];
  const liveRevenue = RANGE_DATA[range][0].value.replace(/HK\$|k|M/g, '') + (tick % 3 === 0 ? '' : '');
  const topRows = (d.topProductsList || TOP_DEFAULT).map((row, i) => ({ ...row, color: row.color || TOP_COLORS[i % TOP_COLORS.length] }));

  return (
    <>
      <Box sx={{ position: 'relative', flex: 1 }}>
        <Box sx={{ px: 4, py: 3, background: 'linear-gradient(135deg,#0F172A,#334155)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ width: 32, height: 32, borderRadius: 10, background: 'linear-gradient(135deg,#F59E0B,#F97316)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 1 }}>&#128200;</Box>
            <Box>
              <Text sx={{ fontWeight: 700, fontSize: 1, fontFamily: font, lineHeight: 1.2 }}>{brandFor(item, 'Insightly')}</Text>
              <Text sx={{ fontSize: 0, color: 'rgba(255,255,255,0.6)', fontFamily: font }}>{d.subtitle}</Text>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 3, py: '7px', borderRadius: 10, backgroundColor: 'rgba(249,115,22,0.15)', color: '#FDBA74', border: '1px solid rgba(249,115,22,0.4)' }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#F97316', animation: 'livePulse 1.6s ease-in-out infinite' }} />
            <Text sx={{ fontSize: 0, fontWeight: 700, fontFamily: font }}>{d.liveRefresh}</Text>
          </Box>
        </Box>

        <Box sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4, flexWrap: 'wrap' }}>
            <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font, mr: 1 }}>{d.title}</Text>
            {RANGES.map((r) => (
              <FilterChip key={r} label={r} active={range === r} onClick={() => setRange(r)} color={S.orange} />
            ))}
            <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 2 }}>
              <Badge tone="orange" dot={false}>{tick % 2 === 0 ? d.synced : d.syncing}</Badge>
            </Box>
          </Box>

          {loading ? (
            <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr 1fr', null, 'repeat(4, 1fr)'], gap: 3, mb: 4 }}>
              {[0, 1, 2, 3].map((i) => (
                <Card key={i} sx={{ p: 3 }}>
                  <Skeleton w="50%" h={9} />
                  <Skeleton w="60%" h={20} sx={{ mt: 2 }} />
                  <Skeleton w="35%" h={9} sx={{ mt: 2 }} />
                </Card>
              ))}
            </Box>
          ) : (
            <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr 1fr', null, 'repeat(4, 1fr)'], gap: 3, mb: 4 }}>
              {kpis.map((s) => (
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
          )}

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
                <Text><Box as="span" sx={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', backgroundColor: '#3B82F6', mr: 1 }} />{d.thisMonth}: 1,520</Text>
                <Text><Box as="span" sx={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', backgroundColor: '#BFDBFE', mr: 1 }} />{d.lastMonth}: 1,380</Text>
              </Box>
            </Card>
          </Box>

          <Card sx={{ overflow: 'hidden' }}>
            <Box sx={{ px: 4, py: 3, borderBottom: '1px solid', borderColor: S.line, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font }}>{d.topProducts}</Text>
              <Badge tone="purple" dot={false}>{range} range</Badge>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1.8fr 0.6fr 0.8fr 1.2fr', gap: 2, px: 4, py: 2, backgroundColor: '#F6F8FB', fontSize: 0, fontWeight: 700, color: S.muted, textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: font }}>
              <Text>{d.product}</Text>
              <Text sx={{ textAlign: 'right' }}>{d.sold}</Text>
              <Text sx={{ textAlign: 'right' }}>{d.revenueLabel}</Text>
              <Text>{d.share}</Text>
            </Box>            {topRows.map((row, i) => (
              <Box key={row.p} sx={{ display: 'grid', gridTemplateColumns: '1.8fr 0.6fr 0.8fr 1.2fr', gap: 2, alignItems: 'center', px: 4, py: 2.5, borderTop: '1px solid', borderColor: S.line, fontSize: 1, fontFamily: font, '&:hover': { backgroundColor: '#FAFBFF' } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ width: 26, height: 26, borderRadius: 8, backgroundColor: `${row.color}1f`, color: row.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 1 }}>{TOP_EMOJIS[i % TOP_EMOJIS.length]}</Box>
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
      </Box>
    </>
  );
}
