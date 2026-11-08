import { useState } from "react";
import { Link } from "react-router-dom";

export default function TrialPopup() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <aside className="trial-pop" aria-label="Start your free trial">
      <button className="trial-pop__close" aria-label="Close" onClick={() => setOpen(false)}>
        ×
      </button>
      <p>Start your 7 day free trial, no strings attached!</p>
      <div className="trial-pop__actions">
        <Link to="/arrange-a-demo" className="btn btn--white">
          Book a demo
        </Link>
        <Link to="/contact" className="btn btn--ghost">
          Request callback
        </Link>
      </div>
    </aside>
  );
}
