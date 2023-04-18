
const userOne = prompt('Player 1 name please');
const userTwo = prompt('Player 2 name please');

const plrOne = document.querySelector('.plrOne');
plrOne.textContent = userOne;

const plrTwo = document.querySelector('.plrTwo');
plrTwo.textContent = userTwo;

const winningConditions = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];

const squares = document.querySelectorAll('.box');
let plrTurn = "x";

for (let index = 0; index < squares.length; index++) {
    const square = squares[index];
    square.addEventListener("click", function () {
        if (square.textContent === "") {
            square.textContent = plrTurn;
            checkForWinner();
            checkForDraw();
            if (plrTurn === "x") {
                plrTurn = "o";
            } else {
                plrTurn = "x";
            }
        }
    });
}

//winner checker
function checkForWinner() {
    for (let i = 0; i < winningConditions.length; i++) {
        const condition = winningConditions[i];
        const square1 = squares[condition[0]];
        const square2 = squares[condition[1]];
        const square3 = squares[condition[2]];
        if (square1.textContent === plrTurn && square2.textContent === plrTurn && square3.textContent === plrTurn) {
            alert(`${plrTurn} wins!`);
            clearBoard();
        }
    }
}

//draw checker
function checkForDraw() {
    let isDraw = true;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].textContent === "") {
            isDraw = false;
        }
    }
    if (isDraw) {
        alert("It's a draw!");
        clearBoard();
    }
}

//clear gameboard
function clearBoard() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
    }
}

