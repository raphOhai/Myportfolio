import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Abouts from "./components/aboutme";
import MyWork from "./components/works/myWork";
import Open from "./assets/open";
import GitHib from "./assets/gitHib";
import TwitterIcon from "./assets/twitter";
import LinkedIn from "./assets/LinkedIn";
import Footer from "./components/footer";
import Loader from "./components/loader";
import MobileNave from "./components/mobileNav";

function App() {
  return (
    <>
      <Loader />
      <MobileNave />
      <div className="mainGrid1 ">
        <div className="hideMobile">
          <div className="fixedSides">
            <div
              id="socials"
              className="stack gap2 fixedSidesPadding sideSlide2"
            >
              <a href="https://twitter.com/raph_ohai">
                <TwitterIcon />
              </a>
              <a href="https://github.com/raphOhai/host">
                <GitHib />
              </a>
              <a href="https://www.linkedin.com/in/raphael-ohai-micheal/">
                <LinkedIn />
              </a>
              <div className="horizontalDash"></div>
            </div>
          </div>
        </div>
        <div className="stack gapX">
          <Nav />
          <Hero />
          <div id="about">
            <div style={{ marginTop: "8rem" }}>
              <Abouts />
            </div>
          </div>

          <div id="work">
            <div style={{ marginTop: "8rem" }}>
              <MyWork />
            </div>
          </div>
          <div id="contact">
            <Footer />
          </div>
        </div>
        <div className="hideMobile">
          <div className="fixedSides">
            <div
              id="email"
              className="stack gap2 fixedSidesPaddingRight sideSlide2"
            >
              <div className="">
                <p className="email horizontalText">raphaelohai5@gmail.com</p>
              </div>

              <div className="horizontalDash"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
