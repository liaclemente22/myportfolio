import React from "react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Lia Almida Clemente</h1>
          <p className="text-gray-600">IT Service Desk | Technical Support | Automation</p>
          <div className="mt-4">
            <a
              href="mailto:your.liaalmidaclemente@gmail.com"
              className="text-blue-500 underline"
            >
              liaalmidaclemente@gmail.com
            </a>
          </div>
        </header>

        {/* Skills Section */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">Skills & Tools</h2>
          <ul className="mt-2 grid grid-cols-2 gap-3 text-gray-600">
            <li>Windows, macOS, Linux</li>
            <li>Active Directory, Office 365</li>
            <li>Networking (TCP/IP, VPN, DHCP)</li>
            <li>PowerShell, Bash, Python (Basic)</li>
            <li>ServiceNow, Zendesk, Jira</li>
            <li>Remote Support Tools (SCCM, AnyDesk)</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">Projects</h2>
          <div className="mt-3 space-y-4">
            <div className="bg-gray-50 p-4 rounded-xl shadow">
              <h3 className="text-lg font-semibold text-gray-800">IT Asset Management Dashboard</h3>
              <p className="text-gray-600">A web-based tool for tracking IT assets and service tickets.</p>
              <a href="#" className="text-blue-500 underline">View Demo</a>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl shadow">
              <h3 className="text-lg font-semibold text-gray-800">Automated Password Reset Script</h3>
              <p className="text-gray-600">PowerShell script that resets Active Directory passwords.</p>
              <a href="#" className="text-blue-500 underline">View Code</a>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl shadow">
              <h3 className="text-lg font-semibold text-gray-800">Network Troubleshooting Guide</h3>
              <p className="text-gray-600">A structured guide to troubleshooting network issues.</p>
              <a href="#" className="text-blue-500 underline">Download PDF</a>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section className="mt-6 text-center">
          <a
            href="#" // Add your resume link here
            className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-600"
          >
            Download Resume
          </a>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
