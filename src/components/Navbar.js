import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        
        {/* Brand aligned hard left */}
        <Link className="navbar-brand ms-3" to="/">Lia Almida Clemente</Link>

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
            
            <li className="nav-item mx-2">
              <Link to="/" className="nav-link">About</Link>
            </li>
            
            <li className="nav-item mx-2">
              <Link to="/" className="nav-link">Projects</Link>
            </li>

            {/* Dropdown for Work Experience */}
            <li className="nav-item dropdown mx-2">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="workDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Work Experience
              </a>
              <ul className="dropdown-menu" aria-labelledby="workDropdown">
                <li>
                  <Link to="/it-support" className="dropdown-item">IT Support</Link>
                </li>
                <li>
                  <Link to="/web-dev" className="dropdown-item">Web Development</Link>
                </li>
                <li>
                  <Link to="/real-estate" className="dropdown-item">Property Specialist</Link>
                </li>
                <li>
                  <Link to="/real-estate" className="dropdown-item">TSR & CSR</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item mx-2">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
