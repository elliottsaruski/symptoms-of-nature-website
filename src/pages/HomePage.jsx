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
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchPosts();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!posts.length) return <div>Loading...</div>;

  return (
    <div id="home-page-wrapper">
      <h2>Home / Blog</h2>
      <hr />
      {posts.map((post) => (
        <Link to={post.id} key={post.id} className="post-item">
          <div className="img-group-wrapper">
            <img
              src={post.properties["Files & media"].files[0].file.url}
              className="post-img-thumbnail"
              alt="blog-post-img-thumbnail"
            />
            {/* <img
              src={post.properties["Files & media"].files[0].file.url}
              className="post-img-thumbnail"
              alt="blog-post-img-thumbnail"
            />
            <img
              src={post.properties["Files & media"].files[0].file.url}
              className="post-img-thumbnail"
              alt="blog-post-img-thumbnail"
            /> */}
            <hr />
          </div>
          <h4>{post.properties.Name.title[0]?.plain_text}</h4>
          <div className="name-date-post">
            <h5>by: {post.properties.Author.select.name}</h5>
            {/* <h5>{post.created_time}</h5> */}
          </div>

          <div className="descriptors-post">
            <h6>
              {post.properties["Tags - descriptors"].multi_select[0].name}
            </h6>
            <h6>{post.properties["TYPE OF POST"].multi_select[0].name}</h6>
          </div>
          <p>{post.properties.Description.rich_text[0]?.text.content}</p>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
