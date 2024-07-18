import headerIcon from "../assets/media/icons/top-globe-icon.png";
import aboutPageHeaderIMG from "../assets/media/photos/ABOUT/about_us_main_image_no_frame.png";
// import aboutPageHeaderSTARS from "../assets/media/photos/ABOUT/stars_light_mode.png";
import aboutPageHeaderTEXT from "../assets/media/photos/ABOUT/about-us-text.png";
import AboutUsDropDown from "../components/AboutUsDropDown";
import { useState } from "react";

function AboutPage() {
  const [headerImage, setHeaderImage] = useState(aboutPageHeaderIMG);

  return (
    <div id="about-wrapper">
      <img src={headerIcon} id="about-icon" alt="" />
      <img src={headerImage} id="about-header-img" alt="" />
      {/* <img src={aboutPageHeaderSTARS} id="about-header-stars" alt="" /> */}
      <img src={aboutPageHeaderTEXT} id="about-header-text" alt="" />

      {/* INTERACTIVE P DROPDOWN SECTION */}
      <AboutUsDropDown setHeaderImage={setHeaderImage} />
    </div>
  );
}

export default AboutPage;
