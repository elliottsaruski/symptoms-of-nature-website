import { posts } from "../data/PostData.jsx";

import Filterbar from "../components/Filterbar";
import FeedPost from "../components/FeedPost";

function Feed() {
  return (
    <div id="feed-wrapper">
      <Filterbar />
      <div id="posts-wrapper">
        {posts.map((post, index) => {
          return (
            <FeedPost
              key={index}
              title={post.title}
              date={post.date}
              img={post.img}
              artist={post.artist}
              description={post.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Feed;
