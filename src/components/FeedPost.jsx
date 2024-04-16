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
          <h2>{title}</h2>
          <h3>{artist}</h3>
          <span>{description}</span>
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
FeedPost.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  artist: PropTypes.string,
  description: PropTypes.string,
};
export default FeedPost;
