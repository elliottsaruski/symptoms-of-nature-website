// import posts from "../data/posts.json";

import Filterbar from "../components/Filterbar";
// import FeedPost from "../components/FeedPost";

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

export default Feed;
