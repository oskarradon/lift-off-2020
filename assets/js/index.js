document.addEventListener("DOMContentLoaded", function() {

  let tl1 = gsap.timeline({defaults: {delay: .5, duration: 2, opacity: 0}}),
      tl2 = gsap.timeline({defaults: {delay: .5, duration: 2, opacity: 0}});

  tl1.from("#launching", {x: -100})
     .from("#next", {x: 800}, .25)
     .from("#designers", {x: -800}, .25)
     .from("#and", {x: -1200}, .25)
     .from("#illustrators", {x: -400}, .25)
     .to("#text-container", {
        motionPath: {
          path: [{x:0, y:10}, {x:10, y:0}, {x:0, y:-10}, {x:-10, y:0}],
          // align: "self",
          // alignOrigin: [0.5, 0.5],
          autoRotate: false
        },
        inherit:false,
        duration: 5,
        yoyo: true,
        repeat: -1
      });
     // .to({},2,{});

  tl2.from("#bar1", {x: 1200})
     .from("#bar2", {x: -800}, .25)
     .from("#bar3", {x: 200}, .25)
     .from("#bar4", {x: 800}, .25)
     .from("#bar5", {x: 400}, .25)
     .to("#bars", {
        motionPath: {
          path: [{x:0, y:10}, {x:10, y:0}, {x:0, y:-10}, {x:-10, y:0}],
          // align: "self",
          // alignOrigin: [0.5, 0.5],
          autoRotate: false
        },
        inherit:false,
        duration: 5,
        yoyo: true,
        repeat: -1,
        delay: 1
      });
     // .to({},2,{});
});
