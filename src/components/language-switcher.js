import React, { useState, useRef, useEffect } from 'react';
import { jsx, Box, Text } from 'theme-ui';
import { useRouter } from 'next/router';
import { LOCALES, useLocale, switchToLocale } from '../locales';
import { IoIosArrowDown } from 'react-icons/io';

function LanguageSwitcher({ light = true, align = 'right' }) {
  const router = useRouter();
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const pick = (code) => {
    setOpen(false);
    if (code === locale) return;
    router.push(switchToLocale(router.asPath, code));
  };

  return (
    <Box ref={ref} sx={styles.wrap(light, align)}>
      <Box
        sx={styles.trigger(light)}
        onClick={() => setOpen(!open)}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={open}>
        <Text sx={styles.short(light)}>{LOCALES.find((l) => l.code === locale).short}</Text>
        <Text sx={styles.full(light)}>{LOCALES.find((l) => l.code === locale).label}</Text>
        <Box sx={{ ...styles.caret(light), ...(open ? styles.caretOpen : {}) }}>
          <IoIosArrowDown />
        </Box>
      </Box>
      {open && (
        <Box sx={styles.menu(align)} role="listbox">
          {LOCALES.map((l) => (
            <Box
              key={l.code}
              role="option"
              aria-selected={l.code === locale}
              sx={{
                ...styles.option,
                ...(l.code === locale ? styles.optionActive : {}),
              }}
              onClick={() => pick(l.code)}>
              <Text>{l.label}</Text>
              <Text sx={styles.optionCode}>{l.short}</Text>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

const styles = {
  wrap: (light, align) => ({
    position: 'relative',
    ml: 3,
    display: 'flex',
  }),
  trigger: (light) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    px: '14px',
    py: '9px',
    borderRadius: 24,
    border: '1px solid',
    borderColor: light ? 'rgba(255,255,255,0.45)' : 'rgba(0,139,139,0.35)',
    backgroundColor: light ? 'rgba(255,255,255,0.12)' : 'rgba(0,139,139,0.06)',
    transition: 'all 0.2s',
    userSelect: 'none',
    '&:hover': {
      backgroundColor: light ? 'rgba(255,255,255,0.22)' : 'rgba(0,139,139,0.12)',
    },
  }),
  short: (light) => ({
    fontSize: '13px',
    fontWeight: 700,
    color: light ? 'cyan' : 'teal',
    lineHeight: 1,
  }),
  full: (light) => ({
    fontSize: '13px',
    fontWeight: 600,
    color: light ? 'white' : 'heading',
    lineHeight: 1,
    whiteSpace: 'nowrap',
  }),
  caret: (light) => ({
    display: 'flex',
    alignItems: 'center',
    color: light ? 'white' : 'teal',
    transition: 'transform 0.2s',
    fontSize: '12px',
  }),
  caretOpen: {
    transform: 'rotate(180deg)',
  },
  menu: (align) => ({
    position: 'absolute',
    top: 'calc(100% + 8px)',
    right: align === 'right' ? 0 : 'auto',
    left: align === 'right' ? 'auto' : 0,
    minWidth: 160,
    backgroundColor: 'white',
    borderRadius: 10,
    boxShadow: '0 15px 40px rgba(0,0,0,0.18)',
    py: 2,
    zIndex: 1000,
    overflow: 'hidden',
  }),
  option: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 3,
    px: 4,
    py: '10px',
    cursor: 'pointer',
    fontSize: 1,
    fontWeight: 500,
    color: 'heading',
    transition: 'all 0.15s',
    '&:hover': {
      color: 'teal',
      backgroundColor: 'background_secondary',
    },
  },
  optionActive: {
    color: 'teal',
    backgroundColor: 'background_secondary',
    fontWeight: 700,
  },
  optionCode: {
    fontSize: 0,
    fontWeight: 700,
    color: 'teal',
  },
};

export default LanguageSwitcher;
