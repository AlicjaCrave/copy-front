import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import reading from 'src/assets/image/readingresolution.png';
import { updateSelectResolution, newResolution } from '../../../../actions/resolutions';

// == Import

import './modalResolution.scss';

const mapStateToProps = (state) => ({
  // élément à récup dans le state
  resolutions: state.resolutionsList,
  userid: state.auth.id,
  resolutionid: state.addResolution.resolutionid,
});

const mapDispatchToProps = (dispatch) => ({
  manageAddResolution: (newIdResolution, nameResolution) => {
    console.log(`New Value ${newIdResolution} for the field ${nameResolution}`);
    dispatch(updateSelectResolution(newIdResolution, nameResolution));
  },
  addNewResolution: () => {
    dispatch(newResolution())
  }

});
const nameResolution = 'resolutionid'
// == Composant
const ModalLecture = ({ manageAddResolution, addNewResolution, onHide }) => {
  const [validButtonShow, setValidButtonShow] = useState(false);
  const handleClickResolutionButton = (event) => {
    setValidButtonShow(true);
    manageAddResolution(event.target.id, nameResolution);
  };
  const handleSubmitAddResolution = (event) => {
    event.preventDefault();
    addNewResolution();
    console.log('send01')
    onHide();
  };
  return (
    <div>
      <h4>Étape 2/2</h4>
      <div className="resolutions-content-step2">
        <div className="one-resolution-step2">
          <img className="resolution-image-step2" src={reading} alt="" />
          <h5 className="titleResolution-step2">Je me remets à lire</h5>
        </div>
        <div className="choiceResolution">
          <form className="choiceResolutionButtons">
            <button type="button" onClick={handleClickResolutionButton} className="choiceResolutionButton" name={nameResolution} id="117">Se remettre à lire !</button>
            <button type="button" onClick={handleClickResolutionButton} className="choiceResolutionButton" name={nameResolution} id="118">Je lis 15 minutes par jour</button>
          </form>
          {validButtonShow && (<button type="button" onClick={handleSubmitAddResolution} className="btn-grad-resolution">Valider</button>)}
        </div>
      </div>
    </div>
  );
};

ModalLecture.propType = {
  manageAddResolution: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalLecture);
// == Export
