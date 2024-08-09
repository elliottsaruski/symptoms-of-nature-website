import creation from "../assets/media/photos/ABOUT/popups/headexplodeblender-min-min.jpg";
import vape from "../assets/media/photos/ABOUT/popups/wavymirror-min-min.jpg";
import thighmaster from "../assets/media/photos/ABOUT/popups/skrillexmothership-min.jpg";
import pinkglock from "../assets/media/photos/ABOUT/popups/shattered-min.jpg";

import plumbing from "../assets/media/photos/ABOUT/popups/shrooms-min.jpg";
import telephone from "../assets/media/photos/ABOUT/popups/janae_stampsPrint-Medium-min.png";
import soundscapes from "../assets/media/photos/ABOUT/popups/headscans-min.png";
import psychology from "../assets/media/photos/ABOUT/popups/issue000_mylien-min.png";
import coding from "../assets/media/photos/ABOUT/popups/sphinxandpyramid-min.jpg";

import divorcering from "../assets/media/photos/ABOUT/popups/sphinxandpyramid-min.jpg";
import evolution from "../assets/media/photos/ABOUT/popups/sphinxandpyramid-min.jpg";
import ableton from "../assets/media/photos/ABOUT/popups/pikamidiableton-min-min.png";
import digitalhookah from "../assets/media/photos/ABOUT/popups/sphinxandpyramid-min.jpg";
import neolib from "../assets/media/photos/ABOUT/popups/sphinxandpyramid-min.jpg";
import { useRef } from "react";

function AboutUsDropDown({ setHeaderImage }) {
  const firstDropRef = useRef();
  const secondDropRef = useRef();
  const thirdDropRef = useRef();

  const imageMap = {
    creation,
    vape,
    thighmaster,
    pinkglock,
    plumbing,
    telephone,
    soundscapes,
    psychology,
    coding,
    divorcering,
    evolution,
    ableton,
    digitalhookah,
    neolib,
  };

  const handleFirstImageChange = () => {
    const selectedImage = imageMap[firstDropRef.current.value];
    if (selectedImage) {
      setHeaderImage(selectedImage);
    }
  };
  const handleSecondImageChange = () => {
    const selectedImage = imageMap[secondDropRef.current.value];
    if (selectedImage) {
      setHeaderImage(selectedImage);
    }
  };

  const handleThirdImageChange = () => {
    const selectedImage = imageMap[thirdDropRef.current.value];
    if (selectedImage) {
      setHeaderImage(selectedImage);
    }
  };

  return (
    <div className="about-spans">
      <p>
        {/* ----------------------------------TEXT--------------------------------------- */}
        Symptoms of Nature is a collective immersed in the experimental phase of{" "}
        {/* ----------------------------------DROPDOWN 1--------------------------------------- */}
        <select
          name="one"
          id="one"
          ref={firstDropRef}
          onChange={handleFirstImageChange}>
          <option value=""></option>
          <option value="creation">creation</option>
          <option value="vape">vape and chill</option>
          <option value="thighmaster">receiving a thigh master</option>
          <option value="pinkglock">shooting a pink glock</option>
        </select>{" "}
        {/* ----------------------------------TEXT--------------------------------------- */}
        with media using{" "}
        {/* ----------------------------------DROPDOWN 2--------------------------------------- */}
        <select
          name="two"
          id="two"
          ref={secondDropRef}
          onChange={handleSecondImageChange}>
          <option value=""></option>
          <option value="plumbing">plumbing textiles</option>
          <option value="telephone">telephone archives </option>
          <option value="soundscapes">protein soundscapes</option>
          <option value="psychology">identity crisis psychology</option>
          <option value="coding"> fetus assisted coding</option>
        </select>
        {/* ----------------------------------TEXT--------------------------------------- */}
        . We provide a space for all to showcase their{" "}
        {/* ----------------------------------DROPDOWN 3--------------------------------------- */}
        <select
          name="three"
          id="three"
          ref={thirdDropRef}
          onChange={handleThirdImageChange}>
          <option value=""></option>
          <option value="divorcering">divorce ring</option>
          <option value="evolution">evolution</option>
          <option value="ableton">10k hours in ableton</option>
          <option value="digitalhookah">digital hookah</option>
          <option value="neolib">progressive neoliberalism</option>
        </select>{" "}
        {/* ----------------------------------TEXT--------------------------------------- */}
        creatively and unlock the next step in our mindscape.
      </p>
    </div>
  );
}

export default AboutUsDropDown;
