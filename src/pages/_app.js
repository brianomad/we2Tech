import { useEffect } from 'react';
import Router from 'next/router';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import { initGA, logPageView } from 'analytics';
import { LocaleProvider, getLocaleInfo } from '../locales';
import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';

function detectLocale(asPath) {
  const p = asPath.split('?')[0];
  if (p.startsWith('/zh-cn')) return 'zh-cn';
  if (p.startsWith('/zh')) return 'zh';
  return 'en';
}

export default function CustomApp({ Component, pageProps, router }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  const locale = detectLocale(router.asPath);
  const localeInfo = getLocaleInfo(locale);

  useEffect(() => {
    document.documentElement.lang = localeInfo.htmlLang;
  }, [localeInfo.htmlLang]);

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <LocaleProvider locale={locale}>
          <Component {...pageProps} />
        </LocaleProvider>
      </StickyProvider>
    </ThemeProvider>
  );
}
