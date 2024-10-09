import RightLeftShowcase from "../projectShoCase/RightLeftShowcase";
import LeftRightShowcase from "../projectShoCase/leftRightShowcase";

const MyWork = () => {
  return (
    <>
      <div style={{ marginTop: "3rem" }} className=" flex maxWidth center  ">
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
            <div style={{ marginTop: "2rem" }} className="stack gapX">
              <LeftRightShowcase
                projectName={"Fingertipps"}
                discription={`Fingertipps, is an all-in-one platform that facilitates
                e-commerce. Here, small businesses can create, customize and
                manage their personal e-commerce stores as well as the logistics
                involved, all for free, via their smart devices`}
                Tools={[
                  "Next.js",
                  "scss",
                  "Gsap",
                  "Redux",
                  "MongoDB",
                  "Node.js",
                  "Express",
                  "Nginx",
                ]}
                Image={"/fingertipps.png"}
                overlayId={"fff"}
                noCode={true}
                link={"https://fingertipps.com/"}
                gitHub={""}
              />
              {/* <RightLeftShowcase
                projectName={"The Fingertipps-APi"}
                discription={`A Headless CMS for building fully funtional e-commerce applications, eliminating the need for writing back-end code`}
                Tools={[
                  "TypeScript",
                  "Next.js",
                  "MongoDB",
                  "Node",
                  "Express",
                  "linux",
                  "Apache2",
                ]}
                Image={"/fingertipps-api.png"}
                overlayId={"fff22345"}
                noCode={true}
                link={"https://fingertipps-api-docs.vercel.app/"}
                gitHub={"https://github.com/raphpumkin/cowryWiseClone"}
              />
              <LeftRightShowcase
                projectName={"True Buy"}
                discription={`A fully functional e-commerce application built with the Fingertipps-API`}
                Tools={["React", "Redux", "CSS", "Fingertipps-API"]}
                Image={"/trueBuy.png"}
                overlayId={"fdeff22"}
                noCode={false}
                link={"https://furniture-site-chi.vercel.app/products"}
                gitHub={"https://github.com/raphOhai/furnitureSite"}
              /> */}
              <RightLeftShowcase
                projectName={"Nomba DRC landing page"}
                discription={`I developed a landing page for Nomba(DRC), following their design system, and implemented engaging animations that aligned with the design specifications.`}
                Tools={["Gatsby", "scss"]}
                Image={"/nomba.png"}
                overlayId={"fdeededf22"}
                noCode={true}
                link={"https://nomba.com/drc/"}
                // gitHub={"https://github.com/raphpumkin/metaQuestProLnadinPage"}
              />

              <LeftRightShowcase
                projectName={"Nomba Menu product page"}
                discription={`I developed the menu landing page for Nomba, adhering to their design system and incorporating dynamic animations that matched the design specifications.`}
                Tools={["Gatsby", "scss"]}
                Image={"/menu.png"}
                overlayId={"fffefefwdwdwdef"}
                noCode={true}
                link={"https://nomba.com/menu/"}
                gitHub={""}
              />
              <RightLeftShowcase
                projectName={"Jack Daniels"}
                discription={`I undertook the redesign and development of Jack Daniels landing page, incorporating captivating SVG path animations and a seamless video scroll animation to enhance its visual appeal and user experience.`}
                Tools={["React (TypeScript)", "CSS", "Figma"]}
                Image={"/jack.png"}
                overlayId={"fdefdcdc22"}
                noCode={false}
                link={"https://jack-daniel-s.vercel.app/"}
                gitHub={"https://github.com/raphpumkin/jackDaniel-s"}
              />

              <LeftRightShowcase
                projectName={"GitHub Clone"}
                discription={`I have always been fascinated by the visually appealing design of the GitHub landing page, which has motivated me to create a clone of it as a demonstration of its impressive aesthetics`}
                Tools={["React", "Redux", "CSS", "Material-UI"]}
                Image={"/GitHub.png"}
                overlayId={"fdeff2scs2"}
                noCode={false}
                link={"https://git-hub-landing-page.vercel.app/"}
                gitHub={"https://github.com/raphpumkin/GitHubLandingPage"}
              />

              <RightLeftShowcase
                projectName={"Cowrywise clone"}
                discription={`I found the design of CowryWise to be highly impressive, which has motivated me to create a similar landing page as an homage to their aesthetic and user experience.`}
                Tools={["React", "Redux", "CSS"]}
                Image={"/cowryWise.png"}
                overlayId={"fff22"}
                noCode={false}
                link={"https://cowry-wise-clone.vercel.app/"}
                gitHub={"https://github.com/raphpumkin/cowryWiseClone"}
              />

              {/* <RightLeftShowcase
                projectName={"contract @H-Major"}
                discription={`I created the website for H-Major, incorporating intuitive SVG path animations that seamlessly guide visitors as they navigate through the scrolling experience.`}
                Tools={["Next.js", "CSS"]}
                Image={"/hmajor.png"}
                overlayId={"fffdddd22"}
                noCode={true}
                link={"https://h-corp.vercel.app/"}
                // gitHub={"https://github.com/raphpumkin/cowryWiseClone"}
              /> */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default MyWork;
