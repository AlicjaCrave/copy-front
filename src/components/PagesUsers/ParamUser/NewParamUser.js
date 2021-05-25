import React, { useRef, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { newPassword } from 'src/actions/motivated';
import { updateUserNewPassword } from '../../../actions/auth';

import './newparamuser.scss';
import ParamUser from '.';

const mapStateToProps = (state) => ({
  username: state.auth.username,
});
const mapDispatchToProps = (dispatch) => ({
  manageNewPassword: (data) => {
    dispatch(updateUserNewPassword(data));
  },
  handleParams: () => {
    dispatch(newPassword());
  },
});

const NewParamUser = ({
  manageNewPassword,
  handleParams,
}) => {
  const [newPasswordIsSend, setNewPasswordIsSend] = useState(false)
  const { register, handleSubmit, errors, watch } = useForm({
    mode: 'onTouched',
  });
  const newPassword = useRef({});
  newPassword.current = watch("newPassword", "");
  const onSubmit = (data) => {
    manageNewPassword(data);
    handleParams();
    setNewPasswordIsSend(true)
  };
  console.log(errors);
  return (
    <div>
      <form className="formBlock" onSubmit={handleSubmit(onSubmit)}>
        <div className="field-form">
          <label htmlFor="newPassword">Nouveau mot de passe</label>
          <input
            className="form-control"
            type="password"
            name="newPassword"
            placeholder="Choisissez un nouveau mot de passe"
            ref={register({
              required: 'Veuillez saisir un nouveau mot de passe',
              minLength: {
                value: 8,
                message: ' Le mot de passe doit contenir 8 caractère minimum',
              },
            })}
          />
          {errors.newPassword && <span className="errorsMessages">{errors.newPassword.message}</span>}
        </div>
        <div className="field-form">
          <label htmlFor="confirmNewPassword">Confirmez le mot de passe</label>
          <input
            className="form-control"
            type="password"
            name="confirmNewPassword"
            placeholder="Confirmez votre nouveau mot de passe"
            ref={register({
              required: 'Veuillez confirmer votre nouveau mot de passe',
              validate: (value) => value === newPassword.current || 'Votre mot de passe n\'est pas identique',
              minLength: {
                value: 8,
                message: ' Le mot de passe doit contenir 8 caractère minimum',
              },
            })}
          />
          {errors.confirmNewPassword && <span className="errorsMessages">{errors.confirmNewPassword.message}</span>}
        </div>
        <div className="field-form">
          <button type="submit" className="btn-grad">Modifiez</button>
        </div>
        {newPasswordIsSend && <p className="confirmation" >Votre mot de passe a bien été modifié</p>}
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NewParamUser);
