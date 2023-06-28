import React from "react";
import "./loader.css";
import LogoBox from "../logo/log";
import InterSectionChecker from "../functions/observer";
import { UndrawLogo, drawLogo } from "../functions";
const Loader = () => {
  InterSectionChecker("trigger", drawLogo, UndrawLogo, "logoText");
  return (
    <div id="loaderContainer" className="loaderContainer flex center1 trigger ">
      <LogoBox />
    </div>
  );
};

export default Loader;
