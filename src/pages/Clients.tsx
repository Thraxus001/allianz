import { Star, Quote, Building2 } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";

// Local image assets
import heroImg from "../assets/productss.jpeg";
import mbbrImg from "../assets/mbbr.jpeg";
import reverseImg from "../assets/reverse.jpeg";
import sbrImg from "../assets/sbr.png";
import effluentImg from "../assets/effluent.png";
import maintenanceImg from "../assets/maintenance.jpeg";
import ultrafiltrationImg from "../assets/ultrafiltration.png";
import logoImg from "../assets/logo.jpg";

// Client industries / case profiles
const clientCases = [
  {
    name: "Serena Hotels & Lodges",
    sector: "Hospitality & Eco-Tourism",
    location: "Masai Mara & Amboseli, Kenya",
    solution: "Biokleen MBR Wastewater Recycling Package",
    description: "Designed and installed off-grid biological membrane bioreactor (MBR) plants for premium wildlife lodges. The treated water exceeds NEMA standards and is fully recycled for landscape irrigation, with zero environmental footprint in sensitive ecosystems.",
    image: mbbrImg
  },
  {
    name: "MediLab Diagnostic Centre",
    sector: "Healthcare & Laboratory Services",
    location: "Nairobi, Kenya",
    solution: "Aqua Reverse Osmosis (RO) Purification",
    description: "Sized and commissioned a multi-stage Reverse Osmosis system with UV sterilization to supply high-purity water for clinical testing, dialysis equipment, and chemical analyzer lines, backed by monthly scheduled preventative maintenance.",
    image: reverseImg
  },
  {
    name: "Nairobi Green Heights",
    sector: "Residential Real Estate",
    location: "Nairobi, Kenya",
    solution: "Biokleen SBR Sewerage Treatment Plant",
    description: "Engineered and deployed a sequencing batch reactor (SBR) treatment plant for a high-density 120-unit residential complex. The compact system was retrofitted into the basement, eliminating odors and recycling greywater directly to lawns.",
    image: sbrImg
  },
  {
    name: "East African Breweries Ltd",
    sector: "Food & Beverage Manufacturing",
    location: "Kisumu, Kenya",
    solution: "Effluent Treatment Plant (ETP) Upgrade",
    description: "Retrofitted biological aeration basins and updated mechanical filtration pumps in their existing industrial effluent plant. The upgrade restored full regulatory compliance, expanded hydraulic capacity, and lowered monthly utility energy costs.",
    image: effluentImg
  },
  {
    name: "The Hub Mall",
    sector: "Commercial Real Estate",
    location: "Karen, Nairobi",
    solution: "HVAC & Comprehensive Utility O&M",
    description: "Provides full-time, on-site utility engineers managing central water distribution, borehole filtration, HVAC water chillers, and chemical dosing routines to ensure consistent comfort and water safety for over 80 shopping outlets.",
    image: maintenanceImg
  },
  {
    name: "FlowerTech Horticulture",
    sector: "Agricultural Irrigation",
    location: "Naivasha, Kenya",
    solution: "Aqua Ion Exchange & Ultrafiltration System",
    description: "Engineered a dual-stage borehole treatment plant featuring automatic iron-manganese exchange softeners and ultrafiltration membranes to protect greenhouse drip-feed systems from scaling and organic clogging.",
    image: ultrafiltrationImg
  }
];

