import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import vegan from 'src/assets/image/veganresolution.png';
import walker from 'src/assets/image/walkerresolution.png';
import cook from 'src/assets/image/cookresolution.png';
import reading from 'src/assets/image/readingresolution.png';
import nosmoking from 'src/assets/image/nosmokingresolution.png';

// == Import
import './modalResolution.scss';
import ModalVegan from './vegan';
import ModalLecture from './lecture';
import ModalNoFastFood from './noFastFood';
import ModalMarche from './marche';
import ModalNoCigarette from './noCigarette';

// == Composant
const ModalResolution = ({ show, onHide }) => {
  const [paramVegan, setParamVegan] = useState(false);
  const [paramNoFastFood, setParamNoFastFood] = useState(false);
  const [paramLecture, setParamLecture] = useState(false);
  const [paramMarche, setParamMarche] = useState(false);
  const [paramNoCigarette, setParamNoCigarette] = useState(false);
  const returnStep1Vegan = () => setParamVegan(false);
  const returnStep1NoFastFood = () => setParamNoFastFood(false);
  const returnStep1Lecture = () => setParamLecture(false);
  const returnStep1Marche = () => setParamMarche(false);
  const returnStep1NoCigarette = () => setParamNoCigarette(false);

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
            Choisissez votre résolution :
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {!paramVegan
              && !paramNoFastFood
              && !paramLecture
              && !paramMarche
              && !paramNoCigarette
              && (
                <div>
                  <h4>Étape 1/2</h4>
                  <div className="resolutions-content">
                    <div className="one-resolution">
                      <img onClick={() => setParamVegan(true)} className="resolution-image" src={vegan} alt="" />
                      <h5 className="titleResolution">Je deviens vegan</h5>
                    </div>
                    <div className="one-resolution">
                      <img onClick={() => setParamNoFastFood(true)} className="resolution-image" src={cook} alt="" />
                      <h5 className="titleResolution">Je mange moins de fast food</h5>
                    </div>
                    <div className="one-resolution">
                      <img onClick={() => setParamLecture(true)} className="resolution-image" src={reading} alt="" />
                      <h5 className="titleResolution">Se remettre à lire</h5>
                    </div>
                    <div className="one-resolution">
                      <img onClick={() => setParamMarche(true)} className="resolution-image" src={walker} alt="" />
                      <h5 className="titleResolution">Je marche plus</h5>
                    </div>
                    <div className="one-resolution">
                      <img onClick={() => setParamNoCigarette(true)} className="resolution-image" src={nosmoking} alt="" />
                      <h5 className="titleResolution">J’arrête de fumer</h5>
                    </div>
                  </div>
                </div>
              )}
          </div>
          {paramVegan && (
            <div>
              <ModalVegan onHide={onHide} />
              <Button className="btn-grad-resolution" onClick={returnStep1Vegan}>Retour</Button>
            </div>
          )}
          {paramNoFastFood && (
            <div>
            <ModalNoFastFood onHide={onHide} />
             <Button className="btn-grad-resolution" onClick={returnStep1NoFastFood}>Retour</Button>
            </div>
          )}
          {paramLecture && (
            <div>
              <ModalLecture onHide={onHide} />
              <Button className="btn-grad-resolution" onClick={returnStep1Lecture}>Retour</Button>
            </div>
          )}
          {paramMarche && (
            <div>
              <ModalMarche onHide={onHide} />
              <Button className="btn-grad-resolution" onClick={returnStep1Marche}>Retour</Button>
            </div>
          )}
          {paramNoCigarette && (
            <div>
              <ModalNoCigarette onHide={onHide} />
              <Button className="btn-grad-resolution" onClick={returnStep1NoCigarette}>Retour</Button>
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

// == Export
export default ModalResolution;
