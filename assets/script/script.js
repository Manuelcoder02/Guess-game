"use strict";

// Easy mode button

// storing the modes button in a variable
const easyModeEL = document.querySelector(".easy");
const normalModeEL = document.querySelector(".normal");
const advancedModeEL = document.querySelector(".advanced");
const howToPlay = document.querySelector(".btn--help");
const checkEL = document.querySelector(".guess");
const againEL = document.querySelector(".again");

// storing some elements in a variable

const containerPage = document.querySelectorAll(".container");

// storing the welcome page element in a variable
const welcomePage = document.querySelector(".welcome-page");
const modeContainer = document.querySelector(".modes");
const helpText = document.querySelector(".help--text");

// storing the text elements in a variable
const modeTitle = document.querySelector(".mode-title");
const betweenNumber = document.querySelector(".number--between");
const secretNumberEL = document.querySelector(".secret-number");
const hint = document.querySelector(".hint");
const scoreEL = document.querySelector(".score");
const highScoreEL = document.querySelector(".highscore");
const highScoreInfo = document.querySelector(".highscore-info");
const modalContent = document.querySelector(".modal-content");

// Storing the modals in variable
const modalEL = document.querySelector(".modal");
const closeModalEL = document.querySelector(".close-modal");
const overlayEL = document.querySelector(".overlay");

// storing the again functionality in a function

const againFunction = function () {
  modeContainer.classList.remove("background-color");
  checkEL.classList.remove("background-color");
  secretNumberEL.textContent = "?";
  hint.style.color = "#000";
  hint.textContent = "Choose a number";
  scoreEL.textContent = score;

  document.querySelector(".guess-number").value = "";
};

// storing the game modes functionality in a function
const gameFunctionality = function () {
  checkEL.addEventListener("click", function () {
    // converting the input into number
    const guess = Number(document.querySelector(".guess-number").value);
    if (!guess) {
      // if no number is inputted
      hint.textContent = "Please input a number 🙏";
      // when guess is wrong
    } else if (guess < secretNumber) {
      if (score > 1) {
        score--;
        scoreEL.textContent = score;
        hint.textContent = "Hint - It is too low, try again 😟";
      } else {
        lostGame();
      }
    } else if (guess > secretNumber) {
      if (score > 1) {
        score--;
        scoreEL.textContent = score;
        hint.textContent = "Hint - It is too high, try again 😟";
      } else {
        lostGame();
      }
    } else if (guess === secretNumber) {
      secretNumberEL.textContent = secretNumber;
      modeContainer.classList.add("background-color");
      checkEL.classList.add("background-color");
      hint.style.color = "#fff";
      hint.textContent = "Correct Number!🎉";
      modalEL.classList.remove("hidden");
      overlayEL.classList.remove("hidden");

      if (score > highScore) {
        highScore = score;
        highScoreEL.textContent = highScore;
        highScoreInfo.textContent = `Your current highscore is ${highScore}`;
      }
    }
  });
};

const closeModal = function () {
  modalEL.classList.add("hidden");
  overlayEL.classList.add("hidden");
};
closeModalEL.addEventListener("click", closeModal);
overlayEL.addEventListener("click", closeModal);
// state variables
let timerNumber = 5;
let score = 30;
let highScore = 0;

// storing the lost gamd area into function
const lostGame = function () {
  modalEL.classList.remove("hidden");
  overlayEL.classList.remove("hidden");
  scoreEL.textContent = 0;
  hint.textContent = "Oops! You lost the game!😭, try again.";
  modalContent.textContent = "Oops! You lost the game!😭, try again.";

  closeModal();
};

// storing the add/removing of the hidden class in both welcome and mode page into a function

const toggleHidden = function () {
  welcomePage.classList.toggle("hidden"); // add or remove the hidden class in the ecome page
  modeContainer.classList.toggle("hidden"); // add/removve the hidden class in the mode container
};

// handling the click event of the easy mode button

// creating a random number from 1 to 15 for easy mode
let secretNumber = Math.trunc(Math.random() * 15) + 1;

easyModeEL.addEventListener("click", function () {
  toggleHidden();
  //  secretNumberEL.textContent = secretNumber;

  gameFunctionality();

  //for (timerNumber = 0; timerNumber < 5; timerNumber--);
  // document.querySelector('.seconds').textContent = `${timerNumber} seconds`;

  // Again functionality for easy
  againEL.addEventListener("click", function () {
    secretNumber = Math.trunc(Math.random() * 15) + 1;
    score = 30;
    againFunction();
  });
});

// handling the click event of the normal mode button

normalModeEL.addEventListener("click", function () {
  // creating a random number from 1 to 15 for normal mode
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreEL.textContent = score;
  toggleHidden();
  modeTitle.textContent = "Normal Mode";
  betweenNumber.textContent =
    "Choose a number between 1 and 20. You have 20 guesses.";

  gameFunctionality();

  // Again functionality for Normal mode

  againEL.addEventListener("click", function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    againFunction();
  });
});

// handling the click event of the advanced mode button

advancedModeEL.addEventListener("click", function () {
  // creating a random number from 1 to 30 for advanced mode
  let secretNumber = Math.trunc(Math.random() * 30) + 1;
  score = 10;
  scoreEL.textContent = score;
  toggleHidden();
  modeTitle.textContent = "Advanced Mode";
  betweenNumber.textContent = "Choose a number between 1 and 30";

  gameFunctionality();

  againEL.addEventListener("click", function () {
    secretNumber = Math.trunc(Math.random() * 30) + 1;
    score = 10;
    againFunction();
  });
});

// handling the click event of the how to play button
howToPlay.addEventListener("click", function () {
  helpText.classList.toggle("hidden");
});
