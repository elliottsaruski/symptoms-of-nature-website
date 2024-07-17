// import { useState } from "react";
// import dropdownoneIMG from "../assets/media/photos/ABOUT/popups/streetlines.png";
// import dropdowntwoIMG from "../assets/media/photos/ABOUT/popups/headscans.png";
// import dropdownthreeIMG from "../assets/media/photos/ABOUT/popups/dafoe.png";
// import dropdownfourIMG from "../assets/media/photos/ABOUT/popups/headexplode.png";

function AboutUsDropDown() {
  // const [dropDownOneSelected, setDropDownOneSelected] = useState(false);
  // const [dropDownTwoSelected, setDropDownTwoSelected] = useState(false);
  // const [dropDownThreeSelected, setDropDownThreeSelected] = useState(false);

  // const handleDropDownOneChange = (evt) => {
  //   if (evt.target !== "") {
  //     setDropDownOneSelected(true);
  //   }
  // };
  // const handleDropDownTwoChange = (evt) => {
  //   if (evt.target !== "") {
  //     setDropDownTwoSelected(true);
  //   }
  // };
  // const handleDropDownThreeChange = (evt) => {
  //   if (evt.target !== "") {
  //     setDropDownThreeSelected(true);
  //   }
  // };

  return (
    <div className="about-spans">
      <p>
        {/* ----------------------------------TEXT--------------------------------------- */}
        Symptoms of Nature is a collective immersed in the experimental phase of{" "}
        {/* ----------------------------------DROPDOWN 1--------------------------------------- */}
        <select
          name="one"
          id="one"
          // onChange={(e) => handleDropDownOneChange(e.target.value)}
        >
          <option value=""></option>
          <option value="creation">creation</option>
          <option value="vape and chill">vape and chill</option>
          <option value="receiving a thigh master">
            receiving a thigh master
          </option>
          <option value="shooting a pink glock">shooting a pink glock</option>
          <option value="penis">penis</option>
        </select>{" "}
        {/* ----------------------------------TEXT--------------------------------------- */}
        with media spanning from{" "}
        {/* ----------------------------------DROPDOWN 2--------------------------------------- */}
        <select
          name="two"
          id="two"
          // onChange={(e) => handleDropDownTwoChange(e.target.value)}
        >
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
          // onChange={(e) => handleDropDownThreeChange(e.target.value)}
        >
          <option value=""></option>
          <option value="evolution">evolution</option>
          <option value="divorce ring">divorce ring</option>
          <option value="ableton">10k hours in ableton</option>
          <option value="digital hookah">digital hookah</option>
          <option value="libtard">libtard</option>
          <option value="penis">penis</option>
        </select>{" "}
        {/* ----------------------------------TEXT--------------------------------------- */}
        creatively and unlock the next step in our mindscape.
      </p>
      {/* <img
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
      /> */}
    </div>
  );
}

export default AboutUsDropDown;
