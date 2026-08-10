/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { BrowserFrame } from './frames';
import { S, font, Card, Stat, Badge, Sidebar, LineChart, StatusDot } from './shared';

export default function CloudSystemDemo({ t }) {
  const d = t('caseDemo.cloud');
  const nav = [d.overview, d.users, d.services, d.billing, d.settings];
  const servicesList = t('caseDemo.cloud.serviceList');
  const [tab, setTab] = useState(0);
  const requests = [12, 19, 15, 24, 22, 30, 28, 36, 33, 41, 46, 44];

  return (
    <BrowserFrame url="https://console.demo.we2tech.pro" height={470}>
      <Box sx={{ display: 'flex', height: '100%', minHeight: 470 }}>
        <Sidebar brand="we2Tech Cloud" items={nav} active={tab} onSelect={setTab} />
        <Box sx={{ flex: 1, p: 4, overflow: 'auto' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4, flexWrap: 'wrap', gap: 2 }}>
            <Box>
              <Text sx={{ fontWeight: 700, fontSize: 3, color: S.ink, fontFamily: font }}>{d.title}</Text>
              <Text sx={{ fontSize: 0, color: S.muted, fontFamily: font }}>{d.last24h}</Text>
            </Box>
            <Badge tone="green">{d.allOperational}</Badge>
          </Box>

          {tab === 0 && (
            <>
              <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr 1fr', null, 'repeat(4, 1fr)'], gap: 3, mb: 4 }}>
                <Stat label={d.uptime} value="99.98%" delta="0.2%" up />
                <Stat label={d.activeUsers} value="12,480" delta="8.4%" up />
                <Stat label={d.requests} value="86.2k" delta="3.1%" up />
                <Stat label={d.incidents} value="1" delta="2" up={false} />
              </Box>
              <Card sx={{ p: 4, mb: 4 }}>
                <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font, mb: 3 }}>
                  {d.requests} <Text as="span" sx={{ color: S.muted, fontWeight: 500 }}>&middot; {d.last24h}</Text>
                </Text>
                <LineChart values={requests} height={120} />
              </Card>
              <Card sx={{ p: 4 }}>
                <Text sx={{ fontWeight: 700, fontSize: 1, color: S.ink, fontFamily: font, mb: 3 }}>{d.services}</Text>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {servicesList.map((s) => (
                    <Box key={s.name} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 3, py: 2, borderRadius: 10, backgroundColor: '#F7FAFD', border: '1px solid', borderColor: S.line }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 1, color: S.ink, fontWeight: 600, fontFamily: font }}>
                        <StatusDot color={s.status === 'Operational' ? S.green : S.amber} />
                        {s.name}
                      </Box>
                      <Badge tone={s.status === 'Operational' ? 'green' : 'amber'}>{s.status === 'Operational' ? d.operational : d.degraded}</Badge>
                    </Box>
                  ))}
                </Box>
              </Card>
            </>
          )}
          {tab !== 0 && (
            <Card sx={{ p: 5, textAlign: 'center', color: S.muted }}>
              <Box sx={{ fontSize: 4, mb: 2 }}>&#9881;</Box>
              <Text sx={{ fontSize: 1, fontFamily: font }}>{nav[tab]} &middot; demo</Text>
            </Card>
          )}
        </Box>
      </Box>
    </BrowserFrame>
  );
}
