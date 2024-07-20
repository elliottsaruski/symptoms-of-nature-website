import { NavLink } from "react-router-dom";
import { RiInstagramLine } from "react-icons/ri";
import ColorModeToggle from "./ColorModeToggle";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import sonLogoDarkMode from "../assets/logos/SON_LOGO_darkmode.png";
import sonLogoLightMode from "../assets/logos/SON_LOGO_lightmode.png";
// import landingPageVideo from "../assets/media/vids/son_nav_videoNEW.mov";

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
        {/* <hr /> */}
      </div>
      <nav className={!mobileNavOpen ? "nav-mobile-closed" : "nav-mobile-open"}>
        <NavLink
          to="/home"
          onClick={() => {
            setMobileNavOpen(false);
          }}>
          <div>HOME</div>
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => {
            setMobileNavOpen(false);
          }}>
          <div>ABOUT</div>
        </NavLink>
        <NavLink
          to="/issues"
          onClick={() => {
            setMobileNavOpen(false);
          }}>
          <div>ISSUES</div>
        </NavLink>
        <NavLink
          to="/roster"
          onClick={() => {
            setMobileNavOpen(false);
          }}>
          <div>ROSTER</div>
        </NavLink>

        <div className="color-mode-and-theme-wrapper">
          <ColorModeToggle />
        </div>
        <hr />
        <div className="instagram-wrapper">
          <a
            href="https://www.instagram.com/symptoms_of_nature/"
            target="_blank">
            <RiInstagramLine />
          </a>
        </div>
      </nav>
    </div>
  );
}

function Navbar() {
  return (
    <div id="LEFT-COL-WRAPPER">
      <div className="left-col--top">
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
        {/* <hr /> */}

        <nav id="nav-full">
          <NavLink to="/home">
            <div>HOME</div>
          </NavLink>
          <NavLink to="/about">
            <div>ABOUT</div>
          </NavLink>
          <NavLink to="/issues">
            <div>ISSUES</div>
          </NavLink>
          <NavLink to="/roster">
            <div>ROSTER</div>
          </NavLink>
        </nav>
        <MobileNavbar />
      </div>
      <hr />
      <div className="left-col--media-wrapper">
        {/* <video src={landingPageVideo} autoPlay muted loop></video> */}
      </div>
      <hr />
      <div className="SON-description">
        <div className="color-mode-and-theme-wrapper">
          <ColorModeToggle />
        </div>
        <hr />
        <span>A creative collective based in Miami, FL</span>
        <hr />
        <div className="instagram-wrapper">
          <a
            href="https://www.instagram.com/symptoms_of_nature/"
            target="_blank">
            <RiInstagramLine />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
