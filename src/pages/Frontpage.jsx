import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Feed from "./Feed";

function Frontpage() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
        <Feed />
      </main>
    </>
  );
}

export default Frontpage;
