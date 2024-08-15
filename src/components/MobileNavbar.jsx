import { useState } from "react";
import { NavLink } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import ColorModeToggle from "./ColorModeToggle";
import { RiDiscordLine, RiInstagramLine } from "react-icons/ri";

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
          <div>home</div>
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => {
            setMobileNavOpen(false);
          }}>
          <div>about</div>
        </NavLink>
        <NavLink
          to="/issues"
          onClick={() => {
            setMobileNavOpen(false);
          }}>
          <div>issues</div>
        </NavLink>
        <NavLink
          to="/artists"
          onClick={() => {
            setMobileNavOpen(false);
          }}>
          <div>artists</div>
        </NavLink>

        <div className="color-mode-and-theme-wrapper">
          <ColorModeToggle />
        </div>
        <hr />
        <div className="socials-wrapper">
          <a
            id="insta-tag"
            href="https://www.instagram.com/symptoms_of_nature/"
            target="_blank">
            <RiInstagramLine />
          </a>
          <a
            id="discord-tag"
            href="https://discord.gg/dq5vns6NQp"
            target="_blank">
            <RiDiscordLine />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default MobileNavbar;
