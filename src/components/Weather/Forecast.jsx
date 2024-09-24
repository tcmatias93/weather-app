import "../../styles/components/Forecast.css";
import DailyForecastWidget from "./DailyForecastWidget";
import HourlyForecastWidget from "./HourlyForecastWidget";

const Forecast = ({ title, type, data }) => {
  console.log(data);
  return (
    <div className="Forecast">
      <div className="forecast-container">
        <h3>{title}</h3>
        <div className="widget-container">
          {data.map((singleData) => (
            <div key={singleData.date || singleData.day}>
              {type === "hourly" ? (
                <HourlyForecastWidget data={singleData} />
              ) : (
                <DailyForecastWidget data={singleData} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forecast;
