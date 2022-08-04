import React from "react";

import shootingStar from "../../assets/shooting-star.svg";
import kleverLogo from "../../assets/logo.svg";

import Button from "../Button/Button";

import "./Header.css";

export default () => (
  <div className="header">
    <img className="logo" src={kleverLogo} alt="klever-logo"></img>
    <div className="title-container">
      <div className="title">
        <img src={shootingStar} className="filter-gold" alt="shooting-star" />
        <span className="title">Wish Wallet</span>
      </div>
      <Button
        className="btn klever-primary-btn"
        id="add-token"
        value="Add Token"
        goTo={"/add-token"}
      ></Button>
    </div>
  </div>
);
