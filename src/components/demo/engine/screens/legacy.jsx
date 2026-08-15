/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { demoRegistry } from '../../registry';

export function LegacyScreen({ tag, t, locale, item, tint }) {
  const Module = demoRegistry[tag] || (() => null);
  return (
    <Box sx={{ width: '100%', overflowX: 'auto', minWidth: 0 }}>
      <Box sx={{ minWidth: 1024 }}>
        <Module t={t} locale={locale} item={item} tint={tint} />
      </Box>
    </Box>
  );
}
