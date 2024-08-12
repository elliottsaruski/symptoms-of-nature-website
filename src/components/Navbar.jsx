import { NavLink } from "react-router-dom";
import { RiInstagramLine } from "react-icons/ri";
import { RiDiscordLine } from "react-icons/ri";

import { useScreenSize } from "../hooks/useScreenSize.js";
import ColorModeToggle from "./ColorModeToggle";
import sonLogoDarkMode from "../assets/logos/SON_LOGO_darkmode_Custom.png";
import sonLogoLightMode from "../assets/logos/SON_LOGO_lightmode_Custom.png";
import MobileNavbar from "./MobileNavbar";
import MediaWrapperDesktop from "./MediaWrapperDesktop";
// import BlogPostCard from "./BlogPostCard";

function Navbar() {
  // const [blogPostIndex, setBlogPostIndex] = useState(0);
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  return (
    <div id="LEFT-COL-WRAPPER">
      <div className="left-col--top">
        {/*------------------------------------- TOP NAV BAR------------------------ */}
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
        {/*------------------------------------- DESKTOP NAV BAR------------------------ */}
        {isDesktop && (
          <nav id="nav-full">
            <NavLink to="/home">
              <div>home</div>
            </NavLink>
            <NavLink to="/about">
              <div>about</div>
            </NavLink>
            <NavLink to="/issues">
              <div>issues</div>
            </NavLink>
            <NavLink to="/roster">
              <div>roster</div>
            </NavLink>
          </nav>
        )}
        {/*------------------------------------- MOBILE NAV BAR------------------------ */}
        {(isMobile || isTablet) && <MobileNavbar />}
      </div>
      <hr />
      {/*------------------------------------- DESKTOP ONLY MEDIA WRAPPER ------------------------ */}
      <MediaWrapperDesktop />
      <hr />
      {/*------------------------------------- DESKTOP ONLY BOTTOM BAR ------------------------ */}
      {isDesktop && (
        <div className="SON-description">
          <div className="color-mode-and-theme-wrapper">
            <ColorModeToggle />
          </div>
          <hr />
          <span>A creative collective based in Miami, FL</span>
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
        </div>
      )}
    </div>
  );
}

export default Navbar;
