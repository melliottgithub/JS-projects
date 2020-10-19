//selector
getID = (ID) => document.getElementById(ID);
const menuBars = getID("menu-bars");
const overlay = getID("overlay");
const nav1 = getID("nav-1");
const nav2 = getID("nav-2");
const nav3 = getID("nav-3");
const nav4 = getID("nav-4");
const nav5 = getID("nav-5");
const navArray = [nav1, nav2, nav3, nav4, nav5];
//functions
function slideInOut(direction1, direction2, position1, position2) {
  overlay.classList.replace(
    `overlay-slide-${position1}`,
    `overlay-slide-${position2}`
  );
  navArray.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
}
function toggleNav() {
  menuBars.classList.toggle("change");
  overlay.classList.toggle("overlay-active");
  overlay.classList.contains("overlay-active")
    ? slideInOut("out", "in", "left", "right")
    : slideInOut("in", "out", "right", "left");
}
//event listeners
menuBars.addEventListener("click", toggleNav);
navArray.forEach((nav) => nav.addEventListener("click", toggleNav));
