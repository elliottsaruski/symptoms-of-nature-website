import { useLocation } from "react-router-dom";
import WebAmpComponent from "./WebAmpComponent";
import { useScreenSize } from "../hooks/useScreenSize";

import landingPageVideo from "../assets/media/vids/son_nav_videoNEW.mov";
import MOCK_DATA from "../data/MOCK_BLOGPOST_DATA.json";
import { useState } from "react";

function MediaWrapperDesktop() {
  const { pathname } = useLocation();
  const { isDesktop } = useScreenSize();
  const [blogPostIndex] = useState(0);

  return (
    <>
      {isDesktop && (
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
              referrerPolicy="strict-origin-when-cross-origin"></iframe>
          )}
          {/* --------------------- WEBAMP------------------- */}
          {isDesktop && <WebAmpComponent />}
        </div>
      )}
    </>
  );
}

export default MediaWrapperDesktop;
