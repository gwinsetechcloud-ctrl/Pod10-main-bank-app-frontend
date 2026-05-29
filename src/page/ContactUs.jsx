import CohortBadge from "../components/CohortBadge";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div>
      <div className="pod-page">
        <div className="pod-page-card text-color">
          <CohortBadge className="mb-3" />
          <span className="pod-eyebrow">Support</span>
          <h1 className="pod-section-title">Contact Us</h1>
          <p className="mb-0">
            <strong>This is Contact Us component</strong> — reach the COHORT-5
            POD-10 banking platform team for account support, technical
            assistance, or operational enquiries.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
