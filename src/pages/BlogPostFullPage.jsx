import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { NotionRenderer } from "react-notion-x";

function BlogPostFullPage() {
  const { id } = useParams();
  const [pageData, setPageData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      setIsLoading(true);
      try {
        const response = await fetch("/.netlify/functions/fetchNotionData", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pageId: id }),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const page = data.find((p) => p.id === id);
        if (!page) {
          throw new Error("Page not found");
        }
        setPageData(page);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPost();
  }, [id]);

  if (isLoading) return <div id="blog-post-full-page-wrapper">Loading...</div>;
  if (error) return <div id="blog-post-full-page-wrapper">Error: {error}</div>;
  if (!pageData)
    return <div id="blog-post-full-page-wrapper">No data available</div>;

  // Render the page content
  return (
    <div id="blog-post-full-page-wrapper">
      <h1>{pageData.properties.Name.title[0]?.text.content}</h1>
      <div className="img-group-wrapper">
        <img
          src={pageData.properties["Files & media"].files[0].file.url}
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
      <h4>{pageData.properties.Name.title[0]?.plain_text}</h4>
      <div className="name-date-post">
        <h5>by: {pageData.properties.Author.select.name}</h5>
        {/* <h5>{post.created_time}</h5> */}
      </div>

      <div className="descriptors-post">
        <h6>
          {pageData.properties["Tags - descriptors"].multi_select[0].name}
        </h6>
        <h6>{pageData.properties["TYPE OF POST"].multi_select[0].name}</h6>
      </div>

      {/* Render other properties as needed */}
      <p>{pageData.properties.Content.rich_text[0]?.text.content}</p>
      {/* <p>
        {pageData.properties.Content.rich_text.map((section) => {
          return pageData.properties.Content.rich_text[`${section}`]?.text
            .content;
        })}
      </p> */}
    </div>
  );
}

export default BlogPostFullPage;

