import Parallax, { ParallaxElement } from "./modules/parallax.src.js";
new Parallax({ parallaxContainerSelector: "body", minWorkWidth: 768 }, new ParallaxElement({
  selectorOrElement: "#background",
  parallaxCoeffX: 0.03,
  parallaxCoeffY: 0.03,
  reverseMode: true
}));
