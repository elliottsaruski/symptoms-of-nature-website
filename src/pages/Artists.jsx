import { roster } from "../data/RosterData.jsx";
import ArtistCard from "../components/ArtistCard";
import { Outlet } from "react-router-dom";

function Artists() {
  return (
    <div id="artists-wrapper">
      {roster.map((artist, index) => {
        return (
          <ArtistCard
            key={index}
            name={artist.name}
            img={artist.img}
            artistID={artist.artistID}
          />
        );
      })}
      <Outlet />
    </div>
  );
}

export default Artists;
