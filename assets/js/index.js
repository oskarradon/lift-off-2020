let tl1 = gsap.timeline(),
    tl2 = gsap.timeline();

tl1.from("#launching", {duration: 2, x: -100});
tl1.from("#next", {duration: 2, x: 800}, .25);
tl1.from("#designers", {duration: 2, x: -800}, .25);
tl1.from("#and", {duration: 2, x: -1200}, .25);
tl1.from("#illustrators", {duration: 2, x: -400}, .25);


tl2.from("#bar1", {duration: 2, x: -1200});
tl2.from("#bar2", {duration: 2, x: -800}, .25);
tl2.from("#bar3", {duration: 2, x: 200}, .25);
tl2.from("#bar4", {duration: 2, x: -800}, .25);
tl2.from("#bar5", {duration: 2, x: 400}, .25);
