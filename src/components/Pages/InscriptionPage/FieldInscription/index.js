// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import Form from 'react-bootstrap/Form';

// == Composant
const FieldInscription = ({
  value,
  type,
  nameInscription,
  placeholder,
  labelName,
  manageChangeInscription,
}) => {
  const handleChangeInscription = (evt) => {
    manageChangeInscription(evt.target.value, nameInscription);
  };

  return (
    <Form.Group>
      <Form.Label>{labelName}</Form.Label>
      <Form.Control
        name={nameInscription}
        type={type}
        placeholder={placeholder}
        onChange={handleChangeInscription}
        value={value}
      />
    </Form.Group>
  );
};

FieldInscription.propTypes = {
  /** text used as value for the input */
  value: PropTypes.string,
  /** type of the input */
  type: PropTypes.string,

  labelName: PropTypes.string,
  /** text used as name for the input (and also used as id, with a prefix) */
  nameInscription: PropTypes.string.isRequired,
  /** text used as placeholder and label */
  placeholder: PropTypes.string.isRequired,
  /** called when onChange event is received by the input, two parameters :
   * - new value
   * - name
   */
  manageChangeInscription: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props

// == Export
export default FieldInscription;
