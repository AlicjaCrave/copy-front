import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './archivesUser.scss';

// == Composant
const ArchivesUser = ({ username }) => (

  <NavLink
    to={`/profil/${username}/mes-archives`}
    className="archives"
  >
    Mes résolutions archivées
  </NavLink>
);

// == Export
export default ArchivesUser;
