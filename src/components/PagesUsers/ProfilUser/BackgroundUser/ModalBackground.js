import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BackgroundDefault from 'src/assets/image/background-user-default.jpg';

// == Import
import './backgroundUser.scss';
import ModalStep2Background from './ModalStep2Background';
import { updateNewBackgroundSelected } from '../../../../actions/profilConnected';


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  manageChoiceBackground: (newBackgroundSelected, nameOfNewBackground) => {
    dispatch(updateNewBackgroundSelected(newBackgroundSelected, nameOfNewBackground))
  }
});
// == Composant
const ModalBackground = ({
  show,
  onHide,
  manageChoiceBackground,
}) => {
  const nameOfNewBackground = 'newBackground'
  const [step2Background, setStep2Background] = useState(false)
  const returnStep1Background = () => {
    setStep2Background(false);
  };
  const handleClickChoiceFirstStep = (event) => {
    manageChoiceBackground(event.target.src, nameOfNewBackground);

    setStep2Background(true);
  };
  return (
    <div>
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Choisissez votre bannière :
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!step2Background && (
            <div className="backgroundToChoice">
              <img name={nameOfNewBackground} onClick={handleClickChoiceFirstStep} className="littleBackground" src="http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-content/uploads/2021/02/jeremy-cai-ucYWe5mzTMU-unsplash-scaled.jpg" alt="" />
              <img name={nameOfNewBackground} onClick={handleClickChoiceFirstStep} className="littleBackground" src="http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-content/uploads/2021/02/jonatan-pie-EvKBHBGgaUo-unsplash-scaled.jpg" alt="" />
              <img name={nameOfNewBackground} onClick={handleClickChoiceFirstStep} className="littleBackground" src="http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-content/uploads/2021/02/boxed-water-is-better-rXJXsecq8YU-unsplash-scaled.jpg" alt="" />
              <img name={nameOfNewBackground} onClick={handleClickChoiceFirstStep} className="littleBackground" src="http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-content/uploads/2021/02/gerome-bruneau-RPmWEtZLh7U-unsplash-scaled.jpg" alt="" />
              <img name={nameOfNewBackground} onClick={handleClickChoiceFirstStep} className="littleBackground" src="http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-content/uploads/2021/02/arno-smit-sKJ7zSylUao-unsplash-scaled.jpg" alt="" />
              <img name={nameOfNewBackground} onClick={handleClickChoiceFirstStep} className="littleBackground" src="http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-content/uploads/2021/02/edel-nisior-v1CGTJaEFDo-unsplash.jpg" alt="" />
              <img name={nameOfNewBackground} onClick={handleClickChoiceFirstStep} className="littleBackground" src="http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-content/uploads/2021/02/adrien-converse-3dUpL1h97CQ-unsplash.jpg" alt="" />
              <img name={nameOfNewBackground} onClick={handleClickChoiceFirstStep} className="littleBackground" src="http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-content/uploads/2021/02/lucas-benjamin-wQLAGv4_OYs-unsplash.jpg" alt="" />
              <img name={nameOfNewBackground} onClick={handleClickChoiceFirstStep} className="littleBackground" src="http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-content/uploads/2021/02/pawel-czerwinski-Lki74Jj7H-U-unsplash.jpg" alt="" />
            </div>
          )}
          {step2Background && (
            <div>
              <ModalStep2Background returnStep1Background={returnStep1Background} onHide={onHide} />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className="cancel-background" onClick={onHide}>Annuler</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
ModalBackground.propTypes = {
  manageChangeDurationDay: PropTypes.func.isRequired,
};
// == Export
export default connect(mapStateToProps, mapDispatchToProps)(ModalBackground);
