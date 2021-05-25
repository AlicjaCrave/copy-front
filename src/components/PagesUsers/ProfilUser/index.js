import React from 'react';

import Background from './BackgroundUser';
import InfosUser from './InfosUser';
//import BadgeUser from './BadgeUser';
import AddResolutions from './AddResolutions';
import ActiveResolution from './ActiveResolution';
import ArchivesUser from './ArchivesUser';

// == Import
import './profilUser.scss';

// == Composant
const ProfilUser = ({
  resolutions,
  resolutionsUser,
  manageDeleteResolution,
  deleteResolution,
  manageChangeCheckDay,
  durationToCheck,
  manageChangeIdOChecksResolution,
  profilUser,
  manageChangeIdOTestimonyResolution,
  username,

}) => (
  <div>
    <div className="profilUser-content">
      <Background profilUser={profilUser} />
      {
        profilUser.length > 0 && (
          <InfosUser />
        )}
      <ArchivesUser username={username} />
      <ActiveResolution
        resolutionsUser={resolutionsUser}
        nameToDelResolution="resolutionToDel"
        manageDeleteResolution={manageDeleteResolution}
        deleteResolution={deleteResolution}
        nameOfDayToChange="nameOfDayToChange"
        manageChangeCheckDay={manageChangeCheckDay}
        durationToCheck={durationToCheck}
        resolutions={resolutions}
        manageChangeIdOChecksResolution={manageChangeIdOChecksResolution}
        profilUser={profilUser}
        manageChangeIdOTestimonyResolution={manageChangeIdOTestimonyResolution}
      />
      {resolutions.length < 2 ? <AddResolutions /> : <div />}
    </div>
  </div>
);

// == Export
export default ProfilUser;
