import aboutPageHeaderIMG from "../assets/media/photos/aboutPage/pexels1test-md.jpg";

function AboutPage() {
  return (
    <div id="home-wrapper">
      <div className="symptoms-of-nature-wrapper">
        <h2 className="home-about-SON-title">Symptoms</h2>
        <h2 className="home-about-SON-title">of Nature</h2>
      </div>
      <img src={aboutPageHeaderIMG} alt="" />
      <div className="about-spans">
        <p>
          Symptoms of nature is a collective immersed in the{" "}
          <select name="one" id="one">
            <option value="">--</option>
            <option value="dog">dog</option>
            <option value="cat">cat</option>
            <option value="hamster">hamster</option>
          </select>{" "}
          experimental phase of{" "}
          <select name="two" id="two">
            <option value="">--</option>
            <option value="dog">dog</option>
            <option value="cat">cat</option>
            <option value="hamster">hamster</option>
          </select>{" "}
          with media spanning from textile, wearable art, soundscape, identity
          psychology, and computer coding. We strive to provide a{" "}
          <select name="three" id="three">
            <option value="">--</option>
            <option value="dog">dog</option>
            <option value="cat">cat</option>
            <option value="hamster">hamster</option>
          </select>{" "}
          space for all to showcase their evolution creatively in new ways, open
          up new opportunities, and unlock the next step in our thought
          processes by{" "}
          <select name="four" id="four">
            <option value="">--</option>
            <option value="dog">dog</option>
            <option value="cat">cat</option>
            <option value="hamster">hamster</option>
          </select>{" "}
          hosting a multitude of engagements such as workshops, consulting,
          research, and collaborative{" "}
          <select name="five" id="five">
            <option value="">--</option>
            <option value="dog">dog</option>
            <option value="cat">cat</option>
            <option value="hamster">hamster</option>
          </select>{" "}
          projects.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
