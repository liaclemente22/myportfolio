import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import FeaturedProjects from "../components/FeaturedProjects";
import Connect from "../components/Connect";
import '../global.css';

const Home = () => {
  return (
    <div className="home">
  <Hero />
  <AboutMe />
  <FeaturedProjects />
  <Connect />


    </div>
  );
};

export default Home;
