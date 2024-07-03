import gsap from "gsap";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
export const animatePageIn = () => {
  const slideOne = document.getElementById("slide-1");
  const slideTwo = document.getElementById("slide-2");
  const slideThree = document.getElementById("slide-3");

  if (slideOne && slideThree && slideTwo) {
    const tl = gsap.timeline();

    tl.set([slideOne, slideTwo, slideThree], {
      xPercent: 0,
    }).to([slideOne, slideTwo, slideThree], {
      xPercent: 100,
      stagger: 0.125,
    });
  }
};

export const animatePageOut = (href, router) => {
  const slideOne = document.getElementById("slide-1");
  const slideTwo = document.getElementById("slide-2");
  const slideThree = document.getElementById("slide-3");

  if (slideOne && slideThree && slideTwo) {
    const tl = gsap.timeline();
    tl.set([slideOne, slideTwo, slideThree], {
      xPercent: 100,
    }).to([slideOne, slideTwo, slideThree], {
      xPercent: 0,
      stagger: 0.2,
      onComplete: () => {
        router.push(href);
      },
    });
  }
};

