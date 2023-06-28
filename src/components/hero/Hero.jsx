import React from "react";
import Button from "../Btn";

const Hero = () => {
  return (
    <>
      <div className="flex center maxWidth fullVh sectionPadding">
        <div className="stack gap1 ">
          <div>
            <h1 className="greenText regularsizeText">Hi, my name is</h1>
          </div>
          <div>
            <h2 className="lightSlateText largeText">Ohai Raphael</h2>
          </div>
          <div>
            <h3 className="slateText largeText">I build things for the web.</h3>
          </div>
          <div>
            <p className="slateText widthRestrict">
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences.
            </p>
          </div>
          <div style={{marginTop:"4rem"}} className="flex gap2 Start">
            <Button
              slide={"btnslfffd45"}
              text={"btffntxt45"}
              displayText="resume"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
