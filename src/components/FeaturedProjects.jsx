import { Link } from "react-router-dom";
import "../global.css";

const featuredProjects = [
  {
    image: "/images/itsupport.png",
    title: "IT Support Solutions",
    description: "Remote troubleshooting, ticket management, and helpdesk tools.",
    to: "/it-support",
  },
  {
    image: "/images/webdev.jpg",
    title: "Web Development Projects",
    description: "Modern, responsive websites built with React, HTML, and CSS.",
    to: "/web-dev",
  },
  {
    image: "/images/realestate.jpg",
    title: "Real Estate Tools",
    description: "Property management platforms for real estate listings.",
    to: "/real-estate",
  },
];

const wordpressProjects = [
  {
    image: "/images/lifeandchances.png",
    title: "Life & Chances",
    description: "A personal development blog built with WordPress.",
    external: "https://lifeandchances.com/",
  },
  {
    image: "/images/bikes.png",
    title: "Classic Bicycles",
    description: "A vintage bicycle showcase site using WordPress.",
    external: "https://classicbicycles1349.wordpress.com/",
  },
];

const FeaturedProjects = () => {
  return (
    <>
      {/* === Featured Projects Section === */}
      <section id="projects" className="featuredprojects py-5">
        <div className="container text-center">
          <h2 className="section-title mb-4">Featured Projects</h2>
          <div className="row g-4">
            {featuredProjects.map((proj, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <Link to={proj.to} className="text-decoration-none text-dark">
                  <ProjectCard proj={proj} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WordPress Projects Section === */}
      <section className="wordpress-projects py-5 bg-white">
        <div className="container text-center">
          <h2 className="section-title mb-4">WordPress Projects</h2>
          <div className="row g-4 justify-content-center">
            {wordpressProjects.map((proj, index) => (
              <div className="col-md-4 col-sm-6" key={index}>
                <a
                  href={proj.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 shadow-sm border-0 hover-shadow transition">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="card-img-top"
                      style={{
                        height: "180px",
                        objectFit: "cover",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                      }}
                    />
                    <div className="card-body text-center">
                      <h6 className="card-title fw-semibold">{proj.title}</h6>
                      <p className="card-text small">{proj.description}</p>
                      <span className="btn btn-outline-secondary btn-sm mt-2">Visit Site</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const ProjectCard = ({ proj }) => (
  <div className="card h-100 shadow-sm border-0 hover-shadow transition">
    <img
      src={proj.image}
      alt={proj.title}
      className="card-img-top"
      style={{
        height: "200px",
        objectFit: "cover",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      }}
    />
    <div className="card-body d-flex flex-column text-center">
      <h5 className="card-title fw-semibold">{proj.title}</h5>
      <p className="card-text">{proj.description}</p>
      <div className="mt-auto">
        <span className="btn btn-outline-primary">Explore</span>
      </div>
    </div>
  </div>
);

export default FeaturedProjects;
