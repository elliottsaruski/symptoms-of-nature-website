import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import IssueLayout from "./IssueLayout";

function LayoutPage() {
  const { pathname } = useLocation();
  // TODO: REMOVE 000 path and satisfy any READY zine id
  if (pathname === "/issues/000") return <IssueLayout />;
  else {
    return (
      <>
        <Navbar />
        <hr />
        <Outlet />
      </>
    );
  }
}

export default LayoutPage;
