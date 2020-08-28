document.addEventListener("DOMContentLoaded", function() {
  let w = window.innerWidth;
  animate(w);
});

function animate(width) {
  if (width >= 800) {
    let tl1 = gsap.timeline({defaults: {delay: .5, duration: 2, opacity: 0}}),
    tl2 = gsap.timeline({defaults: {delay: .5, duration: 2, opacity: 0}});

    tl1.from("#launching", {x: -100})
    .from("#next", {x: 800}, .25)
    .from("#designers", {x: -800}, .25)
    .from("#and", {x: -1200}, .25)
    .from("#illustrators", {x: -400}, .25)

    tl2.from("#bar1", {x: 1200})
    .from("#bar2", {x: -800}, .25)
    .from("#bar3", {x: 200}, .25)
    .from("#bar4", {x: 800}, .25)
    .from("#bar5", {x: 400}, .25)

    gsap.from("#bar1", {backgroundPosition: "2247px 0px", duration: 30, ease: Linear.easeNone, repeat: -1})
    gsap.from("#bar2", {backgroundPosition: "-2247px 2000px", duration: 30, ease: Linear.easeNone, repeat: -1})
    gsap.from("#bar3", {backgroundPosition: "4000px 0px", duration: 30, ease: Linear.easeNone, repeat: -1})
    gsap.from("#bar4", {backgroundPosition: "-2247px 1000px", duration: 30, ease: Linear.easeNone, repeat: -1})
    gsap.from("#bar5", {backgroundPosition: "2247px 2000px", duration: 30, ease: Linear.easeNone, repeat: -1})
  }
}
