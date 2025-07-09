import '../global.css'; 
import AboutMe from "../components/AboutMe";

const About = () => {
  return (
    <div className="about-page">
      <section className="py-5">
        <div className="container">

          {/* Imported AboutMe Component */}
          <AboutMe />

          {/* Info Section */}
          <div className="row mt-5 text-start info-section">
            <div className="col-md-4 mb-4">
              <h5 className="info-title">Languages</h5>
              <ul className="list-unstyled">
                <li>• English – Fluent</li>
                <li>• Filipino – Native</li>
                <li>• Spanish – Fluent</li>
                <li>• Mandarin – Intermediate</li>
              </ul>
            </div>

            <div className="col-md-4 mb-4">
              <h5 className="info-title">Skills</h5>
              <ul className="list-unstyled">
                <li>• Full Stack Web Development (React, Node.js, MongoDB)</li>
                <li>• IT Support (Windows, macOS, O365, Active Directory)</li>
                <li>• Cloud & Virtualization (VMware, basic Azure/AWS)</li>
              </ul>
            </div>

            <div className="col-md-4 mb-4">
              <h5 className="info-title">Interests</h5>
              <ul className="list-unstyled">
                <li>• Personal growth & mindset development</li>
                <li>• Writing reflections & journal blogging</li>
                <li>• Exploring productivity tools & digital planning</li>
                <li>• Tech blogging & cloud infrastructure</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
