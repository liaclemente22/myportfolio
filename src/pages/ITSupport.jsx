import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ITSupport.css";

const ITSupport = () => {
  const navigate = useNavigate();

  return (
    <section className="it-support-section position-relative">
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
            <ul className="list-unstyled skills-list mt-3 text-start mx-auto">
              <li><strong>Operating Systems:</strong> Windows, macOS (Basic), Linux (Basic)</li>
              <li><strong>Directory & Identity Services:</strong> Active Directory, ADSP, Group Policy, IAM</li>
              <li><strong>Productivity & Collaboration:</strong> Microsoft 365, Exchange, Teams, Outlook, EAC</li>
              <li><strong>Networking:</strong> TCP/IP, DNS, DHCP, VPN, VLANs, Subnetting</li>
              <li><strong>Scripting & Tools:</strong> PowerShell, Bash, Oracle SQL Developer</li>
              <li><strong>Ticketing & Monitoring:</strong> ServiceNow, Jira, Confluence, SentinelOne</li>
              <li><strong>Remote Support Tools:</strong> SCCM, Bomgar, RDP, Citrix, VDI, WebEx, VMware</li>
              <li><strong>Security & Compliance:</strong> SPF, DKIM, DMARC, Encryption, Firewall Rules</li>
              <li><strong>MDM & Virtualization:</strong> AirWatch, VMware Workstation, vCenter</li>
            </ul>

        </div>

        {/* Work Responsibilities Summary Accordion */}
        <div className="responsibilities mb-5 text-start">
          <h2 className="sub-title text-center mb-4">Work Responsibilities Summary</h2>

          <div className="accordion" id="responsibilitiesAccordion">

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                  IT Support & Helpdesk Operations
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#responsibilitiesAccordion">
                <div className="accordion-body">
                  <ul>
                    <li>Provided L1 technical support for Windows, macOS, and Linux systems, including desktops, printers, network, and email (O365, Lotus Notes).</li>
                    <li>Resolved issues with antivirus, encryption, backup, SCCM, and admin tools.</li>
                    <li>Handled tickets via ServiceNow; performed triage and escalations.</li>
                    <li>Delivered remote support using WebEx, VNC, and RDP.</li>
                    <li>Collaborated with Level 2/3 teams while maintaining ticket ownership.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                  System Administration & Security
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#responsibilitiesAccordion">
                <div className="accordion-body">
                  <ul>
                    <li>Managed AD DS, DNS, DHCP, and group policy on Windows Server 2019/2022.</li>
                    <li>Automated admin tasks using PowerShell scripts.</li>
                    <li>Configured OS/software updates, backups, and access permissions.</li>
                    <li>Maintained secure file transfers and identity access via IAM/ADSP.</li>
                    <li>Monitored server health and compliance using Sentinel and Tenable.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                  VMware & Networking Support
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#responsibilitiesAccordion">
                <div className="accordion-body">
                  <ul>
                    <li>Used VMware Workstation and vCenter to deploy and manage VMs.</li>
                    <li>Remediated host issues, managed RBAC, and monitored compliance.</li>
                    <li>Configured IPs, DHCP, DNS, and VLANs; resolved connectivity issues.</li>
                    <li>Used tools like ping, tracert, tcpdump, and Wireshark for diagnostics.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                  Documentation, Collaboration & Hardware
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#responsibilitiesAccordion">
                <div className="accordion-body">
                  <ul>
                    <li>Created and updated SOPs and knowledge base articles.</li>
                    <li>Documented AD, network, backup, and IAM procedures.</li>
                    <li>Provided hardware support for desktops, laptops, and peripherals.</li>
                    <li>Performed diagnostics, repairs, upgrades, and vendor coordination.</li>
                    <li>Assisted in production deployments and conducted root cause analysis.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
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
