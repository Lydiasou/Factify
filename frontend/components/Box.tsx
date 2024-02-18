import React, { useState } from "react";
import Avatar from './Avatar'; // Import du composant Avatar

import { FaHeart, FaRegHeart } from "react-icons/fa";






import '../src/app/globals.scss';
import { PostText1, PostText2, PostText3, PostText4, PostText5 } from '../src/app/data/PostText';
import FlexContent, { FlexContentAlignment, FlexContentDirection, FlexContentSpacing } from "./FlexContent";

interface BoxProps {
  productName: string;
  productDescription: string;
  avatarUrl: string;
}

const Box: React.FC<BoxProps> = ({ productName, productDescription, avatarUrl }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [reported, setReported] = useState<boolean>(false);

  const handleLike = () => {
    setLiked(prevLiked => !prevLiked); // Utilisation de la fonction de mise à jour pour éviter les problèmes de closure
  };

  const handleReport = () => {
    setReported(prevReported => !prevReported); // Inversion de l'état de signalement
  };

  return (
    <div className="box">
      <Avatar className="avatar" alt="avatar" src={avatarUrl} />
      <FlexContent direction={FlexContentDirection.COLUMN} spacing={FlexContentSpacing.SMALL}>
        <div className="box-infos">
          <h2>{productName}</h2>
          <p>{productDescription}</p>
        </div>
        <FlexContent direction={FlexContentDirection.ROW} spacing={FlexContentSpacing.XLARGE} alignment={FlexContentAlignment.CENTER}>
          <button onClick={handleLike}>
            {liked ? <FaHeart color="pink" /> : <FaRegHeart />}
          </button>
          <span
            style={{ textDecoration: "underline", cursor: "pointer", color: reported ? "#FF69B4" : "#6c757d", fontSize: "0.8rem" }}
            onClick={handleReport}>
            Signaler une fake news
          </span>
        </FlexContent>
      </FlexContent>
    </div>
  );
};

export default Box;
