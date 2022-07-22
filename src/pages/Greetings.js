import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { settingsActions } from "../store/settings";
import TextComponent, { SUPPORTED_FONTS } from "../components/TextComponent";
import InputForm from "../components/InputForm";
import EditIcon from "../ui/EditIcon";
import classes from "./Greetings.module.css";

const Greetings = (props) => {
  const nameState = useSelector((state) => state.name)
  const fontState = useSelector((state) => state.font);
  const dispatch = useDispatch();
  const [editState, setEditState] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let name = queryParams.get("name");
  if (!name) name = nameState;
  const text = `Hello ${name}!`;
  const handleFontChange = (value) => {
    dispatch(settingsActions.setFont({font:value}))
  };
  const handleNameChange = (value) => {
    setEditState(false);
    dispatch(settingsActions.setName({name:value}))
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
