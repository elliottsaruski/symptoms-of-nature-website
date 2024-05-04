import { NavLink } from "react-router-dom";
import { TiSocialInstagram } from "react-icons/ti";

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

          <a
            href="https://www.instagram.com/symptoms_of_nature/"
            target="_blank">
            <TiSocialInstagram />
          </a>
        </nav>
      </div>
      <hr />
      <div className="left-col--media-wrapper">
        {/* <img className="left-col-media" src=""></img> */}
      </div>
      <hr />
      <div className="left-col--bottom">
        <div className="colorModeToggle">
          <p className="color-mode">dark</p>
          <p className="color-mode">light</p>
        </div>
        <hr />
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
