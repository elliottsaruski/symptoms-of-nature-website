import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NotionRenderer } from 'react-notion-x';

const PostPage = () => {
  const { postId } = useParams();
  const [recordMap, setRecordMap] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch('/.netlify/functions/fetchNotionData', {
          method: 'POST',
          body: JSON.stringify({ pageId: postId }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch post content');
        }

        const data = await response.json();
        setRecordMap(data);
      } catch (error) {
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

  return <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />;
};

export default PostPage;
