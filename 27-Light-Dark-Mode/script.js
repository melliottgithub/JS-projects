const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

function imagesMode(colorMode) {
  image1.src = `img/undraw_proud_coder_${colorMode}.svg`;
  image2.src = `img/undraw_feeling_proud_${colorMode}.svg`;
  image3.src = `img/undraw_conceptual_idea_${colorMode}.svg`;
}
//dark Mode
function darkMode() {
  nav.style.backgroundColor = "rgba(0,0,0,.5)";
  textBox.style.backgroundColor = "rgba(255,255,255,.5)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  imagesMode("dark");
}
//light Mode
function lightMode() {
  nav.style.backgroundColor = "rgba(255,255,255,.5)";
  textBox.style.backgroundColor = "rgba(0,0,0,.5)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  imagesMode("light");
}

//switch dynamically
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

//check local storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  }
}
//event listener
toggleSwitch.addEventListener("change", switchTheme);
