import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

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
        <NavLink exact to="/" className="navbar_home">
          Home
        </NavLink>
      </div>
      <div>{isLoaded && sessionLinks}</div>
    </div>
  );
}

export default Navigation;
