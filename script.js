function getComputerChoice() {
      /*
          Returns weaponsButtons random value of either 
          rock, paper, or scissors
          */

      let result;
      let randomNumber = Math.floor(Math.random() * 3);
      if (randomNumber === 0) {
            result = "rock";
      } else if (randomNumber === 1) {
            result = "paper";
      } else {
            result = "scissors";
      }

      return result;
}

let rounds = 0; //Holds the round value of each gameBegins round

function playRound(playerSelection, computerSelection) {
      /*Plays weaponsButtons single round of rock, paper, scissors game,
          between weaponsButtons computer and weaponsButtons player.
          */
      rounds += 1;
      let result;
      let player = playerSelection.toLowerCase();
      let computer = computerSelection.toLowerCase();
      if (player === computer) {
            result = `TIE both chose ${player.toUpperCase()} `;
      } else if (
            (player === "rock" && computer === "scissors") ||
            (player === "paper" && computer === "rock") ||
            (player === "scissors" && computer === "paper")
      ) {
            result = `You WIN ${player.toUpperCase()} beats ${computer.toUpperCase()}`;
      } else {
            result = `You lose ${computer.toUpperCase()} beats ${player.toUpperCase()}`;
      }

      return result;
}



let resultDiv = document.querySelector(".resultDiv");
let roundDisplay = document.querySelector(".resultDiv > #outcome");

let scorePlayer = document.querySelector(".playerscore");
let scoreComputer = document.querySelector(".computerscore");

let playerScore = 0;
let computerScore = 0;
let displayRound = document.getElementById("displayRound");

let buttons = document.querySelectorAll(".weapon");

//Adding  an event listener to each button

buttons.forEach((button) =>
      button.addEventListener("click", (e) => {

            let gameBegins = playRound(button.textContent, getComputerChoice());
            roundDisplay.textContent = gameBegins;

            if (gameBegins.includes("TIE")) {
                  playerScore++;
                  computerScore++;
                  scorePlayer.textContent = `Your current score = ${playerScore}`;
                  scoreComputer.textContent = `Computer current score = ${computerScore}`;
                  displayRound.textContent = `Round ${rounds} is a TIE`;
            } else if (gameBegins.includes("You WIN")) {
                  playerScore++;
                  scorePlayer.textContent = `Your current score = ${playerScore}`;
                  displayRound.textContent = `You WIN round ${rounds}`;
            } else {
                  computerScore++;
                  scoreComputer.textContent = `Computer current score = ${computerScore}`;
                  displayRound.textContent = `Computer WINS round ${rounds}`;
            }
      })
);

function buttonDisabler() {
      //Disables the rock, paper, scissors buttons
      //And gives an option to either reload the page or reset the current score

      let weaponsButtons = document.querySelectorAll(".weapon");
      let reloadPage = document.querySelector(".reloadPage");
      let resetbutton = document.querySelector(".resetScore");
      for (let i = 0; i < weaponsButtons.length; i++) {
            weaponsButtons[i].disabled = true;
      }

      resetbutton.style.visibility = "hidden";

      reloadPage.classList.add("unhide");
}

buttons.forEach((butt) =>
      butt.addEventListener("click", () => {
            if (computerScore === 5 && computerScore > playerScore) {
                  let computerSound = new Audio('./sounds/lost.mp3')
                  roundDisplay.textContent = `Computer WIN. Better luck next time`;
                  resultDiv.setAttribute(
                        "style",
                        "background-color: red; color: white; font-size: 20px;"
                  );
                  computerSound.play()
                  buttonDisabler();

            } else if (playerScore === 5 && playerScore > computerScore) {
                  let sound = new Audio('./sounds/winner.mp3')
                  roundDisplay.textContent = `Hurray you WIN`;
                  resultDiv.setAttribute(
                        "style",
                        "background-color: green; color: white; font-size: 23px; font-weight: bolder"
                  );
                  sound.play()
                  buttonDisabler();

            } else if (
                  (playerScore === 5 && computerScore === 5) ||
                  (computerScore === 5 && playerScore === 5)
            ) {
                  roundDisplay.textContent = "TIE";
                  resultDiv.style.backgroundColor = "white";
                  buttonDisabler();
            }
      })
);


let resetButton = document.querySelector(".resetScore");
resetButton.addEventListener("click", () => window.location.reload());

let refreshPage = document.querySelector(".reloadPage");

refreshPage.addEventListener("click", () => window.location.reload());
