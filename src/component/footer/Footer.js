import React from 'react';
import './Footer.css';
import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa';
const Footer = () => {
  return (
    <section className="fin">
      <div className="allt">
        <h1>Sunnyside</h1>
        <ul className="link">
          <li>About</li>
          <li>Services</li>
          <li>Project</li>
        </ul>
        <div className="contain">
          <ul className="sociaux">
            <a>
              <FaFacebookSquare />
            </a>
            <a>
              <FaInstagram />
            </a>
            <a>
              <FaTwitter />
            </a>
            <a>
              <FaPinterest />
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
