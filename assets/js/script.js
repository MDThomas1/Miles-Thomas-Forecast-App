var dayOneDate = moment()

var searchButton = document.querySelector('#search')
var currentResults = document.querySelector('#forecast')
var searchBar = document.querySelector('#enter-city')

var apiKey = '07d6a7dbeed7644bffd8ec2625431d53'

$('#current-date').text(dayOneDate.format('dddd, L'))
$('#dateOne').text(dayOneDate.add(1, 'days').format('L'))
$('#dateTwo').text(dayOneDate.add(2, 'days').format('L'))
$('#dateThree').text(dayOneDate.add(3, 'days').format('L'))
$('#dateFour').text(dayOneDate.add(4, 'days').format('L'))
$('#dateFive').text(dayOneDate.add(5, 'days').format('L'))

function forecastResults() {
    var searchedCity = searchBar.value;
    $('#city-name').text(searchedCity)

    var apiKey = '07d6a7dbeed7644bffd8ec2625431d53'
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&appid=" + apiKey;
}

searchButton.addEventListener('click', forecastResults)

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely,hourly&units=metric&appid=07d6a7dbeed7644bffd8ec2625431d53
