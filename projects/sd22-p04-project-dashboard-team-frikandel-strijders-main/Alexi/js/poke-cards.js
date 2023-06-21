const pokemonCards = document.querySelector(".pokemon-cards")
//json paths
const pokeStatsBigPath = "json/poke.json"
const pokeStatsSmallPath = "json/pokemon.json"

fetch(pokeStatsBigPath)
  .then(pokeStatsBigPath => pokeStatsBigPath.json())
  .then(pokeDataOne => collectPokeBigData(pokeDataOne));

function collectPokeBigData(pokeDataOne) {
  pokeDataOne.sort((a, b) => a.id - b.id);
   createCard(pokeDataOne)
}
 


function createCard(pokeDataOne) {
  for (let i = 0; i < pokeDataOne.length; i++) {
    const pokemon = pokeDataOne[i];
    let card = `
    <div class="row row-cols-4 row-cols-md-1 g-4">
    <div class="col">
      <div class="card h-100">
        <img src="${pokemon.img}"  alt="normal">
        <img src="${pokemon.imgShiny}" class="card-img-top img-top" alt="Shiny">
        <div class="card-body">
          <h5 class="card-title d-flex justify-content-center">${pokemon.name}</h5>
          <p class="card-text d-flex justify-content-center">avarage wild pokemon is lvl: ${pokemon.level}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
          <small class="text-muted">Type: ${pokemon.type}</small>
          <small class="text-muted">ID: ${pokemon.id}</small>
        </div>
      </div>
    </div>
    </div>`
    pokemonCards.innerHTML += card
  }


}
