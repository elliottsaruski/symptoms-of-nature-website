import { NavLink } from "react-router-dom";
import { TiSocialInstagram } from "react-icons/ti";
import ColorModeToggle from "./ColorModeToggle";
// import abstractNavImg from "../assets/abstract-nav-img.png";

function Navbar() {
  return (
    <div id="LEFT-COL-WRAPPER">
      <div className="left-col--top">
        <NavLink to="/">
          <h1>SON</h1>
        </NavLink>
        <hr />
        <nav>
          <NavLink to="/home">
            <div>home</div>
          </NavLink>
          <NavLink to="/feed">
            <div>feed</div>
          </NavLink>
          <NavLink to="/roster">
            <div>roster</div>
          </NavLink>
        </nav>
      </div>
      <hr />
      <div className="left-col--media-wrapper">
        <img src="https://images.pexels.com/photos/364495/pexels-photo-364495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
      </div>
      <hr />

      <div className="SON-description">
        <span>
          We are <strong>SYMPTOMS OF NATURE</strong>, a creative collective
          based in Miami, FL.
        </span>
        <hr />
        <div className="color-mode-and-insta-toggle-wrapper">
          <ColorModeToggle />
          {/* <hr /> */}
          <a
            href="https://www.instagram.com/symptoms_of_nature/"
            target="_blank">
            <TiSocialInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
