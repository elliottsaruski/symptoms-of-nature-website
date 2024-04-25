import { roster } from "../data/RosterData.jsx";
import ArtistCard from "../components/ArtistCard";
import { Outlet } from "react-router-dom";

function Artists() {
  return (
    <div id="artists-wrapper">
      <h2>Roster</h2>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nihil
        debitis, saepe distinctio molestias non molestiae tempore dignissimos
        nulla eveniet, dolor, consequatur tempora enim voluptatem! Velit fuga
        illum consequatur quae!
      </span>
      <hr />
      <div className="artist-cards">
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
    </div>
  );
}

export default Artists;
