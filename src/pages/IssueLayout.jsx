// import { useState } from "react";
import { ReactReader } from "react-reader";
import { Link } from "react-router-dom";

function IssueLayout() {
  // const [location, setLocation] = useState(0);

  return (
    <>
      <Link to="/issues">back</Link>
      <div style={{ height: "100vh", width: "100vw" }}>
        <ReactReader url="https://react-reader.metabits.no/files/alice.epub" />
      </div>
    </>
  );
}

export default IssueLayout;
