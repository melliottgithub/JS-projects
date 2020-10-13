const bannerBtn = document.querySelector(".banner-btn");
const closeBtn = document.querySelector(".x-btn");

bannerBtn.addEventListener("click", () => {
  const banner = document.querySelector(".banner");
  const form = document.querySelector(".form-container");
  const bgContainer = document.querySelector(".container");

  banner.style.display = "none";
  form.style.cssText = "opacity: 1; visibility: visible";
  bgContainer.style.background = "#cc683c";
});
closeBtn.addEventListener("click", () => {
  const banner = document.querySelector(".banner");
  const form = document.querySelector(".form-container");
  const bgContainer = document.querySelector(".container");

  banner.style.display = "flex";
  form.style.cssText = "opacity: 0; visibility: hidden";
  bgContainer.style.cssText =
    "background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(/22-Sign-Up-Form/images/bg1.jpeg) center, no-repeat; background-size: cover";
});
