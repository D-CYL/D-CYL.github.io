const pokeStatsBigPath = "json/poke.json";
const pokeCount = document.querySelector(".poke-amount");
let avarageLvl = 0;
let currentPokemon = 0;
fetch(pokeStatsBigPath)
  .then(pokeStatsBigPath => pokeStatsBigPath.json())
  .then(pokeDataOne => collectPokeBigData(pokeDataOne));

function collectPokeBigData(pokeDataOne) {
    for (let i = 0; i < pokeDataOne.length; i++) {
        const pokemon = pokeDataOne[i];
        avarageLvl += pokemon.level
        currentPokemon = pokeDataOne.length
      } 
      pokeCount.innerHTML += currentPokemon + " pokemon and the <br> total avarage pokemon level is " + avarageLvl
}