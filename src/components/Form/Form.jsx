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
    localStorage.setItem(
      watch("token"),
      JSON.stringify(parseFloat(watch("balance")))
    );
    navigateTo("/");
  };
  console.log(watch("token"));

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Token
        <input type="text" {...register("token", { required: true })} />
        {errors.token && (
          <span className="required">This field is required</span>
        )}
      </label>

      <label>
        Balance
        <input type="text" {...register("balance", { required: true })} />
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
