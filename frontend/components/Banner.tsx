import React from "react";
import Button from '../components/Button';
import '../src/app/globals.scss';

interface BannerProps {
  title: string;
  subtitle: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle }) => {
  return (
    <div className="banner" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/background.png)"}}>
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Button className="btn btn-ghost" href="#">
            Write a story
        </Button>
      </div>
    </div>
  );
};

export default Banner;
