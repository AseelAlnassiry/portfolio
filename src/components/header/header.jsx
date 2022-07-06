import React from 'react';
import './header.css';
import Cta from './cta';
import Me from '../../assets/ME.png';
import HeaderSocials from './headerSocials';

const header = () => {
  return (
    <header id='header'>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Aseel</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta />
        <HeaderSocials />
        <div className="trickster">
          <div className="me-1">
            <img src={Me} alt="" />
          </div>
          <div className="me-2">
            <img src={Me} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
