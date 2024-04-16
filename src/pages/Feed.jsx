import posts from "../data/posts.json";
import PropTypes from "prop-types";

import Filterbar from "../components/Filterbar";
import FeedPost from "../components/FeedPost";

function Feed() {
  return (
    <div id="feed-wrapper">
      <Filterbar />
      <div id="posts-wrapper">
        {/* {posts.map((date, title, img, artist, description) => {
          return (
            <FeedPost
              key={title}
              title={title}
              date={date}
              img={img}
              artist={artist}
              description={description}
            />
          );
        })} */}
      </div>
    </div>
  );
}

Feed.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  artist: PropTypes.string,
  description: PropTypes.string,
};

export default Feed;
