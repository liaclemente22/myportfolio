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
                <li>• Frontend: HTML, CSS, JavaScript (ES6+), React.js</li>
                <li>• Backend: Node.js, Express.js, REST APIs</li>
                <li>• Databases: MySQL, MongoDB, Oracle SQL</li>
                <li>• IT Support: Windows, macOS, O365, Active Directory, PC break/fix</li>
                <li>• Cloud & Admin: Microsoft 365 Admin, Intune (MDM), Basic Azure AD</li>
                <li>• Security & Ops: Endpoint security, DNS/DHCP troubleshooting, server monitoring (PuTTY)</li>
                <li>• Tools: Git/GitHub, ServiceNow, Jira, Postman</li>
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
