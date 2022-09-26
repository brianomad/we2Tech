/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useEffect, useCallback } from 'react';
import { Waypoint } from 'react-waypoint';
import Sticky from 'react-stickynode';
import { useStickyState } from 'contexts/app/app.provider';
import { useStickyDispatch } from 'contexts/app/app.provider';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import Header from './header/header';
import Footer from './footer/footer';

export default function Layout({ children }) {
  const dispatch = useStickyDispatch();
  const isSticky = useStickyState('isSticky');
  
  const control = useAnimation()
  const [ref, inView] = useInView()

  const setSticky = useCallback(() => dispatch({ type: 'SET_STICKY' }), [
    dispatch,
  ]);
  const removeSticky = useCallback(() => dispatch({ type: 'REMOVE_STICKY' }), [
    dispatch,
  ]);
  const onWaypointPositionChange = ({ currentPosition }) => {
    if (currentPosition === 'above') {
      setSticky();
    }
    if (currentPosition === 'below') {
      removeSticky();
    }
  };

  useEffect(() => {
    console.log('inView: ', inView)
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    };
  }, [control, inView]);

  return (
    <React.Fragment>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet" />
      <Sticky innerZ={991} top={0} enabled={isSticky}>
        <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} />
      </Sticky>
      <Waypoint
        onEnter={removeSticky}
        // onLeave={setSticky}
        onPositionChange={onWaypointPositionChange} />
      <motion.main
        id="content"
        sx={{
          variant: 'layout.main',
          position: 'relative'
        }}
        ref={ref}
        initial="hidden"
        animate={control}
        // variants={variants}
        >
          {children}
      </motion.main>
      <WhatsAppWidget
        phoneNumber="+85253968435"
        companyName={"we2Tech"}
        replyTimeText={""}
        message={"Hi, Thanks for your enquiry"} />
      <Footer />
    </React.Fragment>
  );
}

const variants = {
  visible: { opacity: 10, scale: 0 },
  hidden: { opacity: 0, scale: 0 },
};
