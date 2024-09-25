import { useContext } from "react";
import ThemeContext from "../../context/theme.context";
import "../../styles/components/Settings.css";
const Settings = () => {
  const { dark, setDark, saveThemeToLocalStorage } = useContext(ThemeContext);

  const taggleTheme = () => {
    setDark((prevDark) => !prevDark);
    saveThemeToLocalStorage(!dark);
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
      <div className="settings-btn">
        <i className="bi bi-gear"></i>
      </div>
    </div>
  );
};

export default Settings;
