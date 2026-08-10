import { Navigate, NavLink, useParams } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import ContourDivider from "../../components/ContourDivider";
import { services } from "../../data/content";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div>
      <PageHero
        eyebrow="Services"
        heading={service.title}
        body={service.tagline}
        image={service.heroImage}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <h1 className="mb-8 font-display text-4xl font-extrabold uppercase tracking-tight text-[var(--color-secondary)] md:text-5xl">
          {service.title}
        </h1>
        <div className="grid gap-14 md:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading eyebrow="Service Overview" heading="How we work." body={service.intro} />

            <div className="mt-12 space-y-8">
              {service.process.map((step, i) => (
                <div key={step.title} className="flex gap-5">
                  <span className="font-mono text-sm text-[var(--color-current)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[var(--color-deepwater)]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-black">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <p className="eyebrow text-[var(--color-current)]">Key Benefits</p>
              <ul className="mt-4 space-y-3">
                {service.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-black">
                    <Check size={16} className="mt-0.5 shrink-0 text-[var(--color-leaf-2)]" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <p className="eyebrow text-[var(--color-current)]">Industries we serve</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.applications.map((a) => (
                  <span
                    key={a}
                    className="rounded-full bg-[var(--color-foam-2)] px-3 py-1.5 text-xs font-medium text-[var(--color-deepwater)]"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[var(--color-deepwater)] p-6">
              <p className="font-display text-xl font-bold text-white">Need a custom O&amp;M or service contract?</p>
              <p className="mt-2 text-sm text-white/70">
                Get in touch with our engineers today to design an operating plan that fits your facility.
              </p>
              <NavLink
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-leaf)] px-5 py-2.5 text-sm font-semibold text-[var(--color-deepwater)] transition-transform hover:scale-105"
              >
                Get In Touch <ArrowUpRight size={16} />
              </NavLink>
            </div>
          </aside>
        </div>
      </section>

      <ContourDivider from="var(--color-foam)" to="var(--color-foam-2)" />
      <section className="bg-[var(--color-foam-2)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Related" heading="Other services we offer." />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {others.map((s) => (
              <NavLink
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-display text-lg font-bold text-[var(--color-deepwater)]">{s.title}</h3>
                <p className="mt-1.5 text-sm text-black">{s.tagline}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-current)]">
                  View details <ArrowUpRight size={13} />
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
