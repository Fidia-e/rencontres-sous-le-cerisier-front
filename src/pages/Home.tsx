import React, { FunctionComponent } from 'react';

import Flyer from 'assets/images/affiche-hero.webp';
import Facebook from 'components/SVG/Facebook';
import Instagram from 'components/SVG/Instagram';
import Email from 'components/SVG/Email';
import Arrow from 'components/SVG/Arrow';

const Home: FunctionComponent = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-img">
          <img src={Flyer} alt="Mise en scéne d'un pièce de théâtre" width={500} height={700} />
        </div>

        <div className="hero-text">
          <div className="hero-title">
            <h3>Association culturelle</h3>
            <h1>Rencontres sous le Cerisier</h1>
          </div>
          <h2 className="hero-subtitle">organisation de festivals, pièces de théâtre et événements divers</h2>
          <h4 className="hero-subtitle-span">Depuis 1996</h4>
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

        <button className="CTA">
          <p>Nous soutenir</p>
        </button>
        <Arrow className="arrow" width={30} height={30} />
      </section>

      <section style={{ height: '100vh' }}>
        <div>ACTU</div>
      </section>
    </div>
  );
};

export default Home;
