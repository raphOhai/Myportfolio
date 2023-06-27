import Logo from "../../assets/logo";
import LogoBox from "../logo/log";

const Nav = () => {
  return (
    <>
      <div className="fixedHeader glasify">
        <div className="headerContainer headerPadding sectionPadding">
          <div className="flex center1">
            <div style={{marginTop:".6rem"}} className="flex center">
              <LogoBox />
            </div>
          </div>
          <div className="headerContent gap2 ">
            <div className="flex gap center">
              <div className="">
                <p className="greenText">01.</p>
              </div>
              <div style={{ marginTop: "-.2rem" }}>
                <p className="slateText">About</p>
              </div>
            </div>
            <div className="flex gap center">
              <div className="">
                <p className="greenText">02.</p>
              </div>
              <div style={{ marginTop: "-.2rem" }}>
                <p className="slateText">Experience</p>
              </div>
            </div>
            <div className="flex gap center">
              <div className="">
                <p className="greenText">03.</p>
              </div>
              <div style={{ marginTop: "-.2rem" }}>
                <p className="slateText">Work</p>
              </div>
            </div>
            <div className="flex gap center">
              <div className="">
                <p className="greenText">03.</p>
              </div>
              <div style={{ marginTop: "-.2rem" }}>
                <p className="slateText">Contact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
