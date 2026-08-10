/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { S, font } from './shared';

export function BrowserFrame({ url = 'https://demo.we2tech.pro', children, height = 460, brand }) {
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
          <Text sx={{ px: 2, py: '2px', borderRadius: 6, backgroundColor: '#fff', border: '1px solid #DCE3ED' }}>&#8635;</Text>
          <Text sx={{ px: 2, py: '2px', borderRadius: 6, backgroundColor: '#fff', border: '1px solid #DCE3ED' }}>&#8594;</Text>
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
          <Text sx={{ color: S.green, fontSize: 0, display: 'inline-flex' }}>&#128274;</Text>
          <Text sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{url}</Text>
        </Box>
      </Box>
      <Box
        sx={{
          height,
          overflow: 'auto',
          backgroundColor: '#F1F4F9',
        }}>
        {children}
      </Box>
    </Box>
  );
}

export function PhoneFrame({ children, title, height = 500, tint = S.ink }) {
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
          <Box sx={{ display: 'flex', gap: '3px', fontSize: 0 }}>
            <Text>&#9679;</Text>
            <Text>&#9741;</Text>
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
          <Box sx={{ display: 'flex', gap: 1, color: S.slate, fontSize: 1 }}>
            <Box>&#9990;</Box>
            <Box>&#9788;</Box>
          </Box>
        </Box>
        <Box sx={{ height: `calc(100% - 40px - 24px - 43px)`, overflow: 'auto' }}>{children}</Box>
      </Box>
    </Box>
  );
}
