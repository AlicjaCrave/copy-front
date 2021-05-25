import React, { useState } from 'react';

import ModalResolution from '../../../../containers/ModalResolution';

// == Import
import './addResolutions.scss';

// == Composant
const AddResolutions = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="addResolutions-content">
      <div className="addResolutions-intro">
        <h2 className="addResolutions-text">Ajouter une résolution :</h2>
      </div>
      <div className="addResolutions-block">
        <div className="addResolutions-bouton">
          <button type="button" onClick={() => setModalShow(true)} className="btn-grad-addresolution">+</button>
          <ModalResolution
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </div>
  );
};

// == Export
export default AddResolutions;
