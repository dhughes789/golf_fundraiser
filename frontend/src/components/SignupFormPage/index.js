import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function SignupFormPage(){
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [shirtSize, setShirtSize] = useState('L');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);




     const handleSubmit = (e) => {
        console.log("in the handlesubmitsingup" + username,email,phone,shirtSize, password)
        e.preventDefault();
        if(password == confirmpassword){
            setErrors([]);
            return dispatch(sessionActions.signup({ username,email,phone,shirtSize, password }))
              .catch((res) => {
                if (res.data && res.data.errors) {
                    setErrors(res.data.errors);
                }
              });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
      }

    return (
        <div>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
      <form className='signup-form' onSubmit={handleSubmit}>
            <input
                className='signup-form__input'
                type="text"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                placeholder='username'
                required
            />
            <input
                className='signup-form__input'
                type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='email'
                required
            />
            <input
                className='signup-form__input'
                type="text"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                placeholder='###-###-####'
            />
            <select className='signup-form__input' value={shirtSize} onChange={(e)=>setShirtSize(e.target.value)}>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
            <option value="XXXL">XXXL</option>
          </select>
          <input
                className='signup-form__input'
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='password'
                required
            />
          <input
                className='signup-form__input'
                type="password"
                value={confirmpassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                placeholder='confirm password'
                required
            />
            <button className='signup-form__input' type='submit' >SUBMIT

            </button>
            <div className='login-form__row-four'>
            {errors}
        </div>

        </form>
        </div>
       
    )
}
export default SignupFormPage;