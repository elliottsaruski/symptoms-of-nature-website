import WebAmpComponent from "./WebAmpComponent";
import { useScreenSize } from "../hooks/useScreenSize";
import { useLocation } from "react-router-dom";

import comp000Cover from "../assets/media/photos/MUSIC/genesis_cover_compressed.jpg";

function MediaWrapperDesktop() {
  const { isDesktop } = useScreenSize();
  let location = useLocation();

  return (
    <>
      <div className="left-col--media-wrapper">
        {isDesktop && (
          <img src={comp000Cover} alt="compilation 000 album cover"></img>
        )}

        {/* --------------------- WEBAMP------------------- */}
        {location.pathname !== "/" && <WebAmpComponent />}
      </div>
    </>
  );
}

export default MediaWrapperDesktop;
