import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { Arrow } from "./Icons";
import { whyMenu, solutionsMenu } from "../data";

function Menu({ label, columns }) {
  return (
    <div className="nav-item">
      <button className="nav-link nav-link--button" aria-expanded="false" aria-haspopup="true">
        {label}
        <svg viewBox="0 0 12 12" aria-hidden="true" className="chev">
          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>
      <div className="dropdown" role="menu">
        {columns.map((col) => (
          <div key={col.heading} className="dropdown__col">
            <Link to={col.href} className="dropdown__head">
              {col.heading}
            </Link>
            {col.links.map((link) => (
              <Link key={link.label} to={link.href} className={link.accent ? "dropdown__link dropdown__link--accent" : "dropdown__link"}>
                {link.label}
                {link.accent && <Arrow />}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <div className="container nav">
          <Link to="/" className="nav__brand" aria-label="nayavoip home" onClick={() => setOpen(false)}>
            <Logo />
          </Link>
          <button
            className="nav__toggle"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`nav__menu ${open ? "is-open" : ""}`} aria-label="nayavoip">
            <Menu label="Why nayavoip" columns={whyMenu} />
            <Menu label="Solutions" columns={solutionsMenu} />
            <NavLink to="/pricing" className="nav-link" onClick={() => setOpen(false)}>
              Pricing
            </NavLink>
            <NavLink to="/partners" className="nav-link" onClick={() => setOpen(false)}>
              Partners
            </NavLink>
            <Link to="/signup" className="btn btn--primary nav__cta" onClick={() => setOpen(false)}>
              Order now <Arrow />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
