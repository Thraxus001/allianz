import { Star, Quote, Building2 } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";

// Local image assets
import heroImg from "../assets/clients.jpeg";

// Client Logos
import uonLogo from "../assets/uon_logo.jpeg";
import tworiversLogo from "../assets/tworivers_logo.jpeg";
import sabisLogo from "../assets/sabis.jpeg";
import ciataLogo from "../assets/ciatalogo.jpg";
import rosslynLogo from "../assets/rosslyn_logo.png";
import biovaxLogo from "../assets/biovax_logo.webp";
import weetabixLogo from "../assets/weetabix_logo.jpeg";
import lifecareLogo from "../assets/lifecare.jpg";
import bbsLogo from "../assets/bbslogo.jpg";

// Client industries / case profiles
const clientCases = [
  {
    name: "University of Nairobi (UoN)",
    sector: "Higher Education & Research",
    location: "Nairobi, Kenya",
    solution: "MBR Wastewater Treatment System",
    description: "Deployed a high-efficiency biological Membrane Bioreactor (MBR) system to treat campus wastewater, enabling eco-friendly reclamation and water recycling for campus irrigation.",
    image: uonLogo
  },
  {
    name: "Two Rivers Mall",
    sector: "Commercial Real Estate & Retail",
    location: "Ruaka, Nairobi, Kenya",
    solution: "Reverse Osmosis & MBBR System",
    description: "Supplied advanced high-pressure Reverse Osmosis systems combined with Moving Bed Biofilm Reactor (MBBR) biological treatment for heavy-duty commercial utility loops.",
    image: tworiversLogo
  },
  {
    name: "Sabis International School",
    sector: "K-12 Education & Institutional",
    location: "Runda, Nairobi, Kenya",
    solution: "RO (15,000 L/h) & 20 kld MBR STP",
    description: "Commissioned a 15,000 LPH Reverse Osmosis system supplying potable drinking water, alongside a 20 kld biological Sewage Treatment Plant (STP) MBR for zero-odor wastewater recycling.",
    image: sabisLogo
  },
  {
    name: "Ciata City Mall",
    sector: "Retail & Commercial Real Estate",
    location: "Kiambu Road, Nairobi",
    solution: "20,000 L/h Reverse Osmosis System",
    description: "Designed and installed a high-capacity 20,000 Litres Per Hour Reverse Osmosis plant with pre-filtration sand media to ensure high-purity water for commercial mall facilities.",
    image: ciataLogo
  },
  {
    name: "Rosslyn Academy",
    sector: "K-12 Education & International School",
    location: "Gigiri, Nairobi, Kenya",
    solution: "150 kld MBR Wastewater Treatment Plant",
    description: "Engineered and deployed a 150 cubic meters per day (150 kld) biological Membrane Bioreactor (MBR) plant to manage and recycle international school campus wastewater.",
    image: rosslynLogo
  },
  {
    name: "Kenya BioVax Institute (BioVax)",
    sector: "Pharmaceutical & Vaccine Manufacturing",
    location: "Embakasi, Nairobi, Kenya",
    solution: "Reverse Osmosis System",
    description: "Sized and installed a high-rejection Reverse Osmosis system supplying purified pharmaceutical-grade water for vaccine manufacturing and sterile formulation facilities.",
    image: biovaxLogo
  },
  {
    name: "Weetabix East Africa",
    sector: "Food & Beverage Manufacturing",
    location: "Nairobi, Kenya",
    solution: "C-MEM Wastewater Recycling System",
    description: "A cereal processing company utilizing an advanced C-MEM biological membrane filtration system to clean and recycle production process water, without conventional effluent treatment plants.",
    image: weetabixLogo
  },
  {
    name: "Lifecare Kenya",
    sector: "Healthcare & Medical Facilities",
    location: "Bungoma, Meru, Migori, Kikuyu, Eldoret",
    solution: "Operation & Maintenance Services",
    description: "Delivers comprehensive utility operation and maintenance (O&M) services, managing water treatment and chemical dosing setups at medical centers in Bungoma, Meru, Migori, Kikuyu, and Eldoret.",
    image: lifecareLogo
  },
  {
    name: "BBS Mall",
    sector: "Commercial Real Estate & Retail",
    location: "Eastleigh, Nairobi, Kenya",
    solution: "HVAC, 5,000 L/h RO & 8,000 L/h WTP",
    description: "Engineering and facility services managing a central HVAC climate control system, a 5,000 LPH Reverse Osmosis system, and an 8,000 LPH utility Water Treatment Plant (WTP).",
    image: bbsLogo
  }
];

// Client Testimonials
const clientReviews = [
  {
    quote: "Allianz Utilities designed and installed a high-purity water system that exceeds our stringent pharmaceutical guidelines. Their technical response is rapid and highly professional, ensuring our vaccine lines have consistent water quality.",
    company: "Kenya BioVax Institute",
    photo: biovaxLogo,
    rating: 5
  },
  {
    quote: "The biological wastewater plant handles our campus sewage load with zero odor, recycling water directly to our sports fields. It has lowered our water bill significantly and aligns perfectly with our campus sustainability goals.",
    company: "Sabis International School",
    photo: sabisLogo,
    rating: 5
  },
  {
    quote: "Their biological wastewater recycling solution was completed on schedule and integrates perfectly into our green campus initiative. The recycled water quality is excellent, allowing us to keep our landscaping green all year round.",
    company: "Rosslyn Academy",
    photo: rosslynLogo,
    rating: 5
  },
  {
    quote: "Retrofitting our biological basins with Allianz decreased our operating costs and restored complete NEMA compliance. Their team showed exceptional engineering knowledge and completed the upgrade with minimal downtime to production.",
    company: "Weetabix East Africa",
    photo: weetabixLogo,
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
                <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 mx-auto md:mx-0 overflow-hidden rounded-xl border border-black/5 bg-[var(--color-foam-2)]/30 flex items-center justify-center p-3 shadow-sm">
                  <img
                    src={r.photo}
                    alt={r.company}
                    className="max-w-full max-h-full object-contain"
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
                      {r.company}
                    </h4>
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
