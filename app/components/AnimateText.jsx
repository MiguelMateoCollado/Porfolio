"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
const AnimateText = () => {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(
        [
          "#char1",
          "#char2",
          "#char3",
          "#char4",
          "#char5",
          "#char6",
          "#char7",
          "#char8",
          "#char9",
          "#char10",
          "#char11",
          "#char12",
          "#char13",
          "#char14",
          "#char15",
          "#char16",
          "#char17",
          "#char18",
        ],
        {
          delay: 2,
          opacity: 0,
          yPercent: 100,
          stagger: 0.075,
        }
      ).to(
        [
          "#char1",
          "#char2",
          "#char3",
          "#char4",
          "#char5",
          "#char6",
          "#char7",
          "#char8",
          "#char9",
          "#char10",
          "#char11",
          "#char12",
          "#char13",
          "#char14",
          "#char15",
          "#char16",
          "#char17",
          "#char18",
        ],
        {
          opacity: 1,
          color: "crimson",
          stagger: 0.075,
        }
      );
    }, comp);

    return () => ctx.revert();
  });
  return (
    <h2
      className=" md:text-3xl max-md:text-3xl max-md:text-center antialiased text-[#FBFAF8] font-extrabold"
      ref={comp}
    >
      {" "}
      <span id="word">
        <span className="tracking-wide">
          <span id="char1">F</span>
          <span id="char2">u</span>
          <span id="char3">l</span>
          <span id="char4">l</span> <span id="char5">S</span>
          <span id="char6">t</span>
          <span id="char7">a</span>
          <span id="char8">c</span>
          <span id="char9">k</span>
        </span>
        <br />
        <span className="max-md:text-4xl">
          <span id="char10">D</span>
          <span id="char11">e</span>
          <span id="char12">v</span>
          <span id="char13">e</span>
          <span id="char14">l</span>
          <span id="char15">o</span>
          <span id="char16">p</span>
          <span id="char17">e</span>
          <span id="char18">r</span>
        </span>
      </span>
    </h2>
  );
};

export default AnimateText;
