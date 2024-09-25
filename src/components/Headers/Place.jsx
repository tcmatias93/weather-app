import { useContext } from "react";
import WeatherContext from "../../context/weather.context";
const Place = () => {
  const { place } = useContext(WeatherContext);

  return (
    <div className="Place">
      <i className="bi bi-geo-alt-fill"></i> <b>{place.country}</b>,{" "}
      {place.name}
    </div>
  );
};

export default Place;
