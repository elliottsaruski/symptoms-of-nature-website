import { Link } from "react-router-dom";

function BlogPostCard({
  postID,
  post_title,
  post_date,
  post_author,
  post_type,
  post_desc,
//   post_content,
  post_img,
//   post_status,
}) {
  return (
    <Link to={postID} className="blog-post-card">
      <div className="img-wrapper">
        {/* img */}
        <img src={post_img} alt="" />
      </div>

      <div className="post-content-wrapper">
        {/* post genre/type */}
        <h5>{post_type}</h5>

        {/* title */}
        <h4>{post_title}</h4>

        {/* tagline short desc */}
        <p>{post_desc}</p>

        <div className="author-date-wrapper">
          <p>{post_author}</p>
          <p>{post_date}</p>
        </div>
      </div>
    </Link>
  );
}

export default BlogPostCard;
