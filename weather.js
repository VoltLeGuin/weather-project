class Weather {
    constructor(city, state) {
        this.apiKey = '90062b6e73102a7114153af49354bafe'
        this.city = city
        this.state = state
    }

    //fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=imperial&appid=${this.apiKey}`)
        const reponseData = await response.json()
        return reponseData
    }

    //change weather location
    changeLocation(city, state) {
        this.city = city
        this.state = state
    }
}