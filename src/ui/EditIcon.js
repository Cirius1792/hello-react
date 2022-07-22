import React from 'react';
import edit_pic from "../assets/edit-icon.png";
import classes from "./EditIcon.module.css";

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
