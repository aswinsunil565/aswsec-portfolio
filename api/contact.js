// Vercel serverless function. The Web3Forms key is read from a server-side
// environment variable (WEB3FORMS_ACCESS_KEY) and is never sent to the browser.
const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const clean = (v, max) =>
  String(v ?? "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .trim()
    .slice(0, max);

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed." });
  }
  const key = process.env.WEB3FORMS_ACCESS_KEY;
  if (!key)
    return res
      .status(500)
      .json({ success: false, message: "Contact form is not configured." });

  let b = req.body;
  if (typeof b === "string") {
    try {
      b = JSON.parse(b);
    } catch {
      b = {};
    }
  }
  b = b && typeof b === "object" ? b : {};

  if (b.website) return res.status(200).json({ success: true }); // honeypot: silently drop bots

  const name = clean(b.name, 100).replace(/[\r\n]+/g, " ");
  const email = clean(b.email, 254);
  const message = clean(b.message, 5000);
  if (!name || !message)
    return res
      .status(400)
      .json({ success: false, message: "Please fill in all required fields." });
  if (!EMAIL_RE.test(email))
    return res
      .status(400)
      .json({ success: false, message: "Please enter a valid email address." });

  try {
    const r = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: key,
        name,
        email,
        message,
        subject: `Portfolio message from ${name}`,
        from_name: "Portfolio",
      }),
    });
    const d = await r.json().catch(() => ({}));
    if (r.ok && d.success) return res.status(200).json({ success: true });
    console.error("Web3Forms failed:", r.status, JSON.stringify(d));
    return res.status(502).json({
      success: false,
      message: "Could not send your message. Please try again later.",
    });
  } catch (err) {
    console.error("Web3Forms request error:", err);
    return res.status(502).json({
      success: false,
      message: "Could not send your message. Please try again later.",
    });
  }
}