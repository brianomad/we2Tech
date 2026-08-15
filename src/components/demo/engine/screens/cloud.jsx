/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { font } from '../../shared';
import { Icon } from '../../icons';
import { hashId, hashStr, mulberry32 } from '../logic';
import { useT } from '../theme';
import { Panel, SectionTitle, Chip, StatCard, Page, AccentBtn, GhostBtn } from '../blocks';

const SPARK_COLORS = ['#22C55E', '#3B82F6', '#A855F7', '#F59E0B'];

function Area({ values, color, height = 120, fill = true }) {
  const t = useT();
  const max = Math.max(...values) * 1.15;
  const min = Math.min(...values) * 0.85;
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * 100;
    const y = ((max - v) / (max - min)) * (height - 8) + 4;
    return [x, y];
  });
  const line = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ');
  const area = `${line} L100,${height} L0,${height} Z`;
  const glow = `0 8px 20px ${color}55`;
  return (
    <svg width="100%" height={height} viewBox={`0 0 100 ${height}`} preserveAspectRatio="none" style={{ display: 'block' }}>
      <defs>
        <linearGradient id={`cg-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {fill && <path d={area} fill={`url(#cg-${color.replace('#', '')})`} />}
      <path d={line} fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0" style={{ filter: `drop-shadow(${glow})` }} />
      <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="3" fill={color} stroke={t.surface} strokeWidth="2" />
    </svg>
  );
}

function Bars({ values, color, height = 110 }) {
  const max = Math.max(...values);
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height }}>
      {values.map((v, i) => (
        <Box
          key={i}
          sx={{
            flex: 1,
            height: `${(v / max) * 100}%`,
            minHeight: 6,
            borderRadius: 5,
            background: i === values.length - 1 ? color : `${color}33`,
            transition: 'height 0.6s ease',
          }}
        />
      ))}
    </Box>
  );
}

function StatusPill({ ok, text }) {
  const t = useT();
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        px: 2.5,
        py: '5px',
        borderRadius: 99,
        fontSize: 0,
        fontWeight: 700,
        fontFamily: font,
        whiteSpace: 'nowrap',
        color: ok ? '#16A34A' : '#B45309',
        backgroundColor: ok ? `${'#22C55E'}1f` : `${'#F59E0B'}22`,
        border: `1px solid ${ok ? '#22C55E' : '#F59E0B'}55`,
      }}>
      <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: ok ? '#22C55E' : '#F59E0B', boxShadow: `0 0 0 3px ${ok ? '#22C55E' : '#F59E0B'}22` }} />
      {text}
    </Box>
  );
}

function setup(item) {
  const seed = (hashId(item && item.id != null ? item.id : 0) ^ hashStr('cloud')) >>> 0;
  const rnd = mulberry32(seed);
  const req = [];
  let v = 18 + Math.floor(rnd() * 24);
  for (let i = 0; i < 12; i++) {
    v = Math.max(8, v + Math.round((rnd() - 0.45) * 9));
    req.push(v);
  }
  const errs = [];
  let e = 2;
  for (let i = 0; i < 12; i++) {
    e = Math.max(0, Math.min(6, e + Math.round((rnd() - 0.55) * 3)));
    errs.push(e);
  }
  const n = 3 + Math.floor(rnd() * 4);
  const activities = [];
  const ACT = ['Deploy', 'Scaling', 'Backup', 'Monitor', 'Release', 'Config'];
  const EVT = ['completed', 'started', 'synced', 'verified'];
  const SVC = ['web', 'api', 'db', 'auth'];
  for (let i = 0; i < n; i++) {
    activities.push(`${ACT[Math.floor(rnd() * ACT.length)]} ${SVC[Math.floor(rnd() * SVC.length)]}-${10 + Math.floor(rnd() * 90)} ${EVT[Math.floor(rnd() * EVT.length)]}`);
  }
  return {
    req,
    errs,
    uptime: (99.9 + Math.floor(rnd() * 8) / 100).toFixed(2),
    users: (5 + Math.floor(rnd() * 10)) * 1000,
    reqDay: (30 + Math.floor(rnd() * 60)) * 1000,
    incidents: Math.floor(rnd() * 3),
    errRate: (0.04 + Math.floor(rnd() * 9) / 100).toFixed(2),
    activities,
  };
}

