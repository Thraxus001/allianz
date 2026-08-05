import { useState } from "react";
import { ArrowUpRight, Calendar, MapPin, Gauge } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";

// Local image assets
import heroImg from "../assets/design.jpg";
import reverseImg from "../assets/reverse.jpeg";
import ultrafiltrationImg from "../assets/ultrafiltration.png";
import maintenanceImg from "../assets/maintenance.jpeg";
import effluentImg from "../assets/effluent.png";
import membraneImg from "../assets/Aqua-membrane.jpg";
import sbrImg from "../assets/sbr.png";

// Implemented Projects List
const projectsList = [
  {
    title: "50,000 LPH Brackish Water Reverse Osmosis System",
    client: "MediLab Diagnostic Centre",
    category: "Water Treatment",
    location: "Nairobi, Kenya",
    year: "2025",
    capacity: "50,000 Litres Per Hour",
    metricLabel: "Water Purity",
    metricValue: "99.8%",
    description: "Engineering and installation of an automated commercial reverse osmosis system with media filters, chemical dosing, and UV sanitization to feed ultra-pure water to central laboratory analyzer lines.",
    image: reverseImg
  },
  {
    title: "150 m³/day Biokleen MBR Wastewater Recycling Plant",
    client: "Serena Hotels & Lodges",
    category: "Wastewater Treatment",
    location: "Masai Mara, Kenya",
    year: "2024",
    capacity: "150,000 Litres Per Day",
    metricLabel: "BOD Reduction",
    metricValue: "99%",
    description: "Design and deployment of a biological membrane bioreactor (MBR) package plant to treat lodge sewage. The treated water is fully recycled for land irrigation and fire safety inside Masai Mara wildlife conservancy.",
    image: ultrafiltrationImg
  },
  {
    title: "Central HVAC Chilled Water System (400 Tons)",
    client: "The Hub Mall",
    category: "HVAC & Utilities",
    location: "Karen, Nairobi, Kenya",
    year: "2024",
    capacity: "400 Tons Cooling Load",
    metricLabel: "Uptime Rate",
    metricValue: "99.98%",
    description: "Mechanical layout and piping installation of twin centrifugal chillers, central air handling units, and cooling towers, integrated with full borehole pre-filtration to prevent scaling.",
    image: maintenanceImg
  },
  {
    title: "100 m³/day Industrial Effluent treatment plant upgrade",
    client: "East African Breweries Ltd",
    category: "Wastewater Treatment",
    location: "Kisumu, Kenya",
    year: "2025",
    capacity: "100,000 Litres Per Day",
    metricLabel: "NEMA Compliance",
    metricValue: "100%",
    description: "Modernization of biological aeration basins and integration of microfiltration membranes to digest high-organic brewery effluent. Restored full regulatory compliance and reduced chemical usage by 30%.",
    image: effluentImg
  },
  {
    title: "Automated Borehole Softening & Ultrafiltration Plant",
    client: "FlowerTech Horticulture",
    category: "Water Treatment",
    location: "Naivasha, Kenya",
    year: "2023",
    capacity: "25,000 Litres Per Hour",
    metricLabel: "Hardness Removal",
    metricValue: "95%",
    description: "Borehole filtration plant containing automatic iron-manganese exchange softeners, sand filtration, and ultrafiltration membranes to protect crop drip irrigation systems from calcium scaling.",
    image: membraneImg
  },
  {
    title: "80 m³/day Residential SBR Sewerage Treatment Plant",
    client: "Nairobi Green Heights",
    category: "Wastewater Treatment",
    location: "Nairobi, Kenya",
    year: "2024",
    capacity: "80,000 Litres Per Day",
    metricLabel: "Odor Control",
    metricValue: "100%",
    description: "Basement-level Sequencing Batch Reactor (SBR) wastewater plant treating sewage from a 120-unit housing estate. Completely automated decanting cycles yield odor-free water for landscaping.",
    image: sbrImg
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
      <PageHero
        eyebrow="Our Projects"
        heading={"Delivering Engineering\nExcellence in East Africa"}
        body="Explore our portfolio of completed projects. We deliver end-to-end engineering, manufacturing, and operational expertise for commercial, residential, agricultural, and industrial infrastructure."
        image={heroImg}
      />

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
