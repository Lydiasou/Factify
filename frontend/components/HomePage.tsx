import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Avatar from '../components/Avatar';
import Flash from '../components/Flash';
import Banner from '../components/Banner';
import Notification from '../components/Notification';
import Box from '../components/Box';


import FlexContent, {
  FlexContentDirection,
  FlexContentAlignment,
  FlexContentJustify,
  FlexContentSpacing,
  FlexContentMobileDirection,
  FlexContentLayout
} from '../components/FlexContent';

// import Avatar from '../components/Avatar'; // Ajout de l'import du composant Avatar
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import '../src/app/globals.scss';
import { PostText1, PostText2, PostText3, PostText4, PostText5 } from '../src/app/data/PostText';

const HomePage: React.FC = () => {

  return (
    <>
      <Header />
        <Banner title="Bienvenue dans votre SafePlace !" subtitle="Rejoignez notre réseau social pour partager, échanger et découvrir ensemble.." />
      <Footer />
    </>
  );
};

export default HomePage;
