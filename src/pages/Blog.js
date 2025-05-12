import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Blog.css";

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
    <div>
      <h1>{blog.title}</h1>

      {blog.image && (
        <img
          // Use the dynamic API URL for images as well
          src={`${process.env.REACT_APP_API_URL}/${blog.image.replace(/^\//, '')}`} 
          alt={blog.title}
          style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
          onError={(e) => {
            console.log("Image failed to load:", e.target.src);
            if (e.target.src !== "/fallback.jpg") {
              e.target.src = "/fallback.jpg";  // Ensure fallback image path is correct
            }
          }}
        />
      )}

      <div>
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
        <p><strong>Category:</strong> {blog.category}</p>
        <p><strong>Published:</strong> {blog.isPublished ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

export default Blog;
