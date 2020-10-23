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

/* Conditions */
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
/* Variables */
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
/* Functions */
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
    if (scores[activePlayer] >= 5) {
      playing = false;
      query(`.player--${activePlayer}`).classList.add("player--winner");
      query(`.player--${activePlayer}`).classList.remove("player--active");
      diceEl.classList.add("hidden");
    } else {
        switchPlayer();
    }
}
});
btnNew.addEventListener("click", () => {
    diceEl.classList.add("hidden");
    playing = true;
    query(`.player--${activePlayer}`).classList.remove("player--winner");
    query(`.player--${activePlayer}`).classList.remove("player--active");
    query(`.player--0`).classList.add("player--active");
    score = [0, 0]
    
    
});
