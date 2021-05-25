import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { connect } from 'react-redux';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import ModalAvatar from '../ModalAvatar';

// == Import
import './infosUser.scss';
import { sendNewCity, updateNewCitySelected } from '../../../../actions/profilConnected';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1368 });
  return isDesktop ? children : null;
};
const BigTablet = ({ children }) => {
  const BigTablet = useMediaQuery({ minWidth: 900, maxWidth: 1367 });
  return BigTablet ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 901 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 300, maxWidth: 767 });
  return isMobile ? children : null;
};

const mapStateToProps = (state) => ({
  profilUser: state.profilUserConnected.profilUser,
  city: state.profilUserConnected.city,
});

const mapDispatchToProps = (dispatch) => ({
  manageChangeCity: (valueCity, nameOfCityToSet) => {
    dispatch(updateNewCitySelected(valueCity, nameOfCityToSet));
  },
  manageSendNewCity: () => {
    dispatch(sendNewCity());
  },
});
// == Composant
const InfosUser = ({
  profilUser,
  city,
  manageChangeCity,
  manageSendNewCity,
}) => {
  const nameOfCityToSet = 'city';
  const [modalAvatarShow, setModalAvatarShow] = useState(false);
  const [fieldCityShow, setFieldCityShow] = useState(false);
  const date = profilUser[0].user_registered;
  const convertedDate = new Date(date);
  const localDate = convertedDate.toLocaleString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const handleClickAvatar = () => {
    setModalAvatarShow(true);
  };
  const handleClickCity = () => {
    setFieldCityShow(true);
  };
  const handleChangeCity = (event) => {
    manageChangeCity(event.target.value, nameOfCityToSet);
  };
  const handleSubmitNewCity = (event) => {
    event.preventDefault();
    manageSendNewCity();
    setFieldCityShow(false);
  };
  return (
    <div>
      <Desktop>
        <div className="iconUser-content">
          <div className="iconUser-content2">
            <div className="iconUser-image-content">
              <Image
                className="iconUser-image"

                src={profilUser[1].avatar}
                roundedCircle
                onClick={handleClickAvatar}
              />
              <ModalAvatar
                show={modalAvatarShow}
                onHide={() => setModalAvatarShow(false)}
              />
            </div>
            <div className="iconUser-infos-content">
              <h2 className="iconUser-nickname">{profilUser[0].user_login}</h2>
              <div className="iconUser-infos">
                {!fieldCityShow && (
                  <div className="editionCityUser">
                    <div className="editionCityUser2">
                      <span className="iconUser-infos-pays">{profilUser[1].city}</span>
                    </div>
                    <div className="editionCityUser2">
                      <EditIcon onClick={handleClickCity} className="editIcon" />
                    </div>
                  </div>

                )}
                {fieldCityShow && (
                  <Form
                    className="fieldCity"
                    autoComplete="off"
                    onSubmit={handleSubmitNewCity}
                  >
                    <Form.Group>
                      <Form.Control
                        placeholder="Entrez votre ville..."
                        name={nameOfCityToSet}
                        onChange={handleChangeCity}
                        value={city}
                      />
                    </Form.Group>
                  </Form>
                )}

                <span className="iconUser-inscription">Inscrit depuis le {localDate}</span>
              </div>
            </div>
          </div>
        </div>
      </Desktop>
      <BigTablet>
        <div className="iconUser-content">
          <div className="iconUser-content2">
            <div className="iconUser-image-content">
              <Image
                className="iconUser-image"

                src={profilUser[1].avatar}
                roundedCircle
                onClick={handleClickAvatar}
              />
              <ModalAvatar
                show={modalAvatarShow}
                onHide={() => setModalAvatarShow(false)}
              />
            </div>
            <div className="iconUser-infos-content">
              <h2 className="iconUser-nickname">{profilUser[0].user_login}</h2>
              <div className="iconUser-infos">
                {!fieldCityShow && (
                  <div className="editionCityUser">
                    <div className="editionCityUser2">
                      <span className="iconUser-infos-pays">{profilUser[1].city}</span>
                    </div>
                    <div className="editionCityUser2">
                      <EditIcon onClick={handleClickCity} className="editIcon" />
                    </div>
                  </div>

                )}
                {fieldCityShow && (
                  <Form
                    className="fieldCity"
                    autoComplete="off"
                    onSubmit={handleSubmitNewCity}
                  >
                    <Form.Group>
                      <Form.Control
                        placeholder="Entrez votre ville..."
                        name={nameOfCityToSet}
                        onChange={handleChangeCity}
                        value={city}
                      />
                    </Form.Group>
                  </Form>
                )}

                <span className="iconUser-inscription">Inscrit depuis le {localDate}</span>
              </div>
            </div>
          </div>
        </div>
      </BigTablet>
      <Tablet>
        <div className="iconUser-content">
          <div className="iconUser-content2">
            <div className="iconUser-image-content">
              <Image
                className="iconUser-image"

                src={profilUser[1].avatar}
                roundedCircle
                onClick={handleClickAvatar}
              />
              <ModalAvatar
                show={modalAvatarShow}
                onHide={() => setModalAvatarShow(false)}
              />
            </div>
            <div className="iconUser-infos-content">
              <h2 className="iconUser-nickname">{profilUser[0].user_login}</h2>
              <div className="iconUser-infos">
                {!fieldCityShow && (
                  <div className="editionCityUser">
                    <div className="editionCityUser2">
                      <span className="iconUser-infos-pays">{profilUser[1].city}</span>
                    </div>
                    <div className="editionCityUser2">
                      <EditIcon onClick={handleClickCity} className="editIcon" />
                    </div>
                  </div>

                )}
                {fieldCityShow && (
                  <Form
                    className="fieldCity"
                    autoComplete="off"
                    onSubmit={handleSubmitNewCity}
                  >
                    <Form.Group>
                      <Form.Control
                        placeholder="Entrez votre ville..."
                        name={nameOfCityToSet}
                        onChange={handleChangeCity}
                        value={city}
                      />
                    </Form.Group>
                  </Form>
                )}

                <span className="iconUser-inscription">Inscrit depuis le {localDate}</span>
              </div>
            </div>
          </div>
        </div>
      </Tablet>
      <Mobile>
        <div className="iconUser-contentMobile">
          <div className="iconUser-content2Mobile">
            <div className="iconUser-image-contentMobile">
              <Image
                className="iconUser-imageMobile"

                src={profilUser[1].avatar}
                roundedCircle
                onClick={handleClickAvatar}
              />
              <ModalAvatar
                show={modalAvatarShow}
                onHide={() => setModalAvatarShow(false)}
              />
            </div>
            <div className="iconUser-infos-contentMobile">
              <h2 className="iconUser-nicknameMobile">{profilUser[0].user_login}</h2>
              <div className="iconUser-infosMobile">
                {!fieldCityShow && (
                  <div className="editionCityUserMobile">
                    <div className="editionCityUser2Mobile">
                      <span className="iconUser-infos-paysMobile">{profilUser[1].city}</span>
                    </div>
                    <div className="editionCityUser2">
                      <EditIcon onClick={handleClickCity} className="editIconMobile" />
                    </div>
                  </div>

                )}
                {fieldCityShow && (
                  <Form
                    className="fieldCityMobile"
                    autoComplete="off"
                    onSubmit={handleSubmitNewCity}
                  >
                    <Form.Group>
                      <Form.Control
                        placeholder="Entrez votre ville..."
                        name={nameOfCityToSet}
                        onChange={handleChangeCity}
                        value={city}
                      />
                    </Form.Group>
                  </Form>
                )}

                <span className="iconUser-inscriptionMobile">Inscrit depuis le {localDate}</span>
              </div>
            </div>
          </div>
        </div>
      </Mobile>

    </div>
  );
};
// == Export
export default connect(mapStateToProps, mapDispatchToProps)(InfosUser);
