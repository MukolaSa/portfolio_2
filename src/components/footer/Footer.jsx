import React from 'react';
import {
  FaTwitterfaDribbble,
  FaBehance,
  FaTwitter,
  FaDribbble,
} from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="">
      <div className="footer__container container grid">
        <div className="footer__socials">
          <a href="" className="footer__social-link">
            <FaTwitter />
          </a>

          <a href="" className="footer__social-link">
            <FaDribbble />
          </a>

          <a href="" className="footer__social-link">
            <FaBehance />
          </a>
        </div>
        <p className="footer__copyright text.cs">
          &copy; 2024 <span>LUIQUE</span>. ALL RIGHTS REVERVED
        </p>

        <p className="footer__copyright text.cs">
          DEVELOPED BY <span>CRYTICALCODER</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
