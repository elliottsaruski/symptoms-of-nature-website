import { IoPlayCircle, IoLogoSoundcloud } from "react-icons/io5";
import { FaBandcamp } from "react-icons/fa";
import PropTypes from "prop-types";

function FeedPost({ title, date, img, artist, description }) {
  return (
    <div className="post">
      <p className="post-date">{date}</p>
      <div className="post-content">
        <div className="post-img">
          <img src={img} />
        </div>
        <div className="post-text">
          <h2 className="post-title">{title}</h2>
          <h3 className="post-artist">{artist}</h3>
          <span className="post-description">{description}</span>
          <div className="links">
            <div className="play-in-miniplayer">
              <IoPlayCircle />
              <p>Play on mini-player</p>
            </div>
            <IoLogoSoundcloud />
            <FaBandcamp />
          </div>
        </div>
      </div>
    </div>
  );
}

PropTypes.FeedPost = {
  key: PropTypes.string,
  title: PropTypes.string,
};

export default FeedPost;
