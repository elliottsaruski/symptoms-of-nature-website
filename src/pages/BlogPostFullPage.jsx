import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        // -----------------------------------------------LOG PAGE DATA ------------------------
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

  // Function to render rich text content
  const renderRichText = (richTextArray) => {
    return richTextArray.map((item, index) => {
      const { annotations, text, href, type } = item;
      let content = text.content;

      if (type === "text") {
        if (annotations.bold) content = <strong key={index}>{content}</strong>;
        if (annotations.italic) content = <em key={index}>{content}</em>;
        if (annotations.strikethrough)
          content = <del key={index}>{content}</del>;
        if (annotations.underline) content = <u key={index}>{content}</u>;
        if (annotations.code) content = <code key={index}>{content}</code>;

        if (href) {
          content = (
            <iframe
              key={index}
              src={href}
              target="_blank"
              rel="noopener noreferrer">
              {content}
            </iframe>
          );
        }
      } else if (type === "image") {
        content = (
          <img
            key={index}
            src={item.file.url}
            alt={item.caption || "Embedded image"}
          />
        );
      }

      return content;
    });
  };

  // Function to render embedded content
  const renderEmbeds = (embedArray) => {
    return embedArray.map((embed, index) => {
      if (embed.type === "external") {
        return (
          <div key={index} className="embed-container">
            <a src={embed.external.url} title={`Embedded content ${index}`}>
              link
            </a>
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div id="blog-post-full-page-wrapper">
      {/* Render Notion content */}
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
        {/* Render post content as HTML */}
        <div className="post-content">
          {renderRichText(pageData.properties.Content.rich_text)}
          <br></br>
          {pageData.embeds && (
            <div className="embedded-content">
              {renderEmbeds(pageData.embeds)}
            </div>
          )}
        </div>

        {/* Render embedded content */}
      </div>
    </div>
  );
}

export default BlogPostFullPage;
