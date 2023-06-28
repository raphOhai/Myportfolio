const Abouts = () => {
  return (
    <div  className="flex center maxWidth fullV ">
      <div className="stack gap2 sectionPadding">
        <div style={{ maxWidth: "31rem" }} className="flex ">
          <div className="flex gap1">
            <p className="greenText regularsizeText bulletPointFontSize ">
              01.
            </p>
          </div>
          <div style={{ marginTop: "-.9em" }} className="flex center">
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
          </div>
          <div className="hideTabAndMobile"></div>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
