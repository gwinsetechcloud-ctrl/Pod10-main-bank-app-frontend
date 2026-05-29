import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import RoleNav from "./RoleNav";
import CohortBadge from "../components/CohortBadge";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg pod-navbar sticky-top">
      <div className="container-xl px-3 px-lg-4">
        <div className="pod-navbar__brand-wrap">
          <img
            src={logo}
            width="36"
            height="36"
            className="pod-navbar__logo d-inline-block"
            alt="Online Banking"
          />
          <Link to="/" className="navbar-brand mb-0 text-decoration-none">
            <div className="pod-brand-block">
              <span className="pod-brand-block__title">Online Banking System</span>
              <span className="pod-brand-block__sub">Secure digital banking</span>
            </div>
          </Link>
          <CohortBadge variant="nav" className="d-none d-md-inline-flex" />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-3">
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
          <RoleNav />
        </div>
      </div>
    </nav>
  );
};

export default Header;
