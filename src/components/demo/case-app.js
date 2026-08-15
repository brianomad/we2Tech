/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useState } from 'react';
import { BrowserFrame, PhoneFrame } from './frames';
import { S, font } from './shared';
import { Icon } from './icons';
import { demoUrlFor, brandFor } from './demo-meta';
import { demoRegistry } from './registry';
import { hashId, TAG_ICONS } from './layouts';
import AppEngine from './engine/AppEngine';
import { CASE_DEMO_OVERRIDES } from './engine/showcase';

const TINTS = [S.teal, '#7C3AED', '#2563EB', '#DB2777', '#F97316', '#0EA5E9', '#16A34A', '#B45309'];

export default function CaseApp({ item, locale, t, tagNames = {} }) {
  const tags = item.tags || [];
  const seed = hashId(item.id || 0);
  const tint = TINTS[seed % TINTS.length];
  const brand = brandFor(item, 'Demo App');
  const mods = tags.map((tag) => ({ tag, label: tagNames[tag] || tag }));
  const rot = seed % mods.length;
  const modules = [...mods.slice(rot), ...mods.slice(0, rot)];
  const isMobile = tags.includes('Mobile App');
  const [active, setActive] = useState(0);
  const Module = demoRegistry[modules[active].tag] || (() => null);

  if (isMobile) {
    return (
      <Box sx={{ position: 'relative' }}>
        <PhoneFrame title={brand} tint={tint} height={520}>
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box sx={{ flex: 1, overflow: 'auto', position: 'relative', backgroundColor: S.bg }}>
              <Module t={t} locale={locale} item={item} tint={tint} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                px: 2.5,
                py: '10px',
                gap: 1,
                backgroundColor: '#fff',
                borderTop: '1px solid',
                borderColor: S.line,
                flexShrink: 0,
              }}>
              {modules.map((m, i) => (
                <Box
                  key={m.tag}
                  role="button"
                  tabIndex={0}
                  aria-label={m.label}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(i); } }}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '3px',
                    minHeight: 54,
                    fontSize: 0,
                    fontWeight: 700,
                    color: active === i ? tint : S.muted,
                    fontFamily: font,
                    cursor: 'pointer',
                    px: 1.5,
                    minWidth: 0,
                    maxWidth: 76,
                    textAlign: 'center',
                    borderRadius: 10,
                    ':focus-visible': { outline: 'none', boxShadow: `0 0 0 2px ${tint}88` },
                  }}>
                  <Box sx={{ lineHeight: 1, opacity: active === i ? 1 : 0.6 }}>
                    <Icon name={TAG_ICONS[m.tag] || 'box'} size={18} />
                  </Box>
                  <Text sx={{ fontSize: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100%' }}>
                    {m.label}
                  </Text>
                  {active === i && <Box sx={{ width: 14, height: 3, borderRadius: 99, backgroundColor: tint, mt: '1px' }} />}
                </Box>
              ))}
            </Box>
          </Box>
        </PhoneFrame>
      </Box>
    );
  }

  const Showcase = CASE_DEMO_OVERRIDES[item.id];
  return (
    <Box sx={{ position: 'relative' }}>
      <BrowserFrame url={demoUrlFor(item, 'https://app.demo.we2tech.pro')} height={720} brand={brand}>
        {Showcase ? (
          <Showcase t={t} locale={locale} item={item} brand={brand} modules={modules} active={active} onSelect={setActive} />
        ) : (
          <AppEngine item={item} locale={locale} t={t} brand={brand} modules={modules} active={active} onSelect={setActive} />
        )}
      </BrowserFrame>
    </Box>
  );
}
