import "../components/Portfolio.css";

const WebDev = () => {
  return (
    <div className="portfolio">
      <h1>Web Development Portfolio</h1>
      <p>Full Stack Web Developer | React | Node.js | MongoDB | Express</p>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills & Technologies</h2>
        <ul>
          <li>React.js, Next.js</li>
          <li>Node.js, Express, MongoDB</li>
          <li>REST APIs, GraphQL</li>
          <li>JWT Authentication</li>
          <li>HTML, CSS, JavaScript</li>
          <li>Git, Docker, CI/CD</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Web Development Projects</h2>
        <div className="project">
          <h3>IT Asset Management Dashboard</h3>
          <p>A web-based tool for tracking IT assets and service tickets.</p>
          <a href="https://yourdemo.com" target="_blank">View Demo</a>
        </div>

        <div className="project">
          <h3>E-Commerce Platform</h3>
          <p>Backend Shopping with a secure checkout process.</p>
          <a href="https://documenter.getpostman.com/view/39840072/2sB2cUB3MA" target="_blank">View Code</a>
        </div>
      </section>

      {/* Contact */}
      <footer>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:liaalmidaclemente@gmail.com">liaalmidaclemente@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/yourgithub" target="_blank">github.com/yourgithub</a></p>
      </footer>
    </div>
  );
};

export default WebDev;
