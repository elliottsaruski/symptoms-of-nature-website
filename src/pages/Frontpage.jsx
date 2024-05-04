import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Frontpage() {
  return (
    <>
      <Navbar />
      <hr />
      <Outlet />
    </>
  );
}

export default Frontpage;
