import MultipleAnimator from "../functions/BulkAnimator";

const Abouts = () => {
  MultipleAnimator();
  return (
    <div className="flex center maxWidth fullV SlideUp">
      <div className="stack gap2 sectionPadding">
        <div style={{ maxWidth: "31rem" }} className="flex ">
          <div className="flex gap1">
            <p className="greenText regularsizeText bulletPointFontSize ">
              01.
            </p>
          </div>
          <div style={{ marginTop: "-.9rem" }} className="flex center">
            <h1 className="firstHeading lightSlateText headingText">
              About Me
            </h1>
          </div>
          <div style={{ marginTop: "-.1rem" }} className="flex center ">
            <div className="dash"></div>
          </div>
        </div>

        <div className="mainGrid">
          <div className="stack gap1">
            <p className="slateText">
              Hello! I'm Raphael, an enthusiastic creator with a passion for
              crafting online experiences. My journey in web development began
              in 2019 when I embarked on building Fingertipps, my startup.
              However, I encountered setbacks due to my limited coding knowledge
              at the time.
            </p>

            <p className="slateText">
              Fast-forward to the present day, I am proud to share that I have
              successfully developed Fingertipps, along with working on various
              side projects to further expand my repertoire.
            </p>
            <p className="slateText">
              Here are a few technologies I’ve been working with recently:
            </p>
            <div className="flex gap2 start ">
              <div className="flex2 widthRestrict2">
                <p className="slateText">- TypeScript</p>
                <p className="slateText">- JavaScript</p>
                <p className="slateText">- Next.js</p>
                <p className="slateText">- React</p>
                <p className="slateText">- Redux</p>
                <p className="slateText">- MongoDB</p>
                <p className="slateText">- Node.js</p>
                <p className="slateText">- Express</p>
                <p className="slateText">- linux</p>
                <p className="slateText">- Apache2</p>
              </div>
            </div>
          </div>
          <div className="hideTabAndMobile"></div>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
