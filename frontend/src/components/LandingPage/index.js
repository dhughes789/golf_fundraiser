import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./LandingPage.css";

function LandingPage({ user }) {
  return (
    <div className="landing_page__container">
      <div className="landing_page__title_container">
        <div className="landing_page__title">ALS</div>
        <div className="landing_page__title">Charity</div>
        <div className="landing_page__title">Golf Tournament</div>
      </div>
    </div>
  );
}

export default LandingPage;
