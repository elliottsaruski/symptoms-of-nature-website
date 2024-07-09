import headerIcon from "../assets/media/icons/top-globe-icon.png";
import aboutPageHeaderIMG from "../assets/media/photos/ABOUT/about_us_image.webp";
import aboutPageHeaderTEXT from "../assets/media/photos/ABOUT/about-us-text.png";

function AboutPage() {
  return (
    <div id="home-wrapper">
      {/* <div className="symptoms-of-nature-wrapper">
        <h2 className="home-about-SON-title">Symptoms</h2>
        <h2 className="home-about-SON-title">of Nature</h2>
      </div> */}
      <img src={headerIcon} id="about-icon" alt="" />
      <img src={aboutPageHeaderIMG} id="about-header-img" alt="" />
      <img src={aboutPageHeaderTEXT} id="about-header-text" alt="" />

      <div className="about-spans">
        <p>
          Symptoms of Nature is a collective immersed in the experimental phase
          of{" "}
          <select name="one" id="one">
            <option value=""> </option>

            <option value="">creation</option>
            <option value="vape">vape and chill</option>
            <option value="online">terminally online</option>
            <option value="thighmaster">receiving a thigh master</option>
            <option value="pinkglock">shooting a pink glock</option>
          </select>{" "}
          with media spanning from{" "}
          <select name="two" id="two">
            <option value=""></option>
            <option value="dog">plumbing textiles</option>
            <option value="cat">telephone archives</option>
            <option value="hamster"> protein soundscapes</option>
            <option value="hamster">identity crisis psychology</option>
            <option value="hamster">fetus assisted computer coding</option>
          </select>{" "}
          . We provide a space for all to showcase their{" "}
          <select name="three" id="three">
            <option value=""></option>
            <option value="">evolution</option>
            <option value="divorce">divorce ring</option>
            <option value="ableton">10k hours in ableton</option>
            <option value="hookah">digital hookah</option>
            <option value="iguanas">pet iguanas</option>
          </select>{" "}
          creatively and unlock the next step in our mindscape.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
