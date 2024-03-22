let inputvalue = document.querySelector('#city')
let btn = document.querySelector('#add')
let city = document.querySelector('#cityoutput')
let descrip = document.querySelector('#description')
let temp = document.querySelector('#temp')
let wind = document.querySelector('#wind')
let apik = "9233065ececc0eba0abb472ace96a27e"
function convertion(val) {
    return Math.floor((val - 273))
}
btn.addEventListener('click', function ()
 { 
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' +inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data =>
             {
            let nameval = data['name']
            let descrip = data['weather']['0']['description']
            let tempature = data['main']['temp']
            let wndspeed = data['wind']['speed']
            city.innerHTML = `weather of <span>${nameval}<span>`
            temp.innerHTML = `Tempreature : <span>${convertion(tempature)} °C </span>`
            description.innerHTML = `Sky Conditions : <span>${descrip}<span>`
            wind.innerHTML = `Wind Speed : <span>${wndspeed} km/h <span>`

        })
        .catch(err => alert('you entered wrong city name'))

})