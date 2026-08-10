import { useState } from "react";
import { Navigate, NavLink, useParams } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import ContourDivider from "../../components/ContourDivider";
import { services } from "../../data/content";

const omPackages = [
  {
    num: "01",
    name: "Full Package O&M",
    tagline: "Complete Operations & Maintenance",
    description: "Our Full Package O&M provides end-to-end management of the water or wastewater treatment plant. We take responsibility for the day-to-day operation, preventive maintenance, monitoring, troubleshooting, and performance optimization of the system. This package is ideal for clients who want to outsource plant operations to a qualified technical team while maintaining reliable treatment performance and minimizing unexpected breakdowns.",
    scope: [
      {
        category: "Plant Operation",
        items: [
          "Daily operation of treatment systems",
          "Monitoring of pumps, blowers, valves, control panels, and instrumentation",
          "Monitoring of flow rates, pressures, levels, and operating parameters",
          "Chemical dosing and management",
          "Control of treatment cycles and process parameters",
          "Routine operator inspections",
          "Start-up and shutdown procedures"
        ]
      },
      {
        category: "Preventive Maintenance",
        items: [
          "Scheduled inspection of mechanical and electrical equipment",
          "Pump and motor inspection",
          "Blower inspection and servicing",
          "Filter and membrane maintenance",
          "Electrical panel and control system checks",
          "Replacement of routine consumables",
          "Preventive cleaning and servicing"
        ]
      },
      {
        category: "Corrective Maintenance",
        items: [
          "Troubleshooting of equipment failures",
          "Emergency response to operational faults",
          "Repair coordination",
          "Replacement of faulty components",
          "Root-cause identification",
          "System recommissioning after repairs"
        ]
      },
      {
        category: "Reporting & Documentation",
        items: [
          "Daily operational records",
          "Maintenance records",
          "Chemical consumption records",
          "Equipment performance records",
          "Monthly O&M reports",
          "Breakdown and corrective maintenance reports",
          "Recommendations for plant improvement"
        ]
      }
    ],
    footerLabel: "Key Benefit",
    footerText: "One technical team. One point of responsibility. Complete plant management."
  },
  {
    num: "02",
    name: "Annual Maintenance",
    tagline: "Comprehensive Annual Plant Servicing",
    description: "The Annual Maintenance Package provides a comprehensive scheduled inspection and servicing of the treatment plant to identify wear, prevent failures, and restore equipment to optimal operating condition. It is suitable for clients who have their own operators but require specialist technical support for major preventive maintenance and system servicing.",
    scope: [
      {
        category: "Mechanical Maintenance",
        items: [
          "Pumps and motors",
          "Blowers and compressors",
          "Agitators and mixers",
          "Mechanical screens",
          "Dosing pumps",
          "Cooling equipment where applicable"
        ]
      },
      {
        category: "Treatment System Maintenance",
        items: [
          "RO membrane inspection and performance assessment",
          "RO CIP where required",
          "Cartridge filter replacement",
          "Multimedia filter inspection",
          "Softener inspection",
          "MBBR carrier inspection",
          "SBR equipment inspection",
          "MBR membrane inspection and cleaning",
          "UF membrane inspection and backwashing system checks"
        ]
      },
      {
        category: "Electrical & Control Systems",
        items: [
          "Control panel inspection",
          "Electrical connections",
          "VFD inspection",
          "Sensors and instrumentation",
          "HMI and control system checks",
          "Alarm and interlock verification"
        ]
      },
      {
        category: "Cleaning & Servicing",
        items: [
          "Tank inspection and cleaning recommendations",
          "Filter media assessment",
          "Membrane cleaning",
          "Chemical dosing line flushing",
          "Equipment cleaning",
          "General plant housekeeping assessment"
        ]
      },
      {
        category: "Performance Assessment",
        items: [
          "Review of plant operating parameters",
          "Flow and pressure assessment",
          "Water quality review",
          "Energy and chemical consumption review",
          "Identification of deteriorating equipment",
          "Recommendations for replacement or upgrades"
        ]
      }
    ],
    footerLabel: "Deliverable",
    footerText: "Following the annual service, the client receives a maintenance report detailing equipment condition, work completed, identified defects, recommended corrective actions, and priority items."
  },
  {
    num: "03",
    name: "Quarterly Maintenance",
    tagline: "Routine Preventive Maintenance",
    description: "The Quarterly Maintenance Package provides scheduled technical inspections and preventive maintenance four times per year. It is designed to identify developing problems early, maintain equipment reliability, and reduce the likelihood of costly breakdowns.",
    scope: [
      {
        category: "Equipment Inspection",
        items: [
          "Pumps",
          "Motors",
          "Blowers",
          "Valves",
          "Dosing systems",
          "Filters",
          "Membranes",
          "Control panels",
          "Instrumentation"
        ]
      },
      {
        category: "Operational Checks",
        items: [
          "Flow and pressure verification",
          "Chemical dosing rates",
          "Equipment operating conditions",
          "RO/UF membrane performance",
          "Biological process performance",
          "Alarm and control system checks"
        ]
      },
      {
        category: "Preventive Maintenance",
        items: [
          "Lubrication and Oiling",
          "Filter inspection",
          "Dosing system checks",
          "Minor adjustments",
          "Identification of worn components"
        ]
      },
      {
        category: "Condition Assessment",
        items: [
          "Equipment condition rating",
          "Identification of potential failures",
          "Review of consumables",
          "Review of chemical usage",
          "Recommendations for upcoming maintenance"
        ]
      },
      {
        category: "Reporting",
        items: [
          "Quarterly maintenance report",
          "Work completed",
          "Equipment condition",
          "Observed faults",
          "Recommended actions",
          "Priority maintenance requirements"
        ]
      }
    ]
  }
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const [activeTab, setActiveTab] = useState<"overview" | "packages">("overview");
  const [activePackage, setActivePackage] = useState<number>(0);

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
            {service.slug === "operation-and-maintenance" || service.slug === "annual-maintenance-contracts" ? (
              <>
                {/* Tabs Navigation */}
                <div className="mb-8 flex border-b border-black/5">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`pb-4 text-base font-bold transition-all border-b-2 mr-8 cursor-pointer ${
                      activeTab === "overview"
                        ? "border-[var(--color-current)] text-[var(--color-deepwater)]"
                        : "border-transparent text-[var(--color-ink)]/40 hover:text-black"
                    }`}
                  >
                    Service Overview
                  </button>
                  <button
                    onClick={() => setActiveTab("packages")}
                    className={`pb-4 text-base font-bold transition-all border-b-2 cursor-pointer ${
                      activeTab === "packages"
                        ? "border-[var(--color-current)] text-[var(--color-deepwater)]"
                        : "border-transparent text-[var(--color-ink)]/40 hover:text-black"
                    }`}
                  >
                    O&M Packages
                  </button>
                </div>

                {activeTab === "overview" ? (
                  <div className="animate-fade-in">
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
                ) : (
                  <div className="animate-fade-in space-y-6">
                    <SectionHeading
                      eyebrow="O&M Packages"
                      heading="Flexible service levels."
                      body="Choose the support level that fits your operation, staffing, and compliance needs."
                    />

                    <div className="mt-10 space-y-4">
                      {omPackages.map((pkg, idx) => {
                        const isOpen = activePackage === idx;
                        return (
                          <div
                            key={pkg.name}
                            className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300"
                          >
                            <button
                              onClick={() => setActivePackage(idx)}
                              className="flex w-full items-center justify-between p-6 text-left hover:bg-black/[0.01]"
                            >
                              <div className="flex gap-4 items-center">
                                <span className="font-mono text-sm font-semibold text-[var(--color-current)]">
                                  {pkg.num}
                                </span>
                                <div>
                                  <h3 className="font-display text-xl font-bold text-[var(--color-deepwater)]">
                                    {pkg.name}
                                  </h3>
                                  <p className="text-xs text-[var(--color-secondary)] font-medium">
                                    {pkg.tagline}
                                  </p>
                                </div>
                              </div>
                              <span className="text-[var(--color-current)] font-bold text-lg select-none">
                                {isOpen ? "−" : "+"}
                              </span>
                            </button>

                            {isOpen && (
                              <div className="border-t border-black/5 p-6 bg-[var(--color-surface-light)]/30 animate-fade-in">
                                <p className="text-sm leading-relaxed text-black mb-6">
                                  {pkg.description}
                                </p>

                                <div className="space-y-6">
                                  <h4 className="font-display font-bold text-base text-[var(--color-deepwater)] border-b border-black/5 pb-2">
                                    Scope of Service
                                  </h4>

                                  <div className="grid gap-6 sm:grid-cols-2">
                                    {pkg.scope.map((sec) => (
                                      <div
                                        key={sec.category}
                                        className="rounded-xl border border-black/5 bg-white p-4 shadow-sm"
                                      >
                                        <h5 className="font-bold text-sm text-[var(--color-deepwater)] mb-3 flex items-center gap-2">
                                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-current)]" />
                                          {sec.category}
                                        </h5>
                                        <ul className="space-y-2">
                                          {sec.items.map((item) => (
                                            <li key={item} className="flex gap-2 text-xs leading-relaxed text-black">
                                              <Check size={12} className="mt-0.5 shrink-0 text-[var(--color-leaf-2)]" />
                                              {item}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {pkg.footerText && (
                                  <div className="mt-6 rounded-xl border border-[var(--color-current)]/10 bg-[var(--color-foam-2)]/30 p-4">
                                    <p className="text-xs font-mono text-[var(--color-current)]">
                                      <span className="font-bold uppercase tracking-wider block mb-1">
                                        {pkg.footerLabel}:
                                      </span>
                                      {pkg.footerText}
                                    </p>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
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
              </>
            )}
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
