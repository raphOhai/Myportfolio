import RightLeftShowcase from "../projectShoCase/RightLeftShowcase";
import LeftRightShowcase from "../projectShoCase/leftRightShowcase";

const MyWork = () => {
  return (
    <>
      <div  style={{ marginTop: "3rem" }} className=" flex maxWidth center  ">
        <div className="stack gap2 sectionPadding">
          <div style={{ maxWidth: "43rem" }} className="flex gap1 ">
            <div className="flex gap1">
              <p className="greenText regularsizeText bulletPointFontSize ">
                02.
              </p>
            </div>
            <div style={{ marginTop: "-.9em" }} className="flex center">
              <h1 className="firstHeading lightSlateText headingText">
                Some Things I’ve Built
              </h1>
            </div>
            <div
              style={{ marginTop: "-.1rem" }}
              className="flex center hideTabAndMobile"
            >
              <div className="dash"></div>
            </div>
          </div>

          <main>
            <div className="stack gapX">
              <LeftRightShowcase
                projectName={"fingertipps"}
                discription={`Fingertipps, is an all-in-one platform that facilitates
                e-commerce. Here, small businesses can create, customize and
                manage their personal e-commerce stores as well as the logistics
                involved, all for free, via their smart devices`}
                Tools={[
                  "MongoDB",
                  "Node",
                  "React",
                  "Redux",
                  "Express",
                  "linux",
                  "Apache2",
                ]}
                Image={"/fingertipps.png"}
                overlayId={"fff"}
                noCode={true}
                link={"https://fingertipps.store/"}
                gitHub={""}
              />
              <RightLeftShowcase
                projectName={"cowrywise clone"}
                discription={`I found the design of CowryWise to be highly impressive, which has motivated me to create a similar landing page as an homage to their aesthetic and user experience.`}
                Tools={["React", "Redux", "CSS"]}
                Image={"/cowryWise.png"}
                overlayId={"fff22"}
                noCode={false}
                link={"https://cowry-wise-clone.vercel.app/"}
                gitHub={"https://github.com/raphpumkin/cowryWiseClone"}
              />

              <LeftRightShowcase
                projectName={"GitHub Clone"}
                discription={`I have always been fascinated by the visually appealing design of the GitHub landing page, which has motivated me to create a clone of it as a demonstration of its impressive aesthetics`}
                Tools={["React", "Redux", "CSS", "Material-UI"]}
                Image={"/GitHub.png"}
                overlayId={"fdeff22"}
                noCode={false}
                link={"https://git-hub-landing-page.vercel.app/"}
                gitHub={"https://github.com/raphpumkin/GitHubLandingPage"}
              />

              <RightLeftShowcase
                projectName={"Meta's Quest pro"}
                discription={`I utilized the Apple Design System to redesign and develop the landing page of Meta’s Quest Pro, incorporating an engaging video scroll effect as an additional enhancement`}
                Tools={["React", "Redux", "Css"]}
                Image={"/metaQuest.png"}
                overlayId={"fdeededf22"}
                noCode={false}
                link={"https://meta-quest-pro-landing-page.vercel.app/"}
                gitHub={"https://github.com/raphpumkin/metaQuestProLnadinPage"}
              />

              <LeftRightShowcase
                projectName={"GitHub Clone"}
                discription={`I undertook the redesign and development of Jack Daniels landing page, incorporating captivating SVG path animations and a seamless video scroll animation to enhance its visual appeal and user experience.`}
                Tools={["React (TypeScript)", "CSS", "Figma"]}
                Image={"/jack.png"}
                overlayId={"fdefdcdc22"}
                noCode={false}
                link={"https://jack-daniel-s.vercel.app/"}
                gitHub={"https://github.com/raphpumkin/jackDaniel-s"}
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default MyWork;
