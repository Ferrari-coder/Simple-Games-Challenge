"use strict";
let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
console.log(randomNumber);
// document.querySelector(".box h1").textContent = randomNumber;
const checkerId = document.getElementById("checker");
const theScoreId = document.getElementById("thescore");
const theHighScoreId = document.getElementById("thehighscore");
const checkButton = document.querySelector(".checkers");
const replayButton = document.querySelector(".again");
//The working functions
checkButton.addEventListener("click", function () {
  let inputId = Number(document.querySelector("#fnumber").value);
  console.log(inputId);
  if (!inputId) {
    checkerId.textContent = "no input⛔";
  } else if (inputId > 20) {
    checkerId.textContent = "Enter a number between 1 and 20🙄😒";
  } else if (inputId === randomNumber) {
    checkerId.textContent = "Correct Number🎉🥇";
    if (score > highScore) {
      highScore = score;
    }
    theHighScoreId.textContent = highScore;
    document.querySelector(".box h1").textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "#7fffd4";
  } else if (inputId > randomNumber && score > 1) {
    score -= 1;
    theScoreId.textContent = score;
    checkerId.textContent = "📈Too high";
  } else if (inputId < randomNumber && score > 1) {
    score -= 1;
    theScoreId.textContent = score;
    checkerId.textContent = "📉Too low";
  } else {
    score = 0;
    theScoreId.textContent = score;
    checkerId.textContent = "Sorry you lose. Try again 😆😆";
  }
});

replayButton.addEventListener("click", function () {
  checkerId.textContent = "Start guessing....";
  score = 20;
  theScoreId.textContent = score;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".box h1").textContent = "?";
  document.querySelector("body").style.backgroundColor = "antiquewhite";
})