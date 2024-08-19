import { useParams } from "react-router-dom";
import { roster } from "../data/RosterData";

function ArtistProfilePage() {
  const { id } = useParams();
  const artist = roster.find((el) => el.artistID == `${id}`);

  return (
    <div id="artist-profile-page-wrapper">
      <div className="artist-profile-header">
        <img className="artist-profile-img" src={artist.img}></img>
        <div className="artist-profile-content">
          <h2>{artist.name}</h2>
          <h3>{artist.title}</h3>
          <a href={artist.links[0].instagram} target="_blank" id="artist-insta-link">
            insta
          </a>
          <hr id="hr-important"></hr>
          <span>{artist.description}</span>
        </div>
      </div>
    </div>
  );
}

export default ArtistProfilePage;
