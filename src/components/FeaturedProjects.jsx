import { Link } from "react-router-dom";
import "./FeaturedProjects.css";

const FeaturedProjects = () => {
  return (
    <section className="featuredprojects py-5">
      <div className="container">
       

        <div className="row g-4">

          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow text-center">
              <div className="card-body">
                <h5 className="card-title">IT Support Solutions</h5>
                <p className="card-text">Remote troubleshooting, ticket management, and helpdesk tools.</p>
                <Link to="/it-support" className="btn btn-primary">Explore</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow text-center">
              <div className="card-body">
                <h5 className="card-title">Web Development Projects</h5>
                <p className="card-text">Modern, responsive websites built with React, HTML, and CSS.</p>
                <Link to="/web-dev" className="btn btn-primary">Explore</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mx-auto">
            <div className="card h-100 shadow text-center">
              <div className="card-body">
                <h5 className="card-title">Real Estate Tools</h5>
                <p className="card-text">Property management platforms for real estate listings.</p>
                <Link to="/real-estate" className="btn btn-primary">Explore</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
