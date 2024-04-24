import { IoPlayCircle, IoLogoSoundcloud } from "react-icons/io5";
import { FaBandcamp } from "react-icons/fa";

function FeedPost({ title, date, img, artist, description, postType, links }) {
  return (
    <div className="post">
      <p>{date}</p>
      {/* <div className="post-img">
          <img src={img} />
        </div> */}
      <p className="post-artist">{artist}</p>
      <p className="post-title">{title}</p>
    </div>
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

export default FeedPost;
