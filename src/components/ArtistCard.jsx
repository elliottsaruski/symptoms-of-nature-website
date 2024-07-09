// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ArtistCard({ name, img, artistID, title }) {
  return (
    <Link to={artistID}>
      <div className="artist-card">
        <img className="artist-card-img" src={img}></img>
        <hr />
        <div className="artist-card-context">
          <h3 className="artist-card-name">{name}</h3>
          <p className="artist-card-title">{title}</p>
        </div>
      </div>
    </Link>
  );
}

// PropTypes.ArtistCard = {
//   name: PropTypes.string,
//   img: PropTypes.string,
// };
export default ArtistCard;