// Client Testimonials
const clientReviews = [
  {
    quote: "Allianz Utilities designed and installed a high-purity water system that exceeds our stringent lab guidelines. Their monthly preventative maintenance gives us complete peace of mind, and their technical response is rapid and highly professional.",
    author: "Dr. Michael Mwangi",
    role: "Director of Operations",
    company: "MediLab Diagnostic Centre",
    photo: logoImg,
    rating: 5
  },
  {
    quote: "The biological SBR wastewater plant handles our daily sewage load with zero odor, recycling water directly to our landscaping. Our residents are extremely pleased, and it has lowered our water purchase bill by over 40%. Highly recommend their O&M package.",
    author: "Sarah Ndwiga",
    role: "Estate Manager",
    company: "Nairobi Green Heights",
    photo: logoImg,
    rating: 5
  },
  {
    quote: "Their eco-lodge MBR wastewater recycling solution was completed on-schedule and integrates perfectly into our environmental policy. The recycled water quality is excellent, allowing us to keep our lawns green even in dry seasons.",
    author: "Jean-Luc Rugamba",
    role: "Director of Projects",
    company: "Serena Hotels & Lodges",
    photo: logoImg,
    rating: 5
  },
  {
    quote: "Retrofitting our biological basins with Allianz decreased our operating costs and restored complete NEMA compliance. Their team showed exceptional engineering knowledge and completed the upgrade with minimal downtime to our production.",
    author: "Anil Patel",
    role: "Technical Director",
    company: "East African Breweries Ltd",
    photo: logoImg,
    rating: 5
  }
];

export default function Clients() {
  return (
    <div>
      <PageHero
        eyebrow="Our Clients"
        heading={"Trusted by Leading\nBusinesses & Industries"}
        body="From off-grid eco-resorts and multi-specialty healthcare laboratories to large-scale beverage manufacturing and commercial malls, we deliver engineered water, wastewater, and utility solutions tailored for East African operations."
        image={heroImg}
      />

      {/* Case studies / sectors */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionHeading
            eyebrow="Partnerships"
            heading="Proven solutions in action."
            body="We partner with organizations across public and private sectors to build robust utility infrastructure that lasts."
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {clientCases.map((c) => (
            <div key={c.name} className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <img src={c.image} alt={c.name} className="h-full w-full object-cover" />
                <span className="absolute bottom-3 left-3 rounded-full bg-[var(--color-deepwater)] px-3 py-1 text-xs font-semibold text-white">
                  {c.sector}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-bold text-[var(--color-deepwater)]">{c.name}</h3>
                  <span className="shrink-0 text-xs text-[var(--color-ink)]/50">{c.location}</span>
                </div>
                <p className="mt-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
                  {c.solution}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink)]/70 flex-1">
                  {c.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews & Testimonials */}
      <section className="bg-[var(--color-foam-2)] py-20 md:py-24 border-t border-black/5">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionHeading
              eyebrow="Testimonials"
              heading="What our clients say."
              body="Read about the firsthand experiences of facility managers, directors, and technical engineers who work with us."
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
            {clientReviews.map((r, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Photo beside the review */}
                <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 mx-auto md:mx-0 overflow-hidden rounded-xl border border-black/5 shadow-sm">
                  <img
                    src={r.photo}
                    alt={r.author}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Review Text */}
                <div className="flex flex-col justify-between flex-1 text-center md:text-left">
                  <div>
                    <div className="flex justify-center md:justify-start gap-1 mb-3">
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="relative">
                      <Quote size={20} className="absolute -left-2 -top-2 opacity-5 text-[var(--color-current)]" />
                      <p className="text-sm leading-relaxed text-[var(--color-ink)]/80 italic">
                        "{r.quote}"
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 border-t border-black/5 pt-4">
                    <h4 className="font-display font-bold text-sm text-[var(--color-deepwater)]">
                      {r.author}
                    </h4>
                    <p className="text-xs text-[var(--color-ink)]/50">
                      {r.role} at <span className="font-semibold text-[var(--color-current)]">{r.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Grid */}
      <section className="bg-white border-t border-black/5 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl bg-[var(--color-surface-light)] p-8 border border-black/5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[var(--color-current)] shadow-sm">
                <Building2 size={24} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[var(--color-deepwater)]">Partner with Allianz Utilities</h3>
                <p className="text-sm text-[var(--color-ink)]/60">Let's discuss how we can improve your water system, wastewater treatment, or utility O&M.</p>
              </div>
            </div>
            <a
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--color-current)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-current-2)]"
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
