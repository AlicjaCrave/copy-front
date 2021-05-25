// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './footer.scss';

// == Composant
const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-nav">
        <div>
          <ul>
            <li className="footer-list">
              <NavLink
                to="/a-propos"
              >
                &Agrave; propos
              </NavLink>
            </li>
            <li className="footer-list"><a href="mailto:omotive@gmail.com" alt="contacteznous">Contactez-nous</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

// == Export
export default Footer;
