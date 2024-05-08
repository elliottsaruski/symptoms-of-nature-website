import { posts } from "../data/PostData.jsx";
import Filterbar from "../components/Filterbar";
import FeedPost from "../components/FeedPost";
import { Outlet } from "react-router-dom";

function Feed() {
  return (
    <div id="feed-wrapper">
      <h2>FeeD</h2>
      <hr />
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nihil
        debitis, saepe distinctio molestias non molestiae tempore dignissimos
        nulla eveniet, dolor, consequatur tempora enim voluptatem! Velit fuga
        illum consequatur quae!
      </span>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nihil
        debitis, saepe distinctio molestias non molestiae tempore dignissimos
        nulla eveniet, dolor, consequatur tempora enim voluptatem! Velit fuga
        illum consequatur quae!
      </span>
      <div className="feed-post-img-wrapper"></div>
      <div id="posts-wrapper">
        <Filterbar />
        <hr />
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
