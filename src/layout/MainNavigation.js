import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> Hello React</div>
      <div className={classes.nav}>
        <ul>
          <li><NavLink className={(navData) => navData.isActive ? classes.active:''} to='/greetings'>Greetings</NavLink></li>
          <li><NavLink className={(navData) => navData.isActive ? classes.active:''} to='/about-me'>About Me</NavLink></li>
        </ul>
      </div>
    </header>
  );
};

export default MainNavigation;
