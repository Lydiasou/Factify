import React from "react";
import { FaGithub, FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaHeart } from "react-icons/fa";
import '../src/app/globals.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
       <div className="footer-content">
       <p>This footer is made with <FaHeart style={{ color: "#D23333" }} /></p>
        <p>
          À propos
          Téléchargez l'application Factify
          Centre d'assistance
          Conditions d’utilisation
          Politique de Confidentialité
          Politique relative aux cookies
          Accessibilité
          Informations sur les publicités
          Blog
          Statut
          Carrières
          Ressources de la marque
          Publicité
          Marketing
          X pour les professionnels
          Développeurs
          Répertoire
          Paramètres
          © 2024 Factify Corp.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
