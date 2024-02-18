'use client'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from "react";
import Button from '../components/Button';
import '../src/app/globals.scss';

interface BannerProps {
  title: string;
  subtitle: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle }) => {
  return (
    <div className="banner" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(/images/Banner.png)"}}>
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {/* <Button className="btn btn-flat" href="#"> Inscrivez-vous maintenant pour contribuer</Button> */}
        <ConnectButton />
      </div>
    </div>
  );
};

export default Banner;
