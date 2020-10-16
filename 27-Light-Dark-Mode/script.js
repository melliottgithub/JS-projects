const toggleSwitch = document.querySelector('input[type="checkbox"]');

//switch dynamically
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme",'dark');
} else {
    document.documentElement.setAttribute("data-theme",'light');
    
  }
}

//event listener
toggleSwitch.addEventListener("change", switchTheme);

switchTheme();
