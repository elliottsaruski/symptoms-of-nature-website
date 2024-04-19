import { NavLink } from "react-router-dom";
import SONlogo from "../assets/media/logos/SON mobile banner transparent - CROPPED.png";
import { TiSocialInstagram } from "react-icons/ti";
import { motion } from "framer-motion";

function LogoHeader() {
  return (
    <div id="logo-wrapper">
      <nav>
        <NavLink to="/">
          <motion.a
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
            }}>
            home
          </motion.a>
        </NavLink>
        <hr></hr>
        <NavLink to="/artists">
          <motion.a
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
            }}>
            artists
          </motion.a>
        </NavLink>
        <hr></hr>
        <motion.a
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
          href="https://www.instagram.com/symptoms_of_nature/"
          target="_blank">
          <TiSocialInstagram />
        </motion.a>
      </nav>
      <NavLink to="/">
        <img id="SON-header-logo" src={SONlogo} />
      </NavLink>
      <hr></hr>
      <div className="SON-description">
        <span>
          We are SYMPTOMS OF NATURE, a creative collective based in Miami, FL.
        </span>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default LogoHeader;
