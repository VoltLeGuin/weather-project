//change state so it shows up in dropdown...like github app???
//init storage
const storage = new Storage()
//get stored location data
const weatherLocation = storage.getLocationData()
//init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state)
//inti UI
const ui = new UI()

//get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

//change location event
document.getElementById('w-change-btn').addEventListener('click', (event) => {
    const city = document.getElementById('city').value
    const state = document. getElementById('state').value

    //change location
    weather.changeLocation(city, state)

    //set locaiton in local storage
    storage.setLocationData(city, state)

    //get and display weather again
    getWeather()

    //close modal
    $('#locModal').modal('hide')
})

function getWeather() {
    weather.getWeather()
    .then(results => {
        ui.paint(results)
        console.log(results.weather[0].description)
    })
    .catch(error => console.log(error))
}
