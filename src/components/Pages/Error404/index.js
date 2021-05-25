import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import logo404 from '../../../assets/image/404transparent.png';
import './error404.scss';

// == Composant
const Error404 = () => (
  <div className="errorPage">
    <div className="page404-content">
      <h1 className="titre404">4</h1>
      <img className="logo404" alt="" src={logo404} />
      <h1 className="titre404">4</h1>
    </div>
    <span className="text-404">Oups ! Cette page n'existe pas.</span>
    <NavLink
      to="/"
      className="retourHomepage404"
    >
      Retour à la page d'accueil
    </NavLink>
  </div>
);

export default Error404;
