import { features } from "../data";
import { FeatureIcon } from "../components/Icons";
import { Link } from "react-router-dom";
import { Arrow } from "../components/Icons";

export default function Features() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Features</p>
          <h1>Smart features that save you time and money</h1>
          <p className="lede">
            Everything is included on both plans. Numbers, apps, recording, menus and routing — switch them on when you
            need them.
          </p>
          <Link to="/signup" className="btn btn--primary">
            Order now <Arrow />
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="container feature-grid">
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
      </section>
    </>
  );
}
