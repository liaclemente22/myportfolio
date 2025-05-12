import { Link } from "react-router-dom";
import "./Home.css"; // Optional CSS for styling

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
      <footer className="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:liaalmidaclemente@gmail.com">liaalmidaclemente@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/yourgithub" target="_blank">github.com/yourgithub</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourlinkedin" target="_blank">linkedin.com/in/yourlinkedin</a></p>
      </footer>
    </div>
  );
};

export default Home;
