export const hoverEvent = (slide, innerText) => {
  const slider = document.getElementById(slide);
  const text = document.getElementById(innerText);

  slider?.classList.add("right0");
  text?.classList.replace("default", "showText");
};

export const leveEvent = (slide, innerText) => {
  const slider = document.getElementById(slide);
  const text = document.getElementById(innerText);

  slider?.classList.remove("right0");
  text?.classList.add("default");
};

export const hideOverLay = (overlay) => {
  const Overlay = document.getElementById(overlay);
  Overlay?.classList.add("Hide");
};

export const showOverLay = (overlay) => {
  const Overlay = document.getElementById(overlay);
  Overlay?.classList.remove("Hide");
};

export const handleClickScroll = (item) => {
  const element = document.getElementById(item);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const drawLogo = () => {
  const element = document.getElementById("path1");
  element.classList.add("drawPath1");
};

export const UndrawLogo = () => {
  const element = document.getElementById("path1");
  element.classList.replace("drawPath1", "path1");
};

export const closeLoader = () =>{
  const element = document.getElementById("loaderContainer");
  element.classList.add("remove")
}
