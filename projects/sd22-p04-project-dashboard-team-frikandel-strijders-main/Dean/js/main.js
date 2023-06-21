//Weather Page
const chartOne = document.querySelector('.chart-1');
const input = document.querySelector('.send');

// EventListener for input
input.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        console.log(input.value);
        fetchGeoData(input.value); // Fetches geographical data based on the user's input value
    }
})

// Function to fetch geographical data
function fetchGeoData(city) {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${city}`)
        .then(cityData => cityData.json())
        .then(cityJson => showCity(cityJson)) // Passes the fetched data to the showCity function
}

// Function to display the city
function showCity(cityJson) {
    console.log(cityJson);
    const latitude = cityJson[0].lat;
    const longitude = cityJson[0].lon;
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`)
        .then(weatherData => weatherData.json())
        .then(weatherJson => showWeather(weatherJson)) // Passes the fetched weather data to the showWeather function
}

// Function to display weather information
function showWeather(weatherJson) {
    console.log(weatherJson);
    createChartOne(chartOne, weatherJson); // Creates the first chart using weather data
}

// Chart 1 creation function
function createChartOne(canvasElement, weatherJson) {
    // Destroys the existing chart if you type another prompt in the bar
    if (canvasElement.chart) {
        canvasElement.chart.destroy();
    }

    //Data of the Temperatures
    const data = weatherJson.hourly.temperature_2m;
    const average = calculateAverage(data);

    //Array for averages
    const averageArray = [];
    for (let i = 0; i < data.length; i++) {
      averageArray.push(average);
    }

    // The chart itself (Line chart)
    canvasElement.chart = new Chart(canvasElement, {
        type: 'line',
        data: {
            labels: weatherJson.hourly.time,
            datasets: [{
                backgroundColor: 'blue',
                borderColor: '',
                label: 'Temperature',
                data: data,
                borderWidth: 1
            },
            {
                backgroundColor: 'gray',
                borderColor: '',
                label: 'Averages',
                data: averageArray,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Function to calculate average
function calculateAverage(data) {
    const numberValues = data.reduce((accumulator, value) => accumulator + value, 0);
    return numberValues / data.length;
}
