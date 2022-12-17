import {
    weatherCard
} from "./weatherCards.js";
import {
    weatherView
} from "./weatherView.js";

import {
    getPosition,
    getCity,
    getWeather
} from "./util.js";



export async function weatherAPP(event) {
    event.preventDefault();
    weatherView();
    await getPosition();
    const data = await getWeather();
    const forecast = data[0];
    const currentWeather = data[1];

    let target = document.getElementById('future-forecast');

    for (let row in forecast) {
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const d = new Date(row);
        let day = weekday[d.getDay()];
        let iconObject = weatherCard(`${forecast[row].weatherCode}`);
        let li = document.createElement('li');
        li.innerHTML = `${day}\n ${iconObject.icon} \n ${forecast[row].maxTemp} / ${forecast[row].minTemp}`
        target.appendChild(li)

    }

    const iconCurrWeather = weatherCard(String(currentWeather.weathercode));
    const cityName = await getCity();


    document.getElementById('current-weather').innerHTML = `
    <h1>Current Conditions in ${cityName.results[8].formatted_address}</h1>

        ${iconCurrWeather.icon}
        <div>Current temperature: ${currentWeather.temperature}&#176;</div>
        <div>Windspeed : ${currentWeather.windspeed} km/h</div>

    `

}