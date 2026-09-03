import { useState } from "react";
import { ArrowUpRight, Calendar, MapPin, Gauge } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import HeroCarousel from "../components/ProjectsCarousel";

// Local image assets
import tworiversImg from "../assets/projects/tworivers.jpeg";
import sabisImg from "../assets/projects/sabis.jpeg";
import biovaxImg from "../assets/projects/biovax.jpeg";
import weetabixImg from "../assets/projects/weetabix.jpeg";
import lifecareImg from "../assets/projects/lifecare.jpeg";
import bbsImg from "../assets/projects/bbs.jpeg";
import ciataImg from "../assets/projects/ciata.jpeg";
import rosslynImg from "../assets/projects/roselyn.jpeg";
import uonImg from "../assets/projects/uon.jpeg";
import konzaImg from "../assets/projects/konza.jpeg";
import vipingoImg from "../assets/projects/vipingo.jpeg";
import dolphinImg from "../assets/projects/dolphin.jpeg";
import kaistImg from "../assets/projects/kaistkonza.jpeg";
import epzLeatherImg from "../assets/projects/industrialleather.jpeg";

// Implemented Projects List
const projectsList = [
  {
    title: "Central Utility O&M & Water Testing Lab",
    client: "Two Rivers Mall",
    category: "Operation & Maintenance",
    location: "Ruaka, Nairobi, Kenya",
    year: "Ongoing",
    capacity: "2,000 CMD RO & 1,500 m³/day MBBR",
    metricLabel: "Daily Flow Managed",
    metricValue: "3,500 m³/day",
    description: "Operations and maintenance (O&M) for a 2,000 CMD brackish water Reverse Osmosis plant, a 1,500 m³/day MBBR Sewage Treatment Plant, and an on-site water quality laboratory.",
    image: tworiversImg
  },
  {
    title: "Installation & Ongoing O&M, RO & MBR Systems",
    client: "Sabis International School",
    category: "Operation & Maintenance",
    location: "Runda, Nairobi, Kenya",
    year: "Ongoing",
    capacity: "20,000 LPH RO & 10,000 KLD MBR",
    metricLabel: "System Capacity",
    metricValue: "20k LPH RO & 300 KLD MBR",
    description: "Design, installation, and ongoing Operation & Maintenance (O&M) services for the 20,000 LPH Reverse Osmosis drinking water system and a 300 KLD MBR wastewater reclamation facility.",
    image: sabisImg
  },
  {
    title: "C-MEM MBR, Aquaclean RO",
    client: "Kenya BioVax Institute (BioVax)",
    category: "Wastewater Treatment",
    location: "Embakasi, Nairobi, Kenya",
    year: "2026",
    capacity: "80 KLD MBR & 6,000 LPH RO",
    metricLabel: "Pharmaceutical Water/WW",
    metricValue: "80 KLD / 6k LPH",
    description: "Engineering and installation of an 80 KLD biological C-MEM MBR effluent plant alongside a 6,000 LPH RO Aquaclean system for pharmaceutical-grade processing.",
    image: biovaxImg
  },
  {
    title: "C-MEM Wastewater Recycling System",
    client: "Weetabix East Africa",
    category: "Wastewater Treatment",
    location: "Nairobi, Kenya",
    year: "2026",
    capacity: "20 Kilolitres Per Day",
    metricLabel: "Factory Recycling ETP",
    metricValue: "20 KLD",
    description: "Implementation of a 20 KLD C-MEM biological membrane bioreactor system for cereal processing plant effluent, enabling complete factory wash water recycling.",
    image: weetabixImg
  },
  {
    title: "HVAC Services, Aquaclean RO & Wastewater Plant",
    client: "BBS Mall",
    category: "HVAC & Utilities",
    location: "Eastleigh, Nairobi, Kenya",
    year: "2026",
    capacity: "5,000 LPH RO & 8,000 LPH Wastewater",
    metricLabel: "Utility Flow Rate",
    metricValue: "13,000 LPH",
    description: "Turnkey HVAC installation along with a 5,000 LPH Reverse Osmosis water treatment plant and an 8,000 LPH commercial wastewater processing facility.",
    image: bbsImg
  },
  {
    title: "Reverse Osmosis System",
    client: "Ciata City Mall",
    category: "Water Treatment",
    location: "Kiambu Road, Nairobi, Kenya",
    year: "2026",
    capacity: "20,000 Litres Per Hour",
    metricLabel: "RO Water Supply",
    metricValue: "20,000 LPH",
    description: "Design, installation, and commissioning of a commercial 20,000 LPH Reverse Osmosis plant delivering clean potable water for tenant and retail operations.",
    image: ciataImg
  },
  {
    title: "Wastewater Treatment MBR Plant",
    client: "Rosslyn Academy",
    category: "Wastewater Treatment",
    location: "Gigiri, Nairobi, Kenya",
    year: "2026",
    capacity: "150 Kilolitres Per Day",
    metricLabel: "Campus STP Output",
    metricValue: "150 KLD",
    description: "Deployment of a 150 KLD MBR biological sewage treatment plant servicing campus facilities to ensure full environmental compliance and irrigation reuse.",
    image: rosslynImg
  },
  {
    title: "Installation & Ongoing O&M, MBR System",
    client: "University of Nairobi",
    category: "Operation & Maintenance",
    location: "Nairobi, Kenya",
    year: "Ongoing",
    capacity: "150 Kilolitres Per Day",
    metricLabel: "Revised STP Output",
    metricValue: "150 KLD",
    description: "Engineering and installation of a revised 150 KLD MBR wastewater treatment system to handle campus effluent, along with ongoing Operation & Maintenance (O&M) services.",
    image: uonImg
  },
  {
    title: "Wastewater Lagoon System & Open University STP",
    client: "Konza Technopolis (Konza City)",
    category: "Wastewater Treatment",
    location: "Konza, Machakos, Kenya",
    year: "2026",
    capacity: "Lagoon System & 250 KLD STP",
    metricLabel: "Open University STP",
    metricValue: "600 KLD",
    description: "Large-scale wastewater lagoon system engineering combined with a dedicated 250 KLD sewage treatment plant for Kenya Open University.",
    image: konzaImg
  },
  {
    title: "Seawater Desalination Plant",
    client: "Vipingo Development",
    category: "Water Treatment",
    location: "Vipingo, Kilifi, Kenya",
    year: "2026",
    capacity: "1,500 Cubic Meters Per Day",
    metricLabel: "Desalination Output",
    metricValue: "1,500 CMD",
    description: "Construction and commissioning of a 1,500 CMD coastal seawater desalination plant supplying fresh water for community developments.",
    image: vipingoImg
  },
  {
    title: "Medical Grade Dialysis RO System O&M",
    client: "LifeCare Hospitals",
    category: "Operation & Maintenance",
    location: "Kenya",
    year: "Ongoing",
    capacity: "Clinical Hemodialysis Grade RO",
    metricLabel: "Dialysis RO Water",
    metricValue: "Medical Grade",
    description: "Specialized operations and maintenance of ultra-pure Reverse Osmosis water treatment systems critical for clinical hemodialysis therapy.",
    image: lifecareImg
  },
  {
    title: "Aqua Clean RO & BioKleen MBBR Systems",
    client: "Dolphine Hotel",
    category: "Water Treatment",
    location: "Mombasa, Kenya",
    year: "Ongoing",
    capacity: "15,000 m³/day RO & 250 m³/day MBBR",
    metricLabel: "RO & MBBR Capacity",
    metricValue: "15k CMD & 250 CMD",
    description: "Engineering and installation of a 15,000 m³/day Aqua Clean Reverse Osmosis desalination system and a 250 m³/day BioKleen MBBR sewage treatment plant for sustainable water self-sufficiency (Ongoing).",
    image: dolphinImg
  },
  {
    title: "Effluent Treatment Plant (MBBR)",
    client: "KAIST",
    category: "Wastewater Treatment",
    location: "Konza Technopolis, Kenya",
    year: "2026",
    capacity: "250 KLD MBBR",
    metricLabel: "ETP Capacity",
    metricValue: "250 KLD",
    description: "Design, construction, and commissioning of a 250 KLD biological Moving Bed Biofilm Reactor (MBBR) Effluent Treatment Plant (ETP) for campus wastewater reclamation.",
    image: kaistImg
  },
  {
    title: "Common Effluent Treatment Plant (CETP)",
    client: "Kenya Industrial Leather Park- EPZA",
    category: "Wastewater Treatment",
    location: "Athi River, Kenya",
    year: "Ongoing",
    capacity: "10 MLD CETP & 2.5 MLD ETP",
    metricLabel: "Shared CETP Capacity",
    metricValue: "10 MLD",
    description: "Turnkey design, engineering, and construction of a 10 MLD Common Effluent Treatment Plant (CETP) integrating a dedicated 2.5 MLD biological Effluent Treatment Plant (ETP) to treat, process, and reclaim combined industrial and leather processing wastewater discharges.",
    image: epzLeatherImg
  }
];

