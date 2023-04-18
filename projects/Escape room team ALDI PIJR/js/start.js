
const result = prompt('Wat is je naam?');
alert(`Hallo ${result}, welkom bij het spel Escape Room!`);             

//--------------------------------------------------------------
const startingMinutes = 50;
let time = startingMinutes * 60;

const countDownEl = document.getElementById('countdown');
const startButton = document.querySelector('.start');
const wrapperStory = document.querySelector('.wrapperstory');
const wrapperRegels = document.querySelector('.wrapperRegels');
const spelRegelsBtn = document.querySelector('.spelRegelsBtn');




function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    countDownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}

function changeText() {
    spelRegelsBtn.classList.add('hidden');
    startButton.classList.remove('hidden');
    wrapperStory.innerHTML = wrapperRegels.innerHTML;
}

function startGame() {
    setInterval(updateCountdown, 1000);
    window.open('/Projects/Escape room team ALDI PIJR/pages/startroom.html');
}


spelRegelsBtn.addEventListener('click', changeText);
startButton.addEventListener('click', startGame)















































