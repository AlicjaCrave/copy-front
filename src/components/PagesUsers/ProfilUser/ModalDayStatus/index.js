import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CloseIcon from '@material-ui/icons/Close';
import MoodRoundedIcon from '@material-ui/icons/MoodRounded';
import MoodBadRoundedIcon from '@material-ui/icons/MoodBadRounded';

import { updateStatusDay, setDayAndStatusUser, sendCheckDays } from '../../../../actions/checkDays';

// == Import
import './modaldaystatus.scss';

const mapStateToProps = (state) => ({
  // élément à récup dans le state
  day: state.checkDays.day,
  status: state.checkDays.status,
  // On définit la fonction qui va comparer pour chaque entrée du tableau duration la propriété day avec state.day

});

const mapDispatchToProps = (dispatch) => ({
  manageChangeDurationDay: (nameStatus, statusValue, statusId) => {
    console.log(`la valeur choisi sera : ${nameStatus} pour la case qui s'apellera en state : ${statusValue} et le jour : ${statusId}`);
    dispatch(updateStatusDay(nameStatus, statusValue, statusId));
  },
  handleChangeDuration: () => {
    dispatch(setDayAndStatusUser())
  },
  sendCheckDayFunc: () => {
    dispatch(sendCheckDays())
  },
});
// == Composant
const ModalDayStatus = ({
  show,
  onHide,
  nameStatus,
  manageChangeDurationDay,
  day,
  status,
  handleChangeDuration,
  sendCheckDayFunc,

}) => {
  const handleClickChangeStatusDay = (evt) => {
    manageChangeDurationDay(evt.currentTarget.value, nameStatus, evt.currentTarget.id);
    console.log(evt.currentTarget.value, nameStatus, evt.currentTarget.id);
    handleChangeDuration();
    onHide();
    sendCheckDayFunc();

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
            Validez votre journée :
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="checkday">
            <div className="validationDay">
              <button type="button" onClick={handleClickChangeStatusDay} value="1" name={nameStatus} id={day} className="check positive"> <MoodRoundedIcon style={{ fontSize: 80 }} /></button>
            </div>
            <div className="validationDay">
              <button type="button" onClick={handleClickChangeStatusDay} value="2" name={nameStatus} id={day} className="check negative"> <MoodBadRoundedIcon style={{ fontSize: 80 }} /></button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="cancel-background" onClick={onHide}>Annuler</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
ModalDayStatus.propTypes = {
  manageChangeDurationDay: PropTypes.func.isRequired,
};
// == Export
export default connect(mapStateToProps, mapDispatchToProps)(ModalDayStatus);
