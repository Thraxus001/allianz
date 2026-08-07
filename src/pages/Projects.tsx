import { useState } from "react";
import { ArrowUpRight, Calendar, MapPin, Gauge } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import HeroCarousel from "../components/ProjectsCarousel";

// Local image assets
import tworiversLogo from "../assets/tworivers_logo.jpeg";
import sabisLogo from "../assets/sabis.jpeg";
import biovaxLogo from "../assets/biovax_logo.webp";
import weetabixLogo from "../assets/weetabix_logo.jpeg";

// Implemented Projects List
const projectsList = [
  {
    title: "30 kld C-MEM MBR Effluent Treatment Plant",
    client: "Kenya BioVax Institute (BioVax)",
    category: "Wastewater Treatment",
    location: "Embakasi, Nairobi, Kenya",
    year: "2026",
    capacity: "30 Kilolitres Per Day (30,000 LPD)",
    metricLabel: "MBR Effluent Capacity",
    metricValue: "30 KLD",
    description: "Design and installation of a 30 kld biological membrane bioreactor (MBR) system to treat pharmaceutical effluent, ensuring absolute sanitation and meeting critical chemical and pathogen NEMA discharge limits.",
    image: biovaxLogo
  },
  {
    title: "6,000 LPH Double-Pass Reverse Osmosis System",
    client: "Kenya BioVax Institute (BioVax)",
    category: "Water Treatment",
    location: "Embakasi, Nairobi, Kenya",
    year: "2026",
    capacity: "6,000 Litres Per Hour",
    metricLabel: "Vaccine Manufacturing RO",
    metricValue: "6,000 LPH",
    description: "Sizing, engineering, and commissioning of a double-pass Reverse Osmosis system with UV sterilization to supply high-purity USP-compliant water required for clinical vaccine product formulation.",
    image: biovaxLogo
  },
  {
    title: "20 kld C-MEM Wastewater Recycling System",
    client: "Weetabix East Africa",
    category: "Wastewater Treatment",
    location: "Nairobi, Kenya",
    year: "2026",
    capacity: "20 Kilolitres Per Day",
    metricLabel: "Cereal Processing ETP",
    metricValue: "20 KLD",
    description: "Implementation of a 20 kld C-MEM biological membrane bioreactor treatment plant for the cereal processing factory, enabling complete recycling of plant washing and organic production wastewater.",
    image: weetabixLogo
  },
  {
    title: "Ongoing Central Utility O&M",
    client: "Two Rivers Mall",
    category: "HVAC & Utilities",
    location: "Ruaka, Nairobi, Kenya",
    year: "Ongoing",
    capacity: "2,000 m³/day RO & 1,500 m³/day STP",
    metricLabel: "Daily Flow Managed",
    metricValue: "3,500 m³/day",
    description: "Comprehensive utility operations and maintenance (O&M) of a 2,000 cubic meters per day brackish water Reverse Osmosis system and a 1,500 cubic meters per day biological Sewage Treatment Plant (STP) processing raw sewer water.",
    image: tworiversLogo
  },
  {
    title: "Water Quality Testing Laboratory Maintenance",
    client: "Two Rivers Mall",
    category: "HVAC & Utilities",
    location: "Ruaka, Nairobi, Kenya",
    year: "Ongoing",
    capacity: "Fully Equipped Testing Lab",
    metricLabel: "Lab Status",
    metricValue: "24/7 Monitored",
    description: "Ongoing operations, calibration, and support services for a fully equipped, state-of-the-art on-site water quality testing laboratory, performing continuous biological and chemical sampling to ensure water safety.",
    image: tworiversLogo
  },
  {
    title: "15,000 LPH RO System & 20 kld MBR STP",
    client: "Sabis International School",
    category: "Water Treatment",
    location: "Runda, Nairobi, Kenya",
    year: "2025",
    capacity: "15,000 LPH RO & 20 kld STP",
    metricLabel: "System Output",
    metricValue: "15k LPH & 20 KLD",
    description: "Designed, installed, and commissioned a 15,000 Litres Per Hour commercial Reverse Osmosis system for drinking water supply, alongside a 20 kld biological Sewage Treatment Plant (STP) MBR for water reclamation.",
    image: sabisLogo
  }
];

const categories = ["All", "Water Treatment", "Wastewater Treatment", "HVAC & Utilities"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projectsList
    : projectsList.filter(p => p.category === activeCategory);

  return (
    <div>
      <HeroCarousel />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        {/* Section Heading & Category Filter Tabs */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between border-b border-black/5 pb-8 mb-12">
          <div className="max-w-xl">
            <SectionHeading
              eyebrow="Featured Case Studies"
              heading="Proven systems. Real results."
              body="Filter our completed works by technology sector to explore the solutions we've deployed for our clients."
            />
          </div>
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === cat
                    ? "bg-[var(--color-current)] text-white shadow-sm"
                    : "bg-[var(--color-foam-2)] text-[var(--color-ink)]/70 hover:bg-black/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((proj, idx) => (
            <div
              key={idx}
              className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow group"
            >
              {/* Image & Category Badge */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                  <span className="rounded-full bg-[var(--color-deepwater)] px-3.5 py-1 text-xs font-semibold text-white shadow-sm">
                    {proj.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex-1">
                  <span className="text-xs font-semibold text-[var(--color-ink)]/50">
                    Client: {proj.client}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-bold leading-tight text-[var(--color-deepwater)] group-hover:text-[var(--color-current)] transition-colors">
                    {proj.title}
                  </h3>
                  
                  {/* Meta Details */}
                  <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-4 border-y border-black/5 py-3 text-xs text-[var(--color-ink)]/65">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-[var(--color-secondary)]" /> {proj.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-[var(--color-secondary)]" /> Completed {proj.year}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink)]/70">
                    {proj.description}
                  </p>
                </div>

                {/* Metrics & Footer */}
                <div className="mt-6 border-t border-black/5 pt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-foam-2)] text-[var(--color-secondary)]">
                      <Gauge size={18} />
                    </div>
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-wider text-[var(--color-ink)]/40 leading-none">
                        {proj.metricLabel}
                      </p>
                      <p className="text-sm font-bold text-[var(--color-deepwater)] leading-tight mt-0.5">
                        {proj.metricValue}
                      </p>
                    </div>
                  </div>
                  
                  <a
                    href="/contact"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-foam-2)] text-[var(--color-deepwater)] hover:bg-[var(--color-current)] hover:text-white transition-colors"
                    aria-label="Enquire about this project"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Board */}
      <section className="bg-[var(--color-deepwater)] text-white py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div>
              <p className="font-display text-4xl font-extrabold text-[var(--color-secondary)] md:text-5xl">9+</p>
              <p className="mt-2 text-xs font-semibold tracking-wider uppercase text-white/60">Years in Operation</p>
            </div>
            <div>
              <p className="font-display text-4xl font-extrabold text-[var(--color-secondary)] md:text-5xl">50+</p>
              <p className="mt-2 text-xs font-semibold tracking-wider uppercase text-white/60">Plants Commissioned</p>
            </div>
            <div>
              <p className="font-display text-4xl font-extrabold text-[var(--color-secondary)] md:text-5xl">50M+</p>
              <p className="mt-2 text-xs font-semibold tracking-wider uppercase text-white/60">Litres Treated Daily</p>
            </div>
            <div>
              <p className="font-display text-4xl font-extrabold text-[var(--color-secondary)] md:text-5xl">100%</p>
              <p className="mt-2 text-xs font-semibold tracking-wider uppercase text-white/60">Regulatory Approval Rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
