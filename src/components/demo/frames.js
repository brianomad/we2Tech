/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { S, font } from './shared';

export function BrowserFrame({ url = 'https://demo.we2tech.pro', children, height = 460 }) {
  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: 14,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: S.line,
        backgroundColor: '#fff',
        boxShadow: '0 12px 40px rgba(15,33,55,0.14), 0 2px 8px rgba(15,33,55,0.06)',
      }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          px: 3,
          py: 2,
          backgroundColor: '#F3F6FB',
          borderBottom: '1px solid',
          borderColor: S.line,
        }}>
        <Box sx={{ display: 'flex', gap: '6px' }}>
          <Box sx={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#F65D5A' }} />
          <Box sx={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#F5BE4F' }} />
          <Box sx={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#5AC85B' }} />
        </Box>
        <Box
          sx={{
            flex: 1,
            maxWidth: 420,
            mx: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            px: 3,
            py: '5px',
            borderRadius: 8,
            backgroundColor: '#fff',
            border: '1px solid',
            borderColor: S.line,
            color: S.muted,
            fontSize: 0,
            fontFamily: font,
          }}>
          <Text sx={{ color: S.green, fontSize: 0 }}>&#128274;</Text>
          {url}
        </Box>
      </Box>
      <Box
        sx={{
          height,
          overflow: 'auto',
          backgroundColor: S.bg,
        }}>
        {children}
      </Box>
    </Box>
  );
}

export function PhoneFrame({ children, title, height = 500 }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
      <Box
        sx={{
          width: 320,
          maxWidth: '100%',
          height,
          borderRadius: 30,
          border: '8px solid',
          borderColor: '#0F2137',
          backgroundColor: '#F4F7FB',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 24px 60px rgba(15,33,55,0.28)',
        }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0F2137',
            height: 22,
          }}>
          <Box sx={{ width: 86, height: 16, borderRadius: 99, backgroundColor: '#1B2C45' }} />
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
        <Box sx={{ height: `calc(100% - 22px - 46px)`, overflow: 'auto' }}>{children}</Box>
      </Box>
    </Box>
  );
}
