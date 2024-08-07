import BlogPostCard from "../components/BlogPostCard";

import MOCK_DATA from "../data/MOCK_BLOGPOST_DATA.json";

function HomePage() {
  return (
    <div id="home-page-wrapper">
      <h2>Home Feed</h2>
      <hr />
      <div className="blog-posts-wrapper">
        {/* {MOCK_DATA.map((MOCK_POST) => {
          return (
            <BlogPostCard
              key={MOCK_POST.postID}
              postID={MOCK_POST.postID}
              post_title={MOCK_POST.post_title}
              post_date={MOCK_POST.post_date}
              post_author={MOCK_POST.post_author}
              post_type={MOCK_POST.post_type}
              post_desc={MOCK_POST.post_desc}
              post_content={MOCK_POST.post_content}
              post_img={MOCK_POST.post_img}
              post_status={MOCK_POST.post_status}
            />
          );
        })} */}
      </div>
    </div>
  );
}

export default HomePage;
