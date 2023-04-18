console.log('Main Loaded')



const trashBtn = document.querySelector(".trashBtn");



function goToPuzzle2() {
    
    window.open('/Projects/Escape room team ALDI PIJR/puzzle2.html');

}


if(trashBtn)
{
    trashBtn.addEventListener('click', goToPuzzle2);
}