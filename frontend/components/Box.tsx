import React from "react";
import Avatar from './Avatar'; // Import du composant Avatar
import '../src/app/globals.scss';

interface BoxProps {
  productName: string;
  productDescription: string;
}

const Box: React.FC<BoxProps> = ({ productName, productDescription }) => {
  return (
    <div className="box">
      <Avatar className="avatar" alt="avatar" src="https://kitt.lewagon.com/placeholder/users/cveneziani" />
      <div className="box-infos">
      <h2>{productName}</h2>
        <p>{productDescription}</p>
      </div>
    </div>
  );
};

export default Box;
