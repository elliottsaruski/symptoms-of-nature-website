import { IoPlayCircle, IoLogoSoundcloud } from "react-icons/io5";
import { FaBandcamp } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function FeedPost({ title, date, img, artist, description, postType, links }) {
  return (
    <div className="post">
      <p className="post-date">{date}</p>
      <div className="post-content">
        <div className="post-img">
          <img src={img} />
        </div>
        <div className="post-text">
          <h2 className="post-title">{title}</h2>
          <Link to={`/artists/${artist}`}>
            <h3 className="post-artist">{artist}</h3>
          </Link>
          <span className="post-description">{description}</span>
          <Links postType={postType} links={links} />
        </div>
      </div>
    </div>
  );
}

export function Links({ postType, links }) {
  if (postType === "music") {
    return (
      <div className="links">
        <div className="play-in-miniplayer">
          <IoPlayCircle />
          <p>Play on mini-player</p>
        </div>
        <div className="music-links">
          <a href={links.soundcloud}>
            <IoLogoSoundcloud />
          </a>
          <a href={links.bandcamp}>
            <FaBandcamp />
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="links">
        <a href={links}>Link</a>
      </div>
    );
  }
}

PropTypes.FeedPost = {
  key: PropTypes.string,
  title: PropTypes.string,
};

export default FeedPost;
