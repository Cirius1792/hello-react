import React from "react";
import ProfilePicture from "./ProfilePicture";
const myProfilePic  = 'https://media-exp1.licdn.com/dms/image/C4D03AQHa5_BCYbOLFA/profile-displayphoto-shrink_800_800/0/1630404291817?e=1663804800&v=beta&t=K8i-fdv5yGIt788sOJ5iLIGbFfK4P9wnR-N7p7qOLMw'
const User = (props) => {

  return (
    <div>
      <ProfilePicture source={myProfilePic}/>
      <h1>Ciro Lucio Tecce</h1>
    </div>
  );
};

export default User;
