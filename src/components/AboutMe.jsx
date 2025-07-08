const AboutMe = () => {
  return (
        <section id="about" className="about-section py-5">
          <div className="about-content text-center">
            <h2 className="mb-4">About Me</h2>
            <p className="lead mb-4">
              I'm Lia Almida Clemente — a tech-driven professional with over 10 years of experience 
              in IT Service Desk, technical support, and real estate services.
            </p>
            <p>
              Currently pivoting into Full Stack Web Development, I specialize in building efficient, responsive tools that solve real-world problems. I'm passionate about exploring automation, streamlining complex workflows, and creating intuitive, user-friendly platforms.
            </p>
            <p>
              My background blends IT Support, customer service, and a growing expertise in modern web technologies —
              allowing me to deliver solutions that bridge technology and business needs.
            </p>

            <div className="row mt-5 text-start info-section">
              <div className="col-md-4">
                <h5> Languages</h5>
                <ul className="list-unstyled">
                  <li>• English – Fluent</li>
                  <li>• Filipino – Native</li>
                  <li>• Spanish – Fluent</li>
                  <li>• Mandarin – Intermediate</li>
                </ul>
              </div>

              <div className="col-md-4">
                <h5>Skills</h5>
                <ul className="list-unstyled">
                  <li>• Full Stack Web Development (React, Node.js, MongoDB)</li>
                  <li>• IT Support (Windows, macOS, O365, Active Directory)</li>
                  <li>• Cloud & Virtualization (VMware, basic Azure/AWS)</li>
                </ul>
              </div>

              <div className="col-md-4">
                <h5>Interests</h5>
                <ul className="list-unstyled">
                  <li>• Tech blogging & documentation</li>
                  <li>• UI/UX design trends</li>
                  <li>• Learning cloud infrastructure</li>
                  <li>• Language learning & travel</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

  );
};

export default AboutMe;
