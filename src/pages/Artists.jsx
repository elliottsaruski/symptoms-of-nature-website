import roster from "../data/roster.json";
import ArtistCard from "../components/ArtistCard";

function Artists() {
  return (
    <div id="artists-wrapper">
      {roster.map(({ name, img }) => {
        return <ArtistCard key={name} name={name} img={img} />;
      })}
    </div>
  );
}

export default Artists;
