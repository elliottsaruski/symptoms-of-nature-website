import { posts } from "../data/PostData.jsx";
import Filterbar from "../components/Filterbar";
import FeedPost from "../components/FeedPost";
import { Outlet } from "react-router-dom";

function Feed() {
  return (
    <div id="feed-wrapper">
      <h2>Feed</h2> <hr />
      <div className="feed-post-img-wrapper"></div>
      <div id="posts-wrapper">
        <Filterbar />
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
      <Outlet />
    </div>
  );
}

export default Feed;
