export function loader() {
   
  gsap.config({ trialWarn: false });
  let select = (s) => document.querySelector(s),
    selectAll = (s) => document.querySelectorAll(s),
    toArray = (s) => gsap.utils.toArray(s),
    mainSVG = select("#mainSVG"),
    colorArray = ["#724e91", "#e54f6d", "#0ad3ff", "#f8c630"];

  gsap.set("svg", {
    visibility: "visible",
  });
  gsap.set("polyline", {
    stroke: gsap.utils.wrap(colorArray),
  });
  gsap.set("g", {
    scale: 2,
    transformOrigin: "-100% 50%",
  });
  let mainTl = gsap.timeline({
    defaults: {
      duration: 1,
    },
    repeat: -1,
  });
  mainTl.from("polyline", {
    drawSVG: "0% 15%",
    ease: "back.in(0.5)",
    stagger: {
      each: 0.4,
      //repeat: -1,
      repeatDelay: 1,
    },
    //repeat: -1,
    //repeatDelay:
  });
  console.log(mainTl.duration());
  mainTl.to(
    "polyline",
    {
      drawSVG: "85% 100%",
      ease: "back(0.3)",
      stagger: {
        each: 0.4,
        //repeat: -1,
        repeatDelay: 1,
      },
      //repeat: -1,
    },
    0.65
  );
  console.log(mainTl.duration());
  mainTl.to(
    "g",
    {
      duration: mainTl.duration(),
      x: -160,
      ease: "none",
      //repeat: -1
    },
    0
  ); /**/
  //ScrubGSAPTimeline(mainTl)
}
