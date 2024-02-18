import React from 'react';
import Avatar from './Avatar'; // Import du composant Avatar

const Navbar: React.FC = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-light navbar-lewagon">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/images/Factify.png"
            alt="Factify Logo"
            style={{
              // maxWidth: "120px",
              width: "80px", // Ajuster la largeur de l'image
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
              <a className="nav-link" href="#">Lydia Soula</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">Messages</a>
            </li> */}
            <li className="nav-item dropdown">
              {/* Utilisation du composant Avatar */}
              <Avatar className="avatar dropdown-toggle" alt="avatar" src="https://kitt.lewagon.com/placeholder/users/ssaunier" />
              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" data-turbo-method="delete" href="#">Log out</a>
              </div>
            </li>
            {/* <li class="nav-item"></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
