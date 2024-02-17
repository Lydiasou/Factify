import React from "react";
import { FaGithub, FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer" style={{ background: "#F4F4F4", display: "flex", alignItems: "center", justifyContent: "space-between", height: "100px", padding: "0px 50px", color: "black", fontSize: "0.6rem" }}>
      <div className="footer-copyright" style={{ color: "black", textAlign: "center" }}>
        <p style={{ margin: 0 }}>This footer is made with <FaHeart style={{ color: "#D23333" }} /></p>
        <p style={{ textAlign: "center", width: "100%", whiteSpace: "pre-wrap", fontSize: "0.6rem" }}>
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
