


const Contact = () => {
  return (
        <section id="contact" className="contact-section bg-light pt-4 pb-2">
          <div className="container text-center">
            <h2 className="mb-3 title">Let's Connect</h2>
            <p className="mb-4 lead">I'm open to new opportunities, collaborations, and networking.</p>

            <div className="d-flex justify-content-center flex-wrap mb-4">
              <a href="mailto:liaalmidaclemente@gmail.com" className="btn btn-primary m-2">
                Email Me
              </a>
              <a href="https://github.com/liaclemente22" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark m-2">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/lia-almida-clemente-116690142/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary m-2">
                LinkedIn
              </a>
            </div>

            <p className="text-muted"> Based in the Philippines · Available for remote work</p>
          </div>
        </section>
  );
};

export default Contact; 