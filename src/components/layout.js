/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import Sticky from 'react-stickynode';
import Header from './header/header';
import Footer from './footer/footer';
import { WhatsAppWidget } from 'react-whatsapp-widget';

export default function Layout({ children }) {
  const [isSticky, setIsSticky] = useState(false);
  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };
  return (
    <React.Fragment>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet" />
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} />
      </Sticky>
      <main
        id="content"
        sx={{
          variant: 'layout.main',
          backgroundColor: 'black',
          position: 'relative'
        }}
      >
        {children}
      </main>
      <WhatsAppWidget
        phoneNumber="+85253968435"
        companyName={"we2Tech"}
        replyTimeText={""}
        message={"Hi, Thanks for your enquiry"} />
      <Footer />
    </React.Fragment>
  );
}
