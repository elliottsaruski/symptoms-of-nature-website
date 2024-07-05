import { NavLink } from "react-router-dom";
import landingPageVideo from "../assets/media/vids/placeholder video for son landing.mov";

function LandingPage() {
  return (
    <div id="LANDING-PAGE">
      <video autoPlay loop muted src={landingPageVideo}></video>
      <NavLink to="/home">enter</NavLink>
    </div>
  );
}

export default LandingPage;
