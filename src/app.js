/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
/* eslint-disable */

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

function generateRandomCard() {
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
    } else {
      element.style.color = "black";
    }
  }

  document.querySelector("#number").innerHTML = numbersCardsRamdom;
}

window.onload = function() {
  generateRandomCard();
};

/*
let newWidth = prompt("Enter a width for your card (e.g., 200px, 50%)");
let newHeight = prompt("Enter a height for your card (e.g., 300px, 75%)");

let selectionCard = document.querySelector(".carta");
selectionCard.style.width = newWidth;
selectionCard.style.height = newHeight;*/

let buttonRandom = document.getElementById("button-random");
buttonRandom.addEventListener("click", function() {
  generateRandomCard();
});

let buttonCustom = document.getElementById("button-custom");
buttonCustom.addEventListener("click", function() {
  customSimbols();
});

function customSimbols() {
  let simbolsCards = prompt(
    "Choose a card simbol: Write: 1 for diamonds, 2 for hearts, 3 for spades and 4 for clubs)"
  );

  switch (simbolsCards) {
    case "1":
      document.querySelector(".simbols-down").innerHTML = "♦";
      document.querySelector(".simbols-up").innerHTML = "♦";
      document.querySelector(".simbols-up").style.color = "red";
      document.querySelector(".simbols-down").style.color = "red";
      customNumber();
      break;
    case "2":
      document.querySelector(".simbols-down").innerHTML = "♥";
      document.querySelector(".simbols-up").innerHTML = "♥";
      document.querySelector(".simbols-up").style.color = "red";
      document.querySelector(".simbols-down").style.color = "red";
      customNumber();
      break;
    case "3":
      document.querySelector(".simbols-down").innerHTML = "♠";
      document.querySelector(".simbols-up").innerHTML = "♠";
      document.querySelector(".simbols-up").style.color = "black";
      document.querySelector(".simbols-down").style.color = "black";
      customNumber();
      break;
    case "4":
      document.querySelector(".simbols-down").innerHTML = "♣";
      document.querySelector(".simbols-up").innerHTML = "♣";
      document.querySelector(".simbols-up").style.color = "black";
      document.querySelector(".simbols-down").style.color = "black";
      customNumber();
      break;

    default:
      alert(
        "Please enter a valid number (1, 2, 3 or 4) to select a symbol from the cards."
      );
      customSimbols();
      break;
  }
}

function customNumber() {
  let numbersCardsUs = prompt(
    "Choose a numbers card (e.g., A, 5, Q...)"
  ).toUpperCase();
  if (numbersCards.includes(numbersCardsUs)) {
    document.querySelector("#number").innerHTML = numbersCardsUs;
  } else {
    alert("Please enter a valid value (e.g., A, 5, Q...)");
    customNumber();
  }
}
