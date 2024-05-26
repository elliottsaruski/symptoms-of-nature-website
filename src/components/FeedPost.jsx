import { IoPlayCircle, IoLogoSoundcloud } from "react-icons/io5";
import { FaBandcamp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";
// import { Link } from "react-router-dom";

function FeedPost({ title, artist, date, img, description, artistID }) {
  const [postModuleOpen, setPostModuleOpen] = useState(false);

  return (
    <>
      <div className="post" onClick={() => setPostModuleOpen(!postModuleOpen)}>
        <img className="post-img" src={img}></img>
        <div className="post-title-wrapper">
          <section className="post-titles">
            <a className="post-title">{title}</a>
            <a className="post-title">{title}</a>
            <a className="post-title">{title}</a>
          </section>
          <a className="post-artist">{artist}</a>
        </div>
      </div>
      <PostModule
        postModuleOpen={postModuleOpen}
        setPostModuleOpen={setPostModuleOpen}
        title={title}
        artist={artist}
        date={date}
        img={img}
        artistID={artistID}
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
  // date,
  img,
  description,
  // artistID,
}) {
  return (
    <>
      <div
        onClick={() => setPostModuleOpen(false)}
        className="post-module-outside"
        id={postModuleOpen ? "post-open" : "post-closed"}>
        <IoMdClose id="close-post-module-icon" />
      </div>
      <dialog
        className="post-module-wrapper"
        id={postModuleOpen ? "post-open" : "post-closed"}>
        <div className="module-header">
          <div className="module-content">
            <h3>{artist}</h3> <h2>{title}</h2>
            <hr />
            <span>{description}</span>
          </div>
          <img src={img} alt="project-img" />
        </div>
      </dialog>
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
