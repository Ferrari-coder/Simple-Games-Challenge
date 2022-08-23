"use strict";
const scoreTotal1 = document.querySelector(".player1 .zero");
const scoreTotal2 = document.querySelector(".player2 .zero");
const currentScore1 = document.querySelector("#player1-current");
const currentScore2 = document.querySelector("#player2-current");
const rollDice = document.querySelector(".btn-roll");
const imageBox = document.querySelector(".img-box");
const image = document.querySelector(".img-box img");

let score = 0
rollDice.addEventListener("click",function () {
    let randomNumber = Math.trunc(Math.random()* 6 + 1)
    // console.log(randomNumber)
    image.src=`./image/dice-${randomNumber}.png` 
    imageBox.classList.remove("hidden")
    score += randomNumber
    console.log(score)
    currentScore1 = score
})

