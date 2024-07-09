import { useState } from "react";
import dropdownoneIMG from "../assets/media/photos/ABOUT/popups/streetlines.png";
import dropdowntwoIMG from "../assets/media/photos/ABOUT/popups/headscans.png";

function AboutUsDropDown() {
  const [dropDownOneSelected, setDropDownOneSelected] = useState(false);
  const [dropDownTwoSelected, setDropDownTwoSelected] = useState(false);
  const [dropDownThreeSelected, setDropDownThreeSelected] = useState(false);

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
  //   const handleDropDownTwoChange = () => {};
  //   const handleDropDownThreeChange = () => {};

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
          <option value=""> </option>
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
          <option value=""></option>
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
          <option value=""></option>
          <option value="evolution">evolution</option>
          <option value="grandeur">grandeur</option>
          <option value="ableton">10k ableton hrs</option>
          <option value="">rick owens impersonation</option>
          <option value="">penis</option>
        </select>{" "}
        {/* ----------------------------------TEXT--------------------------------------- */}
        creatively and unlock the next step in our mindscape.
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
        src={dropdownoneIMG}
        alt=""
        className={dropDownThreeSelected ? "drop-3-activated" : "drop-pic"}
      />
    </div>
  );
}

export default AboutUsDropDown;
