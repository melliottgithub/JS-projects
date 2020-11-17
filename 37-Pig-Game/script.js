"use strict";
//selectors
const query = (classSelector) => document.querySelector(classSelector);
const getID = (IDSelector) => document.getElementById(IDSelector);
const score0El = getID("score--0");
const score1El = getID("score--1");
const current0El = getID("current--0");
const current1El = getID("current--1");
const player0El = query(".player--0");
const player1El = query(".player--1");
const diceEl = query(".dice");
const btnNew = query(".btn--new");
const btnRoll = query(".btn--roll");
const btnHold = query(".btn--hold");

/* Variables */
let scores;
let currentScore;
let activePlayer;
let playing;
/* Functions */
const init = function () {
  /* Conditions */
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  /* Variables */
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();
function switchPlayer() {
  getID(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}
/* Event Listeners */
btnRoll.addEventListener("click", () => {
  if (playing) {
    const diceNum = 1 + Math.trunc(Math.random() * 6);
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${diceNum}.png`;
    if (diceNum !== 1) {
      currentScore += diceNum;
      getID(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener("click", () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    getID(`score--${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      query(`.player--${activePlayer}`).classList.add("player--winner");
      query(`.player--${activePlayer}`).classList.remove("player--active");
      diceEl.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener("click", init);
