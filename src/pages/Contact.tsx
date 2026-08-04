import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { offices } from "../data/content";
import qrCodeImg from "../assets/qrcode.jpg";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  interest: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  interest: "General Enquiry",
  message: "",
};

const interestOptions = [
  "General Enquiry",
  "Waste Water Treatment Plant",
  "Reverse Osmosis System",
  "Ultrafiltration Plant",
  "Effluent Treatment Plant",
  "Package MBBR Waste Water Treatment",
  "Package SBR Waste Water Treatment",
  "Package Waste Water Treatment",
  "Operations & Maintenance (O&M / AMC)",
];

const RECIPIENT = "kenya@allianzutilities.com";

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const update = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please tell us your name.";
    if (!form.email.trim()) next.email = "An email address helps us reply.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "That email looks incomplete.";
    if (!form.message.trim()) next.message = "Let us know what you need.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Website Enquiry — ${form.interest}`);
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      form.company ? `Company / Organisation: ${form.company}` : null,
      `Area of Interest: ${form.interest}`,
      "",
      "Message:",
      form.message,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));

    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div>
      <PageHero
        eyebrow="Contact Us"
        heading={"Let's talk about\nyour water."}
        body="Reach the office nearest you, or send a message directly — it opens in your email app, ready to send."
        image="https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          {/* Offices + map */}
          <div>
            <SectionHeading eyebrow="Our Offices" heading="Find us." />
            <div className="mt-8 space-y-6">
              {offices.map((o) => (
                <div key={o.country} className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                  <h3 className="font-display text-lg font-bold text-[var(--color-deepwater)]">{o.country}</h3>
                  <p className="mt-2 flex gap-2 text-sm text-[var(--color-ink)]/70">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--color-current)]" />
                    {o.address}
                  </p>
                  <a href={`tel:${o.phone.replace(/\s+/g, "")}`} className="mt-1.5 flex items-center gap-2 text-sm text-[var(--color-ink)]/70 hover:text-[var(--color-current)]">
                    <Phone size={16} className="shrink-0 text-[var(--color-current)]" />
                    {o.phone}
                  </a>
                  <a href={`mailto:${o.email}`} className="mt-1.5 flex items-center gap-2 text-sm text-[var(--color-ink)]/70 hover:text-[var(--color-current)]">
                    <Mail size={16} className="shrink-0 text-[var(--color-current)]" />
                    {o.email}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col items-center justify-center rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <img
                  src={qrCodeImg}
                  alt="Allianz Utilities Mobile Portal"
                  className="h-28 w-28 object-contain"
                />
                <p className="mt-3 text-center font-display text-sm font-bold text-[var(--color-deepwater)]">
                  Scan to visit our portal
                </p>
                <p className="mt-1 text-center text-xs text-[var(--color-ink)]/50">
                  Quickly access our site on your mobile device.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-black/5 shadow-sm">
                <iframe
                  title="Allianz Utilities — Nairobi office map"
                  src="https://www.google.com/maps?q=Nairobi,Kenya&output=embed"
                  className="h-full min-h-[180px] w-full grayscale-[15%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <SectionHeading eyebrow="Send A Message" heading="Tell us about your project." />

            {sent ? (
              <div className="mt-8 flex flex-col items-start gap-3 rounded-2xl border border-[var(--color-leaf)]/30 bg-[var(--color-foam-2)] p-6">
                <CheckCircle2 className="text-[var(--color-leaf-2)]" size={28} />
                <p className="font-display text-xl font-bold text-[var(--color-deepwater)]">
                  Your email app should be open now.
                </p>
                <p className="text-sm text-[var(--color-ink)]/70">
                  Finish and send the message from there. Didn't open?{" "}
                  <button
                    onClick={handleSubmit}
                    className="font-semibold text-[var(--color-current)] underline underline-offset-2"
                  >
                    Try again
                  </button>{" "}
                  or email us directly at{" "}
                  <a href={`mailto:${RECIPIENT}`} className="font-semibold text-[var(--color-current)] underline underline-offset-2">
                    {RECIPIENT}
                  </a>
                  .
                </p>
                <button
                  onClick={() => {
                    setForm(initialState);
                    setSent(false);
                  }}
                  className="mt-2 text-sm font-semibold text-[var(--color-deepwater)] underline underline-offset-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" error={errors.name}>
                    <input
                      value={form.name}
                      onChange={update("name")}
                      type="text"
                      placeholder="Jane Wanjiru"
                      className={inputClass(!!errors.name)}
                    />
                  </Field>
                  <Field label="Email" error={errors.email}>
                    <input
                      value={form.email}
                      onChange={update("email")}
                      type="email"
                      placeholder="jane@company.com"
                      className={inputClass(!!errors.email)}
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone (optional)">
                    <input
                      value={form.phone}
                      onChange={update("phone")}
                      type="tel"
                      placeholder="+254 7xx xxx xxx"
                      className={inputClass(false)}
                    />
                  </Field>
                  <Field label="Company / organisation (optional)">
                    <input
                      value={form.company}
                      onChange={update("company")}
                      type="text"
                      placeholder="Company name"
                      className={inputClass(false)}
                    />
                  </Field>
                </div>

                <Field label="I'm interested in">
                  <select value={form.interest} onChange={update("interest")} className={inputClass(false)}>
                    {interestOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Message" error={errors.message}>
                  <textarea
                    value={form.message}
                    onChange={update("message")}
                    rows={5}
                    placeholder="Tell us about your site, flows, and what you're trying to achieve."
                    className={inputClass(!!errors.message)}
                  />
                </Field>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-current)] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-current-2)] sm:w-auto"
                >
                  Send Message <Send size={16} />
                </button>
                <p className="text-xs text-[var(--color-ink)]/50">
                  This opens your default email app with the message pre-filled — nothing is stored or sent from this site.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-white px-4 py-2.75 text-sm text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-ink)]/35 focus:border-[var(--color-current)] ${
    hasError ? "border-red-400" : "border-black/15"
  }`;
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]/60">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
