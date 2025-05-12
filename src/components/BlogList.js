import React, { useState, useEffect } from "react";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/blogs/`)
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div>
      <h2>Latest Blog Posts</h2>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog._id} style={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}>
            <h3>{blog.title}</h3>
            <p>{blog.content.substring(0, 100)}...</p>
            <p><strong>Category:</strong> {blog.category}</p>
            {blog.image && <img src={blog.image} alt={blog.title} width="200" />}
          </div>
        ))
      ) : (
        <p>Loading blogs...</p>
      )}
    </div>
  );
};

export default BlogList;
