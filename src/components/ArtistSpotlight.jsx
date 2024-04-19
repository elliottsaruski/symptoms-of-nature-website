import { NavLink } from "react-router-dom";
import { roster } from "../data/RosterData.jsx";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ArtistSpotlight() {
  const [currentArtistSpotlight, setCurrentArtistSpotlight] = useState(0);

  useEffect(() => {
    let timer1 = setTimeout(() => {
      setCurrentArtistSpotlight((prev) => (prev + 1) % roster.length);
    }, 8000);

    return () => {
      clearTimeout(timer1);
      console.log("timer cleared"); //CONSOLE DEBUG
    };
  }, [currentArtistSpotlight]);

  return (
    <div id="artist-spotlight-wrapper">
      <NavLink
        to={`/artists/${roster[currentArtistSpotlight].artistID}`}
        className="artist-spotlight-card"
        key={roster[currentArtistSpotlight].artistID}>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
          src={roster[currentArtistSpotlight].img}
        />
        <motion.h3
          animate={{ translateX: -150 }}
          transition={{ ease: "linear", duration: 8 }}>
          {roster[currentArtistSpotlight].name}-
          {roster[currentArtistSpotlight].name}-
          {roster[currentArtistSpotlight].name}-
          {roster[currentArtistSpotlight].name}-
          {roster[currentArtistSpotlight].name}-
          {roster[currentArtistSpotlight].name}-
          {roster[currentArtistSpotlight].name}-
          {roster[currentArtistSpotlight].name}-
          {roster[currentArtistSpotlight].name}-
          {roster[currentArtistSpotlight].name}
        </motion.h3>
      </NavLink>
    </div>
  );
}

export default ArtistSpotlight;
