import { useContext } from "react";
import "../styles/components/Main.css";
import CurrentWeather from "./Weather/CurrentWeather";
import Forecast from "./Weather/Forecast";
import WeatherContext from "../context/weather.context";
import Loader from "./Generales/Loader";

const Main = () => {
  const { loading, currentWeather, dailyForecast, hourlyForecast } =
    useContext(WeatherContext);

  return (
    <div className="Main">
      {loading ? (
        <Loader />
      ) : (
        <>
          <CurrentWeather data={currentWeather} />
          <Forecast
            title={"HOURLY FORECAST"}
            type={"hourly"}
            data={hourlyForecast}
          />
          <Forecast
            title={"21 DAYS FORECAST"}
            type={"dail"}
            data={dailyForecast}
          />
        </>
      )}
    </div>
  );
};

export default Main;
