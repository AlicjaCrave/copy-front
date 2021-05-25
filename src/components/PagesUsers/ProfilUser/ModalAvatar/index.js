import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// == Import
import './modalavatar.scss';
import { sendNewAvatar, updateNewAvatarSelected } from '../../../../actions/profilConnected';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  manageChoiceAvatar: (newAvatarSelected, nameAvatarToChange) => {
    console.log(`New Value ${newAvatarSelected} for the field ${nameAvatarToChange}`);
    dispatch(updateNewAvatarSelected(newAvatarSelected, nameAvatarToChange))
  },
  manageSendNewAvatar: () => {
    dispatch(sendNewAvatar())
  },
});
// == Composant
const ModalAvatar = ({
  show,
  onHide,
  manageChoiceAvatar,
  manageSendNewAvatar,
}) => {
  const [validButtonShow, setValidButtonShow] = useState(false);
  const nameAvatarToChange = 'newAvatar';
  const handleClickChoiceAvatar = (event) => {
    manageChoiceAvatar(event.target.src, nameAvatarToChange)
    setValidButtonShow(true)
  };
  const handleSubmitNewAvatar = (event) => {
    event.preventDefault();
    manageSendNewAvatar();
    onHide();
  }

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
            Choisissez votre avatar :
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="choiceAvatarBloc">
            <div className="iconUser-image-content">
              <Image
                className="iconUser-image"
                width="250"
                src="http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-content/uploads/2021/02/snickerstransparent.png"
                roundedCircle
                onClick={handleClickChoiceAvatar}
                name={nameAvatarToChange}
              />
              <Image
                className="iconUser-image"
                width="250"
                src="http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-content/uploads/2021/02/smoking.png"
                roundedCircle
                onClick={handleClickChoiceAvatar}
                name={nameAvatarToChange}
              />
              <Image
                className="iconUser-image"
                width="250"
                src="http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-content/uploads/2021/01/carrottransparent.png"
                roundedCircle
                onClick={handleClickChoiceAvatar}
                name={nameAvatarToChange}
              />
              <Image
                className="iconUser-image"
                width="250"
                src="http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-content/uploads/2021/01/bunnytransparent.png"
                roundedCircle
                onClick={handleClickChoiceAvatar}
                name={nameAvatarToChange}
              />
              <Image
                className="iconUser-image"
                width="250"
                src="http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-content/uploads/2021/01/echarpefondtransparent.png"
                roundedCircle
                onClick={handleClickChoiceAvatar}
                name={nameAvatarToChange}
              />
              <Image
                className="iconUser-image"
                width="250"
                src="http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-content/uploads/2021/01/kittytransparent.png"
                roundedCircle
                onClick={handleClickChoiceAvatar}
                name={nameAvatarToChange}
              />
              <Image
                className="iconUser-image"
                width="250"
                src="http://ec2-3-92-198-2.compute-1.amazonaws.com/O-Motive/wp-content/uploads/2021/02/nonourstransparent.png"
                roundedCircle
                onClick={handleClickChoiceAvatar}
                name={nameAvatarToChange}
              />
            </div>
            {validButtonShow && (
              <button type="button" className="btn-grad-avatar" onClick={handleSubmitNewAvatar}>Valider</button>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="cancel-background" onClick={onHide}>Annuler</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
ModalAvatar.propTypes = {
  manageChangeDurationDay: PropTypes.func.isRequired,
};
// == Export
export default connect(mapStateToProps, mapDispatchToProps)(ModalAvatar);
