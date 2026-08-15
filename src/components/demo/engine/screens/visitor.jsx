/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { font, Qr } from '../../shared';
import { Icon } from '../../icons';
import { hashId } from '../logic';
import { useT } from '../theme';
import { Panel, SectionTitle, AccentBtn, GhostBtn, Chip, Page } from '../blocks';

const PURPOSE_ICONS = ['message', 'box', 'building', 'user'];

function TextInput({ label, value, onChange }) {
  const t = useT();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <Text as="label" sx={{ fontSize: 0, fontWeight: 700, color: t.slate, fontFamily: font }}>{label}</Text>
      <Box
        as="input"
        type="text"
        value={value}
        onChange={onChange}
        aria-label={label}
        sx={{
          px: 3,
          py: '10px',
          borderRadius: t.radius,
          border: `1px solid ${t.line}`,
          backgroundColor: t.surface,
          color: t.ink,
          fontSize: 1,
          fontFamily: font,
          outline: 'none',
          transition: 'border-color 0.15s, box-shadow 0.15s',
          '&:hover': { borderColor: `${t.accent}66` },
          '&:focus': { borderColor: t.accent, boxShadow: `0 0 0 3px ${t.accent}22` },
        }}
      />
    </Box>
  );
}

function PurposePills({ d, value, onChange, big }) {
  const t = useT();
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: big ? ['1fr 1fr', null, 'repeat(4, 1fr)'] : '1fr 1fr', gap: 2, '@container (max-width: 380px)': { gridTemplateColumns: '1fr 1fr' } }}>
      {d.purposes.map((p, i) => {
        const on = value === i;
        return (
          <Box
            key={p}
            role="button"
            tabIndex={0}
            aria-pressed={on}
            onClick={() => onChange(i)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onChange(i); } }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              px: 3,
              py: big ? 4 : 2.5,
              borderRadius: t.radius,
              cursor: 'pointer',
              borderWidth: 2,
              borderStyle: 'solid',
              borderColor: on ? t.accent : t.line,
              backgroundColor: on ? `${t.accent}0d` : t.surface,
              color: on ? t.accent : t.slate,
              fontFamily: font,
              transition: 'all 0.15s',
              ':focus-visible': { outline: 'none', boxShadow: `0 0 0 2px ${t.accent}55` },
            }}>
            <Box sx={{ color: on ? t.accent : t.muted, display: 'flex', flexShrink: 0 }}>
              <Icon name={PURPOSE_ICONS[i % PURPOSE_ICONS.length]} size={big ? 20 : 16} />
            </Box>
            <Text sx={{ fontWeight: 700, fontSize: big ? 1 : 0, minWidth: 0 }}>{p}</Text>
            {on && <Box sx={{ ml: 'auto', color: t.accent, display: 'flex' }}><Icon name="check" size={14} /></Box>}
          </Box>
        );
      })}
    </Box>
  );
}

function PassCard({ d, name, host, purpose, onReset, compact }) {
  const t = useT();
  const [spin] = useState(hashId(String(name).charCodeAt(0) || 0) % 4);
  return (
    <Panel sx={{ p: 3.5, textAlign: 'center', position: 'relative' }}>
      <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2.5, py: '5px', borderRadius: 99, backgroundColor: `${'#22C55E'}1a`, color: '#16A34A', fontSize: 0, fontWeight: 700, fontFamily: font, mb: 3 }}>
        <Icon name="check" size={12} strokeWidth={3} /> {d.passTitle}
      </Box>
      <Box sx={{ position: 'relative', mx: 'auto', mb: 3, width: 120, height: 120 }}>
        <Box sx={{ position: 'absolute', left: -9, top: 51, width: 18, height: 18, borderRadius: '50%', backgroundColor: t.bg, border: `1px solid ${t.line}` }} />
        <Box sx={{ position: 'absolute', right: -9, top: 51, width: 18, height: 18, borderRadius: '50%', backgroundColor: t.bg, border: `1px solid ${t.line}` }} />
        <Box sx={{ width: 120, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 12, border: `1px dashed ${t.accent}66`, boxShadow: `0 0 0 3px ${t.accent}14`, transform: `rotate(${spin * 90}deg) scale(0.82)`, backgroundColor: '#fff' }}>
          <Qr size={104} />
        </Box>
      </Box>
      <Text sx={{ display: 'block', fontWeight: 700, fontSize: 2, color: t.ink, fontFamily: font }}>{name}</Text>
      <Text sx={{ display: 'block', fontSize: 0, color: t.slate, fontFamily: font, mt: 1 }}>{purpose} &middot; {host}</Text>
      <Text sx={{ fontSize: 0, color: '#16A34A', fontFamily: font, mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
        <Icon name="clock" size={12} /> {d.validFor}
      </Text>
      {!compact && <GhostBtn sx={{ mt: 3, width: '100%' }} onClick={onReset}><Icon name="refresh" size={14} /> {d.newVisitor}</GhostBtn>}
    </Panel>
  );
}

