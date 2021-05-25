import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { newPassword } from 'src/actions/motivated';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import { updateUserNewPassword } from '../../../actions/auth';
// https://react-bootstrap.github.io/components/forms/

import FieldInscription from './FieldInscription';

// == Import
import './inscriptionpage.scss';

// == Composant
const InscriptionPage = ({
  manageChangeInscription,
  handleInscription,
}) => {
  const handleSubmitInscription = (event) => {
    event.preventDefault();
    // handleInscription();
  };
  const [passwordIsSend, setPasswordIsSend] = useState(false);
  const {
    register, handleSubmit, errors, watch,
  } = useForm({
    mode: 'onTouched',
  });
  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = (data) => {
    manageChangeInscription(data);
    handleInscription();
    setPasswordIsSend(true);
  };
  return (
    <div>
      <div className="connexion-content">
        <h1 className="titlePage">Inscription</h1>
        <div>
          <form className="formBlock" onSubmit={handleSubmit(onSubmit)}>
            <div className="field-form">
              <label htmlFor="username">Pseudo</label>
              <input
                className="form-control"
                name="username"
                placeholder="Choisir un pseudo"
                ref={register({
                  required: 'Veuillez saisir un Pseudo',
                  minLength: {
                    value: 4,
                    message: ' Votre pseudo doit contenir au moins 4 caractères',
                  },
                })}
              />
              {errors.username && <span className="errorsMessages">{errors.username.message}</span>}
            </div>
            <div className="field-form">
              <label htmlFor="password">Mot de passe</label>
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Entrez votre mot de passe"
                ref={register({
                  required: 'Veuillez saisir un mot de passe',
                  minLength: {
                    value: 8,
                    message: ' Le mot de passe doit contenir 8 caractère minimum',
                  },
                })}
              />
              {errors.password && <span className="errorsMessages">{errors.password.message}</span>}
            </div>
            <div className="field-form">
              <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
              <input
                className="form-control"
                type="password"
                name="confirmPassword"
                placeholder="Entrez à nouveau votre mot de passe"
                ref={register({
                  required: 'Veuillez confirmer votre mot de passe',
                  validate: (value) => value === password.current || 'Votre mot de passe n\'est pas identique',
                  minLength: {
                    value: 8,
                    message: ' Le mot de passe doit contenir 8 caractère minimum',
                  },
                })}
              />
              {errors.confirmPassword && <span className="errorsMessages">{errors.confirmPassword.message}</span>}
            </div>
            <div className="field-form">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Entrez un email"
                ref={register({
                  required: 'Veuillez entrer une adresse email.',
                  Email: {
                    type: 'pattern',
                    message: 'Veuillez entrer une adresse email valide.',
                  },
                })}
              />
              {errors.email && <span className="errorsMessages">{errors.email.message}</span>}
            </div>
            <div className="field-form">
              <button type="submit" className="btn-grad">Creer votre compte</button>
            </div>
            {passwordIsSend && (
              <div>
                <p className="confirmation">Votre compte a bien été créé.</p>
                <NavLink
                  className="retourconnexion"
                  to="/connexion"
                >
                  Cliquez ici pour vous connecter.
                </NavLink>
              </div>
            )}
          </form>
        </div>
      </div>

    </div>
  );
};
InscriptionPage.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  manageChangeInscription: PropTypes.func.isRequired,
};
// == Export
export default InscriptionPage;

/*       <Form onSubmit={handleSubmitInscription}>
          <FieldInscription
            labelName="Pseudo"
            nameInscription="username"
            placeholder="Choisir un pseudo"
            manageChangeInscription={manageChangeInscription}
            value={username}
          />
          <FieldInscription
            labelName="Prénom"
            nameInscription="first_name"
            placeholder="Votre prénom"
            manageChangeInscription={manageChangeInscription}
            value={first_name}
          />
          <FieldInscription
            labelName="Nom"
            nameInscription="last_name"
            placeholder="Votre nom"
            manageChangeInscription={manageChangeInscription}
            value={last_name}
          />
          <FieldInscription
            labelName="Mot de passe"
            nameInscription="password"
            type="password"
            placeholder="Entrez votre mot de passe"
            manageChangeInscription={manageChangeInscription}
            value={password}
          />
          <FieldInscription
            labelName="Mot de passe"
            nameInscription="confirmPassword"
            type="password"
            placeholder="Entrez à nouveau votre mot de passe"
            manageChangeInscription={manageChangeInscription}
            value={confirmPassword}
          />
          <FieldInscription
            labelName="Email"
            nameInscription="email"
            type="email"
            placeholder="Entrez un email"
            manageChangeInscription={manageChangeInscription}
            value={email}
          />
          <button type="submit" className="btn-grad">Creer votre compte</button>
        </Form>

        */
