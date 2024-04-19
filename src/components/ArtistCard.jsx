import PropTypes from "prop-types";
import { RiArrowRightUpFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ArtistCard({ name, img, artistID }) {
  return (
    <Link to={artistID}>
      <motion.div
        className="artist-card"
        initial={{
          textDecorationColor: "transparent",
          borderColor: "#696969",
          opacity: 0,
        }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        whileHover={{ borderColor: "#eee5e9" }}>
        <img className="artist-card-img" src={img}></img>
        <div className="artist-name-wrapper">
          <h2 className="artist-card-name">{name}</h2>
          <RiArrowRightUpFill className="link-to-artist-icon" />
        </div>
      </motion.div>
    </Link>
  );
}

PropTypes.ArtistCard = {
  name: PropTypes.string,
  img: PropTypes.string,
};
export default ArtistCard;
