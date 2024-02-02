import React from "react";
import "./Footer.css";

function Footer({ user }) {
  const sponsorList = [
    "Thank you to all our sponsors!",
    "Front Row Films",
    "Play It Again Sports",
    "Ghetto Gerbes",
    "Applebees",
    "Jamaican Jerk Hut",
    "Helias Catholic",
    "Central Bank",
    "Capital Holdings",
    "Test",
    "Front Row Films",
    "Play It Again Sports",
    "Ghetto Gerbes",
    "Applebees",
    "Jamaican Jerk Hut",
    "Helias Catholic",
    "Central Bank",
    "Capital Holdings",
    "Test",
    "Front Row Films",
    "Play It Again Sports",
    "Ghetto Gerbes",
    "Applebees",
    "Jamaican Jerk Hut",
    "Helias Catholic",
    "Central Bank",
    "Capital Holdings",
    "Test",
  ];

  const renderSponsorList = (sponsors) => {
    return sponsors.join(" • ");
  };

  return (
    <div className="footer_container">
      <div className="footer_sponsor">
        <div className="footer_sponsor__ticker">
          <div class="footer_sponsor__sponsors">
            {renderSponsorList(sponsorList)}
          </div>
        </div>
      </div>
      <div className="footer_credit">
        <div className="footer_credit__github">
          <img src={"/gitHubMark.png"} className="image"></img>
        </div>
        <div className="footer_credit__char">D</div>
        <div className="footer_credit__char">Q</div>
      </div>
    </div>
  );
}

export default Footer;
