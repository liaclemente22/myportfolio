import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../global.css";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;

    fetch(`${apiUrl}/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load blogs.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <section className="py-5 blog-list-section">
      <div className="container">
        <h1 className="section-title mb-4 text-center">Latest Blog Posts</h1>

        <div className="row">
          {blogs.map((blog) => (
            <div key={blog._id} className="col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                {blog.image && (
                  <img
                    src={`${process.env.REACT_APP_API_URL}/${blog.image.replace(/^\//, '')}`}
                    alt={blog.title}
                    className="card-img-top"
                    onError={(e) => {
                      e.target.src = "/fallback.jpg";
                    }}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text text-muted">
                    {blog.content.replace(/<[^>]+>/g, '').slice(0, 120)}...
                  </p>
                  <div className="mt-auto">
                    <span className="badge bg-primary me-2">{blog.category}</span>
                    <Link to={`/blogs/${blog._id}`} className="btn btn-sm btn-outline-primary mt-2">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
