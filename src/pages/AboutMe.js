import User from "../components/User";
import { useSelector } from "react-redux";
const whoIAm="I am a curious, passionate and pragmatic Software Engineer. During my free time, I enjoy studying or experimenting with new topics and this is how this site was born. After several weeks spent studying React, it was time to build a first simple web app to test myself and what I've learned. Have a look at the code and if you have suggestions, or if you spot a bug, please, tell it to me by sending me a message on Linkedin, it will help me improve my skills!  "
const AboutMe = (props) => {
  const fontState = useSelector((state) => state.font);

  return <div  style={{ fontFamily: fontState }}>
    <User fullName="Ciro Lucio Tecce"
    title="Software Engineer"
    description={whoIAm}
    linkedin="https://www.linkedin.com/in/ciro-lucio-tecce-3bb628175/"
    />
  </div>;
};

export default AboutMe;
