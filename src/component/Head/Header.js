import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <>
      <header>
        <div className="header">
          <div>
            <h1 className="title">Sunyside</h1>
          </div>
          <div className="onglets">
            <ul className="list">
              <li className="head">
                <a>A Propos</a>
              </li>
              <li className="head">
                <a>Service</a>
              </li>
              <li className="head">
                <a>Projet</a>
              </li>
            </ul>
            <a className="tel">Contact</a>
          </div>
        </div>
        <div className="crea">
          <h1 className="creation">Nous Sommes Creatives</h1>
          <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
            <g
              stroke="#FFF"
              stroke-width="6"
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 3v100M3 95.484l15 15 15-15" />
            </g>
          </svg>
        </div>
      </header>
    </>
  );
};

export default Header;
