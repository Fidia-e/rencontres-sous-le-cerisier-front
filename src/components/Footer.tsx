import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from 'assets/images/logo.png';
import Facebook from 'components/SVG/Facebook';
import Instagram from 'components/SVG/Instagram';

const Footer: FunctionComponent = () => {
  const year = new Date();

  return (
    <div className="footer-container">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="Logo de l'association" />
        <h4 className="title-logo">Rencontres sous le Cerisier</h4>

        <p className="text">
          <span className="copyright">&copy; 1996 - {year.getFullYear()} - Tous droits réservés</span>
        </p>
      </div>

      <div className="social-container">
        <p className="social">Retrouvez-nous sur les réseaux :</p>
        <div className="icons-container">
          <a href="https://www.facebook.com/rencontresouslecerisier/" target="_blank" rel="noreferrer">
            <Facebook className="icon facebook" width={40} height={40} />
          </a>
          <a href="https://www.instagram.com/rencontressouslecerisier/" target="_blank" rel="noreferrer">
            <Instagram className="icon instagram" width={40} height={40} />
          </a>
        </div>
      </div>

      <div className="links-container">
        <NavLink className="element links-container" to="/mentions-légales">
          <p className="legales-link">Mentions légales</p>
        </NavLink>

        <button className="CTA-give-button">
          <p>Nous soutenir</p>
        </button>
      </div>
    </div>
  );
};

export default Footer;
