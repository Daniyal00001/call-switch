import { Link } from "react-router-dom";
import { Arrow, FeatureIcon } from "../components/Icons";
import { audiences, features, integrations } from "../data";

const HERO = "/callswitch-dashboard.png";

function Wave({ fill = "#f7f3f1", flip = false }) {
  return (
    <svg className={`wave ${flip ? "wave--flip" : ""}`} viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true">
      <path fill={fill} d="M0 42c180 36 320-28 520-18 210 10 300 48 500 28 150-16 280-40 420-22V70H0V42z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <h1>Industry leading CallSwitch One VoIP phone system</h1>
            <p>
              Easy to use, with inclusive features and pay-as-you-grow pricing, nayavoip helps businesses communicate
              better. Set up is simple on the devices you already have, from £5 per month.
            </p>
            <Link to="/signup" className="btn btn--primary btn--lg">
              Order now <Arrow />
            </Link>
          </div>
          <div className="hero__visual">
            <img src={HERO} alt="CallSwitch One dashboard on a laptop, with the desktop and mobile calling apps" />
          </div>
        </div>
      </section>

      <section className="band">
        <Wave />
        <div className="container band__inner">
          <h2>Small or large we've got you covered!</h2>
          <div className="audience-grid">
            {audiences.map((item) => (
              <Link key={item.title} to={item.href} className="audience-card">
                <span className="audience-card__icon">
                  <FeatureIcon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
        <Wave fill="#ffffff" flip />
      </section>

      <section className="features" id="features">
        <div className="container">
          <h2 className="center">Smart features that save you time and money</h2>
          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature">
                <span className="feature__icon">
                  <FeatureIcon name={feature.icon} />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
          <p className="center features__more">
            <Link to="/features" className="text-link">
              See all features <Arrow />
            </Link>
          </p>
        </div>
      </section>

      <section className="integrations" id="integrations">
        <div className="container">
          <h2 className="center">Benefit from our powerful integrations</h2>
          <p className="lede center">
            Check out our growing list of powerful integrations and webhooks helping your team save time and get more
            done.
          </p>
          <div className="integration-grid">
            {integrations.map((item) => (
              <Link key={item.name} to={item.href} className="integration">
                <img src={item.src} alt="" />
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.category}</small>
                </span>
              </Link>
            ))}
          </div>
          <p className="center">
            <Link to="/integrations" className="btn btn--primary">
              More Integrations <Arrow />
            </Link>
          </p>
        </div>
      </section>

      <section className="ready">
        <div className="container">
          <div className="ready__card">
            <p className="eyebrow eyebrow--light">Are you ready?</p>
            <h2>Put CallSwitch One on the numbers you already use.</h2>
            <p>Set-up in minutes on the laptop, browser or phone your team already has.</p>
            <Link to="/signup" className="btn btn--white btn--lg">
              Order now <Arrow />
            </Link>
            <svg className="ready__wave" viewBox="0 0 1200 80" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 20c80 30 140 8 220 18 90 12 120 40 220 28 110-14 160-46 280-20 90 20 150 8 240 16 80 8 150-10 240-8v26H0V20z" fill="#f7f3f1" />
              <path d="M760 30c80 16 140 6 220 14" fill="none" stroke="#f2c14b" strokeWidth="3" />
              <path d="M820 44c90 10 150-6 240 6" fill="none" stroke="#7dcea0" strokeWidth="3" />
              <path d="M700 18c100 18 180 4 280 12" fill="none" stroke="#f4876b" strokeWidth="3" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
