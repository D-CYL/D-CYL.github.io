const cardCol = document.querySelector('.cards-here');

fetchingData = link => {
    fetch(link)
        .then(myData => myData.text())
        .then(textData => displayPage(textData));

    const displayPage = objects => {
        JSON.parse(objects).forEach(element => {
            cardCol.innerHTML +=
            `
            <div class="col d-flex align-items-stretch">
                <div class="card">
                    <img class="card-img-top" src="${element.img}" alt="Title">
                    <div class="card-body">
                        <h4 class="card-title">${element.title}</h4>
                        <p class="card-text">${element.description}</p>
                        <ul class="list-group  list-group-flush">
                        <li class="list-group-item">Genre: ${element.genres}</li>
                        <li class="list-group-item">Active Players: ${element.activePlayers}</li>
                        <li class="list-group-item">You can download from: ${element.downloadFrom}</li>
                        <li class="list-group-item">Release Date: ${element.releaseDate}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
        });
    }
}