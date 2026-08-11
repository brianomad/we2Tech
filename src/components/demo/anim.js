/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { Global, css } from '@emotion/react';
import { S } from './shared';

export const demoKeyframes = css`
  @keyframes dPulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.4); opacity: 0.55; }
  }
  @keyframes dPing {
    0% { transform: scale(1); opacity: 0.55; }
    100% { transform: scale(2.8); opacity: 0; }
  }
  @keyframes dFadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes dFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes dToastIn {
    from { opacity: 0; transform: translateX(28px) scale(0.96); }
    to { opacity: 1; transform: translateX(0) scale(1); }
  }
  @keyframes dBarGrow {
    from { transform: scaleY(0); }
    to { transform: scaleY(1); }
  }
  @keyframes dSlideLine {
    from { background-position: 0 0; }
    to { background-position: 26px 0; }
  }
  @keyframes dShimmer {
    0% { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
  @keyframes dPulseBar {
    0% { opacity: 1; }
    50% { opacity: 0.45; }
    100% { opacity: 1; }
  }
  @keyframes livePulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(249,115,22,0.45); }
    50% { opacity: 0.6; box-shadow: 0 0 0 5px rgba(249,115,22,0); }
  }
`;

export function DemoGlobalStyles() {
  return <Global styles={demoKeyframes} />;
}

export const pulse = 'dPulse 1.4s ease-in-out infinite';
export const fadeUp = 'dFadeUp 0.45s cubic-bezier(0.22, 0.61, 0.36, 1) both';
export const fadeIn = 'dFadeIn 0.4s ease both';
export const toastIn = 'dToastIn 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) both';
export const barGrow = 'dBarGrow 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) both';

export function LiveDot({ color = '#1FA971', size = 8, ping = true }) {
  return (
    <Box sx={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      {ping && (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            backgroundColor: color,
            animation: 'dPing 1.8s ease-out infinite',
          }}
        />
      )}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          backgroundColor: color,
          animation: 'dPulse 1.4s ease-in-out infinite',
          boxShadow: `0 0 0 4px ${color}26`,
        }}
      />
    </Box>
  );
}

export function Toast({ children, tone = 'dark', onClose }) {
  return (
    <Box
      onClick={onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        px: 3,
        py: 2.5,
        borderRadius: 12,
        cursor: 'pointer',
        fontFamily: 'inherit',
        animation: toastIn,
        background: tone === 'light' ? '#fff' : S.ink,
        color: tone === 'light' ? S.ink : '#fff',
        border: '1px solid',
        borderColor: tone === 'light' ? S.line : 'rgba(255,255,255,0.12)',
        boxShadow: '0 16px 40px rgba(15,33,55,0.3), 0 2px 6px rgba(15,33,55,0.12)',
        fontSize: 0,
        fontWeight: 600,
      }}>
      {children}
    </Box>
  );
}
