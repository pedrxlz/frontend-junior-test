import React from "react";

import Form from "../../components/Form/Form";

function EditToken() {
  return (
    <div className="edit-token-container">
      <div className="page-title-container">
        <h3>Edit Token</h3>
        <Button
          className="btn klever-back-btn"
          value="Back"
          goTo={"back"}
        ></Button>
      </div>

      <Form></Form>
    </div>
  );
}

export default EditToken;
