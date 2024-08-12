import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function LayoutPage() {
  return (
    <>
      <Navbar />
      <hr />
      <Outlet />
    </>
  );
}

export default LayoutPage;
