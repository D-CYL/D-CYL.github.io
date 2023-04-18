console.log('Main Loaded')

const startBtn = document.querySelector(".startBtn");

function goToPuzzle1() {
    window.open('/Projects/Escape room team ALDI PIJR/pages/puzzle1.html');
}

if(startBtn)
{
    startBtn.addEventListener('click', goToPuzzle1);
}