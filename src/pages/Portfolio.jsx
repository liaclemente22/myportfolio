// Portfolio Pages Setup
import { Link } from "react-router-dom";
import "./Portfolio.css";
import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="container text-center">
        <h2 className="section-title mb-4">My Portfolios</h2>
        <p className="mb-5">Explore my work in IT Support, Web Development, and Real Estate.</p>

        <div className="row justify-content-center">
          <PortfolioCard 
            title="IT Support Portfolio" 
            description="Ticketing system with knowledge base and ITSM tools." 
            link="/it-support"
          />
          <PortfolioCard 
            title="Web Development Portfolio" 
            description="Modern websites and full-stack applications." 
            link="/web-dev"
          />
          <PortfolioCard 
            title="Real Estate Portfolio" 
            description="Property listings, sales platforms, and tools for real estate." 
            link="/real-estate"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
