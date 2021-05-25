import React from 'react';
import { NavLink } from 'react-router-dom';

import Background from '../ProfilUser/BackgroundUser';
import InfosUser from '../ProfilUser/InfosUser';
import Archives from './archives';

// == Import
import './pageArchivesUser.scss';

// == Composant

const PageArchivesUser = ({ profilUser, archived, username }) => (
  <div className="profilUser-content">
    <Background profilUser={profilUser} />

    {
      profilUser.length > 0 && <InfosUser profilUser={profilUser} />
    }
    <div>
      <h2 className="titre-archives">Mes résolutions archivées</h2>
      <div className="archives-block">
        <div className="archives-content"></div>
        {archived.map == null ? <div><span className="noresolution">Aucune résolution archivée</span></div> : archived.map((archive) => (
          <Archives key={archive.resolution_id} archive={archive} />
        ))}
      </div>
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
export default PageArchivesUser;
