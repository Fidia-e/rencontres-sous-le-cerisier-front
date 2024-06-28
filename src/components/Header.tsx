import React, { FunctionComponent, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import Logo from 'assets/images/logo.png';
import Facebook from 'components/SVG/Facebook';
import Instagram from 'components/SVG/Instagram';
import Email from 'components/SVG/Email';

const Header: FunctionComponent = () => {
  const [fixed, setFixed] = useState<boolean>(false);
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  // const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const toggleVisible = () => {
    const scrollPosition = window.scrollY;
    const isScrolledPastTheScreen = scrollPosition > screenHeight;
    setFixed(isScrolledPastTheScreen);
  };

  // bloquer et réactiver le scroll à l'ouverture et fermeture du menu mobile
  useEffect(() => {
    if (document) {
      document.body.style.overflow = isMenuVisible ? 'hidden' : 'auto';
    }
  }, [isMenuVisible]);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <header className={fixed ? 'header-container header-container-fixed' : 'header-container'}>
      <div className="header">
        <div className="burger-container">
          <input type="checkbox" id="idCheckbox" onChange={() => setIsChecked(!isChecked)} checked={isChecked} />
          <label id="burger" htmlFor="idCheckbox" onClick={() => setIsMenuVisible(!isMenuVisible)}>
            <div className="burger top" />
            <div className="burger middle" />
            <div className="burger bottom" />
          </label>
          Menu
        </div>

        <div className="logo-container">
          <img src={Logo} alt="Logo de l'association Rencontres sous le Cerisier" width={50} height={50} />
        </div>

        <div className="cta-container">
          <button className="button">Réserver</button>
        </div>
      </div>

      <div className={isMenuVisible ? 'nav-active' : 'nav'}>
        <ul className="nav-list">
          <li className="nav-item">
            <HashLink smooth to="/" onClick={() => setIsMenuVisible(false)}>
              Accueil
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth to="/#à-la-une" onClick={() => setIsMenuVisible(false)}>
              À la une
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth to="/#agenda" onClick={() => setIsMenuVisible(false)}>
              Agenda 2024
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth to="/#réservation" onClick={() => setIsMenuVisible(false)}>
              Réservation
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth to="/#contact" onClick={() => setIsMenuVisible(false)}>
              Contact
            </HashLink>
          </li>
          <li className="nav-item">
            <NavLink to="/archives" onClick={() => setIsMenuVisible(false)}>
              Archives
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" onClick={() => setIsMenuVisible(false)}>
              À Propos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blog" onClick={() => setIsMenuVisible(false)}>
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/faire-un-don" onClick={() => setIsMenuVisible(false)}>
              Faire un don
            </NavLink>
          </li>
        </ul>

        <div className="icons-container">
          <a href="https://www.facebook.com/rencontresouslecerisier/" target="_blank" rel="noreferrer">
            <Facebook className="icon facebook" width={40} height={40} />
          </a>
          <a href="https://www.instagram.com/rencontressouslecerisier/" target="_blank" rel="noreferrer">
            <Instagram className="icon instagram" width={40} height={40} />
          </a>
          <a href="mailto:theatresouslecerisier@gmail.com">
            <Email className="icon email" width={40} height={40} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
