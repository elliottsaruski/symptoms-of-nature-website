import { Link } from "react-router-dom";
import ZineData from "../data/ZineData";

function IssuesPage() {
  const issues = ZineData.map((issue) => {
    return (
      <Link
        to={issue._URL}
        id="zine-card"
        key={issue._ID}
        className="zine-card-READY">
        <img src={issue._IMG} alt="zine-thumbnail" className="zine-card-img" />
        <div className="zine-card-details">
          <h4>{issue._NAME}</h4>
          <p>{issue._DATE}</p>
        </div>
        <div className="artists-featured-wrapper">
          <h5>featured artists:</h5>
          <hr />
          {issue._FEATURED_ARTISTS.map((artist, index) => {
            return <p key={index}>{artist}</p>;
          })}
        </div>
      </Link>
    );
  });
  return (
    <div id="issues-wrapper">
      <h2>Issues</h2>
      <hr />
      <div className="issues">{issues}</div>
      {/* <Outlet /> */}
    </div>
  );
}

export default IssuesPage;
