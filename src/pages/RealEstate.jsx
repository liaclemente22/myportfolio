import "../components/Portfolio.css";

const RealEstate = () => {
  return (
    <div className="portfolio">
      <h1>Real Estate Portfolio</h1>
      <p>Experienced in property sales, rentals, and investment consulting.</p>

      {/* Skills Section */}
      <section className="skills">
        <h2>Real Estate Expertise</h2>
        <ul>
          <li>Residential & Commercial Sales</li>
          <li>Investment Consulting</li>
          <li>Sales and Marketing </li>
          <li>Negotiation & Contracts</li>
        </ul>
      </section>

      {/* Featured Properties */}
      <section className="projects">
        <h2>Featured Properties</h2>
        <div className="project">
          <h3>Residential Condo in Metro Manila</h3>
          <p>3-bed, 2-bath condo in a prime location. Modern amenities included.</p>
          <a href="" target="_blank">View Listing</a>
        </div>

        <div className="project">
          <h3>House and Lot Properties</h3>
          <p>Afforadable and quality property development by Avida.</p>
          <a href="" target="_blank">View Listing</a>
        </div>
      </section>

      {/* Contact */}
      <footer>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:liaalmidaclemente@gmail.com">liaalmidaclemente@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/lia-almida-clemente-116690142/" target="_blank">linkedin.com/in/lia-almida-clemente-116690142/</a></p>
      </footer>
    </div>
  );
};

export default RealEstate;
