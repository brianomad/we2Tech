import React, { useContext } from 'react';
import { Box } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'components/drawer';
import { DrawerContext } from '../../contexts/drawer/drawer.context';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { scroller } from 'react-scroll';
import { useRouter } from 'next/router';
import {
  FaInstagram,
} from 'react-icons/fa';
import menuItems from './header.data';

const social = [
  {
    path: 'https://www.instagram.com/we2tech/',
    icon: <FaInstagram />,
  },
];

const MobileDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);
  const router = useRouter();
  const isHome = router.pathname === '/';

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

  const renderNavItem = ({ path, label }, i) => {
    const isActive =
      path === 'home' ? router.pathname === '/' : router.pathname === path;
    if (path.startsWith('/')) {
      return (
        <a
          href={path}
          key={i}
          className={isActive ? 'active' : undefined}
          onClick={() => dispatch({ type: 'TOGGLE' })}>
          {label}
        </a>
      );
    }
    const href = path === 'home' ? '/' : `/#${path}`;
    return (
      <a
        href={href}
        key={i}
        className={isActive ? 'active' : undefined}
        onClick={(e) => smoothScroll(e, path)}>
        {label}
      </a>
    );
  };

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
            {menuItems.map((item, i) => (item.path === 'services' ? null : renderNavItem(item, i)))}
            {[
              '/services/mobile-app-development',
              '/services/web-app-development',
              '/services/ui-ux-design',
              '/services/server-deployment',
              '/services/maintenance-support',
            ].map((path) => (
              <a
                key={path}
                href={path}
                className={router.pathname === path ? 'active' : undefined}
                onClick={() => dispatch({ type: 'TOGGLE' })}>
                {{
                  '/services/mobile-app-development': 'Mobile App Development',
                  '/services/web-app-development': 'Web App Development',
                  '/services/ui-ux-design': 'UI/UX Design',
                  '/services/server-deployment': 'Server Deployment',
                  '/services/maintenance-support': 'Maintenance & Support',
                }[path]}
              </a>
            ))}
          </Box>

          <Box sx={styles.menuFooter}>
          <Box
            as="a"
            href="/contact"
            sx={styles.button}>
            Get a Quote
          </Box>
            <Box sx={styles.social}>
              {social.map(({ path, icon }, i) => (
                <Box as="span" key={i} sx={styles.social.icon}>
                  <a href={path} target="_blank" rel="noopener noreferrer">{icon}</a>
                </Box>
              ))}
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
      borderBottom: '1px solid rgba(255,255,255,0.15)',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'cyan',
      },
      '&.active': {
        color: 'cyan',
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

  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: 14,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
      '&:hover': {
        color: 'cyan',
      },
    },
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
