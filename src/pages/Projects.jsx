import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProjectsPage.css";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "Task Manager App",
    category: "Web Development",
    description: "A MERN stack app for managing tasks with user auth and CRUD.",
    tech: ["React", "Node.js", "MongoDB"],
    codeLink: "https://github.com/liaclemente22/task-manager",
    liveLink: "https://your-task-app.netlify.app",
  },
  {
    title: "Helpdesk Knowledge Base",
    category: "IT Support",
    description: "A searchable knowledge base for resolving common IT issues.",
    tech: ["React", "Firebase", "Bootstrap"],
    codeLink: "https://github.com/liaclemente22/helpdesk-faq",
    liveLink: "https://your-helpdesk-app.vercel.app",
  },
  {
    title: "Real Estate Listings",
    category: "Real Estate",
    description: "Static website showcasing available properties with contact forms.",
    tech: ["HTML", "CSS", "JavaScript"],
    codeLink: "https://github.com/liaclemente22/real-estate-site",
    liveLink: "https://realestate-lia.netlify.app",
  },
  {
    title: "Customer Support Dashboard",
    category: "CSR/TSR",
    description: "Tool for tracking support tickets and call logs.",
    tech: ["Vue.js", "Express", "MongoDB"],
    codeLink: "https://github.com/liaclemente22/support-dashboard",
    liveLink: "https://csr-dashboard.vercel.app",
  },
];

const categories = ["All", "Web Development", "IT Support", "Real Estate", "CSR/TSR"];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((proj) => proj.category === selectedCategory);

  return (
    <section className="projects-page container py-5">
      <h2 className="text-center mb-4">My Work</h2>

      <div className="text-center mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn mx-2 mb-2 ${
              selectedCategory === cat ? "btn-dark" : "btn-outline-dark"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row">
        {filteredProjects.map((project, index) => (
          <motion.div
            className="col-md-6 col-lg-4 mb-4"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="mt-auto">
                  <p className="small text-muted">{project.tech.join(", ")}</p>
                  <div className="d-flex gap-2 mt-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Live
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-secondary btn-sm"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;