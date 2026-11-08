import { useState } from "react";
import { Link } from "react-router-dom";
import { Arrow } from "../components/Icons";

const faqs = [
  {
    q: "What does the Unlimited plan include?",
    a: "Our unlimited plan includes unlimited inbound calls and unlimited outbound calls to all UK 01, 02, 03, 0800 and most 07 numbers. International calls to the USA, Canada, Ireland, Australia and New Zealand are included as standard.",
  },
  {
    q: "Can I mix plans across the business?",
    a: "Yes, you can manage your user subscription plans in our apps. Any changes you make go live instantly.",
  },
  {
    q: "Can you port existing numbers across?",
    a: "Yes, most of the time. Provide your existing phone number during sign up and we will check it for you. Porting is free.",
  },
  {
    q: "How does the 7 day free trial work?",
    a: "The 7 day free trial lets you try the features at no charge. You can make and receive a limited number of calls to UK numbers included in the Unlimited plan. No credit card is required.",
  },
  {
    q: "Can I cancel at anytime?",
    a: "Yes. There’s no contract with nayavoip. If you cancel, you’re responsible for charges already incurred in that billing period, and you won’t be charged again.",
  },
  {
    q: "How do I continue at the end of my trial?",
    a: "Add payment card details to your account in the desktop or web app. We’ll send a reminder when your trial is about to end.",
  },
];

const plans = [
  {
    name: "Pay As You Go",
    price: "£5",
    note: "+ VAT monthly per user",
    items: [
      "Includes 1 UK national or landline number",
      "Mobile numbers from £2 + VAT / month",
      "All nayavoip features, including call recording, conference calling and voicemail to text",
      "Unlimited inbound calls",
      "UK outbound calls from 3p / min",
      "International calls from 3p / min",
      "SMS 4p / message",
      "No set-up or activation fees",
    ],
  },
  {
    name: "Unlimited",
    price: "£15",
    note: "+ VAT monthly per user",
    featured: true,
    items: [
      "Includes 1 UK national or landline number",
      "Mobile numbers from £2 + VAT / month",
      "All nayavoip features, including call recording, conference calling and voicemail to text",
      "Unlimited inbound calls",
      "Unlimited outbound calls to UK, US, IE, AU, NZ and CA",
      "Includes most 07 numbers. Excludes 0870, 0844 and 0845",
      "International calls from 3p / min",
      "SMS 4p / message",
      "No set-up or activation fees",
    ],
  },
];

export default function Pricing() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">nayavoip pricing</p>
          <h1>Pricing made simple</h1>
          <p className="lede">No contract, no set-up fees and no nasty surprises.</p>
        </div>
      </section>
      <section className="section">
        <div className="container plan-grid">
          {plans.map((plan) => (
            <article key={plan.name} className={`plan ${plan.featured ? "plan--featured" : ""}`}>
              <h2>{plan.name}</h2>
              <p className="plan__price">
                {plan.price} <small>{plan.note}</small>
              </p>
              <Link to="/signup" className="btn btn--primary">
                Order now <Arrow />
              </Link>
              <ul>
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="section section--cream">
        <div className="container">
          <h2 className="center">Extras when you need them</h2>
          <div className="extra-grid">
            <article>
              <h3>Additional UK numbers</h3>
              <p>01, 02, 03 and 07 numbers are available starting from £2 per month per user, plus VAT.</p>
            </article>
            <article>
              <h3>VIP numbers</h3>
              <p>Easy to remember numbers for your business, starting from £3 per month per user, plus VAT.</p>
            </article>
            <article>
              <h3>Port an existing number</h3>
              <p>Port your existing numbers to nayavoip. Free of charge.</p>
            </article>
            <article>
              <h3>International calling</h3>
              <p>Calls outside the inclusive countries start from 3p per minute.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <h2 className="center">Frequently asked questions</h2>
          <div className="faq">
            {faqs.map((item, i) => (
              <div key={item.q} className={`faq__item ${open === i ? "is-open" : ""}`}>
                <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                  {item.q}
                  <span aria-hidden="true">{open === i ? "–" : "+"}</span>
                </button>
                {open === i && <p>{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
