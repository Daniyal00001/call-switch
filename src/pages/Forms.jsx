import { useState } from "react";

const FORMSPREE = "https://formspree.io/f/mrppvvwl";

function FormCard({ kicker, title, lede, submitLabel, fields, action, note = "No credit card required. 7 day free trial." }) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    if (!action) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const response = await fetch(action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(event.currentTarget),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        const message = data.errors?.map((item) => item.message).filter(Boolean).join(" ") || data.error;
        throw new Error(message || "Something went wrong. Please try again.");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("idle");
      setError(err.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">{kicker}</p>
          <h1>{title}</h1>
          <p className="lede">{lede}</p>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          {status === "sent" ? (
            <div className="form-card form-card--done" role="status">
              {action ? (
                <>
                  <h2>Thanks, we have your order.</h2>
                  <p>We’ll be in touch using the name, email and phone number you sent.</p>
                </>
              ) : (
                <>
                  <h2>Thanks, you’re on the list.</h2>
                  <p>This is a static preview, so nothing was sent. On the live product this step opens your trial or books the conversation.</p>
                </>
              )}
            </div>
          ) : (
            <form className="form-card" onSubmit={onSubmit}>
              {action && <input type="hidden" name="_subject" value="New nayavoip order" />}
              {fields.map((field) => (
                <label key={field.name}>
                  {field.label}
                  {field.type === "textarea" ? (
                    <textarea name={field.name} rows="4" required={field.required} />
                  ) : field.type === "select" ? (
                    <select name={field.name} required={field.required} defaultValue="">
                      <option value="" disabled>
                        Select
                      </option>
                      {field.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input name={field.name} type={field.type} required={field.required} autoComplete={field.auto} />
                  )}
                </label>
              ))}
              {error && (
                <p className="form-error" role="alert">
                  {error}
                </p>
              )}
              <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : submitLabel}
              </button>
              {note ? <p className="form-note">{note}</p> : null}
            </form>
          )}
        </div>
      </section>
    </>
  );
}

export function Signup() {
  return (
    <FormCard
      kicker="Order now"
      title="Order nayavoip"
      lede="Tell us who you are and how many people need a number."
      submitLabel="Order now"
      action={FORMSPREE}
      note=""
      fields={[
        { name: "name", label: "Name", type: "text", required: true, auto: "name" },
        { name: "business", label: "Business name", type: "text", required: true, auto: "organization" },
        { name: "email", label: "Email", type: "email", required: true, auto: "email" },
        { name: "phone", label: "Phone number", type: "tel", required: true, auto: "tel" },
        {
          name: "users",
          label: "How many users do you need?",
          type: "select",
          required: true,
          options: ["1", "2", "3", "4", "5+"],
        },
      ]}
    />
  );
}

export function Demo() {
  return (
    <FormCard
      kicker="Book a demo"
      title="See nayavoip with your own numbers in mind"
      lede="Tell us how your team answers the phone and we’ll show you menus, apps and the plan that fits."
      submitLabel="Request a demo"
      fields={[
        { name: "name", label: "Full name", type: "text", required: true, auto: "name" },
        { name: "email", label: "Work email", type: "email", required: true, auto: "email" },
        { name: "company", label: "Company", type: "text", required: true, auto: "organization" },
        { name: "phone", label: "Phone", type: "tel", required: true, auto: "tel" },
        { name: "note", label: "What do you want to cover?", type: "textarea", required: false },
      ]}
    />
  );
}

export function Contact() {
  return (
    <FormCard
      kicker="Contact support"
      title="Request a callback"
      lede="Leave a number and a short note. This preview keeps the message on this page."
      submitLabel="Request callback"
      fields={[
        { name: "name", label: "Full name", type: "text", required: true, auto: "name" },
        { name: "phone", label: "Phone", type: "tel", required: true, auto: "tel" },
        { name: "note", label: "How can we help?", type: "textarea", required: true },
      ]}
    />
  );
}
