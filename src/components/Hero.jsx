import React, { useState, useEffect } from "react";
import './Hero.css';
import { Link } from 'react-scroll';

const Hero = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <section className="hero-section">
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {theme === 'light' ? ' Dark Mode' : ' Light Mode'}
        </button>
      </div>

      <div className="hero-row">
        <div className="image-column">
          <div className="hero-image-wrapper">
            <div className="blob-background"></div>
            <img
              src="/images/profile1.png"
              alt="Lia Almida Clemente"
              className="hero-image-plain"
            />
          </div>
        </div>

        <div className="hero-column text-column">
          <h1 className="hero-title">Hi, I'm Lia Almida Clemente</h1>
        <p className="hero-subtitle">
  Eager learner and aspiring Full-Stack Developer, blending creativity with code to craft responsive websites and grow through real-world tech challenges.
</p>


          <div className="hero-buttons">
            <a href="/portfolio" className="btn btn-primary hero-btn">Explore My Portfolio</a>
            <Link to="contact" smooth={true} duration={500} className="btn btn-outline-dark hero-btn">
  Let's Connect </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
