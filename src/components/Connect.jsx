import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import '../global.css';

const Connect = () => {
  return (
    <section id="connect" className="connect-section palette-bg py-5">
      <div className="container text-center">
        <h2 className="section-title mb-3">Let's Connect</h2>
        <p className="lead mb-4">
          I'm open to new opportunities, collaborations, and networking. Feel free to reach out.
        </p>

        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mb-4">
          <a
            href="mailto:liaalmidaclemente@gmail.com"
            className="btn btn-palette d-flex align-items-center gap-2 px-4"
          >
            <FaEnvelope />
            Email Me
          </a>

          <a
            href="https://github.com/liaclemente22"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-palette d-flex align-items-center gap-2 px-4"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/lia-almida-clemente-116690142/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-palette d-flex align-items-center gap-2 px-4"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>

        <p className="text-muted small">Based in the Philippines · Available for remote work</p>
      </div>
    </section>
  );
};

export default Connect;
