console.log('Main Loaded');

const userName = prompt("Wat is uw naam?");
console.log(userName);



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let plrPoints = getRandomInt(1, 10)
let bankPoints = getRandomInt(1, 10)

const playerName = document.querySelector('.username');
playerName.textContent = userName

const higher = document.querySelector('.higher');
higher.addEventListener("click", higherClick);
function higherClick() {

    plrPoints = getRandomInt(1, 10)
    bankPoints = getRandomInt(1, 10)

    const random = document.querySelector('.randomNumber');
    random.textContent = plrPoints
    const botNumberRandom = document.querySelector('.botNumber');
    botNumberRandom.textContent = bankPoints
    
    if (plrPoints > bankPoints) {
        alert("You win!")
    } else if (plrPoints == bankPoints) {
        alert("Even!")
    } else {
        alert("You lose!")
    }
}

const lower = document.querySelector('.lower');
lower.addEventListener("click", LowerClick);
function LowerClick() {

    plrPoints = getRandomInt(1, 10)
    bankPoints = getRandomInt(1, 10)

    const random = document.querySelector('.randomNumber');
    random.textContent = plrPoints
    const botNumberRandom = document.querySelector('.botNumber');
    botNumberRandom.textContent = bankPoints
    
    if (plrPoints < bankPoints) {
        alert("You win!")
    } else if (plrPoints == bankPoints) {
        alert("Even!")
    } else {
        alert("You lose!")
    }
}