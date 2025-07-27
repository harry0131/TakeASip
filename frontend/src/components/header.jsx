import React from 'react';
import './header.css';
import logo from '../assets/logo.png';

function header() {
  return (
    <header className="header">
      <div className="logo-section">
      <img src={logo} alt="Take A Sip Logo" className="logo-image" />
      </div>
      <div className="title">Take A Sip</div>
      <div className="menu-icon">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default header;
