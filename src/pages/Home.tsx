import React, { FunctionComponent } from 'react';

import Flyer from 'assets/images/affiche-hero.webp';
import Facebook from 'components/SVG/Facebook';
import Instagram from 'components/SVG/Instagram';
import Email from 'components/SVG/Email';
import Arrow from 'components/SVG/Arrow';
import Form from 'components/Form';
import Gallery from 'components/Gallery';
import ParentsMars from 'assets/images/ParentsMars.jpeg';
import PianoFurioso from 'assets/images/PianoFurioso.jpeg';
import TocToc from 'assets/images/TocToc.png';
import Map from 'assets/images/plan.png';

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

        <button className="CTA-give-button-hero CTA-give-button">
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
              <span className="nowrap uppercase underline">17 février</span> : Soirée repas spectacle à Saint Théodorit
            </p>
            <p>
              <span className="nowrap uppercase underline">05, 06 et 07 juillet</span> : 27 ème édition du Festival des
              Rencontres sous le Cerisier
            </p>
          </div>
        </div>

        <div className="cta-container">
          <button className="CTA-give-button">
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

          {/*//* -------------------------- FORM -------------------------- */}

          <Form />

          {/*//* ---------------------------------------------------------- */}

          <div className="infos">
            Le spectacle est gratuit pour les moins de 15 ans mais il est{' '}
            <span className="bold">nécessaire de réserver</span>. Les enfants de moins de 10 ans{' '}
            <span className="bold">doivent être accompagnés d&apos;un adulte</span> afin qu&apos;ils ne perturbent pas
            le spectacle.
            <br />
            <br />
            <p>
              Grâce au partenariat en partenariat avec ????????????, nous proposons une formule à 6,25€ par personne
              pour les groupes de 30 personnes et plus.{' '}
            </p>
            <br />
            <br />
            <p>
              Cette année le festival sera cloturé le 8 juillet par un concours de la chanson française, suivi d’un
              spectacle musical. Évènement organisé et offert par la mairie de Savignargues 100% gratuit !
            </p>
            <p className="more-infos">
              Pour plus d&apos;informations&nbsp;:&nbsp;
              <a className="phone" href="tel:0632647714">
                06 32 64 77 14
              </a>{' '}
              /&nbsp;
              <a className="phone" href="tel:0681952662">
                06 81 95 26 62
              </a>
            </p>
          </div>

          <button className="button-menu">Voir le menu du festival</button>
        </div>

        <div className="address-container">
          <h2 className="title-address">Adresse et plan d&apos;accès du festival</h2>
          <p className="address">22, route d&apos;Aigremont 30350 Savignargues</p>
          <div className="map-container">
            <iframe
              title="map"
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2871.8911179354254!2d4.081932315507781!3d43.96161797911201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b43e16b247e167%3A0x12f9e4d319142547!2s22%20Rte%20d&#39;Aigremont%2C%2030350%20Savignargues!5e0!3m2!1sfr!2sfr!4v1685460401430!5m2!1sfr!2sfr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <img className="route-map" src={Map} alt="Plan des routes" />
          </div>
        </div>
      </section>

      {/*//& ----------------------------------------- CONTACT ----------------------------------------- */}
      <section className="contact-container" id="contact">
        <div className="content">
          <h2 className="title">
            <span className="title-span">Nous</span>
            <span className="bg-red red-span">Contacter</span>
          </h2>

          <div className="contacts">
            <p className="contact-item">
              <span className="nowrap uppercase">
                <span className="underline title-contact">Mail</span>&nbsp;:
              </span>
              <a href="mailto:theatresouslecerisier@gmail.com">&nbsp;theatresouslecerisier@gmail.com</a>
            </p>

            <p className="contact-item">
              <span className="nowrap uppercase">
                <span className="underline title-contact">Réservations</span>
                &nbsp;:&nbsp;
              </span>
              &nbsp;
              <a className="phone" href="tel:0632647714">
                06 32 64 77 14
              </a>{' '}
              &nbsp;/&nbsp;
              <a className="phone" href="tel:0681952662">
                06 81 95 26 62
              </a>
            </p>

            <p className="contact-item">
              <span className="nowrap uppercase">
                <span className="underline title-contact">Technique</span>
                &nbsp;:&nbsp;
              </span>
              &nbsp;
              <a className="phone" href="tel:0699352849">
                06 99 35 28 49
              </a>{' '}
              &nbsp;/&nbsp;
              <a className="phone" href="tel:0602674114">
                06 02 67 41 14
              </a>
            </p>

            <p className="contact-item">
              <span className="nowrap uppercase">
                <span className="underline title-contact">Adresse</span>
                &nbsp;:&nbsp;
              </span>

              <span className="address">Rencontres sous le Cerisier - 33, rue de la Forge 30350 Savignargues</span>
            </p>
          </div>
        </div>

        <div className="cta-container">
          <button className="CTA-give-button">
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

      {/*//& ----------------------------------------- GALLERY ----------------------------------------- */}
      <section className="gallery-container">
        <Gallery />
      </section>
    </div>
  );
};

export default Home;
