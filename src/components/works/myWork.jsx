import GitHib from "../../assets/gitHib";
import Open from "../../assets/open";

const MyWork = () => {
  return (
    <>
      <div style={{ marginTop: "3rem" }} className=" flex maxWidth  ">
        <div className="stack gap2 sectionPadding">
          <div style={{ maxWidth: "43rem" }} className="flex gap1 ">
            <div className="flex gap1">
              <p className="greenText regularsizeText bulletPointFontSize ">
                03.
              </p>
            </div>
            <div style={{ marginTop: "-.9em" }} className="flex center">
              <h1 className="firstHeading lightSlateText headingText">
                Some Things I’ve Built
              </h1>
            </div>
            <div style={{ marginTop: "-.1rem" }} className="flex center">
              <div className="dash"></div>
            </div>
          </div>

          <main>
            <div className="stack">
              <div className="grid2">
                <div className="">
                  <div className="relative ">
                    <img className="responsive" src="/fingertipps.png" alt="" />
                    <div className="overFlowHidden">
                      <div className="imageOverlay"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="stack gap2">
                    <div className="stack gap End">
                      <p className="featuredText">Featured Project</p>

                      <h1 className="lightSlateText headingText">
                        Fingertipps
                      </h1>
                    </div>

                    <div className="discriptBox">
                      <p className="textAlignEnd slateText ">
                        Fingertipps, is an all-in-one platform that facilitates
                        e-commerce. Here, small businesses can create, customize
                        and manage their personal e-commerce stores as well as
                        the logistics involved, all for free, via their smart
                        devices. 
                      </p>
                    </div>

                    <div className="flex gap2 End">
                      <p className="slateText">Node</p>
                      <p className="slateText">React</p>
                      <p className="slateText">Redux</p>
                      <p className="slateText">MongoDB</p>
                      <p className="slateText">Express</p>
                      {/* <p className="slateText">Apache</p> */}
                    </div>
                    <div className="flex gap2 End">
                      <Open />
                      <GitHib />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default MyWork;
