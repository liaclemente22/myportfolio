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
        <h2 className="section-title text-center mb-4">Featured Projects</h2>
        <FeaturedProjects />
      </section>

       {/* Additional Projects */}
      <section className="additional-projects container text-center my-5">
        <h2 className="section-title mb-4">Additional Projects</h2>
        <div className="d-flex justify-content-center flex-wrap">
          <a
            href="https://lifeandchances.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary m-2"
          >
            Life & Chances – WordPress Site
          </a>
          <a
            href="https://classicbicycles1349.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary m-2"
          >
            Classic Bicycles – WordPress Site
          </a>
        </div>
      </section>


     
      <Contact />
      <Footer />

    </div>
  );
};

export default Home;