function CloudHeader({ title, ok, sub }) {
  const t = useT();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, flexWrap: 'wrap' }}>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Text sx={{ fontSize: 2, fontWeight: 700, color: t.ink, fontFamily: font, display: 'block', lineHeight: 1.25 }}>{title}</Text>
        {sub && <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{sub}</Text>}
      </Box>
      <StatusPill ok={ok} text={ok ? 'Operational' : 'Degraded'} />
    </Box>
  );
}

export function CloudA({ d, item }) {
  const t = useT();
  const s = setup(item);
  const [tab, setTab] = useState(0);
  const allOk = d.serviceList.every((sv) => sv.status === 'Operational');
  return (
    <Page>
      <CloudHeader title={d.title} ok={allOk} sub={d.allOperational} />
      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        {[d.overview, d.services].map((label, i) => (
          <Chip key={label} on={tab === i} onClick={() => setTab(i)}>{label}</Chip>
        ))}
      </Box>
      {tab === 0 ? (
        <>
      <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr 1fr', null, 'repeat(4, 1fr)'], gap: 2, mb: 2, '@container (max-width: 460px)': { gridTemplateColumns: '1fr 1fr' } }}>
            <StatCard label={d.uptime} value={`${s.uptime}%`} sub="+0.1% vs last month" />
            <StatCard label={d.activeUsers} value={s.users.toLocaleString('en-US')} sub="+8.4% vs last month" color={t.accent} />
            <StatCard label={d.requests} value={`${(s.reqDay / 1000).toFixed(1)}k`} sub="+3.1% vs last month" />
            <StatCard label={d.incidents} value={String(s.incidents)} sub={s.incidents === 0 ? 'Nothing to review' : 'Resolved automatically'} color={s.incidents ? '#F59E0B' : t.accent} />
          </Box>
      <Panel sx={{ p: 2, mb: 2 }}>
            <SectionTitle right={<Text sx={{ fontSize: 0, fontWeight: 600, color: t.muted, fontFamily: font }}>{d.last24h}</Text>}>
              {d.requests}
            </SectionTitle>
            <Area values={s.req} color={t.accent} height={140} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 0, color: t.muted, fontFamily: font, mt: 0.5 }}>
              <Text>00:00</Text><Text>06:00</Text><Text>12:00</Text><Text>18:00</Text><Text>Now</Text>
            </Box>
          </Panel>
          <Panel sx={{ overflow: 'hidden' }}>
        <Box sx={{ px: 3, py: 2, borderBottom: `1px solid ${t.line}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text sx={{ fontWeight: 700, fontSize: 1, color: t.ink, fontFamily: font }}>{d.services}</Text>
              <StatusPill ok={allOk} text={allOk ? d.operational : d.degraded} />
            </Box>
            {d.serviceList.map((sv, i) => {
              const ok = sv.status === 'Operational';
              return (
                <Box key={sv.name} sx={{ display: 'flex', alignItems: 'center', gap: 3, px: 3, py: 2.5, borderTop: `1px solid ${t.line}` }}>
                  <Box sx={{ width: 36, height: 36, borderRadius: 10, backgroundColor: ok ? `${'#22C55E'}1a` : `${'#F59E0B'}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={['cloud', 'wifi', 'card', 'bell'][i % 4]} size={17} color={ok ? '#16A34A' : '#B45309'} />
                  </Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Text sx={{ fontWeight: 700, fontSize: 1, color: t.ink, fontFamily: font, display: 'block' }}>{sv.name}</Text>
                    <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>
                      {['99.99%', '99.98%', '100%', '99.5%'][i]} {d.uptimeNote} &middot; {18 + ((i * 7) % 40)}ms
                    </Text>
                  </Box>
                  <StatusPill ok={ok} text={ok ? d.operational : d.degraded} />
                </Box>
              );
            })}
          </Panel>
        </>
      ) : (
        <>
          <Panel sx={{ p: 3, mb: 3, background: t.dark ? '#101C2E' : '#fff' }}>
            <SectionTitle>{d.errorRate}</SectionTitle>
            <Bars values={s.errs} color="#EF4444" height={120} />
            <Text sx={{ mt: 2, fontSize: 0, color: t.muted, fontFamily: font }}>{s.errRate}% avg &middot; within SLA</Text>
          </Panel>
          <Panel sx={{ overflow: 'hidden' }}>
            <Box sx={{ px: 3, py: 3, borderBottom: `1px solid ${t.line}` }}>
              <Text sx={{ fontWeight: 700, fontSize: 1, color: t.ink, fontFamily: font }}>{d.uptimeNote} &middot; 30 days</Text>
            </Box>
            {d.serviceList.map((sv, i) => {
              const ok = sv.status === 'Operational';
              return (
                <Box key={sv.name} sx={{ display: 'flex', alignItems: 'center', gap: 3, px: 3, py: 2.5, borderTop: `1px solid ${t.line}` }}>
                  <Box sx={{ width: 64, flexShrink: 0 }}>
                    <Text sx={{ fontSize: 0, fontWeight: 600, color: t.ink, fontFamily: font, display: 'block' }}>{sv.name}</Text>
                  </Box>
                  <Box sx={{ flex: 1, height: 6, borderRadius: 99, backgroundColor: t.line, overflow: 'hidden' }}>
                    <Box sx={{ width: `${[99.9, 99.8, 100, 99.5][i]}%`, height: '100%', borderRadius: 99, background: ok ? t.grad : '#F59E0B' }} />
                  </Box>
                  <Text sx={{ fontSize: 0, fontWeight: 700, color: t.slate, fontFamily: 'Menlo, monospace' }}>{['99.9', '99.8', '100', '99.5'][i]}%</Text>
                </Box>
              );
            })}
          </Panel>
        </>
      )}
    </Page>
  );
}

