import RightLeftShowcase from "../projectShoCase/RightLeftShowcase";
import LeftRightShowcase from "../projectShoCase/leftRightShowcase";

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
                Tools={["MongoDB", "Node", "React", "Redux", "Express", "linux", "Apache2"]}
                Image={"/fingertipps.png"}
                overlayId={"fff"}
                noCode={true}
                link={"https://fingertipps.store/"}
                gitHub={""}
              />
              <RightLeftShowcase
                projectName={"cowrywise clone"}
                discription={`Fingertipps, is an all-in-one platform that facilitates
                e-commerce. Here, small businesses can create, customize and
                manage their personal e-commerce stores as well as the logistics
                involved, all for free, via their smart devices`}
                Tools={["React", "Redux", "CSS"]}
                Image={"/cowryWise.png"}
                overlayId={"fff22"}
                noCode={false}
                link={"https://cowry-wise-clone.vercel.app/"}
                gitHub={"https://github.com/raphpumkin/cowryWiseClone"}
              />

              <LeftRightShowcase
                projectName={"GitHub Clone"}
                discription={`Fingertipps, is an all-in-one platform that facilitates
                e-commerce. Here, small businesses can create, customize and
                manage their personal e-commerce stores as well as the logistics
                involved, all for free, via their smart devices`}
                Tools={["React", "Redux", "CSS", "Material-UI"]}
                Image={"/GitHub.png"}
                overlayId={"fdeff22"}
                noCode={false}
                link={"https://git-hub-landing-page.vercel.app/"}
                gitHub={"https://github.com/raphpumkin/GitHubLandingPage"}
              />

              <RightLeftShowcase
                projectName={"cowrywise clone"}
                discription={`Fingertipps, is an all-in-one platform that facilitates
                e-commerce. Here, small businesses can create, customize and
                manage their personal e-commerce stores as well as the logistics
                involved, all for free, via their smart devices`}
                Tools={["React", "Redux", "Css"]}
                Image={"/metaQuest.png"}
                overlayId={"fdeededf22"}
                noCode={false}
                link={"https://meta-quest-pro-landing-page.vercel.app/"}
                gitHub={"https://github.com/raphpumkin/metaQuestProLnadinPage"}
              />

              <LeftRightShowcase
                projectName={"GitHub Clone"}
                discription={`Fingertipps, is an all-in-one platform that facilitates
                e-commerce. Here, small businesses can create, customize and
                manage their personal e-commerce stores as well as the logistics
                involved, all for free, via their smart devices`}
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
