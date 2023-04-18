
let credits = 10; //dit zorgt ervoor dat ik begin met 10 credits
let playerNum;
let computerNum; 



//---------------------------------------

let time = window.localStorage.getItem('puzzleTimeLeft');
const countDownEl = document.getElementById('countdown');

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  countDownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
}
setInterval(updateCountdown, 1000);
//-------------------------------------------




//----------------------------------------------------------------------------------

//START

const result = prompt('Wat is je naam?'); //dit zorgt voor dat er een alert komt met een vraag
alert(`Hallo ${result}, welkom bij het spel Hoger & Lager!`); //het vraagt wat jouw naam is

document.querySelector('.Playerstats').innerHTML = result + ':';

const myButton = document.querySelector('.start');
myButton.addEventListener('click', computerScore); // als ik dan op start klik dan gebeurt er dan een event bij de computerscore
//-----------------------------------------------------------------------------------


//Hogerknop
const higherButton = document.querySelector('.higher'); 
higherButton.addEventListener('click', playerPlay); // dit zorgt ervoor dat als ik op higher click dan komt er een number bij de playerscore
higherButton.addEventListener('click', higherBtn); 



//Lagerknop
const lowerButton = document.querySelector('.lower'); 
lowerButton.addEventListener('click', playerPlay); //dit zorgt ervoor dat als ik op lower click dan komt er een number bij de playerscore
lowerButton.addEventListener('click', lowerBtn); // dit zorgt ervoor dat als ik op lower klick dat dan de credits ook veranderen als ik het goed raad of niet


function computerScore() {
    computerNum = Math.floor(Math.random() * 100); //math.floor zorgt ervoor dat het afrondt naar beneden // getal tussen de 0 en 100
    document.querySelector('.Computerscore').innerHTML = computerNum; // als ik op start klik dan komt er een random number bij de computerscore
}


//Hogerknop credits

function higherBtn() {                         // dit is als ik op hoger klik en ik ook hoger heb gehaald krijg ik +5 credits, zo niet dan krijg ik -3
    if (credits >=25) {
        alert('Je hebt gewonnen! Je gaat nu naar de Eindkamer')
        window.open('/Projects/Escape room team ALDI PIJR/pages/endroom.html');
    }
    if (credits <=0)
    {
        credits = 0;
        alert('Je hebt geen credits meer! Game over.');
    } else{
        if (playerNum >= computerNum) {
            credits += 3;
            alert('Je hebt gewonnen! Je krijgt 3 credits erbij')
        } else {
            credits -= 5;
            alert('Je hebt verloren! Je krijgt 5 credits minder')
        }
    }
    computerNum = Math.floor(Math.random() * 100);   //math.floor zorgt ervoor dat het afrondt naar beneden
    document.querySelector('.creditsscore').innerHTML = credits
    document.querySelector('.Computerscore').innerHTML = computerNum; // als ik op Hogerbutton klik dan komt er weer een random number getal bij de computerscore. en dan kan je weer gaan raden

}



//Lagerknop credits

function lowerBtn() { // dit is als ik op lager klik en ik ook lager heb gehaald krijg ik +5 credits, zo niet dan krijg ik -3

    if (credits >=25) {
        alert('Je hebt gewonnen! Je gaat nu naar de Eindkamer')
        window.open('/pages/endroom.html');
    }
    if (credits <=0)
    {
        credits = 0;
        alert('Je hebt geen credits meer! Game over.'); //als je geen credits meer hebt dan komt er een alert die dat zegt
    } else{
        if (playerNum <= computerNum) {
            credits += 3;
            alert('Je hebt gewonnen! Je krijgt 3 credits erbij') //als je hebt gewonnen dan krijg je een alert
        } else {
                credits -= 5;
                alert('Je hebt verloren! Je krijgt 5 credits minder') // als je hebt verloren dan krijg je een alert
        }
    }
    computerNum = Math.floor(Math.random() * 100);
    document.querySelector('.creditsscore').innerHTML = credits
    document.querySelector('.Computerscore').innerHTML = computerNum; // als ik op lager klik dan komt er een random number
}


function playerPlay() {
    console.log("Player play");
    playerNum = Math.floor(Math.random() * 100); //random getal tussen de 0 en 100
    document.querySelector('.Playerscore').innerHTML = playerNum; // als ik op de knop hoger of lager klik dan komt er een random number bij de playerscore
}


document.querySelector('.creditsscore').innerHTML = credits //dit zorgt ervoor dat de creditsscore gelijk met 10 begint

