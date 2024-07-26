import { useState } from "react";
import aboutPageHeaderIMG from "../assets/media/photos/ABOUT/about_us_main_image_no_frame.png";
import aboutPageHeaderTEXT from "../assets/media/photos/ABOUT/about-us-text.png";


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
