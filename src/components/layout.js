/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useEffect, useCallback, useState } from 'react';
import { Waypoint } from 'react-waypoint';
import Sticky from 'react-stickynode';
import { useStickyState } from 'contexts/app/app.provider';
import { useStickyDispatch } from 'contexts/app/app.provider';
import { WhatsAppWidget } from 'react-whatsapp-widget';

import Header from './header/header';
import Footer from './footer/footer';

export default function Layout({ children }) {
  const dispatch = useStickyDispatch();
  const isSticky = useStickyState('isSticky');
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  
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
    const timer = setTimeout(() => setShowWhatsApp(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
      <Sticky innerZ={991} top={0} enabled={isSticky}>
        <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} />
      </Sticky>
      <Waypoint
        onEnter={removeSticky}
        onPositionChange={onWaypointPositionChange} />
      <main
        id="content"
        sx={{
          variant: 'layout.main',
          position: 'relative',
        }}>
          {children}
      </main>
      {showWhatsApp && (
        <WhatsAppWidget
          phoneNumber="+85253968435"
          companyName={"we2Tech"}
          replyTimeText={""}
          message={"Hi, Thanks for your enquiry"} />
      )}
      <Footer />
    </React.Fragment>
  );
}
