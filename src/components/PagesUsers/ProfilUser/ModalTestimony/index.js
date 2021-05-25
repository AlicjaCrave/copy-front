import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// == Import
import './modaltestimony.scss';
import { changeStatusResolution, updateIdOfResolutionToArchive } from '../../../../actions/checkDays';
import { changeRateTestimony, sendTestimony, updateTestimonyText } from '../../../../actions/testimonyToSend';

const mapStateToProps = (state) => ({
  rate: state.testimonyToSend.rate,
  testimony: state.testimonyToSend.testimony,
});

const mapDispatchToProps = (dispatch) => ({
  manageChangeRate: (value) => {
    dispatch(changeRateTestimony(value));
  },
  manageChangeTestimony: (testimonyToSend, nameTestimonyToSend) => {
    console.log(testimonyToSend, nameTestimonyToSend)
    dispatch(updateTestimonyText(testimonyToSend, nameTestimonyToSend))
  },
  handleSendTestimony: () => {
    dispatch(sendTestimony())
  }
});
// == Composant
const ModalTestimony = ({
  show,
  onHide,
  rate,
  testimony,
  manageChangeRate,
  manageChangeTestimony,
  handleSendTestimony,

}) => {
  // const [value, setValue] = useState(rate);
  const nameTestimonyToSend = 'testimony';
  const handleSubmitArchiveAndTestimony = (event) => {
    event.preventDefault();
    handleSendTestimony()
    onHide()
    console.log('send');
  };
  const handleClickRate = (e) => {
    console.log(e.target.value);
    manageChangeRate(e.target.value);
  };
  const handleChangeTestimony = (e) => {
    manageChangeTestimony(e.target.value, nameTestimonyToSend);
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
            Félicitation ! Vous avez terminé les 30 jours de votre résolution !
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">Pour archiver et passer à une autre résolution, partagez votre expérience avec le reste de la communauté.</Typography>
              <br />
              <Typography component="legend">Évaluez votre expérience :</Typography>
              <Rating
                name="simple-controlled"
                value={rate}
                onClick={handleClickRate}
              />
            </Box>
            <form
              onSubmit={handleSubmitArchiveAndTestimony}
              className="formArchive">
              <label className="labelArchive">Décrivez en quelques mots votre expérience :</label>
              <textarea
                onChange={handleChangeTestimony}
                className="textAreaArchive"
                name={nameTestimonyToSend}
                rows="5"
                cols="33"
                maxLength="150"
                placeholder="Votre ressenti en quelques mots..."
                value={testimony}

              />
              <button
                className="btn-grad-temoignageUser"
                type="submit"
              >Temoigner & archiver
              </button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" className="cancel-temoignage" onClick={onHide}>Annuler</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

ModalTestimony.propTypes = {
  manageChangeDurationDay: PropTypes.func.isRequired,
};
// == Export
export default connect(mapStateToProps, mapDispatchToProps)(ModalTestimony);
