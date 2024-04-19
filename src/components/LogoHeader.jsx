import { NavLink } from "react-router-dom";
import SONlogo from "../assets/media/logos/SON mobile banner transparent - CROPPED.png";
import { TiSocialInstagram } from "react-icons/ti";

function LogoHeader() {
  return (
    <div id="logo-wrapper">
      <nav>
        <NavLink to="/">
          <a>home</a>
        </NavLink>
        <hr></hr>
        <NavLink to="/artists">
          <a>artists</a>
        </NavLink>
        <hr></hr>
        <a href="https://www.instagram.com/symptoms_of_nature/" target="_blank">
          <TiSocialInstagram />
        </a>
      </nav>
      <NavLink to="/">
        <img id="SON-header-logo" src={SONlogo} />
      </NavLink>
      <hr></hr>
      <div className="SON-description">
        <span>
          We are SYMPTOMS OF NATURE, a creative collective based in Miami, FL.
        </span>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default LogoHeader;
