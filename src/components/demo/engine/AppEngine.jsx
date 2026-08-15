/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { useMemo, useRef, useState, useEffect } from 'react';
import { LAYOUTS, hashId } from '../layouts';
import { categoryFor, contentFor } from '../case-content';
import { blueprintFor } from './logic';
import { ThemeContext } from './theme';
import { LegacyScreen } from './screens/legacy';
import { screenFor, KEY_FOR_TAG } from './screens';
import MobileShell from './mobile-shell';

function useContainerWidth() {
  const ref = useRef(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver((entries) => {
      const rect = entries[0] && entries[0].contentRect;
      if (rect) setW(Math.round(rect.width));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return [ref, w];
}

export default function AppEngine({ item, locale, t, brand, modules, active, onSelect }) {
  const category = categoryFor(item);
  const tags = useMemo(() => modules.map((m) => m.tag), [modules]);
  const bp = useMemo(() => blueprintFor(item.id, category, tags), [item.id, category, tags]);
  const theme = bp.theme;
  const Shell = LAYOUTS[bp.shell] || LAYOUTS['sidebar-dark'];
  const Tag = modules[active].tag;
  const EngineScreen = screenFor(Tag, bp.variants[Tag] || 1);
  const tint = theme.accent;
  const [wrapRef, cw] = useContainerWidth();
  const isPhone = cw > 0 && cw < 620;
  const ActiveShell = isPhone ? MobileShell : Shell;

  const render = () => (
    <ThemeContext.Provider value={theme}>
      {EngineScreen ? (
        <EngineScreen item={item} locale={locale} t={t} brand={brand} d={contentFor(t, locale, item, KEY_FOR_TAG[Tag])} />
      ) : (
        <LegacyScreen tag={Tag} t={t} locale={locale} item={item} tint={tint} />
      )}
    </ThemeContext.Provider>
  );

  return (
    <Box ref={wrapRef} sx={{ width: '100%' }}>
      <ActiveShell modules={modules} active={active} onSelect={onSelect} brand={brand} tint={tint} seed={hashId(item.id)} theme={theme}>
        {render}
      </ActiveShell>
    </Box>
  );
}
