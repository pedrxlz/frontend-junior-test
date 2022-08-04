import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import useLocalStorage from "../../hooks/useLocalStorage";

import "./Form.css";

function Form(props) {
  const [tokens, setTokens] = useLocalStorage("tokens", []);

  let { id } = useParams();

  const [tokenWarn, setTokenWarn] = useState(false);

  const onEdit = props.onEdit;
  const navigateTo = useNavigate();

  const nameParam = onEdit ? tokens[id].name : "";
  const balanceParam = onEdit ? tokens[id].balance : "";

  const [tName, setTName] = useState(nameParam);
  const [tBalance, setTBalance] = useState(balanceParam);

  const addToken = (name, balance) => {
    const item = tokens.find((t) => t.name == name);
    if (item) {
      setTokenWarn(true);
      return;
    }
    const nextId =
      tokens.length > 0 ? Math.max(...tokens.map((t) => t.id)) + 1 : 0;

    const newToken = {
      id: nextId,
      name,
      balance,
    };

    setTokens([...tokens, newToken]);
    navigateTo("/");
  };

  const editToken = (tokenId, name, balance) => {
    const foundToken = tokens.find((t) => t.id == tokenId);
    foundToken.name = name;
    foundToken.balance = balance;

    const newTokens = tokens.map((t) => {
      if (t.id === tokenId) {
        return foundToken;
      }
      return t;
    });
    setTokens(newTokens);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (onEdit == true) {
      editToken(id, data.name, data.balance);
      navigateTo("/");
    } else {
      addToken(data.name, data.balance);
    }
  };

  const onChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Token
        <input
          value={tName}
          type="text"
          {...register("name", { required: true })}
          onChange={(e) => setTName(e.target.value)}
        />
        {tokenWarn && (
          <span className="required">This token name already exists</span>
        )}
        {errors.name && (
          <span className="required">This field is required</span>
        )}
      </label>

      <label>
        Balance
        <input
          value={tBalance}
          type="number"
          {...register("balance", {
            onChange: (e) => {
              onChange;
            },
            required: true,
          })}
          onChange={(e) => setTBalance(+e.target.value)}
        />
        {errors.balance && (
          <span className="required">This field is required</span>
        )}
      </label>

      <div className="delete-token">{props.children}</div>

      <input
        className="btn klever-primary-btn submit"
        type="submit"
        value="Save"
      ></input>
    </form>
  );
}

export default Form;
