import React from "react";
import { Link } from "react-router-dom";
import "../components/ITSupport.css"; // Custom CSS for IT Support

const ITSupport = () => {
  return (
    <div className="it-support-container">
      {/* Header Section */}
      <header className="it-support-header">
        <h1>Lia Almida Clemente</h1>
        <p>IT Service Desk | Technical Support | Automation</p>
        <div className="contact-info">
          <a href="mailto:liaalmidaclemente@gmail.com">liaalmidaclemente@gmail.com</a>
        </div>
      </header>

      {/* Skills Section */}
      <section className="it-support-skills">
        <h2>Skills & Tools</h2>
        <ul>
          <li>Windows, macOS, Linux (Basic)</li>
          <li>Active Directory, ADSP, Office 365, EAC</li>
          <li>Networking (TCP/IP, VPN, DHCP)</li>
          <li>PowerShell, Bash, Oracle SQL Developer </li>
          <li>ServiceNow, Jira, Confluence</li>
          <li>Remote Support Tools (SCCM, Bomgar, RDP, Citrix, VDI, VMWare, FileZilla, Putty)</li>
          <li>SentinelOne (EDR/XDR)</li>
          <li>AirWatch (MDM)</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="it-support-projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>IT Service Management Blogs</h3>
          {/* Updated Link */}
          <Link to="/it-support/blogs/67ef3e119a58b38fac63cf5b">View Blog</Link>
        </div>
        <div className="project">
          <h3>Automated Password Reset Script</h3>
          <p>PowerShell script that resets Active Directory passwords.</p>
          <Link to="/it-support/automated-password-reset">View Code</Link>
        </div>
        <div className="project">
          <h3>Network Troubleshooting Guide</h3>
          <p>A structured guide to troubleshooting network issues.</p>
          <a href="../assets/My network troubleshooting.pdf">Download PDF</a>
        </div>
      </section>

      {/* Resume Section */}
      <section className="it-support-resume">
        <a href="../assets/Resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
      </section>
    </div>
  );
};

export default ITSupport;
