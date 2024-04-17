import PropTypes from "prop-types";
import { RiArrowRightUpFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function ArtistCard({ name, img, artistID }) {
  return (
    <Link to={artistID} className="artist-card">
      <img className="artist-card-img" src={img}></img>
      <h2 className="artist-card-name">
        {name}
        <RiArrowRightUpFill className="link-to-artist-icon" />
      </h2>
    </Link>
  );
}

PropTypes.ArtistCard = {
  name: PropTypes.string,
  img: PropTypes.string,
};
export default ArtistCard;
