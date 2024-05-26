import { roster } from "../data/RosterData.jsx";
import ArtistCard from "../components/ArtistCard";
import { Outlet } from "react-router-dom";

function Artists() {
  return (
    <div id="artists-wrapper">
      <div className="artists-header">
        <h2>RosTeR</h2>
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
        <Outlet />
      </div>
    </div>
  );
}

export default Artists;
