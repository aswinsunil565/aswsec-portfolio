import { useState } from "react";
import SectionHead from "../components/SectionHead";
export default function Contact() {
  const [state, setState] = useState({ s: "idle", m: "" });
  const submit = async (e) => {
    e.preventDefault();
    const form = e.target,
      email = form.email.value.trim();
    if (!form.name.value.trim() || !form.message.value.trim())
      return setState({ s: "error", m: "Please fill in all required fields." });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      form.email.focus();
      return setState({ s: "error", m: "Please enter a valid email address." });
    }
    setState({ s: "loading", m: "Sending message…" });
    try {
      // The Web3Forms access key lives only on the server (api/contact.js), never in the browser.
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.value.trim(),
          email,
          message: form.message.value.trim(),
          website: form.website.value,
        }),
      });
      const d = await r.json().catch(() => ({}));
      if (r.ok && d.success) {
        setState({ s: "success", m: "Message sent successfully!" });
        form.reset();
      } else
        setState({
          s: "error",
          m: d.message || "Something went wrong. Please try again.",
        });
    } catch {
      setState({ s: "error", m: "Unable to send message. Please try again." });
    }
  };
  return (
    <section id="contact" className="section">
      <SectionHead
        num="05"
        label="CONTACT"
        title="Get In Touch"
        sub="Have a project in mind? Let's connect and build something secure together."
      />
      <div className="contact-grid">
        <div className="terminal reveal visible">
          <div className="term-head">
            <span className="lights">
              <i />
              <i />
              <i />
            </span>
            <span>~/contact_info.sh</span>
            <span>●</span>
          </div>
          <div className="term-body">
            <p>
              <span className="green">$</span> cat contact_info
            </p>
            <p className="label">Email</p>
            <p>
              <a href="mailto:aswinsunil565@gmail.com">
                aswinsunil565@gmail.com
              </a>
            </p>
            <p className="label">GitHub</p>
            <p>
              <a
                href="https://github.com/aswinsunil565"
                target="_blank"
                rel="noreferrer"
              >
                github.com/aswinsunil565
              </a>
            </p>
            <p className="label">LinkedIn</p>
            <p>
              <a
                href="https://linkedin.com/in/aswinsunil"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/aswinsunil
              </a>
            </p>
            <p className="label">Location</p>
            <p>India</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit} noValidate>
          <label>
            Name
            <input name="name" required placeholder="Your name" />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
            />
          </label>
          <input
            className="hp"
            name="website"
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
          />
          <label>
            Message
            <textarea
              name="message"
              rows="7"
              required
              placeholder="Tell me what you'd like to discuss..."
            />
          </label>
          <button
            className="btn primary"
            type="submit"
            disabled={state.s === "loading"}
          >
            {state.s === "loading" ? (
              "Sending…"
            ) : (
              <>
                Send Message <span>↗</span>
              </>
            )}
          </button>
          <small className={state.s}>
            {state.m || "Your message will be sent securely."}
          </small>
        </form>
      </div>
    </section>
  );
}
