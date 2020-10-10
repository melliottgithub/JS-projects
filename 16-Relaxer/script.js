const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
    text.innerHTML = "Breathe In!";
    container.classList.remove("shrink");
    container.classList.add("grow");

  setTimeout(() => {
    text.innerHTML = "Hold";

    setTimeout(() => {
      text.innerHTML = "Breathe Out!";
      container.classList.remove("grow");
      container.classList.add("shrink");
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
