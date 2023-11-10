const search = document.getElementById('searchicon');
const weatherimg = document.getElementById('weather');
const city_name = document.getElementById('city-name');
const weather_style = document.getElementById('weather-style');
const weather_measure = document.getElementById('weather-measure')
const wind_speed = document.getElementById('wind-speed');
const humidity = document.getElementById('humidity');
const time = document.getElementById('time');
const date = document.getElementById('date');
const day = document.getElementById('day');
// const months = {
//     0: "January",
//     1: "February",
//     2: "March",
//     3: "April",
//     4: "May",
//     5: "June",
//     6: "July",
//     7: "August",
//     8: "September",
//     9: "October",
//     10: "November",
//     11: "December"
// };
// const daysOfWeek = {
//     0: "Sunday",
//     1: "Monday",
//     2: "Tuesday",
//     3: "Wednesday",
//     4: "Thursday",
//     5: "Friday",
//     6: "Saturday"
// };

search.addEventListener('click',()=>{
    getCity();
})
const getCity =  () =>{
    const val = document.querySelector('input');
    const city = val.value;
    getWeather(city);

}
const getWeather = async (city) => {
    const api_key = `51532aa70851640ef06df10634514fc3`;
    console.log(city)
    if (city != '') {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
            const data = await fetch(url);
            const res = await data.json();
            if(res.message != 'city not found'){
                setWeather(res);
                setbgimg(res.weather[0].description);
            }
            else{
                weather_measure.textContent = "City Not Found";
                return
            }
      
    }
}
const setWeather = (res) => {
    city_name.textContent = "Location : "+res.name;
    // weather_style.textContent = res.weather[0].description;
    weather_measure.textContent = Math.round(res.main.temp - 273.15) + `°`;
    wind_speed.textContent = "Speed : "+res.wind.speed;
    humidity.textContent = "Humidity : "+res.main.humidity;
}
const updateTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const formattedTime = `${hours}:${(minutes)}:${(seconds)}`;
    time.textContent = formattedTime;
}
updateTime();
setInterval(updateTime, 1000);
// getWeather('australia');

// const setdate = ()=>{
//     const d = new Date();
//     day.textContent = daysOfWeek[d.getDay()]+` , `;
//     date.textContent = d.getDate()+` `+months[d.getMonth()]+` `+d.getFullYear();
// }

const setbgimg = (key) => {
    if (key == 'overcast clouds') {
        weatherimg.src = './assets/cloud.png';
    }
    else if(key=='rain'){
        weatherimg.src = './assets/rain.png';

    }
    else if(key=='thunderstorm'){
        weatherimg.src = './assets/rain.png';

    }
    else if(key=='clear sky'){
        weatherimg.src = './assets/sun.png';
    }
    else if(key=='snow'){
        weatherimg.src = './assets/snow.png';
        
        
    }
    else if(key=='mist'){
        weatherimg.src = './assets/haze.png';
        

    }
    else if(key=='scattered clouds'){
        weatherimg.src = './assets/cloud.png';

    }
    else if(key=='shower rain'){
        weatherimg.src = './assets/rain.png';
        

    }
    else if(key=='light rain'){
        weatherimg.src = './assets/rain.png';

    }
    else if(key=='haze'){
        weatherimg.src = './assets/haze.png';
        
    }
    else{
        weatherimg.src = './assets/haze.png';
    }

    
}
// setdate();
// getCity();