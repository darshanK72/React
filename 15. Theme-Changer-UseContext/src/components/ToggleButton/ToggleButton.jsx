import { useContext } from "react";
import { ThemeContext } from "../../context/theme";

function ToggleButton() {
  const {themeMode,toggleTheme} = useContext(ThemeContext);

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id="flexSwitchCheckDefault"
        onChange={toggleTheme}
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        {themeMode}
      </label>
    </div>
  );
}

export default ToggleButton;
