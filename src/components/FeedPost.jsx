import { IoPlayCircle, IoLogoSoundcloud } from "react-icons/io5";
import { FaBandcamp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";

function FeedPost({ title, artist, date, img, description }) {
  // add {img}, {description}, {postType}, {links} to props if needed
  const [postModuleOpen, setPostModuleOpen] = useState(false);

  return (
    <>
      <div className="post" onClick={() => setPostModuleOpen(!postModuleOpen)}>
        <img className="post-img" src={img}></img>
        <a className="post-artist">{artist}</a>
        <a className="post-title">{title}</a>
      </div>
      <PostModule
        postModuleOpen={postModuleOpen}
        setPostModuleOpen={setPostModuleOpen}
        title={title}
        artist={artist}
        date={date}
        img={img}
        description={description}
      />
    </>
  );
}

function PostModule({
  postModuleOpen,
  setPostModuleOpen,
  title,
  artist,
  date,
  img,
  description,
}) {
  return (
    <>
      <div
        onClick={() => setPostModuleOpen(false)}
        className="post-module-outside"
        id={postModuleOpen ? "post-open" : "post-closed"}>
        <IoMdClose id="close-post-module-icon" />
      </div>
      <div
        className="post-module-wrapper"
        id={postModuleOpen ? "post-open" : "post-closed"}>
        <h2>{title}</h2>
        <img src={img} alt="project-img" />
        <h3>{artist}</h3>
        <time>{date}</time>
        <span>{description}</span>
      </div>
    </>
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
