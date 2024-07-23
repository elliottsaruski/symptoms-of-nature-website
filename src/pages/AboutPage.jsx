import { useState } from "react";
// import headerIcon from "../assets/media/icons/top-globe-icon.png";
// import headerIcon2 from "../assets/logos/SoN_ICON.png";
import aboutPageHeaderIMG from "../assets/media/photos/ABOUT/about_us_main_image_no_frame.png";
// import aboutPageHeaderSTARS from "../assets/media/photos/ABOUT/stars_light_mode.png";
import aboutPageHeaderTEXT from "../assets/media/photos/ABOUT/about-us-text.png";
// import starzL from "../assets/media/photos/ABOUT/STARZ_L_WHITE.svg";
// import starzR from "../assets/media/photos/ABOUT/STARZ_R_WHITE.svg";

import AboutUsDropDown from "../components/AboutUsDropDown";

function AboutPage() {
  const [headerImage, setHeaderImage] = useState(aboutPageHeaderIMG);

  return (
    <div id="about-wrapper">
      <div className="header-img-wrapper">
        <img src="" id="star-icon-left" />

        <img src={headerImage} id="about-header-img" alt="" />
        <img src="" id="star-icon-right" />
      </div>

      <img src={aboutPageHeaderTEXT} id="about-header-text" alt="" />

      {/* INTERACTIVE P DROPDOWN SECTION */}
      <AboutUsDropDown setHeaderImage={setHeaderImage} />
    </div>
  );
}

export default AboutPage;
