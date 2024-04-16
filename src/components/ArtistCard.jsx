import PropTypes from "prop-types";
import { RiArrowRightUpFill } from "react-icons/ri";

function ArtistCard({ name, img }) {
  return (
    <div className="artist-card">
      <img className="artist-card-img" src={img}></img>
      <h2 className="artist-card-name">
        {name}
        <RiArrowRightUpFill className="link-to-artist-icon" />
      </h2>
    </div>
  );
}

PropTypes.ArtistCard = {
  name: PropTypes.string,
  img: PropTypes.string,
};
export default ArtistCard;
