import { useParams } from "react-router-dom";
import { roster } from "../data/RosterData";
import { posts } from "../data/PostData";
// import FeedPost from "../components/FeedPost";
// import Filterbar from "../components/Filterbar";
import Feed from "./Feed";

function ArtistProfilePage() {
  const { id } = useParams();
  const artist = roster.find((el) => el.artistID === `${id}`);
  const artistPosts = posts.filter((el) => el.artistID === `${id}`);
  console.log(artistPosts);

  return (
    <div className="artist-profile-page-wrapper">
      <div className="artist-profile">
        <img className="artist-profile-img" src={artist.img}></img>
        <div className="artist-profile-description">
          <h2>{artist.artistID}</h2>
          <h3>{artist.title}</h3>
          <span>{artist.description}</span>
        </div>
      </div>
      {/* <Filterbar /> */}
      <div className="artist-posts-wrapper">
        <Feed />
      </div>
    </div>
  );
}

export default ArtistProfilePage;

{
  /*
        {artistPosts.forEach((post, index) => {
        })}

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
          />; */
}
