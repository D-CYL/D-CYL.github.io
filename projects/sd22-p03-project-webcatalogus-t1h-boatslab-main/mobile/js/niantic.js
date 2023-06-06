// Pagina Niantic
const input = document.querySelector('.niantic-cards');

fetch('https:mbo-sd.nl/period3-fetch/games-mobile-niantic')
.then(nianticData => nianticData.json())
.then(nianticJson => showNiantic(nianticJson))

function showNiantic(nianticJson){
    for (let i = 0; i < nianticJson.length; i++) {
        const element = nianticJson[i];
        const card = createCard(element);
        input.innerHTML += card
        console.log(element)
    }
}

function createCard(game){
    const card = `
    <div class="col d-flex align-items-stretch">
        <div class="card">
            <img class="card-img-top" src="${game.img}" alt="Title">
            <div class="card-body">
                <h4 class="card-title">${game.title}</h4>
                <p class="card-text">${game.description}</p>
                <ul class="list-group  list-group-flush">
                <li class="list-group-item">Genre: ${game.genres}</li>
                <li class="list-group-item">Active Players: ${game.activePlayers}</li>
                <li class="list-group-item">You can download from: ${game.downloadFrom}</li>
                <li class="list-group-item">Release Date: ${game.releaseDate}</li>
                </ul>
        </div>
    </div>
</div>    
`
return card
}