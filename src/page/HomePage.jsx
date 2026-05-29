import Carousel from "./Carousel";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import travel_1 from "../images/banking_image3.png";
import travel_2 from "../images/banking_image2.png";
import CohortBadge from "../components/CohortBadge";

const HomePage = () => {
  return (
    <div>
      <section className="pod-hero text-center">
        <div className="container-xl">
          <CohortBadge variant="hero" />
          <h1>Welcome to Online Banking System</h1>
          <p className="lead">
            Enterprise-grade digital banking for secure transactions, account
            management, and institutional financial operations.
          </p>
          <div className="pod-hero__trust">
            <span className="pod-hero__trust-item">Bank-grade security</span>
            <span className="pod-hero__trust-item">Real-time transactions</span>
            <span className="pod-hero__trust-item">Role-based access</span>
          </div>
        </div>
      </section>

      <Carousel />

      <section className="pod-section">
        <div className="container-xl">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="pod-content-card text-color">
                <span className="pod-eyebrow">Platform overview</span>
                <h2 className="pod-section-title">Your financial journey, simplified</h2>
                <p>
                  Welcome to our cutting-edge Online Banking System, where financial
                  empowerment meets technological innovation. Seamlessly navigate
                  through your financial journey with ease, as you initiate secure
                  transactions, conveniently deposit funds into your accounts, and
                  effortlessly withdraw when needed.
                </p>
                <p>
                  Our user-friendly interface ensures a smooth and intuitive
                  experience, giving you full control over your finances from the
                  comfort of your own device. With advanced security measures in
                  place, you can trust that your sensitive information is
                  safeguarded throughout every interaction. Join us on this digital
                  financial expedition and unlock a new era of banking convenience
                  and confidence.
                </p>
                <Link to="/user/login" className="btn btn-pod-primary">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="pod-img-frame">
                <img src={travel_2} alt="Online banking" className="home-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pod-section pod-section--alt">
        <div className="container-xl">
          <div className="row align-items-center g-5 flex-lg-row-reverse">
            <div className="col-lg-7">
              <div className="pod-content-card text-color">
                <span className="pod-eyebrow">Capabilities</span>
                <h2 className="pod-section-title">
                  Experience Effortless Financial Management
                </h2>
                <p>
                  Discover a new level of financial control through our intuitive
                  Online Banking System. Seamlessly manage transactions, deposits,
                  and withdrawals with a user-friendly interface designed to
                  simplify your banking experience. Whether you're transferring
                  funds, depositing savings, or making withdrawals, our platform
                  ensures security and convenience at every step.
                </p>
                <p>
                  Empower yourself with effortless financial management and enjoy
                  the freedom to take charge of your accounts from the comfort of
                  your own device. Join us in revolutionizing the way you interact
                  with your finances, as we pave the way for a more streamlined and
                  secure banking future.
                </p>
                <Link to="/user/login" className="btn btn-pod-primary">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="pod-img-frame">
                <img src={travel_1} alt="Financial management" className="home-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
