import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./Footer.css";

function Footer({ user }) {
  return (
    <div className="footer_container">
      <div className="footer_column">Sponsors:</div>
      <div className="footer_column">
        <h1 class="words">Nike, Adidas, Fila, Titleist, Jofa</h1>
      </div>
      <div className="footer_column">placeholder</div>
    </div>
  );
}

export default Footer;
