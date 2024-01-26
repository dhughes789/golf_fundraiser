import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const [sandwichClass, setSandwichClass] = useState('sandwich');

  function myFunction() {
    if (sandwichClass == 'sandwich') {
      setSandwichClass('crossed');
    } else {
      setSandwichClass('sandwich');
    }
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    //will be drop down
    sessionLinks = (
      <div className='navbar_session'>
        <NavLink to='/login'>Log In</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
      </div>
    );
  }

  return (
    <div className='navbar_container'>
      <div>
        <div className={sandwichClass} onClick={() => myFunction()}>
          <div className='bar1'></div>
          <div className='bar3'></div>
        </div>
        {/* <NavLink exact to='/' className='navbar_home'>
          Home
        </NavLink> */}
      </div>
      <div>{isLoaded && sessionLinks}</div>
    </div>
  );
}

export default Navigation;
