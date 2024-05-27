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
      <section id="colorModeToggle">
        <div
          className={colorTheme == "light" ? "light active" : "light"}
          onClick={() => {
            setColorTheme("light");
          }}>
          <MdLightMode className="color-theme-icon" />
        </div>
        <div
          className={colorTheme == "dark" ? "dark active" : "dark"}
          onClick={() => {
            setColorTheme("dark");
          }}>
          <MdDarkMode className="color-theme-icon" />
        </div>
      </section>
    </>
  );
}

export default ColorModeToggle;
