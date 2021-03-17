const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

const weather = {};
weather.temperature = {
    unit: 'celsisus'
}

const KLEVIN = 273; 
// const key = ; need to get API key 


if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}
else {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't support geolocation</p>";
}

function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}

function showError(error) {
    notificationElement.style.dispay = "block";
    notificationElement.innerHTML = "<p>${error.message}</p>";
}

function getWeather(latitude, longitude) {
    // let api = get api key
    fetch(api).then(function(response){
        let data = response.json();
        return data;
    })
    .then(function(data){
        weather.temperature.value = Math.floor(data.min.temp - KELVIN);
        
    })
}