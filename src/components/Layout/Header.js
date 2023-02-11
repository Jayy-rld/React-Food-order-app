import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>
          Food
          <span className={classes["logo-span"]}>Republic</span>
        </h2>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}></div>
    </Fragment>
  );
};

export default Header;
