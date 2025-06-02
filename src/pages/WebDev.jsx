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
          <h3>Airline Web App</h3>
          <p>Mabuhay Airlines is a full stack airline booking web application that allows users to search for flights, book tickets, apply promo fares, and manage bookings. The frontend is built with React.js and Bootstrap, while the backend uses Node.js, Express, and MongoDB. </p>
          <p><em>Role:</em> Project Collaborator</p>
          <a href="https://mabuhay-airlines-fs.vercel.app/" target="_blank">View Project</a>
        </div>

        <div className="project">
          <h3>E-Commerce Platform</h3>
          <p>This is a full stack e-commerce web application developed as a capstone project during the Zuitt Coding Bootcamp. It features user authentication, product catalog browsing, cart management, and admin controls for product and order management. The frontend was built using HTML, CSS, and JavaScript, while the backend was developed using Node.js, Express, and MongoDB.</p>
          <p><em>Role:</em> Backend Development Partner</p>
          <a href="http://zuitt-bootcamp-prod-521-8370-clemente.s3-website.us-east-1.amazonaws.com/" target="_blank">View Project</a>
        </div>
      </section>

      {/* Contact */}
      <footer>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:liaalmidaclemente@gmail.com">liaalmidaclemente@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/liaclemente22/" target="_blank">github.com/liaclemente22/</a></p>
      </footer>
    </div>
  );
};

export default WebDev;
