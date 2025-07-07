import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ITSupport.css"; 

const ITSupport = () => {
  const navigate = useNavigate();

  return (
    <section className="it-support-section position-relative">
      
      {/* Back Button positioned absolute top-left */}
      <button 
        className="btn btn-outline-secondary back-btn" 
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="container text-center">

        {/* Header Section */}
        <div className="header mb-5">
          <h1 className="section-title">IT Support Portfolio</h1>
          <p className="lead">IT Service Desk | Technical Support | Automation | Troubleshooting</p>
          <a href="mailto:liaalmidaclemente@gmail.com" className="btn btn-outline-primary mt-3">Contact Me</a>
        </div>

        {/* Skills Section */}
        <div className="skills mb-5">
          <h2 className="sub-title">Skills & Tools</h2>
          <ul className="list-unstyled mt-3">
            <li>Windows, macOS (Basic), Linux (Basic)</li>
            <li>Active Directory, ADSP, Office 365, EAC</li>
            <li>Networking (TCP/IP, VPN, DHCP)</li>
            <li>PowerShell, Bash, Oracle SQL Developer</li>
            <li>ServiceNow, Jira, Confluence</li>
            <li>Remote Support Tools (SCCM, Bomgar, RDP, Citrix, VDI, VMWare)</li>
            <li>SentinelOne (EDR/XDR), AirWatch (MDM)</li>
          </ul>
        </div>

        {/* Projects Section */}
        <div className="projects mb-5">
          <h2 className="sub-title">Projects</h2>

          <div className="row justify-content-center mt-4">
            <div className="col-md-4 mb-4">
              <div className="portfolio-card h-100 text-center shadow">
                <h4>IT Service Management Blogs</h4>
                <p>Insights and articles on ITSM best practices and troubleshooting.</p>
                <Link to="/it-support/blogs/67ef3e119a58b38fac63cf5b" className="btn btn-primary mt-2">View Blog</Link>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="portfolio-card h-100 text-center shadow">
                <h4>Automated Password Reset Script</h4>
                <p>PowerShell script to automate secure password resets in Active Directory.</p>
                <Link to="/it-support/automated-password-reset" className="btn btn-primary mt-2">View Code</Link>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="portfolio-card h-100 text-center shadow">
                <h4>Network Troubleshooting Guide</h4>
                <p>Step-by-step guide to resolving common network issues effectively.</p>
                <a href="../assets/My network troubleshooting.pdf" className="btn btn-primary mt-2" target="_blank" rel="noopener noreferrer">Download PDF</a>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Section */}
        <div className="resume mt-5">
          <a href="../assets/Resume.pdf" className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </div>

      </div>
    </section>
  );
};

export default ITSupport;
