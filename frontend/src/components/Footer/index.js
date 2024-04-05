import React, { useEffect } from "react";
import "./Footer.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSponsors } from "../../store/sponsor";

function Footer({ user }) {
  const dispatch = useDispatch();
  const sponsors = useSelector((state) => state.sponsors.data);

  useEffect(() => {
    dispatch(fetchSponsors());
  }, [dispatch]);

  const sponsorList = sponsors.map((sponsor) => sponsor.name);
  console.log(sponsorList);

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
