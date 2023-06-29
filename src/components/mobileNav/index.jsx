import React from "react";
import { handleClickScroll, hideMobileNav, navAnimation } from "../functions";
import Button from "../Btn";
import "./mobileNav.css";

const MobileNave = () => {
  return (
    <div className="mobileNaveContainer  flex center1  transition">
      <div id="navContent" className="stack gap3 remove">
        <div
          onClick={() =>
            navAnimation() & hideMobileNav() & handleClickScroll("about")
          }
          className="flex gap center pointer"
        >
          <div className="">
            <p className="greenText">01.</p>
          </div>
          <div style={{ marginTop: "-.2rem" }}>
            <p className="slateText">About</p>
          </div>
        </div>

        <div
          onClick={() =>
            navAnimation() & hideMobileNav() & handleClickScroll("work")
          }
          className="flex gap center pointer  group"
        >
          <div className="">
            <p className="greenText">02.</p>
          </div>
          <div style={{ marginTop: "-.2rem" }}>
            <p className="slateText">Work</p>
          </div>
        </div>

        <div
          onClick={() =>
            navAnimation() & hideMobileNav() & handleClickScroll("contact")
          }
          className="flex gap center pointer group"
        >
          <div className="">
            <p className="greenText">03.</p>
          </div>
          <div style={{ marginTop: "-.2rem" }}>
            <p className="slateText">Contact</p>
          </div>
        </div>
        <div className="flex gap center group">
          <Button slide={"btnsld45"} text={"btntxt45"} displayText="resume" />
        </div>
      </div>
    </div>
  );
};

export default MobileNave;
