import React, { useState } from "react";
import classes from "./InputForm.module.css";

const InputForm = (props) => {
  const [valueState, setValueState] = useState("");
  const handleChange = (event) => {
    const value = event.target.value;
    setValueState(value);
    if (isValid(value)) props.onChange(value);
  };
  const isValid = (value) => {
    if (!value || value.trim() === "") return false;
    return true;
  };
  return (
    <label className={classes.inputForm}>
      Name: <input type="text" value={valueState} onChange={handleChange} />
    </label>
  );
};

export default InputForm;
