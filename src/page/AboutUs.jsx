import CohortBadge from "../components/CohortBadge";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div>
      <div className="pod-page">
        <div className="pod-page-card text-color">
          <CohortBadge className="mb-3" />
          <span className="pod-eyebrow">Company</span>
          <h1 className="pod-section-title">About Us</h1>
          <p className="mb-0">
            <strong>This is About Us Component</strong> — part of the Online Banking
            System delivered for COHORT-5 POD-10. We provide secure, role-based
            digital banking for customers, bank administrators, and platform
            operators.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
