import { NavLink } from "react-router-dom";
import { TiSocialInstagram } from "react-icons/ti";
import ColorModeToggle from "./ColorModeToggle";
// import abstractNavImg from "../assets/abstract-nav-img.png";
// import sonLogoDarkMode from "../assets/logos/son_logo_header_DARKMODE.jpg";
// import sonLogoLightMode from "../assets/logos/son_logo_header_LIGHTMODE.jpg";

// function MobileNavbar(){

//   return (
//     <>
// {
/* <nav>
<NavLink to="/home">
  <div>home</div>
</NavLink>
<NavLink to="/feed">
  <div>feed</div>
</NavLink>
<NavLink to="/roster">
  <div>roster</div>
</NavLink>
<div className="instagram-wrapper">
  <a
    href="https://www.instagram.com/symptoms_of_nature/"
    target="_blank">
    <TiSocialInstagram />
  </a>
</div>
</nav> */
// }
//     </>
//   );
// }

function Navbar() {
  return (
    <div id="LEFT-COL-WRAPPER">
      <div className="left-col--top">
        <NavLink to="/">
          <h1>SON</h1>
          <div className="symptoms-of-nature-logo-wrapper">
            {/* <img src={sonLogoDarkMode} alt="symptoms-of-nature-logo" /> */}
            {/* <img src={sonLogoLightMode} alt="symptoms-of-nature-logo" /> */}
          </div>
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
          <div className="instagram-wrapper">
            <a
              href="https://www.instagram.com/symptoms_of_nature/"
              target="_blank">
              <TiSocialInstagram />
            </a>
          </div>
        </nav>
      </div>
      {/* <hr /> */}
      <div className="left-col--media-wrapper">
        <img src="https://images.pexels.com/photos/364495/pexels-photo-364495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
      </div>
      {/* <hr /> */}

      <div className="SON-description">
        <div className="color-mode-and-insta-toggle-wrapper">
          <ColorModeToggle />
        </div>
        <hr />
        <span>
          We are SYMPTOMS OF NATURE, a creative collective based in Miami, FL.
          Immerse yourself in the experimental phase of media creation. Join us
          as we uncover the eclectic symptoms of our nature.
        </span>
      </div>
    </div>
  );
}

export default Navbar;
