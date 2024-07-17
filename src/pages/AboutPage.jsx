import headerIcon from "../assets/media/icons/top-globe-icon.png";
import aboutPageHeaderIMG from "../assets/media/photos/ABOUT/about_us_main_image_no_frame.png";
// import aboutPageHeaderSTARS from "../assets/media/photos/ABOUT/stars_light_mode.png";
import aboutPageHeaderTEXT from "../assets/media/photos/ABOUT/about-us-text.png";
import AboutUsDropDown from "../components/AboutUsDropDown";

function AboutPage() {
  return (
    <div id="about-wrapper">
      <img src={headerIcon} id="about-icon" alt="" />
      {/* <div className="main-image"> */}
      <img src={aboutPageHeaderIMG} id="about-header-img" alt="" />
      {/* <img src={aboutPageHeaderSTARS} id="about-header-stars" alt="" /> */}
      {/* </div> */}
      <img src={aboutPageHeaderTEXT} id="about-header-text" alt="" />

      {/* INTERACTIVE P DROPDOWN SECTION */}
      <AboutUsDropDown />
    </div>
  );
}

export default AboutPage;
