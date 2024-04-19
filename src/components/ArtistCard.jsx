import PropTypes from "prop-types";
import { RiArrowRightUpFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ArtistCard({ name, img, artistID }) {
  return (
    <Link to={artistID}>
      <motion.div
        className="artist-card"
        initial={{ borderColor: "#696969" }}
        whileHover={{ borderColor: "#eee5e9" }}>
        <img className="artist-card-img" src={img}></img>
        <h2 className="artist-card-name">
          {name}
          <RiArrowRightUpFill className="link-to-artist-icon" />
        </h2>
      </motion.div>
    </Link>
  );
}

PropTypes.ArtistCard = {
  name: PropTypes.string,
  img: PropTypes.string,
};
export default ArtistCard;
