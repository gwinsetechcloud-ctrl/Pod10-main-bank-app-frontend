import { Link } from "react-router-dom";
import CohortBadge from "../components/CohortBadge";

const Footer = () => {
  return (
    <footer className="pod-footer">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <CohortBadge variant="footer" className="mb-3" />
            <h5>Online Banking System</h5>
            <p className="text-color mb-0">
              Seamlessly navigate through your financial journey with ease, as you
              initiate secure transactions, conveniently deposit funds into your
              accounts, and effortlessly withdraw when needed.
            </p>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5>About us</h5>
            <ul className="list-unstyled mb-0">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5>Contact us</h5>
            <ul className="list-unstyled mb-0">
              <li><Link to="/contact">Get in touch</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5>Careers</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!">Opportunities</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5>Links</h5>
            <ul className="list-unstyled mb-0">
              <li><Link to="/user/login">Login</Link></li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        <div className="text-center">
          <p className="mb-3">
            <span className="me-3">Ready to bank smarter?</span>
            <Link to="/user/login">
              <button type="button" className="btn btn-pod-primary btn-sm">
                Log in
              </button>
            </Link>
          </p>
          <p className="mb-0 small opacity-75">
            © {new Date().getFullYear()} Online Banking System · COHORT-5 POD-10
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
