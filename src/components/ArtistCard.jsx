import PropTypes from "prop-types";

function ArtistCard({ name, img }) {
  return (
    <div className="artist-card">
      <h2>{name}</h2>
      <img src={img}></img>
    </div>
  );
}

ArtistCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};

export default ArtistCard;
