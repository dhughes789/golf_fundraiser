import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function SignupFormPage(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [shirt, setShirt] = useState('L');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    
    const isDisabled = ()=>{
        if(password == confirmpassword && password.length>7 && password.length<25){
            console.log('work');
            return false;
            
        }
        else{
            console.log('no worked');
            return true;
        }
     }
    
    return (
        <form>
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
            <select className='signup-form__input' value={shirt} onChange={(e)=>setShirt(e.target.value)}>
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
            <button className='signup-form__input' type='submit' disabled={isDisabled()} >SUBMIT

            </button>

        </form>
    )
}
export default SignupFormPage;