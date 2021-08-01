import React from "react";
import menu from "../../menu.png";
// import $ from "jquery";
import "./Header.css";

console.log(menu);

const Header = () => {
  return (
    <div id="navbar">
      <a href="/" id="about">
        About
      </a>
      <a href="/" id="store">
        Store
      </a>
      <a class="btn" href="https://friendly-nobel-4355d2.netlify.app/post">
        Post
      </a>
      <a href="/" id="gmail">
        Gmail
      </a>
      <a href="/" id="images">
        Images
      </a>
      <a href="/" id="menu">
        <img src={menu} alt="menu" width="30px" height="30px" />
      </a>

      <a href="/" id="sign-in">
        Sign in
      </a>
    </div>
  );
};
export default Header;
