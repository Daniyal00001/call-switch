export default function Logo({ withTagline = false }) {
  return (
    <span className={`logo ${withTagline ? "logo--tag" : ""}`}>
      <svg className="logo__mark" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="13" fill="#132E36" />
        <rect x="9" y="11" width="3.2" height="18" rx="1.6" fill="#F7F4F2" />
        <rect x="27.8" y="11" width="3.2" height="18" rx="1.6" fill="#F7F4F2" />
        <rect x="14.4" y="21.6" width="2.7" height="7.4" rx="1.35" fill="#F96854" />
        <rect x="18.65" y="17.2" width="2.7" height="11.8" rx="1.35" fill="#F96854" />
        <rect x="22.9" y="12.8" width="2.7" height="16.2" rx="1.35" fill="#F96854" />
      </svg>
      <span className="logo__text">
        <span className="logo__word">
          naya<span>voip</span>
        </span>
        {withTagline && <span className="logo__tagline">Your number, anywhere</span>}
      </span>
    </span>
  );
}
