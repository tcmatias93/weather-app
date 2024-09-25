import "../../styles/components/Forecast.css";
import HorizontallyScrollable from "../Generales/HorizontallyScrollable";
import DailyForecastWidget from "./DailyForecastWidget";
import HourlyForecastWidget from "./HourlyForecastWidget";

const Forecast = ({ title, type, data }) => {
  console.log(data);
  return (
    <div className="Forecast">
      <div className="forecast-container">
        <h3>{title}</h3>
        <HorizontallyScrollable className="widget-container">
          {data.map((singleData) => (
            <div key={singleData.date || singleData.day}>
              {type === "hourly" ? (
                <HourlyForecastWidget data={singleData} />
              ) : (
                <DailyForecastWidget data={singleData} />
              )}
            </div>
          ))}
        </HorizontallyScrollable>
      </div>
    </div>
  );
};

export default Forecast;
