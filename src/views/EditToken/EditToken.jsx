import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactModal from "react-modal";

import Form from "../../components/Form/Form";

import useLocalStorage from "../../hooks/useLocalStorage";

import Button from "../../components/Button/Button";

import "./EditToken.css";

function EditToken() {
  let { id } = useParams();
  const navigateTo = useNavigate();

  const style = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "#14152cc7",
    },
    content: {
      color: "#14152cb0",
      position: "absolute",
      top: "30%",
      left: "35%",
      border: "1px solid #ccc",
      background: "#fff",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: "5px",
      outline: "none",
      padding: "20px",
    },
  };

  const [tokens, setTokens] = useLocalStorage("tokens");
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }

  const removeToken = (tId) => {
    const newTokens = tokens.filter((t) => t.id != tId);
    console.log("id");
    setTokens(newTokens);
    setIsOpen(false);
    navigateTo("/");
  };

  return (
    <div className="edit-token-container">
      <ReactModal
        isOpen={modalIsOpen}
        className="Modal"
        overlayClassName="Overlay"
        ariaHideApp={false}
        style={style}
      >
        <div className="modal">
          <p>Do you want to delete this token from your wallet?</p>
          <div className="modal-delete-confirmation">
            <button
              onClick={() => handleCloseModal()}
              className="btn klever-back-btn"
            >
              Cancel
            </button>
            <button
              onClick={() => handleCloseModal(removeToken(tokens[id].id))}
              className="btn klever-delete-btn"
            >
              Delete
            </button>
          </div>
        </div>
      </ReactModal>
      <div className="page-title-container">
        <h3>Edit Token</h3>
        <Button
          className="btn klever-back-btn"
          value="Back"
          goTo={"back"}
        ></Button>
      </div>
      <Form onEdit={true}>
        <Button
          oneClickCaptureHandler={(e) => handleOpenModal()}
          className="btn klever-delete-btn"
          value="Delete"
          goTo={"none"}
        ></Button>
      </Form>
    </div>
  );
}

export default EditToken;
