import React from "react";

import Form from "../../components/Form/Form";

import Button from "../../components/Button/Button";

import "./AddToken.css";

function AddToken() {
  return (
    <div className="add-token-container">
      <div className="page-title-container">
        <h3>Add Token</h3>
        <Button
          className="btn klever-back-btn"
          value="Back"
          goTo={"back"}
        ></Button>
      </div>

      <Form onEdit={false} />
    </div>
  );
}

export default AddToken;
