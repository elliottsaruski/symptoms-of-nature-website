import { NavLink } from "react-router-dom";
import landingPageVideo from "../assets/media/vids/SoN_landingpage_vid_compressed.mp4";
import { useRef } from "react";

function LandingPage() {
  const landingPageRef = useRef();
  return (
    <div id="LANDING-PAGE">
      <video
        muted
        autoPlay
        loop
        src={landingPageVideo}
        ref={landingPageRef}></video>
      <NavLink to="/home">enter</NavLink>
    </div>
  );
}

export default LandingPage;
