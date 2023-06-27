import React from "react";
import Logo from "../../assets/logo";

const LogoBox = () => {
  return (
    <>
      <div className="logoContainer">
        <Logo />
        <div className="logoContent">
          <p className="logoFont">R</p>
        </div>
      </div>
    </>
  );
};

export default LogoBox;
