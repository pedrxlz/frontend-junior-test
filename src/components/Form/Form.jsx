import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Button from "../Button/Button";

import "./Form.css";

function Form() {
  const navigateTo = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    if (localStorage.getItem("id") === null) {
      localStorage.setItem("id", 0);
    }

    function getNextId() {
      let nextId = localStorage.getItem("id");
      return parseInt(nextId) + 1;
    }

    let object = {
      id: getNextId(),
      tokenName: data.tokenName,
      balanceValue: JSON.stringify(parseFloat(data.balanceValue)),
    };

    let id = getNextId();
    localStorage.setItem(id, JSON.stringify(object));
    localStorage.setItem("id", id);

    navigateTo("/");
  };
  console.log(watch("token"));

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Token
        <input type="text" {...register("tokenName", { required: true })} />
        {errors.token && (
          <span className="required">This field is required</span>
        )}
      </label>

      <label>
        Balance
        <input type="text" {...register("balanceValue", { required: true })} />
        {errors.balance && (
          <span className="required">This field is required</span>
        )}
      </label>
      <Button
        className="btn klever-primary-btn submit"
        type="submit"
        value="Save"
      ></Button>
    </form>
  );
}

export default Form;
