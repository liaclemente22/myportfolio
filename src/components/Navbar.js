import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">

        {/* Brand aligned hard left */}
        <RouterLink className="navbar-brand ms-3" to="/">Lia Almida Clemente</RouterLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links justified far right */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav me-3">

            {/* Smooth scroll to #about section */}
            <li className="nav-item mx-2">
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
              >
                About
              </ScrollLink>
            </li>

            {/* Route to Home/Projects page */}
                <li className="nav-item dropdown mx-2">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="projectsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Projects
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="projectsDropdown">
                    <li>
                      <RouterLink to="/portfolio" className="dropdown-item">All Projects</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/it-support" className="dropdown-item">IT Support Tools</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/web-dev" className="dropdown-item">Web Development</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/real-estate" className="dropdown-item">Real Estate</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/csr" className="dropdown-item">TSR & CSR Dashboards</RouterLink>
                    </li>
                  </ul>
                </li>

            <li className="nav-item mx-2">
              <RouterLink to="/contact" className="nav-link">Contact</RouterLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
