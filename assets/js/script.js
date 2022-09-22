var dayOneDate = moment()

var searchButton = document.querySelector('#search')
var currentResults = document.querySelector('#forecast')
var searchBarCity = document.querySelector('#enter-city')
var searchBarCountry = document.querySelector('#enter-country')
var searchHistory = document.querySelector('#previous-searches')
var forecastOne = document.querySelector('#forecastOne')
var tempOne = document.querySelector('#tempOne')
var windOne = document.querySelector('#windOne')
var humidityOne = document.querySelector('#humidityOne')

$('#current-date').text(dayOneDate.format('dddd, L'))
$('#dateOne').text(dayOneDate.add(1, 'days').format('L'))
$('#dateTwo').text(dayOneDate.add(2, 'days').format('L'))
$('#dateThree').text(dayOneDate.add(3, 'days').format('L'))
$('#dateFour').text(dayOneDate.add(4, 'days').format('L'))
$('#dateFive').text(dayOneDate.add(5, 'days').format('L'))

function pullHistory() {
    var lastSearch = document.createElement('li')
    lastSearch.textContent = localStorage.getItem('Search history')
    lastSearch.appendChild(searchHistory)
}

function forecastResults() {
    var searchedCity = searchBarCity.value;
    var searchedCountry = searchBarCountry.value;
    $('#city-name').text(searchedCity + ', ' + searchedCountry)
    saveHistory()

    function saveHistory() {
        localStorage.setItem('Search history', searchedCity + ', ' + searchedCountry)
    }

    var apiKey = '07d6a7dbeed7644bffd8ec2625431d53'
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "," + searchedCountry + "&units=metric&appid=" + apiKey;

    fetch(queryURL)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        forecastOne.textContent = data.weather[0].main
        tempOne.textContent = data.main.temp + "°"
        windOne.textContent = data.wind.speed + "km/h"
        humidityOne.textContent = data.main.humidity + "%"
    })
}

searchButton.addEventListener('click', forecastResults)