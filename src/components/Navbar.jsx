import { NavLink } from "react-router-dom";
import Miniplayer from "./Miniplayer";
import ArtistSpotlight from "./ArtistSpotlight";
import LogoHeader from "./LogoHeader";
import { TiSocialInstagram } from "react-icons/ti";

function Navbar() {
  return (
    <div id="NAV_LEFT">
      <LogoHeader />
      <nav>
        <NavLink to="/feed">feed</NavLink>
        <NavLink to="/artists">artists</NavLink>
        <a href="https://www.instagram.com/symptoms_of_nature/" target="_blank">
          <TiSocialInstagram />
        </a>
      </nav>
      <ArtistSpotlight />
      <Miniplayer />
    </div>
  );
}

export default Navbar;
