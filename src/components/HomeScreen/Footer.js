import React from "react";
import Home from "./Home";

import "./Footer.css";

const Footer = ({ setSearch }) => {
  return (
    <>
      <Home />
      <div id="footer">
        <a href="/" id="advertising">
          Advertising
        </a>
        <a href="/" id="business">
          Business
        </a>
        <a href="/" id="hsw">
          How Search Works
        </a>
        <a href="/" id="privacy">
          Privacy
        </a>
        <a href="/" id="terms">
          Terms
        </a>
        <a href="/" id="settings">
          Settings
        </a>
      </div>
    </>
  );
};

export default Footer;
