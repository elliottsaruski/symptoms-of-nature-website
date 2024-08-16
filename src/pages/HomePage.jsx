import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/.netlify/functions/fetchNotionData");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
        // console.log(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchPosts();
  }, []);

  if (error) return <div id="home-page-wrapper">Error: {error}</div>;
  if (!posts.length) return <div id="home-page-wrapper">Loading...</div>;

  return (
    <div id="home-page-wrapper">
      {/* <h2>Home / Blog</h2>
      <hr /> */}
      <div className="blog-posts-wrapper">
        {posts.map((post) => (
          <Link to={post.id} key={post.id} className="post-item">
            <div className="blog-post-card-content">
              <img
                src={post.properties["Files & media"].files[0].file.url}
                className="post-img-thumbnail"
                alt="blog-post-img-thumbnail"
              />
              <h4>{post.properties.Name.title[0]?.plain_text}</h4>
              <div className="descriptors-post">
                <h6>
                  {post.properties["Tags - descriptors"].multi_select[0].name}
                </h6>
                <hr />
                <h6>{post.properties["TYPE OF POST"].multi_select[0].name}</h6>
                {/* <hr /> */}
              </div>
              <h5 className="post-author">
                by: <strong>{post.properties.Author.select.name}</strong>
              </h5>
              <h6 className="post-time">{post.created_time.slice(0, 10)}</h6>

              <p>{post.properties.Description.rich_text[0]?.text.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
