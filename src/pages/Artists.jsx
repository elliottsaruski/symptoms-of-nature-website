import { roster } from "../data/RosterData.jsx";
import ArtistCard from "../components/ArtistCard";

function Artists() {
  return (
    <div id="artists-wrapper">
      <div className="artists-header">
        <h2>artists</h2>
        <hr />
      </div>
      <div className="artist-cards">
        {roster.map((artist, index) => {
          return (
            <ArtistCard
              key={index}
              name={artist.name}
              img={artist.img}
              artistID={artist.artistID}
              title={artist.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Artists;
