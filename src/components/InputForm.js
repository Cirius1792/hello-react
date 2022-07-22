import React, { useState } from "react";
import classes from "./InputForm.module.css";
import { SUPPORTED_FONTS } from "./TextComponent";
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
    if (isValidInput) props.onNameChange(valueState);
  };

  return (
    <form className={classes.inputForm}>
      <p>
        <input
          type="text"
          value={valueState}
          onChange={handleChange}
          placeholder="name"
        />
        <input
          type="submit"
          value="Done"
          onClick={handleSubmit}
          disabled={!isValidInput}
        />
      </p>
      {touchedState && !isValidInput && (
        <p>
          <span>Valid Characters: a-zA-Z0-9_</span>
        </p>
      )}
      <p className={classes.fontForm}>
        <label>Font:</label>
        <select id="browsers" onChange={(event) => props.onFontChange(event.target.value)}>
          {SUPPORTED_FONTS.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </p>
    </form>
  );
};

export default InputForm;
