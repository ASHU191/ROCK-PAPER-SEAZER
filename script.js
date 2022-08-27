//Options
var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");

//Selections
var userSelection = document.querySelector("#user-selection");
var computerSelection = document.querySelector("#computer-selection");

//Score
var score = document.querySelector("#score");
var playerScore = 0;
var computerScore = 0;

//Result
var announcement = document.querySelector("#announcement");




function game(userOption) {
  // User's Selection
//   if (userOption === "rock") {
//     userSelection.src = "rock.png";
//   } else if (userOption === "paper") {
//     userSelection.src = "paper.png";
//   } else {
//     userSelection.src = "scissors.png";
//   }

  // Options
  let computerSelection = Math.floor(Math.random() * 3);
  let options = ["rock", "paper", "scissors"];
  let computerChoice = options[computerSelection];

  console.log(computerChoice);

  //If Draw
  if (
    (userOption === "rock" && computerChoice === "rock") ||
    (userOption === "paper" && computerChoice === "paper") ||
    (userOption === "scissors" && computerChoice === "scissors")
  ) {
    // computerSelection.src = `${computerChoice}.png`;
    announcement.innerHTML = "Draw!!!";
  }

  //If Not Draw
  else {
    //For Rock
    if (userOption === "rock") {
      if (computerChoice === "paper") {
        // computerSelection.src = `${computerChoice}.png`;
        announcement.innerHTML = "Computer Wins!";
        computerScore++;
        score.innerHTML = `${playerScore} - ${computerScore}`;
      } else {
        // computerSelection.src = `${computerChoice}.png`;
        announcement.innerHTML = "You Win!";
        playerScore++;
        score.innerHTML = `${playerScore} - ${computerScore}`;
      }
    }

    //For Paper
    else if (userOption === "paper") {
      if (computerChoice === "scissors") {
        // computerSelection.src = `${computerChoice}.png`;
        announcement.innerHTML = "Computer Wins!";
        computerScore++;
        score.innerHTML = `${playerScore} - ${computerScore}`;
      } else {
        // computerSelection.src = `${computerChoice}.png`;
        announcement.innerHTML = "You Win!";
        playerScore++;
        score.innerHTML = `${playerScore} - ${computerScore}`;
      }
    }

    //For Scissors
    else {
      if (computerChoice === "rock") {
        // computerSelection.src = `${computerChoice}.png`;
        announcement.innerHTML = "Computer Wins!";
        computerScore++;
        score.innerHTML = `${playerScore} - ${computerScore}`;
      } else {
        // computerSelection.src = `${computerChoice}.png`;
        announcement.innerHTML = "You Win!";
        playerScore++;
        score.innerHTML = `${playerScore} - ${computerScore}`;
      }
    }
  }
}