console.log('main loaded')
const blizzardGames = document.querySelector('.blizzard-text')
function fetchData(url){
    fetch(url)
        .then(myData => myData.json())
        .then(myJsonData => showData(myJsonData))
}
function showData(myJsonData){
    console.log(myJsonData)
    for (let i = 0; i < myJsonData.length; i++) {
        const element = myJsonData[i];
       const card = creatCard(element);
       blizzardGames.innerHTML += card
    }
}
function creatCard(game){
    const card =`
    <div class="card m-5" style="width: 30rem;">
  <img src="${game.img}" class="card-img-top " alt="...">
  <div class="card-body">
    <h5 class="card-title">${game.title}</h5>
    <p class="card-text">${game.description}</p>
  </div>
  <ul class="list-group  list-group-flush">
    <li class="list-group-item">${game.genres}</li>
    <li class="list-group-item">${game.platforms}</li>
    <li class="list-group-item">${game.price}</li>
    <li class="list-group-item">${game.releaseDate}</li>
  </ul>
  <div class="card-body">
    
  </div>
</div>
`
return card;
}
