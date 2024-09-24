import "../styles/components/Main.css";
import CurrentWeather from "./Weather/CurrentWeather";
import Forecast from "./Weather/Forecast";
import { getHourlyForecast, getDailyForecast } from "../api/index";

const Main = () => {
  const hourlyForecast = getHourlyForecast();
  const dailyForecast = getDailyForecast();

  return (
    <div className="Main">
      <CurrentWeather />
      <Forecast
        title={"HOURLY FORECAST"}
        type={"hourly"}
        data={hourlyForecast}
      />
      <Forecast title={"21 DAYS FORECAST"} type={"dail"} data={dailyForecast} />
    </div>
  );
};

export default Main;
