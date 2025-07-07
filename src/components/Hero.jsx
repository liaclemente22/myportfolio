import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container-fluid px-5">
        <div className="row align-items-center justify-content-center">

          {/* Text Column */}
          <div className="col-lg-6 col-md-7 text-center text-lg-start">
            <h1 className="hero-title">Hi, I'm Lia Almida Clemente</h1>
            <p className="hero-subtitle">IT Service Desk | Web Development | Real Estate</p>

            <div className="hero-buttons mt-4">
              <a href="/portfolio" className="btn btn-primary hero-btn me-3">Explore My Portfolio</a>
              <a href="#contact" className="btn btn-outline-dark hero-btn">Let's Connect</a>
            </div>
          </div>

          {/* Image Column with background wrapper */}
          <div className="col-lg-5 col-md-5 text-center mt-4 mt-lg-0">
            <div className="hero-image-wrapper mx-auto">
              <img src="/images/profile1.png" alt="Lia Almida Clemente" className="img-fluid hero-image" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
