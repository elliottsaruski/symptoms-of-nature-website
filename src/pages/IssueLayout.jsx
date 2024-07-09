// import { useState } from "react";
import { ReactReader } from "react-reader";
import { Link } from "react-router-dom";

function IssueLayout() {
  // const [location, setLocation] = useState(0);

  return (
    <div id="issue-wrapper">
      <Link to="/issues">back</Link>
      <div style={{ height: "75svh", width: "90vw" }}>
        <ReactReader url="https://react-reader.metabits.no/files/alice.epub" />
      </div>
    </div>
  );
}

export default IssueLayout;
