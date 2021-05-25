import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import vegan from 'src/assets/image/veganresolution.png';
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
const ModalVegan = ({ manageAddResolution, addNewResolution, onHide }) => {
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
          <img className="resolution-image-step2" src={vegan} alt="" />
          <h5 className="titleResolution-step2">Je deviens vegan</h5>
        </div>
        <div className="choiceResolution">
          <div className="choiceResolutionButtons">
            <button type="button" onClick={handleClickResolutionButton} className="choiceResolutionButton" name={nameResolution} id="119">Devenir vegan !</button>
            <button type="button" onClick={handleClickResolutionButton} className="choiceResolutionButton" name={nameResolution} id="120">Je mange un repas par jour 100% vegan !</button>
          </div>
          {validButtonShow && (<button type="button" onClick={handleSubmitAddResolution} className="btn-grad-resolution">Valider</button>)}
        </div>
      </div>
    </div>
  );
}

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(ModalVegan);
