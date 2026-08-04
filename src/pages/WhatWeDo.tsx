import { NavLink } from "react-router-dom";
import { ArrowUpRight, ShieldCheck, GraduationCap, Wrench, Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ContourDivider from "../components/ContourDivider";
import PageHero from "../components/PageHero";

const steps = [
  {
    title: "Consult",
    body: "We start on-site — reading your inlet water or effluent chemistry, flows, loading and the standard you must discharge to, whether that's NEMA or an internal client spec.",
  },
  {
    title: "Design",
    body: "Our engineers size the treatment train, choosing between C-TECH™, C-MEM™, MBBR, RO and multimedia filtration to match your footprint, budget and compliance target.",
  },
  {
    title: "Build & commission",
    body: "Plants are built, containerised or civil, then installed and commissioned by our field teams with full operator handover.",
  },
  {
    title: "Operate & maintain",
    body: "Ongoing AMC and O&M contracts keep your plant running at its designed efficiency, with spares and lab compliance testing on schedule.",
  },
];

const service_pillars = [
  {
    icon: ShieldCheck,
    title: "Compliance-first engineering",
    body: "Every design is built back from the discharge or drinking-water standard you need to meet, not the other way round.",
  },
  {
    icon: Wrench,
    title: "Full-scope O&M",
    body: "On-site operational staffing, scheduled preventive maintenance and priority emergency response.",
  },
  {
    icon: GraduationCap,
    title: "Operator training",
    body: "Hands-on training in SOPs, troubleshooting, chemical safety and emergency shutdown procedures.",
  },
  {
    icon: Sparkles,
    title: "Retrofits & upgrades",
    body: "Upgrading legacy lagoons, oxidation ponds and activated sludge plants with modern technology inside existing footprints.",
  },
];

export default function WhatWeDo() {
  return (
    <div>
      <PageHero
        eyebrow="What We Do"
        heading={"Consultancy through\ncommissioning — and after."}
        body="Allianz Utilities designs, builds and operates water treatment, wastewater treatment and HVAC systems across East Africa, backed by SFC Umwelttechnik's engineering technologies."
        image="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading eyebrow="Our Process" heading="How a project moves." />
        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <p className="font-mono text-sm text-[var(--color-current)]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold text-[var(--color-deepwater)]">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)]/70">{s.body}</p>
              {i < steps.length - 1 && (
                <div className="mt-6 hidden h-px w-full bg-gradient-to-r from-[var(--color-current)]/40 to-transparent md:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      <ContourDivider from="var(--color-foam)" to="var(--color-deepwater)" />
      <section className="bg-[var(--color-deepwater)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading light eyebrow="How We Support You" heading="Beyond the handover." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service_pillars.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Icon size={22} className="text-[var(--color-leaf)]" />
                <h3 className="mt-4 font-display text-xl font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContourDivider from="var(--color-deepwater)" to="var(--color-foam)" flip />

      <section className="mx-auto max-w-7xl px-5 py-20 text-center md:px-8">
        <h2 className="font-display text-3xl font-bold text-[var(--color-deepwater)] md:text-4xl">
          See the technologies behind the process.
        </h2>
        <NavLink
          to="/products-and-services"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-current)] px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          Browse Products &amp; Services <ArrowUpRight size={16} />
        </NavLink>
      </section>
    </div>
  );
}
