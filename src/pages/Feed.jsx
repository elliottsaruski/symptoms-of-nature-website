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
              className="feed-post"
              key={index}
              title={post.title}
              date={post.date}
              img={post.img}
              artist={post.artist}
              description={post.description}
              postType={post.postType}
              links={post.links}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Feed;
