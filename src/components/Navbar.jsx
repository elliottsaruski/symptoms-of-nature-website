import { NavLink } from "react-router-dom";
import { TiSocialInstagram } from "react-icons/ti";

function Navbar() {
  return (
    <div id="NAV_LEFT">
      <div id="logo-wrapper">
        <nav>
          <NavLink to="/">
            <div>home</div>
          </NavLink>
          <NavLink to="/roster">
            <div>roster</div>
          </NavLink>
          <div
            href="https://www.instagram.com/symptoms_of_nature/"
            target="_blank">
            <TiSocialInstagram />
          </div>
        </nav>
        <h1>SYMPTOMS OF NATURE</h1>
        <div className="SON-description">
          <span>
            We are SYMPTOMS OF NATURE, a creative collective based in Miami, FL.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
