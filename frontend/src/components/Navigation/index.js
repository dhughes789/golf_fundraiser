import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const [sandwichClass, setSandwichClass] = useState("sandwich");
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const DropdownMenu = () => {
    return (
      <div className="dropdown-menu">
        <ul>
          <li>Home</li>
          <li>Login</li>
          <li>Signup</li>
          <li>Quintin</li>
          <li>Danton</li>
          <li>Rental Home</li>
          <li>Login</li>
          <li>Signup</li>
        </ul>
      </div>
    );
  };

  function myFunction() {
    if (sandwichClass == "sandwich") {
      setSandwichClass("crossed");
      setDropdownVisible(true);
    } else {
      setSandwichClass("sandwich");
      setDropdownVisible(false);
    }
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    //will be drop down
    sessionLinks = (
      <div className="navbar_session">
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <div className="navbar_container">
      <div>
        <div className={sandwichClass} onClick={() => myFunction()}>
          <div className="bar1"></div>
          <div className="bar3"></div>
        </div>
        <div className="App">
          <header className="App-header">
            <div className="menu" onClick={() => myFunction()}>
              {isDropdownVisible && <DropdownMenu />}
            </div>
          </header>
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
