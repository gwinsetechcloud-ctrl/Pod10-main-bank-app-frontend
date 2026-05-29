import CohortBadge from "../components/CohortBadge";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div>
      <div className="pod-page">
        <div className="pod-page-card text-color">
          <CohortBadge className="mb-3" />
          <h1 className="pod-section-title">Contact Us</h1>
          <p>
            <b>This is Contact Us component</b> — reach out to the COHORT-5 POD-10
            banking platform team for support with your account or technical
            questions.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
