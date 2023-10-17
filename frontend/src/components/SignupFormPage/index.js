import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
const [username, setUsername] = useState('');

function SignupFormPage(){
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

        </form>
    )
}
export default SignupFormPage;