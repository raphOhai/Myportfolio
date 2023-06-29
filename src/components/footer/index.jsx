import React from "react";
import Button from "../Btn";
import MultipleAnimator from "../functions/BulkAnimator";

const Footer = () => {
  MultipleAnimator();
  return (
    <div className="flex center maxWidth fullVh sectionPadding ">
      <div className="stack gap3 textAlignCenter">
        <h1 className="greenText regularsizeText  SlideUp group">
          03. What’s Next?
        </h1>
        <h2 className="lightSlateText largeText  SlideUp group">Hire Me</h2>
        <p className="slateText widthRestrict  SlideUp group">
          I am actively seeking new opportunities and would greatly appreciate
          any outreach if my services align with your needs. Thank you.
        </p>
        <div className="flex center  SlideUp group">
          <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=raphaelohai5@gmail.com">
            <Button
              slide={"btnld45"}
              text={"btntfft45"}
              displayText="Get in touch"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
