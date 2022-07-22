import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TextComponent, { SUPPORTED_FONTS } from "../components/TextComponent";
import InputForm from "../components/InputForm";
import EditIcon from "../ui/EditIcon";
import classes from "./Greetings.module.css";

const Greetings = (props) => {
  const [editState, setEditState] = useState(false);
  const [fontState, setFontState] = useState(SUPPORTED_FONTS[0]);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let name = queryParams.get("name");
  if (!name) name = "World";
  const text = `Hello ${name}!`;
  const handleFontChange = (value) => {
    setFontState(value);
  };
  const handleNameChange = (value) => {
    setEditState(false);
    navigate(`/greetings?name=${value}`);
  };
  const handleEditChange = () => setEditState((oldState) => !oldState);
  return (
    <div>
      <div className={classes.mainContainer}>
        <TextComponent text={text} font={fontState} />
      </div>
      <div className={classes.container}>
        <EditIcon onClick={handleEditChange} />
      </div>
      {editState && (
        <div className={classes.container}>
          <InputForm onNameChange={handleNameChange} onFontChange={handleFontChange}/>
        </div>
      )}
    </div>
  );
};

export default Greetings;
