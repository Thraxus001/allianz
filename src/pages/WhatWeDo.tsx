import { NavLink } from "react-router-dom";
import { ArrowUpRight, ShieldCheck, GraduationCap, Wrench, Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ContourDivider from "../components/ContourDivider";
import HeroCarousel from "../components/HeroCarousel";

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
      <HeroCarousel />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading eyebrow="Our Process" heading="How a project moves." />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-[var(--color-leaf)]/20 bg-[var(--color-leaf)]/10 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-leaf-2)] bg-[var(--color-leaf)]/20 px-2.5 py-1 rounded-md">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold text-[var(--color-deepwater)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black">{s.body}</p>
              </div>
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
      <ContourDivider from="var(--color-deepwater)" to="var(--color-leaf)" flip />

      <section className="bg-[var(--color-leaf)] py-20 text-center md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="font-display text-3xl font-bold text-[var(--color-deepwater)] md:text-4xl">
            See the technologies behind the process.
          </h2>
          <NavLink
            to="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-deepwater)] px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-[var(--color-deepwater-2)] shadow-md"
          >
            Browse Products <ArrowUpRight size={16} />
          </NavLink>
        </div>
      </section>
    </div>
  );
}
