import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import MoodRoundedIcon from '@material-ui/icons/MoodRounded';
import MoodBadRoundedIcon from '@material-ui/icons/MoodBadRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import walker from 'src/assets/image/walkerresolution.png';
import CircularProgress from '@material-ui/core/CircularProgress';
import reader from '../../../../assets/image/glassestransparent.png';
import completed from '../../../../assets/image/resolutioncompleted.png';
// import dataTestResolutions from '../../../../data/dataTestResolution';

// == Import
import './activeResolution.scss';
import ModalDayStatus from '../ModalDayStatus';
import ModalTestimony from '../ModalTestimony';

// == Composant
const ActiveResolution = ({
  resolutions,
  resolutionsid,
  manageDeleteResolution,
  nameToDelResolution,
  deleteResolution,
  manageChangeCheckDay,
  manageChangeIdOChecksResolution,
  manageChangeIdOTestimonyResolution,

}) => {
  const nameOfDayToChange = 'day';
  const nameStatus = 'statusDay';
  const nameIdOfResolution = 'resolution';
  const nameIdOfResolutionTestimony = 'resolutionId';
  const [modalShow, setModalShow] = useState(false);
  const [modalTestimonyShow, setModalTestimonyShow] = useState(false);

  const handleClickDelete = (event) => {
    manageDeleteResolution(event.currentTarget.id, nameToDelResolution);
    console.log(event.currentTarget.id, nameToDelResolution);
    deleteResolution();
  };
  const handleClickDayStatus = (e) => {
    manageChangeCheckDay(e.currentTarget.id, nameOfDayToChange);
    console.log(e.currentTarget.value);
    console.log(e.currentTarget.id);
    setModalShow(true);
  };
  const handleClickDayResolution = (evt) => {
    manageChangeIdOChecksResolution(evt.currentTarget.id, nameIdOfResolution);
  };
  const handleClickTestimony = (evt) => {
    manageChangeIdOTestimonyResolution(
      evt.currentTarget.id,
      nameIdOfResolutionTestimony,
      evt.currentTarget.value,
    );
    setModalTestimonyShow(true);
  };
  return (
    <div className="resolutionsBloc">
      {resolutions.map == null ? <div /> : resolutions.map((resolution) => (
        <div key={resolution.resolution_id} className="activeResolution-block">
          <div className="activeResolution-content">
            <div className="activeResolution-background">
              <h3 className="activeTitreResolution">{resolution.post_title}</h3>
              <div>
                <DeleteIcon
                  className="deleteicon"
                  name={nameToDelResolution}
                  onClick={handleClickDelete}
                  id={resolution.resolution_id}
                  value={resolution.duration}
                />
                <div className="image-active-reso">
                  <Image
                    className="activeIconResolution-image"
                    src={resolution.url_thumbnail}
                    width="450"
                    rounded
                  />
                  {resolution.status > '0' && (
                  <div>
                    <img className="completed-image" width="450" src={completed} alt="" />
                  </div>
                  )}
                </div>
                {resolution.status > '0' && (
              <div className="buttonArchive">
                <button
                  type="button"
                  className="bouton-completed"
                  onClick={handleClickTestimony}
                  name={nameIdOfResolutionTestimony}
                  id={resolution.resolution_id}
                  value={resolution.status}
                >
                  Archiver la résolution
                </button>
              </div>
                )}
                <div className="calendrier-content">
                  <div className="calendrier-background">
                    {resolution.duration.map((resolutionDay) => (
                      resolutionDay.status > 0 ? (
                        <div>
                          <span className="dday">J-{resolutionDay.day}</span>
                          <div
                            key={resolutionDay.day}
                            onClick={handleClickDayResolution}
                            name={nameIdOfResolution}
                            id={resolution.resolution_id}
                          >
                            <button
                              type="button"
                              name={nameOfDayToChange}
                              value={resolutionDay.status}
                              id={resolutionDay.day}
                              className="onebox-calendrier"
                            >
                              {
                                resolutionDay.status === '0' && (
                                  <CheckBoxOutlineBlankIcon style={{ fontSize: 40 }} />
                                )
                              }
                              {
                                resolutionDay.status === '1' && <MoodRoundedIcon className="checkboxcolor" style={{ fontSize: 40 }} />
                              }
                              {
                                parseInt(resolutionDay.status) > 1 && (
                                  <MoodBadRoundedIcon className="nopeboxcolor" style={{ fontSize: 40 }} />)
                              }
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <span className="dday">J-{resolutionDay.day}</span>
                          <div
                              key={resolutionDay.day}
                              onClick={handleClickDayResolution}
                              name={nameIdOfResolution}
                              id={resolution.resolution_id}
                          >
                            <button
                              key={resolutionDay.day}
                              type="button"
                              onClick={handleClickDayStatus}
                              name={nameOfDayToChange}
                              value={resolutionDay.status}
                              id={resolutionDay.day}
                              className="onebox-calendrier"
                            >
                              {
                                  resolutionDay.status === '0' && (
                                    <CheckBoxOutlineBlankIcon style={{ fontSize: 40 }} />
                                  )
                              }
                              {
                                  resolutionDay.status === '1' && <MoodRoundedIcon style={{ fontSize: 40 }} />
                              }
                              {
                                  parseInt(resolutionDay.status) > 1 && (
                                    <MoodBadRoundedIcon className="nopeboxcolor" style={{ fontSize: 40 }} />)
                              }
                            </button>
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <ModalDayStatus
              show={modalShow}
              onHide={() => setModalShow(false)}
              nameStatus={nameStatus}
            />
            <ModalTestimony
              show={modalTestimonyShow}
              onHide={() => setModalTestimonyShow(false)}
              nameIdOfResolution={nameIdOfResolution}
              resolution_id={resolution.resolution_id}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
// == Export
export default ActiveResolution;
