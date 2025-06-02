import { Link } from "react-router-dom";
import "./Home.css"; 

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <header className="hero">
        <h1>Lia Almida Clemente</h1>
        <p>IT Service Desk | Web Development | Real Estate</p>
      </header>

      {/* Role Selection Section */}
      <section className="roles">
        <h2>Explore My Work</h2>
        <div className="role-buttons">
          <Link to="/it-support" className="role-btn">IT Support Portfolio</Link>
          <Link to="/web-dev" className="role-btn">Web Developer Portfolio</Link>
          <Link to="/real-estate" className="role-btn">Real Estate Portfolio</Link>

        </div>
      </section>


    <section className="other">
      <h2>Other Work Explorations</h2>
      <div className="role-buttons">
       <a href="https://lifeandchances.com/" target="_blank" rel="noopener noreferrer" className="role-btn">WordPress Web Development Creation</a>
       </div>
      </section>


      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          With 10 years of experience in IT Service Desk, technical support, and real estate, 
          I am now transitioning into Full Stack Web Development. Passionate about problem-solving, 
          automation, and technology-driven solutions.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:liaalmidaclemente@gmail.com" rel="noopener noreferrer" target="_blank">liaalmidaclemente@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/liaclemente22/" rel="noopener noreferrer" target="_blank">github.com/liaclemente22</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/lia-almida-clemente-116690142/" rel="noopener noreferrer" target="_blank">linkedin.com/in/lia-almida-clemente</a></p>
      </section>
    </div>
  );
};

export default Home;
