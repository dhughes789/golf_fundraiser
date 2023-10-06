import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { FaExclamationCircle, FaLock, FaUser } from "react-icons/fa";
import './LoginForm.css'

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    console.log("in the handlesubmit")
    e.preventDefault();
    setError();
    return dispatch(sessionActions.login({ credential, password }))
      .catch((res) => {
        if (res.data && res.data.errors) setError(res.data.errors);
      });
  }

  return (
    <div className='login-form-container'>
      <img src={'/golfPic.jpg'} className='test-image'/>
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
            {error}
        </div>
        <div className='login-form__row-five'>
          <div className='login-form__switch'>need an account? <a href='https://www.google.com/'>signup</a></div>
          <div className='login-form__forgot'>forgot password? <a href='https://www.google.com/'>reset</a></div>
        </div>
      </form>
    </div>
  );
}

export default LoginFormPage;
