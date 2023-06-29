import Logo from "../../assets/logo";
import Button from "../Btn";
import { handleClickScroll, navAnimation } from "../functions";
import LogoBox from "../logo/log";
import LogoBox2 from "../logo/logo";

const Nav = () => {
  return (
    <>
      <div className="fixedHeader glasify">
        <div className="headerContainer headerPadding sectionPadding">
          <div className="flex center1">
            <div
              id="logo"
              style={{ marginTop: ".6rem" }}
              className="flex center"
            >
              <LogoBox2 />
            </div>
          </div>
          <div className="headerContent gap2 ">
            <div
              onClick={() => handleClickScroll("about")}
              className="flex gap center hideTabAndMobileFlex pointer SlideUp2 group"
            >
              <div className="">
                <p className="greenText">01.</p>
              </div>
              <div style={{ marginTop: "-.2rem" }}>
                <p className="slateText">About</p>
              </div>
            </div>

            <div
              onClick={() => handleClickScroll("work")}
              className="flex gap center hideTabAndMobileFlex pointer SlideUp2 group"
            >
              <div className="">
                <p className="greenText">02.</p>
              </div>
              <div style={{ marginTop: "-.2rem" }}>
                <p className="slateText">Work</p>
              </div>
            </div>
            <div
              onClick={() => handleClickScroll("contact")}
              className="flex gap center hideTabAndMobileFlex pointer SlideUp2 group"
            >
              <div className="">
                <p className="greenText">03.</p>
              </div>
              <div style={{ marginTop: "-.2rem" }}>
                <p className="slateText">Contact</p>
              </div>
            </div>
            {/* <div className="flex gap center SlideUp2 group">
              <Button
                slide={"btnsld45"}
                text={"btntxt45"}
                displayText="resume"
              />
            </div> */}
            <div
              onClick={() => navAnimation()}
              className="dashContainer hideDeskTop"
            >
              <div className="dashContainer rotateDashContaine transition"></div>
              <div className="dashContainer rotateDashContaine transition "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
