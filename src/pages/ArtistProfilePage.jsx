import { useParams } from "react-router-dom";
import { roster } from "../data/RosterData";
import { posts } from "../data/PostData";
import FeedPost, { Links } from "../components/FeedPost";
import Filterbar from "../components/Filterbar";

function ArtistProfilePage() {
  const { id } = useParams();
  const artist = roster.find((el) => el.artistID == `${id}`);
  const artistPosts = posts.filter((el) => el.artistID == id);
  console.log(artistPosts);

  return (
    <div className="artist-profile-page-wrapper">
      <div className="artist-profile">
        <img className="artist-profile-img" src={artist.img}></img>
        <div className="artist-profile-description">
          <img src={artist.logo}></img>
          <h2>{artist.artistID}</h2>
          <h3>{artist.title}</h3>
          <span>{artist.description}</span>
          <Links postType={artist.profileType} links={artist.links} />
        </div>
      </div>
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
