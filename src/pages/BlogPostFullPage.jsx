import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NotionRenderer } from "react-notion-x";

const PostPage = () => {
  const { postId } = useParams();
  const [recordMap, setRecordMap] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch("/.netlify/functions/fetchNotionData", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pageId: postId }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setRecordMap(data);
      } catch (error) {
        console.error("Fetch error:", error); // Debugging line
        setError(error.message);
      }
    }

    fetchPost();
  }, [postId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!recordMap) {
    return <div>Loading...</div>;
  }

  return (
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
  );
};

export default PostPage;
