import { useContext, useState } from "react";
import ThemeContext from "../../context/theme.context";
import "../../styles/components/Settings.css";
import { MEASUREMENT_SYSTEMS } from "../../constants";
import WeatherContext from "../../context/weather.context";

const Settings = () => {
  const { dark, setDark, saveThemeToLocalStorage } = useContext(ThemeContext);
  const { measurementSystem, setMeasurementSystem } =
    useContext(WeatherContext);
  const [openSettings, setOpenSettings] = useState(true);

  const taggleTheme = () => {
    setDark((prevDark) => !prevDark);
    saveThemeToLocalStorage(!dark);
  };
  const changeMeasurementSystem = (system) => {
    setMeasurementSystem(system);
    setOpenSettings(false);
  };

  return (
    <div className="Settings">
      <div className="theme-toggler">
        <div className="theme-buttons" onClick={taggleTheme}>
          <div className={`light-theme-btn ${dark ? "" : "active"}`}>
            <i className="bi bi-sun"></i>
          </div>
          <div className={`dark-theme-btn ${dark ? "active" : ""}`}>
            <i className="bi bi-moon"></i>
          </div>
        </div>
      </div>
      <div
        className="settings-btn"
        onClick={() => setOpenSettings((prevVal) => !prevVal)}
      >
        <i className={`bi bi-gear${openSettings ? "-fill" : ""}`}></i>
      </div>
      <div className={`settings-menu ${openSettings ? "open" : ""}`}>
        <div className="measutement-systems">
          <h4>Measurement Systems:</h4>
          <div className="systems">
            {Object.values(MEASUREMENT_SYSTEMS).map((system) => (
              <div
                key={system}
                className={`system ${
                  system === measurementSystem ? "active" : ""
                }`}
                onClick={() => changeMeasurementSystem(system)}
              >
                {system}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
