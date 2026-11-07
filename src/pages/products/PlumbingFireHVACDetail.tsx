import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, Check, Droplets, Flame, Wind } from "lucide-react";
import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import ContourDivider from "../../components/ContourDivider";
import { services } from "../../data/content";
import firefightingImg from "../../assets/firefighting.webp";
import plumbingImg from "../../assets/plumbing.webp";
import hvacImg from "../../assets/hvac.webp";

type TabId = "plumbing" | "fire" | "hvac";

const tabs: { id: TabId; label: string; icon: typeof Droplets; image: string; tag: string }[] = [
  { id: "plumbing", label: "Plumbing & Drainage", icon: Droplets, image: plumbingImg, tag: "SERVICE 01" },
  { id: "fire", label: "Fire Protection", icon: Flame, image: firefightingImg, tag: "SERVICE 02" },
  { id: "hvac", label: "HVAC", icon: Wind, image: hvacImg, tag: "SERVICE 03" },
];

const plumbingScope = [
  { title: "Cold water supply", body: "Mains connection, metering, risers and distribution to every floor." },
  { title: "Hot water", body: "Solar, heat-pump and calorifier systems with circulation loops." },
  { title: "Water storage", body: "GRP sectional, steel and underground tanks with level controls." },
  { title: "Sanitary installations", body: "WCs, basins, urinals, showers and kitchen fittings, supplied and fixed." },
  { title: "Rainwater harvesting", body: "Roof collection, first-flush filters, storage and reuse for flushing and gardens." },
  { title: "Water treatment", body: "Filtration, softening, RO and UV from our Aquakleen range." },
];

const pumpingScope = [
  "Booster sets: 2-4 stainless steel multistage pumps with variable-speed drives for constant pressure",
  "Transfer pumps: underground tank to roof tank, with automatic level control",
  "Hydropneumatic systems: pressure vessels that cut pump starts",
  "Borehole pumps: submersible pumps, panels and protection",
  "Lift stations: submersible sewage and storm-water pumps for basements",
];

const drainageScope = [
  "Soil, waste and vent stacks, sized and ventilated to BS EN 12056",
  "Storm water: roof outlets, gutters, downpipes and soakaways",
  "External drainage: manholes, inspection chambers and sewer connection",
  "Grease traps for kitchens and food outlets",
  "Sewage treatment: connection to a Biokleen STP where there is no sewer",
];

const fireDetectionScope = [
  { title: "Addressable control panels", body: "Pinpoint each device and zone; networked panels for large sites." },
  { title: "Detectors", body: "Smoke, heat and multi-sensor; beam and aspirating for tall or critical spaces." },
  { title: "Alarms and evacuation", body: "Manual call points, sounders, beacons and voice evacuation systems." },
  { title: "Emergency lighting", body: "Escape-route lighting and illuminated exit signs with battery back-up." },
  { title: "Portable extinguishers", body: "CO2, dry powder, foam and water types, fire blankets and signage." },
  { title: "Inspection and servicing", body: "Scheduled testing, extinguisher refills and certificates for inspection." },
];

const firePumpFeatures = [
  "Electric main pump: Delivers the full design flow and pressure.",
  "Diesel standby pump: Starts automatically if mains power fails.",
  "Jockey pump: Keeps the system pressurised against small leaks.",
  "With controllers, test header, flow meter and dedicated fire water storage.",
];

const hvacScope = [
  { title: "Heat-load calculation and system selection", body: "" },
  { title: "Refrigerant and chilled-water piping", body: "Fully insulated." },
  { title: "Condensate drainage and controls", body: "" },
  { title: "Inverter equipment", body: "With low-GWP refrigerants." },
  { title: "AHUs, FCUs and cassette indoor units", body: "" },
  { title: "Testing, balancing and commissioning", body: "" },
];

