import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../global.css";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;

    fetch(`${apiUrl}/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setBlog(data);
        } else {
          setError("Blog not found");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching blog");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="blog-section py-5">
      <div className="container">
        <button
          className="btn btn-outline-secondary mb-4"
          onClick={() => window.history.back()}
        >
          ← Back to Blogs
        </button>

        <div className="blog-wrapper p-4 shadow-sm bg-white rounded">
          <h1 className="section-title text-center mb-4">{blog.title}</h1>

          {blog.image && (
            <img
              src={`${process.env.REACT_APP_API_URL}/${blog.image.replace(/^\//, '')}`}
              alt={blog.title}
              className="img-fluid rounded mb-4"
              style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
              onError={(e) => {
                console.log("Image failed to load:", e.target.src);
                if (e.target.src !== "/fallback.jpg") {
                  e.target.src = "/fallback.jpg";
                }
              }}
            />
          )}

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          <div className="d-flex justify-content-center gap-3 mt-4">
            <span className="badge bg-primary">{blog.category}</span>
            <span
              className={`badge ${blog.isPublished ? 'bg-success' : 'bg-secondary'}`}
            >
              {blog.isPublished ? "Published" : "Unpublished"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
