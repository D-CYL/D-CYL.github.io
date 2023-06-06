const playerText = document.querySelector('.player');
const computerText = document.querySelector('.computer');
const resultText = document.querySelector('.result');
const choiceBtns = document.querySelectorAll('.choiceBtn');
let player;
let computer;

choiceBtns.forEach(button => button.addEventListener("click", () => {

  player = button.textContent;
  computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  resultText.textContent = checkWinner();
}));

function computerTurn() {

  const random = Math.floor(Math.random() * 3) + 1;

  switch (random) {
    case 1:
      computer = "👊";
      break;
    case 2:
      computer = "✋";
      break;
    case 3:
      computer = "✌️";
      break;
  }
}
function checkWinner() {
  if (player == computer) {
    return "Draw!";
  }
  else if (computer == "👊") {
    return (player == "✋") ? "You Win!" : "You Lose!"
  }
  else if (computer == "✋") {
    return (player == "✌️") ? "You Win!" : "You Lose!"
  }
  else if (computer == "✌️") {
    return (player == "👊") ? "You Win!" : "You Lose!"
  }
}
