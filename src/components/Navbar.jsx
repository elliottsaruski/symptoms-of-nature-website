import Miniplayer from "./Miniplayer";
import ArtistSpotlight from "./ArtistSpotlight";
import LogoHeader from "./LogoHeader";

function Navbar() {
  return (
    <>
      <div id="NAV_LEFT">
        <LogoHeader />
        <ArtistSpotlight />
        <Miniplayer />
      </div>
      <hr id="nav-seperator"></hr>
    </>
  );
}

export default Navbar;
