let playerText = document.querySelector("#playerText");
let computerText = document.querySelector("#computerText");
let resultText = document.querySelector("#resultText");
let choiceBtn = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtn.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player : ${player}`
    computerText.textContent = `computer : ${computer}`
    resultText.textContent = checkWinner()
  })
);

function computerTurn() {
  let randomNumber = Math.floor(Math.random() * 3 ) + 1;

  switch (randomNumber) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}

function checkWinner(){
  if (player == computer){
    return "It's a Draw!";
  }
  else if (computer == "ROCK"){
    return (player == "PAPER") ? "You Won!" : "You Lost!"
  }
  else if (computer == "PAPER"){
    return (player == "SCISSORS") ? "You Won!" : "You Lost!"
  }
  else if (computer == "SCISSORS"){
    return (player == "ROCK") ? "You Won!" : "You Lost!"
  }
}