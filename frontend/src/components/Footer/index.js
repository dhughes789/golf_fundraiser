import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./Footer.css";

function Footer({ user }) {
  const sponsorList = [
    "Front Row Films",
    "Play It Again Sports",
    "Ghetto Gerbes",
    "Applebees",
    "Jamaican Jerk Hut",
  ];

  const renderSponsorList = (sponsors) => {
    return sponsors.join(" |  ");
  };

  return (
    <div className="footer_container">
      <div className="footer_sponsor">
        <div className="footer_sponsor__title">Sponsors: </div>
        <div className="footer_sponsor__ticker">
          <div class="footer_sponsor__sponsors">
            {renderSponsorList(sponsorList)}
          </div>
        </div>
      </div>
      <div className="footer_credit">placeholder</div>
    </div>
  );
}

export default Footer;
