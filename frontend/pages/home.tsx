import React, { useState } from 'react';
import ChatRoom from '../components/ChatRoom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Box from '../components/Box';
import { PostText1, PostText2, PostText3, PostText4, PostText5 } from '../src/app/data/PostText';
import '../src/app/globals.scss';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {

  return (

    <>
      <Header />
        <ChatRoom/>
      <Footer />
    </>
  );
};
export default Home;
