import { useParams } from "react-router-dom";

import MOCK_DATA from "../data/MOCK_BLOGPOST_DATA.json";

function BlogPostFullPage() {
  const { id } = useParams();
  const blogpost_SELECTED = MOCK_DATA.find((blog) => blog.postID === `${id}`);

  return (
    <div id="blog-post-full-page-wrapper">
      <img src={blogpost_SELECTED.post_img} alt="" />
      <div className="full-page-blog-content">
        <h5>{blogpost_SELECTED.post_type}</h5>
        <h4>{blogpost_SELECTED.post_title}</h4>
        <p>{blogpost_SELECTED.post_desc}</p>
        <p>{blogpost_SELECTED.post_author}</p>
        <p>{blogpost_SELECTED.post_date}</p>
        <p>{blogpost_SELECTED.post_content}</p>
      </div>
    </div>
  );
}

export default BlogPostFullPage;
