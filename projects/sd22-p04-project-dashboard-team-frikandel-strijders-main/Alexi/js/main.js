
const pokemonDataPath = "json/pokemon.json";
const pokemonDataPathMain = "json/poke.json";
const chartPopularity = document.querySelector(".popularity");
const chartLevel = document.querySelector(".avarage-lvl");
const backgroundColours = ["red", "green", "blue"];

fetch(pokemonDataPath)
  .then(pokemonDataPath => pokemonDataPath.json())
  .then(pokemonData => collectPokemonData(pokemonData));

function collectPokemonData(pokemonData) {
  console.log(pokemonData);
  createChart(chartPopularity, pokemonData);
}


// popularity chart
function createChart(chartPopularity, pokemonData) {
  new Chart(chartPopularity, {
    type: 'bar',
    data: {
      labels: pokemonData.name,
      datasets: [{
        label: '#starter pokemon popularity',
        data: pokemonData.popularity,
        backgroundColor: backgroundColours,
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}


fetch(pokemonDataPathMain)
  .then(pokemonDataPathMain => pokemonDataPathMain.json())
  .then(pokemonDataMain => collectPokemonDataMain(pokemonDataMain))

function collectPokemonDataMain(pokemonDataMain) {
  console.log(pokemonDataMain);
  createChartTwo(chartLevel, pokemonDataMain);
}

// level chart
function createChartTwo(chartLevel, pokemonDataMain) {
  new Chart(chartLevel, {
    type: 'bar',
    data: {
      labels: [pokemonDataMain[0].name, pokemonDataMain[3].name, pokemonDataMain[5].name],
      datasets: [{
        label: '#starter pokemon avarage levels in the wild',
        data: [pokemonDataMain[0].level, pokemonDataMain[3].level, pokemonDataMain[5].level],
        backgroundColor: backgroundColours,
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        x: {
          max: 10
        },
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

