import React from 'react';
import ChatRoom from '../components/ChatRoom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ConnectedHome: React.FC = () => {
  return (
    <>
      <Header />
      <ChatRoom />
      <Footer />
    </>
  );
};

export default ConnectedHome;
