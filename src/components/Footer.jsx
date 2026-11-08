import { Link } from "react-router-dom";
import Logo from "./Logo";
import { footerColumns } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__main">
        <div className="footer__brand">
          <Link to="/" aria-label="nayavoip home">
            <Logo withTagline />
          </Link>
          <div className="socials">
            <a href="https://www.facebook.com/nayavoip" aria-label="nayavoip Facebook" target="_blank" rel="noreferrer">
              f
            </a>
            <a href="https://www.linkedin.com/company/nayavoip" aria-label="nayavoip LinkedIn" target="_blank" rel="noreferrer">
              in
            </a>
            <a href="https://twitter.com/nayavoip" aria-label="nayavoip Twitter" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M14 4.3c-.4.2-.8.3-1.3.4.5-.3.8-.7 1-1.2-.4.3-.9.5-1.5.6A2.2 2.2 0 0 0 8 6.1c0 .2 0 .3.1.5-1.8-.1-3.4-1-4.5-2.3-.2.3-.3.7-.3 1.1 0 .8.4 1.4 1 1.8-.4 0-.7-.1-1-.3v.1c0 1 .7 1.9 1.7 2.1-.2.1-.4.1-.6.1-.1 0-.3 0-.4-.1.3.8 1 1.4 1.9 1.4A4.4 4.4 0 0 1 2 11.3 6.2 6.2 0 0 0 5.4 12c3.2 0 5-2.7 5-5v-.2c.4-.3.8-.6 1.1-1.1-.4.2-.8.3-1.2.4z"
                />
              </svg>
            </a>
          </div>
          <a className="phone-pill" href="tel:03330506070">
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path
                fill="currentColor"
                d="M4.2 2.4c.3-.3.8-.4 1.2-.2l1.6.8c.4.2.6.6.5 1L7.1 5.6c-.1.3 0 .7.2.9l1.6 1.6c.3.3.6.3.9.2l1.6-.4c.4-.1.8.1 1 .5l.8 1.6c.2.4.1.9-.2 1.2l-.8.8c-.4.4-1 .6-1.6.5-1.4-.2-3.2-1-5-2.8S2.6 6.7 2.4 5.3c-.1-.6.1-1.2.5-1.6l.8-.8z"
              />
            </svg>
            03330 50 60 70
          </a>
        </div>
        <div className="footer__cols">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="footer__blurb">
            nayavoip is an industry leading CallSwitch One VoIP phone system. Take calls on a laptop, in the browser, or
            on a phone you already carry, with numbers, menus and recording in one place. Plans start at £5 per user a
            month.
          </p>
        </div>
      </div>
      <div className="footer__sub">
        <div className="container footer__sub-inner">
          <p>© nayavoip 2026</p>
          <p className="footer__note">Desktop, browser and mobile, from £5 per user a month.</p>
          <nav aria-label="Legal">
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/modern-slavery">Modern Slavery</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/gdpr">GDPR</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
