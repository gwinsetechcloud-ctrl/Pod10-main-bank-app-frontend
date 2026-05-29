import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BankHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-bank"));
  console.log(user);

  const bankLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-bank");
    sessionStorage.removeItem("bank-jwtToken");
    window.location.reload(true);
    setTimeout(() => {
      navigate("/home");
    }, 2000); // Redirect after 3 seconds
  };

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link
          to="/user/customer/register"
          className="nav-link active"
          aria-current="page"
        >
          Register Customer
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/bank/account/all"
          className="nav-link active"
          aria-current="page"
        >
          Bank Accounts
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/bank/customer/all"
          className="nav-link active"
          aria-current="page"
        >
          Bank Customers
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/bank/customer/account/transactions"
          className="nav-link active"
          aria-current="page"
        >
          Customer Transactions
        </Link>
      </li>

      <li className="nav-item">
        <Link to="" className="nav-link" onClick={bankLogout}>
          Logout
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default BankHeader;
