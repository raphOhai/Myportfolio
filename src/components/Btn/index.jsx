import React from "react";
import "./btn.css";
import { hoverEvent, leveEvent } from "../functions";

const Button = ({ slide, text, displayText }) => {
  return (
    <div
      onMouseOver={() => hoverEvent(slide, text)}
      onMouseLeave={() => leveEvent(slide, text)}
      className="btnContainer "
    >
      <div className="flex2 center">
        <div id={slide} className=" slide transition2"></div>
        <p id={text} className="default">
          {displayText}
        </p>
      </div>
    </div>
  );
};

export default Button;
