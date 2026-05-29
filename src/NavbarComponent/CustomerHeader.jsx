import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const CustomerHeader = () => {
  let navigate = useNavigate();

  const customer = JSON.parse(sessionStorage.getItem("active-customer"));

  const userLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-customer");
    sessionStorage.removeItem("customer-jwtToken");

    setTimeout(() => {
      navigate("/home");
    }, 1000); // Redirect after 3 seconds

    window.location.reload(true);
  };

  const handleTransactionHistoryClick = () => {
    navigate("/customer/bank/account/statement", { state: customer });
  };

  const viewBankAccount = () => {
    if (customer.isAccountLinked === "Yes") {
      navigate("/customer/bank/account/detail", { state: customer });
    } else {
      toast.error("Bank Account Not Linked, Contact Bank Administrator!!!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const moneyTransfer = () => {
    if (customer.isAccountLinked === "Yes") {
      navigate("/customer/account/transfer");
    } else {
      toast.error("Bank Account Not Linked, Contact Bank Administrator!!!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <button type="button" className="nav-link btn btn-link" onClick={moneyTransfer}>
          Money Transfer
        </button>
        <ToastContainer />
      </li>

      <li className="nav-item">
        <button type="button" className="nav-link btn btn-link" onClick={viewBankAccount}>
          Bank Account
        </button>
        <ToastContainer />
      </li>

      <li className="nav-item">
        <button
          type="button"
          className="nav-link btn btn-link"
          onClick={handleTransactionHistoryClick}
        >
          Transaction History
        </button>
      </li>

      <li className="nav-item">
        <Link to="" className="nav-link" onClick={userLogout}>
          Logout
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default CustomerHeader;
