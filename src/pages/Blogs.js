import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../global.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch blogs");
        setLoading(false);
      });
  }, [apiUrl]);

  return (
    <section className="blog-list-section py-5">
      <div className="container">
        <h1 className="section-title text-center mb-5">Latest Blog Posts</h1>

        {loading && <p className="text-center">Loading blogs...</p>}
        {error && <p className="text-danger text-center">{error}</p>}

        <div className="row">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div className="col-md-6 col-lg-4 mb-4" key={blog._id}>
                <div className="card shadow-sm h-100">
                  {blog.image && (
                    <img
                      src={`${apiUrl}/${blog.image.replace(/^\//, '')}`}
                      className="card-img-top"
                      alt={blog.title}
                      onError={(e) => {
                        e.target.src = "/fallback.jpg";
                      }}
                    />
                  )}
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text text-muted">
                      {blog.content.replace(/<[^>]+>/g, "").slice(0, 100)}...
                    </p>
                    <Link
                      to={`/blogs/${blog._id}`}
                      className="btn btn-outline-primary mt-auto"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            !loading && <p className="text-center">No blog posts available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
