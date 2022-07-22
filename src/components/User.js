import React from "react";
import ProfilePicture from "./ProfilePicture";
import classes from "./User.module.css";
import linkedinIcon from "../assets/linkedin.svg";
const myProfilePic =
  "https://media-exp1.licdn.com/dms/image/C4D03AQHa5_BCYbOLFA/profile-displayphoto-shrink_800_800/0/1630404291817?e=1663804800&v=beta&t=K8i-fdv5yGIt788sOJ5iLIGbFfK4P9wnR-N7p7qOLMw";
const User = (props) => {
  return (
    <div className={classes.userCard}>
      <a href={props.linkedin} target="_blank">
        <ProfilePicture source={myProfilePic} />
      </a>
      <h1>{props.fullName}</h1>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a href={props.linkedin} target="_blank">
        <img className={classes.logo} alt="Linkedin icon" src={linkedinIcon} />{" "}
      </a>
    </div>
  );
};

export default User;
