import { Link } from "react-router-dom";
import CohortBadge from "../components/CohortBadge";
import "./SplashPage.css";

const features = [
  { icon: "🔒", title: "Secure", desc: "Role-based access" },
  { icon: "⚡", title: "Real-time", desc: "Instant transfers" },
  { icon: "📊", title: "Accounts", desc: "Balances & statements" },
  { icon: "👥", title: "Multi-role", desc: "Customer to admin" },
];

const DevicePhone = () => (
  <div className="splash-device splash-device--phone" aria-hidden="true">
    <div className="splash-device__shell">
      <div className="splash-device__notch" />
      <div className="splash-device__screen">
        <div className="splash-mock splash-mock--mobile">
          <div className="splash-mock__header">
            <span>My accounts</span>
            <span className="splash-mock__dot" />
          </div>
          <div className="splash-mock__balance">
            <small>Available balance</small>
            <strong>$24,580.00</strong>
          </div>
          <div className="splash-mock__actions">
            <span>Transfer</span>
            <span>Deposit</span>
            <span>Pay</span>
          </div>
          <div className="splash-mock__list">
            <div className="splash-mock__row" />
            <div className="splash-mock__row" />
            <div className="splash-mock__row splash-mock__row--short" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DeviceTablet = () => (
  <div className="splash-device splash-device--tablet" aria-hidden="true">
    <div className="splash-device__shell">
      <div className="splash-device__screen">
        <div className="splash-mock splash-mock--tablet">
          <div className="splash-mock__sidebar">
            <div className="splash-mock__nav-item splash-mock__nav-item--active" />
            <div className="splash-mock__nav-item" />
            <div className="splash-mock__nav-item" />
            <div className="splash-mock__nav-item" />
          </div>
          <div className="splash-mock__main">
            <div className="splash-mock__title-bar" />
            <div className="splash-mock__cards">
              <div className="splash-mock__card" />
              <div className="splash-mock__card" />
            </div>
            <div className="splash-mock__chart" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DeviceDesktop = () => (
  <div className="splash-device splash-device--desktop" aria-hidden="true">
    <div className="splash-device__shell">
      <div className="splash-device__screen">
        <div className="splash-mock splash-mock--desktop">
          <div className="splash-mock__topbar">
            <span />
            <span />
            <span />
          </div>
          <div className="splash-mock__body">
            <aside className="splash-mock__aside">
              <div className="splash-mock__logo-bar" />
              <div className="splash-mock__nav-item splash-mock__nav-item--active" />
              <div className="splash-mock__nav-item" />
              <div className="splash-mock__nav-item" />
            </aside>
            <div className="splash-mock__content">
              <div className="splash-mock__hero-strip" />
              <div className="splash-mock__grid">
                <div className="splash-mock__stat" />
                <div className="splash-mock__stat" />
                <div className="splash-mock__stat" />
              </div>
              <div className="splash-mock__table">
                <div className="splash-mock__row" />
                <div className="splash-mock__row" />
                <div className="splash-mock__row" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="splash-device__stand" />
    </div>
  </div>
);

const SplashPage = () => {
  return (
    <div className="splash-page">
      <div className="splash-page__bg" aria-hidden="true">
        <div className="splash-page__orb splash-page__orb--1" />
        <div className="splash-page__orb splash-page__orb--2" />
        <div className="splash-page__grid" />
      </div>

      <div className="splash-page__inner">
        <header className="splash-header splash-animate splash-animate--1">
          <CohortBadge variant="hero" />
          <h1 className="splash-header__title">Online Banking System</h1>
          <p className="splash-header__tagline">
            Secure banking on phone, tablet &amp; desktop — COHORT-5 POD-10
          </p>
        </header>

        <div className="splash-body splash-animate splash-animate--2">
          <section
            className="splash-devices"
            aria-label="App preview on mobile, tablet, and desktop"
          >
            <DeviceDesktop />
            <DeviceTablet />
            <DevicePhone />
          </section>

          <section className="splash-features" aria-label="Platform features">
            <h2 className="splash-features__heading">Bank with confidence</h2>
            <div className="splash-features__grid">
              {features.map((f, i) => (
                <article
                  key={f.title}
                  className="splash-feature-card"
                  style={{ animationDelay: `${0.08 * i}s` }}
                >
                  <span className="splash-feature-card__icon" aria-hidden="true">
                    {f.icon}
                  </span>
                  <div className="splash-feature-card__text">
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <footer className="splash-cta splash-animate splash-animate--3">
          <Link to="/home" className="splash-cta__btn">
            <span>Continue</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link to="/home" className="splash-cta__skip">
            Skip
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default SplashPage;
