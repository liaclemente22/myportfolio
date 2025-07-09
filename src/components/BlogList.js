import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BlogList.css";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;

    fetch(`${apiUrl}/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog list:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading blogs...</p>;

  return (
    <section className="bloglist-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">Blog Posts</h2>

        <div className="row">
          {blogs.map((blog) => (
            <div className="col-md-6 mb-4" key={blog._id}>
              <div className="card h-100 shadow">
                {blog.image && (
                  <img
                    src={`${process.env.REACT_APP_API_URL}/${blog.image.replace(/^\//, '')}`}
                    alt={blog.title}
                    className="card-img-top"
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.content.slice(0, 100)}...</p>
                  <Link to={`/blog/${blog._id}`} className="btn btn-primary">Read More</Link>
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
