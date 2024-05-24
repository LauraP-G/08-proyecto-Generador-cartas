/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let simbolsCards = ["♦", "♥", "♠", "♣"];
let numbersCards = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Q",
  "J",
  "K"
];

window.onload = function() {
  //write your code her
  let simbolsCardsRamdom =
    simbolsCards[Math.floor(Math.random() * simbolsCards.length)];
  let numbersCardsRamdom =
    numbersCards[Math.floor(Math.random() * numbersCards.length)];

  let selectorSimbols = document.querySelectorAll(".simbols");
  for (let element of selectorSimbols) {
    element.innerHTML = simbolsCardsRamdom;
    if (simbolsCardsRamdom === "♦" || simbolsCardsRamdom === "♥") {
      element.style.color = "red";
    }
  }

  document.querySelector("#number").innerHTML = numbersCardsRamdom;
};
