const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

const DARK_THEME = "dark";
const LIGHT_THEME = "light";

//Color mode dark or light images
function imagesMode(colorMode) {
  image1.src = `img/undraw_proud_coder_${colorMode}.svg`;
  image2.src = `img/undraw_feeling_proud_${colorMode}.svg`;
  image3.src = `img/undraw_conceptual_idea_${colorMode}.svg`;
}
//Toggle color theme mode DARK_THEME or LIGHT_MODE
function toggleThemeMode(isDark) {
  nav.style.backgroundColor = isDark
    ? "rgba(0,0,0,.5)"
    : "rgba(255,255,255,.5)";
  textBox.style.backgroundColor = isDark
    ? "rgba(255,255,255,.5)"
    : "rgba(0,0,0,.5)";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");

  isDark ? imagesMode(DARK_THEME) : imagesMode(LIGHT_THEME);
}
//set attribute [data-theme = 'DARK_THEME' or 'LIGHT']
function dataTheme(theme, boolean) {
  document.documentElement.setAttribute("data-theme", `${theme}`);
  localStorage.setItem("theme", `${theme}`);
  toggleThemeMode(boolean);
}
//switch dynamically
function switchTheme(e) {
  if (e.target.checked) {
    dataTheme(DARK_THEME, true);
  } else {
    dataTheme(LIGHT_THEME, false);
  }
}
//check local storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === DARK_THEME) {
    toggleSwitch.checked = true;
    toggleThemeMode(DARK_THEME, true);
  }
}
//event listener
toggleSwitch.addEventListener("change", switchTheme);
