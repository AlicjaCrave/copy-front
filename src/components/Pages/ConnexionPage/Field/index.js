// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import Form from 'react-bootstrap/Form';

// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  manageChange,
  labelName,
}) => {
  const handleChangeConnexion = (evt) => {
    manageChange(evt.target.value, name);
  };

  return (
    <Form.Group>
      <Form.Label>{labelName}</Form.Label>
      <Form.Control
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChangeConnexion}
        value={value}
      />
    </Form.Group>
  );
};

Field.propTypes = {
  /** text used as value for the input */
  value: PropTypes.string,
  /** type of the input */
  type: PropTypes.string,

  labelName: PropTypes.string,
  /** text used as name for the input (and also used as id, with a prefix) */
  name: PropTypes.string.isRequired,
  /** text used as placeholder and label */
  placeholder: PropTypes.string.isRequired,
  /** called when onChange event is received by the input, two parameters :
   * - new value
   * - name
   */
  manageChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props

// == Export
export default Field;
