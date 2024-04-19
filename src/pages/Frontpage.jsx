import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Frontpage() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Frontpage;
