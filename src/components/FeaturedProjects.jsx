import { Link } from "react-router-dom";
import { FaTools, FaCode, FaBuilding } from "react-icons/fa";
import "./FeaturedProjects.css";

const FeaturedProjects = () => {
  return (
  <>
    <section className="featuredprojects py-5">
      <div className="featured-content text-center">
        <h2 className="mb-4">Featured Projects</h2>

        <div className="row g-4">

          {/* IT Support Solutions */}
          <div className="col-lg-4 col-md-6">
            <Link to="/it-support" className="project-link text-decoration-none text-dark">
              <div className="card h-100 shadow text-center">
                <div className="card-body">
                  <h5 className="card-title">
                    <FaTools className="me-2" />
                    IT Support Solutions
                  </h5>
                  <p className="card-text">
                    Remote troubleshooting, ticket management, and helpdesk tools.
                  </p>
                  <span className="btn btn-primary mt-2">Explore</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Web Development Projects */}
          <div className="col-lg-4 col-md-6">
            <Link to="/web-dev" className="project-link text-decoration-none text-dark">
              <div className="card h-100 shadow text-center">
                <div className="card-body">
                  <h5 className="card-title">
                    <FaCode className="me-2" />
                    Web Development Projects
                  </h5>
                  <p className="card-text">
                    Modern, responsive websites built with React, HTML, and CSS.
                  </p>
                  <span className="btn btn-primary mt-2">Explore</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Real Estate Tools */}
          <div className="col-lg-4 col-md-6">
            <Link to="/real-estate" className="project-link text-decoration-none text-dark">
              <div className="card h-100 shadow text-center">
                <div className="card-body">
                  <h5 className="card-title">
                    <FaBuilding className="me-2" />
                    Real Estate Tools
                  </h5>
                  <p className="card-text">
                    Property management platforms for real estate listings.
                  </p>
                  <span className="btn btn-primary mt-2">Explore</span>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>


      <section className="additional-projects container text-center py-5">
      <h2 className="additionalproject-title mb-4">Additional Projects</h2>
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
