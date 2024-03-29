import React from 'react';
import Avatar from './Avatar'; // Import du composant Avatar

const Header: React.FC = () => {
  if (typeof document !== 'undefined') {
    return (
      <div className="navbar navbar-expand-sm navbar-light navbar-lewagon">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/images/Factify.png"
              alt="Factify Logo"
              style={{
                width: "150px", // Ajuster la largeur de l'image
                height: "auto",
                borderRadius: "50%"
              }}
            />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Accueil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">À propos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Actualités</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Paramètres</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Header;
