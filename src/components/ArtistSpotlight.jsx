import { NavLink } from "react-router-dom";
import { roster } from "../data/RosterData.jsx";
import { useEffect, useState } from "react";
// import { motion } from "framer-motion"

function ArtistSpotlight() {
  const [currentArtistSpotlight, setCurrentArtistSpotlight] = useState(0);

  useEffect(() => {
    let timer1 = setTimeout(() => {
      setCurrentArtistSpotlight((prev) => (prev + 1) % roster.length);
    }, 5000);

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
        <img src={roster[currentArtistSpotlight].img} />
        <h3>
          {roster[currentArtistSpotlight].name}-
          {roster[currentArtistSpotlight].name}-
          {roster[currentArtistSpotlight].name}-
          {roster[currentArtistSpotlight].name}
        </h3>
      </NavLink>
    </div>
  );
}

export default ArtistSpotlight;
