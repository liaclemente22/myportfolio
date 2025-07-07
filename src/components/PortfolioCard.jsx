import { FaExternalLinkAlt } from "react-icons/fa";

const PortfolioCard = ({ title, description, link, linkText }) => (
  <div className="col-md-4 mb-4">
    <div className="portfolio-card h-100 text-center shadow p-4">
      <h4>{title}</h4>
      <p>{description}</p>
      <a href={link} className="btn btn-primary mt-3 portfolio-btn">
        {linkText} <FaExternalLinkAlt className="ms-2" />
      </a>
    </div>
  </div>
);

export default PortfolioCard;