const ventilationScope = [
  { title: "Fresh air and AHUs", body: "Filtered outdoor air to ASHRAE 62.1, with heat-recovery options." },
  { title: "Toilet and general extract", body: "Inline and roof fans that keep odours and moisture out." },
  { title: "Kitchen extract", body: "Hoods, grease filters, fire-rated ducts and make-up air." },
  { title: "Car park ventilation", body: "Jet fans with CO sensors, doubling as smoke clearance." },
  { title: "Smoke control", body: "Smoke extract, stair pressurisation and fire/smoke dampers." },
  { title: "Ductwork and air terminals", body: "GI ducts to SMACNA, insulation, dampers, diffusers and grilles." },
  { title: "Clean and hospital air", body: "HEPA filtration and pressure control for theatres and labs." },
  { title: "BMS and controls", body: "One screen for chillers, AHUs, pumps, fans and energy meters." },
];

export default function PlumbingFireHVACDetail() {
  const [activeTab, setActiveTab] = useState<TabId>("plumbing");

  const service = services.find((s) => s.slug === "plumbing-firefighting-hvac");
  if (!service) return null;

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div>
      <PageHero
        eyebrow="Building Services"
        heading={service.title}
        body={service.tagline}
        image={service.heroImage}
      />

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-14 md:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading eyebrow="Overview" heading="One contractor for every building service." body={service.intro} />
            <div className="mt-8 flex flex-wrap gap-3">
              {["Plumbing & Drainage", "Fire Protection", "HVAC"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--color-current)]/20 bg-[var(--color-foam-2)] px-4 py-1.5 text-sm font-semibold text-[var(--color-deepwater)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-[var(--color-current)]">
              Design · Supply · Install · Maintain
            </p>

            {/* Visual 3-pillar preview cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id);
                    const el = document.getElementById("services-catalogue");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border text-left cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md ${
                    activeTab === tab.id
                      ? "border-[var(--color-current)] bg-white ring-2 ring-[var(--color-current)]/20 shadow-sm"
                      : "border-black/5 bg-white shadow-sm"
                  }`}
                >
                  <div className="relative h-28 overflow-hidden">
                    <img
                      src={tab.image}
                      alt={tab.label}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-2.5 top-2.5 rounded-full bg-black/60 backdrop-blur-sm px-2 py-0.5 font-mono text-[10px] font-semibold text-white">
                      {tab.tag}
                    </span>
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <h4 className="font-display text-xs font-bold text-[var(--color-deepwater)] group-hover:text-[var(--color-current)] transition-colors">
                      {tab.label}
                    </h4>
                    <ArrowUpRight size={13} className="text-[var(--color-current)] shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
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
              <p className="eyebrow text-[var(--color-current)]">Sectors we serve</p>
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
              <p className="font-display text-xl font-bold text-white">Get a techno-commercial offer.</p>
              <p className="mt-2 text-sm text-white/70">
                Send us your drawings and requirements — our engineers will design your plumbing, fire protection and HVAC systems and quote the job.
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

      {/* Sub-service tabs */}
      <section id="services-catalogue" className="bg-[var(--color-foam-2)] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Services Catalogue" heading="Building services in detail." />

          <div className="mt-10 flex flex-wrap gap-3">
            {tabs.map(({ id, label, icon: Icon, image }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === id
                    ? "bg-[var(--color-deepwater)] text-white shadow-md ring-2 ring-[var(--color-deepwater)]/20"
                    : "bg-white text-[var(--color-deepwater)] border border-black/5 hover:border-[var(--color-current)]/30"
                }`}
              >
                <img
                  src={image}
                  alt={label}
                  className="h-5 w-5 rounded-full object-cover border border-white/40"
                />
                <Icon size={14} className={activeTab === id ? "text-[var(--color-leaf)]" : "text-[var(--color-current)]"} />
                {label}
              </button>
            ))}
          </div>

          {/* PLUMBING TAB */}
          {activeTab === "plumbing" && (
            <div className="mt-10 space-y-14">
              {/* Featured Plumbing Banner */}
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm grid md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={plumbingImg}
                    alt="Plumbing systems and pipework installation"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1 font-mono text-xs font-bold text-[var(--color-current)] shadow-sm">
                    SERVICE 01
                  </span>
                </div>
                <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-center">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-leaf-2)]">
                    Plumbing & Drainage
                  </span>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-[var(--color-deepwater)]">
                    Plumbing systems & sanitary installations
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black">
                    Reliable water at the right pressure and temperature at every outlet, with hygienic storage, high-durability pipework sized for your building's real demand, and drainage that never backs up.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-[var(--color-foam-2)] px-3 py-1 text-xs font-medium text-[var(--color-deepwater)]">Cold & Hot Water</span>
                    <span className="rounded-full bg-[var(--color-foam-2)] px-3 py-1 text-xs font-medium text-[var(--color-deepwater)]">Booster & Transfer Sets</span>
                    <span className="rounded-full bg-[var(--color-foam-2)] px-3 py-1 text-xs font-medium text-[var(--color-deepwater)]">Rainwater Harvesting</span>
                    <span className="rounded-full bg-[var(--color-foam-2)] px-3 py-1 text-xs font-medium text-[var(--color-deepwater)]">Sanitary Fixtures</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-[var(--color-deepwater)]">Plumbing systems</h3>
                <p className="mt-2 text-sm leading-relaxed text-black">
                  Reliable water at the right pressure and temperature at every outlet, with hygienic storage and long-life pipework sized for your building's real demand.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {plumbingScope.map((item) => (
                    <div key={item.title} className="rounded-xl border border-black/5 bg-white p-4 shadow-sm">
                      <h4 className="flex items-center gap-2 font-bold text-sm text-[var(--color-deepwater)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-current)]" />
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-black">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-[var(--color-deepwater)]">Pipe materials we install</h3>
                <div className="mt-4 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[var(--color-deepwater)] text-white">
                        <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">Material</th>
                        <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">Typical Use</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/5">
                      {service.pipeTable?.map((row, i) => (
                        <tr key={row.material} className={i % 2 === 1 ? "bg-[var(--color-foam-2)]/40" : ""}>
                          <td className="px-5 py-3 font-semibold text-[var(--color-deepwater)]">{row.material}</td>
                          <td className="px-5 py-3 text-black">{row.use}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-display text-xl font-bold text-[var(--color-deepwater)]">Pumping systems</h3>
                  <ul className="mt-4 space-y-2.5">
                    {pumpingScope.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-black">
                        <Check size={15} className="mt-0.5 shrink-0 text-[var(--color-leaf-2)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-[var(--color-deepwater)]">Drainage</h3>
                  <ul className="mt-4 space-y-2.5">
                    {drainageScope.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-black">
                        <Check size={15} className="mt-0.5 shrink-0 text-[var(--color-leaf-2)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--color-current)]/10 bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-[var(--color-deepwater)]">Every booster set includes</h3>
                <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {service.boosterSetFeatures?.map((f) => (
                    <div key={f} className="flex gap-2 text-sm text-black">
                      <Check size={14} className="mt-0.5 shrink-0 text-[var(--color-leaf-2)]" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* FIRE TAB */}
          {activeTab === "fire" && (
            <div className="mt-10 space-y-14">
              {/* Featured Fire Protection Banner */}
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm grid md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={firefightingImg}
                    alt="Fire protection, detection and suppression systems"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1 font-mono text-xs font-bold text-[var(--color-current)] shadow-sm">
                    SERVICE 02
                  </span>
                </div>
                <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-center">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-leaf-2)]">
                    Life Safety & Fire Protection
                  </span>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-[var(--color-deepwater)]">
                    Fire protection & suppression systems
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black">
                    Protect people, property and business continuity with systems designed to NFPA and BS EN standards, complete with detection, pump sets, alarms, and local fire brigade approval.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-[var(--color-foam-2)] px-3 py-1 text-xs font-medium text-[var(--color-deepwater)]">Wet-Pipe Sprinklers</span>
                    <span className="rounded-full bg-[var(--color-foam-2)] px-3 py-1 text-xs font-medium text-[var(--color-deepwater)]">Hydrants & Hose Reels</span>
                    <span className="rounded-full bg-[var(--color-foam-2)] px-3 py-1 text-xs font-medium text-[var(--color-deepwater)]">Clean-Agent Gas (FM-200)</span>
                    <span className="rounded-full bg-[var(--color-foam-2)] px-3 py-1 text-xs font-medium text-[var(--color-deepwater)]">NFPA 20 Fire Pumps</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-[var(--color-deepwater)]">Fire suppression systems</h3>
                <p className="mt-2 text-sm leading-relaxed text-black">
                  Protect people, property and business continuity with systems designed to NFPA and EN standards and ready for fire brigade inspection.
                </p>
                <div className="mt-6 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[var(--color-deepwater)] text-white">
                        <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">System</th>
                        <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider hidden md:table-cell">How it protects</th>
                        <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">Typical use</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/5">
                      {service.suppressionTable?.map((row, i) => (
                        <tr key={row.system} className={i % 2 === 1 ? "bg-[var(--color-foam-2)]/40" : ""}>
                          <td className="px-5 py-3 font-semibold text-[var(--color-deepwater)]">{row.system}</td>
                          <td className="px-5 py-3 text-black hidden md:table-cell">{row.how}</td>
                          <td className="px-5 py-3 text-black">{row.use}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <h3 className="font-display text-xl font-bold text-[var(--color-deepwater)]">
                  Fire pump sets to NFPA 20 / EN 12845
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {firePumpFeatures.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-black">
                      <Check size={15} className="mt-0.5 shrink-0 text-[var(--color-leaf-2)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-[var(--color-deepwater)]">Fire detection & alarm</h3>
                <p className="mt-2 text-sm leading-relaxed text-black">
                  Early warning that finds a fire, tells people where to go and shuts down the right equipment, designed to NFPA 72 and BS 5839.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {fireDetectionScope.map((item) => (
                    <div key={item.title} className="rounded-xl border border-black/5 bg-white p-4 shadow-sm">
                      <h4 className="flex items-center gap-2 font-bold text-sm text-[var(--color-deepwater)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-current)]" />
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-black">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--color-current)]/10 bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-[var(--color-deepwater)]">
                  On alarm, the system can automatically
                </h3>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {service.alarmActions?.map((a) => (
                    <div key={a} className="flex gap-2 text-sm text-black">
                      <Check size={14} className="mt-0.5 shrink-0 text-[var(--color-leaf-2)]" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* HVAC TAB */}
          {activeTab === "hvac" && (
            <div className="mt-10 space-y-14">
              {/* Featured HVAC Banner */}
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm grid md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={hvacImg}
                    alt="HVAC ductwork, air handling units and mechanical cooling systems"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1 font-mono text-xs font-bold text-[var(--color-current)] shadow-sm">
                    SERVICE 03
                  </span>
                </div>
                <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-center">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-leaf-2)]">
                    Climate Control & Ventilation
                  </span>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-[var(--color-deepwater)]">
                    Air conditioning & ventilation systems
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black">
                    Comfortable, energy-efficient cooling and fresh air ventilation tailored for commercial buildings, healthcare, and industrial spaces, integrated with smart BMS controls.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-[var(--color-foam-2)] px-3 py-1 text-xs font-medium text-[var(--color-deepwater)]">VRF / VRV Multi-Split</span>
                    <span className="rounded-full bg-[var(--color-foam-2)] px-3 py-1 text-xs font-medium text-[var(--color-deepwater)]">Air & Water Chillers</span>
                    <span className="rounded-full bg-[var(--color-foam-2)] px-3 py-1 text-xs font-medium text-[var(--color-deepwater)]">SMACNA Ductwork & AHUs</span>
                    <span className="rounded-full bg-[var(--color-foam-2)] px-3 py-1 text-xs font-medium text-[var(--color-deepwater)]">Smoke Control & BMS</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-[var(--color-deepwater)]">Air conditioning</h3>
                <p className="mt-2 text-sm leading-relaxed text-black">
                  Comfortable, efficient cooling matched to your building, from a single office to a whole campus, starting with a proper heat-load calculation.
                </p>
                <div className="mt-6 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[var(--color-deepwater)] text-white">
                        <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">System</th>
                        <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider hidden sm:table-cell">Typical capacity</th>
                        <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">Best for</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/5">
                      {service.hvacTable?.map((row, i) => (
                        <tr key={row.system} className={i % 2 === 1 ? "bg-[var(--color-foam-2)]/40" : ""}>
                          <td className="px-5 py-3 font-semibold text-[var(--color-deepwater)]">{row.system}</td>
                          <td className="px-5 py-3 text-black hidden sm:table-cell">{row.capacity}</td>
                          <td className="px-5 py-3 text-black">{row.bestFor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-[var(--color-deepwater)]">What we deliver</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {hvacScope.map((item) => (
                    <div key={item.title} className="flex gap-2.5 text-sm text-black">
                      <Check size={15} className="mt-0.5 shrink-0 text-[var(--color-leaf-2)]" />
                      <span>
                        <span className="font-semibold">{item.title}</span>
                        {item.body ? ` — ${item.body}` : ""}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-[var(--color-deepwater)]">Ventilation & controls</h3>
                <p className="mt-2 text-sm leading-relaxed text-black">
                  Fresh, clean air in every room, safe smoke control and a building management system that keeps energy use in check.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {ventilationScope.map((item) => (
                    <div key={item.title} className="rounded-xl border border-black/5 bg-white p-4 shadow-sm">
                      <h4 className="flex items-center gap-2 font-bold text-sm text-[var(--color-deepwater)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-current)]" />
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-black">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--color-current)]/10 bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-[var(--color-deepwater)]">Ways we cut HVAC energy use</h3>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {service.energySavings?.map((e) => (
                    <div key={e} className="flex gap-2 text-sm text-black">
                      <Check size={14} className="mt-0.5 shrink-0 text-[var(--color-leaf-2)]" />
                      {e}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <ContourDivider from="var(--color-foam-2)" to="var(--color-deepwater)" />

      {/* Standards */}
      <section className="bg-[var(--color-deepwater)] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading light eyebrow="Compliance" heading="Standards we design to." />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {service.standards?.map((s) => (
              <div key={s.area} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-leaf)]">{s.area}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{s.standards}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContourDivider from="var(--color-deepwater)" to="var(--color-foam)" flip />

      {/* Track Record */}
      <section className="bg-[var(--color-foam)] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="" heading="Selected references." />

          

          <div className="mt-14 space-y-14">
            {service.trackRecord?.map((group) => (
              <div key={group.category}>
                <h3 className="mb-4 font-display text-xl font-bold text-[var(--color-deepwater)]">{group.category}</h3>
                <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[var(--color-deepwater)] text-white">
                        <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">Client / Project</th>
                        <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider hidden md:table-cell">Scope</th>
                        <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">Country</th>
                        <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">Year</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/5">
                      {group.projects.map((p, i) => (
                        <tr key={p.client} className={i % 2 === 1 ? "bg-[var(--color-foam-2)]/40" : ""}>
                          <td className="px-5 py-3 font-medium text-[var(--color-deepwater)]">{p.client}</td>
                          <td className="px-5 py-3 text-black hidden md:table-cell">{p.scope}</td>
                          <td className="px-5 py-3 text-black">{p.country}</td>
                          <td className="px-5 py-3 text-black">{p.year}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-black/50">(Partial reference list, East Africa.)</p>
        </div>
      </section>

      <ContourDivider from="var(--color-foam)" to="var(--color-foam-2)" />

      {/* Turnkey Delivery */}
      <section className="bg-[var(--color-foam-2)] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Turnkey Delivery" heading="One partner from drawings to handover." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.turnkeySteps?.map((step) => (
              <div key={step.num} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-current)] bg-[var(--color-foam-2)] px-2.5 py-1 rounded-md">
                  {step.num}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-[var(--color-deepwater)] capitalize">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold text-[var(--color-deepwater)]">To quote your project, send us</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Architectural or MEP drawings",
                "Services needed: plumbing, fire, HVAC",
                "Preferred brands or specifications",
                "Building use, floor area and number of floors",
                "Occupancy and operating hours",
                "Project programme and completion date",
              ].map((req) => (
                <div key={req} className="flex gap-2.5 text-sm text-black">
                  <Check size={15} className="mt-0.5 shrink-0 text-[var(--color-leaf-2)]" />
                  {req}
                </div>
              ))}
            </div>
            <NavLink
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-deepwater)] px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-[var(--color-deepwater-2)] shadow-md"
            >
              Ask for a techno-commercial offer <ArrowUpRight size={16} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Related services */}
      <ContourDivider from="var(--color-foam-2)" to="var(--color-foam)" />
      <section className="bg-[var(--color-foam)] py-16 md:py-20">
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
