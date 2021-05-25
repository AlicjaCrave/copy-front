import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BackgroundDefault from 'src/assets/image/background-user-default.jpg';

// == Import
import './backgroundUser.scss';
import { sendNewBackground } from '../../../../actions/profilConnected';

const mapStateToProps = (state) => ({
  pictureSelected: state.profilUserConnected.newBackground,
});

const mapDispatchToProps = (dispatch) => ({
  manageSendNewBackground: () => {
    dispatch(sendNewBackground());
  },

});
// == Composant
const ModalStep2BackGround = ({
  pictureSelected,
  returnStep1Background,
  manageSendNewBackground,
  show,
  onHide,

}) => {
  const handleClickSendBackground = () => {
    manageSendNewBackground();
    onHide();
  };
  return (
    <div>
      <div className="backgroundToChoice2ndStep">
        <img className="littleBackground2ndStep" width="100%" src={pictureSelected} alt="" />
      </div>
      <div className="buttonContainer">
        <Button className="btn-grad-modalbackground" onClick={returnStep1Background}>Retour</Button>
        <button type="submit" onClick={handleClickSendBackground} className="btn-grad-modalbackground">Valider</button>
      </div>
    </div>
  );
  ModalStep2BackGround.propTypes = {
  };
}
// == Export
export default connect(mapStateToProps, mapDispatchToProps)(ModalStep2BackGround);
