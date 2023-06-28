import React from "react";
import Button from "../Btn";

const Footer = () => {
  return (
    <div className="flex center maxWidth fullVh sectionPadding">
      <div className="stack gap3 textAlignCenter">
        <h1 className="greenText regularsizeText">04. What’s Next?</h1>
        <h2 className="lightSlateText largeText">Hire Me</h2>
        <p className="slateText widthRestrict">
          I am actively seeking new opportunities and would greatly
          appreciate any outreach if my services align with your needs. Thank
          you.
        </p>
        <Button slide={"btnld45"} text={"btntfft45"} displayText="Get in touch" />
      </div>
    </div>
  );
};

export default Footer;
