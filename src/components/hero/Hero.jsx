import React from "react";
import Button from "../Btn";

const Hero = () => {
  return (
    <>
      <div className="flex center maxWidth fullVh sectionPadding">
        <div className="stack gap1 ">
          <div className="SlideUp2  ">
            <h1 className="greenText regularsizeText">Hi, my name is</h1>
          </div>
          <div className="SlideUp2 group">
            <h2 className="lightSlateText largeText">Ohai Raphael</h2>
          </div>
          <div className="SlideUp2 group ">
            <h3 className="slateText largeText">I build things for the web.</h3>
          </div>
          <div className="SlideUp2 group">
            <p className="slateText widthRestrict">
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences.
            </p>
          </div>
          <div
            style={{ marginTop: "4rem" }}
            className="flex gap2 Start SlideUp2 group"
          >
            <a href="https://docs.google.com/document/d/10dwUC4ZtO3RqT4TGbmtj6-0dBscQZhV-/edit?usp=sharing&ouid=113455400205710338277&rtpof=true&sd=true">
              <Button
                slide={"btnslfffd45"}
                text={"btffntxt45"}
                displayText="resume"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
