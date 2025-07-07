import "./RealEstate.css";
import { useNavigate } from "react-router-dom";

const RealEstate = () => {
  const navigate = useNavigate();

  return (
    <section className="it-support-section position-relative">

      {/* Back Button - Top Left */}
      <button 
        className="btn btn-outline-secondary back-btn" 
        onClick={() => navigate(-1)} >
        ← Back
      </button>

      <div className="container text-center">
        
        {/* Header Section */}
        <div className="header mb-5">
          <h1 className="section-title">Real Estate Portfolio</h1>
          <p className="lead">Real Estate Professional | Sales | Investment Consulting</p>
          <a href="mailto:liaalmidaclemente@gmail.com" className="btn btn-outline-primary mt-3">Contact Me</a>
        </div>

        {/* Skills Section */}
        <div className="skills mb-5">
          <h2 className="sub-title">Real Estate Expertise</h2>
          <ul className="list-unstyled mt-3">
            <li>Residential & Commercial Property Sales</li>
            <li>Investment Consulting</li>
            <li>Sales and Marketing Strategies</li>
            <li>Negotiation & Contract Handling</li>
          </ul>
        </div>

        {/* Properties / Projects */}
        <div className="projects mb-5">
          <h2 className="sub-title">Featured Properties</h2>

          <div className="row justify-content-center mt-4">
            <div className="col-md-4 mb-4">
              <div className="portfolio-card h-100 text-center shadow">
                <h4>Metro Manila Residential Condo</h4>
                <p>Spacious 3-bedroom, 2-bath condo located in a prime area with modern amenities.</p>
                <a href="#" className="btn btn-primary mt-2" target="_blank" rel="noopener noreferrer">View Listing</a>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="portfolio-card h-100 text-center shadow">
                <h4>House and Lot by Avida</h4>
                <p>Affordable, high-quality property development perfect for families and investors.</p>
                <a href="#" className="btn btn-primary mt-2" target="_blank" rel="noopener noreferrer">View Listing</a>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Section */}
        <div className="resume mt-5">
          <a href="../assets/Resume.pdf" className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </div>

      </div>
    </section>
  );
};

export default RealEstate;
