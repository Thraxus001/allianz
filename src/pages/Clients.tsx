import { Star, Quote, Building2 } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";

// Local image assets
import heroImg from "../assets/clientts.png";
import logoImg from "../assets/logo.jpg";

// Client Logos
import uonLogo from "../assets/uon_logo.svg";
import tworiversLogo from "../assets/tworivers_logo.svg";
import sabisLogo from "../assets/sabis_logo.svg";
import ciataLogo from "../assets/ciata_logo.svg";
import rosslynLogo from "../assets/rosslyn_logo.png";
import biovaxLogo from "../assets/biovax_logo.webp";
import weetabixLogo from "../assets/weetabix_logo.svg";
import lifecareLogo from "../assets/lifecare.jpg";

// Client industries / case profiles
const clientCases = [
  {
    name: "University of Nairobi (UoN)",
    sector: "Higher Education & Research",
    location: "Nairobi, Kenya",
    solution: "Borehole Filtration & Water Treatment Plant",
    description: "Designed and installed a high-capacity reverse osmosis and sand filtration system for the main campus, supplying safe, treated water to administrative offices, science laboratories, and student residences.",
    image: uonLogo
  },
  {
    name: "Two Rivers Mall",
    sector: "Commercial Real Estate & Retail",
    location: "Ruaka, Nairobi",
    solution: "Central HVAC & Water Utility Management",
    description: "Provides full-scale HVAC operations and comprehensive maintenance of water supply, biological recycling systems, and borehole filtration for East Africa's largest retail and commercial complex.",
    image: tworiversLogo
  },
  {
    name: "Sabis International School",
    sector: "K-12 Education & Institutional",
    location: "Runda, Nairobi",
    solution: "Biokleen Biological Wastewater Treatment Plant",
    description: "Deployed a zero-odor biological wastewater recycling system for the campus. The treated water meets stringent standards and is used for maintaining the institution's sports fields and garden landscaping.",
    image: sabisLogo
  },
  {
    name: "Ciata City Mall",
    sector: "Retail & Commercial Real Estate",
    location: "Kiambu Road, Nairobi",
    solution: "Water Filtration & Borehole Softening Plant",
    description: "Engineered and implemented a central water purification and automatic hardness-removal softening plant to protect commercial building infrastructure and ensure reliable water quality for all retail outlets.",
    image: ciataLogo
  },
  {
    name: "Rosslyn Academy",
    sector: "K-12 Education & International School",
    location: "Gigiri, Nairobi",
    solution: "SBR Wastewater Treatment & Water Supply O&M",
    description: "Manages the design, installation, and daily operations of their biological sequencing batch reactor wastewater plant, supporting the school's sustainability initiatives by recycling greywater.",
    image: rosslynLogo
  },
  {
    name: "Kenya BioVax Institute (BioVax)",
    sector: "Pharmaceutical & Vaccine Manufacturing",
    location: "Embakasi, Nairobi",
    solution: "High-Purity Ultrafiltration & RO System",
    description: "Sized and commissioned a double-pass Reverse Osmosis system with UV sterilization to supply high-purity water for clinical product formulation and laboratory testing processes.",
    image: biovaxLogo
  },
  {
    name: "Weetabix East Africa",
    sector: "Food & Beverage Manufacturing",
    location: "Nairobi, Kenya",
    solution: "Effluent Treatment Plant (ETP) Upgrade",
    description: "Upgraded the biological treatment and aeration systems at their main processing facility. Improved NEMA compliance, optimized hydraulic capacity, and lowered monthly utility energy costs.",
    image: weetabixLogo
  },
  {
    name: "Lifecare Kenya",
    sector: "Healthcare & Medical Laboratory",
    location: "Nairobi, Kenya",
    solution: "Biological Wastewater Treatment & Water Supply O&M",
    description: "Provides ongoing operations and maintenance of their biological wastewater treatment plant, ensuring compliance with environmental regulations and maintaining high-quality water supply for laboratory and clinical operations.",
    image: lifecareLogo
  }
];

// Client Testimonials
const clientReviews = [
  {
    quote: "Allianz Utilities designed and installed a high-purity water system that exceeds our stringent pharmaceutical guidelines. Their technical response is rapid and highly professional, ensuring our vaccine lines have consistent water quality.",
    author: "Dr. Michael Mwangi",
    role: "Director of Operations",
    company: "Kenya BioVax Institute",
    photo: logoImg,
    rating: 5
  },
  {
    quote: "The biological wastewater plant handles our campus sewage load with zero odor, recycling water directly to our sports fields. It has lowered our water bill significantly and aligns perfectly with our campus sustainability goals.",
    author: "Sarah Ndwiga",
    role: "Estate & Facilities Manager",
    company: "Sabis International School",
    photo: logoImg,
    rating: 5
  },
  {
    quote: "Their biological wastewater recycling solution was completed on schedule and integrates perfectly into our green campus initiative. The recycled water quality is excellent, allowing us to keep our landscaping green all year round.",
    author: "Jean-Luc Rugamba",
    role: "Director of Facilities",
    company: "Rosslyn Academy",
    photo: logoImg,
    rating: 5
  },
  {
    quote: "Retrofitting our biological basins with Allianz decreased our operating costs and restored complete NEMA compliance. Their team showed exceptional engineering knowledge and completed the upgrade with minimal downtime to production.",
    author: "Anil Patel",
    role: "Technical Director",
    company: "Weetabix East Africa",
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
              <div className="relative h-48 w-full bg-[var(--color-foam-2)]/30 flex items-center justify-center p-8 border-b border-black/5">
                <img src={c.image} alt={c.name} className="max-h-full max-w-full object-contain" />
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
