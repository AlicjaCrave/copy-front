import React, { useState } from 'react';

import BrushIcon from '@material-ui/icons/Brush';
// == Import
import './backgroundUser.scss';
import Image from 'react-bootstrap/Image';
import ModalBackground from './ModalBackground';

// == Composant
const BackgroundUser = ({ profilUser }) => {

  const [showModalBackgrounds, setShowModalBackgrounds] = useState(false)
  const handleClickBrush = () => {
    setShowModalBackgrounds(true)
  }

  return (

    <div className="background-content">
      {profilUser.length > 0 && (
        <Image className="background-image" src={profilUser[1].imagebackground} fluid />
      )}
      <BrushIcon className="brushIcon" onClick={handleClickBrush} />
      <ModalBackground
        show={showModalBackgrounds}
        onHide={() => setShowModalBackgrounds(false)}
      />
    </div>
  );
}
// == Export
export default BackgroundUser;
