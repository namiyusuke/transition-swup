import Swup from '@swup/astro';
  import { gsap } from "gsap";
const path1 = document.querySelector(".transition-path1");
const path2 =  document.querySelector(".transition-path2");
const path3 =  document.querySelector(".transition-path3");
const path_mask =  document.querySelector("#clip-path-nav-sp path");
const svg_in1 = "M 0 0 V 0 Q 50 0 100 0 V 0 z";
const svg_in2 = "M 0 0 V 70 Q 50 110 100 70 V 0 z";
const svg_in3 = "M 0 0 V 100 Q 50 100 100 100 V 0 z";
const svg_out1 = "M 0 0 V 100 Q 50 100 100 100 V 0 z";
const svg_out2 = "M 0 0 V 70 Q 50 110 100 70 V 0 z";
const svg_out3 = "M 0 0 V 0 Q 50 0 100 0 V 0 z";

// const svg_outa = "M 0 100 V 150 Q 50 50 100 150 V 100 z";
const svg_outb = "M 0 100 V 0 Q 50 -1 100 0 V 100 z";
const tl1 = gsap.timeline({delay: 0.25});
const tl2 = gsap.timeline({delay: .5});
const tl3 = gsap.timeline({delay: .75});
const tl4 = gsap.timeline({delay: 0.25});
const tl5 = gsap.timeline({delay: .5});
const tl6 = gsap.timeline({delay: .75});
const tl = gsap.timeline();
function startLoading() {
tl1.set(path1, {attr: {d: svg_in1}})
  .to(path1, {duration: 1, attr: {d: svg_in2}, ease: "power3.inOut"})
  .to(path1, {duration: 1, attr: {d: svg_in3}, ease: "power3.inOut"});
tl2.set(path2, {attr: {d: svg_in1}})
  .to(path2, {duration: 1, attr: {d: svg_in2}, ease: "power3.inOut"})
  .to(path2, {duration: 1, attr: {d: svg_in3}, ease: "power3.inOut"});
tl3.set(path3, {attr: {d: svg_in1}})
  .to(path3, {duration: 1, attr: {d: svg_in2}, ease: "power3.inOut"})
  .to(path3, {duration: 1, attr: {d: svg_in3}, ease: "power3.inOut"})
}
;
function endLoading() {
tl.set(path1, {attr: {d: svg_out1}})
  .to(path1, {duration: 1, attr: {d: svg_out2 }, ease: "power3.inOut"})
  .to(path1, {duration: 1, attr: {d: svg_out3}, ease: "power3.inOut"});
tl5.set(path2, {attr: {d: svg_out1}})
  .to(path2, {duration: 1, attr: {d: svg_out2 }, ease: "power3.inOut"})
  .to(path2, {duration: 1, attr: {d: svg_out3}, ease: "power3.inOut"});
tl4.set(path3, {attr: {d: svg_out1}})
  .to(path3, {duration: 1, attr: {d: svg_out2 }, ease: "power3.inOut"})
  .to(path3, {duration: 1, attr: {d: svg_out3}, ease: "power3.inOut"})
}
;
function Loading2() {
tl.set(path1, {attr: {d: svg_in3}})
  .to(path1, {duration: 1, attr: {d: svg_outb }, ease: "power3.inOut"})
;
tl.set(path2, {attr: {d:svg_in3 }})
  .to(path2, {duration: 1, attr: {d: svg_outb }, ease: "power3.inOut"})
;
tl.set(path3, {attr: {d: svg_in3 }})
  .to(path3, {duration: 1, attr: {d: svg_outb }, ease: "power3.inOut"})
;
}
// startLoading();
// setTimeout(()=>{
//  Loading2();
// },5000);
const F= "M 0 100 V 150 Q  50 50 100 150 V 100 z";
const E= "M 0 100 V 0 Q 50 -1 100 0 V 100 z";
const G= "M 0 0 V 150 Q 50 50 100 150 V 0 z";
const H= "M 0 0 V 0 Q 50 0 100 0 V 0 z";
 function startLoading1() {
tl1.set(path1, {attr: {d: F}})
  .to(path1, {duration: 1, attr: {d: E}, ease: "power3.inOut"})
tl2.set(path2, {attr: {d: F}})
  .to(path2, {duration: 1, attr: {d:E}, ease: "power3.inOut"})
tl3.set(path3, {attr: {d: F}})
  .to(path3, {duration: 1, attr: {d:E}, ease: "power3.inOut"})
}
;
function startLoading2() {
tl1.set(path1, {attr: {d: G}})
  .to(path1, {duration: 1, attr: {d: H}, ease: "power3.inOut"})
tl2.set(path2, {attr: {d: G}})
  .to(path2, {duration: 1, attr: {d: H}, ease: "power3.inOut"})
tl3.set(path3, {attr: {d: G}})
  .to(path3, {duration: 1, attr: {d: H}, ease: "power3.inOut"})
}
const swup = new Swup();
export default function actionIn() {
  swup.hooks.on('enable', () => {
startLoading1()
});
 }
