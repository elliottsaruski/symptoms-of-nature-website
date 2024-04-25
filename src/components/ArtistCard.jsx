import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ArtistCard({ name, img, artistID }) {
  return (
    <Link to={artistID}>
      <div className="artist-card">
        <img className="artist-card-img" src={img}></img>
        <h2 className="artist-card-name">{name}</h2>
      </div>
    </Link>
  );
}

PropTypes.ArtistCard = {
  name: PropTypes.string,
  img: PropTypes.string,
};
export default ArtistCard;
