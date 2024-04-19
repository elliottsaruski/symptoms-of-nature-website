import inPhaseCover from "../assets/media/photos/xcope/in phase cover.jpg";
import { IoListOutline, IoPlayCircle, IoVolumeHigh } from "react-icons/io5";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";

function Miniplayer() {
  return (
    <div id="miniplayer">
      <div id="miniplayer-img-wrapper">
        <img src={inPhaseCover} />
      </div>
      <div id="miniplayer-controls">
        <IoVolumeHigh id="volume-button" />
        <div id="controls-inner">
          <MdSkipPrevious className="miniplayer-button" id="back-button" />
          <IoPlayCircle className="miniplayer-button" id="play-button" />
          <MdSkipNext className="miniplayer-button" id="next-button" />
        </div>
        <IoListOutline className="miniplayer-button" id="list-button" />
      </div>
    </div>
  );
}

export default Miniplayer;
