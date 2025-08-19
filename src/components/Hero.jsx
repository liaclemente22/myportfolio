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
      {/* Theme Toggle */}
      <div className="theme-toggle">
        <button onClick={toggleTheme} className="theme-btn">
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>

      <div className="hero-row">
        {/* Profile Image */}
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

        {/* Text Content */}
        <div className="hero-column text-column">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Lia Clemente</span>
          </h1>
          <h2 className="hero-tagline">
            Aspiring Web Developer <span className="divider">|</span> 7+ Years IT Service Desk
          </h2>  
          <p className="hero-subtitle">
            From solving tech hiccups to exploring web development — I’m building my way toward meaningful digital experiences.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="/portfolio" className="btn btn-primary hero-btn">Explore My Portfolio</a>
            <Link to="contact" smooth={true} duration={500} className="btn btn-outline-light hero-btn">
              Let's Connect
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
