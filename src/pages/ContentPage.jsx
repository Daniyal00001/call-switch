import { Link, useParams } from "react-router-dom";
import { pages, stories, integrations } from "../data";
import { Arrow } from "../components/Icons";

export default function ContentPage({ id }) {
  const params = useParams();
  const key = id || params.slug;
  const page = pages[key];

  if (!page) {
    return (
      <section className="page-hero">
        <div className="container">
          <h1>Page not found</h1>
          <p className="lede">That page isn’t part of this preview.</p>
          <Link to="/" className="text-link">
            Back home <Arrow />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{page.kicker}</p>
          <h1>{page.title}</h1>
          <p className="lede">{page.lede}</p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <ul className="point-list">
            {page.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <aside className="aside-card">
            <h2>Try it on your own number</h2>
            <p>7 days, no credit card, from £5 per user per month.</p>
            <Link to="/signup" className="btn btn--primary">
              Order now <Arrow />
            </Link>
            <Link to="/arrange-a-demo" className="text-link">
              Book a demo <Arrow />
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}

export function CaseStudies() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Customer stories</p>
          <h1>Our customers love us</h1>
          <p className="lede">Teams in sales, support, agencies and nonprofits run their phone system on nayavoip.</p>
        </div>
      </section>
      <section className="section">
        <div className="container story-list">
          {stories.map((story) => (
            <article key={story.logoAlt} className="story story--static">
              <div className="story__logo">
                <img src={story.logo} alt={story.logoAlt} />
              </div>
              <div className="story__meta">
                <div>
                  <span>User type</span>
                  <strong>{story.userType}</strong>
                </div>
                {story.integration && (
                  <div>
                    <span>Integration</span>
                    <strong>{story.integration}</strong>
                  </div>
                )}
              </div>
              <p>{story.quote}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function IntegrationsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Integrations</p>
          <h1>Benefit from our powerful integrations</h1>
          <p className="lede">
            Connect the phone system to the CRM, inbox and chat tools your team already has open.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container integration-grid">
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
      </section>
    </>
  );
}

export function IntegrationDetail() {
  const { slug } = useParams();
  const item = integrations.find((entry) => entry.href.endsWith(slug));
  const name = item?.name || slug;
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Integration</p>
          <h1>{name}</h1>
          <p className="lede">
            Log calls, click to dial and keep the conversation next to the contact record in {name}. nayavoip connects
            without a second phone system.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <ul className="point-list">
            <li>Click to call from the contact you already have open.</li>
            <li>Save call activity back against the record.</li>
            <li>Use recording and voicemail-to-text alongside the integration.</li>
          </ul>
          <aside className="aside-card">
            {item && <img src={item.src} alt="" className="aside-card__logo" />}
            <Link to="/signup" className="btn btn--primary">
              Order now <Arrow />
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
