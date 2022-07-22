import User from "../components/User";
import { useSelector } from "react-redux";

const AboutMe = (props) => {
  const fontState = useSelector((state) => state.font);

  return <div  style={{ fontFamily: fontState }}>
    <h1>About Me</h1>
    <User/>
  </div>;
};

export default AboutMe;
