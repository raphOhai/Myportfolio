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

export const closeLoader = () => {
  const element = document.getElementById("loaderContainer");
  element.classList.add("remove");
};

export const nextAnimation = () => {
  const nextAnimationGroup = document.querySelectorAll(".SlideUp2");
  nextAnimationGroup.forEach((m) => m.classList.add("show"));
  sideAnimation();
};

export const sideAnimation = () => {
  const element1 = document.getElementById("socials");
  const element2 = document.getElementById("email");
  const showElement1 = () => {
    element1.classList.add("show");
  };
  const showElement2 = () => {
    element2.classList.add("show");
  };
  setTimeout(showElement1, 1000);
  setTimeout(showElement2, 1500);
};

export const navAnimation = () => {
  const dashes = document.querySelectorAll(".dashContainer");
  dashes.forEach((m) => {
    if (m.classList.contains("rotateDashContainer")) {
      m.classList.remove("rotateDashContainer");
      hideMobileNav();
    } else {
      m.classList.add("rotateDashContainer");
      showMobileNav();
    }
  });
};

const showMobileNav = () => {
  const mobilenav = document.querySelector(".mobileNaveContainer");
  const navContent = document.getElementById("navContent");
  mobilenav.classList.add("drawNav");
  navContent.classList.remove("remove");
};

export const hideMobileNav = () => {
  const mobilenav = document.querySelector(".mobileNaveContainer");
  const navContent = document.getElementById("navContent");
  mobilenav.classList.remove("drawNav");

  const hideContent = () => {
    navContent.classList.add("remove");
  };
  setTimeout(hideContent, 500);
};
