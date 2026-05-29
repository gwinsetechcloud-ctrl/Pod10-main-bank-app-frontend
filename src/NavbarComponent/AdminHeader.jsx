import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-admin"));
  console.log(user);

  const adminLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    sessionStorage.removeItem("admin-jwtToken");
    window.location.reload(true);
    setTimeout(() => {
      navigate("/home");
    }, 2000); // Redirect after 3 seconds
  };

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link
          to="/user/bank/register"
          className="nav-link active"
          aria-current="page"
        >
          Register Bank Manager
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/admin/bank/register"
          className="nav-link active"
          aria-current="page"
        >
          Add Bank
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/admin/bank/all"
          className="nav-link active"
          aria-current="page"
        >
          View Banks
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/admin/bank/managers"
          className="nav-link active"
          aria-current="page"
        >
          Bank Managers
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/admin/all/bank/customers"
          className="nav-link active"
          aria-current="page"
        >
          All Customers
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/admin/bank/account/all"
          className="nav-link active"
          aria-current="page"
        >
          All Bank Accounts
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/admin/bank/customer/transaction/all"
          className="nav-link active"
          aria-current="page"
        >
          All Bank Transactions
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to=""
          className="nav-link"
          onClick={adminLogout}
        >
          Logout
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default AdminHeader;
