/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { S, font } from './shared';
import { Icon } from './icons';

export function BrowserFrame({ url = 'https://demo.we2tech.pro', children, height, brand }) {
  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: 14,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: '#D3DDEA',
        backgroundColor: '#fff',
        boxShadow: '0 24px 60px rgba(15,33,55,0.16), 0 3px 10px rgba(15,33,55,0.06)',
      }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          px: 3,
          py: '9px',
          backgroundColor: '#EDF1F7',
          borderBottom: '1px solid',
          borderColor: '#DCE3ED',
        }}>
        <Box sx={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FF5F57' }} />
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FEBC2E' }} />
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#28C840' }} />
        </Box>
        <Box sx={{ display: ['none', null, 'flex'], gap: 1, fontSize: 0, color: S.muted, fontFamily: font, fontWeight: 600 }}>
          <Box sx={{ px: 2, py: '3px', borderRadius: 6, backgroundColor: '#fff', border: '1px solid #DCE3ED', display: 'flex', alignItems: 'center' }}>
            <Icon name="refresh" size={12} />
          </Box>
          <Box sx={{ px: 2, py: '3px', borderRadius: 6, backgroundColor: '#fff', border: '1px solid #DCE3ED', display: 'flex', alignItems: 'center' }}>
            <Icon name="arrowRight" size={12} />
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            maxWidth: 460,
            mx: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            px: 3,
            py: '5px',
            borderRadius: 8,
            backgroundColor: '#fff',
            border: '1px solid',
            borderColor: '#DCE3ED',
            color: S.slate,
            fontSize: 0,
            fontFamily: font,
            boxShadow: 'inset 0 1px 2px rgba(15,33,55,0.04)',
          }}>
          <Text sx={{ color: S.green, display: 'inline-flex', alignItems: 'center' }}><Icon name="lock" size={12} /></Text>
          <Text sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{url}</Text>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: '#F1F4F9',
          containerType: 'inline-size',
          ...(height ? { height, overflow: 'auto' } : {}),
        }}>
        {children}
      </Box>
    </Box>
  );
}

export function PhoneFrame({ children, title, height = 500, tint = S.ink, scene }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
      <Box
        sx={{
          width: 320,
          maxWidth: '100%',
          height,
          borderRadius: 34,
          border: '10px solid',
          borderColor: '#0B0F19',
          backgroundColor: '#F4F6FB',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 30px 70px rgba(15,33,55,0.35), 0 2px 8px rgba(15,33,55,0.15)',
        }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 4,
            py: '7px',
            background: `linear-gradient(135deg, ${tint}, #0B1B33)`,
            color: '#fff',
            fontSize: 0,
            fontFamily: font,
            fontWeight: 600,
          }}>
          <Text>9:41</Text>
          <Box sx={{ width: 60, height: 16, borderRadius: 99, backgroundColor: 'rgba(255,255,255,0.18)', position: 'relative' }}>
            <Box sx={{ position: 'absolute', left: 2, top: 3, width: 34, height: 10, borderRadius: 99, backgroundColor: '#fff' }} />
          </Box>
          <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center', fontSize: 0, color: 'rgba(255,255,255,0.85)' }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '1.5px' }}>
              <Box sx={{ width: 2.5, height: 5, borderRadius: 1, backgroundColor: 'currentColor' }} />
              <Box sx={{ width: 2.5, height: 8, borderRadius: 1, backgroundColor: 'currentColor' }} />
              <Box sx={{ width: 2.5, height: 11, borderRadius: 1, backgroundColor: 'currentColor' }} />
            </Box>
            <Icon name="wifi" size={11} />
            <Box sx={{ width: 15, height: 8, borderRadius: 2, border: '1.5px solid currentColor', position: 'relative' }}>
              <Box sx={{ position: 'absolute', right: 1, top: 1, bottom: 1, left: 1, backgroundColor: 'currentColor' }} />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0B0F19',
            height: 24,
          }}>
          <Box sx={{ width: 92, height: 18, borderRadius: 99, backgroundColor: '#0B0F19', border: '1px solid #2A3040' }} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 4,
            py: 2,
            backgroundColor: '#fff',
            borderBottom: '1px solid',
            borderColor: S.line,
          }}>
          <Text sx={{ fontWeight: 700, fontSize: 1, fontFamily: font, color: S.ink }}>{title}</Text>
          <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center', color: S.slate }}>
            <Box sx={{ display: 'flex' }}><Icon name="phone" size={16} /></Box>
            <Box sx={{ display: 'flex' }}><Icon name="bell" size={16} /></Box>
          </Box>
        </Box>
        <Box sx={{ height: `calc(100% - 40px - 24px - 43px)`, overflow: 'auto', containerType: 'inline-size' }}>{children}</Box>
      </Box>
    </Box>
  );
}
