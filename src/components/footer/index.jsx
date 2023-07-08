import React from "react";
import Button from "../Btn";
import MultipleAnimator from "../functions/BulkAnimator";
import TwitterIcon from "../../assets/twitter";
import GitHib from "../../assets/gitHib";
import LinkedIn from "../../assets/LinkedIn";

const Footer = () => {
  MultipleAnimator();
  const email = "raphaelohai5@gmail.com";
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
          <a href={`mailto:${email}`}>
            <Button
              slide={"btnld45"}
              text={"btntfft45"}
              displayText="Get in touch"
            />
          </a>
        </div>

        <div className="flex gap3 center hideDeskTopAndTabFlex">
          <a href="https://twitter.com/raph_ohai">
            <TwitterIcon />
          </a>
          <a href="https://github.com/raphOhai/">
            <GitHib />
          </a>
          <a href="https://www.linkedin.com/in/raphael-ohai-micheal/">
            <LinkedIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
