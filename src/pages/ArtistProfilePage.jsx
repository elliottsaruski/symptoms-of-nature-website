import { useParams } from "react-router-dom";
import { roster } from "../data/RosterData";
import { posts } from "../data/PostData";
import FeedPost from "../components/FeedPost";
import Filterbar from "../components/Filterbar";

function ArtistProfilePage() {
  const { id } = useParams();
  const artist = roster.find((el) => el.artistID == `${id}`);
  const artistPosts = posts.filter((el) => el.artistID == id);

  return (
    <div id="artist-profile-page-wrapper">
      <img className="artist-profile-img" src={artist.img}></img>
      <h2>{artist.artistID}</h2>
      <h3>{artist.title}</h3>
      <span>{artist.description}</span>
      <hr id="seperator"></hr>
      <Filterbar />
      <div className="artist-posts-wrapper">
        {artistPosts.map((post, index) => {
          return (
            <FeedPost
              key={index}
              className="feed-post"
              artist={post.artist}
              artistID={post.artistID}
              date={post.date}
              title={post.title}
              img={post.img}
              links={post.links}
              description={post.description}
              postType={post.postType}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ArtistProfilePage;
