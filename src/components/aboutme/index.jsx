const Abouts = () => {
  return (
    <div className="flex  maxWidth ">
      <div className="stack gap2 sectionPadding">
        <div style={{maxWidth:"31rem"}} className="flex ">
          <div className="flex gap1">
            <p className="greenText regularsizeText bulletPointFontSize ">
              01.
            </p>
          </div>
          <div
            style={{ marginTop: "-.9em", }}
            className="flex center"
          >
            <h1 className="firstHeading lightSlateText headingText">
              About Me
            </h1>
          </div>
          <div style={{marginTop:"-.1rem"}}   className="flex center ">
            <div className="dash"></div>
          </div>
        </div>

        <div className="mainGrid">
          <div className="stack gap1">
            <p className="slateText">
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>

            <p className="slateText">
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </p>
            <p className="slateText">
              I also recently launched a course that covers everything you need
              to build a web app with the Spotify API using Node & React.
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
