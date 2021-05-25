import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

// == Import
import './connexionpage.scss';
import Field from './Field';

// == Composant
const ConnexionPage = ({
  username,
  password,
  manageChange,
  handleLogin,
  isLogged,
  success,
  message,
}) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [goodMessage, setGoodMessage] = useState(false);

  const checkValidConnexion = () => {
    if (success) {
      setGoodMessage(true);
    }
    else {
      setErrorMessage(true);
    }
  };
  const handleSubmitConnexion = (event) => {
    event.preventDefault();
    handleLogin();
    checkValidConnexion();
  };
  return (
    <div>
      <div className="connexion-content">
        <h1 className="titlePage">Connexion</h1>
        <Form
          onSubmit={handleSubmitConnexion}
          autoComplete="off"
        >
          <Field
            labelName="Pseudo"
            name="username"
            placeholder="Pseudo"
            manageChange={manageChange}
            value={username}
          />
          <Field
            labelName="Mot de passe"
            name="password"
            type="password"
            placeholder="Entrez votre mot de passe"
            manageChange={manageChange}
            value={password}
          />
          <div className="sendContent">
            <span className="forgotten-psw">Vous n'êtes pas encore inscrit ? C'est par <NavLink to="/inscription" className="goInscription">ici</NavLink>  !</span>
            <button type="submit" className="btn-grad">Connexion</button>
            <span className="wrongIdentification">{message}</span>
          </div>
        </Form>
      </div>

    </div>
  );
};

ConnexionPage.propTypes = {
  /** value for the pseudo */
  username: PropTypes.string.isRequired,
  /** value for the password */
  password: PropTypes.string.isRequired,
  /** called when onChange event is received by the input, two parameters :
   * - new value
   * - name
   */
  manageChange: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default ConnexionPage;
