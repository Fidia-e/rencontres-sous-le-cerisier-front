import React, { FunctionComponent } from 'react';

const Form: FunctionComponent = () => {
  return (
    <form className="form" action="">
      <h3 className="title-form">Vos billets</h3>

      <div className="form-content">
        {/*//& -------------------------- ITEM -------------------------- */}

        <div className="ticket-item">
          <h4 className="ticket-title">Billet 1 spectacle - tarif unique dès 15 ans</h4>

          <div className="price-content">
            <p className="price">11€</p>

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

        {/*//& -------------------------- ITEM -------------------------- */}

        <div className="ticket-item">
          <h4 className="ticket-title">Forfait duo (2 spectacles) - tarif unique dès 15 ans</h4>

          <div className="price-content">
            <p className="price">
              <span className="line-through">22€</span>&nbsp;20€
            </p>

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
              <label>Jour 1 et 2</label>
            </div>
            <div className="days-item">
              <input type="radio" />
              <label>Jour 2 et 3</label>
            </div>
            <div className="days-item">
              <input type="radio" />
              <label>Jour 1 et 3</label>
            </div>
          </div>
        </div>

        {/*//& -------------------------- ITEM -------------------------- */}

        <div className="ticket-item">
          <h4 className="ticket-title">Forfait trio (3 spectacles) - tarif unique dès 15 ans</h4>

          <div className="price-content">
            <p className="price">
              <span className="line-through">33€</span>&nbsp;27€
            </p>

            <div className="quantity">
              <p>Quantité : &nbsp;</p>
              <button>-</button>
              <p className="number">0</p>
              <button>+</button>
            </div>
          </div>
        </div>

        {/*//& -------------------------- ITEM -------------------------- */}

        <div className="ticket-item">
          <h4 className="ticket-title">Enfants de moins de 15 ans (si accompgané et ayant réservé)</h4>

          <div className="price-content">
            <p className="price">gratuit</p>

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

        {/*//& -------------------------- ITEM -------------------------- */}

        <div className="ticket-item">
          <h4 className="ticket-title">Billet 1 spectacle + 1 repas (1 soirée) </h4>

          <div className="price-content">
            <p className="price">
              <span className="line-through">25€</span>&nbsp;23€
            </p>

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

        {/*//& -------------------------- ITEM -------------------------- */}

        <div className="ticket-item">
          <h4 className="ticket-title">Forfait 3 spectacles + 3 repas (3 soirs)</h4>

          <div className="price-content">
            <p className="price">
              <span className="line-through">75€</span>&nbsp;60€
            </p>

            <div className="quantity">
              <p>Quantité : &nbsp;</p>
              <button>-</button>
              <p className="number">0</p>
              <button>+</button>
            </div>
          </div>
        </div>

        {/*//& -------------------------- ITEM -------------------------- */}

        <div className="ticket-item">
          <h4 className="ticket-title">Billet 1 repas - tarif unique + de 15 ans</h4>

          <div className="price-content">
            <p className="price">14€</p>

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

        {/*//& -------------------------- ITEM -------------------------- */}

        <div className="ticket-item">
          <h4 className="ticket-title">Billet 1 repas - tarif unique enfant - de 15 ans</h4>

          <div className="price-content">
            <p className="price">6€</p>

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
      </div>

      <div className="total-container">
        <div className="total-text">
          <p className="title-total">Total : </p>
          <p className="price">135€</p>
        </div>
        <button className="button">Valider ma commande</button>
      </div>
    </form>
  );
};

export default Form;
