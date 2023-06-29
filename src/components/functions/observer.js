import { useEffect } from "react";
import { closeLoader, nextAnimation } from ".";

export default function InterSectionChecker(
  trigger,
  action,
  revarseAction,
  item
) {
  useEffect(() => {
    const hiddenElements1 = document.getElementById(item);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            action();
            const showPicture = () => {
              hiddenElements1?.classList.add("show");
              //   entry.target.classList.add("show");
            };
            setTimeout(showPicture, 1000);
            const undraw = () => {
              revarseAction();
            };
            setTimeout(undraw, 2000);
            setTimeout(closeLoader, 2800);
            setTimeout(nextAnimation, 3000);
          } else {
            revarseAction();
          }
        },
        { threshold: 0.2 }
      );
    });
    const hiddenElements = document.querySelectorAll("." + trigger);
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);
}
