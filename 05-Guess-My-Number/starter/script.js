"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "correct number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  // Retrieve the value of the input field with class "guess"
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct number!";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is wrong (either too high or too low)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // Check if the guess is too high or too low and display the appropriate message
      if (guess > secretNumber) {
        document.querySelector(".message").textContent = "Too high!";
      } else {
        document.querySelector(".message").textContent = "Too low!";
      }

      // Decrease the score
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // When score is 0 or less, the game is lost
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
});
