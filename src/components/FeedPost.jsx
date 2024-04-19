import { IoPlayCircle, IoLogoSoundcloud } from "react-icons/io5";
import { FaBandcamp } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function FeedPost({ title, date, img, artist, description, postType, links }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
      className="post">
      <p className="post-date">{date}</p>
      <motion.div
        className="post-content"
        initial={{ borderColor: "#696969" }}
        whileHover={{ borderColor: "#eee5e9", scale: 1.05 }}>
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
      </motion.div>
    </motion.div>
  );
}

export function Links({ postType, links }) {
  if (postType === "music") {
    return (
      <div className="links">
        <div className="play-in-miniplayer">
          <IoPlayCircle className="link-icon play-button" />
          <p>Play on mini-player</p>
        </div>
        <div className="music-links">
          {links.soundcloud && (
            <a href={links.soundcloud}>
              <IoLogoSoundcloud className="link-icon" />
            </a>
          )}
          {links.bandcamp && (
            <a href={links.bandcamp}>
              <FaBandcamp className="link-icon" />
            </a>
          )}
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
