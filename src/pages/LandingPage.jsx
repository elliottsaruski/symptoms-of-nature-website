import { NavLink, Outlet } from "react-router-dom";

function LandingPage() {
  return (
    <div id="LANDING-PAGE">
      <img src="https://cdn.pixabay.com/photo/2024/04/28/17/17/flower-8725954_1280.jpg"></img>
      <NavLink to="/home">enter</NavLink>
    </div>
  );
}

export default LandingPage;
