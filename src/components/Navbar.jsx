import { NavLink } from "react-router-dom";
import { TiSocialInstagram } from "react-icons/ti";
import ColorModeToggle from "./ColorModeToggle";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

// import abstractNavImg from "../assets/abstract-nav-img.png";
import sonLogoDarkMode from "../assets/logos/SON_LOGO_darkmode.png";
import sonLogoLightMode from "../assets/logos/SON_LOGO_lightmode.png";
import landingPageVideo from "../assets/son_nav_videoNEW.mov";

function MobileNavbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <div id="mobile-nav-wrapper">
      <div className="hamburger-wrapper">
        <GiHamburgerMenu
          className="hamburger-icon"
          onClick={() => {
            setMobileNavOpen(!mobileNavOpen);
          }}
        />
      </div>

      <nav className={!mobileNavOpen ? "nav-mobile-closed" : "nav-mobile-open"}>
        <NavLink
          to="/home"
          onClick={() => {
            setMobileNavOpen(false);
          }}>
          <div>home</div>
        </NavLink>
        <NavLink
          to="/feed"
          onClick={() => {
            setMobileNavOpen(false);
          }}>
          <div>feed</div>
        </NavLink>
        <NavLink
          to="/roster"
          onClick={() => {
            setMobileNavOpen(false);
          }}>
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
      <hr />
    </div>
  );
}

function Navbar() {
  return (
    <div id="LEFT-COL-WRAPPER">
      <div className="left-col--top">
        {/* <NavLink to="/"> */}
        <div className="symptoms-of-nature-logo-wrapper">
          <img
            src={sonLogoDarkMode}
            className="symptoms-of-nature-logo-dark"
            alt="symptoms-of-nature-logo"
          />
          <img
            src={sonLogoLightMode}
            className="symptoms-of-nature-logo-light"
            alt="symptoms-of-nature-logo"
          />
        </div>
        {/* </NavLink> */}
        {/* <hr /> */}
        <nav id="nav-full">
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
        <MobileNavbar />
      </div>
      <hr />
      <div className="left-col--media-wrapper">
        <video autoPlay loop muted src={landingPageVideo}></video>
      </div>
      <hr />
      <div className="SON-description">
        <div className="color-mode-and-theme-wrapper">
          <ColorModeToggle />
        </div>
        <hr />
        <span>
          We are SYMPTOMS OF NATURE, a creative collective based in Miami, FL.
          Immerse yourself in the experimental phase of media creation.
        </span>
      </div>
    </div>
  );
}

export default Navbar;
