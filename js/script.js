const computerPlay = () => {
  const selections = ["rock", "paper", "scissors"]

  let arrIndex = Math.floor(Math.random() * 3)

  return selections[arrIndex]
}



let computerWins = 0;
let playerWins = 0;

const playRound = (computer, player) => {

  console.log(player)

  if (computer === player) {
    console.log("Tie! You both played " + computer + "!");
  } else if (
    (computer === "scissors" && player === "paper") ||
    (computer === "rock" && player === "scissors") ||
    (computer === "paper" && player === "rock")
  ) {
    console.log("You lose!");
    computerWins += 1;
  } else if (
    (player === "scissors" && computer === "paper") ||
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock")
  ) {
    console.log("You win!");
    playerWins += 1;
  } else {
    console.log("Invalid player entry")
  }
}

function game() {

  for(let i = 0; i < 5; i++) {
    let playerSelection = prompt("Type rock, paper, or scissors").toLowerCase();
    playRound(computerPlay(), playerSelection);
    console.log("You've won " + playerWins + " game(s). And lost " + computerWins)
  }
}

game();




