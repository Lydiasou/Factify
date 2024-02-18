import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
      <FlexContent direction={FlexContentDirection.COLUMN} alignment={FlexContentAlignment.CENTER} justify={FlexContentJustify.CENTER} spacing={FlexContentSpacing.LARGE}
      >

        <Box productName={PostText1.USER_NAME} productDescription={PostText1.USER_POST} avatarUrl={PostText1.AVATAR_USER}/><br></br>
        <Box productName={PostText2.USER_NAME} productDescription={PostText2.USER_POST} avatarUrl={PostText2.AVATAR_USER}/><br></br>
        <Box productName={PostText3.USER_NAME} productDescription={PostText3.USER_POST} avatarUrl={PostText3.AVATAR_USER}/><br></br>
        <Box productName={PostText4.USER_NAME} productDescription={PostText4.USER_POST} avatarUrl={PostText4.AVATAR_USER}/><br></br>
        <Box productName={PostText5.USER_NAME} productDescription={PostText5.USER_POST} avatarUrl={PostText5.AVATAR_USER}/><br></br>

        {/* <Navbar /> */}

        {/* <Flash type="success" message="Yay! 🎉 you successfully signed in to our service." />
        <Flash type="warning" message="Mmh 🤔 seems like you don't have <a href='#'>profile picture</a> yet." />
        <Flash type="danger" message="Oops! 😱 a problem has occurred while processing your booking." /> */}

        {/* <Avatar className="avatar" alt="avatar" src="https://kitt.lewagon.com/placeholder/users/cveneziani" /><br/><br/> */}
        {/* <Avatar className="avatar-large" alt="avatar-large" src="https://kitt.lewagon.com/placeholder/users/arthur-littm" /><br/><br/> */}

        {/* <Button className="btn btn-ghost" href="#">Write a story</Button><br/><br/>
        <Button className="btn btn-flat" href="#">Book now</Button><br/><br/>
        <Button className="btn btn-gradient" href="#">Start now</Button><br/><br/> */}

        {/* <Notification date="14th January" content="Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisicing elit." avatarSrc="https://kitt.lewagon.com/placeholder/users/arthur-littm" />
        <Notification date="9th January" content="Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisicing elit." avatarSrc="https://kitt.lewagon.com/placeholder/users/Eschults" /> */}


        {/* <Banner title="Le Wagon brings <strong>tech skills</strong> to <strong>creative people</strong>!" subtitle="Change your life and learn to code at one of our campuses around the world." /> */}
        {/* <Box productName={PostText1.USER_NAME} productDescription={PostText1.USER_POST} avatarUrl={PostText1.AVATAR_USER}/><br></br>
        <Box productName={PostText2.USER_NAME} productDescription={PostText2.USER_POST} avatarUrl={PostText2.AVATAR_USER}/><br></br>
        <Box productName={PostText3.USER_NAME} productDescription={PostText3.USER_POST} avatarUrl={PostText3.AVATAR_USER}/><br></br>
        <Box productName={PostText4.USER_NAME} productDescription={PostText4.USER_POST} avatarUrl={PostText4.AVATAR_USER}/><br></br>
        <Box productName={PostText5.USER_NAME} productDescription={PostText5.USER_POST} avatarUrl={PostText5.AVATAR_USER}/><br></br> */}

        {/* <Navbar /> */}

        {/* <Flash type="success" message="Yay! 🎉 you successfully signed in to our service." />
        <Flash type="warning" message="Mmh 🤔 seems like you don't have <a href='#'>profile picture</a> yet." />
        <Flash type="danger" message="Oops! 😱 a problem has occurred while processing your booking." /> */}

        {/* <Avatar className="avatar" alt="avatar" src="https://kitt.lewagon.com/placeholder/users/cveneziani" /><br/><br/> */}
        {/* <Avatar className="avatar-large" alt="avatar-large" src="https://kitt.lewagon.com/placeholder/users/arthur-littm" /><br/><br/> */}

        {/* <Button className="btn btn-ghost" href="#">Write a story</Button><br/><br/>
        <Button className="btn btn-flat" href="#">Book now</Button><br/><br/>
        <Button className="btn btn-gradient" href="#">Start now</Button><br/><br/> */}


        {/* <Banner title="Le Wagon brings <strong>tech skills</strong> to <strong>creative people</strong>!" subtitle="Change your life and learn to code at one of our campuses around the world." /> */}
      </FlexContent>
      <Footer />
    </>
  );
};

export default HomePage;
