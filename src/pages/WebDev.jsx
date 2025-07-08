import { useNavigate } from "react-router-dom";
import "./WebDev.css";

const WebDev = () => {
  const navigate = useNavigate();

  return (
    <section className="it-support-section position-relative">
      {/* Back Button */}
      <button 
        className="btn btn-outline-secondary back-btn" 
        onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="container text-center">
        {/* Header Section */}
        <div className="header mb-5">
          <h1 className="section-title">Web Development Portfolio</h1>
          <p className="lead">Full Stack Developer | React | Node.js | MongoDB | Express</p>
          <a href="mailto:liaalmidaclemente@gmail.com" className="btn btn-outline-primary mt-3">Contact Me</a>
        </div>

        {/* Skills Section */}
        <div className="skills mb-5">
          <h2 className="sub-title">Skills & Technologies</h2>
          <div className="d-flex justify-content-center">
            <ul className="list-unstyled text-start" style={{ maxWidth: "600px" }}>
              <li><strong>Frontend:</strong> React.js, Next.js, HTML, CSS, JavaScript, TailwindCSS</li>
              <li><strong>Backend:</strong> Node.js, Express.js, Typescript</li>
              <li><strong>Database:</strong> MongoDB, NoSQL, MySQL (Basic)</li>
              <li><strong>API:</strong> REST APIs, GraphQL</li>
              <li><strong>Authentication:</strong> JWT (JSON Web Token)</li>
              <li><strong>Other Tools:</strong> Git, Docker, CI/CD</li>
              <li><strong>Additional:</strong> Python (Basic)</li>
            </ul>
          </div>
        </div>

        {/* Projects Section */}
        <section className="projects mb-5">
          <h2 className="sub-title">Web Development Projects</h2>

          <div className="row justify-content-center mt-4">

            {/* Airline Web App */}
            <div className="col-md-4 mb-4">
              <div className="portfolio-card h-100 text-center shadow">
                <h4>Airline Web App</h4>
                <p>Mabuhay Airlines is a full stack airline booking application with search, booking, and promo features. Built with React, Node.js, Express, and MongoDB.</p>
                <p><em>Role:</em> Project Collaborator</p>
                <a href="https://mabuhay-airlines-fs.vercel.app/" target="_blank" className="btn btn-primary mt-2">View Project</a>
              </div>
            </div>

            {/* E-Commerce Platform */}
            <div className="col-md-4 mb-4">
              <div className="portfolio-card h-100 text-center shadow">
                <h4>E-Commerce Platform</h4>
                <p>Full stack e-commerce site from Zuitt Bootcamp with authentication, product management, and order processing. Uses HTML, CSS, JavaScript, Node.js, Express, and MongoDB.</p>
                <p><em>Role:</em> Backend Development Partner</p>
                <a href="http://zuitt-bootcamp-prod-521-8370-clemente.s3-website.us-east-1.amazonaws.com/" target="_blank" className="btn btn-primary mt-2">View Project</a>
              </div>
            </div>

            {/* EduHub */}
            <div className="col-md-4 mb-4">
              <div className="portfolio-card h-100 text-center shadow">
                <h4>EduHub - Educational Platform</h4>
                <p>Interactive educational platform built with HTML, CSS, and Bootstrap for learning resources and student engagement.</p>
                <p><em>Role:</em> Solo Project</p>
                <a href="https://liaclemente22.github.io/Eduhub/" target="_blank" className="btn btn-primary mt-2">View Project</a>
              </div>
            </div>

            {/* NEW: Car Showcase */}
            <div className="col-md-4 mb-4">
              <div className="portfolio-card h-100 text-center shadow">
                <h4>Car Showcase App</h4>
                <p>A sleek frontend project using Next.js and TailwindCSS to display dynamic car models with filtering and search. Deployed on Vercel.</p>
                <p><em>Role:</em> Solo Developer</p>
                <a href="https://cars-showcase-indol.vercel.app/" target="_blank" className="btn btn-primary mt-2">View Project</a>
              </div>
            </div>

            {/* Jermon Artist Website */}
            <div className="col-md-4 mb-4">
              <div className="portfolio-card h-100 text-center shadow">
                <h4>Artist Website</h4>
                <p>A sample portfolio website built for an artist, showcasing original artwork, profile highlights, and a clean visual layout. Developed using HTML, CSS, and JavaScript.</p>
                <p><em>Role:</em> Solo Developer</p>
                <a href="https://liaclemente22.github.io/jermon/" target="_blank" className="btn btn-primary mt-2">View Project</a>
              </div>
            </div>


          </div>
        </section>

        {/* Contact / Resume Section */}
        <div className="resume mt-5">
          <a href="../assets/Resume.pdf" className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default WebDev;
