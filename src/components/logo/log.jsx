import React from "react";
import Logo from "../../assets/logo";
import LoderLogo from "../../assets/loderLogo";

const LogoBox = () => {
  return (
    <>
      <div className="logoContainer">
        <LoderLogo />
        <div className="logoContent">
          <p id="logoText" className="logoFont fadeIn">R</p>
        </div>
      </div>
    </>
  );
};

export default LogoBox;