function EntryLog({ d, log }) {
  const t = useT();
  return (
    <Panel sx={{ overflow: 'hidden' }}>
      <Box sx={{ px: 3, py: 3, borderBottom: `1px solid ${t.line}` }}>
        <Text sx={{ fontWeight: 700, fontSize: 1, color: t.ink, fontFamily: font }}>{d.entryLog}</Text>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {log.map((l, i) => (
          <Box key={`${l.name}-${i}`} sx={{ display: 'flex', alignItems: 'center', gap: 3, px: 3, py: 2.5, borderTop: `1px solid ${t.line}` }}>
            <Box sx={{ width: 34, height: 34, borderRadius: '50%', background: `${t.accent}1a`, color: t.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 0, fontFamily: font, flexShrink: 0 }}>
              {l.name.slice(0, 1).toUpperCase()}
            </Box>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Text sx={{ fontWeight: 700, fontSize: 1, color: t.ink, fontFamily: font, display: 'block' }}>{l.name}</Text>
              <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{l.purpose}</Text>
            </Box>
            <Box sx={{ textAlign: 'right' }}>
              <Text sx={{ fontSize: 0, fontWeight: 700, color: '#16A34A', fontFamily: font, display: 'inline-flex', alignItems: 'center', gap: 1 }}>
                <Icon name="check" size={11} /> {d.entered}
              </Text>
              <Text sx={{ fontSize: 0, color: t.muted, fontFamily: 'Menlo, monospace', mt: '2px' }}>{l.time}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Panel>
  );
}

function timeNow() {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

export function VisitorA({ d, item }) {
  const t = useT();
  const [name, setName] = useState('Wong Ka Ho');
  const [host, setHost] = useState('M. Leung');
  const [purpose, setPurpose] = useState(0);
  const [pass, setPass] = useState(false);
  const [toast, setToast] = useState(false);
  const [log, setLog] = useState([
    { name: 'Chan Tai Man', time: '09:12', purpose: d.purposes[0] },
    { name: 'Lau Wing Sze', time: '09:40', purpose: d.purposes[1] },
    { name: 'Ng Chun Kit', time: '10:01', purpose: d.purposes[2] },
  ]);
  const generate = () => {
    setLog((l) => [{ name, time: timeNow(), purpose: d.purposes[purpose] }, ...l]);
    setPass(true);
    setToast(true);
    setTimeout(() => setToast(false), 2400);
  };
  return (
    <Page>
      <SectionTitle>{d.preregister}</SectionTitle>
      <Panel sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1fr 1fr'], gap: 3, mb: 3, '@container (max-width: 460px)': { gridTemplateColumns: '1fr' } }}>
          <TextInput label={d.name} value={name} onChange={(e) => setName(e.target.value)} />
          <TextInput label={d.host} value={host} onChange={(e) => setHost(e.target.value)} />
        </Box>
        <Text sx={{ fontSize: 0, fontWeight: 700, color: t.slate, fontFamily: font, mb: 2 }}>{d.purpose}</Text>
        <PurposePills d={d} value={purpose} onChange={setPurpose} />
        <AccentBtn sx={{ mt: 3, width: '100%' }} onClick={generate}>{d.generate} <Icon name="arrowRight" size={15} /></AccentBtn>
      </Panel>
      <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1.4fr 1fr'], gap: 3, alignItems: 'start', '@container (max-width: 700px)': { gridTemplateColumns: '1fr' } }}>
        <EntryLog d={d} log={log} />
        {pass && <PassCard d={d} name={name} host={host} purpose={d.purposes[purpose]} onReset={() => setPass(false)} />}
      </Box>
      {toast && (
        <Box sx={{ position: 'absolute', left: 4, right: 4, bottom: 4, zIndex: 30 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 3, py: 2.5, borderRadius: t.radius, backgroundColor: t.dark ? '#13203A' : '#fff', border: `1px solid ${'#22C55E'}55`, boxShadow: '0 18px 40px rgba(8,15,26,0.35)' }}>
            <Box sx={{ width: 24, height: 24, borderRadius: '50%', background: t.grad, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name="check" size={13} strokeWidth={3} />
            </Box>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Text sx={{ fontWeight: 700, color: t.ink, fontFamily: font, display: 'block' }}>{d.passTitle}</Text>
              <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{name} &middot; {d.validFor}</Text>
            </Box>
          </Box>
        </Box>
      )}
    </Page>
  );
}

export function VisitorB({ d }) {
  const t = useT();
  const [step, setStep] = useState('purpose');
  const [purpose, setPurpose] = useState(0);
  const [name, setName] = useState('Chris Lam');
  return (
    <Page>
      {step === 'purpose' && (
        <>
          <SectionTitle>{d.frontDesk}</SectionTitle>
          <Text sx={{ fontSize: 1, fontWeight: 700, color: t.ink, fontFamily: font, mb: 1 }}>{d.purpose}</Text>
          <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font, mb: 3 }}>{d.passHint}</Text>
          <PurposePills d={d} value={purpose} onChange={setPurpose} big />
          <AccentBtn sx={{ width: '100%', mt: 3 }} onClick={() => setStep('name')}>
            {d.generate} <Icon name="arrowRight" size={15} />
          </AccentBtn>
        </>
      )}
      {step === 'name' && (
        <>
          <SectionTitle>{d.preregister}</SectionTitle>
          <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr 1fr', null, 'repeat(3, 1fr)'], gap: 2, '@container (max-width: 380px)': { gridTemplateColumns: '1fr 1fr' } }}>
            {['Chris Lam', 'Ada Ng', 'Sam To'].map((n, i) => {
              const on = name === n;
              return (
                <Panel key={n} onClick={() => setName(n)} sx={{ p: 3, textAlign: 'center', cursor: 'pointer', borderWidth: 2, borderColor: on ? t.accent : t.line, backgroundColor: on ? `${t.accent}0d` : t.surface }}>
                  <Box sx={{ mx: 'auto', mb: 2, width: 40, height: 40, borderRadius: '50%', background: on ? t.grad : t.line, color: on ? '#fff' : t.muted, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontFamily: font }}>
                    {n.slice(0, 1)}
                  </Box>
                  <Text sx={{ fontWeight: 700, fontSize: 0, color: t.ink, fontFamily: font }}>{n}</Text>
                </Panel>
              );
            })}
          </Box>
          <Box sx={{ mt: 3, mb: 3, width: '100%' }}>
            <TextInput label={d.name} value={name} onChange={(e) => setName(e.target.value)} />
          </Box>
          <GhostBtn sx={{ width: '100%', mb: 2 }} onClick={() => setStep('purpose')}><Icon name="arrowLeft" size={15} /> Back</GhostBtn>
          <AccentBtn sx={{ width: '100%' }} onClick={() => setStep('pass')}>
            {d.generate} <Icon name="check" size={15} />
          </AccentBtn>
        </>
      )}
      {step === 'pass' && (
        <Box sx={{ maxWidth: 360, mx: 'auto', width: '100%' }}>
          <PassCard d={d} name={name} host="Front desk" purpose={d.purposes[purpose]} onReset={() => setStep('purpose')} />
        </Box>
      )}
    </Page>
  );
}

export function VisitorC({ d }) {
  const t = useT();
  const [name, setName] = useState('Wong Ka Ho');
  const [host, setHost] = useState('M. Leung');
  const [purpose, setPurpose] = useState(0);
  const [q, setQ] = useState('');
  const [log, setLog] = useState([
    { name: 'Chan Tai Man', time: '09:12', purpose: d.purposes[0] },
    { name: 'Lau Wing Sze', time: '09:40', purpose: d.purposes[1] },
    { name: 'Ng Chun Kit', time: '10:01', purpose: d.purposes[2] },
    { name: 'Yuen Ho Fai', time: '10:27', purpose: d.purposes[3] },
  ]);
  const [justAdded, setJustAdded] = useState(false);
  const filtered = log.filter((l) => (l.name + l.purpose).toLowerCase().includes(q.toLowerCase()));
  return (
    <Page>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, gap: 2, flexWrap: 'wrap' }}>
        <SectionTitle sx={{ mb: 0 }}>{d.entryLog}</SectionTitle>
        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 2, px: 3, py: '8px', borderRadius: 99, border: `1.5px solid ${t.line}`, backgroundColor: t.surface, '@container (max-width: 460px)': { width: '100%' } }}>
          <Icon name="search" size={14} color={t.muted} />
          <Box
            as="input"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="search"
            placeholder={d.search || 'Search…'}
            sx={{ border: 'none', outline: 'none', backgroundColor: 'transparent', color: t.ink, fontSize: 0, fontFamily: font, width: 110, '::placeholder': { color: t.muted } }}
          />
        </Box>
      </Box>
      <Panel sx={{ p: 3, mb: 3 }}>
        <Text sx={{ fontSize: 0, fontWeight: 700, color: t.slate, fontFamily: font, mb: 2 }}>{d.preregister}</Text>
        <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', null, '1fr 1fr'], gap: 2, mb: 2, '@container (max-width: 460px)': { gridTemplateColumns: '1fr' } }}>
          <TextInput label={d.name} value={name} onChange={(e) => setName(e.target.value)} />
          <TextInput label={d.host} value={host} onChange={(e) => setHost(e.target.value)} />
        </Box>
        <PurposePills d={d} value={purpose} onChange={setPurpose} />
        <AccentBtn
          sx={{ mt: 3, width: '100%' }}
          onClick={() => {
            setLog((l) => [{ name, time: timeNow(), purpose: d.purposes[purpose], fresh: true }, ...l]);
            setJustAdded(true);
            setTimeout(() => setJustAdded(false), 2200);
          }}>
          {d.generate} <Icon name="check" size={15} />
        </AccentBtn>
      </Panel>
      {justAdded && (
        <Box sx={{ px: 3, py: 2.5, mb: 3, borderRadius: t.radius, backgroundColor: `${'#22C55E'}14`, border: `1px solid ${'#22C55E'}55`, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Icon name="checkCircle" size={15} color="#16A34A" />
          <Text sx={{ fontSize: 0, fontWeight: 700, color: '#16A34A', fontFamily: font }}>{d.passTitle} &middot; {d.validFor}</Text>
        </Box>
      )}
      <Panel sx={{ overflow: 'hidden' }}>
        <Box sx={{ px: 3, py: 2.5, borderBottom: `1px solid ${t.line}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text sx={{ fontWeight: 700, fontSize: 1, color: t.ink, fontFamily: font }}>{d.entryLog}</Text>
          <Text sx={{ fontSize: 0, color: t.muted, fontFamily: 'Menlo, monospace' }}>{filtered.length} today</Text>
        </Box>
        {filtered.length === 0 ? (
          <Box sx={{ py: 6, textAlign: 'center', color: t.muted }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, color: t.line }}><Icon name="search" size={26} /></Box>
            <Text sx={{ fontSize: 0, fontWeight: 600, fontFamily: font }}>No entries match your search</Text>
          </Box>
        ) : (
          filtered.map((l, i) => (
            <Box key={`${l.name}-${i}`} sx={{ display: 'flex', alignItems: 'center', gap: 3, px: 3, py: 2.5, borderTop: `1px solid ${t.line}` }}>
              <Box sx={{ width: 34, height: 34, borderRadius: '50%', background: `${t.accent}1a`, color: t.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 0, fontFamily: font, flexShrink: 0 }}>
                {l.name.slice(0, 1).toUpperCase()}
              </Box>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Text sx={{ fontWeight: 700, fontSize: 1, color: t.ink, fontFamily: font, display: 'block' }}>{l.name}</Text>
                <Text sx={{ fontSize: 0, color: t.muted, fontFamily: font }}>{l.purpose}</Text>
              </Box>
              <Box sx={{ textAlign: 'right' }}>
                <Text sx={{ fontSize: 0, fontWeight: 700, color: '#16A34A', fontFamily: font }}>{d.entered}</Text>
                <Text sx={{ fontSize: 0, color: t.muted, fontFamily: 'Menlo, monospace', mt: '2px' }}>{l.time}</Text>
              </Box>
            </Box>
          ))
        )}
      </Panel>
    </Page>
  );
}
