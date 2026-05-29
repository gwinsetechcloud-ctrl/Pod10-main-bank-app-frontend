import { Link } from "react-router-dom";

const NormalHeader = () => {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link to="/user/admin/register" className="nav-link">
          Register Admin
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/user/login" className="nav-link">
          Login
        </Link>
      </li>
    </ul>
  );
};

export default NormalHeader;
