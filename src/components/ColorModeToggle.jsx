import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ColorModeToggle() {
  const [colorTheme, setColorTheme] = useState("techno");
  const [colorMode, setColorMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  useEffect(() => {
    document.body.className = `${colorTheme} ${colorMode}`;
  }, [colorTheme, colorMode]);

  return (
    <>
      <section id="colorModeToggle">
        <div
          className={colorMode == "light" ? "light active" : "light"}
          onClick={() => {
            setColorMode("light");
          }}>
          <MdLightMode className="color-theme-icon" />
        </div>
        <div
          className={colorMode == "dark" ? "dark active" : "dark"}
          onClick={() => {
            setColorMode("dark");
          }}>
          <MdDarkMode className="color-theme-icon" />
        </div>
      </section>
      <div id="colorThemeSelect">
        <label htmlFor="theme-select">Theme:</label>
        <select
          defaultValue={"techno"}
          name="theme"
          id="theme-select"
          onChange={(e) => {
            setColorTheme(e.target.value);
          }}>
          <option
            value="techno"
            onSelect={() => {
              setColorTheme("techno");
            }}>
            techno
          </option>
          <option value="forest">forest</option>
        </select>
      </div>
    </>
  );
}

export default ColorModeToggle;
