import React, { FunctionComponent, useState } from 'react';

import Logo from 'assets/images/logo.png';

const Header: FunctionComponent = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="header-container">
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
  );
};

export default Header;
