import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ColorModeToggle() {
  const [colorTheme, setColorTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  useEffect(() => {
    document.body.className = colorTheme;
  }, [colorTheme]);

  return (
    <>
      <fieldset
        id="colorModeToggle"
        onChange={(e) => setColorTheme(e.target.value)}>
        <div className="color-mode-option">
          <input
            type="radio"
            id="lightmode"
            name="colorMode"
            value="light"
            checked={colorTheme === "light"}
            onChange={() => {
              setColorTheme("light");
            }}
          />
          <label htmlFor="lightmode" className="colorMode-label">
            <MdLightMode className="color-theme-icon" />
          </label>
        </div>
        {/* <hr /> */}
        <div className="color-mode-option">
          <input
            type="radio"
            id="darkmode"
            name="colorMode"
            value="dark"
            checked={colorTheme === "dark"}
            onChange={() => {
              setColorTheme("dark");
            }}
          />
          <label htmlFor="darkmode" className="colorMode-label">
            <MdDarkMode className="color-theme-icon" />
          </label>
        </div>
      </fieldset>
    </>
  );
}

export default ColorModeToggle;
