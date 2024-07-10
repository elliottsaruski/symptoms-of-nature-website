import { useState } from "react";
import dropdownoneIMG from "../assets/media/photos/ABOUT/popups/streetlines.png";
import dropdowntwoIMG from "../assets/media/photos/ABOUT/popups/headscans.png";
import dropdownthreeIMG from "../assets/media/photos/ABOUT/popups/dafoe.png";
import dropdownfourIMG from "../assets/media/photos/ABOUT/popups/headexplode.png";

function AboutUsDropDown() {
  const [dropDownOneSelected, setDropDownOneSelected] = useState(false);
  const [dropDownTwoSelected, setDropDownTwoSelected] = useState(false);
  const [dropDownThreeSelected, setDropDownThreeSelected] = useState(false);
  const [dropDownFourSelected, setDropDownFourSelected] = useState(false);

  const handleDropDownOneChange = (evt) => {
    if (evt.target !== "") {
      setDropDownOneSelected(true);
    }
  };
  const handleDropDownTwoChange = (evt) => {
    if (evt.target !== "") {
      setDropDownTwoSelected(true);
    }
  };
  const handleDropDownThreeChange = (evt) => {
    if (evt.target !== "") {
      setDropDownThreeSelected(true);
    }
  };
  const handleDropDownFourChange = (evt) => {
    if (evt.target !== "") {
      setDropDownFourSelected(true);
    }
  };

  return (
    <div className="about-spans">
      <p>
        {/* ----------------------------------TEXT--------------------------------------- */}
        Symptoms of Nature is a collective immersed in the{" "}
        {/* ----------------------------------DROPDOWN 1--------------------------------------- */}
        <select
          name="one"
          id="one"
          onChange={(e) => handleDropDownOneChange(e.target.value)}>
          <option value="">-----------</option>
          <option value="experimental">experimental</option>
          <option value="hypothetical">hypothetical</option>
          <option value="bohemian">bohemian</option>
          <option value="cybernetic">cybernetic</option>
          <option value="penis">penis</option>
        </select>{" "}
        {/* ----------------------------------TEXT--------------------------------------- */}
        phase of creation with media spanning from{" "}
        {/* ----------------------------------DROPDOWN 2--------------------------------------- */}
        <select
          name="two"
          id="two"
          onChange={(e) => handleDropDownTwoChange(e.target.value)}>
          <option value="">-----------</option>
          <option value="music">music</option>
          <option value="fashion">fashion</option>
          <option value="film">film</option>
          <option value="graphic">graphic art</option>
          <option value="photography">photography</option>
          <option value="zines">zines</option>
          <option value="blogs">blogs</option>
          <option value="penis">penis</option>
        </select>{" "}
        {/* ----------------------------------TEXT--------------------------------------- */}
        . We provide a space for all to showcase their{" "}
        {/* ----------------------------------DROPDOWN 3--------------------------------------- */}
        <select
          name="three"
          id="three"
          onChange={(e) => handleDropDownThreeChange(e.target.value)}>
          <option value="">-----------------------</option>
          <option value="evolution">evolution</option>
          <option value="grandeur">grandeur</option>
          <option value="ableton">10k ableton hrs</option>
          <option value="rick">rick owens impersonation</option>
          <option value="penis">penis</option>
        </select>{" "}
        {/* ----------------------------------TEXT--------------------------------------- */}
        creatively and unlock the next step in our
        <select
          name="four"
          id="four"
          onChange={(e) => handleDropDownFourChange(e.target.value)}>
          <option value="">------------------</option>
          <option value="mindscape">mindscape</option>
          <option value="journey">creative journey</option>
          <option value="rubiks">colorless rubiks cube</option>
          <option value="world">whole new world</option>
          <option value="penis">penis</option>
        </select>
        .
      </p>
      <img
        src={dropdownoneIMG}
        alt=""
        className={dropDownOneSelected ? "drop-1-activated" : "drop-pic"}
      />
      <img
        src={dropdowntwoIMG}
        alt=""
        className={dropDownTwoSelected ? "drop-2-activated" : "drop-pic"}
      />
      <img
        src={dropdownthreeIMG}
        alt=""
        className={dropDownThreeSelected ? "drop-3-activated" : "drop-pic"}
      />
      <img
        src={dropdownfourIMG}
        alt=""
        className={dropDownFourSelected ? "drop-4-activated" : "drop-pic"}
      />
    </div>
  );
}

export default AboutUsDropDown;
