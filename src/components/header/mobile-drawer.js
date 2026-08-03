import React, { useContext, useState } from 'react';
import { Box } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'components/drawer';
import { DrawerContext } from '../../contexts/drawer/drawer.context';
import { IoMdClose, IoMdMenu, IoIosArrowDown } from 'react-icons/io';
import { scroller } from 'react-scroll';
import { useRouter } from 'next/router';
import menuItems from './header.data';
import { useLocale, localizedPath, stripLocalePrefix } from '../../locales';

const serviceSlugs = [
  '/services/mobile-app-development',
  '/services/web-app-development',
  '/services/ui-ux-design',
  '/services/server-deployment',
  '/services/maintenance-support',
];

const MobileDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);
  const router = useRouter();
  const { locale, t } = useLocale();
  const isHome = router.pathname === '/' || router.pathname === '/[locale]';
  const [servicesOpen, setServicesOpen] = useState(false);

  const currentBase = stripLocalePrefix(router.asPath).split('?')[0];

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  const smoothScroll = (e, target) => {
    if (!isHome) return;
    e.preventDefault();
    dispatch({ type: 'TOGGLE' });
    scroller.scrollTo(target === 'home' ? 'home' : target, {
      smooth: true,
      offset: -70,
      duration: 500,
    });
  };

  const renderNavItem = ({ path, labelKey }, i) => {
    const isActive =
      path === 'home' ? currentBase === '/' : currentBase === path;
    if (path.startsWith('/')) {
      return (
        <a
          href={localizedPath(locale, path)}
          key={i}
          className={isActive ? 'active' : undefined}
          onClick={() => dispatch({ type: 'TOGGLE' })}>
          {t(labelKey)}
        </a>
      );
    }
    const href = path === 'home' ? localizedPath(locale, '/') : localizedPath(locale, `/#${path}`);
    return (
      <a
        href={href}
        key={i}
        className={isActive ? 'active' : undefined}
        onClick={(e) => smoothScroll(e, path)}>
        {t(labelKey)}
      </a>
    );
  };

  const renderServicesMenu = (
    <Box key="services">
      <Box
        sx={styles.submenuTrigger}
        className={currentBase.startsWith('/services') ? 'active' : undefined}
        onClick={() => setServicesOpen(!servicesOpen)}>
        <Box as="span">{t('nav.services')}</Box>
        <Box as="span" sx={{ ...styles.caret, ...(servicesOpen ? styles.caretOpen : {}) }}>
          <IoIosArrowDown />
        </Box>
      </Box>
      {servicesOpen && (
        <Box sx={styles.submenu}>
          {serviceSlugs.map((path, i) => (
            <a
              key={path}
              href={localizedPath(locale, path)}
              className={currentBase === path ? 'active' : undefined}
              onClick={() => dispatch({ type: 'TOGGLE' })}>
              {t(`serviceNames.${i}`)}
            </a>
          ))}
        </Box>
      )}
    </Box>
  );

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="26px" />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" color="#FFFFFF" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}>
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Box sx={styles.menu}>
            {menuItems.map((item, i) =>
              item.path === 'services' ? renderServicesMenu : renderNavItem(item, i)
            )}
          </Box>

          <Box sx={styles.menuFooter}>
            <Box
              as="a"
              href={localizedPath(locale, '/contact')}
              sx={styles.button}>
              {t('cta.getQuote')}
            </Box>
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',

    '@media screen and (min-width: 1000px)': {
      display: 'none',
    },
  },

  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'teal',
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'white',
      py: '15px',
      cursor: 'pointer',
      transition: 'all 0.25s',
      textDecoration: 'none',
      '&:hover': {
        color: 'cyan',
      },
      '&.active': {
        color: 'cyan',
      },
    },
  },

  submenuTrigger: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '16px',
    fontWeight: '500',
    color: 'white',
    py: '15px',
    cursor: 'pointer',
    transition: 'all 0.25s',
    '&:hover': {
      color: 'cyan',
    },
    '&.active': {
      color: 'cyan',
    },
  },

  caret: {
    display: 'flex',
    alignItems: 'center',
    transition: 'transform 0.2s',
  },

  caretOpen: {
    transform: 'rotate(180deg)',
  },

  submenu: {
    a: {
      display: 'block',
      fontSize: '15px',
      fontWeight: '400',
      color: 'rgba(255,255,255,0.85)',
      py: '10px',
      pl: '16px',
      cursor: 'pointer',
      transition: 'all 0.25s',
      textDecoration: 'none',
      '&:hover': {
        color: 'cyan',
      },
      '&.active': {
        color: 'cyan',
        fontWeight: '700',
      },
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  button: {
    color: 'teal',
    fontSize: '15px',
    fontWeight: '700',
    backgroundColor: 'white',
    borderRadius: '45px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '14px',
    mb: '25px',
    fontFamily: 'Ubuntu',
    transition: 'all 0.25s',
    '&:hover': {
      backgroundColor: 'cyan',
      color: 'teal',
    },
  },
};

export default MobileDrawer;
