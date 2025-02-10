import React, { useState } from 'react';
import './index.css';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header id="navbars">
      <nav id="navbar">
        <i className="fa-solid fa-wand-sparkles" id="nav_logo" style={{ color: '#B197FC' }}> Jaza Soares</i>
        <ul id="nav_lista">
          <li className="nav-item active">
            <a href="#home">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="#sobre">Sobre</a>
          </li>
          <li className="nav-item">
            <a href="#curriculo">Curriculo</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Portifólio</a>
          </li>
          <li className="nav-item">
            <a href="#contacts">Contato</a>
          </li>
        </ul>

        <div id="cta_buttons">
          <a href="#contacts" className="btn-default">
            Fale comigo!
          </a>
          <i id="mode-icon" className="fa-solid fa-moon"></i>
        </div>

        <button id="mobile_btn" onClick={toggleMobileMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div id="mobile_menu">
          <ul id="mobile_nav_lista">
            <li className="nav-item active">
              <a href="#home">Inicio</a>
            </li>
            <li className="nav-item">
              <a href="#sobre">Sobre</a>
            </li>
            <li className="nav-item">
              <a href="#curriculo">Curriculo</a>
            </li>
            <li className="nav-item">
              <a href="#projects">Portifólio</a>
            </li>
            <li className="nav-item">
              <a href="#contacts">Contato</a>
            </li>
          </ul>

          <div id="cta_buttons">
            <a href="#contacts" className="btn-default">
              Fale comigo!
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;