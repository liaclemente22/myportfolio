import { Link } from "react-router-dom";
import { FaTools, FaCode, FaBuilding } from "react-icons/fa";
import "../global.css";

const projects = [
  {
    icon: <FaTools size={40} />,
    title: "IT Support Solutions",
    description: "Remote troubleshooting, ticket management, and helpdesk tools.",
    to: "/it-support",
  },
  {
    icon: <FaCode size={40} />,
    title: "Web Development Projects",
    description: "Modern, responsive websites built with React, HTML, and CSS.",
    to: "/web-dev",
  },
  {
    icon: <FaBuilding size={40} />,
    title: "Real Estate Tools",
    description: "Property management platforms for real estate listings.",
    to: "/real-estate",
  },
];

const FeaturedProjects = () => {
  return (
    <>
      <section id="projects" className="featuredprojects py-5">
        <div className="container text-center">
          <h2 className="section-title mb-4">Featured Projects</h2>

          <div className="row g-4">
            {projects.map((proj, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <Link to={proj.to} className="text-decoration-none text-dark">
                  <div className="card h-100 shadow-sm border-0 hover-shadow transition">
                    <div className="card-body d-flex flex-column align-items-center text-center">
                      <div className="icon-box bg-light rounded-circle p-3 mb-3 text-primary">
                        {proj.icon}
                      </div>
                      <h5 className="card-title fw-semibold">{proj.title}</h5>
                      <p className="card-text">{proj.description}</p>
                      <div className="mt-auto">
                        <span className="btn btn-primary">Explore</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="additional-projects container text-center py-5">
        <h2 className="section-title mb-4">Additional Projects</h2>
        <div className="d-flex justify-content-center flex-wrap">
          <a
            href="https://lifeandchances.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary m-2"
          >
            Life & Chances – WordPress Site
          </a>
          <a
            href="https://classicbicycles1349.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary m-2"
          >
            Classic Bicycles – WordPress Site
          </a>
        </div>
      </section>
    </>
  );
};

export default FeaturedProjects;
