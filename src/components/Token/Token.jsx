import React from "react";

import { Link } from "react-router-dom";

import editIcon from "../../assets/editsquare-icon.svg";

import "./Token.css";

function Token(props) {
  const id = "edit-token/" + props.id;

  return (
    <div className="token-info-container">
      <Link className="edit-token-icon" to={id}>
        <img src={editIcon} className="filter-white" />
      </Link>
      <div>
        <span className="token-name">{props.name}</span>
        <span className="token-balance">{props.balance}</span>
      </div>
    </div>
  );
}

export default Token;
