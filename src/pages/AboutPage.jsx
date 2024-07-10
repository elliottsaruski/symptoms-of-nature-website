import headerIcon from "../assets/media/icons/top-globe-icon.png";
import aboutPageHeaderIMG from "../assets/media/photos/ABOUT/about_us_image.webp";
import aboutPageHeaderTEXT from "../assets/media/photos/ABOUT/about-us-text.png";
import AboutUsDropDown from "../components/AboutUsDropDown";

function AboutPage() {
  return (
    <div id="about-wrapper">
      <img src={headerIcon} id="about-icon" alt="" />
      <img src={aboutPageHeaderIMG} id="about-header-img" alt="" />
      <img src={aboutPageHeaderTEXT} id="about-header-text" alt="" />

      {/* INTERACTIVE P DROPDOWN SECTION */}
      <AboutUsDropDown />
    </div>
  );
}

export default AboutPage;
