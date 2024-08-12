import WebAmpComponent from "./WebAmpComponent";
import { useScreenSize } from "../hooks/useScreenSize";

import landingPageVideo from "../assets/media/vids/son_nav_videoNEW.mov";

function MediaWrapperDesktop() {
  const { isDesktop } = useScreenSize();
  // const [blogPostIndex] = useState(0);

  return (
    <>
      <div className="left-col--media-wrapper">
        {isDesktop && (
          <video src={landingPageVideo} autoPlay muted loop></video>
        )}

        {/* --------------------- WEBAMP------------------- */}
        {/* {isDesktop && <WebAmpComponent />} */}
        <WebAmpComponent />
      </div>
    </>
  );
}

export default MediaWrapperDesktop;

{
  /* <div className="left-col--media-wrapper">
{pathname == "/home" ||
pathname == `/home/${MOCK_DATA[`${blogPostIndex}`].postID}` ? (
  <video src={landingPageVideo} autoPlay muted loop></video>
) : (
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/b5qEEkf6Vus?si=cOmk2u1-crYjvXjd"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"></iframe>
)} */
}
