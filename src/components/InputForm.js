import React, { useState } from "react";
import classes from "./InputForm.module.css";
const re = new RegExp("^\\w+$");
const isValid = (value) => {
  if (!value || value.trim() === "" || !re.test(value)) return false;
  return true;
};

const InputForm = (props) => {
  const [valueState, setValueState] = useState("");
  const [touchedState, setTouchedState] = useState(false);

  const isValidInput = touchedState && isValid(valueState);

  const handleChange = (event) => {
    const value = event.target.value;
    setValueState(value);
    if (!touchedState) setTouchedState(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidInput) props.onChange(valueState);
  }

  console.log(`valid input ${isValidInput}!`)

  return (
    <form className={classes.inputForm}>
      <p>
        <input type="text" value={valueState} onChange={handleChange} placeholder="name" />
        <input type="submit" value="Done" onClick={handleSubmit} disabled={!isValidInput}/>
      </p>
      {touchedState && !isValidInput && <p>
        <span >Valid Characters: a-zA-Z0-9_</span>
      </p>}
    </form>
  );
};

export default InputForm;
