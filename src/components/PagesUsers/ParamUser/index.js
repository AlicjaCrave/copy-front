import React from 'react';
import { NavLink } from 'react-router-dom';

import NewParamUser from './NewParamUser';
import Background from '../ProfilUser/BackgroundUser';
import InfosUser from '../ProfilUser/InfosUser';

// == Import
import './paramUser.scss';

// == Composant
const ParamUser = ({
  profilUser,
  username,
}) => (
  <div className="profilUser-content">
    <Background profilUser={profilUser} />
    {
      profilUser.length > 0 && (
        <InfosUser />
      )
    }
    <div className="paramsUser-content">
      <h1 className="titlePage">Modifier mes paramètres</h1>
      <NewParamUser />
      <NavLink
        to={`/profil/${username}`}
        className="retourprofil"
      >
        Retour
      </NavLink>
    </div>
  </div>
);

// == Export
export default ParamUser;
