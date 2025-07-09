import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import FeaturedProjects from "../components/FeaturedProjects";
import Connect from "../components/Connect";



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
