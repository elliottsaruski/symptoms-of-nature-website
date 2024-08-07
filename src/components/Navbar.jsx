import { NavLink, useLocation } from "react-router-dom";
import { RiInstagramLine } from "react-icons/ri";
import ColorModeToggle from "./ColorModeToggle";
import { useState } from "react";
import { RiDiscordLine } from "react-icons/ri";

import sonLogoDarkMode from "../assets/logos/SON_LOGO_darkmode_Custom.png";
import sonLogoLightMode from "../assets/logos/SON_LOGO_lightmode_Custom.png";
import landingPageVideo from "../assets/media/vids/son_nav_videoNEW.mov";
import MOCK_DATA from "../data/MOCK_BLOGPOST_DATA.json";
// import BlogPostCard from "./BlogPostCard";
// import WavesurferComponent from "./WavesurferComponent";
import MobileNavbar from "./MobileNavbar";
import WebAmpComponent from "./WebAmpComponent";

function Navbar() {
  const [blogPostIndex] = useState(0);
  // const [blogPostIndex, setBlogPostIndex] = useState(0);

  const { pathname } = useLocation();

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
        {/*------------------------------------- MOBILE NAV BAR------------------------ */}
        <MobileNavbar />
      </div>
      <hr />
      <div className="left-col--media-wrapper">
        {pathname == "/home" ||
        pathname == `/home/${MOCK_DATA[`${blogPostIndex}`].postID}` ? (
          <video src={landingPageVideo} autoPlay muted loop></video>
        ) : (
          // <BlogPostCard
          //   key={MOCK_DATA[`${blogPostIndex}`].postID}
          //   postID={MOCK_DATA[`${blogPostIndex}`].postID}
          //   post_title={MOCK_DATA[`${blogPostIndex}`].post_title}
          //   post_img={MOCK_DATA[`${blogPostIndex}`].post_img}
          // />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/b5qEEkf6Vus?si=cOmk2u1-crYjvXjd"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            // allowfullscreen
          ></iframe>
        )}
        {/* <hr /> */}
        {/* ADD WEBAMP */}
        <WebAmpComponent />
        {/* <WavesurferComponent /> */}
      </div>
      <hr />
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
    </div>
  );
}

export default Navbar;
