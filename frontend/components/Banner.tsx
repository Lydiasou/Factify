// 'use client'
// import React from "react";
// import FlexContent, {
//   FlexContentDirection,
//   FlexContentAlignment,
//   FlexContentJustify,
//   FlexContentSpacing,
//   FlexContentMobileDirection,
//   FlexContentLayout
// } from '../components/FlexContent';
// import Button from '../components/Button';
// import '../src/app/globals.scss';

// import { ConnectButton } from '@rainbow-me/rainbowkit';

// import { useWeb3React } from '@web3-react/core';
// import { useNavigate } from 'react-router-dom';

// interface BannerProps {
//   title: string;
//   subtitle: string;
// }

// const Banner: React.FC<BannerProps> = ({ title, subtitle }) => {
//   return (
//     <div className="banner" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(/images/Banner.png)"}}>
//       <div className="container">
//         <h1>{title}</h1>
//         <p>{subtitle}</p>
//         {/* <Button className="btn btn-flat" href="#"> Inscrivez-vous maintenant pour contribuer</Button> */}
//         <FlexContent direction={FlexContentDirection.COLUMN} alignment={FlexContentAlignment.CENTER}>
//             <ConnectButton />
//         </FlexContent>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useNavigate } from 'react-router-dom';

interface BannerProps {
  title: string;
  subtitle: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle }) => {
  const navigate = useNavigate();

  const handleConnect = () => {
    // Logique de connexion réussie ici
    // Par exemple, setIsLoggedIn(true);

    // Rediriger vers la page d'accueil après la connexion réussie
    navigate('/home');
  };

  return (
    <div className="banner" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(/images/Banner.png)"}}>
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {/* Ajoutez une gestionnaire d'événements au bouton de connexion */}
        <div onClick={handleConnect} >
          <ConnectButton/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
