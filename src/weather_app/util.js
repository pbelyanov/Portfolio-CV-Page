import { weatherAPP } from "./weather.js";

export function getPosition() {
  const successCallback = (position) => {
    sessionStorage.setItem("Latitude", position.coords.latitude);
    sessionStorage.setItem("Longitude", position.coords.longitude);
    return position;
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

export async function getCity() {
  const lat = sessionStorage.getItem("Latitude");
  const lon = sessionStorage.getItem("Longitude");

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=AIzaSyB0n8gzIoTQy5GhbGiWZfO_aszOqWcLxY8&language=english`
  );
  const cityData = await response.json();
  return cityData;
}

export async function getWeather(event) {
  const lat = sessionStorage.getItem("Latitude");
  const lon = sessionStorage.getItem("Longitude");
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max&timezone=auto&daily=temperature_2m_min&daily=weathercode&current_weather=true`
  );
  const data = await response.json();

  const result = [];
  const forecast = {};

  for (let i = 0; i < data.daily.time.length; i++) {
    forecast[data.daily.time[i]] = {
      minTemp: `${data.daily.temperature_2m_min[i]}&#176;`,
      maxTemp: `${data.daily.temperature_2m_max[i]}&#176;`,
      weatherCode: data.daily.weathercode[i],
    };
  }

  result.push(forecast);
  result.push(data.current_weather);
  return result;
}

export function searchLocation(event) {
  const input = document.getElementById("pac-input");
  const searchBox = new google.maps.places.SearchBox(input);

  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    const bounds = new google.maps.LatLngBounds();

    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }
      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    sessionStorage.setItem("Latitude", (bounds.Wa.hi + bounds.Wa.lo) / 2);
    sessionStorage.setItem("Longitude", (bounds.Ia.hi + bounds.Ia.lo) / 2);
  });
}
