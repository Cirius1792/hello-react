import React from 'react';
import edit_pic from "../assets/settings.svg";
import classes from "./EditIcon.module.css";
//icon from https://feathericons.com/?query=gear
const EditIcon = (props) => {
      return (
      <img
        className={classes.editIcon}
        alt="Edit icon"
        src={edit_pic}
        onClick={props.onClick}
      />
  );
};

export default EditIcon;
