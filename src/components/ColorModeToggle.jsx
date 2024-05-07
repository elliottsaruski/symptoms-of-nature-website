import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ColorModeToggle() {
  const [lightMode, setLightMode] = useState(false);

  function handleColorModeToggle() {
    setLightMode(!lightMode);
  }

  return (
    <>
      <fieldset id="colorModeToggle">
        {/* <legend>Mode</legend> */}
        <div>
          <input
            type="radio"
            id="lightmode"
            name="drone"
            onClick={handleColorModeToggle}
          />
          <label htmlFor="lightmode">
            <MdLightMode />
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="darkmode"
            name="drone"
            onClick={handleColorModeToggle}
          />
          <label htmlFor="darkmode">
            <MdDarkMode />
          </label>
        </div>
      </fieldset>
    </>
  );
}

export default ColorModeToggle;
