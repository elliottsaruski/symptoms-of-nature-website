import { NavLink } from "react-router-dom";
import { TiSocialInstagram } from "react-icons/ti";

function Navbar() {
  return (
    <div id="NAV_LEFT">
      {/* <LogoHeader /> */}
      <NavLink to="/">
        <h1>SYMPTOMS OF NATURE</h1>
      </NavLink>
      <nav>
        <NavLink to="/">
          <p>home</p>
        </NavLink>
        <NavLink to="/roster">
          <p>roster</p>
        </NavLink>
        <NavLink to="/artists">
          <p>about</p>
        </NavLink>
        <p href="https://www.instagram.com/symptoms_of_nature/" target="_blank">
          <TiSocialInstagram />
        </p>
      </nav>
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

export default Navbar;
