import React from 'react';
import defaultPic from '../assets/default-user-pic-2.png';
import classes from './ProfilePicture.module.css';

const ProfilePicture = (props) => {
  
  const source = props.source || defaultPic;
  return (
    <div className={classes.container} >
      <p>
        <img className={classes.img}
          src={source}
          alt="Profile pic"
        />
      </p>
    </div>
  );
};

export default ProfilePicture;
