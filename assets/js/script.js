var dayOneDate = moment()

var searchButton = document.querySelector('#search')
var currentResults = document.querySelector('#forecast')
var searchBar = document.querySelector('#enter-city')

$('#current-date').text(dayOneDate.format('dddd, L'))
$('#dateOne').text(dayOneDate.format('L'))
$('#dateTwo').text(dayOneDate.add(1, 'days').format('L'))
$('#dateThree').text(dayOneDate.add(2, 'days').format('L'))
$('#dateFour').text(dayOneDate.add(3, 'days').format('L'))
$('#dateFive').text(dayOneDate.add(4, 'days').format('L'))

function forecastResults() {
    var searchedCity = searchBar.value;
    $('#city-name').text(searchedCity)
}

searchButton.addEventListener('click', forecastResults)

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}