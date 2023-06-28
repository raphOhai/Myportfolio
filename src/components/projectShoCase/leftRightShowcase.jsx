import React from "react";
import Open from "../../assets/open";
import GitHib from "../../assets/gitHib";
import { hideOverLay, showOverLay } from "../functions";

const LeftRightShowcase = ({
  projectName,
  discription,
  Tools,
  Image,
  overlayId,
  noCode,
  link,
  gitHub,
}) => {
  return (
    <div className="grid2">
      <div className="hideTabAndMobile">
        <div className="relative ">
          <img className="responsive" src={Image} alt="" />
          <div className="overFlowHidden">
            <div
              onMouseOver={() => hideOverLay(overlayId)}
              onMouseLeave={() => showOverLay(overlayId)}
              id={overlayId}
              className="imageOverlay transition2 pointer"
            ></div>
          </div>
        </div>
      </div>
      <div className="hideTabAndMobile">
        <div className="stack gap2 ">
          <div className="stack gap End">
            <p className="featuredText">Featured Project</p>

            <h1 className="lightSlateText headingText">{projectName}</h1>
          </div>

          <div className="discriptBox">
            <p className="textAlignEnd slateText ">{discription}</p>
          </div>

          <div className="flex gap2 End">
            {Tools.map((m) => (
              <p className="slateText">{m}</p>
            ))}
          </div>
          <div className="flex2  End">
            <a href={link} className="pointer">
              <Open />
            </a>

            {noCode ? (
              ""
            ) : (
              <a href={gitHub} className="pointer">
                <GitHib />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="showCase relative">
        <img src={Image} alt="" />
        <div className="stack gap3 hideDeskTopFlex padding1 ">
          <div className="stack gap Start">
            <p className="featuredText">Featured Project</p>
            <h1 className="lightSlateText headingText">{projectName}</h1>
          </div>

          <div className="">
            <p className="textAlignStart slateText ">{discription}</p>
          </div>

          <div className="flex2 Start">
            {Tools.map((m) => (
              <p className="slateText">{m}</p>
            ))}
          </div>
          <div className="flex gap2 Start">
            {noCode ? (
              ""
            ) : (
              <a href={gitHub} className="pointer">
                <GitHib />
              </a>
            )}
            <a href={link} className="pointer" >
              <Open />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftRightShowcase;
