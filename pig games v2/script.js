"use strict";
const scoreTotal1 = document.querySelector(".player1 .zero");
const scoreTotal2 = document.querySelector(".player2 .zero");
const currentScore1 = document.querySelector("#player1-current");
const currentScore2 = document.querySelector("#player2-current");
const rollDice = document.querySelector(".btn-roll");
const holdButton = document.querySelector(".btn-hold");
const imageBox = document.querySelector(".img-box");
const image = document.querySelector(".img-box img");
const newButton = document.querySelector(".btn-new");
let activePlayer = 1;

//default values
imageBox.classList.add("hidden");
currentScore1.textContent = 0;
currentScore2.textContent = 0;
let totalScore = [0, 0, 0];

console.log(totalScore);
let score = 0;
rollDice.addEventListener("click", function () {
  if (totalScore[1] < 100 && totalScore[2] < 100) {
    let randomNumber = Math.trunc(Math.random() * 6 + 1);
    // console.log(randomNumber)
    image.src = `./image/dice-${randomNumber}.png`;
    imageBox.classList.remove("hidden");

    if (randomNumber !== 1) {
      score += randomNumber;
      console.log(score);
      document.querySelector(`#player${activePlayer}-current`).textContent =
        score;
    } else {
      //if dice is 1 switch player
      // document.querySelector(`.player${activePlayer} .zero`).textContent=score

      score = 0;
      document.querySelector(`#player${activePlayer}-current`).textContent =
        score;
      document
        .querySelector(`.player${activePlayer}`)
        .classList.toggle("player-active");

      activePlayer = activePlayer === 1 ? 2 : 1;
      document
        .querySelector(`.player${activePlayer}`)
        .classList.toggle("player-active");
    }
  }
});

holdButton.addEventListener("click", () => {
  // adding current score to total score
  totalScore[activePlayer] += score;
  document.querySelector(`.player${activePlayer} .zero`).textContent =
    totalScore[activePlayer];
  //declaring winner
  if (totalScore[activePlayer] >= 100) {
    document.querySelector(".player-active").style.background = "pink";
    imageBox.classList.add("hidden");
  } else {
    // switch active player
    score = 0;
    document.querySelector(`#player${activePlayer}-current`).textContent =
      score;

    document
      .querySelector(`.player${activePlayer}`)
      .classList.toggle("player-active");

    activePlayer = activePlayer === 1 ? 2 : 1;
    document
      .querySelector(`.player${activePlayer}`)
      .classList.toggle("player-active");
  }
});

newButton.addEventListener("click", function () {
  score = 0;
  activePlayer = 1;
  totalScore = [0, 0, 0];
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  scoreTotal1.textContent = 0;
  scoreTotal2.textContent = 0;
  document.querySelector(".player-active").style.background = " rgba(255, 255, 255, 0.2)";
  imageBox.classList.add("hidden");
  document.querySelector(`.player1`).classList.add("player-active");

  document.querySelector(`.player2`).classList.remove("player-active");
});