export function CloudB({ d, item }) {
  const t = useT();
  const s = setup(item);
  const allOk = d.serviceList.every((sv) => sv.status === 'Operational');
  const [open, setOpen] = useState(false);
  return (
    <Page>
      <CloudHeader title={d.title} ok={allOk} sub={d.allOperational} />
      <Box
        sx={{
          mb: 3,
          p: 3,
          borderRadius: t.radius,
          background: t.dark ? `linear-gradient(120deg, ${t.accent}2e, ${t.accent2}26)` : `linear-gradient(120deg, ${t.accent}14, ${t.accent2}0d)`,
          border: `1px solid ${t.accent}44`,
          display: 'flex',
          alignItems: 'center',
          gap: 3,
        }}>
        <Box sx={{ width: 46, height: 46, borderRadius: 14, background: t.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0, boxShadow: `0 8px 18px ${t.accent}55` }}>
          <Icon name="check" size={22} strokeWidth={2.4} />
        </Box>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Text sx={{ fontWeight: 700, fontSize: 2, color: t.ink, fontFamily: font, display: 'block' }}>{allOk ? d.allOperational : d.degraded}</Text>
          <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{s.uptime}% uptime &middot; {d.last24h}</Text>
        </Box>
        <StatusPill ok={allOk} text={allOk ? d.operational : d.degraded} />
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '2fr 1fr'], gap: 3, '@container (max-width: 640px)': { gridTemplateColumns: '1fr' } }}>
        <Panel sx={{ overflow: 'hidden' }}>
          <Box sx={{ px: 3, py: 3, borderBottom: `1px solid ${t.line}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text sx={{ fontWeight: 700, fontSize: 1, color: t.ink, fontFamily: font }}>{d.services}</Text>
            <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{d.serviceList.filter((x) => x.status === 'Operational').length}/{d.serviceList.length}</Text>
          </Box>
          {d.serviceList.map((sv, i) => {
            const ok = sv.status === 'Operational';
            return (
              <Box key={sv.name} sx={{ display: 'flex', alignItems: 'center', gap: 3, px: 3, py: 3, borderTop: `1px solid ${t.line}` }}>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Text sx={{ fontWeight: 700, fontSize: 1, color: t.ink, fontFamily: font, display: 'block' }}>{sv.name}</Text>
                  <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>Region ap-{['east-1', 'north-2', 'south-1'][i % 3]} &middot; {18 + ((i * 7) % 40)}ms</Text>
                </Box>
                <Box sx={{ width: 90, flexShrink: 0 }}>
                  <Box sx={{ height: 5, borderRadius: 99, backgroundColor: t.line, overflow: 'hidden', mb: 1 }}>
                    <Box sx={{ width: `${[99.9, 99.8, 100, 99.5][i]}%`, height: '100%', borderRadius: 99, background: ok ? t.grad : '#F59E0B' }} />
                  </Box>
                  <Text sx={{ fontSize: 0, fontWeight: 700, color: t.slate, fontFamily: 'Menlo, monospace' }}>{['99.9', '99.8', '100', '99.5'][i]}%</Text>
                </Box>
                <StatusPill ok={ok} text={ok ? d.operational : d.degraded} />
              </Box>
            );
          })}
        </Panel>
        <Panel sx={{ p: 3 }}>
          <SectionTitle>{d.uptime}</SectionTitle>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 3 }}>
            <Box sx={{ p: 2.5, borderRadius: t.radius, backgroundColor: t.dark ? 'rgba(255,255,255,0.05)' : '#F6F9FC', border: `1px solid ${t.line}` }}>
              <Text sx={{ fontSize: 0, fontWeight: 700, color: t.accent, fontFamily: font, display: 'block' }}>{d.activeUsers}</Text>
              <Text sx={{ fontSize: 1, fontWeight: 700, color: t.ink, fontFamily: font }}>{s.users.toLocaleString('en-US')}</Text>
            </Box>
            <Box sx={{ p: 2.5, borderRadius: t.radius, backgroundColor: t.dark ? 'rgba(255,255,255,0.05)' : '#F6F9FC', border: `1px solid ${t.line}` }}>
              <Text sx={{ fontSize: 0, fontWeight: 700, color: t.accent, fontFamily: font, display: 'block' }}>{d.requests}</Text>
              <Text sx={{ fontSize: 1, fontWeight: 700, color: t.ink, fontFamily: font }}>{s.reqDay.toLocaleString('en-US')}</Text>
            </Box>
          </Box>
          <SectionTitle>{d.incidents}</SectionTitle>
          {s.incidents === 0 ? (
            <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font, py: 2 }}>No incidents in the last 90 days.</Text>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[0, 1].slice(0, s.incidents).map((i) => (
                <Box key={i} sx={{ px: 2.5, py: 2, borderRadius: t.radius, backgroundColor: `${'#F59E0B'}14`, border: `1px solid ${'#F59E0B'}44` }}>
                  <Text sx={{ fontSize: 0, fontWeight: 700, color: '#B45309', fontFamily: font, display: 'block' }}>{d.serviceList[i % d.serviceList.length].name}</Text>
                  <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{i + 1}d ago &middot; auto-resolved</Text>
                </Box>
              ))}
            </Box>
          )}
          <GhostBtn sx={{ width: '100%', mt: 3 }} onClick={() => setOpen(true)}>{d.enterprise} <Icon name="bolt" size={14} /></GhostBtn>
        </Panel>
      </Box>
      {open && (
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 20, backgroundColor: 'rgba(8,15,26,0.55)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4 }}>
          <Panel sx={{ p: 4, maxWidth: 380, width: '100%', textAlign: 'center' }}>
            <Box sx={{ width: 52, height: 52, mx: 'auto', mb: 3, borderRadius: 14, background: t.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: `0 8px 18px ${t.accent}55` }}>
              <Icon name="rocket" size={24} />
            </Box>
            <Text sx={{ fontWeight: 700, fontSize: 2, color: t.ink, fontFamily: font, display: 'block' }}>{d.enterprise}</Text>
            <Text sx={{ mt: 1, mb: 4, fontSize: 0, color: t.muted, fontFamily: font }}>{d.enterpriseNote}</Text>
            <AccentBtn sx={{ width: '100%' }} onClick={() => setOpen(false)}>{d.upgrade}</AccentBtn>
          </Panel>
        </Box>
      )}
    </Page>
  );
}

export function CloudC({ d, item }) {
  const t = useT();
  const s = setup(item);
  const [log, setLog] = useState(s.activities);
  const allOk = d.serviceList.every((sv) => sv.status === 'Operational');
  return (
    <Page>
      <CloudHeader title={d.title} ok={allOk} sub={d.admin} />
      <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr 1fr', null, 'repeat(4, 1fr)'], gap: 3, mb: 3, '@container (max-width: 460px)': { gridTemplateColumns: '1fr 1fr' } }}>
        <StatCard label={d.uptime} value={`${s.uptime}%`} />
        <StatCard label={d.requests} value={`${(s.reqDay / 1000).toFixed(1)}k`} color={t.accent} />
        <StatCard label={d.errorRate} value={`${s.errRate}%`} color={s.errRate > '0.10' ? '#EF4444' : t.accent} />
        <StatCard label={d.incidents} value={String(s.incidents)} />
      </Box>
      <Panel sx={{ p: 3, mb: 3 }}>
        <SectionTitle right={<Box sx={{ display: 'flex', gap: 2 }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, fontSize: 0, fontWeight: 700, color: t.muted, fontFamily: font }}><Box sx={{ width: 8, height: 8, borderRadius: '50%', background: t.accent }} />{d.requestsBadge}</Box>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, fontSize: 0, fontWeight: 700, color: t.muted, fontFamily: font }}><Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#EF4444' }} />{d.errorsBadge}</Box>
        </Box>}>
          {d.last24h}
        </SectionTitle>
        <Area values={s.req} color={t.accent} height={100} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 0, color: t.muted, fontFamily: font, mt: 1 }}>
          <Text>00:00</Text><Text>06:00</Text><Text>12:00</Text><Text>18:00</Text><Text>Now</Text>
        </Box>
      </Panel>
      <Panel sx={{ overflow: 'hidden' }}>
        <Box sx={{ px: 3, py: 3, borderBottom: `1px solid ${t.line}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text sx={{ fontWeight: 700, fontSize: 1, color: t.ink, fontFamily: font }}>Live events</Text>
          <Box
            role="button"
            tabIndex={0}
            aria-label="refresh"
            onClick={() => setLog((prev) => {
              const next = s.activities[prev.length % s.activities.length];
              return [next, ...prev.slice(0, 4)];
            })}
            sx={{ width: 30, height: 30, borderRadius: 9, backgroundColor: `${t.accent}14`, color: t.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Icon name="refresh" size={15} />
          </Box>
        </Box>
        {log.map((ev, i) => (
          <Box key={`${ev}-${i}`} sx={{ display: 'flex', alignItems: 'center', gap: 3, px: 3, py: 1.5, borderTop: `1px solid ${t.line}` }}>
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: i === 0 ? '#22C55E' : t.accent, flexShrink: 0, boxShadow: i === 0 ? '0 0 0 4px rgba(34,197,94,0.2)' : 'none' }} />
            <Text sx={{ flex: 1, fontSize: 0, color: t.slate, fontFamily: font, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ev}</Text>
            <Text sx={{ fontSize: 0, color: t.muted, fontFamily: 'Menlo, monospace', flexShrink: 0 }}>{i === 0 ? 'now' : `${(i + 1) * 4}m`}</Text>
          </Box>
        ))}
      </Panel>
    </Page>
  );
}

