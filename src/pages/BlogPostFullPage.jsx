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
      {/* --------------------------POST IMAGE------------------- */}
      <img
        src={pageData.properties["Files & media"].files[0].file.url}
        className="post-img"
        alt="blog-post-img-thumbnail"
      />
      <div className="post-content-wrapper">
        {/* --------------------------POST TAGS------------------- */}
        <div id="tags">
          <h6>
            {pageData.properties["Tags - descriptors"].multi_select[0].name}
          </h6>
          {/* --------------------------POST TYPE------------------- */}
          <h6>{pageData.properties["TYPE OF POST"].multi_select[0].name}</h6>
        </div>
        {/* --------------------------POST TITLE------------------- */}
        <h3>{pageData.properties.Name.title[0]?.text.content}</h3>
        {/* <hr /> */}
        <div id="authdate">
          {/* --------------------------POST AUTHOR------------------- */}
          <h5>author: {pageData.properties.Author.select.name}</h5>
          {/* --------------------------POST TIME------------------- */}
          <h6>{pageData.created_time.slice(0, 10)}</h6>
        </div>

        {/* --------------------------POST CONTENT------------------- */}
        <p>{pageData.properties.Content.rich_text[0]?.text.content}</p>
        {/* <p>
        {pageData.properties.Content.rich_text.map((section) => {
          return pageData.properties.Content.rich_text[`${section}`]?.text
            .content;
        })}
      </p> */}
      </div>
    </div>
  );
}

export default BlogPostFullPage;
