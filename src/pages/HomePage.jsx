import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/.netlify/functions/fetchNotionData");

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchPosts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!posts.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-grid">
      {posts.map((post) => (
        <div
          key={post.id}
          className="post-item"
          onClick={() => navigate(`/${post.id}`)}>
          <h2>{post.properties.Name.title[0]?.text.content}</h2>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
