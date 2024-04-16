import { roster } from "../data/RosterData.jsx";
import ArtistCard from "../components/ArtistCard";

function Artists() {
  return (
    <div id="artists-wrapper">
      {roster.map((artist, index) => {
        return <ArtistCard key={index} name={artist.name} img={artist.img} />;
      })}
    </div>
  );
}

export default Artists;
