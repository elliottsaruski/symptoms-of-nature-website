import { NavLink } from "react-router-dom";
import landingPageVideo from "../assets/media/vids/placeholder video for son landing.mov";
import { useRef } from "react";

function LandingPage() {
  const landingPageRef = useRef();
  return (
    <div id="LANDING-PAGE">
      <video
        autoPlay
        muted
        loop
        src={landingPageVideo}
        ref={landingPageRef}></video>
      <NavLink to="/home">enter</NavLink>
    </div>
  );
}

export default LandingPage;
