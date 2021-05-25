import React from 'react';

// == Import
import './badgeUser.scss';
import Image from 'react-bootstrap/Image';
import badgeIcon from 'src/assets/image/badge-icon.png';

// == Composant
const BadgeUser = () => (

  <div className="badgeUser-content">
    <h2 className="badgeUser-title">Badges</h2>
    <div className="badgeUser-background">
      <Image className="badgeUser-icon" src={badgeIcon} thumbnail />
      <Image className="badgeUser-icon" src={badgeIcon} thumbnail />
      <Image className="badgeUser-icon" src={badgeIcon} thumbnail />
      <Image className="badgeUser-icon" src={badgeIcon} thumbnail />
      <Image className="badgeUser-icon" src={badgeIcon} thumbnail />
      <Image className="badgeUser-icon" src={badgeIcon} thumbnail />
    </div>
  </div>
);

// == Export
export default BadgeUser;
