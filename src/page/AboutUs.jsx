import CohortBadge from "../components/CohortBadge";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div>
      <div className="pod-page">
        <div className="pod-page-card text-color">
          <CohortBadge className="mb-3" />
          <h1 className="pod-section-title">About Us</h1>
          <p>
            <b>This is About Us Component</b> — part of the Online Banking System
            for COHORT-5 POD-10. We provide secure digital banking for customers,
            banks, and administrators.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
