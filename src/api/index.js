import currentWeather from "./current-weather.json";
import dailyForecast from "./daily-forecast.json";
import hourlyForecast from "./hourly-forecast.json";

function getCurretntWeather() {
  return currentWeather.current;
}

function getDailyForecast() {
  return dailyForecast.daily.data;
}

function getHourlyForecast() {
  return hourlyForecast.hourly.data;
}

export { getCurretntWeather, getDailyForecast, getHourlyForecast };
