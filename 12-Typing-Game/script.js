const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

//array of words
words = [
  "sigh",
  "dependent",
  "quince",
  "eight",
  "loving",
  "drag",
  "admit",
  "superficial",
];

// init word ,score,time,difficulty
let randomWord;

let score = 0;

let time = 10;

let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

//set difficulty select
difficultySelect.value = difficulty;

//focus on text right away
text.focus();

//start counting down
const timeInterval = setInterval(updateTime, 1000);

//get a word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

//add to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}
// update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

//update score
function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";

  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

//game over
function gameOver() {
  endgameEl.innerHTML = `
        <h1>Time ran out</h1>
        <p>Your final score is ${score}</p>
        <button onclick="location.reload()">Reload</button>
    `;
  endgameEl.style.display = "flex";
}

addWordToDOM();

//event listeners

//typing
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    e.target.value = "";

    if (difficulty === "hard") {
      time += 1;
    } else if (difficulty === "medium") {
      time += 2;
    } else {
      time += 3;
    }

    updateTime();
  }
});

//settings

settingsBtn.addEventListener("click", () => {
  settings.classlist.toggle("add");
});

//settings select
settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
});
