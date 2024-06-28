import React, { FunctionComponent } from 'react';

import Flyer from 'assets/images/affiche-hero.webp';
import Facebook from 'components/SVG/Facebook';
import Instagram from 'components/SVG/Instagram';
import Email from 'components/SVG/Email';
import Arrow from 'components/SVG/Arrow';
import ParentsMars from 'assets/images/ParentsMars.jpeg';
import PianoFurioso from 'assets/images/PianoFurioso.jpeg';
import TocToc from 'assets/images/TocToc.png';

import NextEventFlyer from 'assets/images/event.png';

const Home: FunctionComponent = () => {
  const year = new Date();

  return (
    <div className="home-container">
      {/*//& ----------------------------------------- HERO ----------------------------------------- */}
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

      {/*//& ----------------------------------------- ACTU ----------------------------------------- */}
      <section className="actu-container" id="à-la-une">
        <div className="image-container">
          <img
            src={NextEventFlyer}
            alt="Affiche du prochain évènement de l'association Rencontres sous le Cerisier"
            width={500}
            height={700}
          />
        </div>

        <div className="content">
          <h2 className="title">
            <span className="title-span">Prochain</span>
            <span className="bg-red red-span">évènement</span>
          </h2>

          <div className="text-container">
            <p className="title-event">
              27<sup>ème</sup> édition du festival annuel de l&apos;association Rencontres sous le Cerisier
            </p>

            <p className="date">05, 06, 07 juillet 2024 à partir de 19h</p>

            <div className="infos">
              <p>
                Infos et réservations&nbsp;:&nbsp;
                <a className="phone" href="tel:0632647714">
                  06 32 64 77 14
                </a>{' '}
                /&nbsp;
                <a className="phone" href="tel:0681952662">
                  06 81 95 26 62
                </a>
              </p>
              <p>
                Réservations du 1<sup>er</sup> au 30 juin inclus
              </p>
            </div>
          </div>

          <button className="button">Réserver mes places</button>
        </div>
      </section>

      {/*//& ----------------------------------------- AGENDA ----------------------------------------- */}
      <section className="agenda-container" id="agenda">
        <div className="content">
          <h2 className="title">
            <span className="bg-red red-span">Agenda</span>
            <span className="title-span">{year.getFullYear()}</span>
          </h2>

          <div className="text-container">
            <p>
              <span className="uppercase underline">17 février</span> : Soirée repas spectacle à Saint Théodorit
            </p>
            <p>
              <span className="uppercase underline">05, 06 et 07 juillet</span> : 27 ème édition du Festival des
              Rencontres sous le Cerisier
            </p>
          </div>
        </div>

        <div className="cta-container">
          <button className="CTA-button">
            <p>Nous soutenir</p>
          </button>

          <div className="social-container">
            <p className="social-text">Retrouvez tous nos événements sur nos réseaux :</p>
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
        </div>
      </section>

      <section className="shows-container">
        <h2 className="title-shows">À l&apos;affiche du festival de cette année</h2>

        <div className="program-content">
          <div className="show-infos">
            <img
              className="image-show"
              src={ParentsMars}
              alt="affiche de la pièce Les parents viennent de Mars, les enfants du McDo !"
            />
            <div className="text-show">
              <p className="day-number">Jour 1</p>
              <p className="date"> Vendredi 05 juillet 2024</p>
              <h4 className="title-show">Les parents viennent de Mars, les enfants du McDo !</h4>
              <p className="details">
                On adore nos enfants mais parfois &quot;haaaaaaaaaaaaaaaaaaaa&quot;... On adore nos parents mais parfois
                &quot;haaaaaaaaaaaaaaaaaaaa&quot;.... Lorsque les parents regardent leur enfant la seule question qui
                leur vient à l&apos;esprit c&apos;est &quot;mais de qui a-t-il pris ?&quot; Lui lorsqu&apos;il regarde
                ses parents, il twitte :&quot;c&apos;est sûr, j&apos;ai été adopté&quot;. Bébé, enfant, adolescence, à
                tous âges ses joies... et ses galères.
              </p>
            </div>
          </div>

          <div className="show-infos">
            <div className="text-show">
              <p className="day-number">Jour 2</p>
              <p className="date"> Samedi 06 juillet 2024</p>
              <h4 className="title-show">Piano Furioso</h4>
              <p className="details">
                Insatiable baroudeur, à la fois pianiste, chanteur, compositeur, chef dorchestre auteur et comédien,{' '}
                <span className="bold">Gilles Ramade</span> a fait de la dispersion un art. Piano Furioso est à son
                image : insolent, surprenant, inclassable. Il bouscule les codes académiques et sattaque à la bienséance
                du classique. Un show déluré et hilarant, mené de main de maître par un virtuose partageant sa passion
                entre Bach, Ray Charles, Gainsbourg et bien dautres... Toutes les générations rient avec le maestro.
              </p>
            </div>
            <img className="image-show" src={PianoFurioso} alt="affiche de la pièce Piano Furioso" />
          </div>

          <div className="show-infos">
            <img className="image-show" src={TocToc} alt="affiche de la pièce Toc Toc" />
            <div className="text-show">
              <p className="day-number">Jour 3</p>
              <p className="date">Dimanche 07 juillet 2024</p>
              <h4 className="title-show">Toc Toc</h4>
              <p className="details">
                Le Dr Stern, grand spécialiste des &quot;Toc&quot;, est en retard. Les six patients quil doit recevoir
                ce jour-là doivent attendre autour dune partie de Monopoly, et tenter de débuter seuls une thérapie de
                groupe ou tocs incontrôlables et histoires personnelles vont se mêler!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*//& ----------------------------------------- RESA ----------------------------------------- */}
      <section className="resa-container" id="réservation">
        <h2 className="title">
          <span className="bg-red red-span">Réservation</span>
          <span className="title-span">évènement</span>
        </h2>

        <div className="content">
          <p className="date-resa">
            Réservations ouvertes du 1<sup>er</sup> eu 30 juin 2024
          </p>

          <form className="form" action="">
            <h3 className="title-form">Vos billets</h3>

            <div className="form-content">
              <h4 className="ticket-title">Titre de votre billet</h4>

              <div className="price-content">
                <p className="price">20€</p>

                <div className="quantity">
                  <p>Quantité : &nbsp;</p>
                  <button>-</button>
                  <p className="number">0</p>
                  <button>+</button>
                </div>
              </div>

              <div className="days">
                <div className="days-item">
                  <input type="radio" />
                  <label>Jour 1</label>
                </div>
                <div className="days-item">
                  <input type="radio" />
                  <label>Jour 2</label>
                </div>
                <div className="days-item">
                  <input type="radio" />
                  <label>Jour 3</label>
                </div>
              </div>
            </div>
          </form>

          <p className="infos">
            Le spectacle est gratuit pour les moins de 15 ans mais il est{' '}
            <span className="bold">nécessaire de réserver</span>. Les enfants de moins de 10 ans{' '}
            <span className="bold">doivent être accompagnés d&apos;un adulte</span> afin qu&apos;ils ne perturbent pas
            le spectacle.
          </p>
        </div>
      </section>

      {/*//& ----------------------------------------- CONTACT ----------------------------------------- */}
      <section className="contact-container" id="contact">
        <div>CONTACT</div>
      </section>
    </div>
  );
};

export default Home;
