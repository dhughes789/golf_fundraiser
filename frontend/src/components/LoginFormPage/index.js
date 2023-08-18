import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css'

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(['this is an error', 'this is an error too']);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    console.log("in the handlesubmit")
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  }

  return (
    <div className='login-form-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <div className='login-form__row-one'>
          <div className='login-form__title'>login</div>
        </div>
        <div className='login-form__row-two'>
          <input
            className='login-form__input'
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            placeholder='username or email'
            required
          />
          <input
            className='login-form__input'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
            required
          />
        </div>
        <div className='login-form__row-three'>
          <button className='login-form__button' type="submit">login</button>
        </div>
        <div className='login-form__row-four'>
          <div className='login-form__errors'>
            <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
          </div>
          <div className='login-form__switch'>Need an account? <span>Sign up.</span></div>
        </div>
      </form>
    </div>
  );
}

export default LoginFormPage;