const categories = ["All", "Water Treatment", "Wastewater Treatment", "HVAC & Utilities", "Operation & Maintenance"];

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
                    : "bg-[var(--color-foam-2)] text-black hover:bg-black/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((proj, idx) => (
            <div
              key={idx}
              className="flex flex-col overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow group"
            >
              {/* Image & Category Badge */}
              <div className="relative h-36 w-full overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
                  <span className="rounded-full bg-[var(--color-deepwater)]/90 backdrop-blur-xs px-2.5 py-0.5 text-[10px] font-semibold text-white shadow-xs">
                    {proj.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-4">
                <div className="flex-1">
                  <span className="text-[11px] font-semibold text-[var(--color-ink)]/50">
                    Client: {proj.client}
                  </span>
                  <h3 className="mt-0.5 font-display text-base font-bold leading-snug text-[var(--color-deepwater)] group-hover:text-[var(--color-current)] transition-colors">
                    {proj.title}
                  </h3>
                  
                  {/* Meta Details */}
                  <div className="mt-2.5 flex flex-wrap items-center gap-y-1 gap-x-3 border-y border-black/5 py-2 text-[11px] text-[var(--color-ink)]/65">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-[var(--color-secondary)]" /> {proj.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="text-[var(--color-secondary)]" /> {proj.year}
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-relaxed text-black line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                {/* Metrics & Footer */}
                <div className="mt-4 border-t border-black/5 pt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--color-foam-2)] text-[var(--color-secondary)]">
                      <Gauge size={14} />
                    </div>
                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-wider text-[var(--color-ink)]/40 leading-none">
                        {proj.metricLabel}
                      </p>
                      <p className="text-xs font-bold text-[var(--color-deepwater)] leading-tight mt-0.5">
                        {proj.metricValue}
                      </p>
                    </div>
                  </div>
                  
                  <a
                    href="/contact"
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-foam-2)] text-[var(--color-deepwater)] hover:bg-[var(--color-current)] hover:text-white transition-colors"
                    aria-label="Enquire about this project"
                  >
                    <ArrowUpRight size={14} />
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
              <p className="font-display text-4xl font-extrabold text-[var(--color-secondary)] md:text-5xl">10+</p>
              <p className="mt-2 text-xs font-semibold tracking-wider uppercase text-white/60">Years in Operation</p>
            </div>
            <div>
              <p className="font-display text-4xl font-extrabold text-[var(--color-secondary)] md:text-5xl">100+</p>
              <p className="mt-2 text-xs font-semibold tracking-wider uppercase text-white/60">Plants Commissioned</p>
            </div>
            <div>
              <p className="font-display text-4xl font-extrabold text-[var(--color-secondary)] md:text-5xl">20M+</p>
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
