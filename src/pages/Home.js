import { Link } from "react-router-dom";
import "./Home.css";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import FeaturedProjects from "../components/FeaturedProjects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className="home">

     
        <Hero />
      

      {/* About Me Section */}
      <section className="about-section container text-center my-5">
        <AboutMe />
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section container my-5">
        <FeaturedProjects />
      </section>

      {/* Contact */}
      <section className="contact-section container my-5">
        <Contact />
      </section>
      {/* Contact */}
      <section className="footer-section container my-5">
        <Footer />
      </section>

    </div>
  );
};

export default Home;
