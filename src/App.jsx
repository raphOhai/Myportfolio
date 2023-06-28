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

function App() {
  return (
    <>
      <div className="mainGrid1 ">
        <div className="hideMobile">
          <div className="fixedSides">
            <div className="stack gap2 fixedSidesPadding ">
              <TwitterIcon />
              <GitHib />
              <LinkedIn />
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
            <div className="stack gap2 fixedSidesPaddingRight ">
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
