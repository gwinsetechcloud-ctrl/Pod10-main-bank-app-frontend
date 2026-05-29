import { Link } from "react-router-dom";
import CohortBadge from "../components/CohortBadge";

const Footer = () => {
  return (
    <footer className="pod-footer">
      <div className="container-xl py-5">
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
            <h5>Company</h5>
            <ul className="list-unstyled mb-0">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5>Support</h5>
            <ul className="list-unstyled mb-0">
              <li><Link to="/contact">Help centre</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5>Careers</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!">Opportunities</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5>Access</h5>
            <ul className="list-unstyled mb-0">
              <li><Link to="/user/login">Client login</Link></li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <p className="pod-footer__bottom mb-0">
            © {new Date().getFullYear()} Online Banking System. All rights reserved.
          </p>
          <Link to="/user/login">
            <button type="button" className="btn btn-pod-primary btn-sm">
              Secure sign in
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
