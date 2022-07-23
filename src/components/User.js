import React from "react";
import ProfilePicture from "./ProfilePicture";
import classes from "./User.module.css";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";
const User = (props) => {
  return (
    <div className={classes.userCard}>
      <a href={props.linkedin} target="_blank" rel="noreferrer">
        <ProfilePicture source={props.profilePic} />
      </a>
      <h1>{props.fullName}</h1>
      <h2>{props.title}</h2>
      {props.children}
      <p className={classes.icons}>
        <a href={props.linkedin} target="_blank" rel="noreferrer">
          <img
            className={classes.logo}
            alt="Linkedin icon"
            src={linkedinIcon}
          />
        </a>
        <a href={props.github} target="_blank" rel="noreferrer">
          <img className={classes.logo} alt="Github icon" src={githubIcon} />
        </a>
      </p>
    </div>
  );
};

export default User;
