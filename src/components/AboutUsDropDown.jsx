// import { useState } from "react";

function AboutUsDropDown() {
  //   const handleDropDownOneChange = () => {};
  //   const handleDropDownTwoChange = () => {};
  //   const handleDropDownThreeChange = () => {};

  return (
    <div className="about-spans">
      <p>
        {/* ----------------------------------TEXT--------------------------------------- */}
        Symptoms of Nature is a collective immersed in the{" "}
        {/* ----------------------------------DROPDOWN 1--------------------------------------- */}
        <select name="one" id="one">
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
        <select name="two" id="two">
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
        <select name="three" id="three">
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
    </div>
  );
}

export default AboutUsDropDown;
