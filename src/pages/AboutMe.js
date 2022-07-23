import User from "../components/User";
import { useSelector } from "react-redux";
const myProfilePic =
  "https://media-exp1.licdn.com/dms/image/C4D03AQHa5_BCYbOLFA/profile-displayphoto-shrink_800_800/0/1630404291817?e=1663804800&v=beta&t=K8i-fdv5yGIt788sOJ5iLIGbFfK4P9wnR-N7p7qOLMw";

const AboutMe = (props) => {
  const fontState = useSelector((state) => state.font);

  return (
    <div style={{ fontFamily: fontState }}>
      <User
        fullName="Ciro Lucio Tecce"
        profilePic={myProfilePic}
        title="Software Engineer"
        linkedin="https://www.linkedin.com/in/ciro-lucio-tecce-3bb628175/"
        github="https://github.com/Cirius1792/hello-react"
      >
        <p>
          I am a curious, passionate and pragmatic Software Engineer. During my
          free time, I enjoy studying or experimenting with new topics and this
          is how this site was born. After several weeks spent studying React,
          it was time to build a first simple web app to test what I've learned
          so far ("Hello World!" is where to start, right?).
        </p>
        <p>
          Have a look at the code and if you have suggestions, or if you spot a
          bug, please, tell to me by sending me a message on Linkedin, it will
          help me improve my skills!
        </p>
      </User>
    </div>
  );
};

export default AboutMe;
