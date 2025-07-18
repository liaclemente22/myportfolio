import { Link as RouterLink } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
      <div className="container-fluid">
        <RouterLink className="navbar-brand ms-3" to="/">
          Lia Clemente
        </RouterLink>

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

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center gap-3">

            <li className="nav-item">
              <RouterLink className="nav-link" to="/about">About</RouterLink>
            </li>

            {/* Projects Dropdown */}
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                id="projectsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </a>
              <ul className="dropdown-menu" aria-labelledby="projectsDropdown">
                <li><RouterLink className="dropdown-item" to="/portfolio">All Projects</RouterLink></li>
                <li><RouterLink className="dropdown-item" to="/it-support">IT Support Tools</RouterLink></li>
                <li><RouterLink className="dropdown-item" to="/web-dev">Web Development</RouterLink></li>
                <li><RouterLink className="dropdown-item" to="/real-estate">Real Estate</RouterLink></li>
                <li><RouterLink className="dropdown-item" to="/csr">TSR & CSR Dashboards</RouterLink></li>
              </ul>
            </li>

            <li className="nav-item">
              <RouterLink className="nav-link" to="/blogs">Blogs</RouterLink>
            </li>

            <li className="nav-item">
              <RouterLink className="nav-link" to="/contact">Contact</RouterLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
