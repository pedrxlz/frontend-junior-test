import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./Button.css";

function Button(props) {
  const navigateTo = useNavigate();
  const location = useLocation();

  const style = location.pathname != "/" ? { display: "none" } : {};

  // const oneClickCaptureHandler = () => {
  //   props.
  // }

  return (
    <button
      onClickCapture={props.oneClickCaptureHandler}
      style={props.value != "Add Token" ? {} : style}
      className={props.className}
      type={props.type}
      onClick={() => {
        if (props.goTo == "back") {
          navigateTo(-1);
        } else {
          props.goTo == "none" ? {} : navigateTo(props.goTo);
        }
      }}
    >
      {props.value}
    </button>
  );
}

export default Button;
